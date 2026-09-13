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
import type { IntentProviderMetadata } from './IntentProviderMetadata';
import {
    IntentProviderMetadataFromJSON,
    IntentProviderMetadataFromJSONTyped,
    IntentProviderMetadataToJSON,
    IntentProviderMetadataToJSONTyped,
} from './IntentProviderMetadata';

/**
 * Safe public truth about controlled semantic interpretation.
 * @export
 * @interface PublicControlledInterpretationState
 */
export interface PublicControlledInterpretationState {
    /**
     *
     * @type {boolean}
     * @memberof PublicControlledInterpretationState
     */
    attempted: boolean;
    /**
     *
     * @type {string}
     * @memberof PublicControlledInterpretationState
     */
    error?: string | null;
    /**
     *
     * @type {IntentProviderMetadata}
     * @memberof PublicControlledInterpretationState
     */
    metadata?: IntentProviderMetadata | null;
    /**
     *
     * @type {string}
     * @memberof PublicControlledInterpretationState
     */
    provider?: string | null;
    /**
     *
     * @type {PublicControlledInterpretationStateStatusEnum}
     * @memberof PublicControlledInterpretationState
     */
    status: PublicControlledInterpretationStateStatusEnum;
}


/**
 * @export
 */
export const PublicControlledInterpretationStateStatusEnum = {
    NotReported: 'not_reported',
    NotRequired: 'not_required',
    Completed: 'completed',
    Unavailable: 'unavailable',
    Failed: 'failed'
} as const;
export type PublicControlledInterpretationStateStatusEnum = typeof PublicControlledInterpretationStateStatusEnum[keyof typeof PublicControlledInterpretationStateStatusEnum];


/**
 * Check if a given object implements the PublicControlledInterpretationState interface.
 */
export function instanceOfPublicControlledInterpretationState(value: object): value is PublicControlledInterpretationState {
    if (!('attempted' in value) || value['attempted'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function PublicControlledInterpretationStateFromJSON(json: any): PublicControlledInterpretationState {
    return PublicControlledInterpretationStateFromJSONTyped(json, false);
}

export function PublicControlledInterpretationStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicControlledInterpretationState {
    if (json == null) {
        return json;
    }
    return {

        'attempted': json['attempted'],
        'error': json['error'] == null ? undefined : json['error'],
        'metadata': json['metadata'] == null ? undefined : IntentProviderMetadataFromJSON(json['metadata']),
        'provider': json['provider'] == null ? undefined : json['provider'],
        'status': json['status'],
    };
}

export function PublicControlledInterpretationStateToJSON(json: any): PublicControlledInterpretationState {
    return PublicControlledInterpretationStateToJSONTyped(json, false);
}

export function PublicControlledInterpretationStateToJSONTyped(value?: PublicControlledInterpretationState | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'attempted': value['attempted'],
        'error': value['error'],
        'metadata': IntentProviderMetadataToJSON(value['metadata']),
        'provider': value['provider'],
        'status': value['status'],
    };
}
