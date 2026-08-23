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
/**
 * Printed production attributes.
 * @export
 * @interface PrintSpec
 */
export interface PrintSpec {
    /**
     *
     * @type {PrintSpecColourEnum}
     * @memberof PrintSpec
     */
    colour?: PrintSpecColourEnum;
    /**
     *
     * @type {Array<PrintSpecProcessesEnum>}
     * @memberof PrintSpec
     */
    processes?: Array<PrintSpecProcessesEnum>;
    /**
     *
     * @type {PrintSpecSidesEnum}
     * @memberof PrintSpec
     */
    sides?: PrintSpecSidesEnum;
}


/**
 * @export
 */
export const PrintSpecColourEnum = {
    Mono: 'mono',
    FullColour: 'full_colour',
    Spot: 'spot',
    Unknown: 'unknown'
} as const;
export type PrintSpecColourEnum = typeof PrintSpecColourEnum[keyof typeof PrintSpecColourEnum];

/**
 * @export
 */
export const PrintSpecProcessesEnum = {
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
export type PrintSpecProcessesEnum = typeof PrintSpecProcessesEnum[keyof typeof PrintSpecProcessesEnum];

/**
 * @export
 */
export const PrintSpecSidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
} as const;
export type PrintSpecSidesEnum = typeof PrintSpecSidesEnum[keyof typeof PrintSpecSidesEnum];


/**
 * Check if a given object implements the PrintSpec interface.
 */
export function instanceOfPrintSpec(value: object): value is PrintSpec {
    return true;
}

export function PrintSpecFromJSON(json: any): PrintSpec {
    return PrintSpecFromJSONTyped(json, false);
}

export function PrintSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrintSpec {
    if (json == null) {
        return json;
    }
    return {

        'colour': json['colour'] == null ? undefined : json['colour'],
        'processes': json['processes'] == null ? undefined : json['processes'],
        'sides': json['sides'] == null ? undefined : json['sides'],
    };
}

export function PrintSpecToJSON(json: any): PrintSpec {
    return PrintSpecToJSONTyped(json, false);
}

export function PrintSpecToJSONTyped(value?: PrintSpec | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'colour': value['colour'],
        'processes': value['processes'],
        'sides': value['sides'],
    };
}
