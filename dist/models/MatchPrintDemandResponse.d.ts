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
import type { PublicSpecMatchReadiness } from './PublicSpecMatchReadiness';
import type { PublicRecipeState } from './PublicRecipeState';
import type { PublicMatchTargetState } from './PublicMatchTargetState';
import type { SpecMatchResult } from './SpecMatchResult';
/**
 * Public deterministic capability-fit result for validated demand.
 * @export
 * @interface MatchPrintDemandResponse
 */
export interface MatchPrintDemandResponse {
    /**
     *
     * @type {MatchPrintDemandResponseAvailabilityCheckedEnum}
     * @memberof MatchPrintDemandResponse
     */
    availabilityChecked?: MatchPrintDemandResponseAvailabilityCheckedEnum;
    /**
     *
     * @type {MatchPrintDemandResponseDemandBasisEnum}
     * @memberof MatchPrintDemandResponse
     */
    demandBasis: MatchPrintDemandResponseDemandBasisEnum;
    /**
     *
     * @type {MatchPrintDemandResponseLivePricingPerformedEnum}
     * @memberof MatchPrintDemandResponse
     */
    livePricingPerformed?: MatchPrintDemandResponseLivePricingPerformedEnum;
    /**
     *
     * @type {SpecMatchResult}
     * @memberof MatchPrintDemandResponse
     */
    match: SpecMatchResult;
    /**
     *
     * @type {Array<string>}
     * @memberof MatchPrintDemandResponse
     */
    nextActions?: Array<string>;
    /**
     *
     * @type {MatchPrintDemandResponseOrderCreatedEnum}
     * @memberof MatchPrintDemandResponse
     */
    orderCreated?: MatchPrintDemandResponseOrderCreatedEnum;
    /**
     *
     * @type {MatchPrintDemandResponsePersistencePerformedEnum}
     * @memberof MatchPrintDemandResponse
     */
    persistencePerformed?: MatchPrintDemandResponsePersistencePerformedEnum;
    /**
     *
     * @type {MatchPrintDemandResponseProducerAcceptancePerformedEnum}
     * @memberof MatchPrintDemandResponse
     */
    producerAcceptancePerformed?: MatchPrintDemandResponseProducerAcceptancePerformedEnum;
    /**
     *
     * @type {MatchPrintDemandResponseProducerSelectionPerformedEnum}
     * @memberof MatchPrintDemandResponse
     */
    producerSelectionPerformed?: MatchPrintDemandResponseProducerSelectionPerformedEnum;
    /**
     *
     * @type {PublicSpecMatchReadiness}
     * @memberof MatchPrintDemandResponse
     */
    readiness: PublicSpecMatchReadiness;
    /**
     *
     * @type {PublicRecipeState}
     * @memberof MatchPrintDemandResponse
     */
    recipe: PublicRecipeState;
    /**
     *
     * @type {MatchPrintDemandResponseSchemaNameEnum}
     * @memberof MatchPrintDemandResponse
     */
    schemaName?: MatchPrintDemandResponseSchemaNameEnum;
    /**
     *
     * @type {MatchPrintDemandResponseSchemaVersionEnum}
     * @memberof MatchPrintDemandResponse
     */
    schemaVersion?: MatchPrintDemandResponseSchemaVersionEnum;
    /**
     *
     * @type {MatchPrintDemandResponseSpecmatchPerformedEnum}
     * @memberof MatchPrintDemandResponse
     */
    specmatchPerformed?: MatchPrintDemandResponseSpecmatchPerformedEnum;
    /**
     *
     * @type {MatchPrintDemandResponseStatusEnum}
     * @memberof MatchPrintDemandResponse
     */
    status: MatchPrintDemandResponseStatusEnum;
    /**
     *
     * @type {PublicMatchTargetState}
     * @memberof MatchPrintDemandResponse
     */
    target: PublicMatchTargetState;
}
/**
 * @export
 */
export declare const MatchPrintDemandResponseAvailabilityCheckedEnum: {
    readonly False: false;
};
export type MatchPrintDemandResponseAvailabilityCheckedEnum = typeof MatchPrintDemandResponseAvailabilityCheckedEnum[keyof typeof MatchPrintDemandResponseAvailabilityCheckedEnum];
/**
 * @export
 */
