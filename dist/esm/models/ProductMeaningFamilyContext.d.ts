/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * One Gnaww-declared family exposed to semantic interpretation.
 * @export
 * @interface ProductMeaningFamilyContext
 */
export interface ProductMeaningFamilyContext {
    /**
     *
     * @type {ProductMeaningFamilyContextCompletionArchetypeEnum}
     * @memberof ProductMeaningFamilyContext
     */
    completionArchetype?: ProductMeaningFamilyContextCompletionArchetypeEnum | null;
    /**
     *
     * @type {ProductMeaningFamilyContextProductCategoryEnum}
     * @memberof ProductMeaningFamilyContext
     */
    productCategory: ProductMeaningFamilyContextProductCategoryEnum;
    /**
     *
     * @type {ProductMeaningFamilyContextProductFamilyEnum}
     * @memberof ProductMeaningFamilyContext
     */
    productFamily: ProductMeaningFamilyContextProductFamilyEnum;
    /**
     *
     * @type {ProductMeaningFamilyContextSupportStateEnum}
     * @memberof ProductMeaningFamilyContext
     */
    supportState: ProductMeaningFamilyContextSupportStateEnum;
}
/**
 * @export
 */
export declare const ProductMeaningFamilyContextCompletionArchetypeEnum: {
    readonly FlatCommercialPrint: "flat_commercial_print";
    readonly FoldedPaper: "folded_paper";
    readonly BookDocument: "book_document";
    readonly ApparelDecoration: "apparel_decoration";
    readonly FabricHomewares: "fabric_homewares";
    readonly PromotionalGoods: "promotional_goods";
};
export type ProductMeaningFamilyContextCompletionArchetypeEnum = typeof ProductMeaningFamilyContextCompletionArchetypeEnum[keyof typeof ProductMeaningFamilyContextCompletionArchetypeEnum];
/**
 * @export
 */
export declare const ProductMeaningFamilyContextProductCategoryEnum: {
    readonly CommercialPrint: "commercial_print";
    readonly Apparel: "apparel";
    readonly FabricHomewares: "fabric_homewares";
    readonly PromotionalGoods: "promotional_goods";
    readonly Unknown: "unknown";
};
export type ProductMeaningFamilyContextProductCategoryEnum = typeof ProductMeaningFamilyContextProductCategoryEnum[keyof typeof ProductMeaningFamilyContextProductCategoryEnum];
/**
 * @export
 */
export declare const ProductMeaningFamilyContextProductFamilyEnum: {
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
export type ProductMeaningFamilyContextProductFamilyEnum = typeof ProductMeaningFamilyContextProductFamilyEnum[keyof typeof ProductMeaningFamilyContextProductFamilyEnum];
/**
 * @export
 */
export declare const ProductMeaningFamilyContextSupportStateEnum: {
    readonly FullySupported: "fully_supported";
    readonly SupportedWithClarification: "supported_with_clarification";
    readonly RecognisedNotCanonicalisable: "recognised_not_canonicalisable";
    readonly Unsupported: "unsupported";
};
export type ProductMeaningFamilyContextSupportStateEnum = typeof ProductMeaningFamilyContextSupportStateEnum[keyof typeof ProductMeaningFamilyContextSupportStateEnum];
/**
 * Check if a given object implements the ProductMeaningFamilyContext interface.
 */
export declare function instanceOfProductMeaningFamilyContext(value: object): value is ProductMeaningFamilyContext;
export declare function ProductMeaningFamilyContextFromJSON(json: any): ProductMeaningFamilyContext;
export declare function ProductMeaningFamilyContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductMeaningFamilyContext;
export declare function ProductMeaningFamilyContextToJSON(json: any): ProductMeaningFamilyContext;
export declare function ProductMeaningFamilyContextToJSONTyped(value?: ProductMeaningFamilyContext | null, ignoreDiscriminator?: boolean): any;
