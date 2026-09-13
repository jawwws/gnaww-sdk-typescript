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
 * Controlled classification of the top-level messy-intent shape.
 * @export
 * @interface PublicInterpretationIntent
 */
export interface PublicInterpretationIntent {
    /**
     *
     * @type {number}
     * @memberof PublicInterpretationIntent
     */
    confidence: number;
    /**
     *
     * @type {PublicInterpretationIntentKindEnum}
     * @memberof PublicInterpretationIntent
     */
    kind: PublicInterpretationIntentKindEnum;
}


/**
 * @export
 */
export const PublicInterpretationIntentKindEnum = {
    SingleJob: 'single_job',
    OrderLike: 'order_like',
    CapabilityQuestion: 'capability_question',
    OutcomeLed: 'outcome_led',
    Mixed: 'mixed',
    NeedsReview: 'needs_review'
} as const;
export type PublicInterpretationIntentKindEnum = typeof PublicInterpretationIntentKindEnum[keyof typeof PublicInterpretationIntentKindEnum];


/**
 * Check if a given object implements the PublicInterpretationIntent interface.
 */
export function instanceOfPublicInterpretationIntent(value: object): value is PublicInterpretationIntent {
    if (!('confidence' in value) || value['confidence'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    return true;
}

export function PublicInterpretationIntentFromJSON(json: any): PublicInterpretationIntent {
    return PublicInterpretationIntentFromJSONTyped(json, false);
}

export function PublicInterpretationIntentFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationIntent {
    if (json == null) {
        return json;
    }
    return {

        'confidence': json['confidence'],
        'kind': json['kind'],
    };
}

export function PublicInterpretationIntentToJSON(json: any): PublicInterpretationIntent {
    return PublicInterpretationIntentToJSONTyped(json, false);
}

export function PublicInterpretationIntentToJSONTyped(value?: PublicInterpretationIntent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'confidence': value['confidence'],
        'kind': value['kind'],
    };
}
