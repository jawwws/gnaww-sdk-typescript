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
exports.PublicInterpretationFulfilmentStateStatusEnum = void 0;
exports.instanceOfPublicInterpretationFulfilmentState = instanceOfPublicInterpretationFulfilmentState;
exports.PublicInterpretationFulfilmentStateFromJSON = PublicInterpretationFulfilmentStateFromJSON;
exports.PublicInterpretationFulfilmentStateFromJSONTyped = PublicInterpretationFulfilmentStateFromJSONTyped;
exports.PublicInterpretationFulfilmentStateToJSON = PublicInterpretationFulfilmentStateToJSON;
exports.PublicInterpretationFulfilmentStateToJSONTyped = PublicInterpretationFulfilmentStateToJSONTyped;
const FulfilmentRequirement_1 = require("./FulfilmentRequirement");
/**
 * @export
 */
exports.PublicInterpretationFulfilmentStateStatusEnum = {
    NotRequired: 'not_required',
    NeedsReview: 'needs_review',
    Ready: 'ready'
};
/**
 * Check if a given object implements the PublicInterpretationFulfilmentState interface.
 */
function instanceOfPublicInterpretationFulfilmentState(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function PublicInterpretationFulfilmentStateFromJSON(json) {
    return PublicInterpretationFulfilmentStateFromJSONTyped(json, false);
}
function PublicInterpretationFulfilmentStateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'requirement': json['requirement'] == null ? undefined : (0, FulfilmentRequirement_1.FulfilmentRequirementFromJSON)(json['requirement']),
        'status': json['status'],
    };
}
function PublicInterpretationFulfilmentStateToJSON(json) {
    return PublicInterpretationFulfilmentStateToJSONTyped(json, false);
}
function PublicInterpretationFulfilmentStateToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'requirement': (0, FulfilmentRequirement_1.FulfilmentRequirementToJSON)(value['requirement']),
        'status': value['status'],
    };
}
