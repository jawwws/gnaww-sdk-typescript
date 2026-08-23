/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { RecipeResource } from './RecipeResource';
/**
 * Outcome of idempotently resolving a canonical GJS to a Recipe.
 * @export
 * @interface ResolveRecipeResponse
 */
export interface ResolveRecipeResponse {
    /**
     *
     * @type {RecipeResource}
     * @memberof ResolveRecipeResponse
     */
    recipe: RecipeResource;
    /**
     *
     * @type {ResolveRecipeResponseSchemaNameEnum}
     * @memberof ResolveRecipeResponse
     */
    schemaName?: ResolveRecipeResponseSchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof ResolveRecipeResponse
     */
    schemaVersion?: string;
    /**
     *
     * @type {ResolveRecipeResponseStatusEnum}
     * @memberof ResolveRecipeResponse
     */
    status: ResolveRecipeResponseStatusEnum;
}
/**
 * @export
 */
export declare const ResolveRecipeResponseSchemaNameEnum: {
    readonly GnawwRecipeResolveResult: "gnaww.recipe_resolve_result";
};
export type ResolveRecipeResponseSchemaNameEnum = typeof ResolveRecipeResponseSchemaNameEnum[keyof typeof ResolveRecipeResponseSchemaNameEnum];
/**
 * @export
 */
export declare const ResolveRecipeResponseStatusEnum: {
    readonly Created: "created";
    readonly Existing: "existing";
};
export type ResolveRecipeResponseStatusEnum = typeof ResolveRecipeResponseStatusEnum[keyof typeof ResolveRecipeResponseStatusEnum];
/**
 * Check if a given object implements the ResolveRecipeResponse interface.
 */
export declare function instanceOfResolveRecipeResponse(value: object): value is ResolveRecipeResponse;
export declare function ResolveRecipeResponseFromJSON(json: any): ResolveRecipeResponse;
export declare function ResolveRecipeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResolveRecipeResponse;
export declare function ResolveRecipeResponseToJSON(json: any): ResolveRecipeResponse;
export declare function ResolveRecipeResponseToJSONTyped(value?: ResolveRecipeResponse | null, ignoreDiscriminator?: boolean): any;
