"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificationFieldProvenanceProvenanceEnum = void 0;
exports.instanceOfSpecificationFieldProvenance = instanceOfSpecificationFieldProvenance;
exports.SpecificationFieldProvenanceFromJSON = SpecificationFieldProvenanceFromJSON;
exports.SpecificationFieldProvenanceFromJSONTyped = SpecificationFieldProvenanceFromJSONTyped;
exports.SpecificationFieldProvenanceToJSON = SpecificationFieldProvenanceToJSON;
exports.SpecificationFieldProvenanceToJSONTyped = SpecificationFieldProvenanceToJSONTyped;
/**
 * @export
 */
exports.SpecificationFieldProvenanceProvenanceEnum = {
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
function instanceOfSpecificationFieldProvenance(value) {
    if (!('path' in value) || value['path'] === undefined)
        return false;
    if (!('provenance' in value) || value['provenance'] === undefined)
        return false;
    return true;
}
function SpecificationFieldProvenanceFromJSON(json) {
    return SpecificationFieldProvenanceFromJSONTyped(json, false);
}
function SpecificationFieldProvenanceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'path': json['path'],
        'provenance': json['provenance'],
        'sourceReference': json['source_reference'] == null ? undefined : json['source_reference'],
    };
}
function SpecificationFieldProvenanceToJSON(json) {
    return SpecificationFieldProvenanceToJSONTyped(json, false);
}
function SpecificationFieldProvenanceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'path': value['path'],
        'provenance': value['provenance'],
        'source_reference': value['sourceReference'],
    };
}
