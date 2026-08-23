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
    type HealthResponse,
    HealthResponseFromJSON,
    HealthResponseToJSON,
} from '../models/HealthResponse';

/**
 *
 */
export class HealthApi extends runtime.BaseAPI {

    /**
     * Creates request options for getApiLiveness without sending the request
     */
    async getApiLivenessRequestOpts(): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        let urlPath = `/health/live`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Return process liveness without probing downstream dependencies.
     * Liveness
     */
    async getApiLivenessRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthResponse>> {
        const requestOptions = await this.getApiLivenessRequestOpts();
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HealthResponseFromJSON(jsonValue));
    }

    /**
     * Return process liveness without probing downstream dependencies.
     * Liveness
     */
    async getApiLiveness(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthResponse> {
        const response = await this.getApiLivenessRaw(initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for getApiReadiness without sending the request
     */
    async getApiReadinessRequestOpts(): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        let urlPath = `/health/ready`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Return whether this instance can receive routed traffic.
     * Readiness
     */
    async getApiReadinessRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthResponse>> {
        const requestOptions = await this.getApiReadinessRequestOpts();
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HealthResponseFromJSON(jsonValue));
    }

    /**
     * Return whether this instance can receive routed traffic.
     * Readiness
     */
    async getApiReadiness(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthResponse> {
        const response = await this.getApiReadinessRaw(initOverrides);
        return await response.value();
    }

}
