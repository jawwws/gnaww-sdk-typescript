/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import * as runtime from '../runtime';
import { type HealthResponse } from '../models/HealthResponse';
/**
 *
 */
export declare class HealthApi extends runtime.BaseAPI {
    /**
     * Creates request options for getApiLiveness without sending the request
     */
    getApiLivenessRequestOpts(): Promise<runtime.RequestOpts>;
    /**
     * Return process liveness without probing downstream dependencies.
     * Liveness
     */
    getApiLivenessRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthResponse>>;
    /**
     * Return process liveness without probing downstream dependencies.
     * Liveness
     */
    getApiLiveness(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthResponse>;
    /**
     * Creates request options for getApiReadiness without sending the request
     */
    getApiReadinessRequestOpts(): Promise<runtime.RequestOpts>;
    /**
     * Return whether this instance can receive routed traffic.
     * Readiness
     */
    getApiReadinessRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthResponse>>;
    /**
     * Return whether this instance can receive routed traffic.
     * Readiness
     */
    getApiReadiness(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthResponse>;
}
