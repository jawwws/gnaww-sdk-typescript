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
import { ContinuePrintRequirementInterpretationDefaultResponseErrorFromJSON, ContinuePrintRequirementInterpretationDefaultResponseErrorToJSON, } from './ContinuePrintRequirementInterpretationDefaultResponseError';
/**
 * Check if a given object implements the ContinuePrintRequirementInterpretationDefaultResponse interface.
 */
export function instanceOfContinuePrintRequirementInterpretationDefaultResponse(value) {
    if (!('error' in value) || value['error'] === undefined)
        return false;
    return true;
}
export function ContinuePrintRequirementInterpretationDefaultResponseFromJSON(json) {
    return ContinuePrintRequirementInterpretationDefaultResponseFromJSONTyped(json, false);
}
export function ContinuePrintRequirementInterpretationDefaultResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'error': ContinuePrintRequirementInterpretationDefaultResponseErrorFromJSON(json['error']),
    };
}
export function ContinuePrintRequirementInterpretationDefaultResponseToJSON(json) {
    return ContinuePrintRequirementInterpretationDefaultResponseToJSONTyped(json, false);
}
export function ContinuePrintRequirementInterpretationDefaultResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'error': ContinuePrintRequirementInterpretationDefaultResponseErrorToJSON(value['error']),
    };
}
