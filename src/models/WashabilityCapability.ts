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
/**
 * Supported fabric wash-care methods and limits.
 * @export
 * @interface WashabilityCapability
 */
export interface WashabilityCapability {
    /**
     *
     * @type {number}
     * @memberof WashabilityCapability
     */
    maximumTemperatureC?: number | null;
    /**
     *
     * @type {Array<WashabilityCapabilityMethodsEnum>}
     * @memberof WashabilityCapability
     */
    methods?: Array<WashabilityCapabilityMethodsEnum>;
    /**
     *
     * @type {boolean}
     * @memberof WashabilityCapability
     */
    tumbleDrySupported?: boolean | null;
}


/**
 * @export
 */
export const WashabilityCapabilityMethodsEnum = {
    MachineWash: 'machine_wash',
    HandWash: 'hand_wash',
    DryClean: 'dry_clean',
    NotWashable: 'not_washable',
    Unknown: 'unknown'
} as const;
export type WashabilityCapabilityMethodsEnum = typeof WashabilityCapabilityMethodsEnum[keyof typeof WashabilityCapabilityMethodsEnum];


/**
 * Check if a given object implements the WashabilityCapability interface.
 */
export function instanceOfWashabilityCapability(value: object): value is WashabilityCapability {
    return true;
}

export function WashabilityCapabilityFromJSON(json: any): WashabilityCapability {
    return WashabilityCapabilityFromJSONTyped(json, false);
}

export function WashabilityCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): WashabilityCapability {
    if (json == null) {
        return json;
    }
    return {

        'maximumTemperatureC': json['maximum_temperature_c'] == null ? undefined : json['maximum_temperature_c'],
        'methods': json['methods'] == null ? undefined : json['methods'],
        'tumbleDrySupported': json['tumble_dry_supported'] == null ? undefined : json['tumble_dry_supported'],
    };
}

export function WashabilityCapabilityToJSON(json: any): WashabilityCapability {
    return WashabilityCapabilityToJSONTyped(json, false);
}

export function WashabilityCapabilityToJSONTyped(value?: WashabilityCapability | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'maximum_temperature_c': value['maximumTemperatureC'],
        'methods': value['methods'],
        'tumble_dry_supported': value['tumbleDrySupported'],
    };
}
