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
exports.PublicInterpretationTruthStateProducerSelectionPerformedEnum = exports.PublicInterpretationTruthStateProducerAcceptancePerformedEnum = exports.PublicInterpretationTruthStatePersistencePerformedEnum = exports.PublicInterpretationTruthStateOrderCreatedEnum = exports.PublicInterpretationTruthStateLivePricingPerformedEnum = exports.PublicInterpretationTruthStateAvailabilityCheckedEnum = void 0;
exports.instanceOfPublicInterpretationTruthState = instanceOfPublicInterpretationTruthState;
exports.PublicInterpretationTruthStateFromJSON = PublicInterpretationTruthStateFromJSON;
exports.PublicInterpretationTruthStateFromJSONTyped = PublicInterpretationTruthStateFromJSONTyped;
exports.PublicInterpretationTruthStateToJSON = PublicInterpretationTruthStateToJSON;
exports.PublicInterpretationTruthStateToJSONTyped = PublicInterpretationTruthStateToJSONTyped;
/**
 * @export
 */
exports.PublicInterpretationTruthStateAvailabilityCheckedEnum = {
    False: false
};
/**
 * @export
 */
exports.PublicInterpretationTruthStateLivePricingPerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.PublicInterpretationTruthStateOrderCreatedEnum = {
    False: false
};
/**
 * @export
 */
exports.PublicInterpretationTruthStatePersistencePerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.PublicInterpretationTruthStateProducerAcceptancePerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.PublicInterpretationTruthStateProducerSelectionPerformedEnum = {
    False: false
};
/**
 * Check if a given object implements the PublicInterpretationTruthState interface.
 */
function instanceOfPublicInterpretationTruthState(value) {
    return true;
}
function PublicInterpretationTruthStateFromJSON(json) {
    return PublicInterpretationTruthStateFromJSONTyped(json, false);
}
function PublicInterpretationTruthStateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'availabilityChecked': json['availability_checked'] == null ? undefined : json['availability_checked'],
        'livePricingPerformed': json['live_pricing_performed'] == null ? undefined : json['live_pricing_performed'],
        'orderCreated': json['order_created'] == null ? undefined : json['order_created'],
        'persistencePerformed': json['persistence_performed'] == null ? undefined : json['persistence_performed'],
        'producerAcceptancePerformed': json['producer_acceptance_performed'] == null ? undefined : json['producer_acceptance_performed'],
        'producerSelectionPerformed': json['producer_selection_performed'] == null ? undefined : json['producer_selection_performed'],
        'specmatchPerformed': json['specmatch_performed'] == null ? undefined : json['specmatch_performed'],
    };
}
function PublicInterpretationTruthStateToJSON(json) {
    return PublicInterpretationTruthStateToJSONTyped(json, false);
}
function PublicInterpretationTruthStateToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'availability_checked': value['availabilityChecked'],
        'live_pricing_performed': value['livePricingPerformed'],
        'order_created': value['orderCreated'],
        'persistence_performed': value['persistencePerformed'],
        'producer_acceptance_performed': value['producerAcceptancePerformed'],
        'producer_selection_performed': value['producerSelectionPerformed'],
        'specmatch_performed': value['specmatchPerformed'],
    };
}
