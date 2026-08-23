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
import type { GrammageRequirement } from './GrammageRequirement';
import {
    GrammageRequirementFromJSON,
    GrammageRequirementFromJSONTyped,
    GrammageRequirementToJSON,
    GrammageRequirementToJSONTyped,
} from './GrammageRequirement';

/**
 * Requested substrate or material.
 * @export
 * @interface Substrate
 */
export interface Substrate {
    /**
     *
     * @type {SubstrateCategoryEnum}
     * @memberof Substrate
     */
    category?: SubstrateCategoryEnum;
    /**
     *
     * @type {SubstrateFinishEnum}
     * @memberof Substrate
     */
    finish?: SubstrateFinishEnum;
    /**
     *
     * @type {GrammageRequirement}
     * @memberof Substrate
     */
    grammageRequirement?: GrammageRequirement | null;
    /**
     *
     * @type {string}
     * @memberof Substrate
     */
    material?: string | null;
    /**
     *
     * @type {string}
     * @memberof Substrate
     */
    texture?: string | null;
    /**
     *
     * @type {number}
     * @memberof Substrate
     */
    weightGsm?: number | null;
}


/**
 * @export
 */
export const SubstrateCategoryEnum = {
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
export type SubstrateCategoryEnum = typeof SubstrateCategoryEnum[keyof typeof SubstrateCategoryEnum];

/**
 * @export
 */
export const SubstrateFinishEnum = {
    Silk: 'silk',
    Gloss: 'gloss',
    Uncoated: 'uncoated',
    Linen: 'linen',
    Synthetic: 'synthetic',
    Textile: 'textile',
    Other: 'other',
    Unknown: 'unknown'
} as const;
export type SubstrateFinishEnum = typeof SubstrateFinishEnum[keyof typeof SubstrateFinishEnum];


/**
 * Check if a given object implements the Substrate interface.
 */
export function instanceOfSubstrate(value: object): value is Substrate {
    return true;
}

export function SubstrateFromJSON(json: any): Substrate {
    return SubstrateFromJSONTyped(json, false);
}

export function SubstrateFromJSONTyped(json: any, ignoreDiscriminator: boolean): Substrate {
    if (json == null) {
        return json;
    }
    return {

        'category': json['category'] == null ? undefined : json['category'],
        'finish': json['finish'] == null ? undefined : json['finish'],
        'grammageRequirement': json['grammage_requirement'] == null ? undefined : GrammageRequirementFromJSON(json['grammage_requirement']),
        'material': json['material'] == null ? undefined : json['material'],
        'texture': json['texture'] == null ? undefined : json['texture'],
        'weightGsm': json['weight_gsm'] == null ? undefined : json['weight_gsm'],
    };
}

export function SubstrateToJSON(json: any): Substrate {
    return SubstrateToJSONTyped(json, false);
}

export function SubstrateToJSONTyped(value?: Substrate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'category': value['category'],
        'finish': value['finish'],
        'grammage_requirement': GrammageRequirementToJSON(value['grammageRequirement']),
        'material': value['material'],
        'texture': value['texture'],
        'weight_gsm': value['weightGsm'],
    };
}
