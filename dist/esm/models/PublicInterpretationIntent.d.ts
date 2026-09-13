/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Controlled classification of the top-level messy-intent shape.
 * @export
 * @interface PublicInterpretationIntent
 */
export interface PublicInterpretationIntent {
    /**
     *
     * @type {number}
     * @memberof PublicInterpretationIntent
     */
    confidence: number;
    /**
     *
     * @type {PublicInterpretationIntentKindEnum}
     * @memberof PublicInterpretationIntent
     */
    kind: PublicInterpretationIntentKindEnum;
}
/**
 * @export
 */
export declare const PublicInterpretationIntentKindEnum: {
    readonly SingleJob: "single_job";
    readonly OrderLike: "order_like";
    readonly CapabilityQuestion: "capability_question";
    readonly OutcomeLed: "outcome_led";
    readonly Mixed: "mixed";
    readonly NeedsReview: "needs_review";
};
export type PublicInterpretationIntentKindEnum = typeof PublicInterpretationIntentKindEnum[keyof typeof PublicInterpretationIntentKindEnum];
/**
 * Check if a given object implements the PublicInterpretationIntent interface.
 */
export declare function instanceOfPublicInterpretationIntent(value: object): value is PublicInterpretationIntent;
export declare function PublicInterpretationIntentFromJSON(json: any): PublicInterpretationIntent;
export declare function PublicInterpretationIntentFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationIntent;
export declare function PublicInterpretationIntentToJSON(json: any): PublicInterpretationIntent;
export declare function PublicInterpretationIntentToJSONTyped(value?: PublicInterpretationIntent | null, ignoreDiscriminator?: boolean): any;
