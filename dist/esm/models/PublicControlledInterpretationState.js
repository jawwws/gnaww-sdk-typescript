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
import { IntentProviderMetadataFromJSON, IntentProviderMetadataToJSON, } from './IntentProviderMetadata';
/**
 * @export
 */
export const PublicControlledInterpretationStateStatusEnum = {
    NotReported: 'not_reported',
    NotRequired: 'not_required',
    Completed: 'completed',
    Unavailable: 'unavailable',
    Failed: 'failed'
};
/**
 * Check if a given object implements the PublicControlledInterpretationState interface.
 */
export function instanceOfPublicControlledInterpretationState(value) {
    if (!('attempted' in value) || value['attempted'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function PublicControlledInterpretationStateFromJSON(json) {
    return PublicControlledInterpretationStateFromJSONTyped(json, false);
}
export function PublicControlledInterpretationStateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'attempted': json['attempted'],
        'error': json['error'] == null ? undefined : json['error'],
        'metadata': json['metadata'] == null ? undefined : IntentProviderMetadataFromJSON(json['metadata']),
        'provider': json['provider'] == null ? undefined : json['provider'],
        'status': json['status'],
    };
}
export function PublicControlledInterpretationStateToJSON(json) {
    return PublicControlledInterpretationStateToJSONTyped(json, false);
}
export function PublicControlledInterpretationStateToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'attempted': value['attempted'],
        'error': value['error'],
        'metadata': IntentProviderMetadataToJSON(value['metadata']),
        'provider': value['provider'],
        'status': value['status'],
    };
}
