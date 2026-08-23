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
exports.MatchPrintDemandUniverseResponseSpecmatchPerformedEnum = exports.MatchPrintDemandUniverseResponseSchemaVersionEnum = exports.MatchPrintDemandUniverseResponseSchemaNameEnum = exports.MatchPrintDemandUniverseResponseRankingPerformedEnum = exports.MatchPrintDemandUniverseResponseProducerUniverseEvaluatedEnum = exports.MatchPrintDemandUniverseResponseProducerSelectionPerformedEnum = exports.MatchPrintDemandUniverseResponseProducerAcceptancePerformedEnum = exports.MatchPrintDemandUniverseResponsePersistencePerformedEnum = exports.MatchPrintDemandUniverseResponseOutcomeEnum = exports.MatchPrintDemandUniverseResponseOrderCreatedEnum = exports.MatchPrintDemandUniverseResponseLivePricingPerformedEnum = exports.MatchPrintDemandUniverseResponseDemandBasisEnum = exports.MatchPrintDemandUniverseResponseAvailabilityCheckedEnum = void 0;
exports.instanceOfMatchPrintDemandUniverseResponse = instanceOfMatchPrintDemandUniverseResponse;
exports.MatchPrintDemandUniverseResponseFromJSON = MatchPrintDemandUniverseResponseFromJSON;
exports.MatchPrintDemandUniverseResponseFromJSONTyped = MatchPrintDemandUniverseResponseFromJSONTyped;
exports.MatchPrintDemandUniverseResponseToJSON = MatchPrintDemandUniverseResponseToJSON;
exports.MatchPrintDemandUniverseResponseToJSONTyped = MatchPrintDemandUniverseResponseToJSONTyped;
const PublicSpecMatchReadiness_1 = require("./PublicSpecMatchReadiness");
const PublicProducerUniverseCandidate_1 = require("./PublicProducerUniverseCandidate");
const PublicRecipeState_1 = require("./PublicRecipeState");
/**
 * @export
 */
exports.MatchPrintDemandUniverseResponseAvailabilityCheckedEnum = {
    False: false
};
/**
 * @export
 */
exports.MatchPrintDemandUniverseResponseDemandBasisEnum = {
    Recipe: 'recipe',
    Gjs: 'gjs'
};
/**
 * @export
 */
exports.MatchPrintDemandUniverseResponseLivePricingPerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.MatchPrintDemandUniverseResponseOrderCreatedEnum = {
    False: false
};
/**
 * @export
 */
exports.MatchPrintDemandUniverseResponseOutcomeEnum = {
    CapableProducerFound: 'capable_producer_found',
    ReviewRequired: 'review_required',
    NoCapableProducer: 'no_capable_producer'
};
/**
 * @export
 */
exports.MatchPrintDemandUniverseResponsePersistencePerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.MatchPrintDemandUniverseResponseProducerAcceptancePerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.MatchPrintDemandUniverseResponseProducerSelectionPerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.MatchPrintDemandUniverseResponseProducerUniverseEvaluatedEnum = {
    True: true
};
/**
 * @export
 */
exports.MatchPrintDemandUniverseResponseRankingPerformedEnum = {
    True: true
};
/**
 * @export
 */
exports.MatchPrintDemandUniverseResponseSchemaNameEnum = {
    GnawwSpecmatchUniverseResult: 'gnaww.specmatch_universe_result'
};
/**
 * @export
 */
exports.MatchPrintDemandUniverseResponseSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * @export
 */
exports.MatchPrintDemandUniverseResponseSpecmatchPerformedEnum = {
    True: true
};
/**
 * Check if a given object implements the MatchPrintDemandUniverseResponse interface.
 */
