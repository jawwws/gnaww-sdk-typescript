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
 * Check if a given object implements the ManufacturingQuantity interface.
 */
export function instanceOfManufacturingQuantity(value) {
    return true;
}
export function ManufacturingQuantityFromJSON(json) {
    return ManufacturingQuantityFromJSONTyped(json, false);
}
export function ManufacturingQuantityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'units': json['units'] == null ? undefined : json['units'],
    };
}
export function ManufacturingQuantityToJSON(json) {
    return ManufacturingQuantityToJSONTyped(json, false);
}
export function ManufacturingQuantityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'units': value['units'],
    };
}
