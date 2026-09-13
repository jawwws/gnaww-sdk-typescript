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
 * Deterministically understood material evidence that is not yet canonical GJS.
 * @export
 * @interface PublicUnderstoodSubstrate
 */
export interface PublicUnderstoodSubstrate {
    /**
     *
     * @type {PublicUnderstoodSubstrateCategoryEnum}
     * @memberof PublicUnderstoodSubstrate
     */
    category?: PublicUnderstoodSubstrateCategoryEnum | null;
    /**
     *
     * @type {PublicUnderstoodSubstrateFinishEnum}
     * @memberof PublicUnderstoodSubstrate
     */
    finish?: PublicUnderstoodSubstrateFinishEnum | null;
    /**
     *
     * @type {string}
     * @memberof PublicUnderstoodSubstrate
     */
    material?: string | null;
    /**
     *
     * @type {string}
     * @memberof PublicUnderstoodSubstrate
     */
    texture?: string | null;
    /**
     *
     * @type {number}
     * @memberof PublicUnderstoodSubstrate
     */
    weightGsm?: number | null;
}


/**
 * @export
 */
export const PublicUnderstoodSubstrateCategoryEnum = {
    Paper: 'paper',
    Board: 'board',
    Synthetic: 'synthetic',
    Textile: 'textile',
    Plastic: 'plastic',
    Metal: 'metal',
    Ceramic: 'ceramic',
    Glass: 'glass',
    Wood: 'wood',
    Other: 'other',
    Unknown: 'unknown'
} as const;
export type PublicUnderstoodSubstrateCategoryEnum = typeof PublicUnderstoodSubstrateCategoryEnum[keyof typeof PublicUnderstoodSubstrateCategoryEnum];

/**
 * @export
 */
export const PublicUnderstoodSubstrateFinishEnum = {
    Silk: 'silk',
    Gloss: 'gloss',
    Uncoated: 'uncoated',
    Linen: 'linen',
    Synthetic: 'synthetic',
    Textile: 'textile',
    Other: 'other',
    Unknown: 'unknown'
} as const;
export type PublicUnderstoodSubstrateFinishEnum = typeof PublicUnderstoodSubstrateFinishEnum[keyof typeof PublicUnderstoodSubstrateFinishEnum];


/**
 * Check if a given object implements the PublicUnderstoodSubstrate interface.
 */
export function instanceOfPublicUnderstoodSubstrate(value: object): value is PublicUnderstoodSubstrate {
    return true;
}

export function PublicUnderstoodSubstrateFromJSON(json: any): PublicUnderstoodSubstrate {
    return PublicUnderstoodSubstrateFromJSONTyped(json, false);
}

export function PublicUnderstoodSubstrateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicUnderstoodSubstrate {
    if (json == null) {
        return json;
    }
    return {

        'category': json['category'] == null ? undefined : json['category'],
        'finish': json['finish'] == null ? undefined : json['finish'],
        'material': json['material'] == null ? undefined : json['material'],
        'texture': json['texture'] == null ? undefined : json['texture'],
        'weightGsm': json['weight_gsm'] == null ? undefined : json['weight_gsm'],
    };
}

export function PublicUnderstoodSubstrateToJSON(json: any): PublicUnderstoodSubstrate {
    return PublicUnderstoodSubstrateToJSONTyped(json, false);
}

export function PublicUnderstoodSubstrateToJSONTyped(value?: PublicUnderstoodSubstrate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'category': value['category'],
        'finish': value['finish'],
        'material': value['material'],
        'texture': value['texture'],
        'weight_gsm': value['weightGsm'],
    };
}
