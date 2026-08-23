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

import { mapValues } from '../runtime';
import type { ProducerFinishingCapability } from './ProducerFinishingCapability';
import {
    ProducerFinishingCapabilityFromJSON,
    ProducerFinishingCapabilityFromJSONTyped,
    ProducerFinishingCapabilityToJSON,
    ProducerFinishingCapabilityToJSONTyped,
} from './ProducerFinishingCapability';
import type { ProducerComponentCapability } from './ProducerComponentCapability';
import {
    ProducerComponentCapabilityFromJSON,
    ProducerComponentCapabilityFromJSONTyped,
    ProducerComponentCapabilityToJSON,
    ProducerComponentCapabilityToJSONTyped,
} from './ProducerComponentCapability';
import type { DimensionCapability } from './DimensionCapability';
import {
    DimensionCapabilityFromJSON,
    DimensionCapabilityFromJSONTyped,
    DimensionCapabilityToJSON,
    DimensionCapabilityToJSONTyped,
} from './DimensionCapability';
import type { TurnaroundCapability } from './TurnaroundCapability';
import {
    TurnaroundCapabilityFromJSON,
    TurnaroundCapabilityFromJSONTyped,
    TurnaroundCapabilityToJSON,
    TurnaroundCapabilityToJSONTyped,
} from './TurnaroundCapability';
import type { AvailabilityCapability } from './AvailabilityCapability';
import {
    AvailabilityCapabilityFromJSON,
    AvailabilityCapabilityFromJSONTyped,
    AvailabilityCapabilityToJSON,
    AvailabilityCapabilityToJSONTyped,
} from './AvailabilityCapability';
import type { QuantityRange } from './QuantityRange';
import {
    QuantityRangeFromJSON,
    QuantityRangeFromJSONTyped,
    QuantityRangeToJSON,
    QuantityRangeToJSONTyped,
} from './QuantityRange';
import type { ProducerProcessCapability } from './ProducerProcessCapability';
import {
    ProducerProcessCapabilityFromJSON,
    ProducerProcessCapabilityFromJSONTyped,
    ProducerProcessCapabilityToJSON,
    ProducerProcessCapabilityToJSONTyped,
} from './ProducerProcessCapability';
import type { ArtworkRequirements } from './ArtworkRequirements';
import {
    ArtworkRequirementsFromJSON,
    ArtworkRequirementsFromJSONTyped,
    ArtworkRequirementsToJSON,
    ArtworkRequirementsToJSONTyped,
} from './ArtworkRequirements';
import type { MaterialCapability } from './MaterialCapability';
import {
    MaterialCapabilityFromJSON,
    MaterialCapabilityFromJSONTyped,
    MaterialCapabilityToJSON,
    MaterialCapabilityToJSONTyped,
} from './MaterialCapability';
import type { ProducerProductOptionCapability } from './ProducerProductOptionCapability';
import {
    ProducerProductOptionCapabilityFromJSON,
    ProducerProductOptionCapabilityFromJSONTyped,
    ProducerProductOptionCapabilityToJSON,
    ProducerProductOptionCapabilityToJSONTyped,
} from './ProducerProductOptionCapability';

/**
 * A single producer product and its supported options.
 * @export
 * @interface ProducerProductCapability
 */
export interface ProducerProductCapability {
    /**
     *
     * @type {ArtworkRequirements}
     * @memberof ProducerProductCapability
     */
    artwork: ArtworkRequirements;
    /**
     *
     * @type {AvailabilityCapability}
     * @memberof ProducerProductCapability
     */
    availability?: AvailabilityCapability;
    /**
     *
     * @type {Array<ProducerComponentCapability>}
     * @memberof ProducerProductCapability
     */
    components?: Array<ProducerComponentCapability>;
    /**
     *
     * @type {Array<ProducerFinishingCapability>}
     * @memberof ProducerProductCapability
     */
    finishings?: Array<ProducerFinishingCapability>;
    /**
     *
     * @type {Array<ProducerProcessCapability>}
     * @memberof ProducerProductCapability
     */
    processes?: Array<ProducerProcessCapability>;
    /**
     *
     * @type {ProducerProductCapabilityProductCategoryEnum}
     * @memberof ProducerProductCapability
     */
    productCategory?: ProducerProductCapabilityProductCategoryEnum;
    /**
     *
     * @type {ProducerProductCapabilityProductFamilyEnum}
     * @memberof ProducerProductCapability
     */
    productFamily: ProducerProductCapabilityProductFamilyEnum;
    /**
     *
     * @type {string}
     * @memberof ProducerProductCapability
     */
    productId: string;
    /**
     *
     * @type {string}
     * @memberof ProducerProductCapability
     */
    productName: string;
    /**
     *
     * @type {ProducerProductOptionCapability}
     * @memberof ProducerProductCapability
     */
    productOptions?: ProducerProductOptionCapability;
    /**
     *
     * @type {QuantityRange}
     * @memberof ProducerProductCapability
     */
    quantity: QuantityRange;
    /**
     *
     * @type {Array<ProducerProductCapabilitySidesEnum>}
     * @memberof ProducerProductCapability
     */
    sides?: Array<ProducerProductCapabilitySidesEnum>;
    /**
     *
     * @type {Array<DimensionCapability>}
     * @memberof ProducerProductCapability
     */
    sizes?: Array<DimensionCapability>;
    /**
     *
     * @type {Array<MaterialCapability>}
     * @memberof ProducerProductCapability
     */
    substrates?: Array<MaterialCapability>;
    /**
     *
     * @type {TurnaroundCapability}
     * @memberof ProducerProductCapability
     */
    turnaround?: TurnaroundCapability;
}


