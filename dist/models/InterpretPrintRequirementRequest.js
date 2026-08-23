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
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterpretPrintRequirementRequestSchemaVersionEnum = exports.InterpretPrintRequirementRequestSchemaNameEnum = exports.InterpretPrintRequirementRequestGjsVersionEnum = void 0;
exports.instanceOfInterpretPrintRequirementRequest = instanceOfInterpretPrintRequirementRequest;
exports.InterpretPrintRequirementRequestFromJSON = InterpretPrintRequirementRequestFromJSON;
exports.InterpretPrintRequirementRequestFromJSONTyped = InterpretPrintRequirementRequestFromJSONTyped;
exports.InterpretPrintRequirementRequestToJSON = InterpretPrintRequirementRequestToJSON;
exports.InterpretPrintRequirementRequestToJSONTyped = InterpretPrintRequirementRequestToJSONTyped;
const SourceInput_1 = require("./SourceInput");
/**
 * @export
 */
exports.InterpretPrintRequirementRequestGjsVersionEnum = {
    _03: '0.3',
    _04: '0.4'
};
/**
 * @export
 */
exports.InterpretPrintRequirementRequestSchemaNameEnum = {
    GnawwInterpretationRequest: 'gnaww.interpretation_request'
};
/**
 * @export
 */
exports.InterpretPrintRequirementRequestSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * Check if a given object implements the InterpretPrintRequirementRequest interface.
 */
function instanceOfInterpretPrintRequirementRequest(value) {
    if (!('source' in value) || value['source'] === undefined)
        return false;
    return true;
}
function InterpretPrintRequirementRequestFromJSON(json) {
    return InterpretPrintRequirementRequestFromJSONTyped(json, false);
}
function InterpretPrintRequirementRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'gjsVersion': json['gjs_version'] == null ? undefined : json['gjs_version'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': (0, SourceInput_1.SourceInputFromJSON)(json['source']),
    };
}
function InterpretPrintRequirementRequestToJSON(json) {
    return InterpretPrintRequirementRequestToJSONTyped(json, false);
}
function InterpretPrintRequirementRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'gjs_version': value['gjsVersion'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': (0, SourceInput_1.SourceInputToJSON)(value['source']),
    };
}
