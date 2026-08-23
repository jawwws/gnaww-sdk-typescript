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
 * Check if a given object implements the PublicClarificationAnswer interface.
 */
export function instanceOfPublicClarificationAnswer(value) {
    if (!('key' in value) || value['key'] === undefined)
        return false;
    if (!('value' in value) || value['value'] === undefined)
        return false;
    return true;
}
export function PublicClarificationAnswerFromJSON(json) {
    return PublicClarificationAnswerFromJSONTyped(json, false);
}
export function PublicClarificationAnswerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'key': json['key'],
        'value': json['value'],
    };
}
export function PublicClarificationAnswerToJSON(json) {
    return PublicClarificationAnswerToJSONTyped(json, false);
}
export function PublicClarificationAnswerToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'key': value['key'],
        'value': value['value'],
    };
}
