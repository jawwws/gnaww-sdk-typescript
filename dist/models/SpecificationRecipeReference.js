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
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificationRecipeReferenceStatusEnum = void 0;
exports.instanceOfSpecificationRecipeReference = instanceOfSpecificationRecipeReference;
exports.SpecificationRecipeReferenceFromJSON = SpecificationRecipeReferenceFromJSON;
exports.SpecificationRecipeReferenceFromJSONTyped = SpecificationRecipeReferenceFromJSONTyped;
exports.SpecificationRecipeReferenceToJSON = SpecificationRecipeReferenceToJSON;
exports.SpecificationRecipeReferenceToJSONTyped = SpecificationRecipeReferenceToJSONTyped;
/**
 * @export
 */
exports.SpecificationRecipeReferenceStatusEnum = {
    Eligible: 'eligible',
    Ineligible: 'ineligible'
};
/**
 * Check if a given object implements the SpecificationRecipeReference interface.
 */
function instanceOfSpecificationRecipeReference(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function SpecificationRecipeReferenceFromJSON(json) {
    return SpecificationRecipeReferenceFromJSONTyped(json, false);
}
function SpecificationRecipeReferenceFromJSONTyped(json, ignoreDiscriminator) {
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
function SpecificationRecipeReferenceToJSON(json) {
    return SpecificationRecipeReferenceToJSONTyped(json, false);
}
function SpecificationRecipeReferenceToJSONTyped(value, ignoreDiscriminator = false) {
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
