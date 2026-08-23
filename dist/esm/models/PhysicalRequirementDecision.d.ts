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
 * Machine-readable physical-demand decision with buyer-safe guidance.
 * @export
 * @interface PhysicalRequirementDecision
 */
export interface PhysicalRequirementDecision {
    /**
     *
     * @type {boolean}
     * @memberof PhysicalRequirementDecision
     */
    approvalRequired?: boolean;
    /**
     *
     * @type {string}
     * @memberof PhysicalRequirementDecision
     */
    buyerMessage: string;
    /**
     *
     * @type {string}
     * @memberof PhysicalRequirementDecision
     */
    buyerQuestion?: string | null;
    /**
     *
     * @type {Array<{ [key: string]: any; }>}
     * @memberof PhysicalRequirementDecision
     */
    candidates?: Array<{
        [key: string]: any;
    }>;
    /**
     *
     * @type {PhysicalRequirementDecisionClassificationEnum}
     * @memberof PhysicalRequirementDecision
     */
    classification: PhysicalRequirementDecisionClassificationEnum;
    /**
     *
     * @type {string}
     * @memberof PhysicalRequirementDecision
     */
    fieldPath: string;
    /**
     *
     * @type {string}
     * @memberof PhysicalRequirementDecision
     */
    posture: string;
    /**
     *
     * @type {string}
     * @memberof PhysicalRequirementDecision
     */
    propertyType: string;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof PhysicalRequirementDecision
     */
    requested?: {
        [key: string]: any;
    };
    /**
     *
     * @type {PhysicalRequirementDecisionSchemaNameEnum}
     * @memberof PhysicalRequirementDecision
     */
    schemaName?: PhysicalRequirementDecisionSchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof PhysicalRequirementDecision
     */
    schemaVersion?: string;
}
/**
 * @export
 */
export declare const PhysicalRequirementDecisionClassificationEnum: {
    readonly Exact: "exact";
    readonly AcceptableSubstitute: "acceptable_substitute";
    readonly ReviewRequired: "review_required";
    readonly Unacceptable: "unacceptable";
    readonly Unknown: "unknown";
};
export type PhysicalRequirementDecisionClassificationEnum = typeof PhysicalRequirementDecisionClassificationEnum[keyof typeof PhysicalRequirementDecisionClassificationEnum];
/**
 * @export
 */
export declare const PhysicalRequirementDecisionSchemaNameEnum: {
    readonly GnawwPhysicalRequirementDecision: "gnaww.physical_requirement_decision";
};
export type PhysicalRequirementDecisionSchemaNameEnum = typeof PhysicalRequirementDecisionSchemaNameEnum[keyof typeof PhysicalRequirementDecisionSchemaNameEnum];
/**
 * Check if a given object implements the PhysicalRequirementDecision interface.
 */
export declare function instanceOfPhysicalRequirementDecision(value: object): value is PhysicalRequirementDecision;
export declare function PhysicalRequirementDecisionFromJSON(json: any): PhysicalRequirementDecision;
export declare function PhysicalRequirementDecisionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhysicalRequirementDecision;
export declare function PhysicalRequirementDecisionToJSON(json: any): PhysicalRequirementDecision;
export declare function PhysicalRequirementDecisionToJSONTyped(value?: PhysicalRequirementDecision | null, ignoreDiscriminator?: boolean): any;
