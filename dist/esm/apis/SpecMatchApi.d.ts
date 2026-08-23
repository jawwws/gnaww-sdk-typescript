/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import * as runtime from '../runtime';
import { type MatchPrintDemandRequest } from '../models/MatchPrintDemandRequest';
import { type MatchPrintDemandResponse } from '../models/MatchPrintDemandResponse';
import { type MatchPrintDemandUniverseRequest } from '../models/MatchPrintDemandUniverseRequest';
import { type MatchPrintDemandUniverseResponse } from '../models/MatchPrintDemandUniverseResponse';
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
export declare class SpecMatchApi extends runtime.BaseAPI {
    /**
     * Creates request options for matchPrintDemand without sending the request
     */
    matchPrintDemandRequestOpts(requestParameters: MatchPrintDemandOperationRequest): Promise<runtime.RequestOpts>;
    /**
     * Run deterministic SpecMatch for one explicit capability target.
     * Match Print Demand
     */
    matchPrintDemandRaw(requestParameters: MatchPrintDemandOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MatchPrintDemandResponse>>;
    /**
     * Run deterministic SpecMatch for one explicit capability target.
     * Match Print Demand
     */
    matchPrintDemand(requestParameters: MatchPrintDemandOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MatchPrintDemandResponse>;
    /**
     * Creates request options for matchPrintDemandUniverse without sending the request
     */
    matchPrintDemandUniverseRequestOpts(requestParameters: MatchPrintDemandUniverseOperationRequest): Promise<runtime.RequestOpts>;
    /**
     * Evaluate demand against the authorised published producer universe.
     * Match Print Demand Universe
     */
    matchPrintDemandUniverseRaw(requestParameters: MatchPrintDemandUniverseOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MatchPrintDemandUniverseResponse>>;
    /**
     * Evaluate demand against the authorised published producer universe.
     * Match Print Demand Universe
     */
    matchPrintDemandUniverse(requestParameters: MatchPrintDemandUniverseOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MatchPrintDemandUniverseResponse>;
}
