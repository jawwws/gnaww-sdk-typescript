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
exports.instanceOfMaterialCompositionPart = instanceOfMaterialCompositionPart;
exports.MaterialCompositionPartFromJSON = MaterialCompositionPartFromJSON;
exports.MaterialCompositionPartFromJSONTyped = MaterialCompositionPartFromJSONTyped;
exports.MaterialCompositionPartToJSON = MaterialCompositionPartToJSON;
exports.MaterialCompositionPartToJSONTyped = MaterialCompositionPartToJSONTyped;
/**
 * Check if a given object implements the MaterialCompositionPart interface.
 */
function instanceOfMaterialCompositionPart(value) {
    if (!('material' in value) || value['material'] === undefined)
        return false;
    return true;
}
function MaterialCompositionPartFromJSON(json) {
    return MaterialCompositionPartFromJSONTyped(json, false);
}
function MaterialCompositionPartFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'material': json['material'],
        'percentage': json['percentage'] == null ? undefined : json['percentage'],
    };
}
function MaterialCompositionPartToJSON(json) {
    return MaterialCompositionPartToJSONTyped(json, false);
}
function MaterialCompositionPartToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'material': value['material'],
        'percentage': value['percentage'],
    };
}
