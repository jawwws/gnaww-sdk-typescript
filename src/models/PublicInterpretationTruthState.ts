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
/**
 * Side-effect and live-truth flags for interpretation only.
 * @export
 * @interface PublicInterpretationTruthState
 */
export interface PublicInterpretationTruthState {
    /**
     *
     * @type {PublicInterpretationTruthStateAvailabilityCheckedEnum}
     * @memberof PublicInterpretationTruthState
     */
    availabilityChecked?: PublicInterpretationTruthStateAvailabilityCheckedEnum;
    /**
     *
     * @type {PublicInterpretationTruthStateLivePricingPerformedEnum}
     * @memberof PublicInterpretationTruthState
     */
    livePricingPerformed?: PublicInterpretationTruthStateLivePricingPerformedEnum;
    /**
     *
     * @type {PublicInterpretationTruthStateOrderCreatedEnum}
     * @memberof PublicInterpretationTruthState
     */
    orderCreated?: PublicInterpretationTruthStateOrderCreatedEnum;
    /**
     *
     * @type {PublicInterpretationTruthStatePersistencePerformedEnum}
     * @memberof PublicInterpretationTruthState
     */
    persistencePerformed?: PublicInterpretationTruthStatePersistencePerformedEnum;
    /**
     *
     * @type {PublicInterpretationTruthStateProducerAcceptancePerformedEnum}
     * @memberof PublicInterpretationTruthState
     */
    producerAcceptancePerformed?: PublicInterpretationTruthStateProducerAcceptancePerformedEnum;
    /**
     *
     * @type {PublicInterpretationTruthStateProducerSelectionPerformedEnum}
     * @memberof PublicInterpretationTruthState
     */
    producerSelectionPerformed?: PublicInterpretationTruthStateProducerSelectionPerformedEnum;
    /**
     *
     * @type {boolean}
     * @memberof PublicInterpretationTruthState
     */
    specmatchPerformed?: boolean;
}


/**
 * @export
 */
export const PublicInterpretationTruthStateAvailabilityCheckedEnum = {
    False: false
} as const;
export type PublicInterpretationTruthStateAvailabilityCheckedEnum = typeof PublicInterpretationTruthStateAvailabilityCheckedEnum[keyof typeof PublicInterpretationTruthStateAvailabilityCheckedEnum];

/**
 * @export
 */
export const PublicInterpretationTruthStateLivePricingPerformedEnum = {
    False: false
} as const;
export type PublicInterpretationTruthStateLivePricingPerformedEnum = typeof PublicInterpretationTruthStateLivePricingPerformedEnum[keyof typeof PublicInterpretationTruthStateLivePricingPerformedEnum];

/**
 * @export
 */
export const PublicInterpretationTruthStateOrderCreatedEnum = {
    False: false
} as const;
export type PublicInterpretationTruthStateOrderCreatedEnum = typeof PublicInterpretationTruthStateOrderCreatedEnum[keyof typeof PublicInterpretationTruthStateOrderCreatedEnum];

/**
 * @export
 */
export const PublicInterpretationTruthStatePersistencePerformedEnum = {
    False: false
} as const;
export type PublicInterpretationTruthStatePersistencePerformedEnum = typeof PublicInterpretationTruthStatePersistencePerformedEnum[keyof typeof PublicInterpretationTruthStatePersistencePerformedEnum];

/**
 * @export
 */
export const PublicInterpretationTruthStateProducerAcceptancePerformedEnum = {
    False: false
} as const;
export type PublicInterpretationTruthStateProducerAcceptancePerformedEnum = typeof PublicInterpretationTruthStateProducerAcceptancePerformedEnum[keyof typeof PublicInterpretationTruthStateProducerAcceptancePerformedEnum];

/**
 * @export
 */
export const PublicInterpretationTruthStateProducerSelectionPerformedEnum = {
    False: false
} as const;
export type PublicInterpretationTruthStateProducerSelectionPerformedEnum = typeof PublicInterpretationTruthStateProducerSelectionPerformedEnum[keyof typeof PublicInterpretationTruthStateProducerSelectionPerformedEnum];


/**
 * Check if a given object implements the PublicInterpretationTruthState interface.
 */
export function instanceOfPublicInterpretationTruthState(value: object): value is PublicInterpretationTruthState {
    return true;
}

export function PublicInterpretationTruthStateFromJSON(json: any): PublicInterpretationTruthState {
    return PublicInterpretationTruthStateFromJSONTyped(json, false);
}

export function PublicInterpretationTruthStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationTruthState {
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

export function PublicInterpretationTruthStateToJSON(json: any): PublicInterpretationTruthState {
    return PublicInterpretationTruthStateToJSONTyped(json, false);
}

export function PublicInterpretationTruthStateToJSONTyped(value?: PublicInterpretationTruthState | null, ignoreDiscriminator: boolean = false): any {
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
