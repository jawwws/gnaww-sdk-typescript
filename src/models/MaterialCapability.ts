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
import type { MaterialCompositionPart } from './MaterialCompositionPart';
import {
    MaterialCompositionPartFromJSON,
    MaterialCompositionPartFromJSONTyped,
    MaterialCompositionPartToJSON,
    MaterialCompositionPartToJSONTyped,
} from './MaterialCompositionPart';

/**
 * A canonical material or substrate capability.
 * @export
 * @interface MaterialCapability
 */
export interface MaterialCapability {
    /**
     *
     * @type {MaterialCapabilityCategoryEnum}
     * @memberof MaterialCapability
     */
    category?: MaterialCapabilityCategoryEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof MaterialCapability
     */
    certifications?: Array<string>;
    /**
     *
     * @type {Array<MaterialCompositionPart>}
     * @memberof MaterialCapability
     */
    composition?: Array<MaterialCompositionPart>;
    /**
     *
     * @type {string}
     * @memberof MaterialCapability
     */
    finish?: string | null;
    /**
     *
     * @type {number}
     * @memberof MaterialCapability
     */
    maximumWeightGsm?: number | null;
    /**
     *
     * @type {number}
     * @memberof MaterialCapability
     */
    minimumWeightGsm?: number | null;
    /**
     *
     * @type {string}
     * @memberof MaterialCapability
     */
    name: string;
    /**
     *
     * @type {Array<number>}
     * @memberof MaterialCapability
     */
    standardWeightsGsm?: Array<number>;
    /**
     *
     * @type {number}
     * @memberof MaterialCapability
     */
    weightGsm?: number | null;
}


/**
 * @export
 */
export const MaterialCapabilityCategoryEnum = {
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
export type MaterialCapabilityCategoryEnum = typeof MaterialCapabilityCategoryEnum[keyof typeof MaterialCapabilityCategoryEnum];


/**
 * Check if a given object implements the MaterialCapability interface.
 */
export function instanceOfMaterialCapability(value: object): value is MaterialCapability {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function MaterialCapabilityFromJSON(json: any): MaterialCapability {
    return MaterialCapabilityFromJSONTyped(json, false);
}

export function MaterialCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaterialCapability {
    if (json == null) {
        return json;
    }
    return {

        'category': json['category'] == null ? undefined : json['category'],
        'certifications': json['certifications'] == null ? undefined : json['certifications'],
        'composition': json['composition'] == null ? undefined : ((json['composition'] as Array<any>).map(MaterialCompositionPartFromJSON)),
        'finish': json['finish'] == null ? undefined : json['finish'],
        'maximumWeightGsm': json['maximum_weight_gsm'] == null ? undefined : json['maximum_weight_gsm'],
        'minimumWeightGsm': json['minimum_weight_gsm'] == null ? undefined : json['minimum_weight_gsm'],
        'name': json['name'],
        'standardWeightsGsm': json['standard_weights_gsm'] == null ? undefined : json['standard_weights_gsm'],
        'weightGsm': json['weight_gsm'] == null ? undefined : json['weight_gsm'],
    };
}

export function MaterialCapabilityToJSON(json: any): MaterialCapability {
    return MaterialCapabilityToJSONTyped(json, false);
}

export function MaterialCapabilityToJSONTyped(value?: MaterialCapability | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'category': value['category'],
        'certifications': value['certifications'],
        'composition': value['composition'] == null ? undefined : ((value['composition'] as Array<any>).map(MaterialCompositionPartToJSON)),
        'finish': value['finish'],
        'maximum_weight_gsm': value['maximumWeightGsm'],
        'minimum_weight_gsm': value['minimumWeightGsm'],
        'name': value['name'],
        'standard_weights_gsm': value['standardWeightsGsm'],
        'weight_gsm': value['weightGsm'],
    };
}
