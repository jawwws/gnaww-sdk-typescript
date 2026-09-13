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
exports.PublicUnderstoodPrintSidesEnum = exports.PublicUnderstoodPrintProcessesEnum = exports.PublicUnderstoodPrintColourEnum = void 0;
exports.instanceOfPublicUnderstoodPrint = instanceOfPublicUnderstoodPrint;
exports.PublicUnderstoodPrintFromJSON = PublicUnderstoodPrintFromJSON;
exports.PublicUnderstoodPrintFromJSONTyped = PublicUnderstoodPrintFromJSONTyped;
exports.PublicUnderstoodPrintToJSON = PublicUnderstoodPrintToJSON;
exports.PublicUnderstoodPrintToJSONTyped = PublicUnderstoodPrintToJSONTyped;
/**
 * @export
 */
exports.PublicUnderstoodPrintColourEnum = {
    Mono: 'mono',
    FullColour: 'full_colour',
    Spot: 'spot',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.PublicUnderstoodPrintProcessesEnum = {
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
exports.PublicUnderstoodPrintSidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the PublicUnderstoodPrint interface.
 */
function instanceOfPublicUnderstoodPrint(value) {
    return true;
}
function PublicUnderstoodPrintFromJSON(json) {
    return PublicUnderstoodPrintFromJSONTyped(json, false);
}
function PublicUnderstoodPrintFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'colour': json['colour'] == null ? undefined : json['colour'],
        'processes': json['processes'] == null ? undefined : json['processes'],
        'sides': json['sides'] == null ? undefined : json['sides'],
    };
}
function PublicUnderstoodPrintToJSON(json) {
    return PublicUnderstoodPrintToJSONTyped(json, false);
}
function PublicUnderstoodPrintToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'colour': value['colour'],
        'processes': value['processes'],
        'sides': value['sides'],
    };
}
