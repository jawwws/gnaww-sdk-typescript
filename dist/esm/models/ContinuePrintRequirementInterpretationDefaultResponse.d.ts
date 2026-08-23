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
import type { ContinuePrintRequirementInterpretationDefaultResponseError } from './ContinuePrintRequirementInterpretationDefaultResponseError';
/**
 *
 * @export
 * @interface ContinuePrintRequirementInterpretationDefaultResponse
 */
export interface ContinuePrintRequirementInterpretationDefaultResponse {
    /**
     *
     * @type {ContinuePrintRequirementInterpretationDefaultResponseError}
     * @memberof ContinuePrintRequirementInterpretationDefaultResponse
     */
    error: ContinuePrintRequirementInterpretationDefaultResponseError;
}
/**
 * Check if a given object implements the ContinuePrintRequirementInterpretationDefaultResponse interface.
 */
export declare function instanceOfContinuePrintRequirementInterpretationDefaultResponse(value: object): value is ContinuePrintRequirementInterpretationDefaultResponse;
export declare function ContinuePrintRequirementInterpretationDefaultResponseFromJSON(json: any): ContinuePrintRequirementInterpretationDefaultResponse;
export declare function ContinuePrintRequirementInterpretationDefaultResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContinuePrintRequirementInterpretationDefaultResponse;
export declare function ContinuePrintRequirementInterpretationDefaultResponseToJSON(json: any): ContinuePrintRequirementInterpretationDefaultResponse;
export declare function ContinuePrintRequirementInterpretationDefaultResponseToJSONTyped(value?: ContinuePrintRequirementInterpretationDefaultResponse | null, ignoreDiscriminator?: boolean): any;
