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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
import { MatchRecipeRequestToJSON, } from '../models/MatchRecipeRequest';
import { MatchRecipeResponseFromJSON, } from '../models/MatchRecipeResponse';
import { RecipeResourceFromJSON, } from '../models/RecipeResource';
import { ResolveRecipeRequestToJSON, } from '../models/ResolveRecipeRequest';
import { ResolveRecipeResponseFromJSON, } from '../models/ResolveRecipeResponse';
/**
 *
 */
export class RecipesApi extends runtime.BaseAPI {
    /**
     * Creates request options for getRecipe without sending the request
     */
    getRecipeRequestOpts(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['recipeId'] == null) {
                throw new runtime.RequiredError('recipeId', 'Required parameter "recipeId" was null or undefined when calling getRecipe().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (requestParameters['xGnawwWorkspaceId'] != null) {
                headerParameters['X-Gnaww-Workspace-Id'] = String(requestParameters['xGnawwWorkspaceId']);
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-Gnaww-API-Key"] = yield this.configuration.apiKey("X-Gnaww-API-Key"); // GnawwApiKey authentication
            }
            let urlPath = `/v1/recipes/{recipe_id}`;
            urlPath = urlPath.replace('{recipe_id}', encodeURIComponent(String(requestParameters['recipeId'])));
            return {
                path: urlPath,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            };
        });
    }
    /**
     * Read the safe canonical physical definition for one Recipe ID.
     * Get Recipe
     */
    getRecipeRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield this.getRecipeRequestOpts(requestParameters);
            const response = yield this.request(requestOptions, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => RecipeResourceFromJSON(jsonValue));
        });
    }
    /**
     * Read the safe canonical physical definition for one Recipe ID.
     * Get Recipe
     */
    getRecipe(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getRecipeRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Creates request options for matchRecipe without sending the request
     */
    matchRecipeRequestOpts(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['recipeId'] == null) {
                throw new runtime.RequiredError('recipeId', 'Required parameter "recipeId" was null or undefined when calling matchRecipe().');
            }
            if (requestParameters['matchRecipeRequest'] == null) {
                throw new runtime.RequiredError('matchRecipeRequest', 'Required parameter "matchRecipeRequest" was null or undefined when calling matchRecipe().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (requestParameters['xGnawwWorkspaceId'] != null) {
                headerParameters['X-Gnaww-Workspace-Id'] = String(requestParameters['xGnawwWorkspaceId']);
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-Gnaww-API-Key"] = yield this.configuration.apiKey("X-Gnaww-API-Key"); // GnawwApiKey authentication
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
        });
    }
    /**
     * Run deterministic SpecMatch from one persisted Recipe plus run context.
     * Match Recipe
     */
    matchRecipeRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield this.matchRecipeRequestOpts(requestParameters);
            const response = yield this.request(requestOptions, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => MatchRecipeResponseFromJSON(jsonValue));
        });
    }
    /**
     * Run deterministic SpecMatch from one persisted Recipe plus run context.
     * Match Recipe
     */
    matchRecipe(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.matchRecipeRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Creates request options for resolveRecipe without sending the request
     */
    resolveRecipeRequestOpts(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['resolveRecipeRequest'] == null) {
                throw new runtime.RequiredError('resolveRecipeRequest', 'Required parameter "resolveRecipeRequest" was null or undefined when calling resolveRecipe().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (requestParameters['xGnawwWorkspaceId'] != null) {
                headerParameters['X-Gnaww-Workspace-Id'] = String(requestParameters['xGnawwWorkspaceId']);
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-Gnaww-API-Key"] = yield this.configuration.apiKey("X-Gnaww-API-Key"); // GnawwApiKey authentication
            }
            let urlPath = `/v1/recipes`;
            return {
                path: urlPath,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ResolveRecipeRequestToJSON(requestParameters['resolveRecipeRequest']),
            };
        });
    }
    /**
     * Resolve one exact canonical GJS to its immutable Recipe resource.
     * Resolve Recipe
     */
    resolveRecipeRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield this.resolveRecipeRequestOpts(requestParameters);
            const response = yield this.request(requestOptions, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ResolveRecipeResponseFromJSON(jsonValue));
        });
    }
    /**
     * Resolve one exact canonical GJS to its immutable Recipe resource.
     * Resolve Recipe
     */
    resolveRecipe(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.resolveRecipeRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
