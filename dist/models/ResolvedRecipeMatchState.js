"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolvedRecipeMatchStatePersistedEnum = void 0;
exports.instanceOfResolvedRecipeMatchState = instanceOfResolvedRecipeMatchState;
exports.ResolvedRecipeMatchStateFromJSON = ResolvedRecipeMatchStateFromJSON;
exports.ResolvedRecipeMatchStateFromJSONTyped = ResolvedRecipeMatchStateFromJSONTyped;
exports.ResolvedRecipeMatchStateToJSON = ResolvedRecipeMatchStateToJSON;
exports.ResolvedRecipeMatchStateToJSONTyped = ResolvedRecipeMatchStateToJSONTyped;
/**
 * @export
 */
exports.ResolvedRecipeMatchStatePersistedEnum = {
    True: true
};
/**
 * Check if a given object implements the ResolvedRecipeMatchState interface.
 */
function instanceOfResolvedRecipeMatchState(value) {
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
function ResolvedRecipeMatchStateFromJSON(json) {
    return ResolvedRecipeMatchStateFromJSONTyped(json, false);
}
function ResolvedRecipeMatchStateFromJSONTyped(json, ignoreDiscriminator) {
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
function ResolvedRecipeMatchStateToJSON(json) {
    return ResolvedRecipeMatchStateToJSONTyped(json, false);
}
function ResolvedRecipeMatchStateToJSONTyped(value, ignoreDiscriminator = false) {
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
