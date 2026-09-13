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
exports.DrillOperationParametersKindEnum = void 0;
exports.instanceOfDrillOperationParameters = instanceOfDrillOperationParameters;
exports.DrillOperationParametersFromJSON = DrillOperationParametersFromJSON;
exports.DrillOperationParametersFromJSONTyped = DrillOperationParametersFromJSONTyped;
exports.DrillOperationParametersToJSON = DrillOperationParametersToJSON;
exports.DrillOperationParametersToJSONTyped = DrillOperationParametersToJSONTyped;
const RepeatedDrillPattern_1 = require("./RepeatedDrillPattern");
const DrillHole_1 = require("./DrillHole");
/**
 * @export
 */
exports.DrillOperationParametersKindEnum = {
    Drill: 'drill'
};
/**
 * Check if a given object implements the DrillOperationParameters interface.
 */
function instanceOfDrillOperationParameters(value) {
    return true;
}
function DrillOperationParametersFromJSON(json) {
    return DrillOperationParametersFromJSONTyped(json, false);
}
function DrillOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'holes': json['holes'] == null ? undefined : (json['holes'].map(DrillHole_1.DrillHoleFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'patterns': json['patterns'] == null ? undefined : (json['patterns'].map(RepeatedDrillPattern_1.RepeatedDrillPatternFromJSON)),
    };
}
function DrillOperationParametersToJSON(json) {
    return DrillOperationParametersToJSONTyped(json, false);
}
function DrillOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'holes': value['holes'] == null ? undefined : (value['holes'].map(DrillHole_1.DrillHoleToJSON)),
        'kind': value['kind'],
        'patterns': value['patterns'] == null ? undefined : (value['patterns'].map(RepeatedDrillPattern_1.RepeatedDrillPatternToJSON)),
    };
}
