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
exports.MatchPrintDemandResponseStatusEnum = exports.MatchPrintDemandResponseSpecmatchPerformedEnum = exports.MatchPrintDemandResponseSchemaVersionEnum = exports.MatchPrintDemandResponseSchemaNameEnum = exports.MatchPrintDemandResponseProducerSelectionPerformedEnum = exports.MatchPrintDemandResponseProducerAcceptancePerformedEnum = exports.MatchPrintDemandResponsePersistencePerformedEnum = exports.MatchPrintDemandResponseOrderCreatedEnum = exports.MatchPrintDemandResponseLivePricingPerformedEnum = exports.MatchPrintDemandResponseDemandBasisEnum = exports.MatchPrintDemandResponseAvailabilityCheckedEnum = void 0;
exports.instanceOfMatchPrintDemandResponse = instanceOfMatchPrintDemandResponse;
exports.MatchPrintDemandResponseFromJSON = MatchPrintDemandResponseFromJSON;
exports.MatchPrintDemandResponseFromJSONTyped = MatchPrintDemandResponseFromJSONTyped;
exports.MatchPrintDemandResponseToJSON = MatchPrintDemandResponseToJSON;
exports.MatchPrintDemandResponseToJSONTyped = MatchPrintDemandResponseToJSONTyped;
const PublicSpecMatchReadiness_1 = require("./PublicSpecMatchReadiness");
const PublicRecipeState_1 = require("./PublicRecipeState");
const PublicMatchTargetState_1 = require("./PublicMatchTargetState");
const SpecMatchResult_1 = require("./SpecMatchResult");
/**
 * @export
 */
exports.MatchPrintDemandResponseAvailabilityCheckedEnum = {
    False: false
};
/**
 * @export
 */
exports.MatchPrintDemandResponseDemandBasisEnum = {
    Recipe: 'recipe',
    Gjs: 'gjs'
};
/**
 * @export
 */
exports.MatchPrintDemandResponseLivePricingPerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.MatchPrintDemandResponseOrderCreatedEnum = {
    False: false
};
/**
 * @export
 */
exports.MatchPrintDemandResponsePersistencePerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.MatchPrintDemandResponseProducerAcceptancePerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.MatchPrintDemandResponseProducerSelectionPerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.MatchPrintDemandResponseSchemaNameEnum = {
    GnawwSpecmatchResult: 'gnaww.specmatch_result'
};
/**
 * @export
 */
exports.MatchPrintDemandResponseSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * @export
 */
exports.MatchPrintDemandResponseSpecmatchPerformedEnum = {
    True: true
};
/**
 * @export
 */
exports.MatchPrintDemandResponseStatusEnum = {
    Matched: 'matched',
    MatchedWithWarnings: 'matched_with_warnings',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
};
/**
 * Check if a given object implements the MatchPrintDemandResponse interface.
 */
function instanceOfMatchPrintDemandResponse(value) {
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
function MatchPrintDemandResponseFromJSON(json) {
    return MatchPrintDemandResponseFromJSONTyped(json, false);
}
function MatchPrintDemandResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'availabilityChecked': json['availability_checked'] == null ? undefined : json['availability_checked'],
        'demandBasis': json['demand_basis'],
        'livePricingPerformed': json['live_pricing_performed'] == null ? undefined : json['live_pricing_performed'],
        'match': (0, SpecMatchResult_1.SpecMatchResultFromJSON)(json['match']),
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'orderCreated': json['order_created'] == null ? undefined : json['order_created'],
        'persistencePerformed': json['persistence_performed'] == null ? undefined : json['persistence_performed'],
        'producerAcceptancePerformed': json['producer_acceptance_performed'] == null ? undefined : json['producer_acceptance_performed'],
        'producerSelectionPerformed': json['producer_selection_performed'] == null ? undefined : json['producer_selection_performed'],
        'readiness': (0, PublicSpecMatchReadiness_1.PublicSpecMatchReadinessFromJSON)(json['readiness']),
        'recipe': (0, PublicRecipeState_1.PublicRecipeStateFromJSON)(json['recipe']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'specmatchPerformed': json['specmatch_performed'] == null ? undefined : json['specmatch_performed'],
        'status': json['status'],
        'target': (0, PublicMatchTargetState_1.PublicMatchTargetStateFromJSON)(json['target']),
    };
}
function MatchPrintDemandResponseToJSON(json) {
    return MatchPrintDemandResponseToJSONTyped(json, false);
}
function MatchPrintDemandResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'availability_checked': value['availabilityChecked'],
        'demand_basis': value['demandBasis'],
        'live_pricing_performed': value['livePricingPerformed'],
        'match': (0, SpecMatchResult_1.SpecMatchResultToJSON)(value['match']),
        'next_actions': value['nextActions'],
        'order_created': value['orderCreated'],
        'persistence_performed': value['persistencePerformed'],
        'producer_acceptance_performed': value['producerAcceptancePerformed'],
        'producer_selection_performed': value['producerSelectionPerformed'],
        'readiness': (0, PublicSpecMatchReadiness_1.PublicSpecMatchReadinessToJSON)(value['readiness']),
        'recipe': (0, PublicRecipeState_1.PublicRecipeStateToJSON)(value['recipe']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'specmatch_performed': value['specmatchPerformed'],
        'status': value['status'],
        'target': (0, PublicMatchTargetState_1.PublicMatchTargetStateToJSON)(value['target']),
    };
}
