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
 * Supported repeat behaviour for printed fabric.
 * @export
 * @interface RepeatPatternCapability
 */
export interface RepeatPatternCapability {
    /**
     *
     * @type {number}
     * @memberof RepeatPatternCapability
     */
    maximumHeightMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof RepeatPatternCapability
     */
    maximumWidthMm?: number | null;
    /**
     *
     * @type {Array<RepeatPatternCapabilityTypesEnum>}
     * @memberof RepeatPatternCapability
     */
    types?: Array<RepeatPatternCapabilityTypesEnum>;
}


/**
 * @export
 */
export const RepeatPatternCapabilityTypesEnum = {
    None: 'none',
    Straight: 'straight',
    HalfDrop: 'half_drop',
    Mirror: 'mirror',
    Seamless: 'seamless',
    Engineered: 'engineered',
    Unknown: 'unknown'
} as const;
export type RepeatPatternCapabilityTypesEnum = typeof RepeatPatternCapabilityTypesEnum[keyof typeof RepeatPatternCapabilityTypesEnum];


/**
 * Check if a given object implements the RepeatPatternCapability interface.
 */
export function instanceOfRepeatPatternCapability(value: object): value is RepeatPatternCapability {
    return true;
}

export function RepeatPatternCapabilityFromJSON(json: any): RepeatPatternCapability {
    return RepeatPatternCapabilityFromJSONTyped(json, false);
}

export function RepeatPatternCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepeatPatternCapability {
    if (json == null) {
        return json;
    }
    return {

        'maximumHeightMm': json['maximum_height_mm'] == null ? undefined : json['maximum_height_mm'],
        'maximumWidthMm': json['maximum_width_mm'] == null ? undefined : json['maximum_width_mm'],
        'types': json['types'] == null ? undefined : json['types'],
    };
}

export function RepeatPatternCapabilityToJSON(json: any): RepeatPatternCapability {
    return RepeatPatternCapabilityToJSONTyped(json, false);
}

export function RepeatPatternCapabilityToJSONTyped(value?: RepeatPatternCapability | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'maximum_height_mm': value['maximumHeightMm'],
        'maximum_width_mm': value['maximumWidthMm'],
        'types': value['types'],
    };
}
