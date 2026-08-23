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
export const UseRequirementProvenanceEnum = {
    Supplied: 'supplied',
    ConfirmedReview: 'confirmed_review'
};
/**
 * Check if a given object implements the UseRequirement interface.
 */
export function instanceOfUseRequirement(value) {
    if (!('provenance' in value) || value['provenance'] === undefined)
        return false;
    if (!('requirementKey' in value) || value['requirementKey'] === undefined)
        return false;
    if (!('value' in value) || value['value'] === undefined)
        return false;
    return true;
}
export function UseRequirementFromJSON(json) {
    return UseRequirementFromJSONTyped(json, false);
}
export function UseRequirementFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'provenance': json['provenance'],
        'requirementKey': json['requirement_key'],
        'sourceExpression': json['source_expression'] == null ? undefined : json['source_expression'],
        'value': json['value'],
    };
}
export function UseRequirementToJSON(json) {
    return UseRequirementToJSONTyped(json, false);
}
export function UseRequirementToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'provenance': value['provenance'],
        'requirement_key': value['requirementKey'],
        'source_expression': value['sourceExpression'],
        'value': value['value'],
    };
}
