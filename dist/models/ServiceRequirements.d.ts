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
/**
 * Requested operational service constraints for a canonical job.
 * @export
 * @interface ServiceRequirements
 */
export interface ServiceRequirements {
    /**
     *
     * @type {number}
     * @memberof ServiceRequirements
     */
    maximumTurnaroundWorkingDays?: number | null;
    /**
     *
     * @type {boolean}
     * @memberof ServiceRequirements
     */
    requiresConfirmedAvailability?: boolean;
    /**
     *
     * @type {ServiceRequirementsTurnaroundBasisEnum}
     * @memberof ServiceRequirements
     */
    turnaroundBasis?: ServiceRequirementsTurnaroundBasisEnum;
}
/**
 * @export
 */
export declare const ServiceRequirementsTurnaroundBasisEnum: {
    readonly ProductionOnly: "production_only";
    readonly ProductionAndDispatch: "production_and_dispatch";
    readonly Unknown: "unknown";
};
export type ServiceRequirementsTurnaroundBasisEnum = typeof ServiceRequirementsTurnaroundBasisEnum[keyof typeof ServiceRequirementsTurnaroundBasisEnum];
/**
 * Check if a given object implements the ServiceRequirements interface.
 */
export declare function instanceOfServiceRequirements(value: object): value is ServiceRequirements;
export declare function ServiceRequirementsFromJSON(json: any): ServiceRequirements;
export declare function ServiceRequirementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceRequirements;
export declare function ServiceRequirementsToJSON(json: any): ServiceRequirements;
export declare function ServiceRequirementsToJSONTyped(value?: ServiceRequirements | null, ignoreDiscriminator?: boolean): any;
