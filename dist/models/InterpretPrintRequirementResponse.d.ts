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
import type { ControlledInterpretationState } from './ControlledInterpretationState';
import type { PublicSpecMatchReadiness } from './PublicSpecMatchReadiness';
import type { Gjs } from './Gjs';
import type { PublicRecipeState } from './PublicRecipeState';
import type { GroundedProductMeaning } from './GroundedProductMeaning';
import type { IssueSet } from './IssueSet';
import type { PublicUseConditionReview } from './PublicUseConditionReview';
import type { IntentClassificationResponse } from './IntentClassificationResponse';
import type { ProductPackResponse } from './ProductPackResponse';
import type { SourceInput } from './SourceInput';
/**
 * Public ordinary-language orchestration result.
 * @export
 * @interface InterpretPrintRequirementResponse
 */
export interface InterpretPrintRequirementResponse {
    /**
     *
     * @type {IntentClassificationResponse}
     * @memberof InterpretPrintRequirementResponse
     */
    classification: IntentClassificationResponse;
    /**
     *
     * @type {ControlledInterpretationState}
     * @memberof InterpretPrintRequirementResponse
     */
    controlledInterpretation: ControlledInterpretationState;
    /**
     *
     * @type {Gjs}
     * @memberof InterpretPrintRequirementResponse
     */
    gjs?: Gjs | null;
    /**
     *
     * @type {IssueSet}
     * @memberof InterpretPrintRequirementResponse
     */
    issues?: IssueSet;
    /**
     *
     * @type {Array<InterpretPrintRequirementResponseKnownProductFamiliesEnum>}
     * @memberof InterpretPrintRequirementResponse
     */
    knownProductFamilies?: Array<InterpretPrintRequirementResponseKnownProductFamiliesEnum>;
    /**
     *
     * @type {Array<string>}
     * @memberof InterpretPrintRequirementResponse
     */
    nextActions?: Array<string>;
    /**
     *
     * @type {InterpretPrintRequirementResponsePersistencePerformedEnum}
     * @memberof InterpretPrintRequirementResponse
     */
    persistencePerformed?: InterpretPrintRequirementResponsePersistencePerformedEnum;
    /**
     *
     * @type {InterpretPrintRequirementResponseProducerSelectionPerformedEnum}
     * @memberof InterpretPrintRequirementResponse
     */
    producerSelectionPerformed?: InterpretPrintRequirementResponseProducerSelectionPerformedEnum;
    /**
     *
     * @type {Array<GroundedProductMeaning>}
     * @memberof InterpretPrintRequirementResponse
     */
    productMeaningReview?: Array<GroundedProductMeaning>;
    /**
     *
     * @type {InterpretPrintRequirementResponseReasonEnum}
     * @memberof InterpretPrintRequirementResponse
     */
    reason: InterpretPrintRequirementResponseReasonEnum;
    /**
     *
     * @type {PublicRecipeState}
     * @memberof InterpretPrintRequirementResponse
     */
    recipe: PublicRecipeState;
    /**
     *
     * @type {ProductPackResponse}
     * @memberof InterpretPrintRequirementResponse
     */
    recommendationReview?: ProductPackResponse | null;
    /**
     *
     * @type {InterpretPrintRequirementResponseRequestedGjsVersionEnum}
     * @memberof InterpretPrintRequirementResponse
     */
    requestedGjsVersion: InterpretPrintRequirementResponseRequestedGjsVersionEnum;
    /**
     *
     * @type {InterpretPrintRequirementResponseRouteEnum}
     * @memberof InterpretPrintRequirementResponse
     */
    route: InterpretPrintRequirementResponseRouteEnum;
    /**
     *
     * @type {InterpretPrintRequirementResponseSchemaNameEnum}
     * @memberof InterpretPrintRequirementResponse
     */
    schemaName?: InterpretPrintRequirementResponseSchemaNameEnum;
    /**
     *
     * @type {InterpretPrintRequirementResponseSchemaVersionEnum}
     * @memberof InterpretPrintRequirementResponse
     */
    schemaVersion?: InterpretPrintRequirementResponseSchemaVersionEnum;
    /**
     *
     * @type {SourceInput}
     * @memberof InterpretPrintRequirementResponse
     */
    source: SourceInput;
    /**
     *
     * @type {PublicSpecMatchReadiness}
     * @memberof InterpretPrintRequirementResponse
     */
    specmatch: PublicSpecMatchReadiness;
    /**
     *
     * @type {InterpretPrintRequirementResponseSpecmatchPerformedEnum}
     * @memberof InterpretPrintRequirementResponse
     */
    specmatchPerformed?: InterpretPrintRequirementResponseSpecmatchPerformedEnum;
    /**
     *
     * @type {InterpretPrintRequirementResponseStatusEnum}
     * @memberof InterpretPrintRequirementResponse
     */
    status: InterpretPrintRequirementResponseStatusEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof InterpretPrintRequirementResponse
     */
    unresolvedFields?: Array<string>;
    /**
     *
     * @type {Array<PublicUseConditionReview>}
     * @memberof InterpretPrintRequirementResponse
     */
    useConditionReview?: Array<PublicUseConditionReview>;
}
/**
 * @export
 */
