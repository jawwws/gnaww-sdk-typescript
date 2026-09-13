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
import type { FulfilmentRequirement } from './FulfilmentRequirement';
import {
    FulfilmentRequirementFromJSON,
    FulfilmentRequirementFromJSONTyped,
    FulfilmentRequirementToJSON,
    FulfilmentRequirementToJSONTyped,
} from './FulfilmentRequirement';

/**
 * Job-owned fulfilment requirement state, separate from live fulfilment.
 * @export
 * @interface PublicInterpretationFulfilmentState
 */
export interface PublicInterpretationFulfilmentState {
    /**
     *
     * @type {FulfilmentRequirement}
     * @memberof PublicInterpretationFulfilmentState
     */
    requirement?: FulfilmentRequirement | null;
    /**
     *
     * @type {PublicInterpretationFulfilmentStateStatusEnum}
     * @memberof PublicInterpretationFulfilmentState
     */
    status: PublicInterpretationFulfilmentStateStatusEnum;
}


/**
 * @export
 */
export const PublicInterpretationFulfilmentStateStatusEnum = {
    NotRequired: 'not_required',
    NeedsReview: 'needs_review',
    Ready: 'ready'
} as const;
export type PublicInterpretationFulfilmentStateStatusEnum = typeof PublicInterpretationFulfilmentStateStatusEnum[keyof typeof PublicInterpretationFulfilmentStateStatusEnum];


/**
 * Check if a given object implements the PublicInterpretationFulfilmentState interface.
 */
export function instanceOfPublicInterpretationFulfilmentState(value: object): value is PublicInterpretationFulfilmentState {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function PublicInterpretationFulfilmentStateFromJSON(json: any): PublicInterpretationFulfilmentState {
    return PublicInterpretationFulfilmentStateFromJSONTyped(json, false);
}

export function PublicInterpretationFulfilmentStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationFulfilmentState {
    if (json == null) {
        return json;
    }
    return {

        'requirement': json['requirement'] == null ? undefined : FulfilmentRequirementFromJSON(json['requirement']),
        'status': json['status'],
    };
}

export function PublicInterpretationFulfilmentStateToJSON(json: any): PublicInterpretationFulfilmentState {
    return PublicInterpretationFulfilmentStateToJSONTyped(json, false);
}

export function PublicInterpretationFulfilmentStateToJSONTyped(value?: PublicInterpretationFulfilmentState | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'requirement': FulfilmentRequirementToJSON(value['requirement']),
        'status': value['status'],
    };
}
