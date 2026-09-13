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
import { GjsFromJSON, GjsToJSON, } from './Gjs';
import { SpecificationExternalReferenceFromJSON, SpecificationExternalReferenceToJSON, } from './SpecificationExternalReference';
import { SpecificationFieldProvenanceFromJSON, SpecificationFieldProvenanceToJSON, } from './SpecificationFieldProvenance';
/**
 * @export
 */
export const CreateSpecificationRequestSchemaNameEnum = {
    GnawwSpecificationCreateRequest: 'gnaww.specification_create_request'
};
/**
 * @export
 */
export const CreateSpecificationRequestSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * Check if a given object implements the CreateSpecificationRequest interface.
 */
export function instanceOfCreateSpecificationRequest(value) {
    if (!('gjs' in value) || value['gjs'] === undefined)
        return false;
    return true;
}
export function CreateSpecificationRequestFromJSON(json) {
    return CreateSpecificationRequestFromJSONTyped(json, false);
}
export function CreateSpecificationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'externalReferences': json['external_references'] == null ? undefined : (json['external_references'].map(SpecificationExternalReferenceFromJSON)),
        'fieldProvenance': json['field_provenance'] == null ? undefined : (json['field_provenance'].map(SpecificationFieldProvenanceFromJSON)),
        'gjs': GjsFromJSON(json['gjs']),
        'idempotencyKey': json['idempotency_key'] == null ? undefined : json['idempotency_key'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
    };
}
export function CreateSpecificationRequestToJSON(json) {
    return CreateSpecificationRequestToJSONTyped(json, false);
}
export function CreateSpecificationRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'external_references': value['externalReferences'] == null ? undefined : (value['externalReferences'].map(SpecificationExternalReferenceToJSON)),
        'field_provenance': value['fieldProvenance'] == null ? undefined : (value['fieldProvenance'].map(SpecificationFieldProvenanceToJSON)),
        'gjs': GjsToJSON(value['gjs']),
        'idempotency_key': value['idempotencyKey'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
    };
}
