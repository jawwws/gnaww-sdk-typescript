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
 * Safe developer-facing representation of one canonical Recipe.
 * @export
 * @interface RecipeResource
 */
export interface RecipeResource {
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof RecipeResource
     */
    canonicalPayload: {
        [key: string]: any;
    };
    /**
     *
     * @type {string}
     * @memberof RecipeResource
     */
    canonicalisationVersion: string;
    /**
     *
     * @type {Date}
     * @memberof RecipeResource
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof RecipeResource
     */
    recipeId: string;
    /**
     *
     * @type {string}
     * @memberof RecipeResource
     */
    recipeSchemaName: string;
    /**
     *
     * @type {string}
     * @memberof RecipeResource
     */
    recipeSchemaVersion: string;
    /**
     *
     * @type {RecipeResourceSchemaNameEnum}
     * @memberof RecipeResource
     */
    schemaName?: RecipeResourceSchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof RecipeResource
     */
    schemaVersion?: string;
    /**
     *
     * @type {RecipeResourceStatusEnum}
     * @memberof RecipeResource
     */
    status: RecipeResourceStatusEnum;
}
/**
 * @export
 */
export declare const RecipeResourceSchemaNameEnum: {
    readonly GnawwRecipeResource: "gnaww.recipe_resource";
};
export type RecipeResourceSchemaNameEnum = typeof RecipeResourceSchemaNameEnum[keyof typeof RecipeResourceSchemaNameEnum];
/**
 * @export
 */
export declare const RecipeResourceStatusEnum: {
    readonly Active: "active";
};
export type RecipeResourceStatusEnum = typeof RecipeResourceStatusEnum[keyof typeof RecipeResourceStatusEnum];
/**
 * Check if a given object implements the RecipeResource interface.
 */
export declare function instanceOfRecipeResource(value: object): value is RecipeResource;
export declare function RecipeResourceFromJSON(json: any): RecipeResource;
export declare function RecipeResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipeResource;
export declare function RecipeResourceToJSON(json: any): RecipeResource;
export declare function RecipeResourceToJSONTyped(value?: RecipeResource | null, ignoreDiscriminator?: boolean): any;
