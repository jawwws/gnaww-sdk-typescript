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
import { SourceInputFromJSON, SourceInputToJSON, } from './SourceInput';
/**
 * @export
 */
export const InterpretPrintRequirementRequestGjsVersionEnum = {
    _03: '0.3',
    _04: '0.4'
};
/**
 * @export
 */
export const InterpretPrintRequirementRequestSchemaNameEnum = {
    GnawwInterpretationRequest: 'gnaww.interpretation_request'
};
/**
 * @export
 */
export const InterpretPrintRequirementRequestSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * Check if a given object implements the InterpretPrintRequirementRequest interface.
 */
export function instanceOfInterpretPrintRequirementRequest(value) {
    if (!('source' in value) || value['source'] === undefined)
        return false;
    return true;
}
export function InterpretPrintRequirementRequestFromJSON(json) {
    return InterpretPrintRequirementRequestFromJSONTyped(json, false);
}
export function InterpretPrintRequirementRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'gjsVersion': json['gjs_version'] == null ? undefined : json['gjs_version'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': SourceInputFromJSON(json['source']),
    };
}
export function InterpretPrintRequirementRequestToJSON(json) {
    return InterpretPrintRequirementRequestToJSONTyped(json, false);
}
export function InterpretPrintRequirementRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'gjs_version': value['gjsVersion'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': SourceInputToJSON(value['source']),
    };
}
