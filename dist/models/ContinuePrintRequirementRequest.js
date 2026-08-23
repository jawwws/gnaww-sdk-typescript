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
exports.ContinuePrintRequirementRequestSchemaVersionEnum = exports.ContinuePrintRequirementRequestSchemaNameEnum = exports.ContinuePrintRequirementRequestMatchingModeEnum = exports.ContinuePrintRequirementRequestGjsVersionEnum = void 0;
exports.instanceOfContinuePrintRequirementRequest = instanceOfContinuePrintRequirementRequest;
exports.ContinuePrintRequirementRequestFromJSON = ContinuePrintRequirementRequestFromJSON;
exports.ContinuePrintRequirementRequestFromJSONTyped = ContinuePrintRequirementRequestFromJSONTyped;
exports.ContinuePrintRequirementRequestToJSON = ContinuePrintRequirementRequestToJSON;
exports.ContinuePrintRequirementRequestToJSONTyped = ContinuePrintRequirementRequestToJSONTyped;
const PublicClarificationAnswer_1 = require("./PublicClarificationAnswer");
const SourceInput_1 = require("./SourceInput");
/**
 * @export
 */
exports.ContinuePrintRequirementRequestGjsVersionEnum = {
    _04: '0.4'
};
/**
 * @export
 */
exports.ContinuePrintRequirementRequestMatchingModeEnum = {
    SingleTarget: 'single_target',
    ProducerUniverse: 'producer_universe'
};
/**
 * @export
 */
exports.ContinuePrintRequirementRequestSchemaNameEnum = {
    GnawwInterpretationContinuationRequest: 'gnaww.interpretation_continuation_request'
};
/**
 * @export
 */
exports.ContinuePrintRequirementRequestSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * Check if a given object implements the ContinuePrintRequirementRequest interface.
 */
function instanceOfContinuePrintRequirementRequest(value) {
    if (!('source' in value) || value['source'] === undefined)
        return false;
    return true;
}
function ContinuePrintRequirementRequestFromJSON(json) {
    return ContinuePrintRequirementRequestFromJSONTyped(json, false);
}
function ContinuePrintRequirementRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'answers': json['answers'] == null ? undefined : (json['answers'].map(PublicClarificationAnswer_1.PublicClarificationAnswerFromJSON)),
        'gjsVersion': json['gjs_version'] == null ? undefined : json['gjs_version'],
        'matchingMode': json['matching_mode'] == null ? undefined : json['matching_mode'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': (0, SourceInput_1.SourceInputFromJSON)(json['source']),
    };
}
function ContinuePrintRequirementRequestToJSON(json) {
    return ContinuePrintRequirementRequestToJSONTyped(json, false);
}
function ContinuePrintRequirementRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'answers': value['answers'] == null ? undefined : (value['answers'].map(PublicClarificationAnswer_1.PublicClarificationAnswerToJSON)),
        'gjs_version': value['gjsVersion'],
        'matching_mode': value['matchingMode'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': (0, SourceInput_1.SourceInputToJSON)(value['source']),
    };
}
