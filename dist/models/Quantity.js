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
exports.instanceOfQuantity = instanceOfQuantity;
exports.QuantityFromJSON = QuantityFromJSON;
exports.QuantityFromJSONTyped = QuantityFromJSONTyped;
exports.QuantityToJSON = QuantityToJSON;
exports.QuantityToJSONTyped = QuantityToJSONTyped;
/**
 * Check if a given object implements the Quantity interface.
 */
function instanceOfQuantity(value) {
    return true;
}
function QuantityFromJSON(json) {
    return QuantityFromJSONTyped(json, false);
}
function QuantityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'units': json['units'] == null ? undefined : json['units'],
        'variableData': json['variable_data'] == null ? undefined : json['variable_data'],
    };
}
function QuantityToJSON(json) {
    return QuantityToJSONTyped(json, false);
}
function QuantityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'units': value['units'],
        'variable_data': value['variableData'],
    };
}
