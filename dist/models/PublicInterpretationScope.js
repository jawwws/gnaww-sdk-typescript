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
exports.PublicInterpretationScopeTypeEnum = void 0;
exports.instanceOfPublicInterpretationScope = instanceOfPublicInterpretationScope;
exports.PublicInterpretationScopeFromJSON = PublicInterpretationScopeFromJSON;
exports.PublicInterpretationScopeFromJSONTyped = PublicInterpretationScopeFromJSONTyped;
exports.PublicInterpretationScopeToJSON = PublicInterpretationScopeToJSON;
exports.PublicInterpretationScopeToJSONTyped = PublicInterpretationScopeToJSONTyped;
/**
 * @export
 */
exports.PublicInterpretationScopeTypeEnum = {
    Shared: 'shared',
    Job: 'job'
};
/**
 * Check if a given object implements the PublicInterpretationScope interface.
 */
function instanceOfPublicInterpretationScope(value) {
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function PublicInterpretationScopeFromJSON(json) {
    return PublicInterpretationScopeFromJSONTyped(json, false);
}
function PublicInterpretationScopeFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'jobId': json['job_id'] == null ? undefined : json['job_id'],
        'type': json['type'],
    };
}
function PublicInterpretationScopeToJSON(json) {
    return PublicInterpretationScopeToJSONTyped(json, false);
}
function PublicInterpretationScopeToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'job_id': value['jobId'],
        'type': value['type'],
    };
}
