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
export const PublicSpecMatchReadinessBasisEnum = {
    Recipe: 'recipe',
    Gjs: 'gjs',
    None: 'none'
};
/**
 * Check if a given object implements the PublicSpecMatchReadiness interface.
 */
export function instanceOfPublicSpecMatchReadiness(value) {
    if (!('basis' in value) || value['basis'] === undefined)
        return false;
    if (!('canEvaluate' in value) || value['canEvaluate'] === undefined)
        return false;
    return true;
}
export function PublicSpecMatchReadinessFromJSON(json) {
    return PublicSpecMatchReadinessFromJSONTyped(json, false);
}
export function PublicSpecMatchReadinessFromJSONTyped(json, ignoreDiscriminator) {
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
export function PublicSpecMatchReadinessToJSON(json) {
    return PublicSpecMatchReadinessToJSONTyped(json, false);
}
export function PublicSpecMatchReadinessToJSONTyped(value, ignoreDiscriminator = false) {
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
