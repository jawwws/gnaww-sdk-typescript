/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import * as runtime from '../runtime';
import { type MatchRecipeRequest } from '../models/MatchRecipeRequest';
import { type MatchRecipeResponse } from '../models/MatchRecipeResponse';
import { type RecipeResource } from '../models/RecipeResource';
import { type ResolveRecipeRequest } from '../models/ResolveRecipeRequest';
import { type ResolveRecipeResponse } from '../models/ResolveRecipeResponse';
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
export declare class RecipesApi extends runtime.BaseAPI {
    /**
     * Creates request options for getRecipe without sending the request
     */
    getRecipeRequestOpts(requestParameters: GetRecipeRequest): Promise<runtime.RequestOpts>;
    /**
     * Read the safe canonical physical definition for one Recipe ID.
     * Get Recipe
     */
    getRecipeRaw(requestParameters: GetRecipeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecipeResource>>;
    /**
     * Read the safe canonical physical definition for one Recipe ID.
     * Get Recipe
     */
    getRecipe(requestParameters: GetRecipeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecipeResource>;
    /**
     * Creates request options for matchRecipe without sending the request
     */
    matchRecipeRequestOpts(requestParameters: MatchRecipeOperationRequest): Promise<runtime.RequestOpts>;
    /**
     * Run deterministic SpecMatch from one persisted Recipe plus run context.
     * Match Recipe
     */
    matchRecipeRaw(requestParameters: MatchRecipeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MatchRecipeResponse>>;
    /**
     * Run deterministic SpecMatch from one persisted Recipe plus run context.
     * Match Recipe
     */
    matchRecipe(requestParameters: MatchRecipeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MatchRecipeResponse>;
    /**
     * Creates request options for resolveRecipe without sending the request
     */
    resolveRecipeRequestOpts(requestParameters: ResolveRecipeOperationRequest): Promise<runtime.RequestOpts>;
    /**
     * Resolve one exact canonical GJS to its immutable Recipe resource.
     * Resolve Recipe
     */
    resolveRecipeRaw(requestParameters: ResolveRecipeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResolveRecipeResponse>>;
    /**
     * Resolve one exact canonical GJS to its immutable Recipe resource.
     * Resolve Recipe
     */
    resolveRecipe(requestParameters: ResolveRecipeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResolveRecipeResponse>;
}
