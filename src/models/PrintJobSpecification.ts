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
import type { ServiceRequirements } from './ServiceRequirements';
import {
    ServiceRequirementsFromJSON,
    ServiceRequirementsFromJSONTyped,
    ServiceRequirementsToJSON,
    ServiceRequirementsToJSONTyped,
} from './ServiceRequirements';
import type { Quantity } from './Quantity';
import {
    QuantityFromJSON,
    QuantityFromJSONTyped,
    QuantityToJSON,
    QuantityToJSONTyped,
} from './Quantity';
import type { ProductOptions } from './ProductOptions';
import {
    ProductOptionsFromJSON,
    ProductOptionsFromJSONTyped,
    ProductOptionsToJSON,
    ProductOptionsToJSONTyped,
} from './ProductOptions';

/**
 * Canonical Jawwws print job specification returned by Gnaww.
 * @export
 * @interface PrintJobSpecification
 */
export interface PrintJobSpecification {
    /**
     *
     * @type {Array<PrintComponent>}
     * @memberof PrintJobSpecification
     */
    components?: Array<PrintComponent>;
    /**
     *
     * @type {number}
     * @memberof PrintJobSpecification
     */
    confidence?: number;
    /**
     *
     * @type {ProductOptions}
     * @memberof PrintJobSpecification
     */
    options?: ProductOptions;
    /**
     *
     * @type {PrintJobSpecificationProductCategoryEnum}
     * @memberof PrintJobSpecification
     */
    productCategory?: PrintJobSpecificationProductCategoryEnum;
    /**
     *
     * @type {PrintJobSpecificationProductFamilyEnum}
     * @memberof PrintJobSpecification
     */
    productFamily: PrintJobSpecificationProductFamilyEnum;
    /**
     *
     * @type {string}
     * @memberof PrintJobSpecification
     */
    productName?: string | null;
    /**
     *
     * @type {Quantity}
     * @memberof PrintJobSpecification
     */
    quantity?: Quantity;
    /**
     *
     * @type {PrintJobSpecificationSchemaNameEnum}
     * @memberof PrintJobSpecification
     */
    schemaName?: PrintJobSpecificationSchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof PrintJobSpecification
     */
    schemaVersion?: string;
    /**
     *
     * @type {ServiceRequirements}
     * @memberof PrintJobSpecification
     */
    serviceRequirements?: ServiceRequirements;
    /**
     *
     * @type {PrintJobSpecificationStatusEnum}
     * @memberof PrintJobSpecification
     */
    status?: PrintJobSpecificationStatusEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof PrintJobSpecification
     */
    unresolvedFields?: Array<string>;
}


/**
 * @export
 */
export const PrintJobSpecificationProductCategoryEnum = {
    CommercialPrint: 'commercial_print',
    Apparel: 'apparel',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods',
    Unknown: 'unknown'
} as const;
export type PrintJobSpecificationProductCategoryEnum = typeof PrintJobSpecificationProductCategoryEnum[keyof typeof PrintJobSpecificationProductCategoryEnum];

/**
 * @export
 */
export const PrintJobSpecificationProductFamilyEnum = {
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
export type PrintJobSpecificationProductFamilyEnum = typeof PrintJobSpecificationProductFamilyEnum[keyof typeof PrintJobSpecificationProductFamilyEnum];

/**
 * @export
 */
export const PrintJobSpecificationSchemaNameEnum = {
    JawwwsPrintJobSpecification: 'jawwws.print_job_specification'
} as const;
export type PrintJobSpecificationSchemaNameEnum = typeof PrintJobSpecificationSchemaNameEnum[keyof typeof PrintJobSpecificationSchemaNameEnum];

/**
 * @export
 */
export const PrintJobSpecificationStatusEnum = {
    Mapped: 'mapped',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
} as const;
export type PrintJobSpecificationStatusEnum = typeof PrintJobSpecificationStatusEnum[keyof typeof PrintJobSpecificationStatusEnum];


/**
 * Check if a given object implements the PrintJobSpecification interface.
 */
export function instanceOfPrintJobSpecification(value: object): value is PrintJobSpecification {
    if (!('productFamily' in value) || value['productFamily'] === undefined) return false;
    return true;
}

export function PrintJobSpecificationFromJSON(json: any): PrintJobSpecification {
    return PrintJobSpecificationFromJSONTyped(json, false);
}

export function PrintJobSpecificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrintJobSpecification {
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
    };
}

export function PrintJobSpecificationToJSON(json: any): PrintJobSpecification {
    return PrintJobSpecificationToJSONTyped(json, false);
}

export function PrintJobSpecificationToJSONTyped(value?: PrintJobSpecification | null, ignoreDiscriminator: boolean = false): any {
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
    };
}
