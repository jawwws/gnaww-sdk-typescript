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
exports.ControlledInterpretationStateStatusEnum = void 0;
exports.instanceOfControlledInterpretationState = instanceOfControlledInterpretationState;
exports.ControlledInterpretationStateFromJSON = ControlledInterpretationStateFromJSON;
exports.ControlledInterpretationStateFromJSONTyped = ControlledInterpretationStateFromJSONTyped;
exports.ControlledInterpretationStateToJSON = ControlledInterpretationStateToJSON;
exports.ControlledInterpretationStateToJSONTyped = ControlledInterpretationStateToJSONTyped;
const IntentProviderMetadata_1 = require("./IntentProviderMetadata");
/**
 * @export
 */
exports.ControlledInterpretationStateStatusEnum = {
    NotRequired: 'not_required',
    Completed: 'completed',
    Unavailable: 'unavailable',
    Failed: 'failed'
};
/**
 * Check if a given object implements the ControlledInterpretationState interface.
 */
function instanceOfControlledInterpretationState(value) {
    if (!('attempted' in value) || value['attempted'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function ControlledInterpretationStateFromJSON(json) {
    return ControlledInterpretationStateFromJSONTyped(json, false);
}
function ControlledInterpretationStateFromJSONTyped(json, ignoreDiscriminator) {
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
function ControlledInterpretationStateToJSON(json) {
    return ControlledInterpretationStateToJSONTyped(json, false);
}
function ControlledInterpretationStateToJSONTyped(value, ignoreDiscriminator = false) {
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
