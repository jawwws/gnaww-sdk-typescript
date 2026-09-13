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
import type { ManufacturingComponent } from './ManufacturingComponent';
import {
    ManufacturingComponentFromJSON,
    ManufacturingComponentFromJSONTyped,
    ManufacturingComponentToJSON,
    ManufacturingComponentToJSONTyped,
} from './ManufacturingComponent';
import type { ManufacturingQuantity } from './ManufacturingQuantity';
import {
    ManufacturingQuantityFromJSON,
    ManufacturingQuantityFromJSONTyped,
    ManufacturingQuantityToJSON,
    ManufacturingQuantityToJSONTyped,
} from './ManufacturingQuantity';
import type { ManufacturingOperation } from './ManufacturingOperation';
import {
    ManufacturingOperationFromJSON,
    ManufacturingOperationFromJSONTyped,
    ManufacturingOperationToJSON,
    ManufacturingOperationToJSONTyped,
} from './ManufacturingOperation';
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
import type { ManufacturingVariation } from './ManufacturingVariation';
import {
    ManufacturingVariationFromJSON,
    ManufacturingVariationFromJSONTyped,
    ManufacturingVariationToJSON,
    ManufacturingVariationToJSONTyped,
} from './ManufacturingVariation';
import type { ManufacturingAssembly } from './ManufacturingAssembly';
import {
    ManufacturingAssemblyFromJSON,
    ManufacturingAssemblyFromJSONTyped,
    ManufacturingAssemblyToJSON,
    ManufacturingAssemblyToJSONTyped,
} from './ManufacturingAssembly';

/**
 * GJS v0.5 compositional manufacturing definition foundation.
 * @export
 * @interface PrintJobSpecificationV05
 */
export interface PrintJobSpecificationV05 {
    /**
     *
     * @type {Array<ManufacturingAssembly>}
     * @memberof PrintJobSpecificationV05
     */
    assemblies?: Array<ManufacturingAssembly>;
    /**
     *
     * @type {Array<ManufacturingComponent>}
     * @memberof PrintJobSpecificationV05
     */
    components: Array<ManufacturingComponent>;
    /**
     *
     * @type {number}
     * @memberof PrintJobSpecificationV05
     */
    confidence?: number;
    /**
     *
     * @type {Array<ManufacturingOperation>}
     * @memberof PrintJobSpecificationV05
     */
    operations?: Array<ManufacturingOperation>;
    /**
     *
     * @type {PrintJobSpecificationV05ProductCategoryEnum}
     * @memberof PrintJobSpecificationV05
     */
    productCategory?: PrintJobSpecificationV05ProductCategoryEnum;
    /**
     *
     * @type {PrintJobSpecificationV05ProductFamilyEnum}
     * @memberof PrintJobSpecificationV05
     */
    productFamily: PrintJobSpecificationV05ProductFamilyEnum;
    /**
     *
     * @type {string}
     * @memberof PrintJobSpecificationV05
     */
    productName?: string | null;
    /**
     *
     * @type {Array<QualityRequirement>}
     * @memberof PrintJobSpecificationV05
     */
    qualityRequirements?: Array<QualityRequirement>;
    /**
     *
     * @type {ManufacturingQuantity}
     * @memberof PrintJobSpecificationV05
     */
    quantity?: ManufacturingQuantity;
    /**
     *
     * @type {PrintJobSpecificationV05SchemaNameEnum}
     * @memberof PrintJobSpecificationV05
     */
    schemaName?: PrintJobSpecificationV05SchemaNameEnum;
    /**
     *
     * @type {PrintJobSpecificationV05SchemaVersionEnum}
     * @memberof PrintJobSpecificationV05
     */
    schemaVersion?: PrintJobSpecificationV05SchemaVersionEnum;
    /**
     *
     * @type {ServiceRequirements}
     * @memberof PrintJobSpecificationV05
     */
    serviceRequirements?: ServiceRequirements;
    /**
     *
     * @type {PrintJobSpecificationV05StatusEnum}
     * @memberof PrintJobSpecificationV05
     */
    status?: PrintJobSpecificationV05StatusEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof PrintJobSpecificationV05
     */
    unresolvedFields?: Array<string>;
    /**
     *
     * @type {Array<UseRequirement>}
     * @memberof PrintJobSpecificationV05
     */
    useRequirements?: Array<UseRequirement>;
    /**
     *
     * @type {Array<ManufacturingVariation>}
     * @memberof PrintJobSpecificationV05
     */
    variations?: Array<ManufacturingVariation>;
}


/**
 * @export
 */
export const PrintJobSpecificationV05ProductCategoryEnum = {
    CommercialPrint: 'commercial_print',
    Apparel: 'apparel',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods',
    Unknown: 'unknown'
} as const;
export type PrintJobSpecificationV05ProductCategoryEnum = typeof PrintJobSpecificationV05ProductCategoryEnum[keyof typeof PrintJobSpecificationV05ProductCategoryEnum];

/**
 * @export
 */
