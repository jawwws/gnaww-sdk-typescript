"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterpretPrintRequirementResponseStatusEnum = exports.InterpretPrintRequirementResponseSpecmatchPerformedEnum = exports.InterpretPrintRequirementResponseSchemaVersionEnum = exports.InterpretPrintRequirementResponseSchemaNameEnum = exports.InterpretPrintRequirementResponseRouteEnum = exports.InterpretPrintRequirementResponseRequestedGjsVersionEnum = exports.InterpretPrintRequirementResponseReasonEnum = exports.InterpretPrintRequirementResponseProducerSelectionPerformedEnum = exports.InterpretPrintRequirementResponsePersistencePerformedEnum = exports.InterpretPrintRequirementResponseKnownProductFamiliesEnum = void 0;
exports.instanceOfInterpretPrintRequirementResponse = instanceOfInterpretPrintRequirementResponse;
exports.InterpretPrintRequirementResponseFromJSON = InterpretPrintRequirementResponseFromJSON;
exports.InterpretPrintRequirementResponseFromJSONTyped = InterpretPrintRequirementResponseFromJSONTyped;
exports.InterpretPrintRequirementResponseToJSON = InterpretPrintRequirementResponseToJSON;
exports.InterpretPrintRequirementResponseToJSONTyped = InterpretPrintRequirementResponseToJSONTyped;
const ControlledInterpretationState_1 = require("./ControlledInterpretationState");
const PublicSpecMatchReadiness_1 = require("./PublicSpecMatchReadiness");
const Gjs_1 = require("./Gjs");
const PublicRecipeState_1 = require("./PublicRecipeState");
const GroundedProductMeaning_1 = require("./GroundedProductMeaning");
const IssueSet_1 = require("./IssueSet");
const PublicUseConditionReview_1 = require("./PublicUseConditionReview");
const IntentClassificationResponse_1 = require("./IntentClassificationResponse");
const ProductPackResponse_1 = require("./ProductPackResponse");
const SourceInput_1 = require("./SourceInput");
/**
 * @export
 */
exports.InterpretPrintRequirementResponseKnownProductFamiliesEnum = {
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
exports.InterpretPrintRequirementResponsePersistencePerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.InterpretPrintRequirementResponseProducerSelectionPerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.InterpretPrintRequirementResponseReasonEnum = {
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
exports.InterpretPrintRequirementResponseRequestedGjsVersionEnum = {
    _03: '0.3',
    _04: '0.4'
};
/**
 * @export
 */
exports.InterpretPrintRequirementResponseRouteEnum = {
    DeterministicReady: 'deterministic_ready',
    CanonicalisationGap: 'canonicalisation_gap',
    RecommendationReviewRequired: 'recommendation_review_required',
    NeedsReview: 'needs_review',
    Failed: 'failed'
};
/**
 * @export
 */
exports.InterpretPrintRequirementResponseSchemaNameEnum = {
    GnawwInterpretationResult: 'gnaww.interpretation_result'
};
/**
 * @export
 */
exports.InterpretPrintRequirementResponseSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * @export
 */
exports.InterpretPrintRequirementResponseSpecmatchPerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.InterpretPrintRequirementResponseStatusEnum = {
    CanonicalReady: 'canonical_ready',
    ReviewRequired: 'review_required',
    NeedsReview: 'needs_review',
    Failed: 'failed'
};
/**
 * Check if a given object implements the InterpretPrintRequirementResponse interface.
 */
function instanceOfInterpretPrintRequirementResponse(value) {
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
function InterpretPrintRequirementResponseFromJSON(json) {
    return InterpretPrintRequirementResponseFromJSONTyped(json, false);
}
function InterpretPrintRequirementResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'classification': (0, IntentClassificationResponse_1.IntentClassificationResponseFromJSON)(json['classification']),
        'controlledInterpretation': (0, ControlledInterpretationState_1.ControlledInterpretationStateFromJSON)(json['controlled_interpretation']),
        'gjs': json['gjs'] == null ? undefined : (0, Gjs_1.GjsFromJSON)(json['gjs']),
        'issues': json['issues'] == null ? undefined : (0, IssueSet_1.IssueSetFromJSON)(json['issues']),
        'knownProductFamilies': json['known_product_families'] == null ? undefined : json['known_product_families'],
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'persistencePerformed': json['persistence_performed'] == null ? undefined : json['persistence_performed'],
        'producerSelectionPerformed': json['producer_selection_performed'] == null ? undefined : json['producer_selection_performed'],
        'productMeaningReview': json['product_meaning_review'] == null ? undefined : (json['product_meaning_review'].map(GroundedProductMeaning_1.GroundedProductMeaningFromJSON)),
        'reason': json['reason'],
        'recipe': (0, PublicRecipeState_1.PublicRecipeStateFromJSON)(json['recipe']),
        'recommendationReview': json['recommendation_review'] == null ? undefined : (0, ProductPackResponse_1.ProductPackResponseFromJSON)(json['recommendation_review']),
        'requestedGjsVersion': json['requested_gjs_version'],
        'route': json['route'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': (0, SourceInput_1.SourceInputFromJSON)(json['source']),
        'specmatch': (0, PublicSpecMatchReadiness_1.PublicSpecMatchReadinessFromJSON)(json['specmatch']),
        'specmatchPerformed': json['specmatch_performed'] == null ? undefined : json['specmatch_performed'],
        'status': json['status'],
        'unresolvedFields': json['unresolved_fields'] == null ? undefined : json['unresolved_fields'],
        'useConditionReview': json['use_condition_review'] == null ? undefined : (json['use_condition_review'].map(PublicUseConditionReview_1.PublicUseConditionReviewFromJSON)),
    };
}
function InterpretPrintRequirementResponseToJSON(json) {
    return InterpretPrintRequirementResponseToJSONTyped(json, false);
}
function InterpretPrintRequirementResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'classification': (0, IntentClassificationResponse_1.IntentClassificationResponseToJSON)(value['classification']),
        'controlled_interpretation': (0, ControlledInterpretationState_1.ControlledInterpretationStateToJSON)(value['controlledInterpretation']),
        'gjs': (0, Gjs_1.GjsToJSON)(value['gjs']),
        'issues': (0, IssueSet_1.IssueSetToJSON)(value['issues']),
        'known_product_families': value['knownProductFamilies'],
        'next_actions': value['nextActions'],
        'persistence_performed': value['persistencePerformed'],
        'producer_selection_performed': value['producerSelectionPerformed'],
        'product_meaning_review': value['productMeaningReview'] == null ? undefined : (value['productMeaningReview'].map(GroundedProductMeaning_1.GroundedProductMeaningToJSON)),
        'reason': value['reason'],
        'recipe': (0, PublicRecipeState_1.PublicRecipeStateToJSON)(value['recipe']),
        'recommendation_review': (0, ProductPackResponse_1.ProductPackResponseToJSON)(value['recommendationReview']),
        'requested_gjs_version': value['requestedGjsVersion'],
        'route': value['route'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': (0, SourceInput_1.SourceInputToJSON)(value['source']),
        'specmatch': (0, PublicSpecMatchReadiness_1.PublicSpecMatchReadinessToJSON)(value['specmatch']),
        'specmatch_performed': value['specmatchPerformed'],
        'status': value['status'],
        'unresolved_fields': value['unresolvedFields'],
        'use_condition_review': value['useConditionReview'] == null ? undefined : (value['useConditionReview'].map(PublicUseConditionReview_1.PublicUseConditionReviewToJSON)),
    };
}
