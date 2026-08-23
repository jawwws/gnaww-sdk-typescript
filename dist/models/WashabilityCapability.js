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
exports.WashabilityCapabilityMethodsEnum = void 0;
exports.instanceOfWashabilityCapability = instanceOfWashabilityCapability;
exports.WashabilityCapabilityFromJSON = WashabilityCapabilityFromJSON;
exports.WashabilityCapabilityFromJSONTyped = WashabilityCapabilityFromJSONTyped;
exports.WashabilityCapabilityToJSON = WashabilityCapabilityToJSON;
exports.WashabilityCapabilityToJSONTyped = WashabilityCapabilityToJSONTyped;
/**
 * @export
 */
exports.WashabilityCapabilityMethodsEnum = {
    MachineWash: 'machine_wash',
    HandWash: 'hand_wash',
    DryClean: 'dry_clean',
    NotWashable: 'not_washable',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the WashabilityCapability interface.
 */
function instanceOfWashabilityCapability(value) {
    return true;
}
function WashabilityCapabilityFromJSON(json) {
    return WashabilityCapabilityFromJSONTyped(json, false);
}
function WashabilityCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'maximumTemperatureC': json['maximum_temperature_c'] == null ? undefined : json['maximum_temperature_c'],
        'methods': json['methods'] == null ? undefined : json['methods'],
        'tumbleDrySupported': json['tumble_dry_supported'] == null ? undefined : json['tumble_dry_supported'],
    };
}
function WashabilityCapabilityToJSON(json) {
    return WashabilityCapabilityToJSONTyped(json, false);
}
function WashabilityCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'maximum_temperature_c': value['maximumTemperatureC'],
        'methods': value['methods'],
        'tumble_dry_supported': value['tumbleDrySupported'],
    };
}
