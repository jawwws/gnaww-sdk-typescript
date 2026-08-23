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

import { mapValues } from '../runtime';
import type { DeliveryDestination } from './DeliveryDestination';
import {
    DeliveryDestinationFromJSON,
    DeliveryDestinationFromJSONTyped,
    DeliveryDestinationToJSON,
    DeliveryDestinationToJSONTyped,
} from './DeliveryDestination';

/**
 * Buyer fulfilment requirement kept outside Recipe identity.
 * @export
 * @interface FulfilmentRequirement
 */
export interface FulfilmentRequirement {
    /**
     *
     * @type {DeliveryDestination}
     * @memberof FulfilmentRequirement
     */
    destination: DeliveryDestination;
    /**
     *
     * @type {number}
     * @memberof FulfilmentRequirement
     */
    maximumDeliveryWorkingDays?: number | null;
}

/**
 * Check if a given object implements the FulfilmentRequirement interface.
 */
export function instanceOfFulfilmentRequirement(value: object): value is FulfilmentRequirement {
    if (!('destination' in value) || value['destination'] === undefined) return false;
    return true;
}

export function FulfilmentRequirementFromJSON(json: any): FulfilmentRequirement {
    return FulfilmentRequirementFromJSONTyped(json, false);
}

export function FulfilmentRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfilmentRequirement {
    if (json == null) {
        return json;
    }
    return {

        'destination': DeliveryDestinationFromJSON(json['destination']),
        'maximumDeliveryWorkingDays': json['maximum_delivery_working_days'] == null ? undefined : json['maximum_delivery_working_days'],
    };
}

export function FulfilmentRequirementToJSON(json: any): FulfilmentRequirement {
    return FulfilmentRequirementToJSONTyped(json, false);
}

export function FulfilmentRequirementToJSONTyped(value?: FulfilmentRequirement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'destination': DeliveryDestinationToJSON(value['destination']),
        'maximum_delivery_working_days': value['maximumDeliveryWorkingDays'],
    };
}
