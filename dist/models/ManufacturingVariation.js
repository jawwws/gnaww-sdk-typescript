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
exports.ManufacturingVariationSourceBasisEnum = exports.ManufacturingVariationScopeEnum = void 0;
exports.instanceOfManufacturingVariation = instanceOfManufacturingVariation;
exports.ManufacturingVariationFromJSON = ManufacturingVariationFromJSON;
exports.ManufacturingVariationFromJSONTyped = ManufacturingVariationFromJSONTyped;
exports.ManufacturingVariationToJSON = ManufacturingVariationToJSON;
exports.ManufacturingVariationToJSONTyped = ManufacturingVariationToJSONTyped;
const VariationField_1 = require("./VariationField");
const OperationTarget_1 = require("./OperationTarget");
/**
 * @export
 */
exports.ManufacturingVariationScopeEnum = {
    PerUnit: 'per_unit',
    Grouped: 'grouped',
    Batch: 'batch'
};
/**
 * @export
 */
exports.ManufacturingVariationSourceBasisEnum = {
    Explicit: 'explicit',
    LegacyVariableData: 'legacy_variable_data'
};
/**
 * Check if a given object implements the ManufacturingVariation interface.
 */
function instanceOfManufacturingVariation(value) {
    if (!('scope' in value) || value['scope'] === undefined)
        return false;
    if (!('targets' in value) || value['targets'] === undefined)
        return false;
    if (!('variationId' in value) || value['variationId'] === undefined)
        return false;
    return true;
}
function ManufacturingVariationFromJSON(json) {
    return ManufacturingVariationFromJSONTyped(json, false);
}
function ManufacturingVariationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dataAssetRef': json['data_asset_ref'] == null ? undefined : json['data_asset_ref'],
        'fields': json['fields'] == null ? undefined : (json['fields'].map(VariationField_1.VariationFieldFromJSON)),
        'scope': json['scope'],
        'sourceBasis': json['source_basis'] == null ? undefined : json['source_basis'],
        'targets': (json['targets'].map(OperationTarget_1.OperationTargetFromJSON)),
        'variationId': json['variation_id'],
    };
}
function ManufacturingVariationToJSON(json) {
    return ManufacturingVariationToJSONTyped(json, false);
}
function ManufacturingVariationToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data_asset_ref': value['dataAssetRef'],
        'fields': value['fields'] == null ? undefined : (value['fields'].map(VariationField_1.VariationFieldToJSON)),
        'scope': value['scope'],
        'source_basis': value['sourceBasis'],
        'targets': (value['targets'].map(OperationTarget_1.OperationTargetToJSON)),
        'variation_id': value['variationId'],
    };
}
