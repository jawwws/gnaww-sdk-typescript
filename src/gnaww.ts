import {
  Configuration,
  ResponseError,
  type ApiResponse,
  type FetchAPI,
} from "./runtime";
import { InterpretationApi, RecipesApi } from "./apis";
import type {
  InterpretationResultV02,
  MatchRecipeResponse,
  PrintJobSpecification,
  PrintJobSpecificationV04,
  PublicMatchTargetRequest,
  RecipeResource,
  ResolveRecipeResponse,
  SourceInput,
} from "./models";

export interface GnawwClientOptions {
  apiKey: string;
  baseUrl?: string;
  workspaceId?: string;
  fetchApi?: FetchAPI;
}

export interface GnawwResponse<T> {
  data: T;
  status: number;
  requestId?: string;
  correlationId?: string;
}

export interface GnawwPublicError {
  code: string;
  message: string;
  status: number;
  requestId?: string;
  correlationId?: string;
  retryable: boolean;
}

export class GnawwApiError extends Error {
  readonly error: GnawwPublicError;

  constructor(error: GnawwPublicError) {
    super(error.message);
    this.name = "GnawwApiError";
    this.error = error;
  }
}

export interface CrunchOptions {
  quantity: number;
  target: PublicMatchTargetRequest;
}

export interface GnawwClarificationAnswer {
  questionId: string;
  value: string;
}

export type CanonicalGjs = PrintJobSpecification | PrintJobSpecificationV04;

export class GnawwClient {
  private readonly interpretation: InterpretationApi;
  private readonly recipes: RecipesApi;

  constructor(options: GnawwClientOptions) {
    const headers: Record<string, string> = {
      "X-Gnaww-Source-Channel": "sdk",
      "X-Gnaww-Client-Id": "gnaww-typescript-sdk",
    };
    if (options.workspaceId) {
      headers["X-Gnaww-Workspace-Id"] = options.workspaceId;
    }

    const configuration = new Configuration({
      basePath: (options.baseUrl ?? "https://api.gnaww.io").replace(/\/+$/, ""),
      apiKey: options.apiKey,
      headers,
      fetchApi: options.fetchApi,
    });

    this.interpretation = new InterpretationApi(configuration);
    this.recipes = new RecipesApi(configuration);
  }

  async consume(requirement: string): Promise<InterpretationResultV02> {
    return (await this.consumeDetailed(requirement)).data;
  }

  async consumeDetailed(
    requirement: string,
  ): Promise<GnawwResponse<InterpretationResultV02>> {
    const source: SourceInput = {
      type: "natural_language",
      rawText: requirement,
    };

    return this.detailed(() =>
      this.interpretation.interpretPrintRequirementRaw({
        interpretPrintRequirementRequest: {
          source,
          gjsVersion: "0.4",
        },
      }),
    );
  }

  async continueRequirement(
    requirement: string,
    answers: GnawwClarificationAnswer[],
  ): Promise<InterpretationResultV02> {
    return (await this.continueRequirementDetailed(requirement, answers)).data;
  }

  async continueRequirementDetailed(
    requirement: string,
    answers: GnawwClarificationAnswer[],
  ): Promise<GnawwResponse<InterpretationResultV02>> {
    const source: SourceInput = {
      type: "natural_language",
      rawText: requirement,
    };

    return this.detailed(() =>
      this.interpretation.continuePrintRequirementInterpretationRaw({
        continueInterpretationRequestV02: {
          source,
          gjsVersion: "0.4",
          answers,
        },
      }),
    );
  }

  async getRecipe(recipeId: string): Promise<RecipeResource> {
    return (await this.getRecipeDetailed(recipeId)).data;
  }

  async getRecipeDetailed(
    recipeId: string,
  ): Promise<GnawwResponse<RecipeResource>> {
    return this.detailed(() =>
      this.recipes.getRecipeRaw({
        recipeId,
      }),
    );
  }

  async resolveRecipe(gjs: CanonicalGjs): Promise<ResolveRecipeResponse> {
    return (await this.resolveRecipeDetailed(gjs)).data;
  }

  async resolveRecipeDetailed(
    gjs: CanonicalGjs,
  ): Promise<GnawwResponse<ResolveRecipeResponse>> {
    return this.detailed(() =>
      this.recipes.resolveRecipeRaw({
        resolveRecipeRequest: {
          gjs,
        },
      }),
    );
  }

  async crunch(
    recipeId: string,
    options: CrunchOptions,
  ): Promise<MatchRecipeResponse> {
    return (await this.crunchDetailed(recipeId, options)).data;
  }

  async crunchDetailed(
    recipeId: string,
    options: CrunchOptions,
  ): Promise<GnawwResponse<MatchRecipeResponse>> {
    return this.detailed(() =>
      this.recipes.matchRecipeRaw({
        recipeId,
        matchRecipeRequest: {
          quantity: options.quantity,
          target: options.target,
        },
      }),
    );
  }

  private async detailed<T>(
    call: () => Promise<ApiResponse<T>>,
  ): Promise<GnawwResponse<T>> {
    try {
      const response = await call();
      return {
        data: await response.value(),
        status: response.raw.status,
        requestId: response.raw.headers.get("X-Request-Id") ?? undefined,
        correlationId:
          response.raw.headers.get("X-Correlation-Id") ?? undefined,
      };
    } catch (error) {
      if (error instanceof ResponseError) {
        throw new GnawwApiError(await publicErrorFromResponse(error.response));
      }
      throw error;
    }
  }
}

async function publicErrorFromResponse(
  response: Response,
): Promise<GnawwPublicError> {
  let decoded: unknown;
  try {
    decoded = await response.clone().json();
  } catch {
    decoded = undefined;
  }

  if (
    typeof decoded === "object" &&
    decoded !== null &&
    "error" in decoded &&
    typeof decoded.error === "object" &&
    decoded.error !== null
  ) {
    const publicError = decoded.error as Record<string, unknown>;
    return {
      code: stringValue(publicError.code, "api_error"),
      message: stringValue(
        publicError.message,
        "Gnaww rejected the developer API request.",
      ),
      status: numberValue(publicError.status, response.status),
      requestId:
        optionalString(publicError.request_id) ??
        response.headers.get("X-Request-Id") ??
        undefined,
      correlationId:
        optionalString(publicError.correlation_id) ??
        response.headers.get("X-Correlation-Id") ??
        undefined,
      retryable: booleanValue(publicError.retryable, false),
    };
  }

  return {
    code: "api_error",
    message: "Gnaww rejected the developer API request.",
    status: response.status,
    requestId: response.headers.get("X-Request-Id") ?? undefined,
    correlationId:
      response.headers.get("X-Correlation-Id") ?? undefined,
    retryable: false,
  };
}

function stringValue(value: unknown, fallback: string): string {
  return typeof value === "string" ? value : fallback;
}

function optionalString(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

function numberValue(value: unknown, fallback: number): number {
  return typeof value === "number" ? value : fallback;
}

function booleanValue(value: unknown, fallback: boolean): boolean {
  return typeof value === "boolean" ? value : fallback;
}
