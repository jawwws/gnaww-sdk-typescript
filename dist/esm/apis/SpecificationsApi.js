/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
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
import { CreateSpecificationRequestToJSON, } from '../models/CreateSpecificationRequest';
import { CreateSpecificationResponseFromJSON, } from '../models/CreateSpecificationResponse';
import { SpecificationResourceFromJSON, } from '../models/SpecificationResource';
/**
 *
 */
export class SpecificationsApi extends runtime.BaseAPI {
    /**
     * Creates request options for createSpecification without sending the request
     */
    createSpecificationRequestOpts(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['createSpecificationRequest'] == null) {
                throw new runtime.RequiredError('createSpecificationRequest', 'Required parameter "createSpecificationRequest" was null or undefined when calling createSpecification().');
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
            let urlPath = `/v1/specifications`;
            return {
                path: urlPath,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateSpecificationRequestToJSON(requestParameters['createSpecificationRequest']),
            };
        });
    }
    /**
     * Explicitly retain one completed canonical Gnaww Job Specification.
     * Create Specification
     */
    createSpecificationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield this.createSpecificationRequestOpts(requestParameters);
            const response = yield this.request(requestOptions, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateSpecificationResponseFromJSON(jsonValue));
        });
    }
    /**
     * Explicitly retain one completed canonical Gnaww Job Specification.
     * Create Specification
     */
    createSpecification(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createSpecificationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Creates request options for getSpecification without sending the request
     */
    getSpecificationRequestOpts(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['specificationId'] == null) {
                throw new runtime.RequiredError('specificationId', 'Required parameter "specificationId" was null or undefined when calling getSpecification().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (requestParameters['xGnawwWorkspaceId'] != null) {
                headerParameters['X-Gnaww-Workspace-Id'] = String(requestParameters['xGnawwWorkspaceId']);
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-Gnaww-API-Key"] = yield this.configuration.apiKey("X-Gnaww-API-Key"); // GnawwApiKey authentication
            }
            let urlPath = `/v1/specifications/{specification_id}`;
            urlPath = urlPath.replace('{specification_id}', encodeURIComponent(String(requestParameters['specificationId'])));
            return {
                path: urlPath,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            };
        });
    }
    /**
     * Read one safe specification resource visible to the request context.
     * Get Specification
     */
    getSpecificationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield this.getSpecificationRequestOpts(requestParameters);
            const response = yield this.request(requestOptions, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => SpecificationResourceFromJSON(jsonValue));
        });
    }
    /**
     * Read one safe specification resource visible to the request context.
     * Get Specification
     */
    getSpecification(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSpecificationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
