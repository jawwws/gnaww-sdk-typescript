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
 * @export
 */
export const AssemblyOperationParametersKindEnum = {
    Assembly: 'assembly'
};
/**
 * Check if a given object implements the AssemblyOperationParameters interface.
 */
export function instanceOfAssemblyOperationParameters(value) {
    if (!('method' in value) || value['method'] === undefined)
        return false;
    return true;
}
export function AssemblyOperationParametersFromJSON(json) {
    return AssemblyOperationParametersFromJSONTyped(json, false);
}
export function AssemblyOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'joiningMaterial': json['joining_material'] == null ? undefined : json['joining_material'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'method': json['method'],
        'resultingComponentId': json['resulting_component_id'] == null ? undefined : json['resulting_component_id'],
    };
}
export function AssemblyOperationParametersToJSON(json) {
    return AssemblyOperationParametersToJSONTyped(json, false);
}
export function AssemblyOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'joining_material': value['joiningMaterial'],
        'kind': value['kind'],
        'method': value['method'],
        'resulting_component_id': value['resultingComponentId'],
    };
}
