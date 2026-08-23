/* tslint:disable */
/* eslint-disable */
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
import { RecipeResourceFromJSON, RecipeResourceToJSON, } from './RecipeResource';
/**
 * @export
 */
export const ResolveRecipeResponseSchemaNameEnum = {
    GnawwRecipeResolveResult: 'gnaww.recipe_resolve_result'
};
/**
 * @export
 */
export const ResolveRecipeResponseStatusEnum = {
    Created: 'created',
    Existing: 'existing'
};
/**
 * Check if a given object implements the ResolveRecipeResponse interface.
 */
export function instanceOfResolveRecipeResponse(value) {
    if (!('recipe' in value) || value['recipe'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function ResolveRecipeResponseFromJSON(json) {
    return ResolveRecipeResponseFromJSONTyped(json, false);
}
export function ResolveRecipeResponseFromJSONTyped(json, ignoreDiscriminator) {
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
export function ResolveRecipeResponseToJSON(json) {
    return ResolveRecipeResponseToJSONTyped(json, false);
}
export function ResolveRecipeResponseToJSONTyped(value, ignoreDiscriminator = false) {
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
