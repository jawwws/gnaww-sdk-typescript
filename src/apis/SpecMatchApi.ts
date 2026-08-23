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
    type MatchPrintDemandRequest,
    MatchPrintDemandRequestFromJSON,
    MatchPrintDemandRequestToJSON,
} from '../models/MatchPrintDemandRequest';
import {
    type MatchPrintDemandResponse,
    MatchPrintDemandResponseFromJSON,
    MatchPrintDemandResponseToJSON,
} from '../models/MatchPrintDemandResponse';
import {
    type MatchPrintDemandUniverseRequest,
    MatchPrintDemandUniverseRequestFromJSON,
    MatchPrintDemandUniverseRequestToJSON,
} from '../models/MatchPrintDemandUniverseRequest';
import {
    type MatchPrintDemandUniverseResponse,
    MatchPrintDemandUniverseResponseFromJSON,
    MatchPrintDemandUniverseResponseToJSON,
} from '../models/MatchPrintDemandUniverseResponse';

export interface MatchPrintDemandOperationRequest {
    matchPrintDemandRequest: MatchPrintDemandRequest;
    xGnawwWorkspaceId?: string | null;
}

export interface MatchPrintDemandUniverseOperationRequest {
    matchPrintDemandUniverseRequest: MatchPrintDemandUniverseRequest;
    xGnawwWorkspaceId?: string | null;
}

/**
 *
 */
export class SpecMatchApi extends runtime.BaseAPI {

    /**
     * Creates request options for matchPrintDemand without sending the request
     */
    async matchPrintDemandRequestOpts(requestParameters: MatchPrintDemandOperationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['matchPrintDemandRequest'] == null) {
            throw new runtime.RequiredError(
                'matchPrintDemandRequest',
                'Required parameter "matchPrintDemandRequest" was null or undefined when calling matchPrintDemand().'
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


        let urlPath = `/v1/matches`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MatchPrintDemandRequestToJSON(requestParameters['matchPrintDemandRequest']),
        };
    }

    /**
     * Run deterministic SpecMatch for one explicit capability target.
     * Match Print Demand
     */
    async matchPrintDemandRaw(requestParameters: MatchPrintDemandOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MatchPrintDemandResponse>> {
        const requestOptions = await this.matchPrintDemandRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MatchPrintDemandResponseFromJSON(jsonValue));
    }

    /**
     * Run deterministic SpecMatch for one explicit capability target.
     * Match Print Demand
     */
    async matchPrintDemand(requestParameters: MatchPrintDemandOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MatchPrintDemandResponse> {
        const response = await this.matchPrintDemandRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for matchPrintDemandUniverse without sending the request
     */
    async matchPrintDemandUniverseRequestOpts(requestParameters: MatchPrintDemandUniverseOperationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['matchPrintDemandUniverseRequest'] == null) {
            throw new runtime.RequiredError(
                'matchPrintDemandUniverseRequest',
                'Required parameter "matchPrintDemandUniverseRequest" was null or undefined when calling matchPrintDemandUniverse().'
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


        let urlPath = `/v1/matches/universe`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MatchPrintDemandUniverseRequestToJSON(requestParameters['matchPrintDemandUniverseRequest']),
        };
    }

    /**
     * Evaluate demand against the authorised published producer universe.
     * Match Print Demand Universe
     */
    async matchPrintDemandUniverseRaw(requestParameters: MatchPrintDemandUniverseOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MatchPrintDemandUniverseResponse>> {
        const requestOptions = await this.matchPrintDemandUniverseRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MatchPrintDemandUniverseResponseFromJSON(jsonValue));
    }

    /**
     * Evaluate demand against the authorised published producer universe.
     * Match Print Demand Universe
     */
    async matchPrintDemandUniverse(requestParameters: MatchPrintDemandUniverseOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MatchPrintDemandUniverseResponse> {
        const response = await this.matchPrintDemandUniverseRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
