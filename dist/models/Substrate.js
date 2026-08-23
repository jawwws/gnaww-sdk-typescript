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
exports.SubstrateFinishEnum = exports.SubstrateCategoryEnum = void 0;
exports.instanceOfSubstrate = instanceOfSubstrate;
exports.SubstrateFromJSON = SubstrateFromJSON;
exports.SubstrateFromJSONTyped = SubstrateFromJSONTyped;
exports.SubstrateToJSON = SubstrateToJSON;
exports.SubstrateToJSONTyped = SubstrateToJSONTyped;
const GrammageRequirement_1 = require("./GrammageRequirement");
/**
 * @export
 */
exports.SubstrateCategoryEnum = {
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
 * @export
 */
exports.SubstrateFinishEnum = {
    Silk: 'silk',
    Gloss: 'gloss',
    Uncoated: 'uncoated',
    Linen: 'linen',
    Synthetic: 'synthetic',
    Textile: 'textile',
    Other: 'other',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the Substrate interface.
 */
function instanceOfSubstrate(value) {
    return true;
}
function SubstrateFromJSON(json) {
    return SubstrateFromJSONTyped(json, false);
}
function SubstrateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'category': json['category'] == null ? undefined : json['category'],
        'finish': json['finish'] == null ? undefined : json['finish'],
        'grammageRequirement': json['grammage_requirement'] == null ? undefined : (0, GrammageRequirement_1.GrammageRequirementFromJSON)(json['grammage_requirement']),
        'material': json['material'] == null ? undefined : json['material'],
        'texture': json['texture'] == null ? undefined : json['texture'],
        'weightGsm': json['weight_gsm'] == null ? undefined : json['weight_gsm'],
    };
}
function SubstrateToJSON(json) {
    return SubstrateToJSONTyped(json, false);
}
function SubstrateToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'category': value['category'],
        'finish': value['finish'],
        'grammage_requirement': (0, GrammageRequirement_1.GrammageRequirementToJSON)(value['grammageRequirement']),
        'material': value['material'],
        'texture': value['texture'],
        'weight_gsm': value['weightGsm'],
    };
}
