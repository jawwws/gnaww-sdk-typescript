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
import type { PublicUnderstoodPrint } from './PublicUnderstoodPrint';
import {
    PublicUnderstoodPrintFromJSON,
    PublicUnderstoodPrintFromJSONTyped,
    PublicUnderstoodPrintToJSON,
    PublicUnderstoodPrintToJSONTyped,
} from './PublicUnderstoodPrint';
import type { PublicUnderstoodFinishing } from './PublicUnderstoodFinishing';
import {
    PublicUnderstoodFinishingFromJSON,
    PublicUnderstoodFinishingFromJSONTyped,
    PublicUnderstoodFinishingToJSON,
    PublicUnderstoodFinishingToJSONTyped,
} from './PublicUnderstoodFinishing';
import type { PublicControlledProductionDefault } from './PublicControlledProductionDefault';
import {
    PublicControlledProductionDefaultFromJSON,
    PublicControlledProductionDefaultFromJSONTyped,
    PublicControlledProductionDefaultToJSON,
    PublicControlledProductionDefaultToJSONTyped,
} from './PublicControlledProductionDefault';
import type { PublicUnderstoodSubstrate } from './PublicUnderstoodSubstrate';
import {
    PublicUnderstoodSubstrateFromJSON,
    PublicUnderstoodSubstrateFromJSONTyped,
    PublicUnderstoodSubstrateToJSON,
    PublicUnderstoodSubstrateToJSONTyped,
} from './PublicUnderstoodSubstrate';
import type { PublicUnderstoodSize } from './PublicUnderstoodSize';
import {
    PublicUnderstoodSizeFromJSON,
    PublicUnderstoodSizeFromJSONTyped,
    PublicUnderstoodSizeToJSON,
    PublicUnderstoodSizeToJSONTyped,
} from './PublicUnderstoodSize';

/**
 * Safe non-canonical evidence projection for review-state interpretation.
 * @export
 * @interface PublicUnderstoodRequirement
 */
export interface PublicUnderstoodRequirement {
    /**
     *
     * @type {PublicUnderstoodRequirementCompletionSupportStateEnum}
     * @memberof PublicUnderstoodRequirement
     */
    completionSupportState?: PublicUnderstoodRequirementCompletionSupportStateEnum | null;
    /**
     *
     * @type {Array<PublicControlledProductionDefault>}
     * @memberof PublicUnderstoodRequirement
     */
    controlledDefaults?: Array<PublicControlledProductionDefault>;
    /**
     *
     * @type {PublicUnderstoodRequirementEvidenceBasisEnum}
     * @memberof PublicUnderstoodRequirement
     */
    evidenceBasis?: PublicUnderstoodRequirementEvidenceBasisEnum;
    /**
     *
     * @type {Array<PublicUnderstoodFinishing>}
     * @memberof PublicUnderstoodRequirement
     */
    finishings?: Array<PublicUnderstoodFinishing>;
    /**
     *
     * @type {PublicUnderstoodPrint}
     * @memberof PublicUnderstoodRequirement
     */
    printSpec?: PublicUnderstoodPrint | null;
    /**
     *
     * @type {PublicUnderstoodRequirementProductFamilyEnum}
     * @memberof PublicUnderstoodRequirement
     */
    productFamily?: PublicUnderstoodRequirementProductFamilyEnum | null;
    /**
     *
     * @type {string}
     * @memberof PublicUnderstoodRequirement
     */
    productName?: string | null;
    /**
     *
     * @type {number}
     * @memberof PublicUnderstoodRequirement
     */
    quantityUnits?: number | null;
    /**
     *
     * @type {PublicUnderstoodRequirementSchemaNameEnum}
     * @memberof PublicUnderstoodRequirement
     */
    schemaName?: PublicUnderstoodRequirementSchemaNameEnum;
    /**
     *
     * @type {PublicUnderstoodRequirementSchemaVersionEnum}
     * @memberof PublicUnderstoodRequirement
     */
    schemaVersion?: PublicUnderstoodRequirementSchemaVersionEnum;
    /**
     *
     * @type {PublicUnderstoodSize}
     * @memberof PublicUnderstoodRequirement
     */
    size?: PublicUnderstoodSize | null;
    /**
     *
     * @type {PublicUnderstoodSubstrate}
     * @memberof PublicUnderstoodRequirement
     */
    substrate?: PublicUnderstoodSubstrate | null;
    /**
     *
     * @type {PublicUnderstoodRequirementTruthStateEnum}
     * @memberof PublicUnderstoodRequirement
     */
    truthState?: PublicUnderstoodRequirementTruthStateEnum;
}


/**
 * @export
 */