export declare const InterpretPrintRequirementResponseKnownProductFamiliesEnum: {
    readonly Flyer: "flyer";
    readonly Leaflet: "leaflet";
    readonly FoldedLeaflet: "folded_leaflet";
    readonly Apparel: "apparel";
    readonly BusinessCard: "business_card";
    readonly LoyaltyCard: "loyalty_card";
    readonly Postcard: "postcard";
    readonly Poster: "poster";
    readonly Sticker: "sticker";
    readonly Label: "label";
    readonly Booklet: "booklet";
    readonly Book: "book";
    readonly Document: "document";
    readonly Card: "card";
    readonly Certificate: "certificate";
    readonly RaceBib: "race_bib";
    readonly Stationery: "stationery";
    readonly Bookmark: "bookmark";
    readonly PresentationFolder: "presentation_folder";
    readonly TShirt: "t_shirt";
    readonly Hoodie: "hoodie";
    readonly Sweatshirt: "sweatshirt";
    readonly PoloShirt: "polo_shirt";
    readonly Jacket: "jacket";
    readonly Cap: "cap";
    readonly Beanie: "beanie";
    readonly Workwear: "workwear";
    readonly TextileAccessory: "textile_accessory";
    readonly Cushion: "cushion";
    readonly CushionCover: "cushion_cover";
    readonly Bedding: "bedding";
    readonly Curtain: "curtain";
    readonly TeaTowel: "tea_towel";
    readonly Blanket: "blanket";
    readonly FabricByMetre: "fabric_by_metre";
    readonly Tablecloth: "tablecloth";
    readonly Homeware: "homeware";
    readonly Pen: "pen";
    readonly Mug: "mug";
    readonly WaterBottle: "water_bottle";
    readonly GolfBall: "golf_ball";
    readonly Umbrella: "umbrella";
    readonly Bag: "bag";
    readonly Notebook: "notebook";
    readonly Lanyard: "lanyard";
    readonly Keyring: "keyring";
    readonly PromotionalProduct: "promotional_product";
    readonly Unknown: "unknown";
};
export type InterpretPrintRequirementResponseKnownProductFamiliesEnum = typeof InterpretPrintRequirementResponseKnownProductFamiliesEnum[keyof typeof InterpretPrintRequirementResponseKnownProductFamiliesEnum];
/**
 * @export
 */
export declare const InterpretPrintRequirementResponsePersistencePerformedEnum: {
    readonly False: false;
};
export type InterpretPrintRequirementResponsePersistencePerformedEnum = typeof InterpretPrintRequirementResponsePersistencePerformedEnum[keyof typeof InterpretPrintRequirementResponsePersistencePerformedEnum];
/**
 * @export
 */
export declare const InterpretPrintRequirementResponseProducerSelectionPerformedEnum: {
    readonly False: false;
};
export type InterpretPrintRequirementResponseProducerSelectionPerformedEnum = typeof InterpretPrintRequirementResponseProducerSelectionPerformedEnum[keyof typeof InterpretPrintRequirementResponseProducerSelectionPerformedEnum];
/**
 * @export
 */
