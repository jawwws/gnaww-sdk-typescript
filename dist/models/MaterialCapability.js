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
exports.MaterialCapabilityCategoryEnum = void 0;
exports.instanceOfMaterialCapability = instanceOfMaterialCapability;
exports.MaterialCapabilityFromJSON = MaterialCapabilityFromJSON;
exports.MaterialCapabilityFromJSONTyped = MaterialCapabilityFromJSONTyped;
exports.MaterialCapabilityToJSON = MaterialCapabilityToJSON;
exports.MaterialCapabilityToJSONTyped = MaterialCapabilityToJSONTyped;
const MaterialCompositionPart_1 = require("./MaterialCompositionPart");
/**
 * @export
 */
exports.MaterialCapabilityCategoryEnum = {
    Paper: 'paper',
    Board: 'board',
    Synthetic: 'synthetic',
    Textile: 'textile',
    Plastic: 'plastic',
    Metal: 'metal',
    Ceramic: 'ceramic',
    Glass: 'glass',
    Wood: 'wood',
    Other: 'other',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the MaterialCapability interface.
 */
function instanceOfMaterialCapability(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
function MaterialCapabilityFromJSON(json) {
    return MaterialCapabilityFromJSONTyped(json, false);
}
function MaterialCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'category': json['category'] == null ? undefined : json['category'],
        'certifications': json['certifications'] == null ? undefined : json['certifications'],
        'composition': json['composition'] == null ? undefined : (json['composition'].map(MaterialCompositionPart_1.MaterialCompositionPartFromJSON)),
        'finish': json['finish'] == null ? undefined : json['finish'],
        'maximumWeightGsm': json['maximum_weight_gsm'] == null ? undefined : json['maximum_weight_gsm'],
        'minimumWeightGsm': json['minimum_weight_gsm'] == null ? undefined : json['minimum_weight_gsm'],
        'name': json['name'],
        'standardWeightsGsm': json['standard_weights_gsm'] == null ? undefined : json['standard_weights_gsm'],
        'weightGsm': json['weight_gsm'] == null ? undefined : json['weight_gsm'],
    };
}
function MaterialCapabilityToJSON(json) {
    return MaterialCapabilityToJSONTyped(json, false);
}
function MaterialCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'category': value['category'],
        'certifications': value['certifications'],
        'composition': value['composition'] == null ? undefined : (value['composition'].map(MaterialCompositionPart_1.MaterialCompositionPartToJSON)),
        'finish': value['finish'],
        'maximum_weight_gsm': value['maximumWeightGsm'],
        'minimum_weight_gsm': value['minimumWeightGsm'],
        'name': value['name'],
        'standard_weights_gsm': value['standardWeightsGsm'],
        'weight_gsm': value['weightGsm'],
    };
}
