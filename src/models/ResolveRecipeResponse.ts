/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */

import { mapValues } from '../runtime';
import type { RecipeResource } from './RecipeResource';
import {
    RecipeResourceFromJSON,
    RecipeResourceFromJSONTyped,
    RecipeResourceToJSON,
    RecipeResourceToJSONTyped,
} from './RecipeResource';

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
export const ResolveRecipeResponseSchemaNameEnum = {
    GnawwRecipeResolveResult: 'gnaww.recipe_resolve_result'
} as const;
export type ResolveRecipeResponseSchemaNameEnum = typeof ResolveRecipeResponseSchemaNameEnum[keyof typeof ResolveRecipeResponseSchemaNameEnum];

/**
 * @export
 */
export const ResolveRecipeResponseStatusEnum = {
    Created: 'created',
    Existing: 'existing'
} as const;
export type ResolveRecipeResponseStatusEnum = typeof ResolveRecipeResponseStatusEnum[keyof typeof ResolveRecipeResponseStatusEnum];


/**
 * Check if a given object implements the ResolveRecipeResponse interface.
 */
export function instanceOfResolveRecipeResponse(value: object): value is ResolveRecipeResponse {
    if (!('recipe' in value) || value['recipe'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function ResolveRecipeResponseFromJSON(json: any): ResolveRecipeResponse {
    return ResolveRecipeResponseFromJSONTyped(json, false);
}

export function ResolveRecipeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResolveRecipeResponse {
    if (json == null) {
        return json;
    }
    return {

        'recipe': RecipeResourceFromJSON(json['recipe']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'status': json['status'],
    };
}

export function ResolveRecipeResponseToJSON(json: any): ResolveRecipeResponse {
    return ResolveRecipeResponseToJSONTyped(json, false);
}

export function ResolveRecipeResponseToJSONTyped(value?: ResolveRecipeResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'recipe': RecipeResourceToJSON(value['recipe']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'status': value['status'],
    };
}
