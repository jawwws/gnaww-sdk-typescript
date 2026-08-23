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
exports.ResolveRecipeResponseStatusEnum = exports.ResolveRecipeResponseSchemaNameEnum = void 0;
exports.instanceOfResolveRecipeResponse = instanceOfResolveRecipeResponse;
exports.ResolveRecipeResponseFromJSON = ResolveRecipeResponseFromJSON;
exports.ResolveRecipeResponseFromJSONTyped = ResolveRecipeResponseFromJSONTyped;
exports.ResolveRecipeResponseToJSON = ResolveRecipeResponseToJSON;
exports.ResolveRecipeResponseToJSONTyped = ResolveRecipeResponseToJSONTyped;
const RecipeResource_1 = require("./RecipeResource");
/**
 * @export
 */
exports.ResolveRecipeResponseSchemaNameEnum = {
    GnawwRecipeResolveResult: 'gnaww.recipe_resolve_result'
};
/**
 * @export
 */
exports.ResolveRecipeResponseStatusEnum = {
    Created: 'created',
    Existing: 'existing'
};
/**
 * Check if a given object implements the ResolveRecipeResponse interface.
 */
function instanceOfResolveRecipeResponse(value) {
    if (!('recipe' in value) || value['recipe'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function ResolveRecipeResponseFromJSON(json) {
    return ResolveRecipeResponseFromJSONTyped(json, false);
}
function ResolveRecipeResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'recipe': (0, RecipeResource_1.RecipeResourceFromJSON)(json['recipe']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'status': json['status'],
    };
}
function ResolveRecipeResponseToJSON(json) {
    return ResolveRecipeResponseToJSONTyped(json, false);
}
function ResolveRecipeResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'recipe': (0, RecipeResource_1.RecipeResourceToJSON)(value['recipe']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'status': value['status'],
    };
}
