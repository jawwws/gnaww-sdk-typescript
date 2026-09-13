/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { Gjs1 } from './Gjs1';
import type { PublicInterpretationQuestion } from './PublicInterpretationQuestion';
import type { PublicSpecMatchReadiness } from './PublicSpecMatchReadiness';
import type { PublicRecipeState } from './PublicRecipeState';
import type { PublicControlledProductionDefault } from './PublicControlledProductionDefault';
import type { PublicInterpretationFulfilmentState } from './PublicInterpretationFulfilmentState';
import type { GroundedProductMeaning } from './GroundedProductMeaning';
import type { IssueSet } from './IssueSet';
import type { PublicJobContextFact } from './PublicJobContextFact';
import type { PublicUseConditionReview } from './PublicUseConditionReview';
import type { PublicUnderstoodRequirement } from './PublicUnderstoodRequirement';
import type { PublicJobStructure } from './PublicJobStructure';
/**
 * One independently producible Job Proposal or canonical Job state.
 * @export
 * @interface PublicInterpretationJob
 */
export interface PublicInterpretationJob {
    /**
     *
     * @type {Array<PublicJobContextFact>}
     * @memberof PublicInterpretationJob
     */
    context?: Array<PublicJobContextFact>;
    /**
     *
     * @type {Array<PublicControlledProductionDefault>}
     * @memberof PublicInterpretationJob
     */
    controlledDefaults?: Array<PublicControlledProductionDefault>;
    /**
     *
     * @type {PublicInterpretationFulfilmentState}
     * @memberof PublicInterpretationJob
     */
    fulfilment?: PublicInterpretationFulfilmentState;
    /**
     *
     * @type {Gjs1}
     * @memberof PublicInterpretationJob
     */
    gjs?: Gjs1 | null;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationJob
     */
    groundedProductSummary?: string | null;
    /**
     *
     * @type {IssueSet}
     * @memberof PublicInterpretationJob
     */
    issues?: IssueSet;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationJob
     */
    jobId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof PublicInterpretationJob
     */
    nextActions?: Array<string>;
    /**
     *
     * @type {PublicInterpretationJobProductFamilyEnum}
     * @memberof PublicInterpretationJob
     */
    productFamily?: PublicInterpretationJobProductFamilyEnum | null;
    /**
     *
     * @type {Array<GroundedProductMeaning>}
     * @memberof PublicInterpretationJob
     */
    productMeaningReview?: Array<GroundedProductMeaning>;
    /**
     *
     * @type {Array<PublicInterpretationQuestion>}
     * @memberof PublicInterpretationJob
     */
    questions?: Array<PublicInterpretationQuestion>;
    /**
     *
     * @type {PublicRecipeState}
     * @memberof PublicInterpretationJob
     */
    recipe?: PublicRecipeState;
    /**
     *
     * @type {PublicSpecMatchReadiness}
     * @memberof PublicInterpretationJob
     */
    specmatch?: PublicSpecMatchReadiness;
    /**
     *
     * @type {PublicInterpretationJobStatusEnum}
     * @memberof PublicInterpretationJob
     */
    status: PublicInterpretationJobStatusEnum;
    /**
     *
     * @type {Array<PublicJobStructure>}
     * @memberof PublicInterpretationJob
     */
    structure?: Array<PublicJobStructure>;
    /**
     *
     * @type {PublicUnderstoodRequirement}
     * @memberof PublicInterpretationJob
     */
    understoodRequirement?: PublicUnderstoodRequirement | null;
    /**
     *
     * @type {boolean}
     * @memberof PublicInterpretationJob
     */
    universeMatchReady?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof PublicInterpretationJob
     */
    unresolvedFields?: Array<string>;
    /**
     *
     * @type {Array<PublicUseConditionReview>}
     * @memberof PublicInterpretationJob
     */
    useConditionReview?: Array<PublicUseConditionReview>;
}
/**
 * @export
 */
export declare const PublicInterpretationJobProductFamilyEnum: {
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
export type PublicInterpretationJobProductFamilyEnum = typeof PublicInterpretationJobProductFamilyEnum[keyof typeof PublicInterpretationJobProductFamilyEnum];
/**
 * @export
 */
export declare const PublicInterpretationJobStatusEnum: {
    readonly CanonicalReady: "canonical_ready";
    readonly ReviewRequired: "review_required";
    readonly NeedsReview: "needs_review";
    readonly Failed: "failed";
};
export type PublicInterpretationJobStatusEnum = typeof PublicInterpretationJobStatusEnum[keyof typeof PublicInterpretationJobStatusEnum];
/**
 * Check if a given object implements the PublicInterpretationJob interface.
 */
export declare function instanceOfPublicInterpretationJob(value: object): value is PublicInterpretationJob;
export declare function PublicInterpretationJobFromJSON(json: any): PublicInterpretationJob;
export declare function PublicInterpretationJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationJob;
export declare function PublicInterpretationJobToJSON(json: any): PublicInterpretationJob;
export declare function PublicInterpretationJobToJSONTyped(value?: PublicInterpretationJob | null, ignoreDiscriminator?: boolean): any;
