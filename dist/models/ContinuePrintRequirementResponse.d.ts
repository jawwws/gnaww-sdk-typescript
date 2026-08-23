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
import type { IssueSet } from './IssueSet';
import type { SourceInput } from './SourceInput';
import type { PrintJobSpecificationV04 } from './PrintJobSpecificationV04';
import type { PublicClarificationQuestion } from './PublicClarificationQuestion';
import type { PublicFulfilmentState } from './PublicFulfilmentState';
/**
 * Guided completion state without persistence or matching execution.
 * @export
 * @interface ContinuePrintRequirementResponse
 */
export interface ContinuePrintRequirementResponse {
    /**
     *
     * @type {PublicFulfilmentState}
     * @memberof ContinuePrintRequirementResponse
     */
    fulfilment?: PublicFulfilmentState;
    /**
     *
     * @type {PrintJobSpecificationV04}
     * @memberof ContinuePrintRequirementResponse
     */
    gjs?: PrintJobSpecificationV04 | null;
    /**
     *
     * @type {IssueSet}
     * @memberof ContinuePrintRequirementResponse
     */
    issues?: IssueSet;
    /**
     *
     * @type {Array<string>}
     * @memberof ContinuePrintRequirementResponse
     */
    nextActions?: Array<string>;
    /**
     *
     * @type {ContinuePrintRequirementResponsePersistencePerformedEnum}
     * @memberof ContinuePrintRequirementResponse
     */
    persistencePerformed?: ContinuePrintRequirementResponsePersistencePerformedEnum;
    /**
     *
     * @type {ContinuePrintRequirementResponseProducerSelectionPerformedEnum}
     * @memberof ContinuePrintRequirementResponse
     */
    producerSelectionPerformed?: ContinuePrintRequirementResponseProducerSelectionPerformedEnum;
    /**
     *
     * @type {ContinuePrintRequirementResponseProductFamilyEnum}
     * @memberof ContinuePrintRequirementResponse
     */
    productFamily?: ContinuePrintRequirementResponseProductFamilyEnum | null;
    /**
     *
     * @type {Array<PublicClarificationQuestion>}
     * @memberof ContinuePrintRequirementResponse
     */
    questions?: Array<PublicClarificationQuestion>;
    /**
     *
     * @type {PublicRecipeState}
     * @memberof ContinuePrintRequirementResponse
     */
    recipe: PublicRecipeState;
    /**
     *
     * @type {Array<string>}
     * @memberof ContinuePrintRequirementResponse
     */
    remainingQuestionKeys?: Array<string>;
    /**
     *
     * @type {ContinuePrintRequirementResponseSchemaNameEnum}
     * @memberof ContinuePrintRequirementResponse
     */
    schemaName?: ContinuePrintRequirementResponseSchemaNameEnum;
    /**
     *
     * @type {ContinuePrintRequirementResponseSchemaVersionEnum}
     * @memberof ContinuePrintRequirementResponse
     */
    schemaVersion?: ContinuePrintRequirementResponseSchemaVersionEnum;
    /**
     *
     * @type {SourceInput}
     * @memberof ContinuePrintRequirementResponse
     */
    source: SourceInput;
    /**
     *
     * @type {PublicSpecMatchReadiness}
     * @memberof ContinuePrintRequirementResponse
     */
    specmatch: PublicSpecMatchReadiness;
    /**
     *
     * @type {ContinuePrintRequirementResponseSpecmatchPerformedEnum}
     * @memberof ContinuePrintRequirementResponse
     */
    specmatchPerformed?: ContinuePrintRequirementResponseSpecmatchPerformedEnum;
    /**
     *
     * @type {ContinuePrintRequirementResponseStatusEnum}
     * @memberof ContinuePrintRequirementResponse
     */
    status: ContinuePrintRequirementResponseStatusEnum;
    /**
     *
     * @type {boolean}
     * @memberof ContinuePrintRequirementResponse
     */
    universeMatchReady?: boolean;
}
/**
 * @export
 */
export declare const ContinuePrintRequirementResponsePersistencePerformedEnum: {
    readonly False: false;
};
export type ContinuePrintRequirementResponsePersistencePerformedEnum = typeof ContinuePrintRequirementResponsePersistencePerformedEnum[keyof typeof ContinuePrintRequirementResponsePersistencePerformedEnum];
/**
 * @export
 */
export declare const ContinuePrintRequirementResponseProducerSelectionPerformedEnum: {
    readonly False: false;
};
export type ContinuePrintRequirementResponseProducerSelectionPerformedEnum = typeof ContinuePrintRequirementResponseProducerSelectionPerformedEnum[keyof typeof ContinuePrintRequirementResponseProducerSelectionPerformedEnum];
/**
 * @export
 */
export declare const ContinuePrintRequirementResponseProductFamilyEnum: {
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
export type ContinuePrintRequirementResponseProductFamilyEnum = typeof ContinuePrintRequirementResponseProductFamilyEnum[keyof typeof ContinuePrintRequirementResponseProductFamilyEnum];
/**
 * @export
 */
export declare const ContinuePrintRequirementResponseSchemaNameEnum: {
    readonly GnawwInterpretationContinuationResult: "gnaww.interpretation_continuation_result";
};
export type ContinuePrintRequirementResponseSchemaNameEnum = typeof ContinuePrintRequirementResponseSchemaNameEnum[keyof typeof ContinuePrintRequirementResponseSchemaNameEnum];
/**
 * @export
 */
export declare const ContinuePrintRequirementResponseSchemaVersionEnum: {
    readonly _01: "0.1";
};
export type ContinuePrintRequirementResponseSchemaVersionEnum = typeof ContinuePrintRequirementResponseSchemaVersionEnum[keyof typeof ContinuePrintRequirementResponseSchemaVersionEnum];
/**
 * @export
 */
export declare const ContinuePrintRequirementResponseSpecmatchPerformedEnum: {
    readonly False: false;
};
export type ContinuePrintRequirementResponseSpecmatchPerformedEnum = typeof ContinuePrintRequirementResponseSpecmatchPerformedEnum[keyof typeof ContinuePrintRequirementResponseSpecmatchPerformedEnum];
/**
 * @export
 */
export declare const ContinuePrintRequirementResponseStatusEnum: {
    readonly ReviewRequired: "review_required";
    readonly SpecmatchReady: "specmatch_ready";
    readonly Failed: "failed";
};
export type ContinuePrintRequirementResponseStatusEnum = typeof ContinuePrintRequirementResponseStatusEnum[keyof typeof ContinuePrintRequirementResponseStatusEnum];
/**
 * Check if a given object implements the ContinuePrintRequirementResponse interface.
 */
export declare function instanceOfContinuePrintRequirementResponse(value: object): value is ContinuePrintRequirementResponse;
export declare function ContinuePrintRequirementResponseFromJSON(json: any): ContinuePrintRequirementResponse;
export declare function ContinuePrintRequirementResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContinuePrintRequirementResponse;
export declare function ContinuePrintRequirementResponseToJSON(json: any): ContinuePrintRequirementResponse;
export declare function ContinuePrintRequirementResponseToJSONTyped(value?: ContinuePrintRequirementResponse | null, ignoreDiscriminator?: boolean): any;
