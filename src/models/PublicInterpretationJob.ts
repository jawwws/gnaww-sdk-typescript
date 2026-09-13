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
import type { Gjs1 } from './Gjs1';
import {
    Gjs1FromJSON,
    Gjs1FromJSONTyped,
    Gjs1ToJSON,
    Gjs1ToJSONTyped,
} from './Gjs1';
import type { PublicInterpretationQuestion } from './PublicInterpretationQuestion';
import {
    PublicInterpretationQuestionFromJSON,
    PublicInterpretationQuestionFromJSONTyped,
    PublicInterpretationQuestionToJSON,
    PublicInterpretationQuestionToJSONTyped,
} from './PublicInterpretationQuestion';
import type { PublicSpecMatchReadiness } from './PublicSpecMatchReadiness';
import {
    PublicSpecMatchReadinessFromJSON,
    PublicSpecMatchReadinessFromJSONTyped,
    PublicSpecMatchReadinessToJSON,
    PublicSpecMatchReadinessToJSONTyped,
} from './PublicSpecMatchReadiness';
import type { PublicRecipeState } from './PublicRecipeState';
import {
    PublicRecipeStateFromJSON,
    PublicRecipeStateFromJSONTyped,
    PublicRecipeStateToJSON,
    PublicRecipeStateToJSONTyped,
} from './PublicRecipeState';
import type { PublicControlledProductionDefault } from './PublicControlledProductionDefault';
import {
    PublicControlledProductionDefaultFromJSON,
    PublicControlledProductionDefaultFromJSONTyped,
    PublicControlledProductionDefaultToJSON,
    PublicControlledProductionDefaultToJSONTyped,
} from './PublicControlledProductionDefault';
import type { PublicInterpretationFulfilmentState } from './PublicInterpretationFulfilmentState';
import {
    PublicInterpretationFulfilmentStateFromJSON,
    PublicInterpretationFulfilmentStateFromJSONTyped,
    PublicInterpretationFulfilmentStateToJSON,
    PublicInterpretationFulfilmentStateToJSONTyped,
} from './PublicInterpretationFulfilmentState';
import type { GroundedProductMeaning } from './GroundedProductMeaning';
import {
    GroundedProductMeaningFromJSON,
    GroundedProductMeaningFromJSONTyped,
    GroundedProductMeaningToJSON,
    GroundedProductMeaningToJSONTyped,
} from './GroundedProductMeaning';
import type { IssueSet } from './IssueSet';
import {
    IssueSetFromJSON,
    IssueSetFromJSONTyped,
    IssueSetToJSON,
    IssueSetToJSONTyped,
} from './IssueSet';
import type { PublicJobContextFact } from './PublicJobContextFact';
import {
    PublicJobContextFactFromJSON,
    PublicJobContextFactFromJSONTyped,
    PublicJobContextFactToJSON,
    PublicJobContextFactToJSONTyped,
} from './PublicJobContextFact';
import type { PublicUseConditionReview } from './PublicUseConditionReview';
import {
    PublicUseConditionReviewFromJSON,
    PublicUseConditionReviewFromJSONTyped,
    PublicUseConditionReviewToJSON,
    PublicUseConditionReviewToJSONTyped,
} from './PublicUseConditionReview';
import type { PublicUnderstoodRequirement } from './PublicUnderstoodRequirement';
import {
    PublicUnderstoodRequirementFromJSON,
    PublicUnderstoodRequirementFromJSONTyped,
    PublicUnderstoodRequirementToJSON,
    PublicUnderstoodRequirementToJSONTyped,
} from './PublicUnderstoodRequirement';
import type { PublicJobStructure } from './PublicJobStructure';
import {
    PublicJobStructureFromJSON,
    PublicJobStructureFromJSONTyped,
    PublicJobStructureToJSON,
    PublicJobStructureToJSONTyped,
} from './PublicJobStructure';

/**
 * One independently producible Job Proposal or canonical Job state.
 * @export
 * @interface PublicInterpretationJob
 */
