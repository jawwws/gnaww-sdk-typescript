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

import { mapValues } from '../runtime';
import type { PublicInterpretationQuestionOption } from './PublicInterpretationQuestionOption';
import {
    PublicInterpretationQuestionOptionFromJSON,
    PublicInterpretationQuestionOptionFromJSONTyped,
    PublicInterpretationQuestionOptionToJSON,
    PublicInterpretationQuestionOptionToJSONTyped,
} from './PublicInterpretationQuestionOption';
import type { PublicInterpretationScope } from './PublicInterpretationScope';
import {
    PublicInterpretationScopeFromJSON,
    PublicInterpretationScopeFromJSONTyped,
    PublicInterpretationScopeToJSON,
    PublicInterpretationScopeToJSONTyped,
} from './PublicInterpretationScope';

/**
 * Stable scoped question without exposing private canonical field paths.
 * @export
 * @interface PublicInterpretationQuestion
 */
export interface PublicInterpretationQuestion {
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationQuestion
     */
    currentValue?: string | null;
    /**
     *
     * @type {PublicInterpretationQuestionInputTypeEnum}
     * @memberof PublicInterpretationQuestion
     */
    inputType?: PublicInterpretationQuestionInputTypeEnum;
    /**
     *
     * @type {Array<PublicInterpretationQuestionOption>}
     * @memberof PublicInterpretationQuestion
     */
    options?: Array<PublicInterpretationQuestionOption>;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationQuestion
     */
    question: string;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationQuestion
     */
    questionId: string;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationQuestion
     */
    rationale: string;
    /**
     *
     * @type {boolean}
     * @memberof PublicInterpretationQuestion
     */
    required?: boolean;
    /**
     *
     * @type {PublicInterpretationScope}
     * @memberof PublicInterpretationQuestion
     */
    scope: PublicInterpretationScope;
    /**
     *
     * @type {PublicInterpretationQuestionSourceEnum}
     * @memberof PublicInterpretationQuestion
     */
    source: PublicInterpretationQuestionSourceEnum;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationQuestion
     */
    suggestedValue?: string | null;
}


/**
 * @export
 */
export const PublicInterpretationQuestionInputTypeEnum = {
    SingleSelect: 'single_select',
    Text: 'text',
    Integer: 'integer'
} as const;
export type PublicInterpretationQuestionInputTypeEnum = typeof PublicInterpretationQuestionInputTypeEnum[keyof typeof PublicInterpretationQuestionInputTypeEnum];

/**
 * @export
 */
export const PublicInterpretationQuestionSourceEnum = {
    UseRequirement: 'use_requirement',
    CanonicalField: 'canonical_field',
    FulfilmentRequirement: 'fulfilment_requirement',
    Intent: 'intent'
} as const;
export type PublicInterpretationQuestionSourceEnum = typeof PublicInterpretationQuestionSourceEnum[keyof typeof PublicInterpretationQuestionSourceEnum];


/**
 * Check if a given object implements the PublicInterpretationQuestion interface.
 */
export function instanceOfPublicInterpretationQuestion(value: object): value is PublicInterpretationQuestion {
    if (!('question' in value) || value['question'] === undefined) return false;
    if (!('questionId' in value) || value['questionId'] === undefined) return false;
    if (!('rationale' in value) || value['rationale'] === undefined) return false;
    if (!('scope' in value) || value['scope'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function PublicInterpretationQuestionFromJSON(json: any): PublicInterpretationQuestion {
    return PublicInterpretationQuestionFromJSONTyped(json, false);
}

export function PublicInterpretationQuestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationQuestion {
    if (json == null) {
        return json;
    }
    return {

        'currentValue': json['current_value'] == null ? undefined : json['current_value'],
        'inputType': json['input_type'] == null ? undefined : json['input_type'],
        'options': json['options'] == null ? undefined : ((json['options'] as Array<any>).map(PublicInterpretationQuestionOptionFromJSON)),
        'question': json['question'],
        'questionId': json['question_id'],
        'rationale': json['rationale'],
        'required': json['required'] == null ? undefined : json['required'],
        'scope': PublicInterpretationScopeFromJSON(json['scope']),
        'source': json['source'],
        'suggestedValue': json['suggested_value'] == null ? undefined : json['suggested_value'],
    };
}

export function PublicInterpretationQuestionToJSON(json: any): PublicInterpretationQuestion {
    return PublicInterpretationQuestionToJSONTyped(json, false);
}

export function PublicInterpretationQuestionToJSONTyped(value?: PublicInterpretationQuestion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'current_value': value['currentValue'],
        'input_type': value['inputType'],
        'options': value['options'] == null ? undefined : ((value['options'] as Array<any>).map(PublicInterpretationQuestionOptionToJSON)),
        'question': value['question'],
        'question_id': value['questionId'],
        'rationale': value['rationale'],
        'required': value['required'],
        'scope': PublicInterpretationScopeToJSON(value['scope']),
        'source': value['source'],
        'suggested_value': value['suggestedValue'],
    };
}
