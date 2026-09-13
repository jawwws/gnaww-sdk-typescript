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
 * One answer referencing a stable public question identity.
 * @export
 * @interface PublicInterpretationContinuationAnswer
 */
export interface PublicInterpretationContinuationAnswer {
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationContinuationAnswer
     */
    questionId: string;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationContinuationAnswer
     */
    value: string;
}

/**
 * Check if a given object implements the PublicInterpretationContinuationAnswer interface.
 */
export function instanceOfPublicInterpretationContinuationAnswer(value: object): value is PublicInterpretationContinuationAnswer {
    if (!('questionId' in value) || value['questionId'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function PublicInterpretationContinuationAnswerFromJSON(json: any): PublicInterpretationContinuationAnswer {
    return PublicInterpretationContinuationAnswerFromJSONTyped(json, false);
}

export function PublicInterpretationContinuationAnswerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationContinuationAnswer {
    if (json == null) {
        return json;
    }
    return {

        'questionId': json['question_id'],
        'value': json['value'],
    };
}

export function PublicInterpretationContinuationAnswerToJSON(json: any): PublicInterpretationContinuationAnswer {
    return PublicInterpretationContinuationAnswerToJSONTyped(json, false);
}

export function PublicInterpretationContinuationAnswerToJSONTyped(value?: PublicInterpretationContinuationAnswer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'question_id': value['questionId'],
        'value': value['value'],
    };
}
