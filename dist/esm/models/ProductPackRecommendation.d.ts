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
import type { BenchmarkQuantityGuidance } from './BenchmarkQuantityGuidance';
/**
 * One review-only product recommendation.
 * @export
 * @interface ProductPackRecommendation
 */
export interface ProductPackRecommendation {
    /**
     *
     * @type {string}
     * @memberof ProductPackRecommendation
     */
    benchmarkId?: string | null;
    /**
     *
     * @type {string}
     * @memberof ProductPackRecommendation
     */
    benchmarkVersion?: string | null;
    /**
     *
     * @type {Array<string>}
     * @memberof ProductPackRecommendation
     */
    clarificationKeys?: Array<string>;
    /**
     *
     * @type {ProductPackRecommendationEvidenceStatusEnum}
     * @memberof ProductPackRecommendation
     */
    evidenceStatus: ProductPackRecommendationEvidenceStatusEnum;
    /**
     *
     * @type {ProductPackRecommendationPriorityEnum}
     * @memberof ProductPackRecommendation
     */
    priority: ProductPackRecommendationPriorityEnum;
    /**
     *
     * @type {ProductPackRecommendationProductCategoryEnum}
     * @memberof ProductPackRecommendation
     */
    productCategory: ProductPackRecommendationProductCategoryEnum;
    /**
     *
     * @type {ProductPackRecommendationProductFamilyEnum}
     * @memberof ProductPackRecommendation
     */
    productFamily: ProductPackRecommendationProductFamilyEnum;
    /**
     *
     * @type {string}
     * @memberof ProductPackRecommendation
     */
    purpose: string;
    /**
     *
     * @type {BenchmarkQuantityGuidance}
     * @memberof ProductPackRecommendation
     */
    quantityGuidance?: BenchmarkQuantityGuidance | null;
    /**
     *
     * @type {string}
     * @memberof ProductPackRecommendation
     */
    rationale: string;
    /**
     *
     * @type {string}
     * @memberof ProductPackRecommendation
     */
    recommendationId: string;
    /**
     *
     * @type {boolean}
     * @memberof ProductPackRecommendation
     */
    requiresConfirmation: boolean;
    /**
     *
     * @type {ProductPackRecommendationSourceEnum}
     * @memberof ProductPackRecommendation
     */
    source: ProductPackRecommendationSourceEnum;
    /**
     *
     * @type {string}
     * @memberof ProductPackRecommendation
     */
    title: string;
}
/**
 * @export
 */
export declare const ProductPackRecommendationEvidenceStatusEnum: {
    readonly CuratedBaseline: "curated_baseline";
    readonly ObservedIntent: "observed_intent";
    readonly ConfirmedOutcome: "confirmed_outcome";
    readonly Empirical: "empirical";
    readonly GeneralModelKnowledge: "general_model_knowledge";
};
export type ProductPackRecommendationEvidenceStatusEnum = typeof ProductPackRecommendationEvidenceStatusEnum[keyof typeof ProductPackRecommendationEvidenceStatusEnum];
/**
 * @export
 */
export declare const ProductPackRecommendationPriorityEnum: {
    readonly Core: "core";
    readonly Optional: "optional";
    readonly Avoid: "avoid";
};
export type ProductPackRecommendationPriorityEnum = typeof ProductPackRecommendationPriorityEnum[keyof typeof ProductPackRecommendationPriorityEnum];
/**
 * @export
 */
export declare const ProductPackRecommendationProductCategoryEnum: {
    readonly CommercialPrint: "commercial_print";
    readonly Apparel: "apparel";
    readonly FabricHomewares: "fabric_homewares";
    readonly PromotionalGoods: "promotional_goods";
    readonly Unknown: "unknown";
};
export type ProductPackRecommendationProductCategoryEnum = typeof ProductPackRecommendationProductCategoryEnum[keyof typeof ProductPackRecommendationProductCategoryEnum];
/**
 * @export
 */
export declare const ProductPackRecommendationProductFamilyEnum: {
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
export type ProductPackRecommendationProductFamilyEnum = typeof ProductPackRecommendationProductFamilyEnum[keyof typeof ProductPackRecommendationProductFamilyEnum];
/**
 * @export
 */
export declare const ProductPackRecommendationSourceEnum: {
    readonly Benchmark: "benchmark";
    readonly GeneralModelKnowledge: "general_model_knowledge";
};
export type ProductPackRecommendationSourceEnum = typeof ProductPackRecommendationSourceEnum[keyof typeof ProductPackRecommendationSourceEnum];
/**
 * Check if a given object implements the ProductPackRecommendation interface.
 */
export declare function instanceOfProductPackRecommendation(value: object): value is ProductPackRecommendation;
export declare function ProductPackRecommendationFromJSON(json: any): ProductPackRecommendation;
export declare function ProductPackRecommendationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPackRecommendation;
export declare function ProductPackRecommendationToJSON(json: any): ProductPackRecommendation;
export declare function ProductPackRecommendationToJSONTyped(value?: ProductPackRecommendation | null, ignoreDiscriminator?: boolean): any;
