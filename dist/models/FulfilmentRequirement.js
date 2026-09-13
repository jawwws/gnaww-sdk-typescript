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
exports.FulfilmentRequirementServiceClassEnum = void 0;
exports.instanceOfFulfilmentRequirement = instanceOfFulfilmentRequirement;
exports.FulfilmentRequirementFromJSON = FulfilmentRequirementFromJSON;
exports.FulfilmentRequirementFromJSONTyped = FulfilmentRequirementFromJSONTyped;
exports.FulfilmentRequirementToJSON = FulfilmentRequirementToJSON;
exports.FulfilmentRequirementToJSONTyped = FulfilmentRequirementToJSONTyped;
const DeliveryDestination_1 = require("./DeliveryDestination");
/**
 * @export
 */
exports.FulfilmentRequirementServiceClassEnum = {
    Standard: 'standard',
    Express: 'express',
    Freight: 'freight'
};
/**
 * Check if a given object implements the FulfilmentRequirement interface.
 */
function instanceOfFulfilmentRequirement(value) {
    if (!('destination' in value) || value['destination'] === undefined)
        return false;
    return true;
}
function FulfilmentRequirementFromJSON(json) {
    return FulfilmentRequirementFromJSONTyped(json, false);
}
function FulfilmentRequirementFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'destination': (0, DeliveryDestination_1.DeliveryDestinationFromJSON)(json['destination']),
        'maximumDeliveryWorkingDays': json['maximum_delivery_working_days'] == null ? undefined : json['maximum_delivery_working_days'],
        'serviceClass': json['service_class'] == null ? undefined : json['service_class'],
    };
}
function FulfilmentRequirementToJSON(json) {
    return FulfilmentRequirementToJSONTyped(json, false);
}
function FulfilmentRequirementToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'destination': (0, DeliveryDestination_1.DeliveryDestinationToJSON)(value['destination']),
        'maximum_delivery_working_days': value['maximumDeliveryWorkingDays'],
        'service_class': value['serviceClass'],
    };
}
