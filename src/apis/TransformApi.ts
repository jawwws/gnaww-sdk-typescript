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
    type MatchPrintDemandDefaultResponse,
    MatchPrintDemandDefaultResponseFromJSON,
    MatchPrintDemandDefaultResponseToJSON,
} from '../models/MatchPrintDemandDefaultResponse';
import {
    type TransformRequest,
    TransformRequestFromJSON,
    TransformRequestToJSON,
} from '../models/TransformRequest';
import {
    type TransformResponse,
    TransformResponseFromJSON,
    TransformResponseToJSON,
} from '../models/TransformResponse';

export interface TransformPrintRequirementRequest {
    transformRequest: TransformRequest;
    xGnawwWorkspaceId?: string | null;
}

/**
 *
 */
export class TransformApi extends runtime.BaseAPI {

    /**
     * Creates request options for transformPrintRequirement without sending the request
     */
    async transformPrintRequirementRequestOpts(requestParameters: TransformPrintRequirementRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['transformRequest'] == null) {
            throw new runtime.RequiredError(
                'transformRequest',
                'Required parameter "transformRequest" was null or undefined when calling transformPrintRequirement().'
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


        let urlPath = `/v1/transform`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransformRequestToJSON(requestParameters['transformRequest']),
        };
    }

    /**
     * Transform a source print requirement into a canonical print job specification.
     * Transform
     */
    async transformPrintRequirementRaw(requestParameters: TransformPrintRequirementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransformResponse>> {
        const requestOptions = await this.transformPrintRequirementRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransformResponseFromJSON(jsonValue));
    }

    /**
     * Transform a source print requirement into a canonical print job specification.
     * Transform
     */
    async transformPrintRequirement(requestParameters: TransformPrintRequirementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransformResponse> {
        const response = await this.transformPrintRequirementRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
