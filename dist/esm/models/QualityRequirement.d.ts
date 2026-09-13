/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { OperationTarget } from './OperationTarget';
import type { NumericTolerance } from './NumericTolerance';
/**
 *
 * @export
 * @interface QualityRequirement
 */
export interface QualityRequirement {
    /**
     *
     * @type {QualityRequirementCategoryEnum}
     * @memberof QualityRequirement
     */
    category: QualityRequirementCategoryEnum;
    /**
     *
     * @type {string}
     * @memberof QualityRequirement
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof QualityRequirement
     */
    requirementId: string;
    /**
     *
     * @type {OperationTarget}
     * @memberof QualityRequirement
     */
    target?: OperationTarget | null;
    /**
     *
     * @type {NumericTolerance}
     * @memberof QualityRequirement
     */
    tolerance?: NumericTolerance | null;
}
/**
 * @export
 */
export declare const QualityRequirementCategoryEnum: {
    readonly Colour: "colour";
    readonly Dimension: "dimension";
    readonly Weight: "weight";
    readonly Registration: "registration";
    readonly CodeReadability: "code_readability";
    readonly Surface: "surface";
    readonly BatchConsistency: "batch_consistency";
    readonly Other: "other";
};
export type QualityRequirementCategoryEnum = typeof QualityRequirementCategoryEnum[keyof typeof QualityRequirementCategoryEnum];
/**
 * Check if a given object implements the QualityRequirement interface.
 */
export declare function instanceOfQualityRequirement(value: object): value is QualityRequirement;
export declare function QualityRequirementFromJSON(json: any): QualityRequirement;
export declare function QualityRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): QualityRequirement;
export declare function QualityRequirementToJSON(json: any): QualityRequirement;
export declare function QualityRequirementToJSONTyped(value?: QualityRequirement | null, ignoreDiscriminator?: boolean): any;
