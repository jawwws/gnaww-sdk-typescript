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
/**
 * Check if a given object implements the AppModelsManufacturingGeometryMaterialCompositionPart interface.
 */
export function instanceOfAppModelsManufacturingGeometryMaterialCompositionPart(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
export function AppModelsManufacturingGeometryMaterialCompositionPartFromJSON(json) {
    return AppModelsManufacturingGeometryMaterialCompositionPartFromJSONTyped(json, false);
}
export function AppModelsManufacturingGeometryMaterialCompositionPartFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'percentage': json['percentage'] == null ? undefined : json['percentage'],
    };
}
export function AppModelsManufacturingGeometryMaterialCompositionPartToJSON(json) {
    return AppModelsManufacturingGeometryMaterialCompositionPartToJSONTyped(json, false);
}
export function AppModelsManufacturingGeometryMaterialCompositionPartToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'percentage': value['percentage'],
    };
}
