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
exports.PublicFulfilmentStateStatusEnum = void 0;
exports.instanceOfPublicFulfilmentState = instanceOfPublicFulfilmentState;
exports.PublicFulfilmentStateFromJSON = PublicFulfilmentStateFromJSON;
exports.PublicFulfilmentStateFromJSONTyped = PublicFulfilmentStateFromJSONTyped;
exports.PublicFulfilmentStateToJSON = PublicFulfilmentStateToJSON;
exports.PublicFulfilmentStateToJSONTyped = PublicFulfilmentStateToJSONTyped;
const FulfilmentRequirement_1 = require("./FulfilmentRequirement");
/**
 * @export
 */
exports.PublicFulfilmentStateStatusEnum = {
    NotRequired: 'not_required',
    NeedsReview: 'needs_review',
    Ready: 'ready'
};
/**
 * Check if a given object implements the PublicFulfilmentState interface.
 */
function instanceOfPublicFulfilmentState(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function PublicFulfilmentStateFromJSON(json) {
    return PublicFulfilmentStateFromJSONTyped(json, false);
}
function PublicFulfilmentStateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'requirement': json['requirement'] == null ? undefined : (0, FulfilmentRequirement_1.FulfilmentRequirementFromJSON)(json['requirement']),
        'status': json['status'],
    };
}
function PublicFulfilmentStateToJSON(json) {
    return PublicFulfilmentStateToJSONTyped(json, false);
}
function PublicFulfilmentStateToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'requirement': (0, FulfilmentRequirement_1.FulfilmentRequirementToJSON)(value['requirement']),
        'status': value['status'],
    };
}
