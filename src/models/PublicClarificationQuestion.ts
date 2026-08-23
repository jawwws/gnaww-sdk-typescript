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
import type { PublicClarificationOption } from './PublicClarificationOption';
import {
    PublicClarificationOptionFromJSON,
    PublicClarificationOptionFromJSONTyped,
    PublicClarificationOptionToJSON,
    PublicClarificationOptionToJSONTyped,
} from './PublicClarificationOption';

/**
 * One Gnaww-owned question needed to progress buyer demand.
 * @export
 * @interface PublicClarificationQuestion
 */
export interface PublicClarificationQuestion {
    /**
     *
     * @type {string}
     * @memberof PublicClarificationQuestion
     */
    currentValue?: string | null;
    /**
     *
     * @type {string}
     * @memberof PublicClarificationQuestion
     */
    fieldPath: string;
    /**
     *
     * @type {PublicClarificationQuestionInputTypeEnum}
     * @memberof PublicClarificationQuestion
     */
    inputType?: PublicClarificationQuestionInputTypeEnum;
    /**
     *
     * @type {string}
     * @memberof PublicClarificationQuestion
     */
    key: string;
    /**
     *
     * @type {Array<PublicClarificationOption>}
     * @memberof PublicClarificationQuestion
     */
    options?: Array<PublicClarificationOption>;
    /**
     *
     * @type {string}
     * @memberof PublicClarificationQuestion
     */
    question: string;
    /**
     *
     * @type {string}
     * @memberof PublicClarificationQuestion
     */
    rationale: string;
    /**
     *
     * @type {PublicClarificationQuestionRequiredEnum}
     * @memberof PublicClarificationQuestion
     */
    required?: PublicClarificationQuestionRequiredEnum;
    /**
     *
     * @type {PublicClarificationQuestionSourceEnum}
     * @memberof PublicClarificationQuestion
     */
    source: PublicClarificationQuestionSourceEnum;
}


/**
 * @export
 */
export const PublicClarificationQuestionInputTypeEnum = {
    SingleSelect: 'single_select',
    Text: 'text',
    Integer: 'integer'
} as const;
export type PublicClarificationQuestionInputTypeEnum = typeof PublicClarificationQuestionInputTypeEnum[keyof typeof PublicClarificationQuestionInputTypeEnum];

/**
 * @export
 */
export const PublicClarificationQuestionRequiredEnum = {
    True: true
} as const;
export type PublicClarificationQuestionRequiredEnum = typeof PublicClarificationQuestionRequiredEnum[keyof typeof PublicClarificationQuestionRequiredEnum];

/**
 * @export
 */
export const PublicClarificationQuestionSourceEnum = {
    UseRequirement: 'use_requirement',
    CanonicalField: 'canonical_field',
    FulfilmentRequirement: 'fulfilment_requirement'
} as const;
export type PublicClarificationQuestionSourceEnum = typeof PublicClarificationQuestionSourceEnum[keyof typeof PublicClarificationQuestionSourceEnum];


/**
 * Check if a given object implements the PublicClarificationQuestion interface.
 */
export function instanceOfPublicClarificationQuestion(value: object): value is PublicClarificationQuestion {
    if (!('fieldPath' in value) || value['fieldPath'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('question' in value) || value['question'] === undefined) return false;
    if (!('rationale' in value) || value['rationale'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function PublicClarificationQuestionFromJSON(json: any): PublicClarificationQuestion {
    return PublicClarificationQuestionFromJSONTyped(json, false);
}

export function PublicClarificationQuestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicClarificationQuestion {
    if (json == null) {
        return json;
    }
    return {

        'currentValue': json['current_value'] == null ? undefined : json['current_value'],
        'fieldPath': json['field_path'],
        'inputType': json['input_type'] == null ? undefined : json['input_type'],
        'key': json['key'],
        'options': json['options'] == null ? undefined : ((json['options'] as Array<any>).map(PublicClarificationOptionFromJSON)),
        'question': json['question'],
        'rationale': json['rationale'],
        'required': json['required'] == null ? undefined : json['required'],
        'source': json['source'],
    };
}

export function PublicClarificationQuestionToJSON(json: any): PublicClarificationQuestion {
    return PublicClarificationQuestionToJSONTyped(json, false);
}

export function PublicClarificationQuestionToJSONTyped(value?: PublicClarificationQuestion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'current_value': value['currentValue'],
        'field_path': value['fieldPath'],
        'input_type': value['inputType'],
        'key': value['key'],
        'options': value['options'] == null ? undefined : ((value['options'] as Array<any>).map(PublicClarificationOptionToJSON)),
        'question': value['question'],
        'rationale': value['rationale'],
        'required': value['required'],
        'source': value['source'],
    };
}
