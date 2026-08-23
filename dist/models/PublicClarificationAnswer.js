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
exports.instanceOfPublicClarificationAnswer = instanceOfPublicClarificationAnswer;
exports.PublicClarificationAnswerFromJSON = PublicClarificationAnswerFromJSON;
exports.PublicClarificationAnswerFromJSONTyped = PublicClarificationAnswerFromJSONTyped;
exports.PublicClarificationAnswerToJSON = PublicClarificationAnswerToJSON;
exports.PublicClarificationAnswerToJSONTyped = PublicClarificationAnswerToJSONTyped;
/**
 * Check if a given object implements the PublicClarificationAnswer interface.
 */
function instanceOfPublicClarificationAnswer(value) {
    if (!('key' in value) || value['key'] === undefined)
        return false;
    if (!('value' in value) || value['value'] === undefined)
        return false;
    return true;
}
function PublicClarificationAnswerFromJSON(json) {
    return PublicClarificationAnswerFromJSONTyped(json, false);
}
function PublicClarificationAnswerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'key': json['key'],
        'value': json['value'],
    };
}
function PublicClarificationAnswerToJSON(json) {
    return PublicClarificationAnswerToJSONTyped(json, false);
}
function PublicClarificationAnswerToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'key': value['key'],
        'value': value['value'],
    };
}
