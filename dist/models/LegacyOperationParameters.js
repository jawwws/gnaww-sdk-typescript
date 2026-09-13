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
exports.LegacyOperationParametersKindEnum = void 0;
exports.instanceOfLegacyOperationParameters = instanceOfLegacyOperationParameters;
exports.LegacyOperationParametersFromJSON = LegacyOperationParametersFromJSON;
exports.LegacyOperationParametersFromJSONTyped = LegacyOperationParametersFromJSONTyped;
exports.LegacyOperationParametersToJSON = LegacyOperationParametersToJSON;
exports.LegacyOperationParametersToJSONTyped = LegacyOperationParametersToJSONTyped;
/**
 * @export
 */
exports.LegacyOperationParametersKindEnum = {
    Legacy: 'legacy'
};
/**
 * Check if a given object implements the LegacyOperationParameters interface.
 */
function instanceOfLegacyOperationParameters(value) {
    if (!('sourceName' in value) || value['sourceName'] === undefined)
        return false;
    return true;
}
function LegacyOperationParametersFromJSON(json) {
    return LegacyOperationParametersFromJSONTyped(json, false);
}
function LegacyOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'kind': json['kind'] == null ? undefined : json['kind'],
        'sourceName': json['source_name'],
        'sourceNotes': json['source_notes'] == null ? undefined : json['source_notes'],
        'sourceProcess': json['source_process'] == null ? undefined : json['source_process'],
    };
}
function LegacyOperationParametersToJSON(json) {
    return LegacyOperationParametersToJSONTyped(json, false);
}
function LegacyOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'kind': value['kind'],
        'source_name': value['sourceName'],
        'source_notes': value['sourceNotes'],
        'source_process': value['sourceProcess'],
    };
}
