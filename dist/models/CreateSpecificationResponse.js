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
exports.CreateSpecificationResponseStatusEnum = exports.CreateSpecificationResponseSchemaVersionEnum = exports.CreateSpecificationResponseSchemaNameEnum = void 0;
exports.instanceOfCreateSpecificationResponse = instanceOfCreateSpecificationResponse;
exports.CreateSpecificationResponseFromJSON = CreateSpecificationResponseFromJSON;
exports.CreateSpecificationResponseFromJSONTyped = CreateSpecificationResponseFromJSONTyped;
exports.CreateSpecificationResponseToJSON = CreateSpecificationResponseToJSON;
exports.CreateSpecificationResponseToJSONTyped = CreateSpecificationResponseToJSONTyped;
const SpecificationResource_1 = require("./SpecificationResource");
/**
 * @export
 */
exports.CreateSpecificationResponseSchemaNameEnum = {
    GnawwSpecificationCreateResult: 'gnaww.specification_create_result'
};
/**
 * @export
 */
exports.CreateSpecificationResponseSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * @export
 */
exports.CreateSpecificationResponseStatusEnum = {
    Created: 'created',
    Existing: 'existing'
};
/**
 * Check if a given object implements the CreateSpecificationResponse interface.
 */
function instanceOfCreateSpecificationResponse(value) {
    if (!('specification' in value) || value['specification'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function CreateSpecificationResponseFromJSON(json) {
    return CreateSpecificationResponseFromJSONTyped(json, false);
}
function CreateSpecificationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'specification': (0, SpecificationResource_1.SpecificationResourceFromJSON)(json['specification']),
        'status': json['status'],
    };
}
function CreateSpecificationResponseToJSON(json) {
    return CreateSpecificationResponseToJSONTyped(json, false);
}
function CreateSpecificationResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'specification': (0, SpecificationResource_1.SpecificationResourceToJSON)(value['specification']),
        'status': value['status'],
    };
}
