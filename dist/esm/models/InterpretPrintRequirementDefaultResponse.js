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
import { InterpretPrintRequirementDefaultResponseErrorFromJSON, InterpretPrintRequirementDefaultResponseErrorToJSON, } from './InterpretPrintRequirementDefaultResponseError';
/**
 * Check if a given object implements the InterpretPrintRequirementDefaultResponse interface.
 */
export function instanceOfInterpretPrintRequirementDefaultResponse(value) {
    if (!('error' in value) || value['error'] === undefined)
        return false;
    return true;
}
export function InterpretPrintRequirementDefaultResponseFromJSON(json) {
    return InterpretPrintRequirementDefaultResponseFromJSONTyped(json, false);
}
export function InterpretPrintRequirementDefaultResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'error': InterpretPrintRequirementDefaultResponseErrorFromJSON(json['error']),
    };
}
export function InterpretPrintRequirementDefaultResponseToJSON(json) {
    return InterpretPrintRequirementDefaultResponseToJSONTyped(json, false);
}
export function InterpretPrintRequirementDefaultResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'error': InterpretPrintRequirementDefaultResponseErrorToJSON(value['error']),
    };
}
