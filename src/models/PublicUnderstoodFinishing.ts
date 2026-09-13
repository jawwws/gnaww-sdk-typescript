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
 * One controlled finishing fact established without claiming complete geometry.
 * @export
 * @interface PublicUnderstoodFinishing
 */
export interface PublicUnderstoodFinishing {
    /**
     *
     * @type {PublicUnderstoodFinishingCategoryEnum}
     * @memberof PublicUnderstoodFinishing
     */
    category: PublicUnderstoodFinishingCategoryEnum;
    /**
     *
     * @type {boolean}
     * @memberof PublicUnderstoodFinishing
     */
    geometryComplete?: boolean;
    /**
     *
     * @type {string}
     * @memberof PublicUnderstoodFinishing
     */
    name: string;
    /**
     *
     * @type {PublicUnderstoodFinishingProcessEnum}
     * @memberof PublicUnderstoodFinishing
     */
    process?: PublicUnderstoodFinishingProcessEnum | null;
    /**
     *
     * @type {string}
     * @memberof PublicUnderstoodFinishing
     */
    sourceExpression?: string | null;
}


/**
 * @export
 */
export const PublicUnderstoodFinishingCategoryEnum = {
    Folding: 'folding',
    Lamination: 'lamination',
    Binding: 'binding',
    Cutting: 'cutting',
    Drilling: 'drilling',
    Perforation: 'perforation',
    Creasing: 'creasing',
    Stitching: 'stitching',
    Foiling: 'foiling',
    SpotUv: 'spot_uv',
    DieCutting: 'die_cutting',
    Embossing: 'embossing',
    Debossing: 'debossing',
    CornerRounding: 'corner_rounding',
    Packaging: 'packaging',
    Other: 'other',
    Unknown: 'unknown'
} as const;
export type PublicUnderstoodFinishingCategoryEnum = typeof PublicUnderstoodFinishingCategoryEnum[keyof typeof PublicUnderstoodFinishingCategoryEnum];

/**
 * @export
 */
export const PublicUnderstoodFinishingProcessEnum = {
    DigitalPrint: 'digital_print',
    OffsetLitho: 'offset_litho',
    LargeFormat: 'large_format',
    Dtg: 'dtg',
    Dtf: 'dtf',
    Htv: 'htv',
    Embroidery: 'embroidery',
    ScreenPrint: 'screen_print',
    Sublimation: 'sublimation',
    DigitalTextilePrint: 'digital_textile_print',
    ReactiveDyePrint: 'reactive_dye_print',
    PigmentPrint: 'pigment_print',
    Sewing: 'sewing',
    Hemming: 'hemming',
    PadPrint: 'pad_print',
    UvPrint: 'uv_print',
    Engraving: 'engraving',
    LaserEngraving: 'laser_engraving',
    Cutting: 'cutting',
    Folding: 'folding',
    Binding: 'binding',
    Lamination: 'lamination',
    Foiling: 'foiling',
    SpotUv: 'spot_uv',
    Unknown: 'unknown'
} as const;
export type PublicUnderstoodFinishingProcessEnum = typeof PublicUnderstoodFinishingProcessEnum[keyof typeof PublicUnderstoodFinishingProcessEnum];


/**
 * Check if a given object implements the PublicUnderstoodFinishing interface.
 */
export function instanceOfPublicUnderstoodFinishing(value: object): value is PublicUnderstoodFinishing {
    if (!('category' in value) || value['category'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function PublicUnderstoodFinishingFromJSON(json: any): PublicUnderstoodFinishing {
    return PublicUnderstoodFinishingFromJSONTyped(json, false);
}

export function PublicUnderstoodFinishingFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicUnderstoodFinishing {
    if (json == null) {
        return json;
    }
    return {

        'category': json['category'],
        'geometryComplete': json['geometry_complete'] == null ? undefined : json['geometry_complete'],
        'name': json['name'],
        'process': json['process'] == null ? undefined : json['process'],
        'sourceExpression': json['source_expression'] == null ? undefined : json['source_expression'],
    };
}

export function PublicUnderstoodFinishingToJSON(json: any): PublicUnderstoodFinishing {
    return PublicUnderstoodFinishingToJSONTyped(json, false);
}

export function PublicUnderstoodFinishingToJSONTyped(value?: PublicUnderstoodFinishing | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'category': value['category'],
        'geometry_complete': value['geometryComplete'],
        'name': value['name'],
        'process': value['process'],
        'source_expression': value['sourceExpression'],
    };
}
