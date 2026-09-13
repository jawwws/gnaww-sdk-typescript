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
 * Check if a given object implements the ManufacturingAssembly interface.
 */
export function instanceOfManufacturingAssembly(value) {
    if (!('assemblyId' in value) || value['assemblyId'] === undefined)
        return false;
    if (!('inputComponentIds' in value) || value['inputComponentIds'] === undefined)
        return false;
    if (!('operationIds' in value) || value['operationIds'] === undefined)
        return false;
    return true;
}
export function ManufacturingAssemblyFromJSON(json) {
    return ManufacturingAssemblyFromJSONTyped(json, false);
}
export function ManufacturingAssemblyFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'assemblyId': json['assembly_id'],
        'inputComponentIds': json['input_component_ids'],
        'operationIds': json['operation_ids'],
        'outputComponentId': json['output_component_id'] == null ? undefined : json['output_component_id'],
    };
}
export function ManufacturingAssemblyToJSON(json) {
    return ManufacturingAssemblyToJSONTyped(json, false);
}
export function ManufacturingAssemblyToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'assembly_id': value['assemblyId'],
        'input_component_ids': value['inputComponentIds'],
        'operation_ids': value['operationIds'],
        'output_component_id': value['outputComponentId'],
    };
}
