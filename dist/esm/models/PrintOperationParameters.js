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
/**
 * @export
 */
export const PrintOperationParametersColourEnum = {
    Mono: 'mono',
    FullColour: 'full_colour',
    Spot: 'spot',
    Unknown: 'unknown'
};
/**
 * @export
 */
export const PrintOperationParametersKindEnum = {
    Print: 'print'
};
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
};
/**
 * @export
 */
export const PrintOperationParametersSidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the PrintOperationParameters interface.
 */
export function instanceOfPrintOperationParameters(value) {
    return true;
}
export function PrintOperationParametersFromJSON(json) {
    return PrintOperationParametersFromJSONTyped(json, false);
}
export function PrintOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
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
export function PrintOperationParametersToJSON(json) {
    return PrintOperationParametersToJSONTyped(json, false);
}
export function PrintOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
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
