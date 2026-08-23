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
import { PublicClarificationOptionFromJSON, PublicClarificationOptionToJSON, } from './PublicClarificationOption';
/**
 * @export
 */
export const PublicClarificationQuestionInputTypeEnum = {
    SingleSelect: 'single_select',
    Text: 'text',
    Integer: 'integer'
};
/**
 * @export
 */
export const PublicClarificationQuestionRequiredEnum = {
    True: true
};
/**
 * @export
 */
export const PublicClarificationQuestionSourceEnum = {
    UseRequirement: 'use_requirement',
    CanonicalField: 'canonical_field',
    FulfilmentRequirement: 'fulfilment_requirement'
};
/**
 * Check if a given object implements the PublicClarificationQuestion interface.
 */
export function instanceOfPublicClarificationQuestion(value) {
    if (!('fieldPath' in value) || value['fieldPath'] === undefined)
        return false;
    if (!('key' in value) || value['key'] === undefined)
        return false;
    if (!('question' in value) || value['question'] === undefined)
        return false;
    if (!('rationale' in value) || value['rationale'] === undefined)
        return false;
    if (!('source' in value) || value['source'] === undefined)
        return false;
    return true;
}
export function PublicClarificationQuestionFromJSON(json) {
    return PublicClarificationQuestionFromJSONTyped(json, false);
}
export function PublicClarificationQuestionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'currentValue': json['current_value'] == null ? undefined : json['current_value'],
        'fieldPath': json['field_path'],
        'inputType': json['input_type'] == null ? undefined : json['input_type'],
        'key': json['key'],
        'options': json['options'] == null ? undefined : (json['options'].map(PublicClarificationOptionFromJSON)),
        'question': json['question'],
        'rationale': json['rationale'],
        'required': json['required'] == null ? undefined : json['required'],
        'source': json['source'],
    };
}
export function PublicClarificationQuestionToJSON(json) {
    return PublicClarificationQuestionToJSONTyped(json, false);
}
export function PublicClarificationQuestionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'current_value': value['currentValue'],
        'field_path': value['fieldPath'],
        'input_type': value['inputType'],
        'key': value['key'],
        'options': value['options'] == null ? undefined : (value['options'].map(PublicClarificationOptionToJSON)),
        'question': value['question'],
        'rationale': value['rationale'],
        'required': value['required'],
        'source': value['source'],
    };
}
