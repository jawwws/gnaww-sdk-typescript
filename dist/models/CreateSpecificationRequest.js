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
exports.CreateSpecificationRequestSchemaVersionEnum = exports.CreateSpecificationRequestSchemaNameEnum = void 0;
exports.instanceOfCreateSpecificationRequest = instanceOfCreateSpecificationRequest;
exports.CreateSpecificationRequestFromJSON = CreateSpecificationRequestFromJSON;
exports.CreateSpecificationRequestFromJSONTyped = CreateSpecificationRequestFromJSONTyped;
exports.CreateSpecificationRequestToJSON = CreateSpecificationRequestToJSON;
exports.CreateSpecificationRequestToJSONTyped = CreateSpecificationRequestToJSONTyped;
const Gjs_1 = require("./Gjs");
const SpecificationExternalReference_1 = require("./SpecificationExternalReference");
const SpecificationFieldProvenance_1 = require("./SpecificationFieldProvenance");
/**
 * @export
 */
exports.CreateSpecificationRequestSchemaNameEnum = {
    GnawwSpecificationCreateRequest: 'gnaww.specification_create_request'
};
/**
 * @export
 */
exports.CreateSpecificationRequestSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * Check if a given object implements the CreateSpecificationRequest interface.
 */
function instanceOfCreateSpecificationRequest(value) {
    if (!('gjs' in value) || value['gjs'] === undefined)
        return false;
    return true;
}
function CreateSpecificationRequestFromJSON(json) {
    return CreateSpecificationRequestFromJSONTyped(json, false);
}
function CreateSpecificationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'externalReferences': json['external_references'] == null ? undefined : (json['external_references'].map(SpecificationExternalReference_1.SpecificationExternalReferenceFromJSON)),
        'fieldProvenance': json['field_provenance'] == null ? undefined : (json['field_provenance'].map(SpecificationFieldProvenance_1.SpecificationFieldProvenanceFromJSON)),
        'gjs': (0, Gjs_1.GjsFromJSON)(json['gjs']),
        'idempotencyKey': json['idempotency_key'] == null ? undefined : json['idempotency_key'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
    };
}
function CreateSpecificationRequestToJSON(json) {
    return CreateSpecificationRequestToJSONTyped(json, false);
}
function CreateSpecificationRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'external_references': value['externalReferences'] == null ? undefined : (value['externalReferences'].map(SpecificationExternalReference_1.SpecificationExternalReferenceToJSON)),
        'field_provenance': value['fieldProvenance'] == null ? undefined : (value['fieldProvenance'].map(SpecificationFieldProvenance_1.SpecificationFieldProvenanceToJSON)),
        'gjs': (0, Gjs_1.GjsToJSON)(value['gjs']),
        'idempotency_key': value['idempotencyKey'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
    };
}