export const PrintJobSpecificationV05ProductFamilyEnum = {
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
export type PrintJobSpecificationV05ProductFamilyEnum = typeof PrintJobSpecificationV05ProductFamilyEnum[keyof typeof PrintJobSpecificationV05ProductFamilyEnum];

/**
 * @export
 */
export const PrintJobSpecificationV05SchemaNameEnum = {
    JawwwsPrintJobSpecification: 'jawwws.print_job_specification'
} as const;
export type PrintJobSpecificationV05SchemaNameEnum = typeof PrintJobSpecificationV05SchemaNameEnum[keyof typeof PrintJobSpecificationV05SchemaNameEnum];

/**
 * @export
 */
export const PrintJobSpecificationV05SchemaVersionEnum = {
    _05: '0.5'
} as const;
export type PrintJobSpecificationV05SchemaVersionEnum = typeof PrintJobSpecificationV05SchemaVersionEnum[keyof typeof PrintJobSpecificationV05SchemaVersionEnum];

/**
 * @export
 */
export const PrintJobSpecificationV05StatusEnum = {
    Mapped: 'mapped',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
} as const;
export type PrintJobSpecificationV05StatusEnum = typeof PrintJobSpecificationV05StatusEnum[keyof typeof PrintJobSpecificationV05StatusEnum];


/**
 * Check if a given object implements the PrintJobSpecificationV05 interface.
 */
export function instanceOfPrintJobSpecificationV05(value: object): value is PrintJobSpecificationV05 {
    if (!('components' in value) || value['components'] === undefined) return false;
    if (!('productFamily' in value) || value['productFamily'] === undefined) return false;
    return true;
}

export function PrintJobSpecificationV05FromJSON(json: any): PrintJobSpecificationV05 {
    return PrintJobSpecificationV05FromJSONTyped(json, false);
}

export function PrintJobSpecificationV05FromJSONTyped(json: any, ignoreDiscriminator: boolean): PrintJobSpecificationV05 {
    if (json == null) {
        return json;
    }
    return {

        'assemblies': json['assemblies'] == null ? undefined : ((json['assemblies'] as Array<any>).map(ManufacturingAssemblyFromJSON)),
        'components': ((json['components'] as Array<any>).map(ManufacturingComponentFromJSON)),
        'confidence': json['confidence'] == null ? undefined : json['confidence'],
        'operations': json['operations'] == null ? undefined : ((json['operations'] as Array<any>).map(ManufacturingOperationFromJSON)),
        'productCategory': json['product_category'] == null ? undefined : json['product_category'],
        'productFamily': json['product_family'],
        'productName': json['product_name'] == null ? undefined : json['product_name'],
        'qualityRequirements': json['quality_requirements'] == null ? undefined : ((json['quality_requirements'] as Array<any>).map(QualityRequirementFromJSON)),
        'quantity': json['quantity'] == null ? undefined : ManufacturingQuantityFromJSON(json['quantity']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'serviceRequirements': json['service_requirements'] == null ? undefined : ServiceRequirementsFromJSON(json['service_requirements']),
        'status': json['status'] == null ? undefined : json['status'],
        'unresolvedFields': json['unresolved_fields'] == null ? undefined : json['unresolved_fields'],
        'useRequirements': json['use_requirements'] == null ? undefined : ((json['use_requirements'] as Array<any>).map(UseRequirementFromJSON)),
        'variations': json['variations'] == null ? undefined : ((json['variations'] as Array<any>).map(ManufacturingVariationFromJSON)),
    };
}

export function PrintJobSpecificationV05ToJSON(json: any): PrintJobSpecificationV05 {
    return PrintJobSpecificationV05ToJSONTyped(json, false);
}

export function PrintJobSpecificationV05ToJSONTyped(value?: PrintJobSpecificationV05 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'assemblies': value['assemblies'] == null ? undefined : ((value['assemblies'] as Array<any>).map(ManufacturingAssemblyToJSON)),
        'components': ((value['components'] as Array<any>).map(ManufacturingComponentToJSON)),
        'confidence': value['confidence'],
        'operations': value['operations'] == null ? undefined : ((value['operations'] as Array<any>).map(ManufacturingOperationToJSON)),
        'product_category': value['productCategory'],
        'product_family': value['productFamily'],
        'product_name': value['productName'],
        'quality_requirements': value['qualityRequirements'] == null ? undefined : ((value['qualityRequirements'] as Array<any>).map(QualityRequirementToJSON)),
        'quantity': ManufacturingQuantityToJSON(value['quantity']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'service_requirements': ServiceRequirementsToJSON(value['serviceRequirements']),
        'status': value['status'],
        'unresolved_fields': value['unresolvedFields'],
        'use_requirements': value['useRequirements'] == null ? undefined : ((value['useRequirements'] as Array<any>).map(UseRequirementToJSON)),
        'variations': value['variations'] == null ? undefined : ((value['variations'] as Array<any>).map(ManufacturingVariationToJSON)),
    };
}
