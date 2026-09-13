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
export const DecorationOperationParametersKindEnum = {
    Decoration: 'decoration'
};
/**
 * Check if a given object implements the DecorationOperationParameters interface.
 */
export function instanceOfDecorationOperationParameters(value) {
    if (!('method' in value) || value['method'] === undefined)
        return false;
    return true;
}
export function DecorationOperationParametersFromJSON(json) {
    return DecorationOperationParametersFromJSONTyped(json, false);
}
export function DecorationOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'kind': json['kind'] == null ? undefined : json['kind'],
        'method': json['method'],
        'threadOrColourant': json['thread_or_colourant'] == null ? undefined : json['thread_or_colourant'],
    };
}
export function DecorationOperationParametersToJSON(json) {
    return DecorationOperationParametersToJSONTyped(json, false);
}
export function DecorationOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'kind': value['kind'],
        'method': value['method'],
        'thread_or_colourant': value['threadOrColourant'],
    };
}
