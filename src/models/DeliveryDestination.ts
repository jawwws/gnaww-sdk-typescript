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

import { mapValues } from '../runtime';
/**
 * Destination information relevant to capability-level routing.
 * @export
 * @interface DeliveryDestination
 */
export interface DeliveryDestination {
    /**
     *
     * @type {string}
     * @memberof DeliveryDestination
     */
    addressText?: string | null;
    /**
     *
     * @type {string}
     * @memberof DeliveryDestination
     */
    countryCode: string;
    /**
     *
     * @type {string}
     * @memberof DeliveryDestination
     */
    locality?: string | null;
    /**
     *
     * @type {string}
     * @memberof DeliveryDestination
     */
    postalCode?: string | null;
    /**
     *
     * @type {string}
     * @memberof DeliveryDestination
     */
    region?: string | null;
}

/**
 * Check if a given object implements the DeliveryDestination interface.
 */
export function instanceOfDeliveryDestination(value: object): value is DeliveryDestination {
    if (!('countryCode' in value) || value['countryCode'] === undefined) return false;
    return true;
}

export function DeliveryDestinationFromJSON(json: any): DeliveryDestination {
    return DeliveryDestinationFromJSONTyped(json, false);
}

export function DeliveryDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeliveryDestination {
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

export function DeliveryDestinationToJSON(json: any): DeliveryDestination {
    return DeliveryDestinationToJSONTyped(json, false);
}

export function DeliveryDestinationToJSONTyped(value?: DeliveryDestination | null, ignoreDiscriminator: boolean = false): any {
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
