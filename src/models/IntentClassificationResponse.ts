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
import type { IssueSet } from './IssueSet';
import {
    IssueSetFromJSON,
    IssueSetFromJSONTyped,
    IssueSetToJSON,
    IssueSetToJSONTyped,
} from './IssueSet';
import type { IntentPlanEvidence } from './IntentPlanEvidence';
import {
    IntentPlanEvidenceFromJSON,
    IntentPlanEvidenceFromJSONTyped,
    IntentPlanEvidenceToJSON,
    IntentPlanEvidenceToJSONTyped,
} from './IntentPlanEvidence';
import type { SourceInput } from './SourceInput';
import {
    SourceInputFromJSON,
    SourceInputFromJSONTyped,
    SourceInputToJSON,
    SourceInputToJSONTyped,
} from './SourceInput';

/**
 * Deterministic classification of product-led versus outcome-led input.
 * @export
 * @interface IntentClassificationResponse
 */
export interface IntentClassificationResponse {
    /**
     *
     * @type {Array<IntentClassificationResponseCandidateProductFamiliesEnum>}
     * @memberof IntentClassificationResponse
     */
    candidateProductFamilies?: Array<IntentClassificationResponseCandidateProductFamiliesEnum>;
    /**
     *
     * @type {number}
     * @memberof IntentClassificationResponse
     */
    confidence: number;
    /**
     *
     * @type {Array<IntentClassificationResponseDetectedProductCategoriesEnum>}
     * @memberof IntentClassificationResponse
     */
    detectedProductCategories?: Array<IntentClassificationResponseDetectedProductCategoriesEnum>;
    /**
     *
     * @type {Array<IntentClassificationResponseDetectedProductFamiliesEnum>}
     * @memberof IntentClassificationResponse
     */
    detectedProductFamilies?: Array<IntentClassificationResponseDetectedProductFamiliesEnum>;
    /**
     *
     * @type {IntentClassificationResponseDeterministicEnum}
     * @memberof IntentClassificationResponse
     */
    deterministic?: IntentClassificationResponseDeterministicEnum;
    /**
     *
     * @type {Array<IntentPlanEvidence>}
     * @memberof IntentClassificationResponse
     */
    evidence?: Array<IntentPlanEvidence>;
    /**
     *
     * @type {IntentClassificationResponseInputKindEnum}
     * @memberof IntentClassificationResponse
     */
    inputKind: IntentClassificationResponseInputKindEnum;
    /**
     *
     * @type {IssueSet}
     * @memberof IntentClassificationResponse
     */
    issues?: IssueSet;
    /**
     *
     * @type {boolean}
     * @memberof IntentClassificationResponse
     */
    requiresIntentPlanner: boolean;
    /**
     *
     * @type {IntentClassificationResponseSchemaNameEnum}
     * @memberof IntentClassificationResponse
     */
    schemaName?: IntentClassificationResponseSchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof IntentClassificationResponse
     */
    schemaVersion?: string;
    /**
     *
     * @type {SourceInput}
     * @memberof IntentClassificationResponse
     */
    source: SourceInput;
    /**
     *
     * @type {IntentClassificationResponseStatusEnum}
     * @memberof IntentClassificationResponse
     */
    status: IntentClassificationResponseStatusEnum;
}


/**
 * @export
 */
