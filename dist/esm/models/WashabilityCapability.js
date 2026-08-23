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
 * @export
 */
export const WashabilityCapabilityMethodsEnum = {
    MachineWash: 'machine_wash',
    HandWash: 'hand_wash',
    DryClean: 'dry_clean',
    NotWashable: 'not_washable',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the WashabilityCapability interface.
 */
export function instanceOfWashabilityCapability(value) {
    return true;
}
export function WashabilityCapabilityFromJSON(json) {
    return WashabilityCapabilityFromJSONTyped(json, false);
}
export function WashabilityCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'maximumTemperatureC': json['maximum_temperature_c'] == null ? undefined : json['maximum_temperature_c'],
        'methods': json['methods'] == null ? undefined : json['methods'],
        'tumbleDrySupported': json['tumble_dry_supported'] == null ? undefined : json['tumble_dry_supported'],
    };
}
export function WashabilityCapabilityToJSON(json) {
    return WashabilityCapabilityToJSONTyped(json, false);
}
export function WashabilityCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'maximum_temperature_c': value['maximumTemperatureC'],
        'methods': value['methods'],
        'tumble_dry_supported': value['tumbleDrySupported'],
    };
}
