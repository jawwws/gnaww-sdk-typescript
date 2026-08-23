/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import { ContinuePrintRequirementInterpretationDefaultResponseErrorFromJSON, ContinuePrintRequirementInterpretationDefaultResponseErrorToJSON, } from './ContinuePrintRequirementInterpretationDefaultResponseError';
/**
 * Check if a given object implements the MatchPrintDemandDefaultResponse interface.
 */
export function instanceOfMatchPrintDemandDefaultResponse(value) {
    if (!('error' in value) || value['error'] === undefined)
        return false;
    return true;
}
export function MatchPrintDemandDefaultResponseFromJSON(json) {
    return MatchPrintDemandDefaultResponseFromJSONTyped(json, false);
}
export function MatchPrintDemandDefaultResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'error': ContinuePrintRequirementInterpretationDefaultResponseErrorFromJSON(json['error']),
    };
}
export function MatchPrintDemandDefaultResponseToJSON(json) {
    return MatchPrintDemandDefaultResponseToJSONTyped(json, false);
}
export function MatchPrintDemandDefaultResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'error': ContinuePrintRequirementInterpretationDefaultResponseErrorToJSON(value['error']),
    };
}
