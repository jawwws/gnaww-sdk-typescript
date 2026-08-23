/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
import { FulfilmentRequirementFromJSON, FulfilmentRequirementToJSON, } from './FulfilmentRequirement';
/**
 * @export
 */
export const PublicFulfilmentStateStatusEnum = {
    NotRequired: 'not_required',
    NeedsReview: 'needs_review',
    Ready: 'ready'
};
/**
 * Check if a given object implements the PublicFulfilmentState interface.
 */
export function instanceOfPublicFulfilmentState(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function PublicFulfilmentStateFromJSON(json) {
    return PublicFulfilmentStateFromJSONTyped(json, false);
}
export function PublicFulfilmentStateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'requirement': json['requirement'] == null ? undefined : FulfilmentRequirementFromJSON(json['requirement']),
        'status': json['status'],
    };
}
export function PublicFulfilmentStateToJSON(json) {
    return PublicFulfilmentStateToJSONTyped(json, false);
}
export function PublicFulfilmentStateToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'requirement': FulfilmentRequirementToJSON(value['requirement']),
        'status': value['status'],
    };
}
