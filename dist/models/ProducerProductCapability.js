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
exports.ProducerProductCapabilitySidesEnum = exports.ProducerProductCapabilityProductFamilyEnum = exports.ProducerProductCapabilityProductCategoryEnum = void 0;
exports.instanceOfProducerProductCapability = instanceOfProducerProductCapability;
exports.ProducerProductCapabilityFromJSON = ProducerProductCapabilityFromJSON;
exports.ProducerProductCapabilityFromJSONTyped = ProducerProductCapabilityFromJSONTyped;
exports.ProducerProductCapabilityToJSON = ProducerProductCapabilityToJSON;
exports.ProducerProductCapabilityToJSONTyped = ProducerProductCapabilityToJSONTyped;
const ProducerFinishingCapability_1 = require("./ProducerFinishingCapability");
const ProducerComponentCapability_1 = require("./ProducerComponentCapability");
const DimensionCapability_1 = require("./DimensionCapability");
const TurnaroundCapability_1 = require("./TurnaroundCapability");
const AvailabilityCapability_1 = require("./AvailabilityCapability");
const QuantityRange_1 = require("./QuantityRange");
const ProducerProcessCapability_1 = require("./ProducerProcessCapability");
const ArtworkRequirements_1 = require("./ArtworkRequirements");
const MaterialCapability_1 = require("./MaterialCapability");
const ProducerProductOptionCapability_1 = require("./ProducerProductOptionCapability");
/**
 * @export
 */
exports.ProducerProductCapabilityProductCategoryEnum = {
    CommercialPrint: 'commercial_print',
    Apparel: 'apparel',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.ProducerProductCapabilityProductFamilyEnum = {
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
exports.ProducerProductCapabilitySidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the ProducerProductCapability interface.
 */
function instanceOfProducerProductCapability(value) {
    if (!('artwork' in value) || value['artwork'] === undefined)
        return false;
    if (!('productFamily' in value) || value['productFamily'] === undefined)
        return false;
    if (!('productId' in value) || value['productId'] === undefined)
        return false;
    if (!('productName' in value) || value['productName'] === undefined)
        return false;
    if (!('quantity' in value) || value['quantity'] === undefined)
        return false;
    return true;
}
function ProducerProductCapabilityFromJSON(json) {
    return ProducerProductCapabilityFromJSONTyped(json, false);
}
function ProducerProductCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'artwork': (0, ArtworkRequirements_1.ArtworkRequirementsFromJSON)(json['artwork']),
        'availability': json['availability'] == null ? undefined : (0, AvailabilityCapability_1.AvailabilityCapabilityFromJSON)(json['availability']),
        'components': json['components'] == null ? undefined : (json['components'].map(ProducerComponentCapability_1.ProducerComponentCapabilityFromJSON)),
        'finishings': json['finishings'] == null ? undefined : (json['finishings'].map(ProducerFinishingCapability_1.ProducerFinishingCapabilityFromJSON)),
        'processes': json['processes'] == null ? undefined : (json['processes'].map(ProducerProcessCapability_1.ProducerProcessCapabilityFromJSON)),
        'productCategory': json['product_category'] == null ? undefined : json['product_category'],
        'productFamily': json['product_family'],
        'productId': json['product_id'],
        'productName': json['product_name'],
        'productOptions': json['product_options'] == null ? undefined : (0, ProducerProductOptionCapability_1.ProducerProductOptionCapabilityFromJSON)(json['product_options']),
        'quantity': (0, QuantityRange_1.QuantityRangeFromJSON)(json['quantity']),
        'sides': json['sides'] == null ? undefined : json['sides'],
        'sizes': json['sizes'] == null ? undefined : (json['sizes'].map(DimensionCapability_1.DimensionCapabilityFromJSON)),
        'substrates': json['substrates'] == null ? undefined : (json['substrates'].map(MaterialCapability_1.MaterialCapabilityFromJSON)),
        'turnaround': json['turnaround'] == null ? undefined : (0, TurnaroundCapability_1.TurnaroundCapabilityFromJSON)(json['turnaround']),
    };
}
function ProducerProductCapabilityToJSON(json) {
    return ProducerProductCapabilityToJSONTyped(json, false);
}
function ProducerProductCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'artwork': (0, ArtworkRequirements_1.ArtworkRequirementsToJSON)(value['artwork']),
        'availability': (0, AvailabilityCapability_1.AvailabilityCapabilityToJSON)(value['availability']),
        'components': value['components'] == null ? undefined : (value['components'].map(ProducerComponentCapability_1.ProducerComponentCapabilityToJSON)),
        'finishings': value['finishings'] == null ? undefined : (value['finishings'].map(ProducerFinishingCapability_1.ProducerFinishingCapabilityToJSON)),
        'processes': value['processes'] == null ? undefined : (value['processes'].map(ProducerProcessCapability_1.ProducerProcessCapabilityToJSON)),
        'product_category': value['productCategory'],
        'product_family': value['productFamily'],
        'product_id': value['productId'],
        'product_name': value['productName'],
        'product_options': (0, ProducerProductOptionCapability_1.ProducerProductOptionCapabilityToJSON)(value['productOptions']),
        'quantity': (0, QuantityRange_1.QuantityRangeToJSON)(value['quantity']),
        'sides': value['sides'],
        'sizes': value['sizes'] == null ? undefined : (value['sizes'].map(DimensionCapability_1.DimensionCapabilityToJSON)),
        'substrates': value['substrates'] == null ? undefined : (value['substrates'].map(MaterialCapability_1.MaterialCapabilityToJSON)),
        'turnaround': (0, TurnaroundCapability_1.TurnaroundCapabilityToJSON)(value['turnaround']),
    };
}
