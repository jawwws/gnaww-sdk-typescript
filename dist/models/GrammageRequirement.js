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
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrammageRequirementPostureEnum = void 0;
exports.instanceOfGrammageRequirement = instanceOfGrammageRequirement;
exports.GrammageRequirementFromJSON = GrammageRequirementFromJSON;
exports.GrammageRequirementFromJSONTyped = GrammageRequirementFromJSONTyped;
exports.GrammageRequirementToJSON = GrammageRequirementToJSON;
exports.GrammageRequirementToJSONTyped = GrammageRequirementToJSONTyped;
/**
 * @export
 */
exports.GrammageRequirementPostureEnum = {
    ExactRequired: 'exact_required',
    PreferredTarget: 'preferred_target',
    AcceptableRange: 'acceptable_range',
    CloseSubstituteAcceptable: 'close_substitute_acceptable',
    ProducerRecommendationAcceptable: 'producer_recommendation_acceptable',
    Unspecified: 'unspecified'
};
/**
 * Check if a given object implements the GrammageRequirement interface.
 */
function instanceOfGrammageRequirement(value) {
    return true;
}
function GrammageRequirementFromJSON(json) {
    return GrammageRequirementFromJSONTyped(json, false);
}
function GrammageRequirementFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'maximumGsm': json['maximum_gsm'] == null ? undefined : json['maximum_gsm'],
        'minimumGsm': json['minimum_gsm'] == null ? undefined : json['minimum_gsm'],
        'outcome': json['outcome'] == null ? undefined : json['outcome'],
        'posture': json['posture'] == null ? undefined : json['posture'],
        'sourceExpression': json['source_expression'] == null ? undefined : json['source_expression'],
        'substituteApprovalRequired': json['substitute_approval_required'] == null ? undefined : json['substitute_approval_required'],
        'targetGsm': json['target_gsm'] == null ? undefined : json['target_gsm'],
    };
}
function GrammageRequirementToJSON(json) {
    return GrammageRequirementToJSONTyped(json, false);
}
function GrammageRequirementToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'maximum_gsm': value['maximumGsm'],
        'minimum_gsm': value['minimumGsm'],
        'outcome': value['outcome'],
        'posture': value['posture'],
        'source_expression': value['sourceExpression'],
        'substitute_approval_required': value['substituteApprovalRequired'],
        'target_gsm': value['targetGsm'],
    };
}
