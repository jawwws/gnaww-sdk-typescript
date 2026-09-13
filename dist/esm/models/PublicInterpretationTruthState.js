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
/**
 * @export
 */
export const PublicInterpretationTruthStateAvailabilityCheckedEnum = {
    False: false
};
/**
 * @export
 */
export const PublicInterpretationTruthStateLivePricingPerformedEnum = {
    False: false
};
/**
 * @export
 */
export const PublicInterpretationTruthStateOrderCreatedEnum = {
    False: false
};
/**
 * @export
 */
export const PublicInterpretationTruthStatePersistencePerformedEnum = {
    False: false
};
/**
 * @export
 */
export const PublicInterpretationTruthStateProducerAcceptancePerformedEnum = {
    False: false
};
/**
 * @export
 */
export const PublicInterpretationTruthStateProducerSelectionPerformedEnum = {
    False: false
};
/**
 * Check if a given object implements the PublicInterpretationTruthState interface.
 */
export function instanceOfPublicInterpretationTruthState(value) {
    return true;
}
export function PublicInterpretationTruthStateFromJSON(json) {
    return PublicInterpretationTruthStateFromJSONTyped(json, false);
}
export function PublicInterpretationTruthStateFromJSONTyped(json, ignoreDiscriminator) {
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
export function PublicInterpretationTruthStateToJSON(json) {
    return PublicInterpretationTruthStateToJSONTyped(json, false);
}
export function PublicInterpretationTruthStateToJSONTyped(value, ignoreDiscriminator = false) {
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
