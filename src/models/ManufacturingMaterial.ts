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
import type { AppModelsManufacturingGeometryMaterialCompositionPart } from './AppModelsManufacturingGeometryMaterialCompositionPart';
import {
    AppModelsManufacturingGeometryMaterialCompositionPartFromJSON,
    AppModelsManufacturingGeometryMaterialCompositionPartFromJSONTyped,
    AppModelsManufacturingGeometryMaterialCompositionPartToJSON,
    AppModelsManufacturingGeometryMaterialCompositionPartToJSONTyped,
} from './AppModelsManufacturingGeometryMaterialCompositionPart';
import type { GrammageRequirement } from './GrammageRequirement';
import {
    GrammageRequirementFromJSON,
    GrammageRequirementFromJSONTyped,
    GrammageRequirementToJSON,
    GrammageRequirementToJSONTyped,
} from './GrammageRequirement';

/**
 * Controlled material/substrate meaning for one component.
 * @export
 * @interface ManufacturingMaterial
 */
export interface ManufacturingMaterial {
    /**
     *
     * @type {ManufacturingMaterialCategoryEnum}
     * @memberof ManufacturingMaterial
     */
    category?: ManufacturingMaterialCategoryEnum;
    /**
     *
     * @type {string}
     * @memberof ManufacturingMaterial
     */
    colour?: string | null;
    /**
     *
     * @type {Array<AppModelsManufacturingGeometryMaterialCompositionPart>}
     * @memberof ManufacturingMaterial
     */
    composition?: Array<AppModelsManufacturingGeometryMaterialCompositionPart>;
    /**
     *
     * @type {string}
     * @memberof ManufacturingMaterial
     */
    finish?: string | null;
    /**
     *
     * @type {GrammageRequirement}
     * @memberof ManufacturingMaterial
     */
    grammageRequirement?: GrammageRequirement | null;
    /**
     *
     * @type {string}
     * @memberof ManufacturingMaterial
     */
    name?: string | null;
    /**
     *
     * @type {string}
     * @memberof ManufacturingMaterial
     */
    texture?: string | null;
    /**
     *
     * @type {number}
     * @memberof ManufacturingMaterial
     */
    thicknessMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof ManufacturingMaterial
     */
    weightGsm?: number | null;
}


/**
 * @export
 */
export const ManufacturingMaterialCategoryEnum = {
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
export type ManufacturingMaterialCategoryEnum = typeof ManufacturingMaterialCategoryEnum[keyof typeof ManufacturingMaterialCategoryEnum];


/**
 * Check if a given object implements the ManufacturingMaterial interface.
 */
export function instanceOfManufacturingMaterial(value: object): value is ManufacturingMaterial {
    return true;
}

export function ManufacturingMaterialFromJSON(json: any): ManufacturingMaterial {
    return ManufacturingMaterialFromJSONTyped(json, false);
}

export function ManufacturingMaterialFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingMaterial {
    if (json == null) {
        return json;
    }
    return {

        'category': json['category'] == null ? undefined : json['category'],
        'colour': json['colour'] == null ? undefined : json['colour'],
        'composition': json['composition'] == null ? undefined : ((json['composition'] as Array<any>).map(AppModelsManufacturingGeometryMaterialCompositionPartFromJSON)),
        'finish': json['finish'] == null ? undefined : json['finish'],
        'grammageRequirement': json['grammage_requirement'] == null ? undefined : GrammageRequirementFromJSON(json['grammage_requirement']),
        'name': json['name'] == null ? undefined : json['name'],
        'texture': json['texture'] == null ? undefined : json['texture'],
        'thicknessMm': json['thickness_mm'] == null ? undefined : json['thickness_mm'],
        'weightGsm': json['weight_gsm'] == null ? undefined : json['weight_gsm'],
    };
}

export function ManufacturingMaterialToJSON(json: any): ManufacturingMaterial {
    return ManufacturingMaterialToJSONTyped(json, false);
}

export function ManufacturingMaterialToJSONTyped(value?: ManufacturingMaterial | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'category': value['category'],
        'colour': value['colour'],
        'composition': value['composition'] == null ? undefined : ((value['composition'] as Array<any>).map(AppModelsManufacturingGeometryMaterialCompositionPartToJSON)),
        'finish': value['finish'],
        'grammage_requirement': GrammageRequirementToJSON(value['grammageRequirement']),
        'name': value['name'],
        'texture': value['texture'],
        'thickness_mm': value['thicknessMm'],
        'weight_gsm': value['weightGsm'],
    };
}
