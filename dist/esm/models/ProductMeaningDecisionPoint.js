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
 * Check if a given object implements the ProductMeaningDecisionPoint interface.
 */
export function instanceOfProductMeaningDecisionPoint(value) {
    if (!('options' in value) || value['options'] === undefined)
        return false;
    if (!('question' in value) || value['question'] === undefined)
        return false;
    if (!('rationale' in value) || value['rationale'] === undefined)
        return false;
    return true;
}
export function ProductMeaningDecisionPointFromJSON(json) {
    return ProductMeaningDecisionPointFromJSONTyped(json, false);
}
export function ProductMeaningDecisionPointFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'affectsFamilyMapping': json['affects_family_mapping'] == null ? undefined : json['affects_family_mapping'],
        'options': json['options'],
        'question': json['question'],
        'rationale': json['rationale'],
    };
}
export function ProductMeaningDecisionPointToJSON(json) {
    return ProductMeaningDecisionPointToJSONTyped(json, false);
}
export function ProductMeaningDecisionPointToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'affects_family_mapping': value['affectsFamilyMapping'],
        'options': value['options'],
        'question': value['question'],
        'rationale': value['rationale'],
    };
}
