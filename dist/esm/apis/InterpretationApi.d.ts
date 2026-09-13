/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import * as runtime from '../runtime';
import { type ContinueInterpretationRequestV02 } from '../models/ContinueInterpretationRequestV02';
import { type InterpretPrintRequirementRequest } from '../models/InterpretPrintRequirementRequest';
import { type InterpretationResultV02 } from '../models/InterpretationResultV02';
export interface ContinuePrintRequirementInterpretationRequest {
    continueInterpretationRequestV02: ContinueInterpretationRequestV02;
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
     * Continue a review state and return the same interpretation envelope.
     * Continue Print Requirement Interpretation
     */
    continuePrintRequirementInterpretationRaw(requestParameters: ContinuePrintRequirementInterpretationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InterpretationResultV02>>;
    /**
     * Continue a review state and return the same interpretation envelope.
     * Continue Print Requirement Interpretation
     */
    continuePrintRequirementInterpretation(requestParameters: ContinuePrintRequirementInterpretationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InterpretationResultV02>;
    /**
     * Creates request options for interpretPrintRequirement without sending the request
     */
    interpretPrintRequirementRequestOpts(requestParameters: InterpretPrintRequirementOperationRequest): Promise<runtime.RequestOpts>;
    /**
     * Interpret ordinary input and enrich review-safe functional solution intent.
     * Interpret Print Requirement
     */
    interpretPrintRequirementRaw(requestParameters: InterpretPrintRequirementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InterpretationResultV02>>;
    /**
     * Interpret ordinary input and enrich review-safe functional solution intent.
     * Interpret Print Requirement
     */
    interpretPrintRequirement(requestParameters: InterpretPrintRequirementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InterpretationResultV02>;
}
