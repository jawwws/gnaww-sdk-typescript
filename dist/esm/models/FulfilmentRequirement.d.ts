/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { DeliveryDestination } from './DeliveryDestination';
/**
 * Buyer fulfilment requirement kept outside Recipe identity.
 * @export
 * @interface FulfilmentRequirement
 */
export interface FulfilmentRequirement {
    /**
     *
     * @type {DeliveryDestination}
     * @memberof FulfilmentRequirement
     */
    destination: DeliveryDestination;
    /**
     *
     * @type {number}
     * @memberof FulfilmentRequirement
     */
    maximumDeliveryWorkingDays?: number | null;
}
/**
 * Check if a given object implements the FulfilmentRequirement interface.
 */
export declare function instanceOfFulfilmentRequirement(value: object): value is FulfilmentRequirement;
export declare function FulfilmentRequirementFromJSON(json: any): FulfilmentRequirement;
export declare function FulfilmentRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfilmentRequirement;
export declare function FulfilmentRequirementToJSON(json: any): FulfilmentRequirement;
export declare function FulfilmentRequirementToJSONTyped(value?: FulfilmentRequirement | null, ignoreDiscriminator?: boolean): any;
