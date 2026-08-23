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
import { ProducerFinishingCapabilityFromJSON, ProducerFinishingCapabilityToJSON, } from './ProducerFinishingCapability';
import { ProducerComponentCapabilityFromJSON, ProducerComponentCapabilityToJSON, } from './ProducerComponentCapability';
import { DimensionCapabilityFromJSON, DimensionCapabilityToJSON, } from './DimensionCapability';
import { TurnaroundCapabilityFromJSON, TurnaroundCapabilityToJSON, } from './TurnaroundCapability';
import { AvailabilityCapabilityFromJSON, AvailabilityCapabilityToJSON, } from './AvailabilityCapability';
import { QuantityRangeFromJSON, QuantityRangeToJSON, } from './QuantityRange';
import { ProducerProcessCapabilityFromJSON, ProducerProcessCapabilityToJSON, } from './ProducerProcessCapability';
import { ArtworkRequirementsFromJSON, ArtworkRequirementsToJSON, } from './ArtworkRequirements';
import { MaterialCapabilityFromJSON, MaterialCapabilityToJSON, } from './MaterialCapability';
import { ProducerProductOptionCapabilityFromJSON, ProducerProductOptionCapabilityToJSON, } from './ProducerProductOptionCapability';
/**
 * @export
 */
export const ProducerProductCapabilityProductCategoryEnum = {
    CommercialPrint: 'commercial_print',
    Apparel: 'apparel',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods',
    Unknown: 'unknown'
};
/**
 * @export
 */
export const ProducerProductCapabilityProductFamilyEnum = {
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
export const ProducerProductCapabilitySidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the ProducerProductCapability interface.
 */
export function instanceOfProducerProductCapability(value) {
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
export function ProducerProductCapabilityFromJSON(json) {
    return ProducerProductCapabilityFromJSONTyped(json, false);
}
export function ProducerProductCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'artwork': ArtworkRequirementsFromJSON(json['artwork']),
        'availability': json['availability'] == null ? undefined : AvailabilityCapabilityFromJSON(json['availability']),
        'components': json['components'] == null ? undefined : (json['components'].map(ProducerComponentCapabilityFromJSON)),
        'finishings': json['finishings'] == null ? undefined : (json['finishings'].map(ProducerFinishingCapabilityFromJSON)),
        'processes': json['processes'] == null ? undefined : (json['processes'].map(ProducerProcessCapabilityFromJSON)),
        'productCategory': json['product_category'] == null ? undefined : json['product_category'],
        'productFamily': json['product_family'],
        'productId': json['product_id'],
        'productName': json['product_name'],
        'productOptions': json['product_options'] == null ? undefined : ProducerProductOptionCapabilityFromJSON(json['product_options']),
        'quantity': QuantityRangeFromJSON(json['quantity']),
        'sides': json['sides'] == null ? undefined : json['sides'],
        'sizes': json['sizes'] == null ? undefined : (json['sizes'].map(DimensionCapabilityFromJSON)),
        'substrates': json['substrates'] == null ? undefined : (json['substrates'].map(MaterialCapabilityFromJSON)),
        'turnaround': json['turnaround'] == null ? undefined : TurnaroundCapabilityFromJSON(json['turnaround']),
    };
}
export function ProducerProductCapabilityToJSON(json) {
    return ProducerProductCapabilityToJSONTyped(json, false);
}
export function ProducerProductCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'artwork': ArtworkRequirementsToJSON(value['artwork']),
        'availability': AvailabilityCapabilityToJSON(value['availability']),
        'components': value['components'] == null ? undefined : (value['components'].map(ProducerComponentCapabilityToJSON)),
        'finishings': value['finishings'] == null ? undefined : (value['finishings'].map(ProducerFinishingCapabilityToJSON)),
        'processes': value['processes'] == null ? undefined : (value['processes'].map(ProducerProcessCapabilityToJSON)),
        'product_category': value['productCategory'],
        'product_family': value['productFamily'],
        'product_id': value['productId'],
        'product_name': value['productName'],
        'product_options': ProducerProductOptionCapabilityToJSON(value['productOptions']),
        'quantity': QuantityRangeToJSON(value['quantity']),
        'sides': value['sides'],
        'sizes': value['sizes'] == null ? undefined : (value['sizes'].map(DimensionCapabilityToJSON)),
        'substrates': value['substrates'] == null ? undefined : (value['substrates'].map(MaterialCapabilityToJSON)),
        'turnaround': TurnaroundCapabilityToJSON(value['turnaround']),
    };
}
