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
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfContinuePrintRequirementInterpretationDefaultResponse = instanceOfContinuePrintRequirementInterpretationDefaultResponse;
exports.ContinuePrintRequirementInterpretationDefaultResponseFromJSON = ContinuePrintRequirementInterpretationDefaultResponseFromJSON;
exports.ContinuePrintRequirementInterpretationDefaultResponseFromJSONTyped = ContinuePrintRequirementInterpretationDefaultResponseFromJSONTyped;
exports.ContinuePrintRequirementInterpretationDefaultResponseToJSON = ContinuePrintRequirementInterpretationDefaultResponseToJSON;
exports.ContinuePrintRequirementInterpretationDefaultResponseToJSONTyped = ContinuePrintRequirementInterpretationDefaultResponseToJSONTyped;
const ContinuePrintRequirementInterpretationDefaultResponseError_1 = require("./ContinuePrintRequirementInterpretationDefaultResponseError");
/**
 * Check if a given object implements the ContinuePrintRequirementInterpretationDefaultResponse interface.
 */
function instanceOfContinuePrintRequirementInterpretationDefaultResponse(value) {
    if (!('error' in value) || value['error'] === undefined)
        return false;
    return true;
}
function ContinuePrintRequirementInterpretationDefaultResponseFromJSON(json) {
    return ContinuePrintRequirementInterpretationDefaultResponseFromJSONTyped(json, false);
}
function ContinuePrintRequirementInterpretationDefaultResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'error': (0, ContinuePrintRequirementInterpretationDefaultResponseError_1.ContinuePrintRequirementInterpretationDefaultResponseErrorFromJSON)(json['error']),
    };
}
function ContinuePrintRequirementInterpretationDefaultResponseToJSON(json) {
    return ContinuePrintRequirementInterpretationDefaultResponseToJSONTyped(json, false);
}
function ContinuePrintRequirementInterpretationDefaultResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'error': (0, ContinuePrintRequirementInterpretationDefaultResponseError_1.ContinuePrintRequirementInterpretationDefaultResponseErrorToJSON)(value['error']),
    };
}
