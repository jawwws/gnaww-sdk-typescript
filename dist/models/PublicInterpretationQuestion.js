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
exports.PublicInterpretationQuestionSourceEnum = exports.PublicInterpretationQuestionInputTypeEnum = void 0;
exports.instanceOfPublicInterpretationQuestion = instanceOfPublicInterpretationQuestion;
exports.PublicInterpretationQuestionFromJSON = PublicInterpretationQuestionFromJSON;
exports.PublicInterpretationQuestionFromJSONTyped = PublicInterpretationQuestionFromJSONTyped;
exports.PublicInterpretationQuestionToJSON = PublicInterpretationQuestionToJSON;
exports.PublicInterpretationQuestionToJSONTyped = PublicInterpretationQuestionToJSONTyped;
const PublicInterpretationQuestionOption_1 = require("./PublicInterpretationQuestionOption");
const PublicInterpretationScope_1 = require("./PublicInterpretationScope");
/**
 * @export
 */
exports.PublicInterpretationQuestionInputTypeEnum = {
    SingleSelect: 'single_select',
    Text: 'text',
    Integer: 'integer'
};
/**
 * @export
 */
exports.PublicInterpretationQuestionSourceEnum = {
    UseRequirement: 'use_requirement',
    CanonicalField: 'canonical_field',
    FulfilmentRequirement: 'fulfilment_requirement',
    Intent: 'intent'
};
/**
 * Check if a given object implements the PublicInterpretationQuestion interface.
 */
function instanceOfPublicInterpretationQuestion(value) {
    if (!('question' in value) || value['question'] === undefined)
        return false;
    if (!('questionId' in value) || value['questionId'] === undefined)
        return false;
    if (!('rationale' in value) || value['rationale'] === undefined)
        return false;
    if (!('scope' in value) || value['scope'] === undefined)
        return false;
    if (!('source' in value) || value['source'] === undefined)
        return false;
    return true;
}
function PublicInterpretationQuestionFromJSON(json) {
    return PublicInterpretationQuestionFromJSONTyped(json, false);
}
function PublicInterpretationQuestionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'currentValue': json['current_value'] == null ? undefined : json['current_value'],
        'inputType': json['input_type'] == null ? undefined : json['input_type'],
        'options': json['options'] == null ? undefined : (json['options'].map(PublicInterpretationQuestionOption_1.PublicInterpretationQuestionOptionFromJSON)),
        'question': json['question'],
        'questionId': json['question_id'],
        'rationale': json['rationale'],
        'required': json['required'] == null ? undefined : json['required'],
        'scope': (0, PublicInterpretationScope_1.PublicInterpretationScopeFromJSON)(json['scope']),
        'source': json['source'],
        'suggestedValue': json['suggested_value'] == null ? undefined : json['suggested_value'],
    };
}
function PublicInterpretationQuestionToJSON(json) {
    return PublicInterpretationQuestionToJSONTyped(json, false);
}
function PublicInterpretationQuestionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'current_value': value['currentValue'],
        'input_type': value['inputType'],
        'options': value['options'] == null ? undefined : (value['options'].map(PublicInterpretationQuestionOption_1.PublicInterpretationQuestionOptionToJSON)),
        'question': value['question'],
        'question_id': value['questionId'],
        'rationale': value['rationale'],
        'required': value['required'],
        'scope': (0, PublicInterpretationScope_1.PublicInterpretationScopeToJSON)(value['scope']),
        'source': value['source'],
        'suggested_value': value['suggestedValue'],
    };
}
