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
exports.instanceOfPublicClarificationOption = instanceOfPublicClarificationOption;
exports.PublicClarificationOptionFromJSON = PublicClarificationOptionFromJSON;
exports.PublicClarificationOptionFromJSONTyped = PublicClarificationOptionFromJSONTyped;
exports.PublicClarificationOptionToJSON = PublicClarificationOptionToJSON;
exports.PublicClarificationOptionToJSONTyped = PublicClarificationOptionToJSONTyped;
/**
 * Check if a given object implements the PublicClarificationOption interface.
 */
function instanceOfPublicClarificationOption(value) {
    if (!('label' in value) || value['label'] === undefined)
        return false;
    if (!('value' in value) || value['value'] === undefined)
        return false;
    return true;
}
function PublicClarificationOptionFromJSON(json) {
    return PublicClarificationOptionFromJSONTyped(json, false);
}
function PublicClarificationOptionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'label': json['label'],
        'value': json['value'],
    };
}
function PublicClarificationOptionToJSON(json) {
    return PublicClarificationOptionToJSONTyped(json, false);
}
function PublicClarificationOptionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'label': value['label'],
        'value': value['value'],
    };
}
