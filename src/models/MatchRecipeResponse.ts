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

import { mapValues } from '../runtime';
import type { PublicSpecMatchReadiness } from './PublicSpecMatchReadiness';
import {
    PublicSpecMatchReadinessFromJSON,
    PublicSpecMatchReadinessFromJSONTyped,
    PublicSpecMatchReadinessToJSON,
    PublicSpecMatchReadinessToJSONTyped,
} from './PublicSpecMatchReadiness';
import type { PublicMatchTargetState } from './PublicMatchTargetState';
import {
    PublicMatchTargetStateFromJSON,
    PublicMatchTargetStateFromJSONTyped,
    PublicMatchTargetStateToJSON,
    PublicMatchTargetStateToJSONTyped,
} from './PublicMatchTargetState';
import type { ResolvedRecipeMatchState } from './ResolvedRecipeMatchState';
import {
    ResolvedRecipeMatchStateFromJSON,
    ResolvedRecipeMatchStateFromJSONTyped,
    ResolvedRecipeMatchStateToJSON,
    ResolvedRecipeMatchStateToJSONTyped,
} from './ResolvedRecipeMatchState';
import type { SpecMatchResult } from './SpecMatchResult';
import {
    SpecMatchResultFromJSON,
    SpecMatchResultFromJSONTyped,
    SpecMatchResultToJSON,
    SpecMatchResultToJSONTyped,
} from './SpecMatchResult';

/**
 * Public deterministic capability-fit result for one persisted Recipe.
 * @export
 * @interface MatchRecipeResponse
 */
export interface MatchRecipeResponse {
    /**
     *
     * @type {MatchRecipeResponseAvailabilityCheckedEnum}
     * @memberof MatchRecipeResponse
     */
    availabilityChecked?: MatchRecipeResponseAvailabilityCheckedEnum;
    /**
     *
     * @type {MatchRecipeResponseDemandBasisEnum}
     * @memberof MatchRecipeResponse
     */
    demandBasis?: MatchRecipeResponseDemandBasisEnum;
    /**
     *
     * @type {MatchRecipeResponseLivePricingPerformedEnum}
     * @memberof MatchRecipeResponse
     */
    livePricingPerformed?: MatchRecipeResponseLivePricingPerformedEnum;
    /**
     *
     * @type {SpecMatchResult}
     * @memberof MatchRecipeResponse
     */
    match: SpecMatchResult;
    /**
     *
     * @type {Array<string>}
     * @memberof MatchRecipeResponse
     */
    nextActions?: Array<string>;
    /**
     *
     * @type {MatchRecipeResponseOrderCreatedEnum}
     * @memberof MatchRecipeResponse
     */
    orderCreated?: MatchRecipeResponseOrderCreatedEnum;
    /**
     *
     * @type {MatchRecipeResponsePersistencePerformedEnum}
     * @memberof MatchRecipeResponse
     */
    persistencePerformed?: MatchRecipeResponsePersistencePerformedEnum;
    /**
     *
     * @type {MatchRecipeResponseProducerAcceptancePerformedEnum}
     * @memberof MatchRecipeResponse
     */
    producerAcceptancePerformed?: MatchRecipeResponseProducerAcceptancePerformedEnum;
    /**
     *
     * @type {MatchRecipeResponseProducerSelectionPerformedEnum}
     * @memberof MatchRecipeResponse
     */
    producerSelectionPerformed?: MatchRecipeResponseProducerSelectionPerformedEnum;
    /**
     *
     * @type {PublicSpecMatchReadiness}
     * @memberof MatchRecipeResponse
     */
    readiness: PublicSpecMatchReadiness;
    /**
     *
     * @type {ResolvedRecipeMatchState}
     * @memberof MatchRecipeResponse
     */
    recipe: ResolvedRecipeMatchState;
    /**
     *
     * @type {MatchRecipeResponseSchemaNameEnum}
     * @memberof MatchRecipeResponse
     */
    schemaName?: MatchRecipeResponseSchemaNameEnum;
    /**
     *
     * @type {MatchRecipeResponseSchemaVersionEnum}
     * @memberof MatchRecipeResponse
     */
    schemaVersion?: MatchRecipeResponseSchemaVersionEnum;
    /**
     *
     * @type {MatchRecipeResponseSpecmatchPerformedEnum}
     * @memberof MatchRecipeResponse
     */
    specmatchPerformed?: MatchRecipeResponseSpecmatchPerformedEnum;
    /**
     *
     * @type {MatchRecipeResponseStatusEnum}
     * @memberof MatchRecipeResponse
     */
    status: MatchRecipeResponseStatusEnum;
    /**
     *
     * @type {PublicMatchTargetState}
     * @memberof MatchRecipeResponse
     */
    target: PublicMatchTargetState;
}


/**
 * @export
 */
export const MatchRecipeResponseAvailabilityCheckedEnum = {
    False: false
} as const;
export type MatchRecipeResponseAvailabilityCheckedEnum = typeof MatchRecipeResponseAvailabilityCheckedEnum[keyof typeof MatchRecipeResponseAvailabilityCheckedEnum];

/**
 * @export
 */
export const MatchRecipeResponseDemandBasisEnum = {
    Recipe: 'recipe'
} as const;
export type MatchRecipeResponseDemandBasisEnum = typeof MatchRecipeResponseDemandBasisEnum[keyof typeof MatchRecipeResponseDemandBasisEnum];

/**
 * @export
 */
export const MatchRecipeResponseLivePricingPerformedEnum = {
    False: false
} as const;
export type MatchRecipeResponseLivePricingPerformedEnum = typeof MatchRecipeResponseLivePricingPerformedEnum[keyof typeof MatchRecipeResponseLivePricingPerformedEnum];

