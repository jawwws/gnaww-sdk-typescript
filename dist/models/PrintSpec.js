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
exports.PrintSpecSidesEnum = exports.PrintSpecProcessesEnum = exports.PrintSpecColourEnum = void 0;
exports.instanceOfPrintSpec = instanceOfPrintSpec;
exports.PrintSpecFromJSON = PrintSpecFromJSON;
exports.PrintSpecFromJSONTyped = PrintSpecFromJSONTyped;
exports.PrintSpecToJSON = PrintSpecToJSON;
exports.PrintSpecToJSONTyped = PrintSpecToJSONTyped;
/**
 * @export
 */
exports.PrintSpecColourEnum = {
    Mono: 'mono',
    FullColour: 'full_colour',
    Spot: 'spot',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.PrintSpecProcessesEnum = {
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
exports.PrintSpecSidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the PrintSpec interface.
 */
function instanceOfPrintSpec(value) {
    return true;
}
function PrintSpecFromJSON(json) {
    return PrintSpecFromJSONTyped(json, false);
}
function PrintSpecFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'colour': json['colour'] == null ? undefined : json['colour'],
        'processes': json['processes'] == null ? undefined : json['processes'],
        'sides': json['sides'] == null ? undefined : json['sides'],
    };
}
function PrintSpecToJSON(json) {
    return PrintSpecToJSONTyped(json, false);
}
function PrintSpecToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'colour': value['colour'],
        'processes': value['processes'],
        'sides': value['sides'],
    };
}
