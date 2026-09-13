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
 * Check if a given object implements the OperationTarget interface.
 */
export function instanceOfOperationTarget(value) {
    if (!('componentId' in value) || value['componentId'] === undefined)
        return false;
    return true;
}
export function OperationTargetFromJSON(json) {
    return OperationTargetFromJSONTyped(json, false);
}
export function OperationTargetFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'componentId': json['component_id'],
        'regionId': json['region_id'] == null ? undefined : json['region_id'],
    };
}
export function OperationTargetToJSON(json) {
    return OperationTargetToJSONTyped(json, false);
}
export function OperationTargetToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'component_id': value['componentId'],
        'region_id': value['regionId'],
    };
}
