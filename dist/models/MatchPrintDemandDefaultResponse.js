"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfMatchPrintDemandDefaultResponse = instanceOfMatchPrintDemandDefaultResponse;
exports.MatchPrintDemandDefaultResponseFromJSON = MatchPrintDemandDefaultResponseFromJSON;
exports.MatchPrintDemandDefaultResponseFromJSONTyped = MatchPrintDemandDefaultResponseFromJSONTyped;
exports.MatchPrintDemandDefaultResponseToJSON = MatchPrintDemandDefaultResponseToJSON;
exports.MatchPrintDemandDefaultResponseToJSONTyped = MatchPrintDemandDefaultResponseToJSONTyped;
const ContinuePrintRequirementInterpretationDefaultResponseError_1 = require("./ContinuePrintRequirementInterpretationDefaultResponseError");
/**
 * Check if a given object implements the MatchPrintDemandDefaultResponse interface.
 */
function instanceOfMatchPrintDemandDefaultResponse(value) {
    if (!('error' in value) || value['error'] === undefined)
        return false;
    return true;
}
function MatchPrintDemandDefaultResponseFromJSON(json) {
    return MatchPrintDemandDefaultResponseFromJSONTyped(json, false);
}
function MatchPrintDemandDefaultResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'error': (0, ContinuePrintRequirementInterpretationDefaultResponseError_1.ContinuePrintRequirementInterpretationDefaultResponseErrorFromJSON)(json['error']),
    };
}
function MatchPrintDemandDefaultResponseToJSON(json) {
    return MatchPrintDemandDefaultResponseToJSONTyped(json, false);
}
function MatchPrintDemandDefaultResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'error': (0, ContinuePrintRequirementInterpretationDefaultResponseError_1.ContinuePrintRequirementInterpretationDefaultResponseErrorToJSON)(value['error']),
    };
}
