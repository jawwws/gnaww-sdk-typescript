/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { CapabilityEvidence } from './CapabilityEvidence';
/**
 * Stable availability mode and optional live current status.
 * @export
 * @interface AvailabilityCapability
 */
export interface AvailabilityCapability {
    /**
     *
     * @type {number}
     * @memberof AvailabilityCapability
     */
    availableQuantity?: number | null;
    /**
     *
     * @type {CapabilityEvidence}
     * @memberof AvailabilityCapability
     */
    evidence?: CapabilityEvidence;
    /**
     *
     * @type {AvailabilityCapabilityModeEnum}
     * @memberof AvailabilityCapability
     */
    mode?: AvailabilityCapabilityModeEnum;
    /**
     *
     * @type {AvailabilityCapabilityStatusEnum}
     * @memberof AvailabilityCapability
     */
    status?: AvailabilityCapabilityStatusEnum;
}
/**
 * @export
 */
export declare const AvailabilityCapabilityModeEnum: {
    readonly MadeToOrder: "made_to_order";
    readonly Stocked: "stocked";
    readonly Mixed: "mixed";
    readonly Unknown: "unknown";
};
export type AvailabilityCapabilityModeEnum = typeof AvailabilityCapabilityModeEnum[keyof typeof AvailabilityCapabilityModeEnum];
/**
 * @export
 */
export declare const AvailabilityCapabilityStatusEnum: {
    readonly Available: "available";
    readonly Limited: "limited";
    readonly Unavailable: "unavailable";
    readonly Unknown: "unknown";
};
export type AvailabilityCapabilityStatusEnum = typeof AvailabilityCapabilityStatusEnum[keyof typeof AvailabilityCapabilityStatusEnum];
/**
 * Check if a given object implements the AvailabilityCapability interface.
 */
export declare function instanceOfAvailabilityCapability(value: object): value is AvailabilityCapability;
export declare function AvailabilityCapabilityFromJSON(json: any): AvailabilityCapability;
export declare function AvailabilityCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvailabilityCapability;
export declare function AvailabilityCapabilityToJSON(json: any): AvailabilityCapability;
export declare function AvailabilityCapabilityToJSONTyped(value?: AvailabilityCapability | null, ignoreDiscriminator?: boolean): any;
