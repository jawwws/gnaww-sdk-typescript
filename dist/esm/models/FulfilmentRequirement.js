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
import { DeliveryDestinationFromJSON, DeliveryDestinationToJSON, } from './DeliveryDestination';
/**
 * @export
 */
export const FulfilmentRequirementServiceClassEnum = {
    Standard: 'standard',
    Express: 'express',
    Freight: 'freight'
};
/**
 * Check if a given object implements the FulfilmentRequirement interface.
 */
export function instanceOfFulfilmentRequirement(value) {
    if (!('destination' in value) || value['destination'] === undefined)
        return false;
    return true;
}
export function FulfilmentRequirementFromJSON(json) {
    return FulfilmentRequirementFromJSONTyped(json, false);
}
export function FulfilmentRequirementFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'destination': DeliveryDestinationFromJSON(json['destination']),
        'maximumDeliveryWorkingDays': json['maximum_delivery_working_days'] == null ? undefined : json['maximum_delivery_working_days'],
        'serviceClass': json['service_class'] == null ? undefined : json['service_class'],
    };
}
export function FulfilmentRequirementToJSON(json) {
    return FulfilmentRequirementToJSONTyped(json, false);
}
export function FulfilmentRequirementToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'destination': DeliveryDestinationToJSON(value['destination']),
        'maximum_delivery_working_days': value['maximumDeliveryWorkingDays'],
        'service_class': value['serviceClass'],
    };
}
