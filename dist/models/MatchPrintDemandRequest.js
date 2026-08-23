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
exports.MatchPrintDemandRequestSchemaVersionEnum = exports.MatchPrintDemandRequestSchemaNameEnum = void 0;
exports.instanceOfMatchPrintDemandRequest = instanceOfMatchPrintDemandRequest;
exports.MatchPrintDemandRequestFromJSON = MatchPrintDemandRequestFromJSON;
exports.MatchPrintDemandRequestFromJSONTyped = MatchPrintDemandRequestFromJSONTyped;
exports.MatchPrintDemandRequestToJSON = MatchPrintDemandRequestToJSON;
exports.MatchPrintDemandRequestToJSONTyped = MatchPrintDemandRequestToJSONTyped;
const PublicMatchTargetRequest_1 = require("./PublicMatchTargetRequest");
const PrintJobSpecificationV04_1 = require("./PrintJobSpecificationV04");
/**
 * @export
 */
exports.MatchPrintDemandRequestSchemaNameEnum = {
    GnawwSpecmatchRequest: 'gnaww.specmatch_request'
};
/**
 * @export
 */
exports.MatchPrintDemandRequestSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * Check if a given object implements the MatchPrintDemandRequest interface.
 */
function instanceOfMatchPrintDemandRequest(value) {
    if (!('gjs' in value) || value['gjs'] === undefined)
        return false;
    if (!('target' in value) || value['target'] === undefined)
        return false;
    return true;
}
function MatchPrintDemandRequestFromJSON(json) {
    return MatchPrintDemandRequestFromJSONTyped(json, false);
}
function MatchPrintDemandRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'gjs': (0, PrintJobSpecificationV04_1.PrintJobSpecificationV04FromJSON)(json['gjs']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'target': (0, PublicMatchTargetRequest_1.PublicMatchTargetRequestFromJSON)(json['target']),
    };
}
function MatchPrintDemandRequestToJSON(json) {
    return MatchPrintDemandRequestToJSONTyped(json, false);
}
function MatchPrintDemandRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'gjs': (0, PrintJobSpecificationV04_1.PrintJobSpecificationV04ToJSON)(value['gjs']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'target': (0, PublicMatchTargetRequest_1.PublicMatchTargetRequestToJSON)(value['target']),
    };
}
