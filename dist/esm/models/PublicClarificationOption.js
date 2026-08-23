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
 * Check if a given object implements the PublicClarificationOption interface.
 */
export function instanceOfPublicClarificationOption(value) {
    if (!('label' in value) || value['label'] === undefined)
        return false;
    if (!('value' in value) || value['value'] === undefined)
        return false;
    return true;
}
export function PublicClarificationOptionFromJSON(json) {
    return PublicClarificationOptionFromJSONTyped(json, false);
}
export function PublicClarificationOptionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'label': json['label'],
        'value': json['value'],
    };
}
export function PublicClarificationOptionToJSON(json) {
    return PublicClarificationOptionToJSONTyped(json, false);
}
export function PublicClarificationOptionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'label': value['label'],
        'value': value['value'],
    };
}
