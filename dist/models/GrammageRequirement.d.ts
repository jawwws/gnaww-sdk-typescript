/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Demand-side grammage target, range and substitution posture.
 * @export
 * @interface GrammageRequirement
 */
export interface GrammageRequirement {
    /**
     *
     * @type {number}
     * @memberof GrammageRequirement
     */
    maximumGsm?: number | null;
    /**
     *
     * @type {number}
     * @memberof GrammageRequirement
     */
    minimumGsm?: number | null;
    /**
     *
     * @type {string}
     * @memberof GrammageRequirement
     */
    outcome?: string | null;
    /**
     *
     * @type {GrammageRequirementPostureEnum}
     * @memberof GrammageRequirement
     */
    posture?: GrammageRequirementPostureEnum;
    /**
     *
     * @type {string}
     * @memberof GrammageRequirement
     */
    sourceExpression?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof GrammageRequirement
     */
    substituteApprovalRequired?: boolean;
    /**
     *
     * @type {number}
     * @memberof GrammageRequirement
     */
    targetGsm?: number | null;
}
/**
 * @export
 */
export declare const GrammageRequirementPostureEnum: {
    readonly ExactRequired: "exact_required";
    readonly PreferredTarget: "preferred_target";
    readonly AcceptableRange: "acceptable_range";
    readonly CloseSubstituteAcceptable: "close_substitute_acceptable";
    readonly ProducerRecommendationAcceptable: "producer_recommendation_acceptable";
    readonly Unspecified: "unspecified";
};
export type GrammageRequirementPostureEnum = typeof GrammageRequirementPostureEnum[keyof typeof GrammageRequirementPostureEnum];
/**
 * Check if a given object implements the GrammageRequirement interface.
 */
export declare function instanceOfGrammageRequirement(value: object): value is GrammageRequirement;
export declare function GrammageRequirementFromJSON(json: any): GrammageRequirement;
export declare function GrammageRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): GrammageRequirement;
export declare function GrammageRequirementToJSON(json: any): GrammageRequirement;
export declare function GrammageRequirementToJSONTyped(value?: GrammageRequirement | null, ignoreDiscriminator?: boolean): any;
