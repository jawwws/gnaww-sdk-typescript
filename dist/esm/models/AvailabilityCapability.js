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
import { CapabilityEvidenceFromJSON, CapabilityEvidenceToJSON, } from './CapabilityEvidence';
/**
 * @export
 */
export const AvailabilityCapabilityModeEnum = {
    MadeToOrder: 'made_to_order',
    Stocked: 'stocked',
    Mixed: 'mixed',
    Unknown: 'unknown'
};
/**
 * @export
 */
export const AvailabilityCapabilityStatusEnum = {
    Available: 'available',
    Limited: 'limited',
    Unavailable: 'unavailable',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the AvailabilityCapability interface.
 */
export function instanceOfAvailabilityCapability(value) {
    return true;
}
export function AvailabilityCapabilityFromJSON(json) {
    return AvailabilityCapabilityFromJSONTyped(json, false);
}
export function AvailabilityCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'availableQuantity': json['available_quantity'] == null ? undefined : json['available_quantity'],
        'evidence': json['evidence'] == null ? undefined : CapabilityEvidenceFromJSON(json['evidence']),
        'mode': json['mode'] == null ? undefined : json['mode'],
        'status': json['status'] == null ? undefined : json['status'],
    };
}
export function AvailabilityCapabilityToJSON(json) {
    return AvailabilityCapabilityToJSONTyped(json, false);
}
export function AvailabilityCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'available_quantity': value['availableQuantity'],
        'evidence': CapabilityEvidenceToJSON(value['evidence']),
        'mode': value['mode'],
        'status': value['status'],
    };
}
