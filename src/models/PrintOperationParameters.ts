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
 *
 * @export
 * @interface PrintOperationParameters
 */
export interface PrintOperationParameters {
    /**
     *
     * @type {PrintOperationParametersColourEnum}
     * @memberof PrintOperationParameters
     */
    colour?: PrintOperationParametersColourEnum;
    /**
     *
     * @type {string}
     * @memberof PrintOperationParameters
     */
    colourantSystem?: string | null;
    /**
     *
     * @type {PrintOperationParametersKindEnum}
     * @memberof PrintOperationParameters
     */
    kind?: PrintOperationParametersKindEnum;
    /**
     *
     * @type {Array<PrintOperationParametersProcessesEnum>}
     * @memberof PrintOperationParameters
     */
    processes?: Array<PrintOperationParametersProcessesEnum>;
    /**
     *
     * @type {PrintOperationParametersSidesEnum}
     * @memberof PrintOperationParameters
     */
    sides?: PrintOperationParametersSidesEnum;
}


/**
 * @export
 */
export const PrintOperationParametersColourEnum = {
    Mono: 'mono',
    FullColour: 'full_colour',
    Spot: 'spot',
    Unknown: 'unknown'
} as const;
export type PrintOperationParametersColourEnum = typeof PrintOperationParametersColourEnum[keyof typeof PrintOperationParametersColourEnum];

/**
 * @export
 */
export const PrintOperationParametersKindEnum = {
    Print: 'print'
} as const;
export type PrintOperationParametersKindEnum = typeof PrintOperationParametersKindEnum[keyof typeof PrintOperationParametersKindEnum];

/**
 * @export
 */
export const PrintOperationParametersProcessesEnum = {
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
export type PrintOperationParametersProcessesEnum = typeof PrintOperationParametersProcessesEnum[keyof typeof PrintOperationParametersProcessesEnum];

/**
 * @export
 */
export const PrintOperationParametersSidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
} as const;
export type PrintOperationParametersSidesEnum = typeof PrintOperationParametersSidesEnum[keyof typeof PrintOperationParametersSidesEnum];


/**
 * Check if a given object implements the PrintOperationParameters interface.
 */
export function instanceOfPrintOperationParameters(value: object): value is PrintOperationParameters {
    return true;
}

export function PrintOperationParametersFromJSON(json: any): PrintOperationParameters {
    return PrintOperationParametersFromJSONTyped(json, false);
}

export function PrintOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrintOperationParameters {
    if (json == null) {
        return json;
    }
    return {

        'colour': json['colour'] == null ? undefined : json['colour'],
        'colourantSystem': json['colourant_system'] == null ? undefined : json['colourant_system'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'processes': json['processes'] == null ? undefined : json['processes'],
        'sides': json['sides'] == null ? undefined : json['sides'],
    };
}

export function PrintOperationParametersToJSON(json: any): PrintOperationParameters {
    return PrintOperationParametersToJSONTyped(json, false);
}

export function PrintOperationParametersToJSONTyped(value?: PrintOperationParameters | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'colour': value['colour'],
        'colourant_system': value['colourantSystem'],
        'kind': value['kind'],
        'processes': value['processes'],
        'sides': value['sides'],
    };
}
