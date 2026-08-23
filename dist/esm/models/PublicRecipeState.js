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
export const PublicRecipeStatePersistedEnum = {
    False: false
};
/**
 * @export
 */
export const PublicRecipeStateStatusEnum = {
    Eligible: 'eligible',
    Ineligible: 'ineligible',
    NotAvailable: 'not_available'
};
/**
 * Check if a given object implements the PublicRecipeState interface.
 */
export function instanceOfPublicRecipeState(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function PublicRecipeStateFromJSON(json) {
    return PublicRecipeStateFromJSONTyped(json, false);
}
export function PublicRecipeStateFromJSONTyped(json, ignoreDiscriminator) {
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
export function PublicRecipeStateToJSON(json) {
    return PublicRecipeStateToJSONTyped(json, false);
}
export function PublicRecipeStateToJSONTyped(value, ignoreDiscriminator = false) {
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
