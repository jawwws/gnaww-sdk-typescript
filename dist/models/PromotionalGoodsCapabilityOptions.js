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
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionalGoodsCapabilityOptionsProductTypesEnum = exports.PromotionalGoodsCapabilityOptionsPackagingTypesEnum = void 0;
exports.instanceOfPromotionalGoodsCapabilityOptions = instanceOfPromotionalGoodsCapabilityOptions;
exports.PromotionalGoodsCapabilityOptionsFromJSON = PromotionalGoodsCapabilityOptionsFromJSON;
exports.PromotionalGoodsCapabilityOptionsFromJSONTyped = PromotionalGoodsCapabilityOptionsFromJSONTyped;
exports.PromotionalGoodsCapabilityOptionsToJSON = PromotionalGoodsCapabilityOptionsToJSON;
exports.PromotionalGoodsCapabilityOptionsToJSONTyped = PromotionalGoodsCapabilityOptionsToJSONTyped;
const DecorationAreaCapability_1 = require("./DecorationAreaCapability");
const PersonalisationCapability_1 = require("./PersonalisationCapability");
const DimensionCapability_1 = require("./DimensionCapability");
const MaterialCapability_1 = require("./MaterialCapability");
/**
 * @export
 */
exports.PromotionalGoodsCapabilityOptionsPackagingTypesEnum = {
    Bulk: 'bulk',
    IndividualBag: 'individual_bag',
    GiftBox: 'gift_box',
    RetailBox: 'retail_box',
    Custom: 'custom',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.PromotionalGoodsCapabilityOptionsProductTypesEnum = {
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
 * Check if a given object implements the PromotionalGoodsCapabilityOptions interface.
 */
function instanceOfPromotionalGoodsCapabilityOptions(value) {
    return true;
}
function PromotionalGoodsCapabilityOptionsFromJSON(json) {
    return PromotionalGoodsCapabilityOptionsFromJSONTyped(json, false);
}
function PromotionalGoodsCapabilityOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'capacitiesMl': json['capacities_ml'] == null ? undefined : json['capacities_ml'],
        'complianceClaims': json['compliance_claims'] == null ? undefined : json['compliance_claims'],
        'decorationAreas': json['decoration_areas'] == null ? undefined : (json['decoration_areas'].map(DecorationAreaCapability_1.DecorationAreaCapabilityFromJSON)),
        'dimensions': json['dimensions'] == null ? undefined : (json['dimensions'].map(DimensionCapability_1.DimensionCapabilityFromJSON)),
        'materials': json['materials'] == null ? undefined : (json['materials'].map(MaterialCapability_1.MaterialCapabilityFromJSON)),
        'packagingTypes': json['packaging_types'] == null ? undefined : json['packaging_types'],
        'personalisation': json['personalisation'] == null ? undefined : (0, PersonalisationCapability_1.PersonalisationCapabilityFromJSON)(json['personalisation']),
        'productColours': json['product_colours'] == null ? undefined : json['product_colours'],
        'productTypes': json['product_types'] == null ? undefined : json['product_types'],
    };
}
function PromotionalGoodsCapabilityOptionsToJSON(json) {
    return PromotionalGoodsCapabilityOptionsToJSONTyped(json, false);
}
function PromotionalGoodsCapabilityOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'capacities_ml': value['capacitiesMl'],
        'compliance_claims': value['complianceClaims'],
        'decoration_areas': value['decorationAreas'] == null ? undefined : (value['decorationAreas'].map(DecorationAreaCapability_1.DecorationAreaCapabilityToJSON)),
        'dimensions': value['dimensions'] == null ? undefined : (value['dimensions'].map(DimensionCapability_1.DimensionCapabilityToJSON)),
        'materials': value['materials'] == null ? undefined : (value['materials'].map(MaterialCapability_1.MaterialCapabilityToJSON)),
        'packaging_types': value['packagingTypes'],
        'personalisation': (0, PersonalisationCapability_1.PersonalisationCapabilityToJSON)(value['personalisation']),
        'product_colours': value['productColours'],
        'product_types': value['productTypes'],
    };
}
