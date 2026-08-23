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
import type { CapabilityEvidence } from './CapabilityEvidence';
/**
 * Producer turnaround range with explicit basis and provenance.
 * @export
 * @interface TurnaroundCapability
 */
export interface TurnaroundCapability {
    /**
     *
     * @type {TurnaroundCapabilityBasisEnum}
     * @memberof TurnaroundCapability
     */
    basis?: TurnaroundCapabilityBasisEnum;
    /**
     *
     * @type {CapabilityEvidence}
     * @memberof TurnaroundCapability
     */
    evidence?: CapabilityEvidence;
    /**
     *
     * @type {number}
     * @memberof TurnaroundCapability
     */
    maximumWorkingDays?: number | null;
    /**
     *
     * @type {number}
     * @memberof TurnaroundCapability
     */
    minimumWorkingDays?: number | null;
}
/**
 * @export
 */
export declare const TurnaroundCapabilityBasisEnum: {
    readonly ProductionOnly: "production_only";
    readonly ProductionAndDispatch: "production_and_dispatch";
    readonly Unknown: "unknown";
};
export type TurnaroundCapabilityBasisEnum = typeof TurnaroundCapabilityBasisEnum[keyof typeof TurnaroundCapabilityBasisEnum];
/**
 * Check if a given object implements the TurnaroundCapability interface.
 */
export declare function instanceOfTurnaroundCapability(value: object): value is TurnaroundCapability;
export declare function TurnaroundCapabilityFromJSON(json: any): TurnaroundCapability;
export declare function TurnaroundCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): TurnaroundCapability;
export declare function TurnaroundCapabilityToJSON(json: any): TurnaroundCapability;
export declare function TurnaroundCapabilityToJSONTyped(value?: TurnaroundCapability | null, ignoreDiscriminator?: boolean): any;
