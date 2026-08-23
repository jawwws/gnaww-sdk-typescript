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
exports.instanceOfInterpretPrintRequirementDefaultResponse = instanceOfInterpretPrintRequirementDefaultResponse;
exports.InterpretPrintRequirementDefaultResponseFromJSON = InterpretPrintRequirementDefaultResponseFromJSON;
exports.InterpretPrintRequirementDefaultResponseFromJSONTyped = InterpretPrintRequirementDefaultResponseFromJSONTyped;
exports.InterpretPrintRequirementDefaultResponseToJSON = InterpretPrintRequirementDefaultResponseToJSON;
exports.InterpretPrintRequirementDefaultResponseToJSONTyped = InterpretPrintRequirementDefaultResponseToJSONTyped;
const InterpretPrintRequirementDefaultResponseError_1 = require("./InterpretPrintRequirementDefaultResponseError");
/**
 * Check if a given object implements the InterpretPrintRequirementDefaultResponse interface.
 */
function instanceOfInterpretPrintRequirementDefaultResponse(value) {
    if (!('error' in value) || value['error'] === undefined)
        return false;
    return true;
}
function InterpretPrintRequirementDefaultResponseFromJSON(json) {
    return InterpretPrintRequirementDefaultResponseFromJSONTyped(json, false);
}
function InterpretPrintRequirementDefaultResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'error': (0, InterpretPrintRequirementDefaultResponseError_1.InterpretPrintRequirementDefaultResponseErrorFromJSON)(json['error']),
    };
}
function InterpretPrintRequirementDefaultResponseToJSON(json) {
    return InterpretPrintRequirementDefaultResponseToJSONTyped(json, false);
}
function InterpretPrintRequirementDefaultResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'error': (0, InterpretPrintRequirementDefaultResponseError_1.InterpretPrintRequirementDefaultResponseErrorToJSON)(value['error']),
    };
}
