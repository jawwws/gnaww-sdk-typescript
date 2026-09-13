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
export const PathReferenceKindEnum = {
    PathReference: 'path_reference'
};
/**
 * Check if a given object implements the PathReference interface.
 */
export function instanceOfPathReference(value) {
    if (!('assetRef' in value) || value['assetRef'] === undefined)
        return false;
    return true;
}
export function PathReferenceFromJSON(json) {
    return PathReferenceFromJSONTyped(json, false);
}
export function PathReferenceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'assetRef': json['asset_ref'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'pathId': json['path_id'] == null ? undefined : json['path_id'],
    };
}
export function PathReferenceToJSON(json) {
    return PathReferenceToJSONTyped(json, false);
}
export function PathReferenceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'asset_ref': value['assetRef'],
        'kind': value['kind'],
        'path_id': value['pathId'],
    };
}
