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
    canonicalPayload: { [key: string]: any; };
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
export const RecipeResourceSchemaNameEnum = {
    GnawwRecipeResource: 'gnaww.recipe_resource'
} as const;
export type RecipeResourceSchemaNameEnum = typeof RecipeResourceSchemaNameEnum[keyof typeof RecipeResourceSchemaNameEnum];

/**
 * @export
 */
export const RecipeResourceStatusEnum = {
    Active: 'active'
} as const;
export type RecipeResourceStatusEnum = typeof RecipeResourceStatusEnum[keyof typeof RecipeResourceStatusEnum];


/**
 * Check if a given object implements the RecipeResource interface.
 */
export function instanceOfRecipeResource(value: object): value is RecipeResource {
    if (!('canonicalPayload' in value) || value['canonicalPayload'] === undefined) return false;
    if (!('canonicalisationVersion' in value) || value['canonicalisationVersion'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('recipeId' in value) || value['recipeId'] === undefined) return false;
    if (!('recipeSchemaName' in value) || value['recipeSchemaName'] === undefined) return false;
    if (!('recipeSchemaVersion' in value) || value['recipeSchemaVersion'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function RecipeResourceFromJSON(json: any): RecipeResource {
    return RecipeResourceFromJSONTyped(json, false);
}

export function RecipeResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipeResource {
    if (json == null) {
        return json;
    }
    return {

        'canonicalPayload': json['canonical_payload'],
        'canonicalisationVersion': json['canonicalisation_version'],
        'createdAt': (new Date(json['created_at'])),
        'recipeId': json['recipe_id'],
        'recipeSchemaName': json['recipe_schema_name'],
        'recipeSchemaVersion': json['recipe_schema_version'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'status': json['status'],
    };
}

export function RecipeResourceToJSON(json: any): RecipeResource {
    return RecipeResourceToJSONTyped(json, false);
}

export function RecipeResourceToJSONTyped(value?: RecipeResource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'canonical_payload': value['canonicalPayload'],
        'canonicalisation_version': value['canonicalisationVersion'],
        'created_at': value['createdAt'].toISOString(),
        'recipe_id': value['recipeId'],
        'recipe_schema_name': value['recipeSchemaName'],
        'recipe_schema_version': value['recipeSchemaVersion'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'status': value['status'],
    };
}
