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
import type { DimensionCapability } from './DimensionCapability';
import {
    DimensionCapabilityFromJSON,
    DimensionCapabilityFromJSONTyped,
    DimensionCapabilityToJSON,
    DimensionCapabilityToJSONTyped,
} from './DimensionCapability';
import type { MaterialCapability } from './MaterialCapability';
import {
    MaterialCapabilityFromJSON,
    MaterialCapabilityFromJSONTyped,
    MaterialCapabilityToJSON,
    MaterialCapabilityToJSONTyped,
} from './MaterialCapability';

/**
 * Optional component-level capability for multi-component products.
 * @export
 * @interface ProducerComponentCapability
 */
export interface ProducerComponentCapability {
    /**
     *
     * @type {ProducerComponentCapabilityRoleEnum}
     * @memberof ProducerComponentCapability
     */
    role: ProducerComponentCapabilityRoleEnum;
    /**
     *
     * @type {Array<ProducerComponentCapabilitySidesEnum>}
     * @memberof ProducerComponentCapability
     */
    sides?: Array<ProducerComponentCapabilitySidesEnum>;
    /**
     *
     * @type {Array<DimensionCapability>}
     * @memberof ProducerComponentCapability
     */
    sizes?: Array<DimensionCapability>;
    /**
     *
     * @type {Array<MaterialCapability>}
     * @memberof ProducerComponentCapability
     */
    substrates?: Array<MaterialCapability>;
}


/**
 * @export
 */
export const ProducerComponentCapabilityRoleEnum = {
    Main: 'main',
    Flat: 'flat',
    Finished: 'finished',
    Cover: 'cover',
    Text: 'text',
    Insert: 'insert',
    Garment: 'garment',
    Decoration: 'decoration',
    Unknown: 'unknown'
} as const;
export type ProducerComponentCapabilityRoleEnum = typeof ProducerComponentCapabilityRoleEnum[keyof typeof ProducerComponentCapabilityRoleEnum];

/**
 * @export
 */
export const ProducerComponentCapabilitySidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
} as const;
export type ProducerComponentCapabilitySidesEnum = typeof ProducerComponentCapabilitySidesEnum[keyof typeof ProducerComponentCapabilitySidesEnum];


/**
 * Check if a given object implements the ProducerComponentCapability interface.
 */
export function instanceOfProducerComponentCapability(value: object): value is ProducerComponentCapability {
    if (!('role' in value) || value['role'] === undefined) return false;
    return true;
}

export function ProducerComponentCapabilityFromJSON(json: any): ProducerComponentCapability {
    return ProducerComponentCapabilityFromJSONTyped(json, false);
}

export function ProducerComponentCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerComponentCapability {
    if (json == null) {
        return json;
    }
    return {

        'role': json['role'],
        'sides': json['sides'] == null ? undefined : json['sides'],
        'sizes': json['sizes'] == null ? undefined : ((json['sizes'] as Array<any>).map(DimensionCapabilityFromJSON)),
        'substrates': json['substrates'] == null ? undefined : ((json['substrates'] as Array<any>).map(MaterialCapabilityFromJSON)),
    };
}

export function ProducerComponentCapabilityToJSON(json: any): ProducerComponentCapability {
    return ProducerComponentCapabilityToJSONTyped(json, false);
}

export function ProducerComponentCapabilityToJSONTyped(value?: ProducerComponentCapability | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'role': value['role'],
        'sides': value['sides'],
        'sizes': value['sizes'] == null ? undefined : ((value['sizes'] as Array<any>).map(DimensionCapabilityToJSON)),
        'substrates': value['substrates'] == null ? undefined : ((value['substrates'] as Array<any>).map(MaterialCapabilityToJSON)),
    };
}
