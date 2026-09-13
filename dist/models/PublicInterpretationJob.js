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
exports.PublicInterpretationJobStatusEnum = exports.PublicInterpretationJobProductFamilyEnum = void 0;
exports.instanceOfPublicInterpretationJob = instanceOfPublicInterpretationJob;
exports.PublicInterpretationJobFromJSON = PublicInterpretationJobFromJSON;
exports.PublicInterpretationJobFromJSONTyped = PublicInterpretationJobFromJSONTyped;
exports.PublicInterpretationJobToJSON = PublicInterpretationJobToJSON;
exports.PublicInterpretationJobToJSONTyped = PublicInterpretationJobToJSONTyped;
const Gjs1_1 = require("./Gjs1");
const PublicInterpretationQuestion_1 = require("./PublicInterpretationQuestion");
const PublicSpecMatchReadiness_1 = require("./PublicSpecMatchReadiness");
const PublicRecipeState_1 = require("./PublicRecipeState");
const PublicControlledProductionDefault_1 = require("./PublicControlledProductionDefault");
const PublicInterpretationFulfilmentState_1 = require("./PublicInterpretationFulfilmentState");
const GroundedProductMeaning_1 = require("./GroundedProductMeaning");
const IssueSet_1 = require("./IssueSet");
const PublicJobContextFact_1 = require("./PublicJobContextFact");
const PublicUseConditionReview_1 = require("./PublicUseConditionReview");
const PublicUnderstoodRequirement_1 = require("./PublicUnderstoodRequirement");
const PublicJobStructure_1 = require("./PublicJobStructure");
/**
 * @export
 */
exports.PublicInterpretationJobProductFamilyEnum = {
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
exports.PublicInterpretationJobStatusEnum = {
    CanonicalReady: 'canonical_ready',
    ReviewRequired: 'review_required',
    NeedsReview: 'needs_review',
    Failed: 'failed'
};
/**
 * Check if a given object implements the PublicInterpretationJob interface.
 */
function instanceOfPublicInterpretationJob(value) {
    if (!('jobId' in value) || value['jobId'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function PublicInterpretationJobFromJSON(json) {
    return PublicInterpretationJobFromJSONTyped(json, false);
}
function PublicInterpretationJobFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'context': json['context'] == null ? undefined : (json['context'].map(PublicJobContextFact_1.PublicJobContextFactFromJSON)),
        'controlledDefaults': json['controlled_defaults'] == null ? undefined : (json['controlled_defaults'].map(PublicControlledProductionDefault_1.PublicControlledProductionDefaultFromJSON)),
        'fulfilment': json['fulfilment'] == null ? undefined : (0, PublicInterpretationFulfilmentState_1.PublicInterpretationFulfilmentStateFromJSON)(json['fulfilment']),
        'gjs': json['gjs'] == null ? undefined : (0, Gjs1_1.Gjs1FromJSON)(json['gjs']),
        'groundedProductSummary': json['grounded_product_summary'] == null ? undefined : json['grounded_product_summary'],
        'issues': json['issues'] == null ? undefined : (0, IssueSet_1.IssueSetFromJSON)(json['issues']),
        'jobId': json['job_id'],
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'productFamily': json['product_family'] == null ? undefined : json['product_family'],
        'productMeaningReview': json['product_meaning_review'] == null ? undefined : (json['product_meaning_review'].map(GroundedProductMeaning_1.GroundedProductMeaningFromJSON)),
        'questions': json['questions'] == null ? undefined : (json['questions'].map(PublicInterpretationQuestion_1.PublicInterpretationQuestionFromJSON)),
        'recipe': json['recipe'] == null ? undefined : (0, PublicRecipeState_1.PublicRecipeStateFromJSON)(json['recipe']),
        'specmatch': json['specmatch'] == null ? undefined : (0, PublicSpecMatchReadiness_1.PublicSpecMatchReadinessFromJSON)(json['specmatch']),
        'status': json['status'],
        'structure': json['structure'] == null ? undefined : (json['structure'].map(PublicJobStructure_1.PublicJobStructureFromJSON)),
        'understoodRequirement': json['understood_requirement'] == null ? undefined : (0, PublicUnderstoodRequirement_1.PublicUnderstoodRequirementFromJSON)(json['understood_requirement']),
        'universeMatchReady': json['universe_match_ready'] == null ? undefined : json['universe_match_ready'],
        'unresolvedFields': json['unresolved_fields'] == null ? undefined : json['unresolved_fields'],
        'useConditionReview': json['use_condition_review'] == null ? undefined : (json['use_condition_review'].map(PublicUseConditionReview_1.PublicUseConditionReviewFromJSON)),
    };
}
function PublicInterpretationJobToJSON(json) {
    return PublicInterpretationJobToJSONTyped(json, false);
}
function PublicInterpretationJobToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'context': value['context'] == null ? undefined : (value['context'].map(PublicJobContextFact_1.PublicJobContextFactToJSON)),
        'controlled_defaults': value['controlledDefaults'] == null ? undefined : (value['controlledDefaults'].map(PublicControlledProductionDefault_1.PublicControlledProductionDefaultToJSON)),
        'fulfilment': (0, PublicInterpretationFulfilmentState_1.PublicInterpretationFulfilmentStateToJSON)(value['fulfilment']),
        'gjs': (0, Gjs1_1.Gjs1ToJSON)(value['gjs']),
        'grounded_product_summary': value['groundedProductSummary'],
        'issues': (0, IssueSet_1.IssueSetToJSON)(value['issues']),
        'job_id': value['jobId'],
        'next_actions': value['nextActions'],
        'product_family': value['productFamily'],
        'product_meaning_review': value['productMeaningReview'] == null ? undefined : (value['productMeaningReview'].map(GroundedProductMeaning_1.GroundedProductMeaningToJSON)),
        'questions': value['questions'] == null ? undefined : (value['questions'].map(PublicInterpretationQuestion_1.PublicInterpretationQuestionToJSON)),
        'recipe': (0, PublicRecipeState_1.PublicRecipeStateToJSON)(value['recipe']),
        'specmatch': (0, PublicSpecMatchReadiness_1.PublicSpecMatchReadinessToJSON)(value['specmatch']),
        'status': value['status'],
        'structure': value['structure'] == null ? undefined : (value['structure'].map(PublicJobStructure_1.PublicJobStructureToJSON)),
        'understood_requirement': (0, PublicUnderstoodRequirement_1.PublicUnderstoodRequirementToJSON)(value['understoodRequirement']),
        'universe_match_ready': value['universeMatchReady'],
        'unresolved_fields': value['unresolvedFields'],
        'use_condition_review': value['useConditionReview'] == null ? undefined : (value['useConditionReview'].map(PublicUseConditionReview_1.PublicUseConditionReviewToJSON)),
    };
}
