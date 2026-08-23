/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
    type MatchPrintDemandDefaultResponse,
    MatchPrintDemandDefaultResponseFromJSON,
    MatchPrintDemandDefaultResponseToJSON,
} from '../models/MatchPrintDemandDefaultResponse';
import {
    type MatchRecipeRequest,
    MatchRecipeRequestFromJSON,
    MatchRecipeRequestToJSON,
} from '../models/MatchRecipeRequest';
import {
    type MatchRecipeResponse,
    MatchRecipeResponseFromJSON,
    MatchRecipeResponseToJSON,
} from '../models/MatchRecipeResponse';
import {
    type RecipeResource,
    RecipeResourceFromJSON,
    RecipeResourceToJSON,
} from '../models/RecipeResource';
import {
    type ResolveRecipeRequest,
    ResolveRecipeRequestFromJSON,
    ResolveRecipeRequestToJSON,
} from '../models/ResolveRecipeRequest';
import {
    type ResolveRecipeResponse,
    ResolveRecipeResponseFromJSON,
    ResolveRecipeResponseToJSON,
} from '../models/ResolveRecipeResponse';

export interface GetRecipeRequest {
    recipeId: string;
    xGnawwWorkspaceId?: string | null;
}

export interface MatchRecipeOperationRequest {
    recipeId: string;
    matchRecipeRequest: MatchRecipeRequest;
    xGnawwWorkspaceId?: string | null;
}

export interface ResolveRecipeOperationRequest {
    resolveRecipeRequest: ResolveRecipeRequest;
    xGnawwWorkspaceId?: string | null;
}

/**
 *
 */
export class RecipesApi extends runtime.BaseAPI {

    /**
     * Creates request options for getRecipe without sending the request
     */
    async getRecipeRequestOpts(requestParameters: GetRecipeRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['recipeId'] == null) {
            throw new runtime.RequiredError(
                'recipeId',
                'Required parameter "recipeId" was null or undefined when calling getRecipe().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xGnawwWorkspaceId'] != null) {
            headerParameters['X-Gnaww-Workspace-Id'] = String(requestParameters['xGnawwWorkspaceId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Gnaww-API-Key"] = await this.configuration.apiKey("X-Gnaww-API-Key"); // GnawwApiKey authentication
        }


        let urlPath = `/v1/recipes/{recipe_id}`;
        urlPath = urlPath.replace('{recipe_id}', encodeURIComponent(String(requestParameters['recipeId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Read the safe canonical physical definition for one Recipe ID.
     * Get Recipe
     */
    async getRecipeRaw(requestParameters: GetRecipeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecipeResource>> {
        const requestOptions = await this.getRecipeRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecipeResourceFromJSON(jsonValue));
    }

    /**
     * Read the safe canonical physical definition for one Recipe ID.
     * Get Recipe
     */
    async getRecipe(requestParameters: GetRecipeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecipeResource> {
        const response = await this.getRecipeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for matchRecipe without sending the request
     */
    async matchRecipeRequestOpts(requestParameters: MatchRecipeOperationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['recipeId'] == null) {
            throw new runtime.RequiredError(
                'recipeId',
                'Required parameter "recipeId" was null or undefined when calling matchRecipe().'
            );
        }

        if (requestParameters['matchRecipeRequest'] == null) {
            throw new runtime.RequiredError(
                'matchRecipeRequest',
                'Required parameter "matchRecipeRequest" was null or undefined when calling matchRecipe().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xGnawwWorkspaceId'] != null) {
            headerParameters['X-Gnaww-Workspace-Id'] = String(requestParameters['xGnawwWorkspaceId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Gnaww-API-Key"] = await this.configuration.apiKey("X-Gnaww-API-Key"); // GnawwApiKey authentication
        }


        let urlPath = `/v1/recipes/{recipe_id}/matches`;
        urlPath = urlPath.replace('{recipe_id}', encodeURIComponent(String(requestParameters['recipeId'])));

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MatchRecipeRequestToJSON(requestParameters['matchRecipeRequest']),
        };
    }

    /**
     * Run deterministic SpecMatch from one persisted Recipe plus run context.
     * Match Recipe
     */
    async matchRecipeRaw(requestParameters: MatchRecipeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MatchRecipeResponse>> {
        const requestOptions = await this.matchRecipeRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MatchRecipeResponseFromJSON(jsonValue));
    }

    /**
     * Run deterministic SpecMatch from one persisted Recipe plus run context.
     * Match Recipe
     */
    async matchRecipe(requestParameters: MatchRecipeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MatchRecipeResponse> {
        const response = await this.matchRecipeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for resolveRecipe without sending the request
     */
    async resolveRecipeRequestOpts(requestParameters: ResolveRecipeOperationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['resolveRecipeRequest'] == null) {
            throw new runtime.RequiredError(
                'resolveRecipeRequest',
                'Required parameter "resolveRecipeRequest" was null or undefined when calling resolveRecipe().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xGnawwWorkspaceId'] != null) {
            headerParameters['X-Gnaww-Workspace-Id'] = String(requestParameters['xGnawwWorkspaceId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Gnaww-API-Key"] = await this.configuration.apiKey("X-Gnaww-API-Key"); // GnawwApiKey authentication
        }


        let urlPath = `/v1/recipes`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ResolveRecipeRequestToJSON(requestParameters['resolveRecipeRequest']),
        };
    }

    /**
     * Resolve one exact canonical GJS to its immutable Recipe resource.
     * Resolve Recipe
     */
    async resolveRecipeRaw(requestParameters: ResolveRecipeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResolveRecipeResponse>> {
        const requestOptions = await this.resolveRecipeRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResolveRecipeResponseFromJSON(jsonValue));
    }

    /**
     * Resolve one exact canonical GJS to its immutable Recipe resource.
     * Resolve Recipe
     */
    async resolveRecipe(requestParameters: ResolveRecipeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResolveRecipeResponse> {
        const response = await this.resolveRecipeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
