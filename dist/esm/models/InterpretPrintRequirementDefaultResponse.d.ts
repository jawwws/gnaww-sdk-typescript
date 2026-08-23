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
import type { InterpretPrintRequirementDefaultResponseError } from './InterpretPrintRequirementDefaultResponseError';
/**
 *
 * @export
 * @interface InterpretPrintRequirementDefaultResponse
 */
export interface InterpretPrintRequirementDefaultResponse {
    /**
     *
     * @type {InterpretPrintRequirementDefaultResponseError}
     * @memberof InterpretPrintRequirementDefaultResponse
     */
    error: InterpretPrintRequirementDefaultResponseError;
}
/**
 * Check if a given object implements the InterpretPrintRequirementDefaultResponse interface.
 */
export declare function instanceOfInterpretPrintRequirementDefaultResponse(value: object): value is InterpretPrintRequirementDefaultResponse;
export declare function InterpretPrintRequirementDefaultResponseFromJSON(json: any): InterpretPrintRequirementDefaultResponse;
export declare function InterpretPrintRequirementDefaultResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterpretPrintRequirementDefaultResponse;
export declare function InterpretPrintRequirementDefaultResponseToJSON(json: any): InterpretPrintRequirementDefaultResponse;
export declare function InterpretPrintRequirementDefaultResponseToJSONTyped(value?: InterpretPrintRequirementDefaultResponse | null, ignoreDiscriminator?: boolean): any;