export interface PublicInterpretationJob {
    /**
     *
     * @type {Array<PublicJobContextFact>}
     * @memberof PublicInterpretationJob
     */
    context?: Array<PublicJobContextFact>;
    /**
     *
     * @type {Array<PublicControlledProductionDefault>}
     * @memberof PublicInterpretationJob
     */
    controlledDefaults?: Array<PublicControlledProductionDefault>;
    /**
     *
     * @type {PublicInterpretationFulfilmentState}
     * @memberof PublicInterpretationJob
     */
    fulfilment?: PublicInterpretationFulfilmentState;
    /**
     *
     * @type {Gjs1}
     * @memberof PublicInterpretationJob
     */
    gjs?: Gjs1 | null;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationJob
     */
    groundedProductSummary?: string | null;
    /**
     *
     * @type {IssueSet}
     * @memberof PublicInterpretationJob
     */
    issues?: IssueSet;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationJob
     */
    jobId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof PublicInterpretationJob
     */
    nextActions?: Array<string>;
    /**
     *
     * @type {PublicInterpretationJobProductFamilyEnum}
     * @memberof PublicInterpretationJob
     */
    productFamily?: PublicInterpretationJobProductFamilyEnum | null;
    /**
     *
     * @type {Array<GroundedProductMeaning>}
     * @memberof PublicInterpretationJob
     */
    productMeaningReview?: Array<GroundedProductMeaning>;
    /**
     *
     * @type {Array<PublicInterpretationQuestion>}
     * @memberof PublicInterpretationJob
     */
    questions?: Array<PublicInterpretationQuestion>;
    /**
     *
     * @type {PublicRecipeState}
     * @memberof PublicInterpretationJob
     */
    recipe?: PublicRecipeState;
    /**
     *
     * @type {PublicSpecMatchReadiness}
     * @memberof PublicInterpretationJob
     */
    specmatch?: PublicSpecMatchReadiness;
    /**
     *
     * @type {PublicInterpretationJobStatusEnum}
     * @memberof PublicInterpretationJob
     */
    status: PublicInterpretationJobStatusEnum;
    /**
     *
     * @type {Array<PublicJobStructure>}
     * @memberof PublicInterpretationJob
     */
    structure?: Array<PublicJobStructure>;
    /**
     *
     * @type {PublicUnderstoodRequirement}
     * @memberof PublicInterpretationJob
     */
    understoodRequirement?: PublicUnderstoodRequirement | null;
    /**
     *
     * @type {boolean}
     * @memberof PublicInterpretationJob
     */
    universeMatchReady?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof PublicInterpretationJob
     */
    unresolvedFields?: Array<string>;
    /**
     *
     * @type {Array<PublicUseConditionReview>}
     * @memberof PublicInterpretationJob
     */
    useConditionReview?: Array<PublicUseConditionReview>;
}


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
} as const;
export type PublicInterpretationJobProductFamilyEnum = typeof PublicInterpretationJobProductFamilyEnum[keyof typeof PublicInterpretationJobProductFamilyEnum];

/**
 * @export
 */
export const PublicInterpretationJobStatusEnum = {
    CanonicalReady: 'canonical_ready',
    ReviewRequired: 'review_required',
    NeedsReview: 'needs_review',
    Failed: 'failed'
} as const;
export type PublicInterpretationJobStatusEnum = typeof PublicInterpretationJobStatusEnum[keyof typeof PublicInterpretationJobStatusEnum];


/**
 * Check if a given object implements the PublicInterpretationJob interface.
 */
