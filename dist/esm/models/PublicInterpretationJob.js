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
import { Gjs1FromJSON, Gjs1ToJSON, } from './Gjs1';
import { PublicInterpretationQuestionFromJSON, PublicInterpretationQuestionToJSON, } from './PublicInterpretationQuestion';
import { PublicSpecMatchReadinessFromJSON, PublicSpecMatchReadinessToJSON, } from './PublicSpecMatchReadiness';
import { PublicRecipeStateFromJSON, PublicRecipeStateToJSON, } from './PublicRecipeState';
import { PublicControlledProductionDefaultFromJSON, PublicControlledProductionDefaultToJSON, } from './PublicControlledProductionDefault';
import { PublicInterpretationFulfilmentStateFromJSON, PublicInterpretationFulfilmentStateToJSON, } from './PublicInterpretationFulfilmentState';
import { GroundedProductMeaningFromJSON, GroundedProductMeaningToJSON, } from './GroundedProductMeaning';
import { IssueSetFromJSON, IssueSetToJSON, } from './IssueSet';
import { PublicJobContextFactFromJSON, PublicJobContextFactToJSON, } from './PublicJobContextFact';
import { PublicUseConditionReviewFromJSON, PublicUseConditionReviewToJSON, } from './PublicUseConditionReview';
import { PublicUnderstoodRequirementFromJSON, PublicUnderstoodRequirementToJSON, } from './PublicUnderstoodRequirement';
import { PublicJobStructureFromJSON, PublicJobStructureToJSON, } from './PublicJobStructure';
/**
 * @export
 */
export const PublicInterpretationJobProductFamilyEnum = {
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
export const PublicInterpretationJobStatusEnum = {
    CanonicalReady: 'canonical_ready',
    ReviewRequired: 'review_required',
    NeedsReview: 'needs_review',
    Failed: 'failed'
};
/**
 * Check if a given object implements the PublicInterpretationJob interface.
 */
export function instanceOfPublicInterpretationJob(value) {
    if (!('jobId' in value) || value['jobId'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function PublicInterpretationJobFromJSON(json) {
    return PublicInterpretationJobFromJSONTyped(json, false);
}
export function PublicInterpretationJobFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'context': json['context'] == null ? undefined : (json['context'].map(PublicJobContextFactFromJSON)),
        'controlledDefaults': json['controlled_defaults'] == null ? undefined : (json['controlled_defaults'].map(PublicControlledProductionDefaultFromJSON)),
        'fulfilment': json['fulfilment'] == null ? undefined : PublicInterpretationFulfilmentStateFromJSON(json['fulfilment']),
        'gjs': json['gjs'] == null ? undefined : Gjs1FromJSON(json['gjs']),
        'groundedProductSummary': json['grounded_product_summary'] == null ? undefined : json['grounded_product_summary'],
        'issues': json['issues'] == null ? undefined : IssueSetFromJSON(json['issues']),
        'jobId': json['job_id'],
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'productFamily': json['product_family'] == null ? undefined : json['product_family'],
        'productMeaningReview': json['product_meaning_review'] == null ? undefined : (json['product_meaning_review'].map(GroundedProductMeaningFromJSON)),
        'questions': json['questions'] == null ? undefined : (json['questions'].map(PublicInterpretationQuestionFromJSON)),
        'recipe': json['recipe'] == null ? undefined : PublicRecipeStateFromJSON(json['recipe']),
        'specmatch': json['specmatch'] == null ? undefined : PublicSpecMatchReadinessFromJSON(json['specmatch']),
        'status': json['status'],
        'structure': json['structure'] == null ? undefined : (json['structure'].map(PublicJobStructureFromJSON)),
        'understoodRequirement': json['understood_requirement'] == null ? undefined : PublicUnderstoodRequirementFromJSON(json['understood_requirement']),
        'universeMatchReady': json['universe_match_ready'] == null ? undefined : json['universe_match_ready'],
        'unresolvedFields': json['unresolved_fields'] == null ? undefined : json['unresolved_fields'],
        'useConditionReview': json['use_condition_review'] == null ? undefined : (json['use_condition_review'].map(PublicUseConditionReviewFromJSON)),
    };
}
export function PublicInterpretationJobToJSON(json) {
    return PublicInterpretationJobToJSONTyped(json, false);
}
export function PublicInterpretationJobToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'context': value['context'] == null ? undefined : (value['context'].map(PublicJobContextFactToJSON)),
        'controlled_defaults': value['controlledDefaults'] == null ? undefined : (value['controlledDefaults'].map(PublicControlledProductionDefaultToJSON)),
        'fulfilment': PublicInterpretationFulfilmentStateToJSON(value['fulfilment']),
        'gjs': Gjs1ToJSON(value['gjs']),
        'grounded_product_summary': value['groundedProductSummary'],
        'issues': IssueSetToJSON(value['issues']),
        'job_id': value['jobId'],
        'next_actions': value['nextActions'],
        'product_family': value['productFamily'],
        'product_meaning_review': value['productMeaningReview'] == null ? undefined : (value['productMeaningReview'].map(GroundedProductMeaningToJSON)),
        'questions': value['questions'] == null ? undefined : (value['questions'].map(PublicInterpretationQuestionToJSON)),
        'recipe': PublicRecipeStateToJSON(value['recipe']),
        'specmatch': PublicSpecMatchReadinessToJSON(value['specmatch']),
        'status': value['status'],
        'structure': value['structure'] == null ? undefined : (value['structure'].map(PublicJobStructureToJSON)),
        'understood_requirement': PublicUnderstoodRequirementToJSON(value['understoodRequirement']),
        'universe_match_ready': value['universeMatchReady'],
        'unresolved_fields': value['unresolvedFields'],
        'use_condition_review': value['useConditionReview'] == null ? undefined : (value['useConditionReview'].map(PublicUseConditionReviewToJSON)),
    };
}
