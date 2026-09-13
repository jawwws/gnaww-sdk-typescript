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
export const InspectOperationParametersKindEnum = {
    Inspect: 'inspect'
};
/**
 * Check if a given object implements the InspectOperationParameters interface.
 */
export function instanceOfInspectOperationParameters(value) {
    if (!('method' in value) || value['method'] === undefined)
        return false;
    return true;
}
export function InspectOperationParametersFromJSON(json) {
    return InspectOperationParametersFromJSONTyped(json, false);
}
export function InspectOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'kind': json['kind'] == null ? undefined : json['kind'],
        'method': json['method'],
        'requirement': json['requirement'] == null ? undefined : json['requirement'],
    };
}
export function InspectOperationParametersToJSON(json) {
    return InspectOperationParametersToJSONTyped(json, false);
}
export function InspectOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'kind': value['kind'],
        'method': value['method'],
        'requirement': value['requirement'],
    };
}
