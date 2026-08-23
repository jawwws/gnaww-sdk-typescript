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
import type { PublicSpecMatchReadiness } from './PublicSpecMatchReadiness';
import {
    PublicSpecMatchReadinessFromJSON,
    PublicSpecMatchReadinessFromJSONTyped,
    PublicSpecMatchReadinessToJSON,
    PublicSpecMatchReadinessToJSONTyped,
} from './PublicSpecMatchReadiness';
import type { PublicProducerUniverseCandidate } from './PublicProducerUniverseCandidate';
import {
    PublicProducerUniverseCandidateFromJSON,
    PublicProducerUniverseCandidateFromJSONTyped,
    PublicProducerUniverseCandidateToJSON,
    PublicProducerUniverseCandidateToJSONTyped,
} from './PublicProducerUniverseCandidate';
import type { PublicRecipeState } from './PublicRecipeState';
import {
    PublicRecipeStateFromJSON,
    PublicRecipeStateFromJSONTyped,
    PublicRecipeStateToJSON,
    PublicRecipeStateToJSONTyped,
} from './PublicRecipeState';

/**
 * Ranked capability result across an authorised producer universe.
 * @export
 * @interface MatchPrintDemandUniverseResponse
 */
export interface MatchPrintDemandUniverseResponse {
    /**
     *
     * @type {MatchPrintDemandUniverseResponseAvailabilityCheckedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    availabilityChecked?: MatchPrintDemandUniverseResponseAvailabilityCheckedEnum;
    /**
     *
     * @type {PublicProducerUniverseCandidate}
     * @memberof MatchPrintDemandUniverseResponse
     */
    bestCapableCandidate?: PublicProducerUniverseCandidate | null;
    /**
     *
     * @type {number}
     * @memberof MatchPrintDemandUniverseResponse
     */
    blockedCount: number;
    /**
     *
     * @type {Array<PublicProducerUniverseCandidate>}
     * @memberof MatchPrintDemandUniverseResponse
     */
    candidates?: Array<PublicProducerUniverseCandidate>;
    /**
     *
     * @type {number}
     * @memberof MatchPrintDemandUniverseResponse
     */
    confirmedCapableCount: number;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseDemandBasisEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    demandBasis: MatchPrintDemandUniverseResponseDemandBasisEnum;
    /**
     *
     * @type {PublicProducerUniverseCandidate}
     * @memberof MatchPrintDemandUniverseResponse
     */
    leadingCandidate?: PublicProducerUniverseCandidate | null;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseLivePricingPerformedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    livePricingPerformed?: MatchPrintDemandUniverseResponseLivePricingPerformedEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof MatchPrintDemandUniverseResponse
     */
    nextActions?: Array<string>;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseOrderCreatedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    orderCreated?: MatchPrintDemandUniverseResponseOrderCreatedEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseOutcomeEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    outcome: MatchPrintDemandUniverseResponseOutcomeEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseResponsePersistencePerformedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    persistencePerformed?: MatchPrintDemandUniverseResponsePersistencePerformedEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseProducerAcceptancePerformedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    producerAcceptancePerformed?: MatchPrintDemandUniverseResponseProducerAcceptancePerformedEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseProducerSelectionPerformedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    producerSelectionPerformed?: MatchPrintDemandUniverseResponseProducerSelectionPerformedEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseProducerUniverseEvaluatedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    producerUniverseEvaluated?: MatchPrintDemandUniverseResponseProducerUniverseEvaluatedEnum;
    /**
     *
     * @type {number}
     * @memberof MatchPrintDemandUniverseResponse
     */
    producerUniverseSize: number;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseRankingPerformedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    rankingPerformed?: MatchPrintDemandUniverseResponseRankingPerformedEnum;
    /**
     *
     * @type {PublicSpecMatchReadiness}
     * @memberof MatchPrintDemandUniverseResponse
     */
    readiness: PublicSpecMatchReadiness;
    /**
     *
     * @type {PublicRecipeState}
     * @memberof MatchPrintDemandUniverseResponse
     */
    recipe: PublicRecipeState;
    /**
     *
     * @type {number}
     * @memberof MatchPrintDemandUniverseResponse
     */
    reviewRequiredCount: number;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseSchemaNameEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    schemaName?: MatchPrintDemandUniverseResponseSchemaNameEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseSchemaVersionEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    schemaVersion?: MatchPrintDemandUniverseResponseSchemaVersionEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseResponseSpecmatchPerformedEnum}
     * @memberof MatchPrintDemandUniverseResponse
     */
    specmatchPerformed?: MatchPrintDemandUniverseResponseSpecmatchPerformedEnum;
}


