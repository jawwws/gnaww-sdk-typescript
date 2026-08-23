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
import { PublicRecipeStateFromJSON, PublicRecipeStateToJSON, } from './PublicRecipeState';
import { PublicMatchTargetStateFromJSON, PublicMatchTargetStateToJSON, } from './PublicMatchTargetState';
import { SpecMatchResultFromJSON, SpecMatchResultToJSON, } from './SpecMatchResult';
/**
 * @export
 */
export const MatchPrintDemandResponseAvailabilityCheckedEnum = {
    False: false
};
/**
 * @export
 */
export const MatchPrintDemandResponseDemandBasisEnum = {
    Recipe: 'recipe',
    Gjs: 'gjs'
};
/**
 * @export
 */
export const MatchPrintDemandResponseLivePricingPerformedEnum = {
    False: false
};
/**
 * @export
 */
export const MatchPrintDemandResponseOrderCreatedEnum = {
    False: false
};
/**
 * @export
 */
export const MatchPrintDemandResponsePersistencePerformedEnum = {
    False: false
};
/**
 * @export
 */
export const MatchPrintDemandResponseProducerAcceptancePerformedEnum = {
    False: false
};
/**
 * @export
 */
export const MatchPrintDemandResponseProducerSelectionPerformedEnum = {
    False: false
};
/**
 * @export
 */
export const MatchPrintDemandResponseSchemaNameEnum = {
    GnawwSpecmatchResult: 'gnaww.specmatch_result'
};
/**
 * @export
 */
export const MatchPrintDemandResponseSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * @export
 */
export const MatchPrintDemandResponseSpecmatchPerformedEnum = {
    True: true
};
/**
 * @export
 */
export const MatchPrintDemandResponseStatusEnum = {
    Matched: 'matched',
    MatchedWithWarnings: 'matched_with_warnings',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
};
/**
 * Check if a given object implements the MatchPrintDemandResponse interface.
 */
export function instanceOfMatchPrintDemandResponse(value) {
    if (!('demandBasis' in value) || value['demandBasis'] === undefined)
        return false;
    if (!('match' in value) || value['match'] === undefined)
        return false;
    if (!('readiness' in value) || value['readiness'] === undefined)
        return false;
    if (!('recipe' in value) || value['recipe'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    if (!('target' in value) || value['target'] === undefined)
        return false;
    return true;
}
export function MatchPrintDemandResponseFromJSON(json) {
    return MatchPrintDemandResponseFromJSONTyped(json, false);
}
export function MatchPrintDemandResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'availabilityChecked': json['availability_checked'] == null ? undefined : json['availability_checked'],
        'demandBasis': json['demand_basis'],
        'livePricingPerformed': json['live_pricing_performed'] == null ? undefined : json['live_pricing_performed'],
        'match': SpecMatchResultFromJSON(json['match']),
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'orderCreated': json['order_created'] == null ? undefined : json['order_created'],
        'persistencePerformed': json['persistence_performed'] == null ? undefined : json['persistence_performed'],
        'producerAcceptancePerformed': json['producer_acceptance_performed'] == null ? undefined : json['producer_acceptance_performed'],
        'producerSelectionPerformed': json['producer_selection_performed'] == null ? undefined : json['producer_selection_performed'],
        'readiness': PublicSpecMatchReadinessFromJSON(json['readiness']),
        'recipe': PublicRecipeStateFromJSON(json['recipe']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'specmatchPerformed': json['specmatch_performed'] == null ? undefined : json['specmatch_performed'],
        'status': json['status'],
        'target': PublicMatchTargetStateFromJSON(json['target']),
    };
}
export function MatchPrintDemandResponseToJSON(json) {
    return MatchPrintDemandResponseToJSONTyped(json, false);
}
export function MatchPrintDemandResponseToJSONTyped(value, ignoreDiscriminator = false) {
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
        'recipe': PublicRecipeStateToJSON(value['recipe']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'specmatch_performed': value['specmatchPerformed'],
        'status': value['status'],
        'target': PublicMatchTargetStateToJSON(value['target']),
    };
}
