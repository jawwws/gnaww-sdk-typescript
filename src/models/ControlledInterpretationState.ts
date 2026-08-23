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
 * @interface ControlledInterpretationState
 */
export interface ControlledInterpretationState {
    /**
     *
     * @type {boolean}
     * @memberof ControlledInterpretationState
     */
    attempted: boolean;
    /**
     *
     * @type {string}
     * @memberof ControlledInterpretationState
     */
    error?: string | null;
    /**
     *
     * @type {IntentProviderMetadata}
     * @memberof ControlledInterpretationState
     */
    metadata?: IntentProviderMetadata | null;
    /**
     *
     * @type {string}
     * @memberof ControlledInterpretationState
     */
    provider?: string | null;
    /**
     *
     * @type {ControlledInterpretationStateStatusEnum}
     * @memberof ControlledInterpretationState
     */
    status: ControlledInterpretationStateStatusEnum;
}


/**
 * @export
 */
export const ControlledInterpretationStateStatusEnum = {
    NotRequired: 'not_required',
    Completed: 'completed',
    Unavailable: 'unavailable',
    Failed: 'failed'
} as const;
export type ControlledInterpretationStateStatusEnum = typeof ControlledInterpretationStateStatusEnum[keyof typeof ControlledInterpretationStateStatusEnum];


/**
 * Check if a given object implements the ControlledInterpretationState interface.
 */
export function instanceOfControlledInterpretationState(value: object): value is ControlledInterpretationState {
    if (!('attempted' in value) || value['attempted'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function ControlledInterpretationStateFromJSON(json: any): ControlledInterpretationState {
    return ControlledInterpretationStateFromJSONTyped(json, false);
}

export function ControlledInterpretationStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ControlledInterpretationState {
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

export function ControlledInterpretationStateToJSON(json: any): ControlledInterpretationState {
    return ControlledInterpretationStateToJSONTyped(json, false);
}

export function ControlledInterpretationStateToJSONTyped(value?: ControlledInterpretationState | null, ignoreDiscriminator: boolean = false): any {
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
