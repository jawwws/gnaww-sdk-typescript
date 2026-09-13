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
export const SpecificationFieldProvenanceProvenanceEnum = {
    Supplied: 'supplied',
    ConfirmedReview: 'confirmed_review',
    UserInput: 'user_input',
    UserOverride: 'user_override',
    CatalogueGuidance: 'catalogue_guidance',
    DeterministicTaxonomy: 'deterministic_taxonomy'
};
/**
 * Check if a given object implements the SpecificationFieldProvenance interface.
 */
export function instanceOfSpecificationFieldProvenance(value) {
    if (!('path' in value) || value['path'] === undefined)
        return false;
    if (!('provenance' in value) || value['provenance'] === undefined)
        return false;
    return true;
}
export function SpecificationFieldProvenanceFromJSON(json) {
    return SpecificationFieldProvenanceFromJSONTyped(json, false);
}
export function SpecificationFieldProvenanceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'path': json['path'],
        'provenance': json['provenance'],
        'sourceReference': json['source_reference'] == null ? undefined : json['source_reference'],
    };
}
export function SpecificationFieldProvenanceToJSON(json) {
    return SpecificationFieldProvenanceToJSONTyped(json, false);
}
export function SpecificationFieldProvenanceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'path': value['path'],
        'provenance': value['provenance'],
        'source_reference': value['sourceReference'],
    };
}