/**
 * @export
 */
export const ProducerProductCapabilityProductCategoryEnum = {
    CommercialPrint: 'commercial_print',
    Apparel: 'apparel',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods',
    Unknown: 'unknown'
} as const;
export type ProducerProductCapabilityProductCategoryEnum = typeof ProducerProductCapabilityProductCategoryEnum[keyof typeof ProducerProductCapabilityProductCategoryEnum];

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
} as const;
export type ProducerProductCapabilityProductFamilyEnum = typeof ProducerProductCapabilityProductFamilyEnum[keyof typeof ProducerProductCapabilityProductFamilyEnum];

/**
 * @export
 */
export const ProducerProductCapabilitySidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
} as const;
export type ProducerProductCapabilitySidesEnum = typeof ProducerProductCapabilitySidesEnum[keyof typeof ProducerProductCapabilitySidesEnum];


/**
 * Check if a given object implements the ProducerProductCapability interface.
 */
export function instanceOfProducerProductCapability(value: object): value is ProducerProductCapability {
    if (!('artwork' in value) || value['artwork'] === undefined) return false;
    if (!('productFamily' in value) || value['productFamily'] === undefined) return false;
    if (!('productId' in value) || value['productId'] === undefined) return false;
    if (!('productName' in value) || value['productName'] === undefined) return false;
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    return true;
}

export function ProducerProductCapabilityFromJSON(json: any): ProducerProductCapability {
    return ProducerProductCapabilityFromJSONTyped(json, false);
}

export function ProducerProductCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerProductCapability {
    if (json == null) {
        return json;
    }
    return {

        'artwork': ArtworkRequirementsFromJSON(json['artwork']),
        'availability': json['availability'] == null ? undefined : AvailabilityCapabilityFromJSON(json['availability']),
        'components': json['components'] == null ? undefined : ((json['components'] as Array<any>).map(ProducerComponentCapabilityFromJSON)),
        'finishings': json['finishings'] == null ? undefined : ((json['finishings'] as Array<any>).map(ProducerFinishingCapabilityFromJSON)),
        'processes': json['processes'] == null ? undefined : ((json['processes'] as Array<any>).map(ProducerProcessCapabilityFromJSON)),
        'productCategory': json['product_category'] == null ? undefined : json['product_category'],
        'productFamily': json['product_family'],
        'productId': json['product_id'],
        'productName': json['product_name'],
        'productOptions': json['product_options'] == null ? undefined : ProducerProductOptionCapabilityFromJSON(json['product_options']),
        'quantity': QuantityRangeFromJSON(json['quantity']),
        'sides': json['sides'] == null ? undefined : json['sides'],
        'sizes': json['sizes'] == null ? undefined : ((json['sizes'] as Array<any>).map(DimensionCapabilityFromJSON)),
        'substrates': json['substrates'] == null ? undefined : ((json['substrates'] as Array<any>).map(MaterialCapabilityFromJSON)),
        'turnaround': json['turnaround'] == null ? undefined : TurnaroundCapabilityFromJSON(json['turnaround']),
    };
}

export function ProducerProductCapabilityToJSON(json: any): ProducerProductCapability {
    return ProducerProductCapabilityToJSONTyped(json, false);
}

export function ProducerProductCapabilityToJSONTyped(value?: ProducerProductCapability | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'artwork': ArtworkRequirementsToJSON(value['artwork']),
        'availability': AvailabilityCapabilityToJSON(value['availability']),
        'components': value['components'] == null ? undefined : ((value['components'] as Array<any>).map(ProducerComponentCapabilityToJSON)),
        'finishings': value['finishings'] == null ? undefined : ((value['finishings'] as Array<any>).map(ProducerFinishingCapabilityToJSON)),
        'processes': value['processes'] == null ? undefined : ((value['processes'] as Array<any>).map(ProducerProcessCapabilityToJSON)),
        'product_category': value['productCategory'],
        'product_family': value['productFamily'],
        'product_id': value['productId'],
        'product_name': value['productName'],
        'product_options': ProducerProductOptionCapabilityToJSON(value['productOptions']),
        'quantity': QuantityRangeToJSON(value['quantity']),
        'sides': value['sides'],
        'sizes': value['sizes'] == null ? undefined : ((value['sizes'] as Array<any>).map(DimensionCapabilityToJSON)),
        'substrates': value['substrates'] == null ? undefined : ((value['substrates'] as Array<any>).map(MaterialCapabilityToJSON)),
        'turnaround': TurnaroundCapabilityToJSON(value['turnaround']),
    };
}
