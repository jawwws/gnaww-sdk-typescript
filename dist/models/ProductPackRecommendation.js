"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPackRecommendationSourceEnum = exports.ProductPackRecommendationProductFamilyEnum = exports.ProductPackRecommendationProductCategoryEnum = exports.ProductPackRecommendationPriorityEnum = exports.ProductPackRecommendationEvidenceStatusEnum = void 0;
exports.instanceOfProductPackRecommendation = instanceOfProductPackRecommendation;
exports.ProductPackRecommendationFromJSON = ProductPackRecommendationFromJSON;
exports.ProductPackRecommendationFromJSONTyped = ProductPackRecommendationFromJSONTyped;
exports.ProductPackRecommendationToJSON = ProductPackRecommendationToJSON;
exports.ProductPackRecommendationToJSONTyped = ProductPackRecommendationToJSONTyped;
const BenchmarkQuantityGuidance_1 = require("./BenchmarkQuantityGuidance");
/**
 * @export
 */
exports.ProductPackRecommendationEvidenceStatusEnum = {
    CuratedBaseline: 'curated_baseline',
    ObservedIntent: 'observed_intent',
    ConfirmedOutcome: 'confirmed_outcome',
    Empirical: 'empirical',
    GeneralModelKnowledge: 'general_model_knowledge'
};
/**
 * @export
 */
exports.ProductPackRecommendationPriorityEnum = {
    Core: 'core',
    Optional: 'optional',
    Avoid: 'avoid'
};
/**
 * @export
 */
exports.ProductPackRecommendationProductCategoryEnum = {
    CommercialPrint: 'commercial_print',
    Apparel: 'apparel',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.ProductPackRecommendationProductFamilyEnum = {
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
exports.ProductPackRecommendationSourceEnum = {
    Benchmark: 'benchmark',
    GeneralModelKnowledge: 'general_model_knowledge'
};
/**
 * Check if a given object implements the ProductPackRecommendation interface.
 */
function instanceOfProductPackRecommendation(value) {
    if (!('evidenceStatus' in value) || value['evidenceStatus'] === undefined)
        return false;
    if (!('priority' in value) || value['priority'] === undefined)
        return false;
    if (!('productCategory' in value) || value['productCategory'] === undefined)
        return false;
    if (!('productFamily' in value) || value['productFamily'] === undefined)
        return false;
    if (!('purpose' in value) || value['purpose'] === undefined)
        return false;
    if (!('rationale' in value) || value['rationale'] === undefined)
        return false;
    if (!('recommendationId' in value) || value['recommendationId'] === undefined)
        return false;
    if (!('requiresConfirmation' in value) || value['requiresConfirmation'] === undefined)
        return false;
    if (!('source' in value) || value['source'] === undefined)
        return false;
    if (!('title' in value) || value['title'] === undefined)
        return false;
    return true;
}
function ProductPackRecommendationFromJSON(json) {
    return ProductPackRecommendationFromJSONTyped(json, false);
}
function ProductPackRecommendationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'benchmarkId': json['benchmark_id'] == null ? undefined : json['benchmark_id'],
        'benchmarkVersion': json['benchmark_version'] == null ? undefined : json['benchmark_version'],
        'clarificationKeys': json['clarification_keys'] == null ? undefined : json['clarification_keys'],
        'evidenceStatus': json['evidence_status'],
        'priority': json['priority'],
        'productCategory': json['product_category'],
        'productFamily': json['product_family'],
        'purpose': json['purpose'],
        'quantityGuidance': json['quantity_guidance'] == null ? undefined : (0, BenchmarkQuantityGuidance_1.BenchmarkQuantityGuidanceFromJSON)(json['quantity_guidance']),
        'rationale': json['rationale'],
        'recommendationId': json['recommendation_id'],
        'requiresConfirmation': json['requires_confirmation'],
        'source': json['source'],
        'title': json['title'],
    };
}
function ProductPackRecommendationToJSON(json) {
    return ProductPackRecommendationToJSONTyped(json, false);
}
function ProductPackRecommendationToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'benchmark_id': value['benchmarkId'],
        'benchmark_version': value['benchmarkVersion'],
        'clarification_keys': value['clarificationKeys'],
        'evidence_status': value['evidenceStatus'],
        'priority': value['priority'],
        'product_category': value['productCategory'],
        'product_family': value['productFamily'],
        'purpose': value['purpose'],
        'quantity_guidance': (0, BenchmarkQuantityGuidance_1.BenchmarkQuantityGuidanceToJSON)(value['quantityGuidance']),
        'rationale': value['rationale'],
        'recommendation_id': value['recommendationId'],
        'requires_confirmation': value['requiresConfirmation'],
        'source': value['source'],
        'title': value['title'],
    };
}
