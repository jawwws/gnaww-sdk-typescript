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
 * Check if a given object implements the QuantityRange interface.
 */
export function instanceOfQuantityRange(value) {
    return true;
}
export function QuantityRangeFromJSON(json) {
    return QuantityRangeFromJSONTyped(json, false);
}
export function QuantityRangeFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'increments': json['increments'] == null ? undefined : json['increments'],
        'maximum': json['maximum'] == null ? undefined : json['maximum'],
        'minimum': json['minimum'] == null ? undefined : json['minimum'],
        'step': json['step'] == null ? undefined : json['step'],
    };
}
export function QuantityRangeToJSON(json) {
    return QuantityRangeToJSONTyped(json, false);
}
export function QuantityRangeToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'increments': value['increments'],
        'maximum': value['maximum'],
        'minimum': value['minimum'],
        'step': value['step'],
    };
}
