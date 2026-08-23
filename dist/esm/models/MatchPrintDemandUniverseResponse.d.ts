/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { PublicSpecMatchReadiness } from './PublicSpecMatchReadiness';
import type { PublicProducerUniverseCandidate } from './PublicProducerUniverseCandidate';
import type { PublicRecipeState } from './PublicRecipeState';
/**
 * Ranked capability result across an authorised producer universe.
 * @export
 * @interface MatchPrintDemandUniverseResponse
 */
export interface MatchPrintDemandUniverseResponse {
    /**
     *
     * @type {MatchPrintDemandUniverseResponseAvailabilityCheckedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    availabilityChecked?: MatchPrintDemandUniverseResponseAvailabilityCheckedEnum;
    /**
     *
     * @type {PublicProducerUniverseCandidate}
     * @memberof MatchPrintDemandUniverseResponse
     */
    bestCapableCandidate?: PublicProducerUniverseCandidate | null;
    /**
     *
     * @type {number}
     * @memberof MatchPrintDemandUniverseResponse
     */
    blockedCount: number;
    /**
     *
     * @type {Array<PublicProducerUniverseCandidate>}
     * @memberof MatchPrintDemandUniverseResponse
     */
    candidates?: Array<PublicProducerUniverseCandidate>;
    /**
     *
     * @type {number}
     * @memberof MatchPrintDemandUniverseResponse
     */
    confirmedCapableCount: number;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseDemandBasisEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    demandBasis: MatchPrintDemandUniverseResponseDemandBasisEnum;
    /**
     *
     * @type {PublicProducerUniverseCandidate}
     * @memberof MatchPrintDemandUniverseResponse
     */
    leadingCandidate?: PublicProducerUniverseCandidate | null;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseLivePricingPerformedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    livePricingPerformed?: MatchPrintDemandUniverseResponseLivePricingPerformedEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof MatchPrintDemandUniverseResponse
     */
    nextActions?: Array<string>;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseOrderCreatedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    orderCreated?: MatchPrintDemandUniverseResponseOrderCreatedEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseOutcomeEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    outcome: MatchPrintDemandUniverseResponseOutcomeEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseResponsePersistencePerformedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    persistencePerformed?: MatchPrintDemandUniverseResponsePersistencePerformedEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseProducerAcceptancePerformedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    producerAcceptancePerformed?: MatchPrintDemandUniverseResponseProducerAcceptancePerformedEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseProducerSelectionPerformedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    producerSelectionPerformed?: MatchPrintDemandUniverseResponseProducerSelectionPerformedEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseProducerUniverseEvaluatedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    producerUniverseEvaluated?: MatchPrintDemandUniverseResponseProducerUniverseEvaluatedEnum;
    /**
     *
     * @type {number}
     * @memberof MatchPrintDemandUniverseResponse
     */
    producerUniverseSize: number;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseRankingPerformedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    rankingPerformed?: MatchPrintDemandUniverseResponseRankingPerformedEnum;
    /**
     *
     * @type {PublicSpecMatchReadiness}
     * @memberof MatchPrintDemandUniverseResponse
     */
    readiness: PublicSpecMatchReadiness;
    /**
     *
     * @type {PublicRecipeState}
     * @memberof MatchPrintDemandUniverseResponse
     */
    recipe: PublicRecipeState;
    /**
     *
     * @type {number}
     * @memberof MatchPrintDemandUniverseResponse
     */
    reviewRequiredCount: number;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseSchemaNameEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    schemaName?: MatchPrintDemandUniverseResponseSchemaNameEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseSchemaVersionEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    schemaVersion?: MatchPrintDemandUniverseResponseSchemaVersionEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseSpecmatchPerformedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    specmatchPerformed?: MatchPrintDemandUniverseResponseSpecmatchPerformedEnum;
}
/**
 * @export
 */
export declare const MatchPrintDemandUniverseResponseAvailabilityCheckedEnum: {
    readonly False: false;
};
export type MatchPrintDemandUniverseResponseAvailabilityCheckedEnum = typeof MatchPrintDemandUniverseResponseAvailabilityCheckedEnum[keyof typeof MatchPrintDemandUniverseResponseAvailabilityCheckedEnum];
/**
 * @export
 */
export declare const MatchPrintDemandUniverseResponseDemandBasisEnum: {
    readonly Recipe: "recipe";
    readonly Gjs: "gjs";
};
export type MatchPrintDemandUniverseResponseDemandBasisEnum = typeof MatchPrintDemandUniverseResponseDemandBasisEnum[keyof typeof MatchPrintDemandUniverseResponseDemandBasisEnum];
/**
 * @export
 */
export declare const MatchPrintDemandUniverseResponseLivePricingPerformedEnum: {
    readonly False: false;
};
export type MatchPrintDemandUniverseResponseLivePricingPerformedEnum = typeof MatchPrintDemandUniverseResponseLivePricingPerformedEnum[keyof typeof MatchPrintDemandUniverseResponseLivePricingPerformedEnum];
/**
 * @export
 */
