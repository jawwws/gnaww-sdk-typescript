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
exports.PublicJobStructureProvenanceEnum = exports.PublicJobStructureKindEnum = void 0;
exports.instanceOfPublicJobStructure = instanceOfPublicJobStructure;
exports.PublicJobStructureFromJSON = PublicJobStructureFromJSON;
exports.PublicJobStructureFromJSONTyped = PublicJobStructureFromJSONTyped;
exports.PublicJobStructureToJSON = PublicJobStructureToJSON;
exports.PublicJobStructureToJSONTyped = PublicJobStructureToJSONTyped;
/**
 * @export
 */
exports.PublicJobStructureKindEnum = {
    Variant: 'variant',
    Component: 'component',
    Operation: 'operation'
};
/**
 * @export
 */
exports.PublicJobStructureProvenanceEnum = {
    Supplied: 'supplied',
    Derived: 'derived',
    Confirmed: 'confirmed',
    Controlled: 'controlled'
};
/**
 * Check if a given object implements the PublicJobStructure interface.
 */
function instanceOfPublicJobStructure(value) {
    if (!('kind' in value) || value['kind'] === undefined)
        return false;
    if (!('label' in value) || value['label'] === undefined)
        return false;
    if (!('structureId' in value) || value['structureId'] === undefined)
        return false;
    return true;
}
function PublicJobStructureFromJSON(json) {
    return PublicJobStructureFromJSONTyped(json, false);
}
function PublicJobStructureFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'kind': json['kind'],
        'label': json['label'],
        'provenance': json['provenance'] == null ? undefined : json['provenance'],
        'sourceExpression': json['source_expression'] == null ? undefined : json['source_expression'],
        'structureId': json['structure_id'],
        'values': json['values'] == null ? undefined : json['values'],
    };
}
function PublicJobStructureToJSON(json) {
    return PublicJobStructureToJSONTyped(json, false);
}
function PublicJobStructureToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'kind': value['kind'],
        'label': value['label'],
        'provenance': value['provenance'],
        'source_expression': value['sourceExpression'],
        'structure_id': value['structureId'],
        'values': value['values'],
    };
}
