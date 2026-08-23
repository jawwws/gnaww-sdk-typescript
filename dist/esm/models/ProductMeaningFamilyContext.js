/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * @export
 */
export const ProductMeaningFamilyContextCompletionArchetypeEnum = {
    FlatCommercialPrint: 'flat_commercial_print',
    FoldedPaper: 'folded_paper',
    BookDocument: 'book_document',
    ApparelDecoration: 'apparel_decoration',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods'
};
/**
 * @export
 */
export const ProductMeaningFamilyContextProductCategoryEnum = {
    CommercialPrint: 'commercial_print',
    Apparel: 'apparel',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods',
    Unknown: 'unknown'
};
/**
 * @export
 */
export const ProductMeaningFamilyContextProductFamilyEnum = {
    Flyer: 'flyer',
    Leaflet: 'leaflet',
    FoldedLeaflet: 'folded_leaflet',
    Apparel: 'apparel',
    BusinessCard: 'business_card',
    LoyaltyCard: 'loyalty_card',
    Postcard: 'postcard',
    Poster: 'poster',
    Sticker: 'sticker',
    Label: 'label',
    Booklet: 'booklet',
    Book: 'book',
    Document: 'document',
    Card: 'card',
    Certificate: 'certificate',
    RaceBib: 'race_bib',
    Stationery: 'stationery',
    Bookmark: 'bookmark',
    PresentationFolder: 'presentation_folder',
    TShirt: 't_shirt',
    Hoodie: 'hoodie',
    Sweatshirt: 'sweatshirt',
    PoloShirt: 'polo_shirt',
    Jacket: 'jacket',
    Cap: 'cap',
    Beanie: 'beanie',
    Workwear: 'workwear',
    TextileAccessory: 'textile_accessory',
    Cushion: 'cushion',
    CushionCover: 'cushion_cover',
    Bedding: 'bedding',
    Curtain: 'curtain',
    TeaTowel: 'tea_towel',
    Blanket: 'blanket',
    FabricByMetre: 'fabric_by_metre',
    Tablecloth: 'tablecloth',
    Homeware: 'homeware',
    Pen: 'pen',
    Mug: 'mug',
    WaterBottle: 'water_bottle',
    GolfBall: 'golf_ball',
    Umbrella: 'umbrella',
    Bag: 'bag',
    Notebook: 'notebook',
    Lanyard: 'lanyard',
    Keyring: 'keyring',
    PromotionalProduct: 'promotional_product',
    Unknown: 'unknown'
};
/**
 * @export
 */
export const ProductMeaningFamilyContextSupportStateEnum = {
    FullySupported: 'fully_supported',
    SupportedWithClarification: 'supported_with_clarification',
    RecognisedNotCanonicalisable: 'recognised_not_canonicalisable',
    Unsupported: 'unsupported'
};
/**
 * Check if a given object implements the ProductMeaningFamilyContext interface.
 */
export function instanceOfProductMeaningFamilyContext(value) {
    if (!('productCategory' in value) || value['productCategory'] === undefined)
        return false;
    if (!('productFamily' in value) || value['productFamily'] === undefined)
        return false;
    if (!('supportState' in value) || value['supportState'] === undefined)
        return false;
    return true;
}
export function ProductMeaningFamilyContextFromJSON(json) {
    return ProductMeaningFamilyContextFromJSONTyped(json, false);
}
export function ProductMeaningFamilyContextFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'completionArchetype': json['completion_archetype'] == null ? undefined : json['completion_archetype'],
        'productCategory': json['product_category'],
        'productFamily': json['product_family'],
        'supportState': json['support_state'],
    };
}
export function ProductMeaningFamilyContextToJSON(json) {
    return ProductMeaningFamilyContextToJSONTyped(json, false);
}
export function ProductMeaningFamilyContextToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'completion_archetype': value['completionArchetype'],
        'product_category': value['productCategory'],
        'product_family': value['productFamily'],
        'support_state': value['supportState'],
    };
}
