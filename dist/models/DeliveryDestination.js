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
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfDeliveryDestination = instanceOfDeliveryDestination;
exports.DeliveryDestinationFromJSON = DeliveryDestinationFromJSON;
exports.DeliveryDestinationFromJSONTyped = DeliveryDestinationFromJSONTyped;
exports.DeliveryDestinationToJSON = DeliveryDestinationToJSON;
exports.DeliveryDestinationToJSONTyped = DeliveryDestinationToJSONTyped;
/**
 * Check if a given object implements the DeliveryDestination interface.
 */
function instanceOfDeliveryDestination(value) {
    if (!('countryCode' in value) || value['countryCode'] === undefined)
        return false;
    return true;
}
function DeliveryDestinationFromJSON(json) {
    return DeliveryDestinationFromJSONTyped(json, false);
}
function DeliveryDestinationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'addressText': json['address_text'] == null ? undefined : json['address_text'],
        'countryCode': json['country_code'],
        'locality': json['locality'] == null ? undefined : json['locality'],
        'postalCode': json['postal_code'] == null ? undefined : json['postal_code'],
        'region': json['region'] == null ? undefined : json['region'],
    };
}
function DeliveryDestinationToJSON(json) {
    return DeliveryDestinationToJSONTyped(json, false);
}
function DeliveryDestinationToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'address_text': value['addressText'],
        'country_code': value['countryCode'],
        'locality': value['locality'],
        'postal_code': value['postalCode'],
        'region': value['region'],
    };
}
