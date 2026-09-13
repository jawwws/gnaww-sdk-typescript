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
import type { ManufacturingOperation } from './ManufacturingOperation';
import {
    ManufacturingOperationFromJSON,
    ManufacturingOperationFromJSONTyped,
    ManufacturingOperationToJSON,
    ManufacturingOperationToJSONTyped,
} from './ManufacturingOperation';
import type { PrintJobSpecificationV05 } from './PrintJobSpecificationV05';
import {
    PrintJobSpecificationV05FromJSON,
    PrintJobSpecificationV05FromJSONTyped,
    PrintJobSpecificationV05ToJSON,
    PrintJobSpecificationV05ToJSONTyped,
} from './PrintJobSpecificationV05';
import type { UseRequirement } from './UseRequirement';
import {
    UseRequirementFromJSON,
    UseRequirementFromJSONTyped,
    UseRequirementToJSON,
    UseRequirementToJSONTyped,
} from './UseRequirement';
import type { QualityRequirement } from './QualityRequirement';
import {
    QualityRequirementFromJSON,
    QualityRequirementFromJSONTyped,
    QualityRequirementToJSON,
    QualityRequirementToJSONTyped,
} from './QualityRequirement';
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
import type { ManufacturingVariation } from './ManufacturingVariation';
import {
    ManufacturingVariationFromJSON,
    ManufacturingVariationFromJSONTyped,
    ManufacturingVariationToJSON,
    ManufacturingVariationToJSONTyped,
} from './ManufacturingVariation';
import type { Quantity } from './Quantity';
import {
    QuantityFromJSON,
    QuantityFromJSONTyped,
    QuantityToJSON,
    QuantityToJSONTyped,
} from './Quantity';
import type { ManufacturingAssembly } from './ManufacturingAssembly';
import {
    ManufacturingAssemblyFromJSON,
    ManufacturingAssemblyFromJSONTyped,
    ManufacturingAssemblyToJSON,
    ManufacturingAssemblyToJSONTyped,
} from './ManufacturingAssembly';
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
 * @interface Gjs1
 */
export interface Gjs1 {
    /**
     *
     * @type {Array<ManufacturingAssembly>}
     * @memberof Gjs1
     */
    assemblies?: Array<ManufacturingAssembly>;
    /**
     *
     * @type {Array<PrintComponent>}
     * @memberof Gjs1
     */
    components: Array<PrintComponent>;
    /**
     *
     * @type {number}
     * @memberof Gjs1
     */
    confidence?: number;
    /**
     *
     * @type {Array<ManufacturingOperation>}
     * @memberof Gjs1
     */
    operations?: Array<ManufacturingOperation>;
    /**
     *
     * @type {Gjs1ProductCategoryEnum}
     * @memberof Gjs1
     */
    productCategory?: Gjs1ProductCategoryEnum;
    /**
     *
     * @type {Gjs1ProductFamilyEnum}
     * @memberof Gjs1
     */
    productFamily: Gjs1ProductFamilyEnum;
    /**
     *
     * @type {string}
     * @memberof Gjs1
     */
    productName?: string;
    /**
     *
     * @type {Array<QualityRequirement>}
     * @memberof Gjs1
     */
    qualityRequirements?: Array<QualityRequirement>;
    /**
     *
     * @type {Quantity}
     * @memberof Gjs1
     */
    quantity?: Quantity;
    /**
     *
     * @type {Gjs1SchemaNameEnum}
     * @memberof Gjs1
     */
    schemaName?: Gjs1SchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof Gjs1
     */
    schemaVersion?: string;
    /**
     *
     * @type {ServiceRequirements}
     * @memberof Gjs1
     */
    serviceRequirements?: ServiceRequirements;
    /**
     *
     * @type {Gjs1StatusEnum}
     * @memberof Gjs1
     */
    status?: Gjs1StatusEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof Gjs1
     */
    unresolvedFields?: Array<string>;
    /**
     *
     * @type {Array<UseRequirement>}
     * @memberof Gjs1
     */
    useRequirements?: Array<UseRequirement>;
    /**
     *
     * @type {Array<ManufacturingVariation>}
     * @memberof Gjs1
     */
    variations?: Array<ManufacturingVariation>;
    /**
     *
     * @type {ProductOptions}
     * @memberof Gjs1
     */
    options?: ProductOptions;
}


/**
 * @export
 */
