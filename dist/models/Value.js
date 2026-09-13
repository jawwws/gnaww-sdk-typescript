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
exports.instanceOfValue = instanceOfValue;
exports.ValueFromJSON = ValueFromJSON;
exports.ValueFromJSONTyped = ValueFromJSONTyped;
exports.ValueToJSON = ValueToJSON;
exports.ValueToJSONTyped = ValueToJSONTyped;
/**
 * Check if a given object implements the Value interface.
 */
function instanceOfValue(value) {
    return true;
}
function ValueFromJSON(json) {
    return ValueFromJSONTyped(json, false);
}
function ValueFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function ValueToJSON(json) {
    return ValueToJSONTyped(json, false);
}
function ValueToJSONTyped(value, ignoreDiscriminator = false) {
    return value;
}
