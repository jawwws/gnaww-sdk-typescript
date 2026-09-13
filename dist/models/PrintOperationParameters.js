"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintOperationParametersSidesEnum = exports.PrintOperationParametersProcessesEnum = exports.PrintOperationParametersKindEnum = exports.PrintOperationParametersColourEnum = void 0;
exports.instanceOfPrintOperationParameters = instanceOfPrintOperationParameters;
exports.PrintOperationParametersFromJSON = PrintOperationParametersFromJSON;
exports.PrintOperationParametersFromJSONTyped = PrintOperationParametersFromJSONTyped;
exports.PrintOperationParametersToJSON = PrintOperationParametersToJSON;
exports.PrintOperationParametersToJSONTyped = PrintOperationParametersToJSONTyped;
/**
 * @export
 */
exports.PrintOperationParametersColourEnum = {
    Mono: 'mono',
    FullColour: 'full_colour',
    Spot: 'spot',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.PrintOperationParametersKindEnum = {
    Print: 'print'
};
/**
 * @export
 */
exports.PrintOperationParametersProcessesEnum = {
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
exports.PrintOperationParametersSidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the PrintOperationParameters interface.
 */
function instanceOfPrintOperationParameters(value) {
    return true;
}
function PrintOperationParametersFromJSON(json) {
    return PrintOperationParametersFromJSONTyped(json, false);
}
function PrintOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
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
function PrintOperationParametersToJSON(json) {
    return PrintOperationParametersToJSONTyped(json, false);
}
function PrintOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
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