export const Gjs1ProductCategoryEnum = {
    CommercialPrint: 'commercial_print',
    Apparel: 'apparel',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods',
    Unknown: 'unknown'
} as const;
export type Gjs1ProductCategoryEnum = typeof Gjs1ProductCategoryEnum[keyof typeof Gjs1ProductCategoryEnum];

/**
 * @export
 */
export const Gjs1ProductFamilyEnum = {
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
export type Gjs1ProductFamilyEnum = typeof Gjs1ProductFamilyEnum[keyof typeof Gjs1ProductFamilyEnum];

/**
 * @export
 */
export const Gjs1SchemaNameEnum = {
    JawwwsPrintJobSpecification: 'jawwws.print_job_specification'
} as const;
export type Gjs1SchemaNameEnum = typeof Gjs1SchemaNameEnum[keyof typeof Gjs1SchemaNameEnum];

/**
 * @export
 */
export const Gjs1StatusEnum = {
    Mapped: 'mapped',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
} as const;
export type Gjs1StatusEnum = typeof Gjs1StatusEnum[keyof typeof Gjs1StatusEnum];


/**
 * Check if a given object implements the Gjs1 interface.
 */
export function instanceOfGjs1(value: object): value is Gjs1 {
    if (!('components' in value) || value['components'] === undefined) return false;
    if (!('productFamily' in value) || value['productFamily'] === undefined) return false;
    return true;
}

export function Gjs1FromJSON(json: any): Gjs1 {
    return Gjs1FromJSONTyped(json, false);
}

export function Gjs1FromJSONTyped(json: any, ignoreDiscriminator: boolean): Gjs1 {
    if (json == null) {
        return json;
    }
    return {

        'assemblies': json['assemblies'] == null ? undefined : ((json['assemblies'] as Array<any>).map(ManufacturingAssemblyFromJSON)),
        'components': ((json['components'] as Array<any>).map(PrintComponentFromJSON)),
        'confidence': json['confidence'] == null ? undefined : json['confidence'],
        'operations': json['operations'] == null ? undefined : ((json['operations'] as Array<any>).map(ManufacturingOperationFromJSON)),
        'productCategory': json['product_category'] == null ? undefined : json['product_category'],
        'productFamily': json['product_family'],
        'productName': json['product_name'] == null ? undefined : json['product_name'],
        'qualityRequirements': json['quality_requirements'] == null ? undefined : ((json['quality_requirements'] as Array<any>).map(QualityRequirementFromJSON)),
        'quantity': json['quantity'] == null ? undefined : QuantityFromJSON(json['quantity']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'serviceRequirements': json['service_requirements'] == null ? undefined : ServiceRequirementsFromJSON(json['service_requirements']),
        'status': json['status'] == null ? undefined : json['status'],
        'unresolvedFields': json['unresolved_fields'] == null ? undefined : json['unresolved_fields'],
        'useRequirements': json['use_requirements'] == null ? undefined : ((json['use_requirements'] as Array<any>).map(UseRequirementFromJSON)),
        'variations': json['variations'] == null ? undefined : ((json['variations'] as Array<any>).map(ManufacturingVariationFromJSON)),
        'options': json['options'] == null ? undefined : ProductOptionsFromJSON(json['options']),
    };
}

export function Gjs1ToJSON(json: any): Gjs1 {
    return Gjs1ToJSONTyped(json, false);
}

export function Gjs1ToJSONTyped(value?: Gjs1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'assemblies': value['assemblies'] == null ? undefined : ((value['assemblies'] as Array<any>).map(ManufacturingAssemblyToJSON)),
        'components': ((value['components'] as Array<any>).map(PrintComponentToJSON)),
        'confidence': value['confidence'],
        'operations': value['operations'] == null ? undefined : ((value['operations'] as Array<any>).map(ManufacturingOperationToJSON)),
        'product_category': value['productCategory'],
        'product_family': value['productFamily'],
        'product_name': value['productName'],
        'quality_requirements': value['qualityRequirements'] == null ? undefined : ((value['qualityRequirements'] as Array<any>).map(QualityRequirementToJSON)),
        'quantity': QuantityToJSON(value['quantity']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'service_requirements': ServiceRequirementsToJSON(value['serviceRequirements']),
        'status': value['status'],
        'unresolved_fields': value['unresolvedFields'],
        'use_requirements': value['useRequirements'] == null ? undefined : ((value['useRequirements'] as Array<any>).map(UseRequirementToJSON)),
        'variations': value['variations'] == null ? undefined : ((value['variations'] as Array<any>).map(ManufacturingVariationToJSON)),
        'options': ProductOptionsToJSON(value['options']),
    };
}
