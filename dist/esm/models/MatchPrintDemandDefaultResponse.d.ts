/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { ContinuePrintRequirementInterpretationDefaultResponseError } from './ContinuePrintRequirementInterpretationDefaultResponseError';
/**
 *
 * @export
 * @interface MatchPrintDemandDefaultResponse
 */
export interface MatchPrintDemandDefaultResponse {
    /**
     *
     * @type {ContinuePrintRequirementInterpretationDefaultResponseError}
     * @memberof MatchPrintDemandDefaultResponse
     */
    error: ContinuePrintRequirementInterpretationDefaultResponseError;
}
/**
 * Check if a given object implements the MatchPrintDemandDefaultResponse interface.
 */
export declare function instanceOfMatchPrintDemandDefaultResponse(value: object): value is MatchPrintDemandDefaultResponse;
export declare function MatchPrintDemandDefaultResponseFromJSON(json: any): MatchPrintDemandDefaultResponse;
export declare function MatchPrintDemandDefaultResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchPrintDemandDefaultResponse;
export declare function MatchPrintDemandDefaultResponseToJSON(json: any): MatchPrintDemandDefaultResponse;
export declare function MatchPrintDemandDefaultResponseToJSONTyped(value?: MatchPrintDemandDefaultResponse | null, ignoreDiscriminator?: boolean): any;
