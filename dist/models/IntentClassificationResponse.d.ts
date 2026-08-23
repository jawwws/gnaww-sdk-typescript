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
import type { IssueSet } from './IssueSet';
import type { IntentPlanEvidence } from './IntentPlanEvidence';
import type { SourceInput } from './SourceInput';
/**
 * Deterministic classification of product-led versus outcome-led input.
 * @export
 * @interface IntentClassificationResponse
 */
export interface IntentClassificationResponse {
    /**
     *
     * @type {Array<IntentClassificationResponseCandidateProductFamiliesEnum>}
     * @memberof IntentClassificationResponse
     */
    candidateProductFamilies?: Array<IntentClassificationResponseCandidateProductFamiliesEnum>;
    /**
     *
     * @type {number}
     * @memberof IntentClassificationResponse
     */
    confidence: number;
    /**
     *
     * @type {Array<IntentClassificationResponseDetectedProductCategoriesEnum>}
     * @memberof IntentClassificationResponse
     */
    detectedProductCategories?: Array<IntentClassificationResponseDetectedProductCategoriesEnum>;
    /**
     *
     * @type {Array<IntentClassificationResponseDetectedProductFamiliesEnum>}
     * @memberof IntentClassificationResponse
     */
    detectedProductFamilies?: Array<IntentClassificationResponseDetectedProductFamiliesEnum>;
    /**
     *
     * @type {IntentClassificationResponseDeterministicEnum}
     * @memberof IntentClassificationResponse
     */
    deterministic?: IntentClassificationResponseDeterministicEnum;
    /**
     *
     * @type {Array<IntentPlanEvidence>}
     * @memberof IntentClassificationResponse
     */
    evidence?: Array<IntentPlanEvidence>;
    /**
     *
     * @type {IntentClassificationResponseInputKindEnum}
     * @memberof IntentClassificationResponse
     */
    inputKind: IntentClassificationResponseInputKindEnum;
    /**
     *
     * @type {IssueSet}
     * @memberof IntentClassificationResponse
     */
    issues?: IssueSet;
    /**
     *
     * @type {boolean}
     * @memberof IntentClassificationResponse
     */
    requiresIntentPlanner: boolean;
    /**
     *
     * @type {IntentClassificationResponseSchemaNameEnum}
     * @memberof IntentClassificationResponse
     */
    schemaName?: IntentClassificationResponseSchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof IntentClassificationResponse
     */
    schemaVersion?: string;
    /**
     *
     * @type {SourceInput}
     * @memberof IntentClassificationResponse
     */
    source: SourceInput;
    /**
     *
     * @type {IntentClassificationResponseStatusEnum}
     * @memberof IntentClassificationResponse
     */
    status: IntentClassificationResponseStatusEnum;
}
/**
 * @export
 */
export declare const IntentClassificationResponseCandidateProductFamiliesEnum: {
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
export type IntentClassificationResponseCandidateProductFamiliesEnum = typeof IntentClassificationResponseCandidateProductFamiliesEnum[keyof typeof IntentClassificationResponseCandidateProductFamiliesEnum];
/**
 * @export
 */
export declare const IntentClassificationResponseDetectedProductCategoriesEnum: {
    readonly CommercialPrint: "commercial_print";
    readonly Apparel: "apparel";
    readonly FabricHomewares: "fabric_homewares";
    readonly PromotionalGoods: "promotional_goods";
    readonly Unknown: "unknown";
};
export type IntentClassificationResponseDetectedProductCategoriesEnum = typeof IntentClassificationResponseDetectedProductCategoriesEnum[keyof typeof IntentClassificationResponseDetectedProductCategoriesEnum];
/**
 * @export
 */
export declare const IntentClassificationResponseDetectedProductFamiliesEnum: {
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
export type IntentClassificationResponseDetectedProductFamiliesEnum = typeof IntentClassificationResponseDetectedProductFamiliesEnum[keyof typeof IntentClassificationResponseDetectedProductFamiliesEnum];
/**
 * @export
 */
export declare const IntentClassificationResponseDeterministicEnum: {
    readonly True: true;
};
export type IntentClassificationResponseDeterministicEnum = typeof IntentClassificationResponseDeterministicEnum[keyof typeof IntentClassificationResponseDeterministicEnum];
/**
 * @export
 */
export declare const IntentClassificationResponseInputKindEnum: {
    readonly ProductLed: "product_led";
    readonly OutcomeLed: "outcome_led";
    readonly Mixed: "mixed";
    readonly NeedsReview: "needs_review";
};
export type IntentClassificationResponseInputKindEnum = typeof IntentClassificationResponseInputKindEnum[keyof typeof IntentClassificationResponseInputKindEnum];
/**
 * @export
 */
export declare const IntentClassificationResponseSchemaNameEnum: {
    readonly JawwwsIntentClassificationResponse: "jawwws.intent_classification_response";
};
export type IntentClassificationResponseSchemaNameEnum = typeof IntentClassificationResponseSchemaNameEnum[keyof typeof IntentClassificationResponseSchemaNameEnum];
/**
 * @export
 */
export declare const IntentClassificationResponseStatusEnum: {
    readonly Classified: "classified";
    readonly NeedsReview: "needs_review";
    readonly Failed: "failed";
};
export type IntentClassificationResponseStatusEnum = typeof IntentClassificationResponseStatusEnum[keyof typeof IntentClassificationResponseStatusEnum];
/**
 * Check if a given object implements the IntentClassificationResponse interface.
 */
export declare function instanceOfIntentClassificationResponse(value: object): value is IntentClassificationResponse;
export declare function IntentClassificationResponseFromJSON(json: any): IntentClassificationResponse;
export declare function IntentClassificationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntentClassificationResponse;
export declare function IntentClassificationResponseToJSON(json: any): IntentClassificationResponse;
export declare function IntentClassificationResponseToJSONTyped(value?: IntentClassificationResponse | null, ignoreDiscriminator?: boolean): any;
