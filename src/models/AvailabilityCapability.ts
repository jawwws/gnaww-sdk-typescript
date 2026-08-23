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
import type { CapabilityEvidence } from './CapabilityEvidence';
import {
    CapabilityEvidenceFromJSON,
    CapabilityEvidenceFromJSONTyped,
    CapabilityEvidenceToJSON,
    CapabilityEvidenceToJSONTyped,
} from './CapabilityEvidence';

/**
 * Stable availability mode and optional live current status.
 * @export
 * @interface AvailabilityCapability
 */
export interface AvailabilityCapability {
    /**
     *
     * @type {number}
     * @memberof AvailabilityCapability
     */
    availableQuantity?: number | null;
    /**
     *
     * @type {CapabilityEvidence}
     * @memberof AvailabilityCapability
     */
    evidence?: CapabilityEvidence;
    /**
     *
     * @type {AvailabilityCapabilityModeEnum}
     * @memberof AvailabilityCapability
     */
    mode?: AvailabilityCapabilityModeEnum;
    /**
     *
     * @type {AvailabilityCapabilityStatusEnum}
     * @memberof AvailabilityCapability
     */
    status?: AvailabilityCapabilityStatusEnum;
}


/**
 * @export
 */
export const AvailabilityCapabilityModeEnum = {
    MadeToOrder: 'made_to_order',
    Stocked: 'stocked',
    Mixed: 'mixed',
    Unknown: 'unknown'
} as const;
export type AvailabilityCapabilityModeEnum = typeof AvailabilityCapabilityModeEnum[keyof typeof AvailabilityCapabilityModeEnum];

/**
 * @export
 */
export const AvailabilityCapabilityStatusEnum = {
    Available: 'available',
    Limited: 'limited',
    Unavailable: 'unavailable',
    Unknown: 'unknown'
} as const;
export type AvailabilityCapabilityStatusEnum = typeof AvailabilityCapabilityStatusEnum[keyof typeof AvailabilityCapabilityStatusEnum];


/**
 * Check if a given object implements the AvailabilityCapability interface.
 */
export function instanceOfAvailabilityCapability(value: object): value is AvailabilityCapability {
    return true;
}

export function AvailabilityCapabilityFromJSON(json: any): AvailabilityCapability {
    return AvailabilityCapabilityFromJSONTyped(json, false);
}

export function AvailabilityCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvailabilityCapability {
    if (json == null) {
        return json;
    }
    return {

        'availableQuantity': json['available_quantity'] == null ? undefined : json['available_quantity'],
        'evidence': json['evidence'] == null ? undefined : CapabilityEvidenceFromJSON(json['evidence']),
        'mode': json['mode'] == null ? undefined : json['mode'],
        'status': json['status'] == null ? undefined : json['status'],
    };
}

export function AvailabilityCapabilityToJSON(json: any): AvailabilityCapability {
    return AvailabilityCapabilityToJSONTyped(json, false);
}

export function AvailabilityCapabilityToJSONTyped(value?: AvailabilityCapability | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'available_quantity': value['availableQuantity'],
        'evidence': CapabilityEvidenceToJSON(value['evidence']),
        'mode': value['mode'],
        'status': value['status'],
    };
}