export declare const MatchPrintDemandResponseDemandBasisEnum: {
    readonly Recipe: "recipe";
    readonly Gjs: "gjs";
};
export type MatchPrintDemandResponseDemandBasisEnum = typeof MatchPrintDemandResponseDemandBasisEnum[keyof typeof MatchPrintDemandResponseDemandBasisEnum];
/**
 * @export
 */
export declare const MatchPrintDemandResponseLivePricingPerformedEnum: {
    readonly False: false;
};
export type MatchPrintDemandResponseLivePricingPerformedEnum = typeof MatchPrintDemandResponseLivePricingPerformedEnum[keyof typeof MatchPrintDemandResponseLivePricingPerformedEnum];
/**
 * @export
 */
export declare const MatchPrintDemandResponseOrderCreatedEnum: {
    readonly False: false;
};
export type MatchPrintDemandResponseOrderCreatedEnum = typeof MatchPrintDemandResponseOrderCreatedEnum[keyof typeof MatchPrintDemandResponseOrderCreatedEnum];
/**
 * @export
 */
export declare const MatchPrintDemandResponsePersistencePerformedEnum: {
    readonly False: false;
};
export type MatchPrintDemandResponsePersistencePerformedEnum = typeof MatchPrintDemandResponsePersistencePerformedEnum[keyof typeof MatchPrintDemandResponsePersistencePerformedEnum];
/**
 * @export
 */
export declare const MatchPrintDemandResponseProducerAcceptancePerformedEnum: {
    readonly False: false;
};
export type MatchPrintDemandResponseProducerAcceptancePerformedEnum = typeof MatchPrintDemandResponseProducerAcceptancePerformedEnum[keyof typeof MatchPrintDemandResponseProducerAcceptancePerformedEnum];
/**
 * @export
 */
export declare const MatchPrintDemandResponseProducerSelectionPerformedEnum: {
    readonly False: false;
};
export type MatchPrintDemandResponseProducerSelectionPerformedEnum = typeof MatchPrintDemandResponseProducerSelectionPerformedEnum[keyof typeof MatchPrintDemandResponseProducerSelectionPerformedEnum];
/**
 * @export
 */
export declare const MatchPrintDemandResponseSchemaNameEnum: {
    readonly GnawwSpecmatchResult: "gnaww.specmatch_result";
};
export type MatchPrintDemandResponseSchemaNameEnum = typeof MatchPrintDemandResponseSchemaNameEnum[keyof typeof MatchPrintDemandResponseSchemaNameEnum];
/**
 * @export
 */
export declare const MatchPrintDemandResponseSchemaVersionEnum: {
    readonly _01: "0.1";
};
export type MatchPrintDemandResponseSchemaVersionEnum = typeof MatchPrintDemandResponseSchemaVersionEnum[keyof typeof MatchPrintDemandResponseSchemaVersionEnum];
/**
 * @export
 */
export declare const MatchPrintDemandResponseSpecmatchPerformedEnum: {
    readonly True: true;
};
export type MatchPrintDemandResponseSpecmatchPerformedEnum = typeof MatchPrintDemandResponseSpecmatchPerformedEnum[keyof typeof MatchPrintDemandResponseSpecmatchPerformedEnum];
/**
 * @export
 */
export declare const MatchPrintDemandResponseStatusEnum: {
    readonly Matched: "matched";
    readonly MatchedWithWarnings: "matched_with_warnings";
    readonly NeedsReview: "needs_review";
    readonly Blocked: "blocked";
    readonly Failed: "failed";
};
export type MatchPrintDemandResponseStatusEnum = typeof MatchPrintDemandResponseStatusEnum[keyof typeof MatchPrintDemandResponseStatusEnum];
/**
 * Check if a given object implements the MatchPrintDemandResponse interface.
 */
export declare function instanceOfMatchPrintDemandResponse(value: object): value is MatchPrintDemandResponse;
export declare function MatchPrintDemandResponseFromJSON(json: any): MatchPrintDemandResponse;
export declare function MatchPrintDemandResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchPrintDemandResponse;
export declare function MatchPrintDemandResponseToJSON(json: any): MatchPrintDemandResponse;
export declare function MatchPrintDemandResponseToJSONTyped(value?: MatchPrintDemandResponse | null, ignoreDiscriminator?: boolean): any;
