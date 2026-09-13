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

import * as runtime from '../runtime';
import {
    type CreateSpecificationRequest,
    CreateSpecificationRequestFromJSON,
    CreateSpecificationRequestToJSON,
} from '../models/CreateSpecificationRequest';
import {
    type CreateSpecificationResponse,
    CreateSpecificationResponseFromJSON,
    CreateSpecificationResponseToJSON,
} from '../models/CreateSpecificationResponse';
import {
    type MatchPrintDemandDefaultResponse,
    MatchPrintDemandDefaultResponseFromJSON,
    MatchPrintDemandDefaultResponseToJSON,
} from '../models/MatchPrintDemandDefaultResponse';
import {
    type SpecificationResource,
    SpecificationResourceFromJSON,
    SpecificationResourceToJSON,
} from '../models/SpecificationResource';

export interface CreateSpecificationOperationRequest {
    createSpecificationRequest: CreateSpecificationRequest;
    xGnawwWorkspaceId?: string | null;
}

export interface GetSpecificationRequest {
    specificationId: string;
    xGnawwWorkspaceId?: string | null;
}

/**
 *
 */
export class SpecificationsApi extends runtime.BaseAPI {

    /**
     * Creates request options for createSpecification without sending the request
     */
    async createSpecificationRequestOpts(requestParameters: CreateSpecificationOperationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['createSpecificationRequest'] == null) {
            throw new runtime.RequiredError(
                'createSpecificationRequest',
                'Required parameter "createSpecificationRequest" was null or undefined when calling createSpecification().'
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


        let urlPath = `/v1/specifications`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateSpecificationRequestToJSON(requestParameters['createSpecificationRequest']),
        };
    }

    /**
     * Explicitly retain one completed canonical Gnaww Job Specification.
     * Create Specification
     */
    async createSpecificationRaw(requestParameters: CreateSpecificationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateSpecificationResponse>> {
        const requestOptions = await this.createSpecificationRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateSpecificationResponseFromJSON(jsonValue));
    }

    /**
     * Explicitly retain one completed canonical Gnaww Job Specification.
     * Create Specification
     */
    async createSpecification(requestParameters: CreateSpecificationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateSpecificationResponse> {
        const response = await this.createSpecificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getSpecification without sending the request
     */
    async getSpecificationRequestOpts(requestParameters: GetSpecificationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['specificationId'] == null) {
            throw new runtime.RequiredError(
                'specificationId',
                'Required parameter "specificationId" was null or undefined when calling getSpecification().'
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


        let urlPath = `/v1/specifications/{specification_id}`;
        urlPath = urlPath.replace('{specification_id}', encodeURIComponent(String(requestParameters['specificationId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Read one safe specification resource visible to the request context.
     * Get Specification
     */
    async getSpecificationRaw(requestParameters: GetSpecificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SpecificationResource>> {
        const requestOptions = await this.getSpecificationRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SpecificationResourceFromJSON(jsonValue));
    }

    /**
     * Read one safe specification resource visible to the request context.
     * Get Specification
     */
    async getSpecification(requestParameters: GetSpecificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SpecificationResource> {
        const response = await this.getSpecificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
