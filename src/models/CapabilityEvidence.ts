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
/**
 * Provenance and freshness for operational capability data.
 * @export
 * @interface CapabilityEvidence
 */
export interface CapabilityEvidence {
    /**
     *
     * @type {Date}
     * @memberof CapabilityEvidence
     */
    expiresAt?: Date | null;
    /**
     *
     * @type {Date}
     * @memberof CapabilityEvidence
     */
    observedAt?: Date | null;
    /**
     *
     * @type {CapabilityEvidenceSourceEnum}
     * @memberof CapabilityEvidence
     */
    source?: CapabilityEvidenceSourceEnum;
    /**
     *
     * @type {CapabilityEvidenceStatusEnum}
     * @memberof CapabilityEvidence
     */
    status?: CapabilityEvidenceStatusEnum;
}


/**
 * @export
 */
export const CapabilityEvidenceSourceEnum = {
    Fixture: 'fixture',
    Imported: 'imported',
    ProducerDeclared: 'producer_declared',
    Live: 'live',
    Unknown: 'unknown'
} as const;
export type CapabilityEvidenceSourceEnum = typeof CapabilityEvidenceSourceEnum[keyof typeof CapabilityEvidenceSourceEnum];

/**
 * @export
 */
export const CapabilityEvidenceStatusEnum = {
    Synthetic: 'synthetic',
    Unverified: 'unverified',
    Verified: 'verified',
    Live: 'live',
    Unknown: 'unknown'
} as const;
export type CapabilityEvidenceStatusEnum = typeof CapabilityEvidenceStatusEnum[keyof typeof CapabilityEvidenceStatusEnum];


/**
 * Check if a given object implements the CapabilityEvidence interface.
 */
export function instanceOfCapabilityEvidence(value: object): value is CapabilityEvidence {
    return true;
}

export function CapabilityEvidenceFromJSON(json: any): CapabilityEvidence {
    return CapabilityEvidenceFromJSONTyped(json, false);
}

export function CapabilityEvidenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CapabilityEvidence {
    if (json == null) {
        return json;
    }
    return {

        'expiresAt': json['expires_at'] == null ? undefined : (new Date(json['expires_at'])),
        'observedAt': json['observed_at'] == null ? undefined : (new Date(json['observed_at'])),
        'source': json['source'] == null ? undefined : json['source'],
        'status': json['status'] == null ? undefined : json['status'],
    };
}

export function CapabilityEvidenceToJSON(json: any): CapabilityEvidence {
    return CapabilityEvidenceToJSONTyped(json, false);
}

export function CapabilityEvidenceToJSONTyped(value?: CapabilityEvidence | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'expires_at': value['expiresAt'] == null ? value['expiresAt'] : value['expiresAt'].toISOString(),
        'observed_at': value['observedAt'] == null ? value['observedAt'] : value['observedAt'].toISOString(),
        'source': value['source'],
        'status': value['status'],
    };
}
