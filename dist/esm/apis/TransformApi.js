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
import { TransformRequestToJSON, } from '../models/TransformRequest';
import { TransformResponseFromJSON, } from '../models/TransformResponse';
/**
 *
 */
export class TransformApi extends runtime.BaseAPI {
    /**
     * Creates request options for transformPrintRequirement without sending the request
     */
    transformPrintRequirementRequestOpts(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['transformRequest'] == null) {
                throw new runtime.RequiredError('transformRequest', 'Required parameter "transformRequest" was null or undefined when calling transformPrintRequirement().');
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
            let urlPath = `/v1/transform`;
            return {
                path: urlPath,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: TransformRequestToJSON(requestParameters['transformRequest']),
            };
        });
    }
    /**
     * Transform a source print requirement into a canonical print job specification.
     * Transform
     */
    transformPrintRequirementRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield this.transformPrintRequirementRequestOpts(requestParameters);
            const response = yield this.request(requestOptions, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => TransformResponseFromJSON(jsonValue));
        });
    }
    /**
     * Transform a source print requirement into a canonical print job specification.
     * Transform
     */
    transformPrintRequirement(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.transformPrintRequirementRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
