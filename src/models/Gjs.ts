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
import type { PrintComponent } from './PrintComponent';
import {
    PrintComponentFromJSON,
    PrintComponentFromJSONTyped,
    PrintComponentToJSON,
    PrintComponentToJSONTyped,
} from './PrintComponent';
import type { UseRequirement } from './UseRequirement';
import {
    UseRequirementFromJSON,
    UseRequirementFromJSONTyped,
    UseRequirementToJSON,
    UseRequirementToJSONTyped,
} from './UseRequirement';
import type { ServiceRequirements } from './ServiceRequirements';
import {
    ServiceRequirementsFromJSON,
    ServiceRequirementsFromJSONTyped,
    ServiceRequirementsToJSON,
    ServiceRequirementsToJSONTyped,
} from './ServiceRequirements';
import type { PrintJobSpecification } from './PrintJobSpecification';
import {
    PrintJobSpecificationFromJSON,
    PrintJobSpecificationFromJSONTyped,
    PrintJobSpecificationToJSON,
    PrintJobSpecificationToJSONTyped,
} from './PrintJobSpecification';
import type { Quantity } from './Quantity';
import {
    QuantityFromJSON,
    QuantityFromJSONTyped,
    QuantityToJSON,
    QuantityToJSONTyped,
} from './Quantity';
import type { PrintJobSpecificationV04 } from './PrintJobSpecificationV04';
import {
    PrintJobSpecificationV04FromJSON,
    PrintJobSpecificationV04FromJSONTyped,
    PrintJobSpecificationV04ToJSON,
    PrintJobSpecificationV04ToJSONTyped,
} from './PrintJobSpecificationV04';
import type { ProductOptions } from './ProductOptions';
import {
    ProductOptionsFromJSON,
    ProductOptionsFromJSONTyped,
    ProductOptionsToJSON,
    ProductOptionsToJSONTyped,
} from './ProductOptions';

/**
 *
 * @export
 * @interface Gjs
 */
export interface Gjs {
    /**
     *
     * @type {Array<PrintComponent>}
     * @memberof Gjs
     */
    components?: Array<PrintComponent>;
    /**
     *
     * @type {number}
     * @memberof Gjs
     */
    confidence?: number;
    /**
     *
     * @type {ProductOptions}
     * @memberof Gjs
     */
    options?: ProductOptions;
    /**
     *
     * @type {GjsProductCategoryEnum}
     * @memberof Gjs
     */
    productCategory?: GjsProductCategoryEnum;
    /**
     *
     * @type {GjsProductFamilyEnum}
     * @memberof Gjs
     */
    productFamily: GjsProductFamilyEnum;
    /**
     *
     * @type {string}
     * @memberof Gjs
     */
    productName?: string;
    /**
     *
     * @type {Quantity}
     * @memberof Gjs
     */
    quantity?: Quantity;
    /**
     *
     * @type {GjsSchemaNameEnum}
     * @memberof Gjs
     */
    schemaName?: GjsSchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof Gjs
     */
    schemaVersion?: string;
    /**
     *
     * @type {ServiceRequirements}
     * @memberof Gjs
     */
    serviceRequirements?: ServiceRequirements;
    /**
     *
     * @type {GjsStatusEnum}
     * @memberof Gjs
     */
    status?: GjsStatusEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof Gjs
     */
    unresolvedFields?: Array<string>;
    /**
     *
     * @type {Array<UseRequirement>}
     * @memberof Gjs
     */
    useRequirements?: Array<UseRequirement>;
}


/**
 * @export
 */
export const GjsProductCategoryEnum = {
    CommercialPrint: 'commercial_print',
    Apparel: 'apparel',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods',
    Unknown: 'unknown'
} as const;
export type GjsProductCategoryEnum = typeof GjsProductCategoryEnum[keyof typeof GjsProductCategoryEnum];

/**
 * @export
 */
export const GjsProductFamilyEnum = {
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
export type GjsProductFamilyEnum = typeof GjsProductFamilyEnum[keyof typeof GjsProductFamilyEnum];

/**
 * @export
 */
export const GjsSchemaNameEnum = {
    JawwwsPrintJobSpecification: 'jawwws.print_job_specification'
} as const;
export type GjsSchemaNameEnum = typeof GjsSchemaNameEnum[keyof typeof GjsSchemaNameEnum];

/**
 * @export
 */
export const GjsStatusEnum = {
    Mapped: 'mapped',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
} as const;
export type GjsStatusEnum = typeof GjsStatusEnum[keyof typeof GjsStatusEnum];


/**
 * Check if a given object implements the Gjs interface.
 */
export function instanceOfGjs(value: object): value is Gjs {
    if (!('productFamily' in value) || value['productFamily'] === undefined) return false;
    return true;
}

export function GjsFromJSON(json: any): Gjs {
    return GjsFromJSONTyped(json, false);
}

export function GjsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Gjs {
    if (json == null) {
        return json;
    }
    return {

        'components': json['components'] == null ? undefined : ((json['components'] as Array<any>).map(PrintComponentFromJSON)),
        'confidence': json['confidence'] == null ? undefined : json['confidence'],
        'options': json['options'] == null ? undefined : ProductOptionsFromJSON(json['options']),
        'productCategory': json['product_category'] == null ? undefined : json['product_category'],
        'productFamily': json['product_family'],
        'productName': json['product_name'] == null ? undefined : json['product_name'],
        'quantity': json['quantity'] == null ? undefined : QuantityFromJSON(json['quantity']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'serviceRequirements': json['service_requirements'] == null ? undefined : ServiceRequirementsFromJSON(json['service_requirements']),
        'status': json['status'] == null ? undefined : json['status'],
        'unresolvedFields': json['unresolved_fields'] == null ? undefined : json['unresolved_fields'],
        'useRequirements': json['use_requirements'] == null ? undefined : ((json['use_requirements'] as Array<any>).map(UseRequirementFromJSON)),
    };
}

export function GjsToJSON(json: any): Gjs {
    return GjsToJSONTyped(json, false);
}

export function GjsToJSONTyped(value?: Gjs | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'components': value['components'] == null ? undefined : ((value['components'] as Array<any>).map(PrintComponentToJSON)),
        'confidence': value['confidence'],
        'options': ProductOptionsToJSON(value['options']),
        'product_category': value['productCategory'],
        'product_family': value['productFamily'],
        'product_name': value['productName'],
        'quantity': QuantityToJSON(value['quantity']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'service_requirements': ServiceRequirementsToJSON(value['serviceRequirements']),
        'status': value['status'],
        'unresolved_fields': value['unresolvedFields'],
        'use_requirements': value['useRequirements'] == null ? undefined : ((value['useRequirements'] as Array<any>).map(UseRequirementToJSON)),
    };
}
