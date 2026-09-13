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
import type { PublicInterpretationScope } from './PublicInterpretationScope';
import {
    PublicInterpretationScopeFromJSON,
    PublicInterpretationScopeFromJSONTyped,
    PublicInterpretationScopeToJSON,
    PublicInterpretationScopeToJSONTyped,
} from './PublicInterpretationScope';

/**
 * A controlled capability-question branch, without implying an Order.
 * @export
 * @interface PublicCapabilityQuestion
 */
export interface PublicCapabilityQuestion {
    /**
     *
     * @type {string}
     * @memberof PublicCapabilityQuestion
     */
    question: string;
    /**
     *
     * @type {string}
     * @memberof PublicCapabilityQuestion
     */
    questionId: string;
    /**
     *
     * @type {PublicInterpretationScope}
     * @memberof PublicCapabilityQuestion
     */
    scope: PublicInterpretationScope;
    /**
     *
     * @type {PublicCapabilityQuestionStatusEnum}
     * @memberof PublicCapabilityQuestion
     */
    status: PublicCapabilityQuestionStatusEnum;
}


/**
 * @export
 */
export const PublicCapabilityQuestionStatusEnum = {
    NeedsReview: 'needs_review',
    ReadyForEvaluation: 'ready_for_evaluation'
} as const;
export type PublicCapabilityQuestionStatusEnum = typeof PublicCapabilityQuestionStatusEnum[keyof typeof PublicCapabilityQuestionStatusEnum];


/**
 * Check if a given object implements the PublicCapabilityQuestion interface.
 */
export function instanceOfPublicCapabilityQuestion(value: object): value is PublicCapabilityQuestion {
    if (!('question' in value) || value['question'] === undefined) return false;
    if (!('questionId' in value) || value['questionId'] === undefined) return false;
    if (!('scope' in value) || value['scope'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function PublicCapabilityQuestionFromJSON(json: any): PublicCapabilityQuestion {
    return PublicCapabilityQuestionFromJSONTyped(json, false);
}

export function PublicCapabilityQuestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicCapabilityQuestion {
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

export function PublicCapabilityQuestionToJSON(json: any): PublicCapabilityQuestion {
    return PublicCapabilityQuestionToJSONTyped(json, false);
}

export function PublicCapabilityQuestionToJSONTyped(value?: PublicCapabilityQuestion | null, ignoreDiscriminator: boolean = false): any {
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
