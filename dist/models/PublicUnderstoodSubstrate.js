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
exports.PublicUnderstoodSubstrateFinishEnum = exports.PublicUnderstoodSubstrateCategoryEnum = void 0;
exports.instanceOfPublicUnderstoodSubstrate = instanceOfPublicUnderstoodSubstrate;
exports.PublicUnderstoodSubstrateFromJSON = PublicUnderstoodSubstrateFromJSON;
exports.PublicUnderstoodSubstrateFromJSONTyped = PublicUnderstoodSubstrateFromJSONTyped;
exports.PublicUnderstoodSubstrateToJSON = PublicUnderstoodSubstrateToJSON;
exports.PublicUnderstoodSubstrateToJSONTyped = PublicUnderstoodSubstrateToJSONTyped;
/**
 * @export
 */
exports.PublicUnderstoodSubstrateCategoryEnum = {
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
exports.PublicUnderstoodSubstrateFinishEnum = {
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
 * Check if a given object implements the PublicUnderstoodSubstrate interface.
 */
function instanceOfPublicUnderstoodSubstrate(value) {
    return true;
}
function PublicUnderstoodSubstrateFromJSON(json) {
    return PublicUnderstoodSubstrateFromJSONTyped(json, false);
}
function PublicUnderstoodSubstrateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'category': json['category'] == null ? undefined : json['category'],
        'finish': json['finish'] == null ? undefined : json['finish'],
        'material': json['material'] == null ? undefined : json['material'],
        'texture': json['texture'] == null ? undefined : json['texture'],
        'weightGsm': json['weight_gsm'] == null ? undefined : json['weight_gsm'],
    };
}
function PublicUnderstoodSubstrateToJSON(json) {
    return PublicUnderstoodSubstrateToJSONTyped(json, false);
}
function PublicUnderstoodSubstrateToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'category': value['category'],
        'finish': value['finish'],
        'material': value['material'],
        'texture': value['texture'],
        'weight_gsm': value['weightGsm'],
    };
}
