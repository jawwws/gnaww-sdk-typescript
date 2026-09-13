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
import { VariationFieldFromJSON, VariationFieldToJSON, } from './VariationField';
import { OperationTargetFromJSON, OperationTargetToJSON, } from './OperationTarget';
/**
 * @export
 */
export const ManufacturingVariationScopeEnum = {
    PerUnit: 'per_unit',
    Grouped: 'grouped',
    Batch: 'batch'
};
/**
 * @export
 */
export const ManufacturingVariationSourceBasisEnum = {
    Explicit: 'explicit',
    LegacyVariableData: 'legacy_variable_data'
};
/**
 * Check if a given object implements the ManufacturingVariation interface.
 */
export function instanceOfManufacturingVariation(value) {
    if (!('scope' in value) || value['scope'] === undefined)
        return false;
    if (!('targets' in value) || value['targets'] === undefined)
        return false;
    if (!('variationId' in value) || value['variationId'] === undefined)
        return false;
    return true;
}
export function ManufacturingVariationFromJSON(json) {
    return ManufacturingVariationFromJSONTyped(json, false);
}
export function ManufacturingVariationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dataAssetRef': json['data_asset_ref'] == null ? undefined : json['data_asset_ref'],
        'fields': json['fields'] == null ? undefined : (json['fields'].map(VariationFieldFromJSON)),
        'scope': json['scope'],
        'sourceBasis': json['source_basis'] == null ? undefined : json['source_basis'],
        'targets': (json['targets'].map(OperationTargetFromJSON)),
        'variationId': json['variation_id'],
    };
}
export function ManufacturingVariationToJSON(json) {
    return ManufacturingVariationToJSONTyped(json, false);
}
export function ManufacturingVariationToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data_asset_ref': value['dataAssetRef'],
        'fields': value['fields'] == null ? undefined : (value['fields'].map(VariationFieldToJSON)),
        'scope': value['scope'],
        'source_basis': value['sourceBasis'],
        'targets': (value['targets'].map(OperationTargetToJSON)),
        'variation_id': value['variationId'],
    };
}
