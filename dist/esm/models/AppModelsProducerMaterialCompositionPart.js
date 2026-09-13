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
 * Check if a given object implements the AppModelsProducerMaterialCompositionPart interface.
 */
export function instanceOfAppModelsProducerMaterialCompositionPart(value) {
    if (!('material' in value) || value['material'] === undefined)
        return false;
    return true;
}
export function AppModelsProducerMaterialCompositionPartFromJSON(json) {
    return AppModelsProducerMaterialCompositionPartFromJSONTyped(json, false);
}
export function AppModelsProducerMaterialCompositionPartFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'material': json['material'],
        'percentage': json['percentage'] == null ? undefined : json['percentage'],
    };
}
export function AppModelsProducerMaterialCompositionPartToJSON(json) {
    return AppModelsProducerMaterialCompositionPartToJSONTyped(json, false);
}
export function AppModelsProducerMaterialCompositionPartToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'material': value['material'],
        'percentage': value['percentage'],
    };
}
