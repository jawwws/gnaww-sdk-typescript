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
exports.PublicUnderstoodFinishingProcessEnum = exports.PublicUnderstoodFinishingCategoryEnum = void 0;
exports.instanceOfPublicUnderstoodFinishing = instanceOfPublicUnderstoodFinishing;
exports.PublicUnderstoodFinishingFromJSON = PublicUnderstoodFinishingFromJSON;
exports.PublicUnderstoodFinishingFromJSONTyped = PublicUnderstoodFinishingFromJSONTyped;
exports.PublicUnderstoodFinishingToJSON = PublicUnderstoodFinishingToJSON;
exports.PublicUnderstoodFinishingToJSONTyped = PublicUnderstoodFinishingToJSONTyped;
/**
 * @export
 */
exports.PublicUnderstoodFinishingCategoryEnum = {
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
};
/**
 * @export
 */
exports.PublicUnderstoodFinishingProcessEnum = {
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
 * Check if a given object implements the PublicUnderstoodFinishing interface.
 */
function instanceOfPublicUnderstoodFinishing(value) {
    if (!('category' in value) || value['category'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
function PublicUnderstoodFinishingFromJSON(json) {
    return PublicUnderstoodFinishingFromJSONTyped(json, false);
}
function PublicUnderstoodFinishingFromJSONTyped(json, ignoreDiscriminator) {
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
function PublicUnderstoodFinishingToJSON(json) {
    return PublicUnderstoodFinishingToJSONTyped(json, false);
}
function PublicUnderstoodFinishingToJSONTyped(value, ignoreDiscriminator = false) {
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