export const IntentClassificationResponseCandidateProductFamiliesEnum = {
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
export type IntentClassificationResponseCandidateProductFamiliesEnum = typeof IntentClassificationResponseCandidateProductFamiliesEnum[keyof typeof IntentClassificationResponseCandidateProductFamiliesEnum];

/**
 * @export
 */
export const IntentClassificationResponseDetectedProductCategoriesEnum = {
    CommercialPrint: 'commercial_print',
    Apparel: 'apparel',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods',
    Unknown: 'unknown'
} as const;
export type IntentClassificationResponseDetectedProductCategoriesEnum = typeof IntentClassificationResponseDetectedProductCategoriesEnum[keyof typeof IntentClassificationResponseDetectedProductCategoriesEnum];

/**
 * @export
 */
export const IntentClassificationResponseDetectedProductFamiliesEnum = {
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
export type IntentClassificationResponseDetectedProductFamiliesEnum = typeof IntentClassificationResponseDetectedProductFamiliesEnum[keyof typeof IntentClassificationResponseDetectedProductFamiliesEnum];

/**
 * @export
 */
export const IntentClassificationResponseDeterministicEnum = {
    True: true
} as const;
export type IntentClassificationResponseDeterministicEnum = typeof IntentClassificationResponseDeterministicEnum[keyof typeof IntentClassificationResponseDeterministicEnum];

/**
 * @export
 */
export const IntentClassificationResponseInputKindEnum = {
    ProductLed: 'product_led',
    OutcomeLed: 'outcome_led',
    Mixed: 'mixed',
    NeedsReview: 'needs_review'
} as const;
export type IntentClassificationResponseInputKindEnum = typeof IntentClassificationResponseInputKindEnum[keyof typeof IntentClassificationResponseInputKindEnum];

/**
 * @export
 */
export const IntentClassificationResponseSchemaNameEnum = {
    JawwwsIntentClassificationResponse: 'jawwws.intent_classification_response'
} as const;
export type IntentClassificationResponseSchemaNameEnum = typeof IntentClassificationResponseSchemaNameEnum[keyof typeof IntentClassificationResponseSchemaNameEnum];

/**
 * @export
 */
export const IntentClassificationResponseStatusEnum = {
    Classified: 'classified',
    NeedsReview: 'needs_review',
    Failed: 'failed'
} as const;
export type IntentClassificationResponseStatusEnum = typeof IntentClassificationResponseStatusEnum[keyof typeof IntentClassificationResponseStatusEnum];


/**
 * Check if a given object implements the IntentClassificationResponse interface.
 */
export function instanceOfIntentClassificationResponse(value: object): value is IntentClassificationResponse {
    if (!('confidence' in value) || value['confidence'] === undefined) return false;
    if (!('inputKind' in value) || value['inputKind'] === undefined) return false;
    if (!('requiresIntentPlanner' in value) || value['requiresIntentPlanner'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function IntentClassificationResponseFromJSON(json: any): IntentClassificationResponse {
    return IntentClassificationResponseFromJSONTyped(json, false);
}

export function IntentClassificationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntentClassificationResponse {
    if (json == null) {
        return json;
    }
    return {

        'candidateProductFamilies': json['candidate_product_families'] == null ? undefined : json['candidate_product_families'],
        'confidence': json['confidence'],
        'detectedProductCategories': json['detected_product_categories'] == null ? undefined : json['detected_product_categories'],
        'detectedProductFamilies': json['detected_product_families'] == null ? undefined : json['detected_product_families'],
        'deterministic': json['deterministic'] == null ? undefined : json['deterministic'],
        'evidence': json['evidence'] == null ? undefined : ((json['evidence'] as Array<any>).map(IntentPlanEvidenceFromJSON)),
        'inputKind': json['input_kind'],
        'issues': json['issues'] == null ? undefined : IssueSetFromJSON(json['issues']),
        'requiresIntentPlanner': json['requires_intent_planner'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': SourceInputFromJSON(json['source']),
        'status': json['status'],
    };
}

export function IntentClassificationResponseToJSON(json: any): IntentClassificationResponse {
    return IntentClassificationResponseToJSONTyped(json, false);
}

export function IntentClassificationResponseToJSONTyped(value?: IntentClassificationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'candidate_product_families': value['candidateProductFamilies'],
        'confidence': value['confidence'],
        'detected_product_categories': value['detectedProductCategories'],
        'detected_product_families': value['detectedProductFamilies'],
        'deterministic': value['deterministic'],
        'evidence': value['evidence'] == null ? undefined : ((value['evidence'] as Array<any>).map(IntentPlanEvidenceToJSON)),
        'input_kind': value['inputKind'],
        'issues': IssueSetToJSON(value['issues']),
        'requires_intent_planner': value['requiresIntentPlanner'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': SourceInputToJSON(value['source']),
        'status': value['status'],
    };
}
