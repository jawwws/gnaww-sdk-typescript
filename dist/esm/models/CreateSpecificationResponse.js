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
import { SpecificationResourceFromJSON, SpecificationResourceToJSON, } from './SpecificationResource';
/**
 * @export
 */
export const CreateSpecificationResponseSchemaNameEnum = {
    GnawwSpecificationCreateResult: 'gnaww.specification_create_result'
};
/**
 * @export
 */
export const CreateSpecificationResponseSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * @export
 */
export const CreateSpecificationResponseStatusEnum = {
    Created: 'created',
    Existing: 'existing'
};
/**
 * Check if a given object implements the CreateSpecificationResponse interface.
 */
export function instanceOfCreateSpecificationResponse(value) {
    if (!('specification' in value) || value['specification'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function CreateSpecificationResponseFromJSON(json) {
    return CreateSpecificationResponseFromJSONTyped(json, false);
}
export function CreateSpecificationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'specification': SpecificationResourceFromJSON(json['specification']),
        'status': json['status'],
    };
}
export function CreateSpecificationResponseToJSON(json) {
    return CreateSpecificationResponseToJSONTyped(json, false);
}
export function CreateSpecificationResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'specification': SpecificationResourceToJSON(value['specification']),
        'status': value['status'],
    };
}