export function instanceOfPublicInterpretationJob(value: object): value is PublicInterpretationJob {
    if (!('jobId' in value) || value['jobId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function PublicInterpretationJobFromJSON(json: any): PublicInterpretationJob {
    return PublicInterpretationJobFromJSONTyped(json, false);
}

export function PublicInterpretationJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationJob {
    if (json == null) {
        return json;
    }
    return {

        'context': json['context'] == null ? undefined : ((json['context'] as Array<any>).map(PublicJobContextFactFromJSON)),
        'controlledDefaults': json['controlled_defaults'] == null ? undefined : ((json['controlled_defaults'] as Array<any>).map(PublicControlledProductionDefaultFromJSON)),
        'fulfilment': json['fulfilment'] == null ? undefined : PublicInterpretationFulfilmentStateFromJSON(json['fulfilment']),
        'gjs': json['gjs'] == null ? undefined : Gjs1FromJSON(json['gjs']),
        'groundedProductSummary': json['grounded_product_summary'] == null ? undefined : json['grounded_product_summary'],
        'issues': json['issues'] == null ? undefined : IssueSetFromJSON(json['issues']),
        'jobId': json['job_id'],
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'productFamily': json['product_family'] == null ? undefined : json['product_family'],
        'productMeaningReview': json['product_meaning_review'] == null ? undefined : ((json['product_meaning_review'] as Array<any>).map(GroundedProductMeaningFromJSON)),
        'questions': json['questions'] == null ? undefined : ((json['questions'] as Array<any>).map(PublicInterpretationQuestionFromJSON)),
        'recipe': json['recipe'] == null ? undefined : PublicRecipeStateFromJSON(json['recipe']),
        'specmatch': json['specmatch'] == null ? undefined : PublicSpecMatchReadinessFromJSON(json['specmatch']),
        'status': json['status'],
        'structure': json['structure'] == null ? undefined : ((json['structure'] as Array<any>).map(PublicJobStructureFromJSON)),
        'understoodRequirement': json['understood_requirement'] == null ? undefined : PublicUnderstoodRequirementFromJSON(json['understood_requirement']),
        'universeMatchReady': json['universe_match_ready'] == null ? undefined : json['universe_match_ready'],
        'unresolvedFields': json['unresolved_fields'] == null ? undefined : json['unresolved_fields'],
        'useConditionReview': json['use_condition_review'] == null ? undefined : ((json['use_condition_review'] as Array<any>).map(PublicUseConditionReviewFromJSON)),
    };
}

export function PublicInterpretationJobToJSON(json: any): PublicInterpretationJob {
    return PublicInterpretationJobToJSONTyped(json, false);
}

export function PublicInterpretationJobToJSONTyped(value?: PublicInterpretationJob | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'context': value['context'] == null ? undefined : ((value['context'] as Array<any>).map(PublicJobContextFactToJSON)),
        'controlled_defaults': value['controlledDefaults'] == null ? undefined : ((value['controlledDefaults'] as Array<any>).map(PublicControlledProductionDefaultToJSON)),
        'fulfilment': PublicInterpretationFulfilmentStateToJSON(value['fulfilment']),
        'gjs': Gjs1ToJSON(value['gjs']),
        'grounded_product_summary': value['groundedProductSummary'],
        'issues': IssueSetToJSON(value['issues']),
        'job_id': value['jobId'],
        'next_actions': value['nextActions'],
        'product_family': value['productFamily'],
        'product_meaning_review': value['productMeaningReview'] == null ? undefined : ((value['productMeaningReview'] as Array<any>).map(GroundedProductMeaningToJSON)),
        'questions': value['questions'] == null ? undefined : ((value['questions'] as Array<any>).map(PublicInterpretationQuestionToJSON)),
        'recipe': PublicRecipeStateToJSON(value['recipe']),
        'specmatch': PublicSpecMatchReadinessToJSON(value['specmatch']),
        'status': value['status'],
        'structure': value['structure'] == null ? undefined : ((value['structure'] as Array<any>).map(PublicJobStructureToJSON)),
        'understood_requirement': PublicUnderstoodRequirementToJSON(value['understoodRequirement']),
        'universe_match_ready': value['universeMatchReady'],
        'unresolved_fields': value['unresolvedFields'],
        'use_condition_review': value['useConditionReview'] == null ? undefined : ((value['useConditionReview'] as Array<any>).map(PublicUseConditionReviewToJSON)),
    };
}
