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
 * Apparel decoration production options.
 * @export
 * @interface ApparelDecorationOptions
 */
export interface ApparelDecorationOptions {
    /**
     *
     * @type {ApparelDecorationOptionsDecorationMethodEnum}
     * @memberof ApparelDecorationOptions
     */
    decorationMethod?: ApparelDecorationOptionsDecorationMethodEnum;
    /**
     *
     * @type {string}
     * @memberof ApparelDecorationOptions
     */
    garmentColour?: string | null;
    /**
     *
     * @type {string}
     * @memberof ApparelDecorationOptions
     */
    garmentType?: string | null;
    /**
     *
     * @type {ApparelDecorationOptionsPositionEnum}
     * @memberof ApparelDecorationOptions
     */
    position?: ApparelDecorationOptionsPositionEnum;
    /**
     *
     * @type {number}
     * @memberof ApparelDecorationOptions
     */
    printableHeightMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof ApparelDecorationOptions
     */
    printableWidthMm?: number | null;
    /**
     *
     * @type {Array<string>}
     * @memberof ApparelDecorationOptions
     */
    sizeRange?: Array<string>;
}


/**
 * @export
 */
export const ApparelDecorationOptionsDecorationMethodEnum = {
    Dtg: 'dtg',
    Dtf: 'dtf',
    Htv: 'htv',
    Embroidery: 'embroidery',
    ScreenPrint: 'screen_print',
    Sublimation: 'sublimation',
    PadPrint: 'pad_print',
    UvPrint: 'uv_print',
    Engraving: 'engraving',
    LaserEngraving: 'laser_engraving',
    Unknown: 'unknown'
} as const;
export type ApparelDecorationOptionsDecorationMethodEnum = typeof ApparelDecorationOptionsDecorationMethodEnum[keyof typeof ApparelDecorationOptionsDecorationMethodEnum];

/**
 * @export
 */
export const ApparelDecorationOptionsPositionEnum = {
    Front: 'front',
    Back: 'back',
    LeftChest: 'left_chest',
    RightChest: 'right_chest',
    Sleeve: 'sleeve',
    CapFront: 'cap_front',
    Left: 'left',
    Right: 'right',
    Wrap: 'wrap',
    Barrel: 'barrel',
    Lid: 'lid',
    Base: 'base',
    Unknown: 'unknown'
} as const;
export type ApparelDecorationOptionsPositionEnum = typeof ApparelDecorationOptionsPositionEnum[keyof typeof ApparelDecorationOptionsPositionEnum];


/**
 * Check if a given object implements the ApparelDecorationOptions interface.
 */
export function instanceOfApparelDecorationOptions(value: object): value is ApparelDecorationOptions {
    return true;
}

export function ApparelDecorationOptionsFromJSON(json: any): ApparelDecorationOptions {
    return ApparelDecorationOptionsFromJSONTyped(json, false);
}

export function ApparelDecorationOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApparelDecorationOptions {
    if (json == null) {
        return json;
    }
    return {

        'decorationMethod': json['decoration_method'] == null ? undefined : json['decoration_method'],
        'garmentColour': json['garment_colour'] == null ? undefined : json['garment_colour'],
        'garmentType': json['garment_type'] == null ? undefined : json['garment_type'],
        'position': json['position'] == null ? undefined : json['position'],
        'printableHeightMm': json['printable_height_mm'] == null ? undefined : json['printable_height_mm'],
        'printableWidthMm': json['printable_width_mm'] == null ? undefined : json['printable_width_mm'],
        'sizeRange': json['size_range'] == null ? undefined : json['size_range'],
    };
}

export function ApparelDecorationOptionsToJSON(json: any): ApparelDecorationOptions {
    return ApparelDecorationOptionsToJSONTyped(json, false);
}

export function ApparelDecorationOptionsToJSONTyped(value?: ApparelDecorationOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'decoration_method': value['decorationMethod'],
        'garment_colour': value['garmentColour'],
        'garment_type': value['garmentType'],
        'position': value['position'],
        'printable_height_mm': value['printableHeightMm'],
        'printable_width_mm': value['printableWidthMm'],
        'size_range': value['sizeRange'],
    };
}