function instanceOfMatchPrintDemandUniverseResponse(value) {
    if (!('blockedCount' in value) || value['blockedCount'] === undefined)
        return false;
    if (!('confirmedCapableCount' in value) || value['confirmedCapableCount'] === undefined)
        return false;
    if (!('demandBasis' in value) || value['demandBasis'] === undefined)
        return false;
    if (!('outcome' in value) || value['outcome'] === undefined)
        return false;
    if (!('producerUniverseSize' in value) || value['producerUniverseSize'] === undefined)
        return false;
    if (!('readiness' in value) || value['readiness'] === undefined)
        return false;
    if (!('recipe' in value) || value['recipe'] === undefined)
        return false;
    if (!('reviewRequiredCount' in value) || value['reviewRequiredCount'] === undefined)
        return false;
    return true;
}
function MatchPrintDemandUniverseResponseFromJSON(json) {
    return MatchPrintDemandUniverseResponseFromJSONTyped(json, false);
}
function MatchPrintDemandUniverseResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'availabilityChecked': json['availability_checked'] == null ? undefined : json['availability_checked'],
        'bestCapableCandidate': json['best_capable_candidate'] == null ? undefined : (0, PublicProducerUniverseCandidate_1.PublicProducerUniverseCandidateFromJSON)(json['best_capable_candidate']),
        'blockedCount': json['blocked_count'],
        'candidates': json['candidates'] == null ? undefined : (json['candidates'].map(PublicProducerUniverseCandidate_1.PublicProducerUniverseCandidateFromJSON)),
        'confirmedCapableCount': json['confirmed_capable_count'],
        'demandBasis': json['demand_basis'],
        'leadingCandidate': json['leading_candidate'] == null ? undefined : (0, PublicProducerUniverseCandidate_1.PublicProducerUniverseCandidateFromJSON)(json['leading_candidate']),
        'livePricingPerformed': json['live_pricing_performed'] == null ? undefined : json['live_pricing_performed'],
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'orderCreated': json['order_created'] == null ? undefined : json['order_created'],
        'outcome': json['outcome'],
        'persistencePerformed': json['persistence_performed'] == null ? undefined : json['persistence_performed'],
        'producerAcceptancePerformed': json['producer_acceptance_performed'] == null ? undefined : json['producer_acceptance_performed'],
        'producerSelectionPerformed': json['producer_selection_performed'] == null ? undefined : json['producer_selection_performed'],
        'producerUniverseEvaluated': json['producer_universe_evaluated'] == null ? undefined : json['producer_universe_evaluated'],
        'producerUniverseSize': json['producer_universe_size'],
        'rankingPerformed': json['ranking_performed'] == null ? undefined : json['ranking_performed'],
        'readiness': (0, PublicSpecMatchReadiness_1.PublicSpecMatchReadinessFromJSON)(json['readiness']),
        'recipe': (0, PublicRecipeState_1.PublicRecipeStateFromJSON)(json['recipe']),
        'reviewRequiredCount': json['review_required_count'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'specmatchPerformed': json['specmatch_performed'] == null ? undefined : json['specmatch_performed'],
    };
}
function MatchPrintDemandUniverseResponseToJSON(json) {
    return MatchPrintDemandUniverseResponseToJSONTyped(json, false);
}
function MatchPrintDemandUniverseResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'availability_checked': value['availabilityChecked'],
        'best_capable_candidate': (0, PublicProducerUniverseCandidate_1.PublicProducerUniverseCandidateToJSON)(value['bestCapableCandidate']),
        'blocked_count': value['blockedCount'],
        'candidates': value['candidates'] == null ? undefined : (value['candidates'].map(PublicProducerUniverseCandidate_1.PublicProducerUniverseCandidateToJSON)),
        'confirmed_capable_count': value['confirmedCapableCount'],
        'demand_basis': value['demandBasis'],
        'leading_candidate': (0, PublicProducerUniverseCandidate_1.PublicProducerUniverseCandidateToJSON)(value['leadingCandidate']),
        'live_pricing_performed': value['livePricingPerformed'],
        'next_actions': value['nextActions'],
        'order_created': value['orderCreated'],
        'outcome': value['outcome'],
        'persistence_performed': value['persistencePerformed'],
        'producer_acceptance_performed': value['producerAcceptancePerformed'],
        'producer_selection_performed': value['producerSelectionPerformed'],
        'producer_universe_evaluated': value['producerUniverseEvaluated'],
        'producer_universe_size': value['producerUniverseSize'],
        'ranking_performed': value['rankingPerformed'],
        'readiness': (0, PublicSpecMatchReadiness_1.PublicSpecMatchReadinessToJSON)(value['readiness']),
        'recipe': (0, PublicRecipeState_1.PublicRecipeStateToJSON)(value['recipe']),
        'review_required_count': value['reviewRequiredCount'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'specmatch_performed': value['specmatchPerformed'],
    };
}
