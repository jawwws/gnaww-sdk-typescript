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
exports.SpecificationResourceSchemaVersionEnum = exports.SpecificationResourceSchemaNameEnum = exports.SpecificationResourceImmutableEnum = exports.SpecificationResourceGjsSchemaNameEnum = void 0;
exports.instanceOfSpecificationResource = instanceOfSpecificationResource;
exports.SpecificationResourceFromJSON = SpecificationResourceFromJSON;
exports.SpecificationResourceFromJSONTyped = SpecificationResourceFromJSONTyped;
exports.SpecificationResourceToJSON = SpecificationResourceToJSON;
exports.SpecificationResourceToJSONTyped = SpecificationResourceToJSONTyped;
const Gjs_1 = require("./Gjs");
const SpecificationExternalReference_1 = require("./SpecificationExternalReference");
const SpecificationFieldProvenance_1 = require("./SpecificationFieldProvenance");
const SpecificationRecipeReference_1 = require("./SpecificationRecipeReference");
/**
 * @export
 */
exports.SpecificationResourceGjsSchemaNameEnum = {
    JawwwsPrintJobSpecification: 'jawwws.print_job_specification'
};
/**
 * @export
 */
exports.SpecificationResourceImmutableEnum = {
    True: true
};
/**
 * @export
 */
exports.SpecificationResourceSchemaNameEnum = {
    GnawwSpecificationResource: 'gnaww.specification_resource'
};
/**
 * @export
 */
exports.SpecificationResourceSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * Check if a given object implements the SpecificationResource interface.
 */
function instanceOfSpecificationResource(value) {
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
function SpecificationResourceFromJSON(json) {
    return SpecificationResourceFromJSONTyped(json, false);
}
function SpecificationResourceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'contentFingerprintSha256': json['content_fingerprint_sha256'],
        'createdAt': (new Date(json['created_at'])),
        'externalReferences': json['external_references'] == null ? undefined : (json['external_references'].map(SpecificationExternalReference_1.SpecificationExternalReferenceFromJSON)),
        'fieldProvenance': json['field_provenance'] == null ? undefined : (json['field_provenance'].map(SpecificationFieldProvenance_1.SpecificationFieldProvenanceFromJSON)),
        'gjs': (0, Gjs_1.GjsFromJSON)(json['gjs']),
        'gjsSchemaName': json['gjs_schema_name'] == null ? undefined : json['gjs_schema_name'],
        'gjsSchemaVersion': json['gjs_schema_version'],
        'immutable': json['immutable'] == null ? undefined : json['immutable'],
        'recipe': (0, SpecificationRecipeReference_1.SpecificationRecipeReferenceFromJSON)(json['recipe']),
        'resourceVersion': json['resource_version'] == null ? undefined : json['resource_version'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'specificationId': json['specification_id'],
    };
}
function SpecificationResourceToJSON(json) {
    return SpecificationResourceToJSONTyped(json, false);
}
function SpecificationResourceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'content_fingerprint_sha256': value['contentFingerprintSha256'],
        'created_at': value['createdAt'].toISOString(),
        'external_references': value['externalReferences'] == null ? undefined : (value['externalReferences'].map(SpecificationExternalReference_1.SpecificationExternalReferenceToJSON)),
        'field_provenance': value['fieldProvenance'] == null ? undefined : (value['fieldProvenance'].map(SpecificationFieldProvenance_1.SpecificationFieldProvenanceToJSON)),
        'gjs': (0, Gjs_1.GjsToJSON)(value['gjs']),
        'gjs_schema_name': value['gjsSchemaName'],
        'gjs_schema_version': value['gjsSchemaVersion'],
        'immutable': value['immutable'],
        'recipe': (0, SpecificationRecipeReference_1.SpecificationRecipeReferenceToJSON)(value['recipe']),
        'resource_version': value['resourceVersion'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'specification_id': value['specificationId'],
    };
}
