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
exports.instanceOfAppModelsManufacturingGeometryMaterialCompositionPart = instanceOfAppModelsManufacturingGeometryMaterialCompositionPart;
exports.AppModelsManufacturingGeometryMaterialCompositionPartFromJSON = AppModelsManufacturingGeometryMaterialCompositionPartFromJSON;
exports.AppModelsManufacturingGeometryMaterialCompositionPartFromJSONTyped = AppModelsManufacturingGeometryMaterialCompositionPartFromJSONTyped;
exports.AppModelsManufacturingGeometryMaterialCompositionPartToJSON = AppModelsManufacturingGeometryMaterialCompositionPartToJSON;
exports.AppModelsManufacturingGeometryMaterialCompositionPartToJSONTyped = AppModelsManufacturingGeometryMaterialCompositionPartToJSONTyped;
/**
 * Check if a given object implements the AppModelsManufacturingGeometryMaterialCompositionPart interface.
 */
function instanceOfAppModelsManufacturingGeometryMaterialCompositionPart(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
function AppModelsManufacturingGeometryMaterialCompositionPartFromJSON(json) {
    return AppModelsManufacturingGeometryMaterialCompositionPartFromJSONTyped(json, false);
}
function AppModelsManufacturingGeometryMaterialCompositionPartFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'percentage': json['percentage'] == null ? undefined : json['percentage'],
    };
}
function AppModelsManufacturingGeometryMaterialCompositionPartToJSON(json) {
    return AppModelsManufacturingGeometryMaterialCompositionPartToJSONTyped(json, false);
}
function AppModelsManufacturingGeometryMaterialCompositionPartToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'percentage': value['percentage'],
    };
}