/**
 * @export
 */
export const MatchPrintDemandUniverseResponseAvailabilityCheckedEnum = {
    False: false
} as const;
export type MatchPrintDemandUniverseResponseAvailabilityCheckedEnum = typeof MatchPrintDemandUniverseResponseAvailabilityCheckedEnum[keyof typeof MatchPrintDemandUniverseResponseAvailabilityCheckedEnum];

/**
 * @export
 */
export const MatchPrintDemandUniverseResponseDemandBasisEnum = {
    Recipe: 'recipe',
    Gjs: 'gjs'
} as const;
export type MatchPrintDemandUniverseResponseDemandBasisEnum = typeof MatchPrintDemandUniverseResponseDemandBasisEnum[keyof typeof MatchPrintDemandUniverseResponseDemandBasisEnum];

/**
 * @export
 */
export const MatchPrintDemandUniverseResponseLivePricingPerformedEnum = {
    False: false
} as const;
export type MatchPrintDemandUniverseResponseLivePricingPerformedEnum = typeof MatchPrintDemandUniverseResponseLivePricingPerformedEnum[keyof typeof MatchPrintDemandUniverseResponseLivePricingPerformedEnum];

/**
 * @export
 */
export const MatchPrintDemandUniverseResponseOrderCreatedEnum = {
    False: false
} as const;
export type MatchPrintDemandUniverseResponseOrderCreatedEnum = typeof MatchPrintDemandUniverseResponseOrderCreatedEnum[keyof typeof MatchPrintDemandUniverseResponseOrderCreatedEnum];

/**
 * @export
 */
export const MatchPrintDemandUniverseResponseOutcomeEnum = {
    CapableProducerFound: 'capable_producer_found',
    ReviewRequired: 'review_required',
    NoCapableProducer: 'no_capable_producer'
} as const;
export type MatchPrintDemandUniverseResponseOutcomeEnum = typeof MatchPrintDemandUniverseResponseOutcomeEnum[keyof typeof MatchPrintDemandUniverseResponseOutcomeEnum];

/**
 * @export
 */
export const MatchPrintDemandUniverseResponsePersistencePerformedEnum = {
    False: false
} as const;
export type MatchPrintDemandUniverseResponsePersistencePerformedEnum = typeof MatchPrintDemandUniverseResponsePersistencePerformedEnum[keyof typeof MatchPrintDemandUniverseResponsePersistencePerformedEnum];

/**
 * @export
 */
export const MatchPrintDemandUniverseResponseProducerAcceptancePerformedEnum = {
    False: false
} as const;
export type MatchPrintDemandUniverseResponseProducerAcceptancePerformedEnum = typeof MatchPrintDemandUniverseResponseProducerAcceptancePerformedEnum[keyof typeof MatchPrintDemandUniverseResponseProducerAcceptancePerformedEnum];

/**
 * @export
 */
export const MatchPrintDemandUniverseResponseProducerSelectionPerformedEnum = {
    False: false
} as const;
export type MatchPrintDemandUniverseResponseProducerSelectionPerformedEnum = typeof MatchPrintDemandUniverseResponseProducerSelectionPerformedEnum[keyof typeof MatchPrintDemandUniverseResponseProducerSelectionPerformedEnum];

/**
 * @export
 */
export const MatchPrintDemandUniverseResponseProducerUniverseEvaluatedEnum = {
    True: true
} as const;
export type MatchPrintDemandUniverseResponseProducerUniverseEvaluatedEnum = typeof MatchPrintDemandUniverseResponseProducerUniverseEvaluatedEnum[keyof typeof MatchPrintDemandUniverseResponseProducerUniverseEvaluatedEnum];

