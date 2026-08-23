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
/**
 * @export
 */
export const ResolvedRecipeMatchStatePersistedEnum = {
    True: true
};
/**
 * Check if a given object implements the ResolvedRecipeMatchState interface.
 */
export function instanceOfResolvedRecipeMatchState(value) {
    if (!('canonicalisationVersion' in value) || value['canonicalisationVersion'] === undefined)
        return false;
    if (!('recipeId' in value) || value['recipeId'] === undefined)
        return false;
    if (!('recipeSchemaName' in value) || value['recipeSchemaName'] === undefined)
        return false;
    if (!('recipeSchemaVersion' in value) || value['recipeSchemaVersion'] === undefined)
        return false;
    return true;
}
export function ResolvedRecipeMatchStateFromJSON(json) {
    return ResolvedRecipeMatchStateFromJSONTyped(json, false);
}
export function ResolvedRecipeMatchStateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'canonicalisationVersion': json['canonicalisation_version'],
        'persisted': json['persisted'] == null ? undefined : json['persisted'],
        'recipeId': json['recipe_id'],
        'recipeSchemaName': json['recipe_schema_name'],
        'recipeSchemaVersion': json['recipe_schema_version'],
    };
}
export function ResolvedRecipeMatchStateToJSON(json) {
    return ResolvedRecipeMatchStateToJSONTyped(json, false);
}
export function ResolvedRecipeMatchStateToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'canonicalisation_version': value['canonicalisationVersion'],
        'persisted': value['persisted'],
        'recipe_id': value['recipeId'],
        'recipe_schema_name': value['recipeSchemaName'],
        'recipe_schema_version': value['recipeSchemaVersion'],
    };
}
