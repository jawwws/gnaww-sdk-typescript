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
 * Check if a given object implements the SpecificationExternalReference interface.
 */
export function instanceOfSpecificationExternalReference(value) {
    if (!('reference' in value) || value['reference'] === undefined)
        return false;
    if (!('system' in value) || value['system'] === undefined)
        return false;
    return true;
}
export function SpecificationExternalReferenceFromJSON(json) {
    return SpecificationExternalReferenceFromJSONTyped(json, false);
}
export function SpecificationExternalReferenceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'reference': json['reference'],
        'system': json['system'],
    };
}
export function SpecificationExternalReferenceToJSON(json) {
    return SpecificationExternalReferenceToJSONTyped(json, false);
}
export function SpecificationExternalReferenceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'reference': value['reference'],
        'system': value['system'],
    };
}