export declare const MatchPrintDemandUniverseResponseOrderCreatedEnum: {
    readonly False: false;
};
export type MatchPrintDemandUniverseResponseOrderCreatedEnum = typeof MatchPrintDemandUniverseResponseOrderCreatedEnum[keyof typeof MatchPrintDemandUniverseResponseOrderCreatedEnum];
/**
 * @export
 */
export declare const MatchPrintDemandUniverseResponseOutcomeEnum: {
    readonly CapableProducerFound: "capable_producer_found";
    readonly ReviewRequired: "review_required";
    readonly NoCapableProducer: "no_capable_producer";
};
export type MatchPrintDemandUniverseResponseOutcomeEnum = typeof MatchPrintDemandUniverseResponseOutcomeEnum[keyof typeof MatchPrintDemandUniverseResponseOutcomeEnum];
/**
 * @export
 */
export declare const MatchPrintDemandUniverseResponsePersistencePerformedEnum: {
    readonly False: false;
};
export type MatchPrintDemandUniverseResponsePersistencePerformedEnum = typeof MatchPrintDemandUniverseResponsePersistencePerformedEnum[keyof typeof MatchPrintDemandUniverseResponsePersistencePerformedEnum];
/**
 * @export
 */
export declare const MatchPrintDemandUniverseResponseProducerAcceptancePerformedEnum: {
    readonly False: false;
};
export type MatchPrintDemandUniverseResponseProducerAcceptancePerformedEnum = typeof MatchPrintDemandUniverseResponseProducerAcceptancePerformedEnum[keyof typeof MatchPrintDemandUniverseResponseProducerAcceptancePerformedEnum];
/**
 * @export
 */
export declare const MatchPrintDemandUniverseResponseProducerSelectionPerformedEnum: {
    readonly False: false;
};
export type MatchPrintDemandUniverseResponseProducerSelectionPerformedEnum = typeof MatchPrintDemandUniverseResponseProducerSelectionPerformedEnum[keyof typeof MatchPrintDemandUniverseResponseProducerSelectionPerformedEnum];
/**
 * @export
 */
export declare const MatchPrintDemandUniverseResponseProducerUniverseEvaluatedEnum: {
    readonly True: true;
};
export type MatchPrintDemandUniverseResponseProducerUniverseEvaluatedEnum = typeof MatchPrintDemandUniverseResponseProducerUniverseEvaluatedEnum[keyof typeof MatchPrintDemandUniverseResponseProducerUniverseEvaluatedEnum];
/**
 * @export
 */
export declare const MatchPrintDemandUniverseResponseRankingPerformedEnum: {
    readonly True: true;
};
export type MatchPrintDemandUniverseResponseRankingPerformedEnum = typeof MatchPrintDemandUniverseResponseRankingPerformedEnum[keyof typeof MatchPrintDemandUniverseResponseRankingPerformedEnum];
/**
 * @export
 */
export declare const MatchPrintDemandUniverseResponseSchemaNameEnum: {
    readonly GnawwSpecmatchUniverseResult: "gnaww.specmatch_universe_result";
};
export type MatchPrintDemandUniverseResponseSchemaNameEnum = typeof MatchPrintDemandUniverseResponseSchemaNameEnum[keyof typeof MatchPrintDemandUniverseResponseSchemaNameEnum];
/**
 * @export
 */
export declare const MatchPrintDemandUniverseResponseSchemaVersionEnum: {
    readonly _01: "0.1";
};
export type MatchPrintDemandUniverseResponseSchemaVersionEnum = typeof MatchPrintDemandUniverseResponseSchemaVersionEnum[keyof typeof MatchPrintDemandUniverseResponseSchemaVersionEnum];
/**
 * @export
 */
export declare const MatchPrintDemandUniverseResponseSpecmatchPerformedEnum: {
    readonly True: true;
};
export type MatchPrintDemandUniverseResponseSpecmatchPerformedEnum = typeof MatchPrintDemandUniverseResponseSpecmatchPerformedEnum[keyof typeof MatchPrintDemandUniverseResponseSpecmatchPerformedEnum];
/**
 * Check if a given object implements the MatchPrintDemandUniverseResponse interface.
 */
export declare function instanceOfMatchPrintDemandUniverseResponse(value: object): value is MatchPrintDemandUniverseResponse;
export declare function MatchPrintDemandUniverseResponseFromJSON(json: any): MatchPrintDemandUniverseResponse;
export declare function MatchPrintDemandUniverseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchPrintDemandUniverseResponse;
export declare function MatchPrintDemandUniverseResponseToJSON(json: any): MatchPrintDemandUniverseResponse;
export declare function MatchPrintDemandUniverseResponseToJSONTyped(value?: MatchPrintDemandUniverseResponse | null, ignoreDiscriminator?: boolean): any;
