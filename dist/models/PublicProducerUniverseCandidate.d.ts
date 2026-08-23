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
import type { FulfilmentMatchResult } from './FulfilmentMatchResult';
import type { SpecMatchResult } from './SpecMatchResult';
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
export declare const PublicProducerUniverseCandidateSourceEnum: {
    readonly PublishedProfile: "published_profile";
    readonly DemoFixture: "demo_fixture";
};
export type PublicProducerUniverseCandidateSourceEnum = typeof PublicProducerUniverseCandidateSourceEnum[keyof typeof PublicProducerUniverseCandidateSourceEnum];
/**
 * @export
 */
export declare const PublicProducerUniverseCandidateStatusEnum: {
    readonly Capable: "capable";
    readonly NeedsReview: "needs_review";
    readonly Blocked: "blocked";
};
export type PublicProducerUniverseCandidateStatusEnum = typeof PublicProducerUniverseCandidateStatusEnum[keyof typeof PublicProducerUniverseCandidateStatusEnum];
/**
 * @export
 */
export declare const PublicProducerUniverseCandidateTruthStateEnum: {
    readonly PublishedCapability: "published_capability";
    readonly FixtureBacked: "fixture_backed";
};
export type PublicProducerUniverseCandidateTruthStateEnum = typeof PublicProducerUniverseCandidateTruthStateEnum[keyof typeof PublicProducerUniverseCandidateTruthStateEnum];
/**
 * Check if a given object implements the PublicProducerUniverseCandidate interface.
 */
export declare function instanceOfPublicProducerUniverseCandidate(value: object): value is PublicProducerUniverseCandidate;
export declare function PublicProducerUniverseCandidateFromJSON(json: any): PublicProducerUniverseCandidate;
export declare function PublicProducerUniverseCandidateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicProducerUniverseCandidate;
export declare function PublicProducerUniverseCandidateToJSON(json: any): PublicProducerUniverseCandidate;
export declare function PublicProducerUniverseCandidateToJSONTyped(value?: PublicProducerUniverseCandidate | null, ignoreDiscriminator?: boolean): any;
