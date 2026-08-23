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
/**
 * Check if a given object implements the Quantity interface.
 */
export function instanceOfQuantity(value) {
    return true;
}
export function QuantityFromJSON(json) {
    return QuantityFromJSONTyped(json, false);
}
export function QuantityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'units': json['units'] == null ? undefined : json['units'],
        'variableData': json['variable_data'] == null ? undefined : json['variable_data'],
    };
}
export function QuantityToJSON(json) {
    return QuantityToJSONTyped(json, false);
}
export function QuantityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'units': value['units'],
        'variable_data': value['variableData'],
    };
}
