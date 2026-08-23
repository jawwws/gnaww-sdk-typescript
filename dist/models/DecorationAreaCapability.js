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
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecorationAreaCapabilityPositionEnum = exports.DecorationAreaCapabilityMethodsEnum = void 0;
exports.instanceOfDecorationAreaCapability = instanceOfDecorationAreaCapability;
exports.DecorationAreaCapabilityFromJSON = DecorationAreaCapabilityFromJSON;
exports.DecorationAreaCapabilityFromJSONTyped = DecorationAreaCapabilityFromJSONTyped;
exports.DecorationAreaCapabilityToJSON = DecorationAreaCapabilityToJSON;
exports.DecorationAreaCapabilityToJSONTyped = DecorationAreaCapabilityToJSONTyped;
/**
 * @export
 */
exports.DecorationAreaCapabilityMethodsEnum = {
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
exports.DecorationAreaCapabilityPositionEnum = {
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
 * Check if a given object implements the DecorationAreaCapability interface.
 */
function instanceOfDecorationAreaCapability(value) {
    if (!('methods' in value) || value['methods'] === undefined)
        return false;
    if (!('position' in value) || value['position'] === undefined)
        return false;
    return true;
}
function DecorationAreaCapabilityFromJSON(json) {
    return DecorationAreaCapabilityFromJSONTyped(json, false);
}
function DecorationAreaCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'maximumColours': json['maximum_colours'] == null ? undefined : json['maximum_colours'],
        'maximumDiameterMm': json['maximum_diameter_mm'] == null ? undefined : json['maximum_diameter_mm'],
        'maximumHeightMm': json['maximum_height_mm'] == null ? undefined : json['maximum_height_mm'],
        'maximumWidthMm': json['maximum_width_mm'] == null ? undefined : json['maximum_width_mm'],
        'methods': json['methods'],
        'position': json['position'],
        'supportsFullColour': json['supports_full_colour'] == null ? undefined : json['supports_full_colour'],
    };
}
function DecorationAreaCapabilityToJSON(json) {
    return DecorationAreaCapabilityToJSONTyped(json, false);
}
function DecorationAreaCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'maximum_colours': value['maximumColours'],
        'maximum_diameter_mm': value['maximumDiameterMm'],
        'maximum_height_mm': value['maximumHeightMm'],
        'maximum_width_mm': value['maximumWidthMm'],
        'methods': value['methods'],
        'position': value['position'],
        'supports_full_colour': value['supportsFullColour'],
    };
}
