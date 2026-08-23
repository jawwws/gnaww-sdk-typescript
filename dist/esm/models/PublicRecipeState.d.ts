/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Safe Recipe eligibility view without persistence internals.
 * @export
 * @interface PublicRecipeState
 */
export interface PublicRecipeState {
    /**
     *
     * @type {PublicRecipeStatePersistedEnum}
     * @memberof PublicRecipeState
     */
    persisted?: PublicRecipeStatePersistedEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof PublicRecipeState
     */
    reasons?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof PublicRecipeState
     */
    recipeId?: string | null;
    /**
     *
     * @type {PublicRecipeStateStatusEnum}
     * @memberof PublicRecipeState
     */
    status: PublicRecipeStateStatusEnum;
}
/**
 * @export
 */
export declare const PublicRecipeStatePersistedEnum: {
    readonly False: false;
};
export type PublicRecipeStatePersistedEnum = typeof PublicRecipeStatePersistedEnum[keyof typeof PublicRecipeStatePersistedEnum];
/**
 * @export
 */
export declare const PublicRecipeStateStatusEnum: {
    readonly Eligible: "eligible";
    readonly Ineligible: "ineligible";
    readonly NotAvailable: "not_available";
};
export type PublicRecipeStateStatusEnum = typeof PublicRecipeStateStatusEnum[keyof typeof PublicRecipeStateStatusEnum];
/**
 * Check if a given object implements the PublicRecipeState interface.
 */
export declare function instanceOfPublicRecipeState(value: object): value is PublicRecipeState;
export declare function PublicRecipeStateFromJSON(json: any): PublicRecipeState;
export declare function PublicRecipeStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicRecipeState;
export declare function PublicRecipeStateToJSON(json: any): PublicRecipeState;
export declare function PublicRecipeStateToJSONTyped(value?: PublicRecipeState | null, ignoreDiscriminator?: boolean): any;
