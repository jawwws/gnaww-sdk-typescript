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
exports.VariationFieldDataTypeEnum = void 0;
exports.instanceOfVariationField = instanceOfVariationField;
exports.VariationFieldFromJSON = VariationFieldFromJSON;
exports.VariationFieldFromJSONTyped = VariationFieldFromJSONTyped;
exports.VariationFieldToJSON = VariationFieldToJSON;
exports.VariationFieldToJSONTyped = VariationFieldToJSONTyped;
/**
 * @export
 */
exports.VariationFieldDataTypeEnum = {
    Text: 'text',
    Number: 'number',
    Image: 'image',
    Code: 'code',
    Artwork: 'artwork',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the VariationField interface.
 */
function instanceOfVariationField(value) {
    if (!('fieldKey' in value) || value['fieldKey'] === undefined)
        return false;
    return true;
}
function VariationFieldFromJSON(json) {
    return VariationFieldFromJSONTyped(json, false);
}
function VariationFieldFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'artworkOrAssetRef': json['artwork_or_asset_ref'] == null ? undefined : json['artwork_or_asset_ref'],
        'dataType': json['data_type'] == null ? undefined : json['data_type'],
        'fieldKey': json['field_key'],
    };
}
function VariationFieldToJSON(json) {
    return VariationFieldToJSONTyped(json, false);
}
function VariationFieldToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'artwork_or_asset_ref': value['artworkOrAssetRef'],
        'data_type': value['dataType'],
        'field_key': value['fieldKey'],
    };
}
