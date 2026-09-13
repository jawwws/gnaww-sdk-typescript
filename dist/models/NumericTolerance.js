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
exports.instanceOfNumericTolerance = instanceOfNumericTolerance;
exports.NumericToleranceFromJSON = NumericToleranceFromJSON;
exports.NumericToleranceFromJSONTyped = NumericToleranceFromJSONTyped;
exports.NumericToleranceToJSON = NumericToleranceToJSON;
exports.NumericToleranceToJSONTyped = NumericToleranceToJSONTyped;
/**
 * Check if a given object implements the NumericTolerance interface.
 */
function instanceOfNumericTolerance(value) {
    if (!('unit' in value) || value['unit'] === undefined)
        return false;
    return true;
}
function NumericToleranceFromJSON(json) {
    return NumericToleranceFromJSONTyped(json, false);
}
function NumericToleranceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'maximum': json['maximum'] == null ? undefined : json['maximum'],
        'minimum': json['minimum'] == null ? undefined : json['minimum'],
        'target': json['target'] == null ? undefined : json['target'],
        'unit': json['unit'],
    };
}
function NumericToleranceToJSON(json) {
    return NumericToleranceToJSONTyped(json, false);
}
function NumericToleranceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'maximum': value['maximum'],
        'minimum': value['minimum'],
        'target': value['target'],
        'unit': value['unit'],
    };
}
