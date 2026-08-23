/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import * as runtime from '../runtime';
import { type TransformRequest } from '../models/TransformRequest';
import { type TransformResponse } from '../models/TransformResponse';
export interface TransformPrintRequirementRequest {
    transformRequest: TransformRequest;
    xGnawwWorkspaceId?: string | null;
}
/**
 *
 */
export declare class TransformApi extends runtime.BaseAPI {
    /**
     * Creates request options for transformPrintRequirement without sending the request
     */
    transformPrintRequirementRequestOpts(requestParameters: TransformPrintRequirementRequest): Promise<runtime.RequestOpts>;
    /**
     * Transform a source print requirement into a canonical print job specification.
     * Transform
     */
    transformPrintRequirementRaw(requestParameters: TransformPrintRequirementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransformResponse>>;
    /**
     * Transform a source print requirement into a canonical print job specification.
     * Transform
     */
    transformPrintRequirement(requestParameters: TransformPrintRequirementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransformResponse>;
}
