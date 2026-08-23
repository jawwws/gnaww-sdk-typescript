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
exports.PublicRecipeStateStatusEnum = exports.PublicRecipeStatePersistedEnum = void 0;
exports.instanceOfPublicRecipeState = instanceOfPublicRecipeState;
exports.PublicRecipeStateFromJSON = PublicRecipeStateFromJSON;
exports.PublicRecipeStateFromJSONTyped = PublicRecipeStateFromJSONTyped;
exports.PublicRecipeStateToJSON = PublicRecipeStateToJSON;
exports.PublicRecipeStateToJSONTyped = PublicRecipeStateToJSONTyped;
/**
 * @export
 */
exports.PublicRecipeStatePersistedEnum = {
    False: false
};
/**
 * @export
 */
exports.PublicRecipeStateStatusEnum = {
    Eligible: 'eligible',
    Ineligible: 'ineligible',
    NotAvailable: 'not_available'
};
/**
 * Check if a given object implements the PublicRecipeState interface.
 */
function instanceOfPublicRecipeState(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function PublicRecipeStateFromJSON(json) {
    return PublicRecipeStateFromJSONTyped(json, false);
}
function PublicRecipeStateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'persisted': json['persisted'] == null ? undefined : json['persisted'],
        'reasons': json['reasons'] == null ? undefined : json['reasons'],
        'recipeId': json['recipe_id'] == null ? undefined : json['recipe_id'],
        'status': json['status'],
    };
}
function PublicRecipeStateToJSON(json) {
    return PublicRecipeStateToJSONTyped(json, false);
}
function PublicRecipeStateToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'persisted': value['persisted'],
        'reasons': value['reasons'],
        'recipe_id': value['recipeId'],
        'status': value['status'],
    };
}
