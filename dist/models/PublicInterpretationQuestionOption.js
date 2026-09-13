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
exports.instanceOfPublicInterpretationQuestionOption = instanceOfPublicInterpretationQuestionOption;
exports.PublicInterpretationQuestionOptionFromJSON = PublicInterpretationQuestionOptionFromJSON;
exports.PublicInterpretationQuestionOptionFromJSONTyped = PublicInterpretationQuestionOptionFromJSONTyped;
exports.PublicInterpretationQuestionOptionToJSON = PublicInterpretationQuestionOptionToJSON;
exports.PublicInterpretationQuestionOptionToJSONTyped = PublicInterpretationQuestionOptionToJSONTyped;
/**
 * Check if a given object implements the PublicInterpretationQuestionOption interface.
 */
function instanceOfPublicInterpretationQuestionOption(value) {
    if (!('label' in value) || value['label'] === undefined)
        return false;
    if (!('value' in value) || value['value'] === undefined)
        return false;
    return true;
}
function PublicInterpretationQuestionOptionFromJSON(json) {
    return PublicInterpretationQuestionOptionFromJSONTyped(json, false);
}
function PublicInterpretationQuestionOptionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'label': json['label'],
        'value': json['value'],
    };
}
function PublicInterpretationQuestionOptionToJSON(json) {
    return PublicInterpretationQuestionOptionToJSONTyped(json, false);
}
function PublicInterpretationQuestionOptionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'label': value['label'],
        'value': value['value'],
    };
}
