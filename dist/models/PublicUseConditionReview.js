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
exports.PublicUseConditionReviewTruthStateEnum = exports.PublicUseConditionReviewRequiresConfirmationEnum = void 0;
exports.instanceOfPublicUseConditionReview = instanceOfPublicUseConditionReview;
exports.PublicUseConditionReviewFromJSON = PublicUseConditionReviewFromJSON;
exports.PublicUseConditionReviewFromJSONTyped = PublicUseConditionReviewFromJSONTyped;
exports.PublicUseConditionReviewToJSON = PublicUseConditionReviewToJSON;
exports.PublicUseConditionReviewToJSONTyped = PublicUseConditionReviewToJSONTyped;
/**
 * @export
 */
exports.PublicUseConditionReviewRequiresConfirmationEnum = {
    True: true
};
/**
 * @export
 */
exports.PublicUseConditionReviewTruthStateEnum = {
    SemanticallyProposed: 'semantically_proposed',
    Unresolved: 'unresolved'
};
/**
 * Check if a given object implements the PublicUseConditionReview interface.
 */
function instanceOfPublicUseConditionReview(value) {
    if (!('allowedValues' in value) || value['allowedValues'] === undefined)
        return false;
    if (!('conditionKey' in value) || value['conditionKey'] === undefined)
        return false;
    if (!('question' in value) || value['question'] === undefined)
        return false;
    if (!('rationale' in value) || value['rationale'] === undefined)
        return false;
    if (!('truthState' in value) || value['truthState'] === undefined)
        return false;
    return true;
}
function PublicUseConditionReviewFromJSON(json) {
    return PublicUseConditionReviewFromJSONTyped(json, false);
}
function PublicUseConditionReviewFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'allowedValues': json['allowed_values'],
        'conditionKey': json['condition_key'],
        'proposedValue': json['proposed_value'] == null ? undefined : json['proposed_value'],
        'question': json['question'],
        'rationale': json['rationale'],
        'requiresConfirmation': json['requires_confirmation'] == null ? undefined : json['requires_confirmation'],
        'sourceExpression': json['source_expression'] == null ? undefined : json['source_expression'],
        'truthState': json['truth_state'],
    };
}
function PublicUseConditionReviewToJSON(json) {
    return PublicUseConditionReviewToJSONTyped(json, false);
}
function PublicUseConditionReviewToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'allowed_values': value['allowedValues'],
        'condition_key': value['conditionKey'],
        'proposed_value': value['proposedValue'],
        'question': value['question'],
        'rationale': value['rationale'],
        'requires_confirmation': value['requiresConfirmation'],
        'source_expression': value['sourceExpression'],
        'truth_state': value['truthState'],
    };
}
