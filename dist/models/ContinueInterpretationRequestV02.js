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
exports.ContinueInterpretationRequestV02SchemaVersionEnum = exports.ContinueInterpretationRequestV02SchemaNameEnum = exports.ContinueInterpretationRequestV02MatchingModeEnum = exports.ContinueInterpretationRequestV02GjsVersionEnum = void 0;
exports.instanceOfContinueInterpretationRequestV02 = instanceOfContinueInterpretationRequestV02;
exports.ContinueInterpretationRequestV02FromJSON = ContinueInterpretationRequestV02FromJSON;
exports.ContinueInterpretationRequestV02FromJSONTyped = ContinueInterpretationRequestV02FromJSONTyped;
exports.ContinueInterpretationRequestV02ToJSON = ContinueInterpretationRequestV02ToJSON;
exports.ContinueInterpretationRequestV02ToJSONTyped = ContinueInterpretationRequestV02ToJSONTyped;
const PublicInterpretationContinuationAnswer_1 = require("./PublicInterpretationContinuationAnswer");
const SourceInput_1 = require("./SourceInput");
/**
 * @export
 */
exports.ContinueInterpretationRequestV02GjsVersionEnum = {
    _04: '0.4'
};
/**
 * @export
 */
exports.ContinueInterpretationRequestV02MatchingModeEnum = {
    SingleTarget: 'single_target',
    ProducerUniverse: 'producer_universe'
};
/**
 * @export
 */
exports.ContinueInterpretationRequestV02SchemaNameEnum = {
    GnawwInterpretationContinuationRequest: 'gnaww.interpretation_continuation_request'
};
/**
 * @export
 */
exports.ContinueInterpretationRequestV02SchemaVersionEnum = {
    _02: '0.2'
};
/**
 * Check if a given object implements the ContinueInterpretationRequestV02 interface.
 */
function instanceOfContinueInterpretationRequestV02(value) {
    if (!('source' in value) || value['source'] === undefined)
        return false;
    return true;
}
function ContinueInterpretationRequestV02FromJSON(json) {
    return ContinueInterpretationRequestV02FromJSONTyped(json, false);
}
function ContinueInterpretationRequestV02FromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'answers': json['answers'] == null ? undefined : (json['answers'].map(PublicInterpretationContinuationAnswer_1.PublicInterpretationContinuationAnswerFromJSON)),
        'gjsVersion': json['gjs_version'] == null ? undefined : json['gjs_version'],
        'matchingMode': json['matching_mode'] == null ? undefined : json['matching_mode'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': (0, SourceInput_1.SourceInputFromJSON)(json['source']),
    };
}
function ContinueInterpretationRequestV02ToJSON(json) {
    return ContinueInterpretationRequestV02ToJSONTyped(json, false);
}
function ContinueInterpretationRequestV02ToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'answers': value['answers'] == null ? undefined : (value['answers'].map(PublicInterpretationContinuationAnswer_1.PublicInterpretationContinuationAnswerToJSON)),
        'gjs_version': value['gjsVersion'],
        'matching_mode': value['matchingMode'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': (0, SourceInput_1.SourceInputToJSON)(value['source']),
    };
}
