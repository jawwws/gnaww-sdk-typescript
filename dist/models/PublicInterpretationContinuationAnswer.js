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
exports.instanceOfPublicInterpretationContinuationAnswer = instanceOfPublicInterpretationContinuationAnswer;
exports.PublicInterpretationContinuationAnswerFromJSON = PublicInterpretationContinuationAnswerFromJSON;
exports.PublicInterpretationContinuationAnswerFromJSONTyped = PublicInterpretationContinuationAnswerFromJSONTyped;
exports.PublicInterpretationContinuationAnswerToJSON = PublicInterpretationContinuationAnswerToJSON;
exports.PublicInterpretationContinuationAnswerToJSONTyped = PublicInterpretationContinuationAnswerToJSONTyped;
/**
 * Check if a given object implements the PublicInterpretationContinuationAnswer interface.
 */
function instanceOfPublicInterpretationContinuationAnswer(value) {
    if (!('questionId' in value) || value['questionId'] === undefined)
        return false;
    if (!('value' in value) || value['value'] === undefined)
        return false;
    return true;
}
function PublicInterpretationContinuationAnswerFromJSON(json) {
    return PublicInterpretationContinuationAnswerFromJSONTyped(json, false);
}
function PublicInterpretationContinuationAnswerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'questionId': json['question_id'],
        'value': json['value'],
    };
}
function PublicInterpretationContinuationAnswerToJSON(json) {
    return PublicInterpretationContinuationAnswerToJSONTyped(json, false);
}
function PublicInterpretationContinuationAnswerToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'question_id': value['questionId'],
        'value': value['value'],
    };
}
