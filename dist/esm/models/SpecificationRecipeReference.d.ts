/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Recipe eligibility for the retained demand without changing Recipe semantics.
 * @export
 * @interface SpecificationRecipeReference
 */
export interface SpecificationRecipeReference {
    /**
     *
     * @type {boolean}
     * @memberof SpecificationRecipeReference
     */
    persisted?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof SpecificationRecipeReference
     */
    reasons?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof SpecificationRecipeReference
     */
    recipeId?: string | null;
    /**
     *
     * @type {SpecificationRecipeReferenceStatusEnum}
     * @memberof SpecificationRecipeReference
     */
    status: SpecificationRecipeReferenceStatusEnum;
}
/**
 * @export
 */
export declare const SpecificationRecipeReferenceStatusEnum: {
    readonly Eligible: "eligible";
    readonly Ineligible: "ineligible";
};
export type SpecificationRecipeReferenceStatusEnum = typeof SpecificationRecipeReferenceStatusEnum[keyof typeof SpecificationRecipeReferenceStatusEnum];
/**
 * Check if a given object implements the SpecificationRecipeReference interface.
 */
export declare function instanceOfSpecificationRecipeReference(value: object): value is SpecificationRecipeReference;
export declare function SpecificationRecipeReferenceFromJSON(json: any): SpecificationRecipeReference;
export declare function SpecificationRecipeReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpecificationRecipeReference;
export declare function SpecificationRecipeReferenceToJSON(json: any): SpecificationRecipeReference;
export declare function SpecificationRecipeReferenceToJSONTyped(value?: SpecificationRecipeReference | null, ignoreDiscriminator?: boolean): any;
