/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { IntentProviderMetadata } from './IntentProviderMetadata';
/**
 * Safe public truth about controlled semantic interpretation.
 * @export
 * @interface PublicControlledInterpretationState
 */
export interface PublicControlledInterpretationState {
    /**
     *
     * @type {boolean}
     * @memberof PublicControlledInterpretationState
     */
    attempted: boolean;
    /**
     *
     * @type {string}
     * @memberof PublicControlledInterpretationState
     */
    error?: string | null;
    /**
     *
     * @type {IntentProviderMetadata}
     * @memberof PublicControlledInterpretationState
     */
    metadata?: IntentProviderMetadata | null;
    /**
     *
     * @type {string}
     * @memberof PublicControlledInterpretationState
     */
    provider?: string | null;
    /**
     *
     * @type {PublicControlledInterpretationStateStatusEnum}
     * @memberof PublicControlledInterpretationState
     */
    status: PublicControlledInterpretationStateStatusEnum;
}
/**
 * @export
 */
export declare const PublicControlledInterpretationStateStatusEnum: {
    readonly NotReported: "not_reported";
    readonly NotRequired: "not_required";
    readonly Completed: "completed";
    readonly Unavailable: "unavailable";
    readonly Failed: "failed";
};
export type PublicControlledInterpretationStateStatusEnum = typeof PublicControlledInterpretationStateStatusEnum[keyof typeof PublicControlledInterpretationStateStatusEnum];
/**
 * Check if a given object implements the PublicControlledInterpretationState interface.
 */
export declare function instanceOfPublicControlledInterpretationState(value: object): value is PublicControlledInterpretationState;
export declare function PublicControlledInterpretationStateFromJSON(json: any): PublicControlledInterpretationState;
export declare function PublicControlledInterpretationStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicControlledInterpretationState;
export declare function PublicControlledInterpretationStateToJSON(json: any): PublicControlledInterpretationState;
export declare function PublicControlledInterpretationStateToJSONTyped(value?: PublicControlledInterpretationState | null, ignoreDiscriminator?: boolean): any;
