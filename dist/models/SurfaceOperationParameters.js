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
exports.SurfaceOperationParametersKindEnum = void 0;
exports.instanceOfSurfaceOperationParameters = instanceOfSurfaceOperationParameters;
exports.SurfaceOperationParametersFromJSON = SurfaceOperationParametersFromJSON;
exports.SurfaceOperationParametersFromJSONTyped = SurfaceOperationParametersFromJSONTyped;
exports.SurfaceOperationParametersToJSON = SurfaceOperationParametersToJSON;
exports.SurfaceOperationParametersToJSONTyped = SurfaceOperationParametersToJSONTyped;
/**
 * @export
 */
exports.SurfaceOperationParametersKindEnum = {
    Surface: 'surface'
};
/**
 * Check if a given object implements the SurfaceOperationParameters interface.
 */
function instanceOfSurfaceOperationParameters(value) {
    return true;
}
function SurfaceOperationParametersFromJSON(json) {
    return SurfaceOperationParametersFromJSONTyped(json, false);
}
function SurfaceOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'colour': json['colour'] == null ? undefined : json['colour'],
        'finish': json['finish'] == null ? undefined : json['finish'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'material': json['material'] == null ? undefined : json['material'],
    };
}
function SurfaceOperationParametersToJSON(json) {
    return SurfaceOperationParametersToJSONTyped(json, false);
}
function SurfaceOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'colour': value['colour'],
        'finish': value['finish'],
        'kind': value['kind'],
        'material': value['material'],
    };
}
