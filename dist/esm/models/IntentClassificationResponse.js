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
import { IssueSetFromJSON, IssueSetToJSON, } from './IssueSet';
import { IntentPlanEvidenceFromJSON, IntentPlanEvidenceToJSON, } from './IntentPlanEvidence';
import { SourceInputFromJSON, SourceInputToJSON, } from './SourceInput';
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
};
/**
 * @export
 */
export const IntentClassificationResponseDetectedProductCategoriesEnum = {
    CommercialPrint: 'commercial_print',
    Apparel: 'apparel',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods',
    Unknown: 'unknown'
};
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
};
/**
 * @export
 */
export const IntentClassificationResponseDeterministicEnum = {
    True: true
};
/**
 * @export
 */
export const IntentClassificationResponseInputKindEnum = {
    ProductLed: 'product_led',
    OutcomeLed: 'outcome_led',
    Mixed: 'mixed',
    NeedsReview: 'needs_review'
};
/**
 * @export
 */
export const IntentClassificationResponseSchemaNameEnum = {
    JawwwsIntentClassificationResponse: 'jawwws.intent_classification_response'
};
/**
 * @export
 */
export const IntentClassificationResponseStatusEnum = {
    Classified: 'classified',
    NeedsReview: 'needs_review',
    Failed: 'failed'
};
/**
 * Check if a given object implements the IntentClassificationResponse interface.
 */
export function instanceOfIntentClassificationResponse(value) {
    if (!('confidence' in value) || value['confidence'] === undefined)
        return false;
    if (!('inputKind' in value) || value['inputKind'] === undefined)
        return false;
    if (!('requiresIntentPlanner' in value) || value['requiresIntentPlanner'] === undefined)
        return false;
    if (!('source' in value) || value['source'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function IntentClassificationResponseFromJSON(json) {
    return IntentClassificationResponseFromJSONTyped(json, false);
}
export function IntentClassificationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'candidateProductFamilies': json['candidate_product_families'] == null ? undefined : json['candidate_product_families'],
        'confidence': json['confidence'],
        'detectedProductCategories': json['detected_product_categories'] == null ? undefined : json['detected_product_categories'],
        'detectedProductFamilies': json['detected_product_families'] == null ? undefined : json['detected_product_families'],
        'deterministic': json['deterministic'] == null ? undefined : json['deterministic'],
        'evidence': json['evidence'] == null ? undefined : (json['evidence'].map(IntentPlanEvidenceFromJSON)),
        'inputKind': json['input_kind'],
        'issues': json['issues'] == null ? undefined : IssueSetFromJSON(json['issues']),
        'requiresIntentPlanner': json['requires_intent_planner'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': SourceInputFromJSON(json['source']),
        'status': json['status'],
    };
}
export function IntentClassificationResponseToJSON(json) {
    return IntentClassificationResponseToJSONTyped(json, false);
}
export function IntentClassificationResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'candidate_product_families': value['candidateProductFamilies'],
        'confidence': value['confidence'],
        'detected_product_categories': value['detectedProductCategories'],
        'detected_product_families': value['detectedProductFamilies'],
        'deterministic': value['deterministic'],
        'evidence': value['evidence'] == null ? undefined : (value['evidence'].map(IntentPlanEvidenceToJSON)),
        'input_kind': value['inputKind'],
        'issues': IssueSetToJSON(value['issues']),
        'requires_intent_planner': value['requiresIntentPlanner'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': SourceInputToJSON(value['source']),
        'status': value['status'],
    };
}
