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
export const PublicInterpretationScopeTypeEnum = {
    Shared: 'shared',
    Job: 'job'
};
/**
 * Check if a given object implements the PublicInterpretationScope interface.
 */
export function instanceOfPublicInterpretationScope(value) {
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
export function PublicInterpretationScopeFromJSON(json) {
    return PublicInterpretationScopeFromJSONTyped(json, false);
}
export function PublicInterpretationScopeFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'jobId': json['job_id'] == null ? undefined : json['job_id'],
        'type': json['type'],
    };
}
export function PublicInterpretationScopeToJSON(json) {
    return PublicInterpretationScopeToJSONTyped(json, false);
}
export function PublicInterpretationScopeToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'job_id': value['jobId'],
        'type': value['type'],
    };
}
