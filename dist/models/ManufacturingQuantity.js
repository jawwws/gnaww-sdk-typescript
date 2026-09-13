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
exports.instanceOfManufacturingQuantity = instanceOfManufacturingQuantity;
exports.ManufacturingQuantityFromJSON = ManufacturingQuantityFromJSON;
exports.ManufacturingQuantityFromJSONTyped = ManufacturingQuantityFromJSONTyped;
exports.ManufacturingQuantityToJSON = ManufacturingQuantityToJSON;
exports.ManufacturingQuantityToJSONTyped = ManufacturingQuantityToJSONTyped;
/**
 * Check if a given object implements the ManufacturingQuantity interface.
 */
function instanceOfManufacturingQuantity(value) {
    return true;
}
function ManufacturingQuantityFromJSON(json) {
    return ManufacturingQuantityFromJSONTyped(json, false);
}
function ManufacturingQuantityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'units': json['units'] == null ? undefined : json['units'],
    };
}
function ManufacturingQuantityToJSON(json) {
    return ManufacturingQuantityToJSONTyped(json, false);
}
function ManufacturingQuantityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'units': value['units'],
    };
}
