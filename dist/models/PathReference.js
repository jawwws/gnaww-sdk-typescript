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
exports.PathReferenceKindEnum = void 0;
exports.instanceOfPathReference = instanceOfPathReference;
exports.PathReferenceFromJSON = PathReferenceFromJSON;
exports.PathReferenceFromJSONTyped = PathReferenceFromJSONTyped;
exports.PathReferenceToJSON = PathReferenceToJSON;
exports.PathReferenceToJSONTyped = PathReferenceToJSONTyped;
/**
 * @export
 */
exports.PathReferenceKindEnum = {
    PathReference: 'path_reference'
};
/**
 * Check if a given object implements the PathReference interface.
 */
function instanceOfPathReference(value) {
    if (!('assetRef' in value) || value['assetRef'] === undefined)
        return false;
    return true;
}
function PathReferenceFromJSON(json) {
    return PathReferenceFromJSONTyped(json, false);
}
function PathReferenceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'assetRef': json['asset_ref'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'pathId': json['path_id'] == null ? undefined : json['path_id'],
    };
}
function PathReferenceToJSON(json) {
    return PathReferenceToJSONTyped(json, false);
}
function PathReferenceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'asset_ref': value['assetRef'],
        'kind': value['kind'],
        'path_id': value['pathId'],
    };
}
