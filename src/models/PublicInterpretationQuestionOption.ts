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
/**
 * One controlled option for a public clarification question.
 * @export
 * @interface PublicInterpretationQuestionOption
 */
export interface PublicInterpretationQuestionOption {
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationQuestionOption
     */
    label: string;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationQuestionOption
     */
    value: string;
}

/**
 * Check if a given object implements the PublicInterpretationQuestionOption interface.
 */
export function instanceOfPublicInterpretationQuestionOption(value: object): value is PublicInterpretationQuestionOption {
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function PublicInterpretationQuestionOptionFromJSON(json: any): PublicInterpretationQuestionOption {
    return PublicInterpretationQuestionOptionFromJSONTyped(json, false);
}

export function PublicInterpretationQuestionOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationQuestionOption {
    if (json == null) {
        return json;
    }
    return {

        'label': json['label'],
        'value': json['value'],
    };
}

export function PublicInterpretationQuestionOptionToJSON(json: any): PublicInterpretationQuestionOption {
    return PublicInterpretationQuestionOptionToJSONTyped(json, false);
}

export function PublicInterpretationQuestionOptionToJSONTyped(value?: PublicInterpretationQuestionOption | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'label': value['label'],
        'value': value['value'],
    };
}
