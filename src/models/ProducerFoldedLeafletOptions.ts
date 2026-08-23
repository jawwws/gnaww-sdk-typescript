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

/**
 * Supported folded leaflet options for a producer product.
 * @export
 * @interface ProducerFoldedLeafletOptions
 */
export interface ProducerFoldedLeafletOptions {
    /**
     *
     * @type {Array<DimensionCapability>}
     * @memberof ProducerFoldedLeafletOptions
     */
    finishedSizes?: Array<DimensionCapability>;
    /**
     *
     * @type {Array<DimensionCapability>}
     * @memberof ProducerFoldedLeafletOptions
     */
    flatSizes?: Array<DimensionCapability>;
    /**
     *
     * @type {Array<ProducerFoldedLeafletOptionsFoldPatternsEnum>}
     * @memberof ProducerFoldedLeafletOptions
     */
    foldPatterns?: Array<ProducerFoldedLeafletOptionsFoldPatternsEnum>;
    /**
     *
     * @type {Array<number>}
     * @memberof ProducerFoldedLeafletOptions
     */
    panelCounts?: Array<number>;
}


/**
 * @export
 */
export const ProducerFoldedLeafletOptionsFoldPatternsEnum = {
    HalfFold: 'half_fold',
    TriFold: 'tri_fold',
    ZFold: 'z_fold',
    GateFold: 'gate_fold',
    RollFold: 'roll_fold',
    CrossFold: 'cross_fold',
    Unknown: 'unknown'
} as const;
export type ProducerFoldedLeafletOptionsFoldPatternsEnum = typeof ProducerFoldedLeafletOptionsFoldPatternsEnum[keyof typeof ProducerFoldedLeafletOptionsFoldPatternsEnum];


/**
 * Check if a given object implements the ProducerFoldedLeafletOptions interface.
 */
export function instanceOfProducerFoldedLeafletOptions(value: object): value is ProducerFoldedLeafletOptions {
    return true;
}

export function ProducerFoldedLeafletOptionsFromJSON(json: any): ProducerFoldedLeafletOptions {
    return ProducerFoldedLeafletOptionsFromJSONTyped(json, false);
}

export function ProducerFoldedLeafletOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerFoldedLeafletOptions {
    if (json == null) {
        return json;
    }
    return {

        'finishedSizes': json['finished_sizes'] == null ? undefined : ((json['finished_sizes'] as Array<any>).map(DimensionCapabilityFromJSON)),
        'flatSizes': json['flat_sizes'] == null ? undefined : ((json['flat_sizes'] as Array<any>).map(DimensionCapabilityFromJSON)),
        'foldPatterns': json['fold_patterns'] == null ? undefined : json['fold_patterns'],
        'panelCounts': json['panel_counts'] == null ? undefined : json['panel_counts'],
    };
}

export function ProducerFoldedLeafletOptionsToJSON(json: any): ProducerFoldedLeafletOptions {
    return ProducerFoldedLeafletOptionsToJSONTyped(json, false);
}

export function ProducerFoldedLeafletOptionsToJSONTyped(value?: ProducerFoldedLeafletOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'finished_sizes': value['finishedSizes'] == null ? undefined : ((value['finishedSizes'] as Array<any>).map(DimensionCapabilityToJSON)),
        'flat_sizes': value['flatSizes'] == null ? undefined : ((value['flatSizes'] as Array<any>).map(DimensionCapabilityToJSON)),
        'fold_patterns': value['foldPatterns'],
        'panel_counts': value['panelCounts'],
    };
}
