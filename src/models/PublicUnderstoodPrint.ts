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
 * Deterministically understood print-process evidence before canonical completion.
 * @export
 * @interface PublicUnderstoodPrint
 */
export interface PublicUnderstoodPrint {
    /**
     *
     * @type {PublicUnderstoodPrintColourEnum}
     * @memberof PublicUnderstoodPrint
     */
    colour?: PublicUnderstoodPrintColourEnum | null;
    /**
     *
     * @type {Array<PublicUnderstoodPrintProcessesEnum>}
     * @memberof PublicUnderstoodPrint
     */
    processes?: Array<PublicUnderstoodPrintProcessesEnum>;
    /**
     *
     * @type {PublicUnderstoodPrintSidesEnum}
     * @memberof PublicUnderstoodPrint
     */
    sides?: PublicUnderstoodPrintSidesEnum | null;
}


/**
 * @export
 */
export const PublicUnderstoodPrintColourEnum = {
    Mono: 'mono',
    FullColour: 'full_colour',
    Spot: 'spot',
    Unknown: 'unknown'
} as const;
export type PublicUnderstoodPrintColourEnum = typeof PublicUnderstoodPrintColourEnum[keyof typeof PublicUnderstoodPrintColourEnum];

/**
 * @export
 */
export const PublicUnderstoodPrintProcessesEnum = {
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
export type PublicUnderstoodPrintProcessesEnum = typeof PublicUnderstoodPrintProcessesEnum[keyof typeof PublicUnderstoodPrintProcessesEnum];

/**
 * @export
 */
export const PublicUnderstoodPrintSidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
} as const;
export type PublicUnderstoodPrintSidesEnum = typeof PublicUnderstoodPrintSidesEnum[keyof typeof PublicUnderstoodPrintSidesEnum];


/**
 * Check if a given object implements the PublicUnderstoodPrint interface.
 */
export function instanceOfPublicUnderstoodPrint(value: object): value is PublicUnderstoodPrint {
    return true;
}

export function PublicUnderstoodPrintFromJSON(json: any): PublicUnderstoodPrint {
    return PublicUnderstoodPrintFromJSONTyped(json, false);
}

export function PublicUnderstoodPrintFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicUnderstoodPrint {
    if (json == null) {
        return json;
    }
    return {

        'colour': json['colour'] == null ? undefined : json['colour'],
        'processes': json['processes'] == null ? undefined : json['processes'],
        'sides': json['sides'] == null ? undefined : json['sides'],
    };
}

export function PublicUnderstoodPrintToJSON(json: any): PublicUnderstoodPrint {
    return PublicUnderstoodPrintToJSONTyped(json, false);
}

export function PublicUnderstoodPrintToJSONTyped(value?: PublicUnderstoodPrint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'colour': value['colour'],
        'processes': value['processes'],
        'sides': value['sides'],
    };
}
