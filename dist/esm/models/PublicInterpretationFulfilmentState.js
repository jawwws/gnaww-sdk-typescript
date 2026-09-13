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
import { FulfilmentRequirementFromJSON, FulfilmentRequirementToJSON, } from './FulfilmentRequirement';
/**
 * @export
 */
export const PublicInterpretationFulfilmentStateStatusEnum = {
    NotRequired: 'not_required',
    NeedsReview: 'needs_review',
    Ready: 'ready'
};
/**
 * Check if a given object implements the PublicInterpretationFulfilmentState interface.
 */
export function instanceOfPublicInterpretationFulfilmentState(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function PublicInterpretationFulfilmentStateFromJSON(json) {
    return PublicInterpretationFulfilmentStateFromJSONTyped(json, false);
}
export function PublicInterpretationFulfilmentStateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'requirement': json['requirement'] == null ? undefined : FulfilmentRequirementFromJSON(json['requirement']),
        'status': json['status'],
    };
}
export function PublicInterpretationFulfilmentStateToJSON(json) {
    return PublicInterpretationFulfilmentStateToJSONTyped(json, false);
}
export function PublicInterpretationFulfilmentStateToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'requirement': FulfilmentRequirementToJSON(value['requirement']),
        'status': value['status'],
    };
}