/**
 * @export
 */
export const MatchPrintDemandUniverseResponseRankingPerformedEnum = {
    True: true
} as const;
export type MatchPrintDemandUniverseResponseRankingPerformedEnum = typeof MatchPrintDemandUniverseResponseRankingPerformedEnum[keyof typeof MatchPrintDemandUniverseResponseRankingPerformedEnum];

/**
 * @export
 */
export const MatchPrintDemandUniverseResponseSchemaNameEnum = {
    GnawwSpecmatchUniverseResult: 'gnaww.specmatch_universe_result'
} as const;
export type MatchPrintDemandUniverseResponseSchemaNameEnum = typeof MatchPrintDemandUniverseResponseSchemaNameEnum[keyof typeof MatchPrintDemandUniverseResponseSchemaNameEnum];

/**
 * @export
 */
export const MatchPrintDemandUniverseResponseSchemaVersionEnum = {
    _01: '0.1'
} as const;
export type MatchPrintDemandUniverseResponseSchemaVersionEnum = typeof MatchPrintDemandUniverseResponseSchemaVersionEnum[keyof typeof MatchPrintDemandUniverseResponseSchemaVersionEnum];

/**
 * @export
 */
export const MatchPrintDemandUniverseResponseSpecmatchPerformedEnum = {
    True: true
} as const;
export type MatchPrintDemandUniverseResponseSpecmatchPerformedEnum = typeof MatchPrintDemandUniverseResponseSpecmatchPerformedEnum[keyof typeof MatchPrintDemandUniverseResponseSpecmatchPerformedEnum];


/**
 * Check if a given object implements the MatchPrintDemandUniverseResponse interface.
 */
export function instanceOfMatchPrintDemandUniverseResponse(value: object): value is MatchPrintDemandUniverseResponse {
    if (!('blockedCount' in value) || value['blockedCount'] === undefined) return false;
    if (!('confirmedCapableCount' in value) || value['confirmedCapableCount'] === undefined) return false;
    if (!('demandBasis' in value) || value['demandBasis'] === undefined) return false;
    if (!('outcome' in value) || value['outcome'] === undefined) return false;
    if (!('producerUniverseSize' in value) || value['producerUniverseSize'] === undefined) return false;
    if (!('readiness' in value) || value['readiness'] === undefined) return false;
    if (!('recipe' in value) || value['recipe'] === undefined) return false;
    if (!('reviewRequiredCount' in value) || value['reviewRequiredCount'] === undefined) return false;
    return true;
}

export function MatchPrintDemandUniverseResponseFromJSON(json: any): MatchPrintDemandUniverseResponse {
    return MatchPrintDemandUniverseResponseFromJSONTyped(json, false);
}

export function MatchPrintDemandUniverseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchPrintDemandUniverseResponse {
    if (json == null) {
        return json;
    }
    return {

        'availabilityChecked': json['availability_checked'] == null ? undefined : json['availability_checked'],
        'bestCapableCandidate': json['best_capable_candidate'] == null ? undefined : PublicProducerUniverseCandidateFromJSON(json['best_capable_candidate']),
        'blockedCount': json['blocked_count'],
        'candidates': json['candidates'] == null ? undefined : ((json['candidates'] as Array<any>).map(PublicProducerUniverseCandidateFromJSON)),
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

export function MatchPrintDemandUniverseResponseToJSON(json: any): MatchPrintDemandUniverseResponse {
    return MatchPrintDemandUniverseResponseToJSONTyped(json, false);
}

export function MatchPrintDemandUniverseResponseToJSONTyped(value?: MatchPrintDemandUniverseResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'availability_checked': value['availabilityChecked'],
        'best_capable_candidate': PublicProducerUniverseCandidateToJSON(value['bestCapableCandidate']),
        'blocked_count': value['blockedCount'],
        'candidates': value['candidates'] == null ? undefined : ((value['candidates'] as Array<any>).map(PublicProducerUniverseCandidateToJSON)),
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
