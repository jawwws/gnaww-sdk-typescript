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
import { CapabilityEvidenceFromJSON, CapabilityEvidenceToJSON, } from './CapabilityEvidence';
/**
 * @export
 */
export const TurnaroundCapabilityBasisEnum = {
    ProductionOnly: 'production_only',
    ProductionAndDispatch: 'production_and_dispatch',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the TurnaroundCapability interface.
 */
export function instanceOfTurnaroundCapability(value) {
    return true;
}
export function TurnaroundCapabilityFromJSON(json) {
    return TurnaroundCapabilityFromJSONTyped(json, false);
}
export function TurnaroundCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'basis': json['basis'] == null ? undefined : json['basis'],
        'evidence': json['evidence'] == null ? undefined : CapabilityEvidenceFromJSON(json['evidence']),
        'maximumWorkingDays': json['maximum_working_days'] == null ? undefined : json['maximum_working_days'],
        'minimumWorkingDays': json['minimum_working_days'] == null ? undefined : json['minimum_working_days'],
    };
}
export function TurnaroundCapabilityToJSON(json) {
    return TurnaroundCapabilityToJSONTyped(json, false);
}
export function TurnaroundCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'basis': value['basis'],
        'evidence': CapabilityEvidenceToJSON(value['evidence']),
        'maximum_working_days': value['maximumWorkingDays'],
        'minimum_working_days': value['minimumWorkingDays'],
    };
}
