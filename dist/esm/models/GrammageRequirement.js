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
/**
 * @export
 */
export const GrammageRequirementPostureEnum = {
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
export function instanceOfGrammageRequirement(value) {
    return true;
}
export function GrammageRequirementFromJSON(json) {
    return GrammageRequirementFromJSONTyped(json, false);
}
export function GrammageRequirementFromJSONTyped(json, ignoreDiscriminator) {
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
export function GrammageRequirementToJSON(json) {
    return GrammageRequirementToJSONTyped(json, false);
}
export function GrammageRequirementToJSONTyped(value, ignoreDiscriminator = false) {
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
