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
import { PublicSpecMatchReadinessFromJSON, PublicSpecMatchReadinessToJSON, } from './PublicSpecMatchReadiness';
import { PublicProducerUniverseCandidateFromJSON, PublicProducerUniverseCandidateToJSON, } from './PublicProducerUniverseCandidate';
import { PublicRecipeStateFromJSON, PublicRecipeStateToJSON, } from './PublicRecipeState';
/**
 * @export
 */
export const MatchPrintDemandUniverseResponseAvailabilityCheckedEnum = {
    False: false
};
/**
 * @export
 */
export const MatchPrintDemandUniverseResponseDemandBasisEnum = {
    Recipe: 'recipe',
    Gjs: 'gjs'
};
/**
 * @export
 */
export const MatchPrintDemandUniverseResponseLivePricingPerformedEnum = {
    False: false
};
/**
 * @export
 */
export const MatchPrintDemandUniverseResponseOrderCreatedEnum = {
    False: false
};
/**
 * @export
 */
export const MatchPrintDemandUniverseResponseOutcomeEnum = {
    CapableProducerFound: 'capable_producer_found',
    ReviewRequired: 'review_required',
    NoCapableProducer: 'no_capable_producer'
};
/**
 * @export
 */
export const MatchPrintDemandUniverseResponsePersistencePerformedEnum = {
    False: false
};
/**
 * @export
 */
export const MatchPrintDemandUniverseResponseProducerAcceptancePerformedEnum = {
    False: false
};
/**
 * @export
 */
export const MatchPrintDemandUniverseResponseProducerSelectionPerformedEnum = {
    False: false
};
/**
 * @export
 */
export const MatchPrintDemandUniverseResponseProducerUniverseEvaluatedEnum = {
    True: true
};
/**
 * @export
 */
export const MatchPrintDemandUniverseResponseRankingPerformedEnum = {
    True: true
};
/**
 * @export
 */
export const MatchPrintDemandUniverseResponseSchemaNameEnum = {
    GnawwSpecmatchUniverseResult: 'gnaww.specmatch_universe_result'
};
/**
 * @export
 */
export const MatchPrintDemandUniverseResponseSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * @export
 */
export const MatchPrintDemandUniverseResponseSpecmatchPerformedEnum = {
    True: true
};
/**
 * Check if a given object implements the MatchPrintDemandUniverseResponse interface.
 */
export function instanceOfMatchPrintDemandUniverseResponse(value) {
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
export function MatchPrintDemandUniverseResponseFromJSON(json) {
    return MatchPrintDemandUniverseResponseFromJSONTyped(json, false);
}
export function MatchPrintDemandUniverseResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'availabilityChecked': json['availability_checked'] == null ? undefined : json['availability_checked'],
        'bestCapableCandidate': json['best_capable_candidate'] == null ? undefined : PublicProducerUniverseCandidateFromJSON(json['best_capable_candidate']),
        'blockedCount': json['blocked_count'],
        'candidates': json['candidates'] == null ? undefined : (json['candidates'].map(PublicProducerUniverseCandidateFromJSON)),
        'confirmedCapableCount': json['confirmed_capable_count'],
        'demandBasis': json['demand_basis'],
        'leadingCandidate': json['leading_candidate'] == null ? undefined : PublicProducerUniverseCandidateFromJSON(json['leading_candidate']),
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
        'readiness': PublicSpecMatchReadinessFromJSON(json['readiness']),
        'recipe': PublicRecipeStateFromJSON(json['recipe']),
        'reviewRequiredCount': json['review_required_count'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'specmatchPerformed': json['specmatch_performed'] == null ? undefined : json['specmatch_performed'],
    };
}
export function MatchPrintDemandUniverseResponseToJSON(json) {
    return MatchPrintDemandUniverseResponseToJSONTyped(json, false);
}
export function MatchPrintDemandUniverseResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'availability_checked': value['availabilityChecked'],
        'best_capable_candidate': PublicProducerUniverseCandidateToJSON(value['bestCapableCandidate']),
        'blocked_count': value['blockedCount'],
        'candidates': value['candidates'] == null ? undefined : (value['candidates'].map(PublicProducerUniverseCandidateToJSON)),
        'confirmed_capable_count': value['confirmedCapableCount'],
        'demand_basis': value['demandBasis'],
        'leading_candidate': PublicProducerUniverseCandidateToJSON(value['leadingCandidate']),
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
        'readiness': PublicSpecMatchReadinessToJSON(value['readiness']),
        'recipe': PublicRecipeStateToJSON(value['recipe']),
        'review_required_count': value['reviewRequiredCount'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'specmatch_performed': value['specmatchPerformed'],
    };
}
