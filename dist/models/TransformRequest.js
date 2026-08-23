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
exports.instanceOfTransformRequest = instanceOfTransformRequest;
exports.TransformRequestFromJSON = TransformRequestFromJSON;
exports.TransformRequestFromJSONTyped = TransformRequestFromJSONTyped;
exports.TransformRequestToJSON = TransformRequestToJSON;
exports.TransformRequestToJSONTyped = TransformRequestToJSONTyped;
const SourceInput_1 = require("./SourceInput");
/**
 * Check if a given object implements the TransformRequest interface.
 */
function instanceOfTransformRequest(value) {
    if (!('source' in value) || value['source'] === undefined)
        return false;
    return true;
}
function TransformRequestFromJSON(json) {
    return TransformRequestFromJSONTyped(json, false);
}
function TransformRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'requestedSchemaVersion': json['requested_schema_version'] == null ? undefined : json['requested_schema_version'],
        'source': (0, SourceInput_1.SourceInputFromJSON)(json['source']),
    };
}
function TransformRequestToJSON(json) {
    return TransformRequestToJSONTyped(json, false);
}
function TransformRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'requested_schema_version': value['requestedSchemaVersion'],
        'source': (0, SourceInput_1.SourceInputToJSON)(value['source']),
    };
}
