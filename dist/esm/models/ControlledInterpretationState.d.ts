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
 * @interface ControlledInterpretationState
 */
export interface ControlledInterpretationState {
    /**
     *
     * @type {boolean}
     * @memberof ControlledInterpretationState
     */
    attempted: boolean;
    /**
     *
     * @type {string}
     * @memberof ControlledInterpretationState
     */
    error?: string | null;
    /**
     *
     * @type {IntentProviderMetadata}
     * @memberof ControlledInterpretationState
     */
    metadata?: IntentProviderMetadata | null;
    /**
     *
     * @type {string}
     * @memberof ControlledInterpretationState
     */
    provider?: string | null;
    /**
     *
     * @type {ControlledInterpretationStateStatusEnum}
     * @memberof ControlledInterpretationState
     */
    status: ControlledInterpretationStateStatusEnum;
}
/**
 * @export
 */
export declare const ControlledInterpretationStateStatusEnum: {
    readonly NotRequired: "not_required";
    readonly Completed: "completed";
    readonly Unavailable: "unavailable";
    readonly Failed: "failed";
};
export type ControlledInterpretationStateStatusEnum = typeof ControlledInterpretationStateStatusEnum[keyof typeof ControlledInterpretationStateStatusEnum];
/**
 * Check if a given object implements the ControlledInterpretationState interface.
 */
export declare function instanceOfControlledInterpretationState(value: object): value is ControlledInterpretationState;
export declare function ControlledInterpretationStateFromJSON(json: any): ControlledInterpretationState;
export declare function ControlledInterpretationStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ControlledInterpretationState;
export declare function ControlledInterpretationStateToJSON(json: any): ControlledInterpretationState;
export declare function ControlledInterpretationStateToJSONTyped(value?: ControlledInterpretationState | null, ignoreDiscriminator?: boolean): any;
