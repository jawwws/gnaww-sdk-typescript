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
exports.HealthResponseStatusEnum = void 0;
exports.instanceOfHealthResponse = instanceOfHealthResponse;
exports.HealthResponseFromJSON = HealthResponseFromJSON;
exports.HealthResponseFromJSONTyped = HealthResponseFromJSONTyped;
exports.HealthResponseToJSON = HealthResponseToJSON;
exports.HealthResponseToJSONTyped = HealthResponseToJSONTyped;
/**
 * @export
 */
exports.HealthResponseStatusEnum = {
    Ok: 'ok',
    NotReady: 'not_ready'
};
/**
 * Check if a given object implements the HealthResponse interface.
 */
function instanceOfHealthResponse(value) {
    if (!('environment' in value) || value['environment'] === undefined)
        return false;
    if (!('service' in value) || value['service'] === undefined)
        return false;
    if (!('version' in value) || value['version'] === undefined)
        return false;
    return true;
}
function HealthResponseFromJSON(json) {
    return HealthResponseFromJSONTyped(json, false);
}
function HealthResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'environment': json['environment'],
        'service': json['service'],
        'status': json['status'] == null ? undefined : json['status'],
        'version': json['version'],
    };
}
function HealthResponseToJSON(json) {
    return HealthResponseToJSONTyped(json, false);
}
function HealthResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'environment': value['environment'],
        'service': value['service'],
        'status': value['status'],
        'version': value['version'],
    };
}
