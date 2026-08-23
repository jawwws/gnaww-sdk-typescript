"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecMatchResultStatusEnum = void 0;
exports.instanceOfSpecMatchResult = instanceOfSpecMatchResult;
exports.SpecMatchResultFromJSON = SpecMatchResultFromJSON;
exports.SpecMatchResultFromJSONTyped = SpecMatchResultFromJSONTyped;
exports.SpecMatchResultToJSON = SpecMatchResultToJSON;
exports.SpecMatchResultToJSONTyped = SpecMatchResultToJSONTyped;
const PhysicalRequirementDecision_1 = require("./PhysicalRequirementDecision");
const IssueSet_1 = require("./IssueSet");
const ProducerProductReference_1 = require("./ProducerProductReference");
const MatchDifference_1 = require("./MatchDifference");
/**
 * @export
 */
exports.SpecMatchResultStatusEnum = {
    Matched: 'matched',
    MatchedWithWarnings: 'matched_with_warnings',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
};
/**
 * Check if a given object implements the SpecMatchResult interface.
 */
function instanceOfSpecMatchResult(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function SpecMatchResultFromJSON(json) {
    return SpecMatchResultFromJSONTyped(json, false);
}
function SpecMatchResultFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'confidence': json['confidence'] == null ? undefined : json['confidence'],
        'differences': json['differences'] == null ? undefined : (json['differences'].map(MatchDifference_1.MatchDifferenceFromJSON)),
        'issues': json['issues'] == null ? undefined : (0, IssueSet_1.IssueSetFromJSON)(json['issues']),
        'matchReasons': json['match_reasons'] == null ? undefined : json['match_reasons'],
        'matchScore': json['match_score'] == null ? undefined : json['match_score'],
        'physicalRequirements': json['physical_requirements'] == null ? undefined : (json['physical_requirements'].map(PhysicalRequirementDecision_1.PhysicalRequirementDecisionFromJSON)),
        'product': json['product'] == null ? undefined : (0, ProducerProductReference_1.ProducerProductReferenceFromJSON)(json['product']),
        'status': json['status'],
    };
}
function SpecMatchResultToJSON(json) {
    return SpecMatchResultToJSONTyped(json, false);
}
function SpecMatchResultToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'confidence': value['confidence'],
        'differences': value['differences'] == null ? undefined : (value['differences'].map(MatchDifference_1.MatchDifferenceToJSON)),
        'issues': (0, IssueSet_1.IssueSetToJSON)(value['issues']),
        'match_reasons': value['matchReasons'],
        'match_score': value['matchScore'],
        'physical_requirements': value['physicalRequirements'] == null ? undefined : (value['physicalRequirements'].map(PhysicalRequirementDecision_1.PhysicalRequirementDecisionToJSON)),
        'product': (0, ProducerProductReference_1.ProducerProductReferenceToJSON)(value['product']),
        'status': value['status'],
    };
}
