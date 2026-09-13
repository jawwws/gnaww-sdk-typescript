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
 * Check if a given object implements the PublicInterpretationContinuationAnswer interface.
 */
export function instanceOfPublicInterpretationContinuationAnswer(value) {
    if (!('questionId' in value) || value['questionId'] === undefined)
        return false;
    if (!('value' in value) || value['value'] === undefined)
        return false;
    return true;
}
export function PublicInterpretationContinuationAnswerFromJSON(json) {
    return PublicInterpretationContinuationAnswerFromJSONTyped(json, false);
}
export function PublicInterpretationContinuationAnswerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'questionId': json['question_id'],
        'value': json['value'],
    };
}
export function PublicInterpretationContinuationAnswerToJSON(json) {
    return PublicInterpretationContinuationAnswerToJSONTyped(json, false);
}
export function PublicInterpretationContinuationAnswerToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'question_id': value['questionId'],
        'value': value['value'],
    };
}
