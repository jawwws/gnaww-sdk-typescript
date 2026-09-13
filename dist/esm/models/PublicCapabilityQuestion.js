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
import { PublicInterpretationScopeFromJSON, PublicInterpretationScopeToJSON, } from './PublicInterpretationScope';
/**
 * @export
 */
export const PublicCapabilityQuestionStatusEnum = {
    NeedsReview: 'needs_review',
    ReadyForEvaluation: 'ready_for_evaluation'
};
/**
 * Check if a given object implements the PublicCapabilityQuestion interface.
 */
export function instanceOfPublicCapabilityQuestion(value) {
    if (!('question' in value) || value['question'] === undefined)
        return false;
    if (!('questionId' in value) || value['questionId'] === undefined)
        return false;
    if (!('scope' in value) || value['scope'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function PublicCapabilityQuestionFromJSON(json) {
    return PublicCapabilityQuestionFromJSONTyped(json, false);
}
export function PublicCapabilityQuestionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'question': json['question'],
        'questionId': json['question_id'],
        'scope': PublicInterpretationScopeFromJSON(json['scope']),
        'status': json['status'],
    };
}
export function PublicCapabilityQuestionToJSON(json) {
    return PublicCapabilityQuestionToJSONTyped(json, false);
}
export function PublicCapabilityQuestionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'question': value['question'],
        'question_id': value['questionId'],
        'scope': PublicInterpretationScopeToJSON(value['scope']),
        'status': value['status'],
    };
}
