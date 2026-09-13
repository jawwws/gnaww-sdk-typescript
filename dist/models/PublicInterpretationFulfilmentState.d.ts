/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { FulfilmentRequirement } from './FulfilmentRequirement';
/**
 * Job-owned fulfilment requirement state, separate from live fulfilment.
 * @export
 * @interface PublicInterpretationFulfilmentState
 */
export interface PublicInterpretationFulfilmentState {
    /**
     *
     * @type {FulfilmentRequirement}
     * @memberof PublicInterpretationFulfilmentState
     */
    requirement?: FulfilmentRequirement | null;
    /**
     *
     * @type {PublicInterpretationFulfilmentStateStatusEnum}
     * @memberof PublicInterpretationFulfilmentState
     */
    status: PublicInterpretationFulfilmentStateStatusEnum;
}
/**
 * @export
 */
export declare const PublicInterpretationFulfilmentStateStatusEnum: {
    readonly NotRequired: "not_required";
    readonly NeedsReview: "needs_review";
    readonly Ready: "ready";
};
export type PublicInterpretationFulfilmentStateStatusEnum = typeof PublicInterpretationFulfilmentStateStatusEnum[keyof typeof PublicInterpretationFulfilmentStateStatusEnum];
/**
 * Check if a given object implements the PublicInterpretationFulfilmentState interface.
 */
export declare function instanceOfPublicInterpretationFulfilmentState(value: object): value is PublicInterpretationFulfilmentState;
export declare function PublicInterpretationFulfilmentStateFromJSON(json: any): PublicInterpretationFulfilmentState;
export declare function PublicInterpretationFulfilmentStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationFulfilmentState;
export declare function PublicInterpretationFulfilmentStateToJSON(json: any): PublicInterpretationFulfilmentState;
export declare function PublicInterpretationFulfilmentStateToJSONTyped(value?: PublicInterpretationFulfilmentState | null, ignoreDiscriminator?: boolean): any;
