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
/**
 * @export
 */
export const RecipeResourceSchemaNameEnum = {
    GnawwRecipeResource: 'gnaww.recipe_resource'
};
/**
 * @export
 */
export const RecipeResourceStatusEnum = {
    Active: 'active'
};
/**
 * Check if a given object implements the RecipeResource interface.
 */
export function instanceOfRecipeResource(value) {
    if (!('canonicalPayload' in value) || value['canonicalPayload'] === undefined)
        return false;
    if (!('canonicalisationVersion' in value) || value['canonicalisationVersion'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('recipeId' in value) || value['recipeId'] === undefined)
        return false;
    if (!('recipeSchemaName' in value) || value['recipeSchemaName'] === undefined)
        return false;
    if (!('recipeSchemaVersion' in value) || value['recipeSchemaVersion'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function RecipeResourceFromJSON(json) {
    return RecipeResourceFromJSONTyped(json, false);
}
export function RecipeResourceFromJSONTyped(json, ignoreDiscriminator) {
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
export function RecipeResourceToJSON(json) {
    return RecipeResourceToJSONTyped(json, false);
}
export function RecipeResourceToJSONTyped(value, ignoreDiscriminator = false) {
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
