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
 * Producer turnaround range with explicit basis and provenance.
 * @export
 * @interface TurnaroundCapability
 */
export interface TurnaroundCapability {
    /**
     *
     * @type {TurnaroundCapabilityBasisEnum}
     * @memberof TurnaroundCapability
     */
    basis?: TurnaroundCapabilityBasisEnum;
    /**
     *
     * @type {CapabilityEvidence}
     * @memberof TurnaroundCapability
     */
    evidence?: CapabilityEvidence;
    /**
     *
     * @type {number}
     * @memberof TurnaroundCapability
     */
    maximumWorkingDays?: number | null;
    /**
     *
     * @type {number}
     * @memberof TurnaroundCapability
     */
    minimumWorkingDays?: number | null;
}


/**
 * @export
 */
export const TurnaroundCapabilityBasisEnum = {
    ProductionOnly: 'production_only',
    ProductionAndDispatch: 'production_and_dispatch',
    Unknown: 'unknown'
} as const;
export type TurnaroundCapabilityBasisEnum = typeof TurnaroundCapabilityBasisEnum[keyof typeof TurnaroundCapabilityBasisEnum];


/**
 * Check if a given object implements the TurnaroundCapability interface.
 */
export function instanceOfTurnaroundCapability(value: object): value is TurnaroundCapability {
    return true;
}

export function TurnaroundCapabilityFromJSON(json: any): TurnaroundCapability {
    return TurnaroundCapabilityFromJSONTyped(json, false);
}

export function TurnaroundCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): TurnaroundCapability {
    if (json == null) {
        return json;
    }
    return {

        'basis': json['basis'] == null ? undefined : json['basis'],
        'evidence': json['evidence'] == null ? undefined : CapabilityEvidenceFromJSON(json['evidence']),
        'maximumWorkingDays': json['maximum_working_days'] == null ? undefined : json['maximum_working_days'],
        'minimumWorkingDays': json['minimum_working_days'] == null ? undefined : json['minimum_working_days'],
    };
}

export function TurnaroundCapabilityToJSON(json: any): TurnaroundCapability {
    return TurnaroundCapabilityToJSONTyped(json, false);
}

export function TurnaroundCapabilityToJSONTyped(value?: TurnaroundCapability | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'basis': value['basis'],
        'evidence': CapabilityEvidenceToJSON(value['evidence']),
        'maximum_working_days': value['maximumWorkingDays'],
        'minimum_working_days': value['minimumWorkingDays'],
    };
}
