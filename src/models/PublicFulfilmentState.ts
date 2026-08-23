/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
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
 * Buyer fulfilment requirement alongside physical production demand.
 * @export
 * @interface PublicFulfilmentState
 */
export interface PublicFulfilmentState {
    /**
     *
     * @type {FulfilmentRequirement}
     * @memberof PublicFulfilmentState
     */
    requirement?: FulfilmentRequirement | null;
    /**
     *
     * @type {PublicFulfilmentStateStatusEnum}
     * @memberof PublicFulfilmentState
     */
    status: PublicFulfilmentStateStatusEnum;
}


/**
 * @export
 */
export const PublicFulfilmentStateStatusEnum = {
    NotRequired: 'not_required',
    NeedsReview: 'needs_review',
    Ready: 'ready'
} as const;
export type PublicFulfilmentStateStatusEnum = typeof PublicFulfilmentStateStatusEnum[keyof typeof PublicFulfilmentStateStatusEnum];


/**
 * Check if a given object implements the PublicFulfilmentState interface.
 */
export function instanceOfPublicFulfilmentState(value: object): value is PublicFulfilmentState {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function PublicFulfilmentStateFromJSON(json: any): PublicFulfilmentState {
    return PublicFulfilmentStateFromJSONTyped(json, false);
}

export function PublicFulfilmentStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicFulfilmentState {
    if (json == null) {
        return json;
    }
    return {

        'requirement': json['requirement'] == null ? undefined : FulfilmentRequirementFromJSON(json['requirement']),
        'status': json['status'],
    };
}

export function PublicFulfilmentStateToJSON(json: any): PublicFulfilmentState {
    return PublicFulfilmentStateToJSONTyped(json, false);
}

export function PublicFulfilmentStateToJSONTyped(value?: PublicFulfilmentState | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'requirement': FulfilmentRequirementToJSON(value['requirement']),
        'status': value['status'],
    };
}
