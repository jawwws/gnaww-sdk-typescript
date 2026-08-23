/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { PublicSpecMatchReadiness } from './PublicSpecMatchReadiness';
import type { PublicMatchTargetState } from './PublicMatchTargetState';
import type { ResolvedRecipeMatchState } from './ResolvedRecipeMatchState';
import type { SpecMatchResult } from './SpecMatchResult';
/**
 * Public deterministic capability-fit result for one persisted Recipe.
 * @export
 * @interface MatchRecipeResponse
 */
export interface MatchRecipeResponse {
    /**
     *
     * @type {MatchRecipeResponseAvailabilityCheckedEnum}
     * @memberof MatchRecipeResponse
     */
    availabilityChecked?: MatchRecipeResponseAvailabilityCheckedEnum;
    /**
     *
     * @type {MatchRecipeResponseDemandBasisEnum}
     * @memberof MatchRecipeResponse
     */
    demandBasis?: MatchRecipeResponseDemandBasisEnum;
    /**
     *
     * @type {MatchRecipeResponseLivePricingPerformedEnum}
     * @memberof MatchRecipeResponse
     */
    livePricingPerformed?: MatchRecipeResponseLivePricingPerformedEnum;
    /**
     *
     * @type {SpecMatchResult}
     * @memberof MatchRecipeResponse
     */
    match: SpecMatchResult;
    /**
     *
     * @type {Array<string>}
     * @memberof MatchRecipeResponse
     */
    nextActions?: Array<string>;
    /**
     *
     * @type {MatchRecipeResponseOrderCreatedEnum}
     * @memberof MatchRecipeResponse
     */
    orderCreated?: MatchRecipeResponseOrderCreatedEnum;
    /**
     *
     * @type {MatchRecipeResponsePersistencePerformedEnum}
     * @memberof MatchRecipeResponse
     */
    persistencePerformed?: MatchRecipeResponsePersistencePerformedEnum;
    /**
     *
     * @type {MatchRecipeResponseProducerAcceptancePerformedEnum}
     * @memberof MatchRecipeResponse
     */
    producerAcceptancePerformed?: MatchRecipeResponseProducerAcceptancePerformedEnum;
    /**
     *
     * @type {MatchRecipeResponseProducerSelectionPerformedEnum}
     * @memberof MatchRecipeResponse
     */
    producerSelectionPerformed?: MatchRecipeResponseProducerSelectionPerformedEnum;
    /**
     *
     * @type {PublicSpecMatchReadiness}
     * @memberof MatchRecipeResponse
     */
    readiness: PublicSpecMatchReadiness;
    /**
     *
     * @type {ResolvedRecipeMatchState}
     * @memberof MatchRecipeResponse
     */
    recipe: ResolvedRecipeMatchState;
    /**
     *
     * @type {MatchRecipeResponseSchemaNameEnum}
     * @memberof MatchRecipeResponse
     */
    schemaName?: MatchRecipeResponseSchemaNameEnum;
    /**
     *
     * @type {MatchRecipeResponseSchemaVersionEnum}
     * @memberof MatchRecipeResponse
     */
    schemaVersion?: MatchRecipeResponseSchemaVersionEnum;
    /**
     *
     * @type {MatchRecipeResponseSpecmatchPerformedEnum}
     * @memberof MatchRecipeResponse
     */
    specmatchPerformed?: MatchRecipeResponseSpecmatchPerformedEnum;
    /**
     *
     * @type {MatchRecipeResponseStatusEnum}
     * @memberof MatchRecipeResponse
     */
    status: MatchRecipeResponseStatusEnum;
    /**
     *
     * @type {PublicMatchTargetState}
     * @memberof MatchRecipeResponse
     */
    target: PublicMatchTargetState;
}
/**
 * @export
 */
export declare const MatchRecipeResponseAvailabilityCheckedEnum: {
    readonly False: false;
};
export type MatchRecipeResponseAvailabilityCheckedEnum = typeof MatchRecipeResponseAvailabilityCheckedEnum[keyof typeof MatchRecipeResponseAvailabilityCheckedEnum];
/**
 * @export
 */