/**
 * @export
 */
export const MatchRecipeResponseOrderCreatedEnum = {
    False: false
} as const;
export type MatchRecipeResponseOrderCreatedEnum = typeof MatchRecipeResponseOrderCreatedEnum[keyof typeof MatchRecipeResponseOrderCreatedEnum];

/**
 * @export
 */
export const MatchRecipeResponsePersistencePerformedEnum = {
    False: false
} as const;
export type MatchRecipeResponsePersistencePerformedEnum = typeof MatchRecipeResponsePersistencePerformedEnum[keyof typeof MatchRecipeResponsePersistencePerformedEnum];

/**
 * @export
 */
export const MatchRecipeResponseProducerAcceptancePerformedEnum = {
    False: false
} as const;
export type MatchRecipeResponseProducerAcceptancePerformedEnum = typeof MatchRecipeResponseProducerAcceptancePerformedEnum[keyof typeof MatchRecipeResponseProducerAcceptancePerformedEnum];

/**
 * @export
 */
export const MatchRecipeResponseProducerSelectionPerformedEnum = {
    False: false
} as const;
export type MatchRecipeResponseProducerSelectionPerformedEnum = typeof MatchRecipeResponseProducerSelectionPerformedEnum[keyof typeof MatchRecipeResponseProducerSelectionPerformedEnum];

/**
 * @export
 */
export const MatchRecipeResponseSchemaNameEnum = {
    GnawwRecipeSpecmatchResult: 'gnaww.recipe_specmatch_result'
} as const;
export type MatchRecipeResponseSchemaNameEnum = typeof MatchRecipeResponseSchemaNameEnum[keyof typeof MatchRecipeResponseSchemaNameEnum];

/**
 * @export
 */
export const MatchRecipeResponseSchemaVersionEnum = {
    _01: '0.1'
} as const;
export type MatchRecipeResponseSchemaVersionEnum = typeof MatchRecipeResponseSchemaVersionEnum[keyof typeof MatchRecipeResponseSchemaVersionEnum];

/**
 * @export
 */
export const MatchRecipeResponseSpecmatchPerformedEnum = {
    True: true
} as const;
export type MatchRecipeResponseSpecmatchPerformedEnum = typeof MatchRecipeResponseSpecmatchPerformedEnum[keyof typeof MatchRecipeResponseSpecmatchPerformedEnum];

/**
 * @export
 */
export const MatchRecipeResponseStatusEnum = {
    Matched: 'matched',
    MatchedWithWarnings: 'matched_with_warnings',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
} as const;
export type MatchRecipeResponseStatusEnum = typeof MatchRecipeResponseStatusEnum[keyof typeof MatchRecipeResponseStatusEnum];


/**
 * Check if a given object implements the MatchRecipeResponse interface.
 */
export function instanceOfMatchRecipeResponse(value: object): value is MatchRecipeResponse {
    if (!('match' in value) || value['match'] === undefined) return false;
    if (!('readiness' in value) || value['readiness'] === undefined) return false;
    if (!('recipe' in value) || value['recipe'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('target' in value) || value['target'] === undefined) return false;
    return true;
}

export function MatchRecipeResponseFromJSON(json: any): MatchRecipeResponse {
    return MatchRecipeResponseFromJSONTyped(json, false);
}

export function MatchRecipeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchRecipeResponse {
    if (json == null) {
        return json;
    }
    return {

        'availabilityChecked': json['availability_checked'] == null ? undefined : json['availability_checked'],
        'demandBasis': json['demand_basis'] == null ? undefined : json['demand_basis'],
        'livePricingPerformed': json['live_pricing_performed'] == null ? undefined : json['live_pricing_performed'],
        'match': SpecMatchResultFromJSON(json['match']),
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'orderCreated': json['order_created'] == null ? undefined : json['order_created'],
        'persistencePerformed': json['persistence_performed'] == null ? undefined : json['persistence_performed'],
        'producerAcceptancePerformed': json['producer_acceptance_performed'] == null ? undefined : json['producer_acceptance_performed'],
        'producerSelectionPerformed': json['producer_selection_performed'] == null ? undefined : json['producer_selection_performed'],
        'readiness': PublicSpecMatchReadinessFromJSON(json['readiness']),
        'recipe': ResolvedRecipeMatchStateFromJSON(json['recipe']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'specmatchPerformed': json['specmatch_performed'] == null ? undefined : json['specmatch_performed'],
        'status': json['status'],
        'target': PublicMatchTargetStateFromJSON(json['target']),
    };
}

export function MatchRecipeResponseToJSON(json: any): MatchRecipeResponse {
    return MatchRecipeResponseToJSONTyped(json, false);
}

export function MatchRecipeResponseToJSONTyped(value?: MatchRecipeResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'availability_checked': value['availabilityChecked'],
        'demand_basis': value['demandBasis'],
        'live_pricing_performed': value['livePricingPerformed'],
        'match': SpecMatchResultToJSON(value['match']),
        'next_actions': value['nextActions'],
        'order_created': value['orderCreated'],
        'persistence_performed': value['persistencePerformed'],
        'producer_acceptance_performed': value['producerAcceptancePerformed'],
        'producer_selection_performed': value['producerSelectionPerformed'],
        'readiness': PublicSpecMatchReadinessToJSON(value['readiness']),
        'recipe': ResolvedRecipeMatchStateToJSON(value['recipe']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'specmatch_performed': value['specmatchPerformed'],
        'status': value['status'],
        'target': PublicMatchTargetStateToJSON(value['target']),
    };
}
