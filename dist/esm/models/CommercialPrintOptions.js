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
import { ColourCapabilityFromJSON, ColourCapabilityToJSON, } from './ColourCapability';
import { PersonalisationCapabilityFromJSON, PersonalisationCapabilityToJSON, } from './PersonalisationCapability';
import { CustomDimensionCapabilityFromJSON, CustomDimensionCapabilityToJSON, } from './CustomDimensionCapability';
import { DimensionCapabilityFromJSON, DimensionCapabilityToJSON, } from './DimensionCapability';
import { MaterialCapabilityFromJSON, MaterialCapabilityToJSON, } from './MaterialCapability';
/**
 * @export
 */
export const CommercialPrintOptionsPrintedSidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the CommercialPrintOptions interface.
 */
export function instanceOfCommercialPrintOptions(value) {
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
export function CommercialPrintOptionsFromJSON(json) {
    return CommercialPrintOptionsFromJSONTyped(json, false);
}
export function CommercialPrintOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'colour': ColourCapabilityFromJSON(json['colour']),
        'customDimensions': json['custom_dimensions'] == null ? undefined : CustomDimensionCapabilityFromJSON(json['custom_dimensions']),
        'dimensions': (json['dimensions'].map(DimensionCapabilityFromJSON)),
        'materials': (json['materials'].map(MaterialCapabilityFromJSON)),
        'personalisation': json['personalisation'] == null ? undefined : PersonalisationCapabilityFromJSON(json['personalisation']),
        'printedSides': json['printed_sides'],
    };
}
export function CommercialPrintOptionsToJSON(json) {
    return CommercialPrintOptionsToJSONTyped(json, false);
}
export function CommercialPrintOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'colour': ColourCapabilityToJSON(value['colour']),
        'custom_dimensions': CustomDimensionCapabilityToJSON(value['customDimensions']),
        'dimensions': (value['dimensions'].map(DimensionCapabilityToJSON)),
        'materials': (value['materials'].map(MaterialCapabilityToJSON)),
        'personalisation': PersonalisationCapabilityToJSON(value['personalisation']),
        'printed_sides': value['printedSides'],
    };
}
