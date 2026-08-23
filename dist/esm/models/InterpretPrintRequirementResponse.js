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
import { ControlledInterpretationStateFromJSON, ControlledInterpretationStateToJSON, } from './ControlledInterpretationState';
import { PublicSpecMatchReadinessFromJSON, PublicSpecMatchReadinessToJSON, } from './PublicSpecMatchReadiness';
import { GjsFromJSON, GjsToJSON, } from './Gjs';
import { PublicRecipeStateFromJSON, PublicRecipeStateToJSON, } from './PublicRecipeState';
import { GroundedProductMeaningFromJSON, GroundedProductMeaningToJSON, } from './GroundedProductMeaning';
import { IssueSetFromJSON, IssueSetToJSON, } from './IssueSet';
import { PublicUseConditionReviewFromJSON, PublicUseConditionReviewToJSON, } from './PublicUseConditionReview';
import { IntentClassificationResponseFromJSON, IntentClassificationResponseToJSON, } from './IntentClassificationResponse';
import { ProductPackResponseFromJSON, ProductPackResponseToJSON, } from './ProductPackResponse';
import { SourceInputFromJSON, SourceInputToJSON, } from './SourceInput';
/**
 * @export
 */
export const InterpretPrintRequirementResponseKnownProductFamiliesEnum = {
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
export const InterpretPrintRequirementResponsePersistencePerformedEnum = {
    False: false
};
/**
 * @export
 */
export const InterpretPrintRequirementResponseProducerSelectionPerformedEnum = {
    False: false
};
/**
 * @export
 */
export const InterpretPrintRequirementResponseReasonEnum = {
    DeterministicTransformSufficient: 'deterministic_transform_sufficient',
    KnownFamilyNotCanonicalised: 'known_family_not_canonicalised',
    MultipleProductFamiliesNeedOrchestration: 'multiple_product_families_need_orchestration',
    DeterministicTransformFailed: 'deterministic_transform_failed',
    IntentPlannerRequired: 'intent_planner_required',
    ClassificationNeedsReview: 'classification_needs_review',
    ClassificationFailed: 'classification_failed'
};
/**
 * @export
 */
export const InterpretPrintRequirementResponseRequestedGjsVersionEnum = {
    _03: '0.3',
    _04: '0.4'
};
/**
 * @export
 */
export const InterpretPrintRequirementResponseRouteEnum = {
    DeterministicReady: 'deterministic_ready',
    CanonicalisationGap: 'canonicalisation_gap',
    RecommendationReviewRequired: 'recommendation_review_required',
    NeedsReview: 'needs_review',
    Failed: 'failed'
};
/**
 * @export
 */
export const InterpretPrintRequirementResponseSchemaNameEnum = {
    GnawwInterpretationResult: 'gnaww.interpretation_result'
};
/**
 * @export
 */
export const InterpretPrintRequirementResponseSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * @export
 */
export const InterpretPrintRequirementResponseSpecmatchPerformedEnum = {
    False: false
};
/**
 * @export
 */
export const InterpretPrintRequirementResponseStatusEnum = {
    CanonicalReady: 'canonical_ready',
    ReviewRequired: 'review_required',
    NeedsReview: 'needs_review',
    Failed: 'failed'
};
/**
 * Check if a given object implements the InterpretPrintRequirementResponse interface.
 */
export function instanceOfInterpretPrintRequirementResponse(value) {
    if (!('classification' in value) || value['classification'] === undefined)
        return false;
    if (!('controlledInterpretation' in value) || value['controlledInterpretation'] === undefined)
        return false;
    if (!('reason' in value) || value['reason'] === undefined)
        return false;
    if (!('recipe' in value) || value['recipe'] === undefined)
        return false;
    if (!('requestedGjsVersion' in value) || value['requestedGjsVersion'] === undefined)
        return false;
    if (!('route' in value) || value['route'] === undefined)
        return false;
    if (!('source' in value) || value['source'] === undefined)
        return false;
    if (!('specmatch' in value) || value['specmatch'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function InterpretPrintRequirementResponseFromJSON(json) {
    return InterpretPrintRequirementResponseFromJSONTyped(json, false);
}
export function InterpretPrintRequirementResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'classification': IntentClassificationResponseFromJSON(json['classification']),
        'controlledInterpretation': ControlledInterpretationStateFromJSON(json['controlled_interpretation']),
        'gjs': json['gjs'] == null ? undefined : GjsFromJSON(json['gjs']),
        'issues': json['issues'] == null ? undefined : IssueSetFromJSON(json['issues']),
        'knownProductFamilies': json['known_product_families'] == null ? undefined : json['known_product_families'],
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'persistencePerformed': json['persistence_performed'] == null ? undefined : json['persistence_performed'],
        'producerSelectionPerformed': json['producer_selection_performed'] == null ? undefined : json['producer_selection_performed'],
        'productMeaningReview': json['product_meaning_review'] == null ? undefined : (json['product_meaning_review'].map(GroundedProductMeaningFromJSON)),
        'reason': json['reason'],
        'recipe': PublicRecipeStateFromJSON(json['recipe']),
        'recommendationReview': json['recommendation_review'] == null ? undefined : ProductPackResponseFromJSON(json['recommendation_review']),
        'requestedGjsVersion': json['requested_gjs_version'],
        'route': json['route'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': SourceInputFromJSON(json['source']),
        'specmatch': PublicSpecMatchReadinessFromJSON(json['specmatch']),
        'specmatchPerformed': json['specmatch_performed'] == null ? undefined : json['specmatch_performed'],
        'status': json['status'],
        'unresolvedFields': json['unresolved_fields'] == null ? undefined : json['unresolved_fields'],
        'useConditionReview': json['use_condition_review'] == null ? undefined : (json['use_condition_review'].map(PublicUseConditionReviewFromJSON)),
    };
}
export function InterpretPrintRequirementResponseToJSON(json) {
    return InterpretPrintRequirementResponseToJSONTyped(json, false);
}
export function InterpretPrintRequirementResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'classification': IntentClassificationResponseToJSON(value['classification']),
        'controlled_interpretation': ControlledInterpretationStateToJSON(value['controlledInterpretation']),
        'gjs': GjsToJSON(value['gjs']),
        'issues': IssueSetToJSON(value['issues']),
        'known_product_families': value['knownProductFamilies'],
        'next_actions': value['nextActions'],
        'persistence_performed': value['persistencePerformed'],
        'producer_selection_performed': value['producerSelectionPerformed'],
        'product_meaning_review': value['productMeaningReview'] == null ? undefined : (value['productMeaningReview'].map(GroundedProductMeaningToJSON)),
        'reason': value['reason'],
        'recipe': PublicRecipeStateToJSON(value['recipe']),
        'recommendation_review': ProductPackResponseToJSON(value['recommendationReview']),
        'requested_gjs_version': value['requestedGjsVersion'],
        'route': value['route'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': SourceInputToJSON(value['source']),
        'specmatch': PublicSpecMatchReadinessToJSON(value['specmatch']),
        'specmatch_performed': value['specmatchPerformed'],
        'status': value['status'],
        'unresolved_fields': value['unresolvedFields'],
        'use_condition_review': value['useConditionReview'] == null ? undefined : (value['useConditionReview'].map(PublicUseConditionReviewToJSON)),
    };
}