export declare const InterpretPrintRequirementResponseReasonEnum: {
    readonly DeterministicTransformSufficient: "deterministic_transform_sufficient";
    readonly KnownFamilyNotCanonicalised: "known_family_not_canonicalised";
    readonly MultipleProductFamiliesNeedOrchestration: "multiple_product_families_need_orchestration";
    readonly DeterministicTransformFailed: "deterministic_transform_failed";
    readonly IntentPlannerRequired: "intent_planner_required";
    readonly ClassificationNeedsReview: "classification_needs_review";
    readonly ClassificationFailed: "classification_failed";
};
export type InterpretPrintRequirementResponseReasonEnum = typeof InterpretPrintRequirementResponseReasonEnum[keyof typeof InterpretPrintRequirementResponseReasonEnum];
/**
 * @export
 */
export declare const InterpretPrintRequirementResponseRequestedGjsVersionEnum: {
    readonly _03: "0.3";
    readonly _04: "0.4";
};
export type InterpretPrintRequirementResponseRequestedGjsVersionEnum = typeof InterpretPrintRequirementResponseRequestedGjsVersionEnum[keyof typeof InterpretPrintRequirementResponseRequestedGjsVersionEnum];
/**
 * @export
 */
export declare const InterpretPrintRequirementResponseRouteEnum: {
    readonly DeterministicReady: "deterministic_ready";
    readonly CanonicalisationGap: "canonicalisation_gap";
    readonly RecommendationReviewRequired: "recommendation_review_required";
    readonly NeedsReview: "needs_review";
    readonly Failed: "failed";
};
export type InterpretPrintRequirementResponseRouteEnum = typeof InterpretPrintRequirementResponseRouteEnum[keyof typeof InterpretPrintRequirementResponseRouteEnum];
/**
 * @export
 */
export declare const InterpretPrintRequirementResponseSchemaNameEnum: {
    readonly GnawwInterpretationResult: "gnaww.interpretation_result";
};
export type InterpretPrintRequirementResponseSchemaNameEnum = typeof InterpretPrintRequirementResponseSchemaNameEnum[keyof typeof InterpretPrintRequirementResponseSchemaNameEnum];
/**
 * @export
 */
export declare const InterpretPrintRequirementResponseSchemaVersionEnum: {
    readonly _01: "0.1";
};
export type InterpretPrintRequirementResponseSchemaVersionEnum = typeof InterpretPrintRequirementResponseSchemaVersionEnum[keyof typeof InterpretPrintRequirementResponseSchemaVersionEnum];
/**
 * @export
 */
export declare const InterpretPrintRequirementResponseSpecmatchPerformedEnum: {
    readonly False: false;
};
export type InterpretPrintRequirementResponseSpecmatchPerformedEnum = typeof InterpretPrintRequirementResponseSpecmatchPerformedEnum[keyof typeof InterpretPrintRequirementResponseSpecmatchPerformedEnum];
/**
 * @export
 */
export declare const InterpretPrintRequirementResponseStatusEnum: {
    readonly CanonicalReady: "canonical_ready";
    readonly ReviewRequired: "review_required";
    readonly NeedsReview: "needs_review";
    readonly Failed: "failed";
};
export type InterpretPrintRequirementResponseStatusEnum = typeof InterpretPrintRequirementResponseStatusEnum[keyof typeof InterpretPrintRequirementResponseStatusEnum];
/**
 * Check if a given object implements the InterpretPrintRequirementResponse interface.
 */
export declare function instanceOfInterpretPrintRequirementResponse(value: object): value is InterpretPrintRequirementResponse;
export declare function InterpretPrintRequirementResponseFromJSON(json: any): InterpretPrintRequirementResponse;
export declare function InterpretPrintRequirementResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterpretPrintRequirementResponse;
export declare function InterpretPrintRequirementResponseToJSON(json: any): InterpretPrintRequirementResponse;
export declare function InterpretPrintRequirementResponseToJSONTyped(value?: InterpretPrintRequirementResponse | null, ignoreDiscriminator?: boolean): any;
