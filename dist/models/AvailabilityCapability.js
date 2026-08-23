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
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailabilityCapabilityStatusEnum = exports.AvailabilityCapabilityModeEnum = void 0;
exports.instanceOfAvailabilityCapability = instanceOfAvailabilityCapability;
exports.AvailabilityCapabilityFromJSON = AvailabilityCapabilityFromJSON;
exports.AvailabilityCapabilityFromJSONTyped = AvailabilityCapabilityFromJSONTyped;
exports.AvailabilityCapabilityToJSON = AvailabilityCapabilityToJSON;
exports.AvailabilityCapabilityToJSONTyped = AvailabilityCapabilityToJSONTyped;
const CapabilityEvidence_1 = require("./CapabilityEvidence");
/**
 * @export
 */
exports.AvailabilityCapabilityModeEnum = {
    MadeToOrder: 'made_to_order',
    Stocked: 'stocked',
    Mixed: 'mixed',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.AvailabilityCapabilityStatusEnum = {
    Available: 'available',
    Limited: 'limited',
    Unavailable: 'unavailable',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the AvailabilityCapability interface.
 */
function instanceOfAvailabilityCapability(value) {
    return true;
}
function AvailabilityCapabilityFromJSON(json) {
    return AvailabilityCapabilityFromJSONTyped(json, false);
}
function AvailabilityCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'availableQuantity': json['available_quantity'] == null ? undefined : json['available_quantity'],
        'evidence': json['evidence'] == null ? undefined : (0, CapabilityEvidence_1.CapabilityEvidenceFromJSON)(json['evidence']),
        'mode': json['mode'] == null ? undefined : json['mode'],
        'status': json['status'] == null ? undefined : json['status'],
    };
}
function AvailabilityCapabilityToJSON(json) {
    return AvailabilityCapabilityToJSONTyped(json, false);
}
function AvailabilityCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'available_quantity': value['availableQuantity'],
        'evidence': (0, CapabilityEvidence_1.CapabilityEvidenceToJSON)(value['evidence']),
        'mode': value['mode'],
        'status': value['status'],
    };
}
