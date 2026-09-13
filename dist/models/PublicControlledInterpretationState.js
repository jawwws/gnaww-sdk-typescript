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
exports.PublicControlledInterpretationStateStatusEnum = void 0;
exports.instanceOfPublicControlledInterpretationState = instanceOfPublicControlledInterpretationState;
exports.PublicControlledInterpretationStateFromJSON = PublicControlledInterpretationStateFromJSON;
exports.PublicControlledInterpretationStateFromJSONTyped = PublicControlledInterpretationStateFromJSONTyped;
exports.PublicControlledInterpretationStateToJSON = PublicControlledInterpretationStateToJSON;
exports.PublicControlledInterpretationStateToJSONTyped = PublicControlledInterpretationStateToJSONTyped;
const IntentProviderMetadata_1 = require("./IntentProviderMetadata");
/**
 * @export
 */
exports.PublicControlledInterpretationStateStatusEnum = {
    NotReported: 'not_reported',
    NotRequired: 'not_required',
    Completed: 'completed',
    Unavailable: 'unavailable',
    Failed: 'failed'
};
/**
 * Check if a given object implements the PublicControlledInterpretationState interface.
 */
function instanceOfPublicControlledInterpretationState(value) {
    if (!('attempted' in value) || value['attempted'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function PublicControlledInterpretationStateFromJSON(json) {
    return PublicControlledInterpretationStateFromJSONTyped(json, false);
}
function PublicControlledInterpretationStateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'attempted': json['attempted'],
        'error': json['error'] == null ? undefined : json['error'],
        'metadata': json['metadata'] == null ? undefined : (0, IntentProviderMetadata_1.IntentProviderMetadataFromJSON)(json['metadata']),
        'provider': json['provider'] == null ? undefined : json['provider'],
        'status': json['status'],
    };
}
function PublicControlledInterpretationStateToJSON(json) {
    return PublicControlledInterpretationStateToJSONTyped(json, false);
}
function PublicControlledInterpretationStateToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'attempted': value['attempted'],
        'error': value['error'],
        'metadata': (0, IntentProviderMetadata_1.IntentProviderMetadataToJSON)(value['metadata']),
        'provider': value['provider'],
        'status': value['status'],
    };
}
