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
import { PublicSpecMatchReadinessFromJSON, PublicSpecMatchReadinessToJSON, } from './PublicSpecMatchReadiness';
import { PublicRecipeStateFromJSON, PublicRecipeStateToJSON, } from './PublicRecipeState';
import { IssueSetFromJSON, IssueSetToJSON, } from './IssueSet';
import { SourceInputFromJSON, SourceInputToJSON, } from './SourceInput';
import { PrintJobSpecificationV04FromJSON, PrintJobSpecificationV04ToJSON, } from './PrintJobSpecificationV04';
import { PublicClarificationQuestionFromJSON, PublicClarificationQuestionToJSON, } from './PublicClarificationQuestion';
import { PublicFulfilmentStateFromJSON, PublicFulfilmentStateToJSON, } from './PublicFulfilmentState';
/**
 * @export
 */
export const ContinuePrintRequirementResponsePersistencePerformedEnum = {
    False: false
};
/**
 * @export
 */
export const ContinuePrintRequirementResponseProducerSelectionPerformedEnum = {
    False: false
};
/**
 * @export
 */
export const ContinuePrintRequirementResponseProductFamilyEnum = {
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
export const ContinuePrintRequirementResponseSchemaNameEnum = {
    GnawwInterpretationContinuationResult: 'gnaww.interpretation_continuation_result'
};
/**
 * @export
 */
export const ContinuePrintRequirementResponseSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * @export
 */
export const ContinuePrintRequirementResponseSpecmatchPerformedEnum = {
    False: false
};
/**
 * @export
 */
export const ContinuePrintRequirementResponseStatusEnum = {
    ReviewRequired: 'review_required',
    SpecmatchReady: 'specmatch_ready',
    Failed: 'failed'
};
/**
 * Check if a given object implements the ContinuePrintRequirementResponse interface.
 */
export function instanceOfContinuePrintRequirementResponse(value) {
    if (!('recipe' in value) || value['recipe'] === undefined)
        return false;
    if (!('source' in value) || value['source'] === undefined)
        return false;
    if (!('specmatch' in value) || value['specmatch'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function ContinuePrintRequirementResponseFromJSON(json) {
    return ContinuePrintRequirementResponseFromJSONTyped(json, false);
}
export function ContinuePrintRequirementResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'fulfilment': json['fulfilment'] == null ? undefined : PublicFulfilmentStateFromJSON(json['fulfilment']),
        'gjs': json['gjs'] == null ? undefined : PrintJobSpecificationV04FromJSON(json['gjs']),
        'issues': json['issues'] == null ? undefined : IssueSetFromJSON(json['issues']),
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'persistencePerformed': json['persistence_performed'] == null ? undefined : json['persistence_performed'],
        'producerSelectionPerformed': json['producer_selection_performed'] == null ? undefined : json['producer_selection_performed'],
        'productFamily': json['product_family'] == null ? undefined : json['product_family'],
        'questions': json['questions'] == null ? undefined : (json['questions'].map(PublicClarificationQuestionFromJSON)),
        'recipe': PublicRecipeStateFromJSON(json['recipe']),
        'remainingQuestionKeys': json['remaining_question_keys'] == null ? undefined : json['remaining_question_keys'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': SourceInputFromJSON(json['source']),
        'specmatch': PublicSpecMatchReadinessFromJSON(json['specmatch']),
        'specmatchPerformed': json['specmatch_performed'] == null ? undefined : json['specmatch_performed'],
        'status': json['status'],
        'universeMatchReady': json['universe_match_ready'] == null ? undefined : json['universe_match_ready'],
    };
}
export function ContinuePrintRequirementResponseToJSON(json) {
    return ContinuePrintRequirementResponseToJSONTyped(json, false);
}
export function ContinuePrintRequirementResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'fulfilment': PublicFulfilmentStateToJSON(value['fulfilment']),
        'gjs': PrintJobSpecificationV04ToJSON(value['gjs']),
        'issues': IssueSetToJSON(value['issues']),
        'next_actions': value['nextActions'],
        'persistence_performed': value['persistencePerformed'],
        'producer_selection_performed': value['producerSelectionPerformed'],
        'product_family': value['productFamily'],
        'questions': value['questions'] == null ? undefined : (value['questions'].map(PublicClarificationQuestionToJSON)),
        'recipe': PublicRecipeStateToJSON(value['recipe']),
        'remaining_question_keys': value['remainingQuestionKeys'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': SourceInputToJSON(value['source']),
        'specmatch': PublicSpecMatchReadinessToJSON(value['specmatch']),
        'specmatch_performed': value['specmatchPerformed'],
        'status': value['status'],
        'universe_match_ready': value['universeMatchReady'],
    };
}
