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
exports.CommercialPrintOptionsPrintedSidesEnum = void 0;
exports.instanceOfCommercialPrintOptions = instanceOfCommercialPrintOptions;
exports.CommercialPrintOptionsFromJSON = CommercialPrintOptionsFromJSON;
exports.CommercialPrintOptionsFromJSONTyped = CommercialPrintOptionsFromJSONTyped;
exports.CommercialPrintOptionsToJSON = CommercialPrintOptionsToJSON;
exports.CommercialPrintOptionsToJSONTyped = CommercialPrintOptionsToJSONTyped;
const ColourCapability_1 = require("./ColourCapability");
const PersonalisationCapability_1 = require("./PersonalisationCapability");
const CustomDimensionCapability_1 = require("./CustomDimensionCapability");
const DimensionCapability_1 = require("./DimensionCapability");
const MaterialCapability_1 = require("./MaterialCapability");
/**
 * @export
 */
exports.CommercialPrintOptionsPrintedSidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the CommercialPrintOptions interface.
 */
function instanceOfCommercialPrintOptions(value) {
    if (!('colour' in value) || value['colour'] === undefined)
        return false;
    if (!('dimensions' in value) || value['dimensions'] === undefined)
        return false;
    if (!('materials' in value) || value['materials'] === undefined)
        return false;
    if (!('printedSides' in value) || value['printedSides'] === undefined)
        return false;
    return true;
}
function CommercialPrintOptionsFromJSON(json) {
    return CommercialPrintOptionsFromJSONTyped(json, false);
}
function CommercialPrintOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'colour': (0, ColourCapability_1.ColourCapabilityFromJSON)(json['colour']),
        'customDimensions': json['custom_dimensions'] == null ? undefined : (0, CustomDimensionCapability_1.CustomDimensionCapabilityFromJSON)(json['custom_dimensions']),
        'dimensions': (json['dimensions'].map(DimensionCapability_1.DimensionCapabilityFromJSON)),
        'materials': (json['materials'].map(MaterialCapability_1.MaterialCapabilityFromJSON)),
        'personalisation': json['personalisation'] == null ? undefined : (0, PersonalisationCapability_1.PersonalisationCapabilityFromJSON)(json['personalisation']),
        'printedSides': json['printed_sides'],
    };
}
function CommercialPrintOptionsToJSON(json) {
    return CommercialPrintOptionsToJSONTyped(json, false);
}
function CommercialPrintOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'colour': (0, ColourCapability_1.ColourCapabilityToJSON)(value['colour']),
        'custom_dimensions': (0, CustomDimensionCapability_1.CustomDimensionCapabilityToJSON)(value['customDimensions']),
        'dimensions': (value['dimensions'].map(DimensionCapability_1.DimensionCapabilityToJSON)),
        'materials': (value['materials'].map(MaterialCapability_1.MaterialCapabilityToJSON)),
        'personalisation': (0, PersonalisationCapability_1.PersonalisationCapabilityToJSON)(value['personalisation']),
        'printed_sides': value['printedSides'],
    };
}
