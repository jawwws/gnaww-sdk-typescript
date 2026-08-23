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
export const BenchmarkQuantityGuidanceRequiresConfirmationEnum = {
    True: true
};
/**
 * Check if a given object implements the BenchmarkQuantityGuidance interface.
 */
export function instanceOfBenchmarkQuantityGuidance(value) {
    if (!('basis' in value) || value['basis'] === undefined)
        return false;
    return true;
}
export function BenchmarkQuantityGuidanceFromJSON(json) {
    return BenchmarkQuantityGuidanceFromJSONTyped(json, false);
}
export function BenchmarkQuantityGuidanceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'basis': json['basis'],
        'lower': json['lower'] == null ? undefined : json['lower'],
        'requiresConfirmation': json['requires_confirmation'] == null ? undefined : json['requires_confirmation'],
        'typical': json['typical'] == null ? undefined : json['typical'],
        'upper': json['upper'] == null ? undefined : json['upper'],
    };
}
export function BenchmarkQuantityGuidanceToJSON(json) {
    return BenchmarkQuantityGuidanceToJSONTyped(json, false);
}
export function BenchmarkQuantityGuidanceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'basis': value['basis'],
        'lower': value['lower'],
        'requires_confirmation': value['requiresConfirmation'],
        'typical': value['typical'],
        'upper': value['upper'],
    };
}
