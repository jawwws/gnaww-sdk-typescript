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
exports.PublicSpecMatchReadinessBasisEnum = void 0;
exports.instanceOfPublicSpecMatchReadiness = instanceOfPublicSpecMatchReadiness;
exports.PublicSpecMatchReadinessFromJSON = PublicSpecMatchReadinessFromJSON;
exports.PublicSpecMatchReadinessFromJSONTyped = PublicSpecMatchReadinessFromJSONTyped;
exports.PublicSpecMatchReadinessToJSON = PublicSpecMatchReadinessToJSON;
exports.PublicSpecMatchReadinessToJSONTyped = PublicSpecMatchReadinessToJSONTyped;
/**
 * @export
 */
exports.PublicSpecMatchReadinessBasisEnum = {
    Recipe: 'recipe',
    Gjs: 'gjs',
    None: 'none'
};
/**
 * Check if a given object implements the PublicSpecMatchReadiness interface.
 */
function instanceOfPublicSpecMatchReadiness(value) {
    if (!('basis' in value) || value['basis'] === undefined)
        return false;
    if (!('canEvaluate' in value) || value['canEvaluate'] === undefined)
        return false;
    return true;
}
function PublicSpecMatchReadinessFromJSON(json) {
    return PublicSpecMatchReadinessFromJSONTyped(json, false);
}
function PublicSpecMatchReadinessFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'basis': json['basis'],
        'canEvaluate': json['can_evaluate'],
        'preRecipe': json['pre_recipe'] == null ? undefined : json['pre_recipe'],
        'reasons': json['reasons'] == null ? undefined : json['reasons'],
    };
}
function PublicSpecMatchReadinessToJSON(json) {
    return PublicSpecMatchReadinessToJSONTyped(json, false);
}
function PublicSpecMatchReadinessToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'basis': value['basis'],
        'can_evaluate': value['canEvaluate'],
        'pre_recipe': value['preRecipe'],
        'reasons': value['reasons'],
    };
}