export const PublicUnderstoodRequirementCompletionSupportStateEnum = {
    FullySupported: 'fully_supported',
    SupportedWithClarification: 'supported_with_clarification',
    RecognisedNotCanonicalisable: 'recognised_not_canonicalisable',
    Unsupported: 'unsupported'
} as const;
export type PublicUnderstoodRequirementCompletionSupportStateEnum = typeof PublicUnderstoodRequirementCompletionSupportStateEnum[keyof typeof PublicUnderstoodRequirementCompletionSupportStateEnum];

/**
 * @export
 */
export const PublicUnderstoodRequirementEvidenceBasisEnum = {
    GnawwDeterministicInterpretation: 'gnaww_deterministic_interpretation'
} as const;
export type PublicUnderstoodRequirementEvidenceBasisEnum = typeof PublicUnderstoodRequirementEvidenceBasisEnum[keyof typeof PublicUnderstoodRequirementEvidenceBasisEnum];

/**
 * @export
 */
export const PublicUnderstoodRequirementProductFamilyEnum = {
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
export type PublicUnderstoodRequirementProductFamilyEnum = typeof PublicUnderstoodRequirementProductFamilyEnum[keyof typeof PublicUnderstoodRequirementProductFamilyEnum];

/**
 * @export
 */
export const PublicUnderstoodRequirementSchemaNameEnum = {
    GnawwUnderstoodRequirement: 'gnaww.understood_requirement'
} as const;
export type PublicUnderstoodRequirementSchemaNameEnum = typeof PublicUnderstoodRequirementSchemaNameEnum[keyof typeof PublicUnderstoodRequirementSchemaNameEnum];

/**
 * @export
 */
export const PublicUnderstoodRequirementSchemaVersionEnum = {
    _01: '0.1'
} as const;
export type PublicUnderstoodRequirementSchemaVersionEnum = typeof PublicUnderstoodRequirementSchemaVersionEnum[keyof typeof PublicUnderstoodRequirementSchemaVersionEnum];

/**
 * @export
 */
export const PublicUnderstoodRequirementTruthStateEnum = {
    UnderstoodNotCanonical: 'understood_not_canonical'
} as const;
export type PublicUnderstoodRequirementTruthStateEnum = typeof PublicUnderstoodRequirementTruthStateEnum[keyof typeof PublicUnderstoodRequirementTruthStateEnum];


/**
 * Check if a given object implements the PublicUnderstoodRequirement interface.
 */
export function instanceOfPublicUnderstoodRequirement(value: object): value is PublicUnderstoodRequirement {
    return true;
}

export function PublicUnderstoodRequirementFromJSON(json: any): PublicUnderstoodRequirement {
    return PublicUnderstoodRequirementFromJSONTyped(json, false);
}

export function PublicUnderstoodRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicUnderstoodRequirement {
    if (json == null) {
        return json;
    }
    return {

        'completionSupportState': json['completion_support_state'] == null ? undefined : json['completion_support_state'],
        'controlledDefaults': json['controlled_defaults'] == null ? undefined : ((json['controlled_defaults'] as Array<any>).map(PublicControlledProductionDefaultFromJSON)),
        'evidenceBasis': json['evidence_basis'] == null ? undefined : json['evidence_basis'],
        'finishings': json['finishings'] == null ? undefined : ((json['finishings'] as Array<any>).map(PublicUnderstoodFinishingFromJSON)),
        'printSpec': json['print_spec'] == null ? undefined : PublicUnderstoodPrintFromJSON(json['print_spec']),
        'productFamily': json['product_family'] == null ? undefined : json['product_family'],
        'productName': json['product_name'] == null ? undefined : json['product_name'],
        'quantityUnits': json['quantity_units'] == null ? undefined : json['quantity_units'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'size': json['size'] == null ? undefined : PublicUnderstoodSizeFromJSON(json['size']),
        'substrate': json['substrate'] == null ? undefined : PublicUnderstoodSubstrateFromJSON(json['substrate']),
        'truthState': json['truth_state'] == null ? undefined : json['truth_state'],
    };
}

export function PublicUnderstoodRequirementToJSON(json: any): PublicUnderstoodRequirement {
    return PublicUnderstoodRequirementToJSONTyped(json, false);
}

export function PublicUnderstoodRequirementToJSONTyped(value?: PublicUnderstoodRequirement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'completion_support_state': value['completionSupportState'],
        'controlled_defaults': value['controlledDefaults'] == null ? undefined : ((value['controlledDefaults'] as Array<any>).map(PublicControlledProductionDefaultToJSON)),
        'evidence_basis': value['evidenceBasis'],
        'finishings': value['finishings'] == null ? undefined : ((value['finishings'] as Array<any>).map(PublicUnderstoodFinishingToJSON)),
        'print_spec': PublicUnderstoodPrintToJSON(value['printSpec']),
        'product_family': value['productFamily'],
        'product_name': value['productName'],
        'quantity_units': value['quantityUnits'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'size': PublicUnderstoodSizeToJSON(value['size']),
        'substrate': PublicUnderstoodSubstrateToJSON(value['substrate']),
        'truth_state': value['truthState'],
    };
}
