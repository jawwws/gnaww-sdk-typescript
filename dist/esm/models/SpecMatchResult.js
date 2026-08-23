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
import { PhysicalRequirementDecisionFromJSON, PhysicalRequirementDecisionToJSON, } from './PhysicalRequirementDecision';
import { IssueSetFromJSON, IssueSetToJSON, } from './IssueSet';
import { ProducerProductReferenceFromJSON, ProducerProductReferenceToJSON, } from './ProducerProductReference';
import { MatchDifferenceFromJSON, MatchDifferenceToJSON, } from './MatchDifference';
/**
 * @export
 */
export const SpecMatchResultStatusEnum = {
    Matched: 'matched',
    MatchedWithWarnings: 'matched_with_warnings',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
};
/**
 * Check if a given object implements the SpecMatchResult interface.
 */
export function instanceOfSpecMatchResult(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function SpecMatchResultFromJSON(json) {
    return SpecMatchResultFromJSONTyped(json, false);
}
export function SpecMatchResultFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'confidence': json['confidence'] == null ? undefined : json['confidence'],
        'differences': json['differences'] == null ? undefined : (json['differences'].map(MatchDifferenceFromJSON)),
        'issues': json['issues'] == null ? undefined : IssueSetFromJSON(json['issues']),
        'matchReasons': json['match_reasons'] == null ? undefined : json['match_reasons'],
        'matchScore': json['match_score'] == null ? undefined : json['match_score'],
        'physicalRequirements': json['physical_requirements'] == null ? undefined : (json['physical_requirements'].map(PhysicalRequirementDecisionFromJSON)),
        'product': json['product'] == null ? undefined : ProducerProductReferenceFromJSON(json['product']),
        'status': json['status'],
    };
}
export function SpecMatchResultToJSON(json) {
    return SpecMatchResultToJSONTyped(json, false);
}
export function SpecMatchResultToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'confidence': value['confidence'],
        'differences': value['differences'] == null ? undefined : (value['differences'].map(MatchDifferenceToJSON)),
        'issues': IssueSetToJSON(value['issues']),
        'match_reasons': value['matchReasons'],
        'match_score': value['matchScore'],
        'physical_requirements': value['physicalRequirements'] == null ? undefined : (value['physicalRequirements'].map(PhysicalRequirementDecisionToJSON)),
        'product': ProducerProductReferenceToJSON(value['product']),
        'status': value['status'],
    };
}
