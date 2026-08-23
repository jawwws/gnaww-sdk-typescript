/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Confirmed production-relevant use intent carried by GJS v0.4.
 * @export
 * @interface UseRequirement
 */
export interface UseRequirement {
    /**
     *
     * @type {UseRequirementProvenanceEnum}
     * @memberof UseRequirement
     */
    provenance: UseRequirementProvenanceEnum;
    /**
     *
     * @type {string}
     * @memberof UseRequirement
     */
    requirementKey: string;
    /**
     *
     * @type {string}
     * @memberof UseRequirement
     */
    sourceExpression?: string | null;
    /**
     *
     * @type {string}
     * @memberof UseRequirement
     */
    value: string;
}
/**
 * @export
 */
export declare const UseRequirementProvenanceEnum: {
    readonly Supplied: "supplied";
    readonly ConfirmedReview: "confirmed_review";
};
export type UseRequirementProvenanceEnum = typeof UseRequirementProvenanceEnum[keyof typeof UseRequirementProvenanceEnum];
/**
 * Check if a given object implements the UseRequirement interface.
 */
export declare function instanceOfUseRequirement(value: object): value is UseRequirement;
export declare function UseRequirementFromJSON(json: any): UseRequirement;
export declare function UseRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): UseRequirement;
export declare function UseRequirementToJSON(json: any): UseRequirement;
export declare function UseRequirementToJSONTyped(value?: UseRequirement | null, ignoreDiscriminator?: boolean): any;
