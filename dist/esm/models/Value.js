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
/**
 * Check if a given object implements the Value interface.
 */
export function instanceOfValue(value) {
    return true;
}
export function ValueFromJSON(json) {
    return ValueFromJSONTyped(json, false);
}
export function ValueFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function ValueToJSON(json) {
    return ValueToJSONTyped(json, false);
}
export function ValueToJSONTyped(value, ignoreDiscriminator = false) {
    return value;
}
