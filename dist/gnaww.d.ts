import { type FetchAPI } from "./runtime";
import type { InterpretPrintRequirementResponse, MatchRecipeResponse, PrintJobSpecification, PrintJobSpecificationV04, PublicMatchTargetRequest, RecipeResource, ResolveRecipeResponse } from "./models";
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
export declare class GnawwApiError extends Error {
    readonly error: GnawwPublicError;
    constructor(error: GnawwPublicError);
}
export interface CrunchOptions {
    quantity: number;
    target: PublicMatchTargetRequest;
}
export type CanonicalGjs = PrintJobSpecification | PrintJobSpecificationV04;
export declare class GnawwClient {
    private readonly interpretation;
    private readonly recipes;
    constructor(options: GnawwClientOptions);
    consume(requirement: string): Promise<InterpretPrintRequirementResponse>;
    consumeDetailed(requirement: string): Promise<GnawwResponse<InterpretPrintRequirementResponse>>;
    getRecipe(recipeId: string): Promise<RecipeResource>;
    getRecipeDetailed(recipeId: string): Promise<GnawwResponse<RecipeResource>>;
    resolveRecipe(gjs: CanonicalGjs): Promise<ResolveRecipeResponse>;
    resolveRecipeDetailed(gjs: CanonicalGjs): Promise<GnawwResponse<ResolveRecipeResponse>>;
    crunch(recipeId: string, options: CrunchOptions): Promise<MatchRecipeResponse>;
    crunchDetailed(recipeId: string, options: CrunchOptions): Promise<GnawwResponse<MatchRecipeResponse>>;
    private detailed;
}
