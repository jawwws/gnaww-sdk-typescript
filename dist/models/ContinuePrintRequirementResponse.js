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
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContinuePrintRequirementResponseStatusEnum = exports.ContinuePrintRequirementResponseSpecmatchPerformedEnum = exports.ContinuePrintRequirementResponseSchemaVersionEnum = exports.ContinuePrintRequirementResponseSchemaNameEnum = exports.ContinuePrintRequirementResponseProductFamilyEnum = exports.ContinuePrintRequirementResponseProducerSelectionPerformedEnum = exports.ContinuePrintRequirementResponsePersistencePerformedEnum = void 0;
exports.instanceOfContinuePrintRequirementResponse = instanceOfContinuePrintRequirementResponse;
exports.ContinuePrintRequirementResponseFromJSON = ContinuePrintRequirementResponseFromJSON;
exports.ContinuePrintRequirementResponseFromJSONTyped = ContinuePrintRequirementResponseFromJSONTyped;
exports.ContinuePrintRequirementResponseToJSON = ContinuePrintRequirementResponseToJSON;
exports.ContinuePrintRequirementResponseToJSONTyped = ContinuePrintRequirementResponseToJSONTyped;
const PublicSpecMatchReadiness_1 = require("./PublicSpecMatchReadiness");
const PublicRecipeState_1 = require("./PublicRecipeState");
const IssueSet_1 = require("./IssueSet");
const SourceInput_1 = require("./SourceInput");
const PrintJobSpecificationV04_1 = require("./PrintJobSpecificationV04");
const PublicClarificationQuestion_1 = require("./PublicClarificationQuestion");
const PublicFulfilmentState_1 = require("./PublicFulfilmentState");
/**
 * @export
 */
exports.ContinuePrintRequirementResponsePersistencePerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.ContinuePrintRequirementResponseProducerSelectionPerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.ContinuePrintRequirementResponseProductFamilyEnum = {
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
exports.ContinuePrintRequirementResponseSchemaNameEnum = {
    GnawwInterpretationContinuationResult: 'gnaww.interpretation_continuation_result'
};
/**
 * @export
 */
exports.ContinuePrintRequirementResponseSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * @export
 */
exports.ContinuePrintRequirementResponseSpecmatchPerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.ContinuePrintRequirementResponseStatusEnum = {
    ReviewRequired: 'review_required',
    SpecmatchReady: 'specmatch_ready',
    Failed: 'failed'
};
/**
 * Check if a given object implements the ContinuePrintRequirementResponse interface.
 */
function instanceOfContinuePrintRequirementResponse(value) {
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
function ContinuePrintRequirementResponseFromJSON(json) {
    return ContinuePrintRequirementResponseFromJSONTyped(json, false);
}
function ContinuePrintRequirementResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'fulfilment': json['fulfilment'] == null ? undefined : (0, PublicFulfilmentState_1.PublicFulfilmentStateFromJSON)(json['fulfilment']),
        'gjs': json['gjs'] == null ? undefined : (0, PrintJobSpecificationV04_1.PrintJobSpecificationV04FromJSON)(json['gjs']),
        'issues': json['issues'] == null ? undefined : (0, IssueSet_1.IssueSetFromJSON)(json['issues']),
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'persistencePerformed': json['persistence_performed'] == null ? undefined : json['persistence_performed'],
        'producerSelectionPerformed': json['producer_selection_performed'] == null ? undefined : json['producer_selection_performed'],
        'productFamily': json['product_family'] == null ? undefined : json['product_family'],
        'questions': json['questions'] == null ? undefined : (json['questions'].map(PublicClarificationQuestion_1.PublicClarificationQuestionFromJSON)),
        'recipe': (0, PublicRecipeState_1.PublicRecipeStateFromJSON)(json['recipe']),
        'remainingQuestionKeys': json['remaining_question_keys'] == null ? undefined : json['remaining_question_keys'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': (0, SourceInput_1.SourceInputFromJSON)(json['source']),
        'specmatch': (0, PublicSpecMatchReadiness_1.PublicSpecMatchReadinessFromJSON)(json['specmatch']),
        'specmatchPerformed': json['specmatch_performed'] == null ? undefined : json['specmatch_performed'],
        'status': json['status'],
        'universeMatchReady': json['universe_match_ready'] == null ? undefined : json['universe_match_ready'],
    };
}
function ContinuePrintRequirementResponseToJSON(json) {
    return ContinuePrintRequirementResponseToJSONTyped(json, false);
}
function ContinuePrintRequirementResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'fulfilment': (0, PublicFulfilmentState_1.PublicFulfilmentStateToJSON)(value['fulfilment']),
        'gjs': (0, PrintJobSpecificationV04_1.PrintJobSpecificationV04ToJSON)(value['gjs']),
        'issues': (0, IssueSet_1.IssueSetToJSON)(value['issues']),
        'next_actions': value['nextActions'],
        'persistence_performed': value['persistencePerformed'],
        'producer_selection_performed': value['producerSelectionPerformed'],
        'product_family': value['productFamily'],
        'questions': value['questions'] == null ? undefined : (value['questions'].map(PublicClarificationQuestion_1.PublicClarificationQuestionToJSON)),
        'recipe': (0, PublicRecipeState_1.PublicRecipeStateToJSON)(value['recipe']),
        'remaining_question_keys': value['remainingQuestionKeys'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': (0, SourceInput_1.SourceInputToJSON)(value['source']),
        'specmatch': (0, PublicSpecMatchReadiness_1.PublicSpecMatchReadinessToJSON)(value['specmatch']),
        'specmatch_performed': value['specmatchPerformed'],
        'status': value['status'],
        'universe_match_ready': value['universeMatchReady'],
    };
}
