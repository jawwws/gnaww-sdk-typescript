/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
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
export declare const PublicInterpretationTruthStateAvailabilityCheckedEnum: {
    readonly False: false;
};
export type PublicInterpretationTruthStateAvailabilityCheckedEnum = typeof PublicInterpretationTruthStateAvailabilityCheckedEnum[keyof typeof PublicInterpretationTruthStateAvailabilityCheckedEnum];
/**
 * @export
 */
export declare const PublicInterpretationTruthStateLivePricingPerformedEnum: {
    readonly False: false;
};
export type PublicInterpretationTruthStateLivePricingPerformedEnum = typeof PublicInterpretationTruthStateLivePricingPerformedEnum[keyof typeof PublicInterpretationTruthStateLivePricingPerformedEnum];
/**
 * @export
 */
export declare const PublicInterpretationTruthStateOrderCreatedEnum: {
    readonly False: false;
};
export type PublicInterpretationTruthStateOrderCreatedEnum = typeof PublicInterpretationTruthStateOrderCreatedEnum[keyof typeof PublicInterpretationTruthStateOrderCreatedEnum];
/**
 * @export
 */
export declare const PublicInterpretationTruthStatePersistencePerformedEnum: {
    readonly False: false;
};
export type PublicInterpretationTruthStatePersistencePerformedEnum = typeof PublicInterpretationTruthStatePersistencePerformedEnum[keyof typeof PublicInterpretationTruthStatePersistencePerformedEnum];
/**
 * @export
 */
export declare const PublicInterpretationTruthStateProducerAcceptancePerformedEnum: {
    readonly False: false;
};
export type PublicInterpretationTruthStateProducerAcceptancePerformedEnum = typeof PublicInterpretationTruthStateProducerAcceptancePerformedEnum[keyof typeof PublicInterpretationTruthStateProducerAcceptancePerformedEnum];
/**
 * @export
 */
export declare const PublicInterpretationTruthStateProducerSelectionPerformedEnum: {
    readonly False: false;
};
export type PublicInterpretationTruthStateProducerSelectionPerformedEnum = typeof PublicInterpretationTruthStateProducerSelectionPerformedEnum[keyof typeof PublicInterpretationTruthStateProducerSelectionPerformedEnum];
/**
 * Check if a given object implements the PublicInterpretationTruthState interface.
 */
export declare function instanceOfPublicInterpretationTruthState(value: object): value is PublicInterpretationTruthState;
export declare function PublicInterpretationTruthStateFromJSON(json: any): PublicInterpretationTruthState;
export declare function PublicInterpretationTruthStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationTruthState;
export declare function PublicInterpretationTruthStateToJSON(json: any): PublicInterpretationTruthState;
export declare function PublicInterpretationTruthStateToJSONTyped(value?: PublicInterpretationTruthState | null, ignoreDiscriminator?: boolean): any;
