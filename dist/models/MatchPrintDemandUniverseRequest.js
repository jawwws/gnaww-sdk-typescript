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
exports.MatchPrintDemandUniverseRequestSchemaVersionEnum = exports.MatchPrintDemandUniverseRequestSchemaNameEnum = void 0;
exports.instanceOfMatchPrintDemandUniverseRequest = instanceOfMatchPrintDemandUniverseRequest;
exports.MatchPrintDemandUniverseRequestFromJSON = MatchPrintDemandUniverseRequestFromJSON;
exports.MatchPrintDemandUniverseRequestFromJSONTyped = MatchPrintDemandUniverseRequestFromJSONTyped;
exports.MatchPrintDemandUniverseRequestToJSON = MatchPrintDemandUniverseRequestToJSON;
exports.MatchPrintDemandUniverseRequestToJSONTyped = MatchPrintDemandUniverseRequestToJSONTyped;
const FulfilmentRequirement_1 = require("./FulfilmentRequirement");
const PrintJobSpecificationV04_1 = require("./PrintJobSpecificationV04");
/**
 * @export
 */
exports.MatchPrintDemandUniverseRequestSchemaNameEnum = {
    GnawwSpecmatchUniverseRequest: 'gnaww.specmatch_universe_request'
};
/**
 * @export
 */
exports.MatchPrintDemandUniverseRequestSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * Check if a given object implements the MatchPrintDemandUniverseRequest interface.
 */
function instanceOfMatchPrintDemandUniverseRequest(value) {
    if (!('fulfilment' in value) || value['fulfilment'] === undefined)
        return false;
    if (!('gjs' in value) || value['gjs'] === undefined)
        return false;
    return true;
}
function MatchPrintDemandUniverseRequestFromJSON(json) {
    return MatchPrintDemandUniverseRequestFromJSONTyped(json, false);
}
function MatchPrintDemandUniverseRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'fulfilment': (0, FulfilmentRequirement_1.FulfilmentRequirementFromJSON)(json['fulfilment']),
        'gjs': (0, PrintJobSpecificationV04_1.PrintJobSpecificationV04FromJSON)(json['gjs']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
    };
}
function MatchPrintDemandUniverseRequestToJSON(json) {
    return MatchPrintDemandUniverseRequestToJSONTyped(json, false);
}
function MatchPrintDemandUniverseRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'fulfilment': (0, FulfilmentRequirement_1.FulfilmentRequirementToJSON)(value['fulfilment']),
        'gjs': (0, PrintJobSpecificationV04_1.PrintJobSpecificationV04ToJSON)(value['gjs']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
    };
}