export declare const MatchRecipeResponseDemandBasisEnum: {
    readonly Recipe: "recipe";
};
export type MatchRecipeResponseDemandBasisEnum = typeof MatchRecipeResponseDemandBasisEnum[keyof typeof MatchRecipeResponseDemandBasisEnum];
/**
 * @export
 */
export declare const MatchRecipeResponseLivePricingPerformedEnum: {
    readonly False: false;
};
export type MatchRecipeResponseLivePricingPerformedEnum = typeof MatchRecipeResponseLivePricingPerformedEnum[keyof typeof MatchRecipeResponseLivePricingPerformedEnum];
/**
 * @export
 */
export declare const MatchRecipeResponseOrderCreatedEnum: {
    readonly False: false;
};
export type MatchRecipeResponseOrderCreatedEnum = typeof MatchRecipeResponseOrderCreatedEnum[keyof typeof MatchRecipeResponseOrderCreatedEnum];
/**
 * @export
 */
export declare const MatchRecipeResponsePersistencePerformedEnum: {
    readonly False: false;
};
export type MatchRecipeResponsePersistencePerformedEnum = typeof MatchRecipeResponsePersistencePerformedEnum[keyof typeof MatchRecipeResponsePersistencePerformedEnum];
/**
 * @export
 */
export declare const MatchRecipeResponseProducerAcceptancePerformedEnum: {
    readonly False: false;
};
export type MatchRecipeResponseProducerAcceptancePerformedEnum = typeof MatchRecipeResponseProducerAcceptancePerformedEnum[keyof typeof MatchRecipeResponseProducerAcceptancePerformedEnum];
/**
 * @export
 */
export declare const MatchRecipeResponseProducerSelectionPerformedEnum: {
    readonly False: false;
};
export type MatchRecipeResponseProducerSelectionPerformedEnum = typeof MatchRecipeResponseProducerSelectionPerformedEnum[keyof typeof MatchRecipeResponseProducerSelectionPerformedEnum];
/**
 * @export
 */
export declare const MatchRecipeResponseSchemaNameEnum: {
    readonly GnawwRecipeSpecmatchResult: "gnaww.recipe_specmatch_result";
};
export type MatchRecipeResponseSchemaNameEnum = typeof MatchRecipeResponseSchemaNameEnum[keyof typeof MatchRecipeResponseSchemaNameEnum];
/**
 * @export
 */
export declare const MatchRecipeResponseSchemaVersionEnum: {
    readonly _01: "0.1";
};
export type MatchRecipeResponseSchemaVersionEnum = typeof MatchRecipeResponseSchemaVersionEnum[keyof typeof MatchRecipeResponseSchemaVersionEnum];
/**
 * @export
 */
export declare const MatchRecipeResponseSpecmatchPerformedEnum: {
    readonly True: true;
};
export type MatchRecipeResponseSpecmatchPerformedEnum = typeof MatchRecipeResponseSpecmatchPerformedEnum[keyof typeof MatchRecipeResponseSpecmatchPerformedEnum];
/**
 * @export
 */
export declare const MatchRecipeResponseStatusEnum: {
    readonly Matched: "matched";
    readonly MatchedWithWarnings: "matched_with_warnings";
    readonly NeedsReview: "needs_review";
    readonly Blocked: "blocked";
    readonly Failed: "failed";
};
export type MatchRecipeResponseStatusEnum = typeof MatchRecipeResponseStatusEnum[keyof typeof MatchRecipeResponseStatusEnum];
/**
 * Check if a given object implements the MatchRecipeResponse interface.
 */
export declare function instanceOfMatchRecipeResponse(value: object): value is MatchRecipeResponse;
export declare function MatchRecipeResponseFromJSON(json: any): MatchRecipeResponse;
export declare function MatchRecipeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchRecipeResponse;
export declare function MatchRecipeResponseToJSON(json: any): MatchRecipeResponse;
export declare function MatchRecipeResponseToJSONTyped(value?: MatchRecipeResponse | null, ignoreDiscriminator?: boolean): any;
