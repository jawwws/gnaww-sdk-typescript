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
import type { FulfilmentMatchResult } from './FulfilmentMatchResult';
import {
    FulfilmentMatchResultFromJSON,
    FulfilmentMatchResultFromJSONTyped,
    FulfilmentMatchResultToJSON,
    FulfilmentMatchResultToJSONTyped,
} from './FulfilmentMatchResult';
import type { SpecMatchResult } from './SpecMatchResult';
import {
    SpecMatchResultFromJSON,
    SpecMatchResultFromJSONTyped,
    SpecMatchResultToJSON,
    SpecMatchResultToJSONTyped,
} from './SpecMatchResult';

/**
 * Safe ranked producer result with explicit capability truth.
 * @export
 * @interface PublicProducerUniverseCandidate
 */
export interface PublicProducerUniverseCandidate {
    /**
     *
     * @type {FulfilmentMatchResult}
     * @memberof PublicProducerUniverseCandidate
     */
    fulfilment: FulfilmentMatchResult;
    /**
     *
     * @type {boolean}
     * @memberof PublicProducerUniverseCandidate
     */
    isLiveSupplier: boolean;
    /**
     *
     * @type {SpecMatchResult}
     * @memberof PublicProducerUniverseCandidate
     */
    match: SpecMatchResult;
    /**
     *
     * @type {string}
     * @memberof PublicProducerUniverseCandidate
     */
    producerId: string;
    /**
     *
     * @type {string}
     * @memberof PublicProducerUniverseCandidate
     */
    producerName: string;
    /**
     *
     * @type {string}
     * @memberof PublicProducerUniverseCandidate
     */
    producerProfileId: string;
    /**
     *
     * @type {string}
     * @memberof PublicProducerUniverseCandidate
     */
    producerProfileSchemaVersion: string;
    /**
     *
     * @type {number}
     * @memberof PublicProducerUniverseCandidate
     */
    rank: number;
    /**
     *
     * @type {PublicProducerUniverseCandidateSourceEnum}
     * @memberof PublicProducerUniverseCandidate
     */
    source: PublicProducerUniverseCandidateSourceEnum;
    /**
     *
     * @type {PublicProducerUniverseCandidateStatusEnum}
     * @memberof PublicProducerUniverseCandidate
     */
    status: PublicProducerUniverseCandidateStatusEnum;
    /**
     *
     * @type {PublicProducerUniverseCandidateTruthStateEnum}
     * @memberof PublicProducerUniverseCandidate
     */
    truthState: PublicProducerUniverseCandidateTruthStateEnum;
}


/**
 * @export
 */
export const PublicProducerUniverseCandidateSourceEnum = {
    PublishedProfile: 'published_profile',
    DemoFixture: 'demo_fixture'
} as const;
export type PublicProducerUniverseCandidateSourceEnum = typeof PublicProducerUniverseCandidateSourceEnum[keyof typeof PublicProducerUniverseCandidateSourceEnum];

/**
 * @export
 */
export const PublicProducerUniverseCandidateStatusEnum = {
    Capable: 'capable',
    NeedsReview: 'needs_review',
    Blocked: 'blocked'
} as const;
export type PublicProducerUniverseCandidateStatusEnum = typeof PublicProducerUniverseCandidateStatusEnum[keyof typeof PublicProducerUniverseCandidateStatusEnum];

/**
 * @export
 */
export const PublicProducerUniverseCandidateTruthStateEnum = {
    PublishedCapability: 'published_capability',
    FixtureBacked: 'fixture_backed'
} as const;
export type PublicProducerUniverseCandidateTruthStateEnum = typeof PublicProducerUniverseCandidateTruthStateEnum[keyof typeof PublicProducerUniverseCandidateTruthStateEnum];


/**
 * Check if a given object implements the PublicProducerUniverseCandidate interface.
 */
export function instanceOfPublicProducerUniverseCandidate(value: object): value is PublicProducerUniverseCandidate {
    if (!('fulfilment' in value) || value['fulfilment'] === undefined) return false;
    if (!('isLiveSupplier' in value) || value['isLiveSupplier'] === undefined) return false;
    if (!('match' in value) || value['match'] === undefined) return false;
    if (!('producerId' in value) || value['producerId'] === undefined) return false;
    if (!('producerName' in value) || value['producerName'] === undefined) return false;
    if (!('producerProfileId' in value) || value['producerProfileId'] === undefined) return false;
    if (!('producerProfileSchemaVersion' in value) || value['producerProfileSchemaVersion'] === undefined) return false;
    if (!('rank' in value) || value['rank'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('truthState' in value) || value['truthState'] === undefined) return false;
    return true;
}

export function PublicProducerUniverseCandidateFromJSON(json: any): PublicProducerUniverseCandidate {
    return PublicProducerUniverseCandidateFromJSONTyped(json, false);
}

export function PublicProducerUniverseCandidateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicProducerUniverseCandidate {
    if (json == null) {
        return json;
    }
    return {

        'fulfilment': FulfilmentMatchResultFromJSON(json['fulfilment']),
        'isLiveSupplier': json['is_live_supplier'],
        'match': SpecMatchResultFromJSON(json['match']),
        'producerId': json['producer_id'],
        'producerName': json['producer_name'],
        'producerProfileId': json['producer_profile_id'],
        'producerProfileSchemaVersion': json['producer_profile_schema_version'],
        'rank': json['rank'],
        'source': json['source'],
        'status': json['status'],
        'truthState': json['truth_state'],
    };
}

export function PublicProducerUniverseCandidateToJSON(json: any): PublicProducerUniverseCandidate {
    return PublicProducerUniverseCandidateToJSONTyped(json, false);
}

export function PublicProducerUniverseCandidateToJSONTyped(value?: PublicProducerUniverseCandidate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'fulfilment': FulfilmentMatchResultToJSON(value['fulfilment']),
        'is_live_supplier': value['isLiveSupplier'],
        'match': SpecMatchResultToJSON(value['match']),
        'producer_id': value['producerId'],
        'producer_name': value['producerName'],
        'producer_profile_id': value['producerProfileId'],
        'producer_profile_schema_version': value['producerProfileSchemaVersion'],
        'rank': value['rank'],
        'source': value['source'],
        'status': value['status'],
        'truth_state': value['truthState'],
    };
}
