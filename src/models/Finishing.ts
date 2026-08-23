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
 * A requested finishing operation.
 * @export
 * @interface Finishing
 */
export interface Finishing {
    /**
     *
     * @type {FinishingCategoryEnum}
     * @memberof Finishing
     */
    category?: FinishingCategoryEnum;
    /**
     *
     * @type {string}
     * @memberof Finishing
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof Finishing
     */
    notes?: string | null;
    /**
     *
     * @type {FinishingProcessEnum}
     * @memberof Finishing
     */
    process?: FinishingProcessEnum | null;
}


/**
 * @export
 */
export const FinishingCategoryEnum = {
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
export type FinishingCategoryEnum = typeof FinishingCategoryEnum[keyof typeof FinishingCategoryEnum];

/**
 * @export
 */
export const FinishingProcessEnum = {
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
export type FinishingProcessEnum = typeof FinishingProcessEnum[keyof typeof FinishingProcessEnum];


/**
 * Check if a given object implements the Finishing interface.
 */
export function instanceOfFinishing(value: object): value is Finishing {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function FinishingFromJSON(json: any): Finishing {
    return FinishingFromJSONTyped(json, false);
}

export function FinishingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Finishing {
    if (json == null) {
        return json;
    }
    return {

        'category': json['category'] == null ? undefined : json['category'],
        'name': json['name'],
        'notes': json['notes'] == null ? undefined : json['notes'],
        'process': json['process'] == null ? undefined : json['process'],
    };
}

export function FinishingToJSON(json: any): Finishing {
    return FinishingToJSONTyped(json, false);
}

export function FinishingToJSONTyped(value?: Finishing | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'category': value['category'],
        'name': value['name'],
        'notes': value['notes'],
        'process': value['process'],
    };
}
