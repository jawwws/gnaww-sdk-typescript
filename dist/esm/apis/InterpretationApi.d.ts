/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import * as runtime from '../runtime';
import { type ContinuePrintRequirementRequest } from '../models/ContinuePrintRequirementRequest';
import { type ContinuePrintRequirementResponse } from '../models/ContinuePrintRequirementResponse';
import { type InterpretPrintRequirementRequest } from '../models/InterpretPrintRequirementRequest';
import { type InterpretPrintRequirementResponse } from '../models/InterpretPrintRequirementResponse';
export interface ContinuePrintRequirementInterpretationRequest {
    continuePrintRequirementRequest: ContinuePrintRequirementRequest;
    xGnawwWorkspaceId?: string | null;
}
export interface InterpretPrintRequirementOperationRequest {
    interpretPrintRequirementRequest: InterpretPrintRequirementRequest;
    xGnawwWorkspaceId?: string | null;
}
/**
 *
 */
export declare class InterpretationApi extends runtime.BaseAPI {
    /**
     * Creates request options for continuePrintRequirementInterpretation without sending the request
     */
    continuePrintRequirementInterpretationRequestOpts(requestParameters: ContinuePrintRequirementInterpretationRequest): Promise<runtime.RequestOpts>;
    /**
     * Continue a review state through Gnaww-owned production questions.
     * Continue Print Requirement Interpretation
     */
    continuePrintRequirementInterpretationRaw(requestParameters: ContinuePrintRequirementInterpretationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContinuePrintRequirementResponse>>;
    /**
     * Continue a review state through Gnaww-owned production questions.
     * Continue Print Requirement Interpretation
     */
    continuePrintRequirementInterpretation(requestParameters: ContinuePrintRequirementInterpretationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContinuePrintRequirementResponse>;
    /**
     * Creates request options for interpretPrintRequirement without sending the request
     */
    interpretPrintRequirementRequestOpts(requestParameters: InterpretPrintRequirementOperationRequest): Promise<runtime.RequestOpts>;
    /**
     * Interpret ordinary input without forcing review states into SpecMatch.
     * Interpret Print Requirement
     */
    interpretPrintRequirementRaw(requestParameters: InterpretPrintRequirementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InterpretPrintRequirementResponse>>;
    /**
     * Interpret ordinary input without forcing review states into SpecMatch.
     * Interpret Print Requirement
     */
    interpretPrintRequirement(requestParameters: InterpretPrintRequirementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InterpretPrintRequirementResponse>;
}
