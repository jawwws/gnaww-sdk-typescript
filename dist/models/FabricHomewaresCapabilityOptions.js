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
exports.FabricHomewaresCapabilityOptionsPrintedSidesEnum = exports.FabricHomewaresCapabilityOptionsPrintMethodsEnum = exports.FabricHomewaresCapabilityOptionsLiningTypesEnum = exports.FabricHomewaresCapabilityOptionsHemStylesEnum = exports.FabricHomewaresCapabilityOptionsFasteningTypesEnum = exports.FabricHomewaresCapabilityOptionsColourProfilesEnum = void 0;
exports.instanceOfFabricHomewaresCapabilityOptions = instanceOfFabricHomewaresCapabilityOptions;
exports.FabricHomewaresCapabilityOptionsFromJSON = FabricHomewaresCapabilityOptionsFromJSON;
exports.FabricHomewaresCapabilityOptionsFromJSONTyped = FabricHomewaresCapabilityOptionsFromJSONTyped;
exports.FabricHomewaresCapabilityOptionsToJSON = FabricHomewaresCapabilityOptionsToJSON;
exports.FabricHomewaresCapabilityOptionsToJSONTyped = FabricHomewaresCapabilityOptionsToJSONTyped;
const WashabilityCapability_1 = require("./WashabilityCapability");
const RepeatPatternCapability_1 = require("./RepeatPatternCapability");
const CustomDimensionCapability_1 = require("./CustomDimensionCapability");
const DimensionCapability_1 = require("./DimensionCapability");
const MaterialCapability_1 = require("./MaterialCapability");
/**
 * @export
 */
exports.FabricHomewaresCapabilityOptionsColourProfilesEnum = {
    Srgb: 'srgb',
    AdobeRgb: 'adobe_rgb',
    Cmyk: 'cmyk',
    IccManaged: 'icc_managed',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.FabricHomewaresCapabilityOptionsFasteningTypesEnum = {
    None: 'none',
    Zip: 'zip',
    ConcealedZip: 'concealed_zip',
    Buttons: 'buttons',
    Ties: 'ties',
    Eyelets: 'eyelets',
    HookAndLoop: 'hook_and_loop',
    Envelope: 'envelope',
    Drawstring: 'drawstring',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.FabricHomewaresCapabilityOptionsHemStylesEnum = {
    None: 'none',
    Overlocked: 'overlocked',
    SingleTurn: 'single_turn',
    DoubleTurn: 'double_turn',
    Rolled: 'rolled',
    Blind: 'blind',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.FabricHomewaresCapabilityOptionsLiningTypesEnum = {
    None: 'none',
    Standard: 'standard',
    Blackout: 'blackout',
    Thermal: 'thermal',
    Interlining: 'interlining',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.FabricHomewaresCapabilityOptionsPrintMethodsEnum = {
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
exports.FabricHomewaresCapabilityOptionsPrintedSidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the FabricHomewaresCapabilityOptions interface.
 */
function instanceOfFabricHomewaresCapabilityOptions(value) {
    return true;
}
function FabricHomewaresCapabilityOptionsFromJSON(json) {
    return FabricHomewaresCapabilityOptionsFromJSONTyped(json, false);
}
function FabricHomewaresCapabilityOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'colourProfiles': json['colour_profiles'] == null ? undefined : json['colour_profiles'],
        'customDimensions': json['custom_dimensions'] == null ? undefined : (0, CustomDimensionCapability_1.CustomDimensionCapabilityFromJSON)(json['custom_dimensions']),
        'dimensions': json['dimensions'] == null ? undefined : (json['dimensions'].map(DimensionCapability_1.DimensionCapabilityFromJSON)),
        'fasteningTypes': json['fastening_types'] == null ? undefined : json['fastening_types'],
        'hemStyles': json['hem_styles'] == null ? undefined : json['hem_styles'],
        'liningTypes': json['lining_types'] == null ? undefined : json['lining_types'],
        'materials': json['materials'] == null ? undefined : (json['materials'].map(MaterialCapability_1.MaterialCapabilityFromJSON)),
        'printMethods': json['print_methods'] == null ? undefined : json['print_methods'],
        'printedSides': json['printed_sides'] == null ? undefined : json['printed_sides'],
        'repeatPattern': json['repeat_pattern'] == null ? undefined : (0, RepeatPatternCapability_1.RepeatPatternCapabilityFromJSON)(json['repeat_pattern']),
        'washability': json['washability'] == null ? undefined : (0, WashabilityCapability_1.WashabilityCapabilityFromJSON)(json['washability']),
    };
}
function FabricHomewaresCapabilityOptionsToJSON(json) {
    return FabricHomewaresCapabilityOptionsToJSONTyped(json, false);
}
function FabricHomewaresCapabilityOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'colour_profiles': value['colourProfiles'],
        'custom_dimensions': (0, CustomDimensionCapability_1.CustomDimensionCapabilityToJSON)(value['customDimensions']),
        'dimensions': value['dimensions'] == null ? undefined : (value['dimensions'].map(DimensionCapability_1.DimensionCapabilityToJSON)),
        'fastening_types': value['fasteningTypes'],
        'hem_styles': value['hemStyles'],
        'lining_types': value['liningTypes'],
        'materials': value['materials'] == null ? undefined : (value['materials'].map(MaterialCapability_1.MaterialCapabilityToJSON)),
        'print_methods': value['printMethods'],
        'printed_sides': value['printedSides'],
        'repeat_pattern': (0, RepeatPatternCapability_1.RepeatPatternCapabilityToJSON)(value['repeatPattern']),
        'washability': (0, WashabilityCapability_1.WashabilityCapabilityToJSON)(value['washability']),
    };
}
