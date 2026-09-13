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
/**
 * @export
 */
export const PublicJobContextFactPostureEnum = {
    Exact: 'exact',
    Preference: 'preference',
    Tolerance: 'tolerance',
    Ambiguous: 'ambiguous'
};
/**
 * @export
 */
export const PublicJobContextFactProvenanceEnum = {
    Supplied: 'supplied',
    Derived: 'derived',
    Confirmed: 'confirmed',
    Controlled: 'controlled'
};
/**
 * Check if a given object implements the PublicJobContextFact interface.
 */
export function instanceOfPublicJobContextFact(value) {
    if (!('factId' in value) || value['factId'] === undefined)
        return false;
    if (!('key' in value) || value['key'] === undefined)
        return false;
    if (!('provenance' in value) || value['provenance'] === undefined)
        return false;
    return true;
}
export function PublicJobContextFactFromJSON(json) {
    return PublicJobContextFactFromJSONTyped(json, false);
}
export function PublicJobContextFactFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'factId': json['fact_id'],
        'key': json['key'],
        'posture': json['posture'] == null ? undefined : json['posture'],
        'provenance': json['provenance'],
        'requiresConfirmation': json['requires_confirmation'] == null ? undefined : json['requires_confirmation'],
        'sourceExpression': json['source_expression'] == null ? undefined : json['source_expression'],
        'value': json['value'] == null ? undefined : ValueFromJSON(json['value']),
    };
}
export function PublicJobContextFactToJSON(json) {
    return PublicJobContextFactToJSONTyped(json, false);
}
export function PublicJobContextFactToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'fact_id': value['factId'],
        'key': value['key'],
        'posture': value['posture'],
        'provenance': value['provenance'],
        'requires_confirmation': value['requiresConfirmation'],
        'source_expression': value['sourceExpression'],
        'value': ValueToJSON(value['value']),
    };
}
