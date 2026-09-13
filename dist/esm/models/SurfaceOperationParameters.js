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
export const SurfaceOperationParametersKindEnum = {
    Surface: 'surface'
};
/**
 * Check if a given object implements the SurfaceOperationParameters interface.
 */
export function instanceOfSurfaceOperationParameters(value) {
    return true;
}
export function SurfaceOperationParametersFromJSON(json) {
    return SurfaceOperationParametersFromJSONTyped(json, false);
}
export function SurfaceOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'colour': json['colour'] == null ? undefined : json['colour'],
        'finish': json['finish'] == null ? undefined : json['finish'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'material': json['material'] == null ? undefined : json['material'],
    };
}
export function SurfaceOperationParametersToJSON(json) {
    return SurfaceOperationParametersToJSONTyped(json, false);
}
export function SurfaceOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'colour': value['colour'],
        'finish': value['finish'],
        'kind': value['kind'],
        'material': value['material'],
    };
}
