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
 * Version 0.4 GJS with confirmed production-relevant use requirements.
 * @export
 * @interface PrintJobSpecificationV04
 */
export interface PrintJobSpecificationV04 {
    /**
     *
     * @type {Array<PrintComponent>}
     * @memberof PrintJobSpecificationV04
     */
    components?: Array<PrintComponent>;
    /**
     *
     * @type {number}
     * @memberof PrintJobSpecificationV04
     */
    confidence?: number;
    /**
     *
     * @type {ProductOptions}
     * @memberof PrintJobSpecificationV04
     */
    options?: ProductOptions;
    /**
     *
     * @type {PrintJobSpecificationV04ProductCategoryEnum}
     * @memberof PrintJobSpecificationV04
     */
    productCategory?: PrintJobSpecificationV04ProductCategoryEnum;
    /**
     *
     * @type {PrintJobSpecificationV04ProductFamilyEnum}
     * @memberof PrintJobSpecificationV04
     */
    productFamily: PrintJobSpecificationV04ProductFamilyEnum;
    /**
     *
     * @type {string}
     * @memberof PrintJobSpecificationV04
     */
    productName?: string | null;
    /**
     *
     * @type {Quantity}
     * @memberof PrintJobSpecificationV04
     */
    quantity?: Quantity;
    /**
     *
     * @type {PrintJobSpecificationV04SchemaNameEnum}
     * @memberof PrintJobSpecificationV04
     */
    schemaName?: PrintJobSpecificationV04SchemaNameEnum;
    /**
     *
     * @type {PrintJobSpecificationV04SchemaVersionEnum}
     * @memberof PrintJobSpecificationV04
     */
    schemaVersion?: PrintJobSpecificationV04SchemaVersionEnum;
    /**
     *
     * @type {ServiceRequirements}
     * @memberof PrintJobSpecificationV04
     */
    serviceRequirements?: ServiceRequirements;
    /**
     *
     * @type {PrintJobSpecificationV04StatusEnum}
     * @memberof PrintJobSpecificationV04
     */
    status?: PrintJobSpecificationV04StatusEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof PrintJobSpecificationV04
     */
    unresolvedFields?: Array<string>;
    /**
     *
     * @type {Array<UseRequirement>}
     * @memberof PrintJobSpecificationV04
     */
    useRequirements?: Array<UseRequirement>;
}


/**
 * @export
 */
export const PrintJobSpecificationV04ProductCategoryEnum = {
    CommercialPrint: 'commercial_print',
    Apparel: 'apparel',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods',
    Unknown: 'unknown'
} as const;
export type PrintJobSpecificationV04ProductCategoryEnum = typeof PrintJobSpecificationV04ProductCategoryEnum[keyof typeof PrintJobSpecificationV04ProductCategoryEnum];

/**
 * @export
 */
export const PrintJobSpecificationV04ProductFamilyEnum = {
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
export type PrintJobSpecificationV04ProductFamilyEnum = typeof PrintJobSpecificationV04ProductFamilyEnum[keyof typeof PrintJobSpecificationV04ProductFamilyEnum];

/**
 * @export
 */
export const PrintJobSpecificationV04SchemaNameEnum = {
    JawwwsPrintJobSpecification: 'jawwws.print_job_specification'
} as const;
export type PrintJobSpecificationV04SchemaNameEnum = typeof PrintJobSpecificationV04SchemaNameEnum[keyof typeof PrintJobSpecificationV04SchemaNameEnum];

/**
 * @export
 */
export const PrintJobSpecificationV04SchemaVersionEnum = {
    _04: '0.4'
} as const;
export type PrintJobSpecificationV04SchemaVersionEnum = typeof PrintJobSpecificationV04SchemaVersionEnum[keyof typeof PrintJobSpecificationV04SchemaVersionEnum];

/**
 * @export
 */
export const PrintJobSpecificationV04StatusEnum = {
    Mapped: 'mapped',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
} as const;
export type PrintJobSpecificationV04StatusEnum = typeof PrintJobSpecificationV04StatusEnum[keyof typeof PrintJobSpecificationV04StatusEnum];


/**
 * Check if a given object implements the PrintJobSpecificationV04 interface.
 */
export function instanceOfPrintJobSpecificationV04(value: object): value is PrintJobSpecificationV04 {
    if (!('productFamily' in value) || value['productFamily'] === undefined) return false;
    return true;
}

export function PrintJobSpecificationV04FromJSON(json: any): PrintJobSpecificationV04 {
    return PrintJobSpecificationV04FromJSONTyped(json, false);
}

export function PrintJobSpecificationV04FromJSONTyped(json: any, ignoreDiscriminator: boolean): PrintJobSpecificationV04 {
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

export function PrintJobSpecificationV04ToJSON(json: any): PrintJobSpecificationV04 {
    return PrintJobSpecificationV04ToJSONTyped(json, false);
}

export function PrintJobSpecificationV04ToJSONTyped(value?: PrintJobSpecificationV04 | null, ignoreDiscriminator: boolean = false): any {
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
