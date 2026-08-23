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
export const ControlledInterpretationStateStatusEnum = {
    NotRequired: 'not_required',
    Completed: 'completed',
    Unavailable: 'unavailable',
    Failed: 'failed'
};
/**
 * Check if a given object implements the ControlledInterpretationState interface.
 */
export function instanceOfControlledInterpretationState(value) {
    if (!('attempted' in value) || value['attempted'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function ControlledInterpretationStateFromJSON(json) {
    return ControlledInterpretationStateFromJSONTyped(json, false);
}
export function ControlledInterpretationStateFromJSONTyped(json, ignoreDiscriminator) {
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
export function ControlledInterpretationStateToJSON(json) {
    return ControlledInterpretationStateToJSONTyped(json, false);
}
export function ControlledInterpretationStateToJSONTyped(value, ignoreDiscriminator = false) {
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
