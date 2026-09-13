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
import { SpecificationRecipeReferenceFromJSON, SpecificationRecipeReferenceToJSON, } from './SpecificationRecipeReference';
/**
 * @export
 */
export const SpecificationResourceGjsSchemaNameEnum = {
    JawwwsPrintJobSpecification: 'jawwws.print_job_specification'
};
/**
 * @export
 */
export const SpecificationResourceImmutableEnum = {
    True: true
};
/**
 * @export
 */
export const SpecificationResourceSchemaNameEnum = {
    GnawwSpecificationResource: 'gnaww.specification_resource'
};
/**
 * @export
 */
export const SpecificationResourceSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * Check if a given object implements the SpecificationResource interface.
 */
export function instanceOfSpecificationResource(value) {
    if (!('contentFingerprintSha256' in value) || value['contentFingerprintSha256'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('gjs' in value) || value['gjs'] === undefined)
        return false;
    if (!('gjsSchemaVersion' in value) || value['gjsSchemaVersion'] === undefined)
        return false;
    if (!('recipe' in value) || value['recipe'] === undefined)
        return false;
    if (!('specificationId' in value) || value['specificationId'] === undefined)
        return false;
    return true;
}
export function SpecificationResourceFromJSON(json) {
    return SpecificationResourceFromJSONTyped(json, false);
}
export function SpecificationResourceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'contentFingerprintSha256': json['content_fingerprint_sha256'],
        'createdAt': (new Date(json['created_at'])),
        'externalReferences': json['external_references'] == null ? undefined : (json['external_references'].map(SpecificationExternalReferenceFromJSON)),
        'fieldProvenance': json['field_provenance'] == null ? undefined : (json['field_provenance'].map(SpecificationFieldProvenanceFromJSON)),
        'gjs': GjsFromJSON(json['gjs']),
        'gjsSchemaName': json['gjs_schema_name'] == null ? undefined : json['gjs_schema_name'],
        'gjsSchemaVersion': json['gjs_schema_version'],
        'immutable': json['immutable'] == null ? undefined : json['immutable'],
        'recipe': SpecificationRecipeReferenceFromJSON(json['recipe']),
        'resourceVersion': json['resource_version'] == null ? undefined : json['resource_version'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'specificationId': json['specification_id'],
    };
}
export function SpecificationResourceToJSON(json) {
    return SpecificationResourceToJSONTyped(json, false);
}
export function SpecificationResourceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'content_fingerprint_sha256': value['contentFingerprintSha256'],
        'created_at': value['createdAt'].toISOString(),
        'external_references': value['externalReferences'] == null ? undefined : (value['externalReferences'].map(SpecificationExternalReferenceToJSON)),
        'field_provenance': value['fieldProvenance'] == null ? undefined : (value['fieldProvenance'].map(SpecificationFieldProvenanceToJSON)),
        'gjs': GjsToJSON(value['gjs']),
        'gjs_schema_name': value['gjsSchemaName'],
        'gjs_schema_version': value['gjsSchemaVersion'],
        'immutable': value['immutable'],
        'recipe': SpecificationRecipeReferenceToJSON(value['recipe']),
        'resource_version': value['resourceVersion'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'specification_id': value['specificationId'],
    };
}
