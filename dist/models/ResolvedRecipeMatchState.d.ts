/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Safe persisted Recipe identity carried by a resolved-Recipe match.
 * @export
 * @interface ResolvedRecipeMatchState
 */
export interface ResolvedRecipeMatchState {
    /**
     *
     * @type {string}
     * @memberof ResolvedRecipeMatchState
     */
    canonicalisationVersion: string;
    /**
     *
     * @type {ResolvedRecipeMatchStatePersistedEnum}
     * @memberof ResolvedRecipeMatchState
     */
    persisted?: ResolvedRecipeMatchStatePersistedEnum;
    /**
     *
     * @type {string}
     * @memberof ResolvedRecipeMatchState
     */
    recipeId: string;
    /**
     *
     * @type {string}
     * @memberof ResolvedRecipeMatchState
     */
    recipeSchemaName: string;
    /**
     *
     * @type {string}
     * @memberof ResolvedRecipeMatchState
     */
    recipeSchemaVersion: string;
}
/**
 * @export
 */
export declare const ResolvedRecipeMatchStatePersistedEnum: {
    readonly True: true;
};
export type ResolvedRecipeMatchStatePersistedEnum = typeof ResolvedRecipeMatchStatePersistedEnum[keyof typeof ResolvedRecipeMatchStatePersistedEnum];
/**
 * Check if a given object implements the ResolvedRecipeMatchState interface.
 */
export declare function instanceOfResolvedRecipeMatchState(value: object): value is ResolvedRecipeMatchState;
export declare function ResolvedRecipeMatchStateFromJSON(json: any): ResolvedRecipeMatchState;
export declare function ResolvedRecipeMatchStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResolvedRecipeMatchState;
export declare function ResolvedRecipeMatchStateToJSON(json: any): ResolvedRecipeMatchState;
export declare function ResolvedRecipeMatchStateToJSONTyped(value?: ResolvedRecipeMatchState | null, ignoreDiscriminator?: boolean): any;
