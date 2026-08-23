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
import type { FulfilmentRequirement } from './FulfilmentRequirement';
/**
 * Buyer fulfilment requirement alongside physical production demand.
 * @export
 * @interface PublicFulfilmentState
 */
export interface PublicFulfilmentState {
    /**
     *
     * @type {FulfilmentRequirement}
     * @memberof PublicFulfilmentState
     */
    requirement?: FulfilmentRequirement | null;
    /**
     *
     * @type {PublicFulfilmentStateStatusEnum}
     * @memberof PublicFulfilmentState
     */
    status: PublicFulfilmentStateStatusEnum;
}
/**
 * @export
 */
export declare const PublicFulfilmentStateStatusEnum: {
    readonly NotRequired: "not_required";
    readonly NeedsReview: "needs_review";
    readonly Ready: "ready";
};
export type PublicFulfilmentStateStatusEnum = typeof PublicFulfilmentStateStatusEnum[keyof typeof PublicFulfilmentStateStatusEnum];
/**
 * Check if a given object implements the PublicFulfilmentState interface.
 */
export declare function instanceOfPublicFulfilmentState(value: object): value is PublicFulfilmentState;
export declare function PublicFulfilmentStateFromJSON(json: any): PublicFulfilmentState;
export declare function PublicFulfilmentStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicFulfilmentState;
export declare function PublicFulfilmentStateToJSON(json: any): PublicFulfilmentState;
export declare function PublicFulfilmentStateToJSONTyped(value?: PublicFulfilmentState | null, ignoreDiscriminator?: boolean): any;
