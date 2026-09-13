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
import { ValueFromJSON, ValueToJSON, } from './Value';
import { PublicInterpretationScopeFromJSON, PublicInterpretationScopeToJSON, } from './PublicInterpretationScope';
/**
 * @export
 */
export const PublicSharedContextFactPostureEnum = {
    Exact: 'exact',
    Preference: 'preference',
    Tolerance: 'tolerance',
    Ambiguous: 'ambiguous'
};
/**
 * @export
 */
export const PublicSharedContextFactProvenanceEnum = {
    Supplied: 'supplied',
    Derived: 'derived',
    Confirmed: 'confirmed',
    Controlled: 'controlled'
};
/**
 * Check if a given object implements the PublicSharedContextFact interface.
 */
export function instanceOfPublicSharedContextFact(value) {
    if (!('contextId' in value) || value['contextId'] === undefined)
        return false;
    if (!('key' in value) || value['key'] === undefined)
        return false;
    if (!('provenance' in value) || value['provenance'] === undefined)
        return false;
    return true;
}
export function PublicSharedContextFactFromJSON(json) {
    return PublicSharedContextFactFromJSONTyped(json, false);
}
export function PublicSharedContextFactFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'contextId': json['context_id'],
        'key': json['key'],
        'posture': json['posture'] == null ? undefined : json['posture'],
        'provenance': json['provenance'],
        'requiresConfirmation': json['requires_confirmation'] == null ? undefined : json['requires_confirmation'],
        'scope': json['scope'] == null ? undefined : PublicInterpretationScopeFromJSON(json['scope']),
        'sourceExpression': json['source_expression'] == null ? undefined : json['source_expression'],
        'value': json['value'] == null ? undefined : ValueFromJSON(json['value']),
    };
}
export function PublicSharedContextFactToJSON(json) {
    return PublicSharedContextFactToJSONTyped(json, false);
}
export function PublicSharedContextFactToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'context_id': value['contextId'],
        'key': value['key'],
        'posture': value['posture'],
        'provenance': value['provenance'],
        'requires_confirmation': value['requiresConfirmation'],
        'scope': PublicInterpretationScopeToJSON(value['scope']),
        'source_expression': value['sourceExpression'],
        'value': ValueToJSON(value['value']),
    };
}
