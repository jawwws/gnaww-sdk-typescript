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
import { PublicInterpretationQuestionOptionFromJSON, PublicInterpretationQuestionOptionToJSON, } from './PublicInterpretationQuestionOption';
import { PublicInterpretationScopeFromJSON, PublicInterpretationScopeToJSON, } from './PublicInterpretationScope';
/**
 * @export
 */
export const PublicInterpretationQuestionInputTypeEnum = {
    SingleSelect: 'single_select',
    Text: 'text',
    Integer: 'integer'
};
/**
 * @export
 */
export const PublicInterpretationQuestionSourceEnum = {
    UseRequirement: 'use_requirement',
    CanonicalField: 'canonical_field',
    FulfilmentRequirement: 'fulfilment_requirement',
    Intent: 'intent'
};
/**
 * Check if a given object implements the PublicInterpretationQuestion interface.
 */
export function instanceOfPublicInterpretationQuestion(value) {
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
export function PublicInterpretationQuestionFromJSON(json) {
    return PublicInterpretationQuestionFromJSONTyped(json, false);
}
export function PublicInterpretationQuestionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'currentValue': json['current_value'] == null ? undefined : json['current_value'],
        'inputType': json['input_type'] == null ? undefined : json['input_type'],
        'options': json['options'] == null ? undefined : (json['options'].map(PublicInterpretationQuestionOptionFromJSON)),
        'question': json['question'],
        'questionId': json['question_id'],
        'rationale': json['rationale'],
        'required': json['required'] == null ? undefined : json['required'],
        'scope': PublicInterpretationScopeFromJSON(json['scope']),
        'source': json['source'],
        'suggestedValue': json['suggested_value'] == null ? undefined : json['suggested_value'],
    };
}
export function PublicInterpretationQuestionToJSON(json) {
    return PublicInterpretationQuestionToJSONTyped(json, false);
}
export function PublicInterpretationQuestionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'current_value': value['currentValue'],
        'input_type': value['inputType'],
        'options': value['options'] == null ? undefined : (value['options'].map(PublicInterpretationQuestionOptionToJSON)),
        'question': value['question'],
        'question_id': value['questionId'],
        'rationale': value['rationale'],
        'required': value['required'],
        'scope': PublicInterpretationScopeToJSON(value['scope']),
        'source': value['source'],
        'suggested_value': value['suggestedValue'],
    };
}
