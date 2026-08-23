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
exports.ApparelDecorationOptionsPositionEnum = exports.ApparelDecorationOptionsDecorationMethodEnum = void 0;
exports.instanceOfApparelDecorationOptions = instanceOfApparelDecorationOptions;
exports.ApparelDecorationOptionsFromJSON = ApparelDecorationOptionsFromJSON;
exports.ApparelDecorationOptionsFromJSONTyped = ApparelDecorationOptionsFromJSONTyped;
exports.ApparelDecorationOptionsToJSON = ApparelDecorationOptionsToJSON;
exports.ApparelDecorationOptionsToJSONTyped = ApparelDecorationOptionsToJSONTyped;
/**
 * @export
 */
exports.ApparelDecorationOptionsDecorationMethodEnum = {
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
};
/**
 * @export
 */
exports.ApparelDecorationOptionsPositionEnum = {
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
};
/**
 * Check if a given object implements the ApparelDecorationOptions interface.
 */
function instanceOfApparelDecorationOptions(value) {
    return true;
}
function ApparelDecorationOptionsFromJSON(json) {
    return ApparelDecorationOptionsFromJSONTyped(json, false);
}
function ApparelDecorationOptionsFromJSONTyped(json, ignoreDiscriminator) {
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
function ApparelDecorationOptionsToJSON(json) {
    return ApparelDecorationOptionsToJSONTyped(json, false);
}
function ApparelDecorationOptionsToJSONTyped(value, ignoreDiscriminator = false) {
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
