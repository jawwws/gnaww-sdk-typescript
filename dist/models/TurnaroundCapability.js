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
exports.TurnaroundCapabilityBasisEnum = void 0;
exports.instanceOfTurnaroundCapability = instanceOfTurnaroundCapability;
exports.TurnaroundCapabilityFromJSON = TurnaroundCapabilityFromJSON;
exports.TurnaroundCapabilityFromJSONTyped = TurnaroundCapabilityFromJSONTyped;
exports.TurnaroundCapabilityToJSON = TurnaroundCapabilityToJSON;
exports.TurnaroundCapabilityToJSONTyped = TurnaroundCapabilityToJSONTyped;
const CapabilityEvidence_1 = require("./CapabilityEvidence");
/**
 * @export
 */
exports.TurnaroundCapabilityBasisEnum = {
    ProductionOnly: 'production_only',
    ProductionAndDispatch: 'production_and_dispatch',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the TurnaroundCapability interface.
 */
function instanceOfTurnaroundCapability(value) {
    return true;
}
function TurnaroundCapabilityFromJSON(json) {
    return TurnaroundCapabilityFromJSONTyped(json, false);
}
function TurnaroundCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'basis': json['basis'] == null ? undefined : json['basis'],
        'evidence': json['evidence'] == null ? undefined : (0, CapabilityEvidence_1.CapabilityEvidenceFromJSON)(json['evidence']),
        'maximumWorkingDays': json['maximum_working_days'] == null ? undefined : json['maximum_working_days'],
        'minimumWorkingDays': json['minimum_working_days'] == null ? undefined : json['minimum_working_days'],
    };
}
function TurnaroundCapabilityToJSON(json) {
    return TurnaroundCapabilityToJSONTyped(json, false);
}
function TurnaroundCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'basis': value['basis'],
        'evidence': (0, CapabilityEvidence_1.CapabilityEvidenceToJSON)(value['evidence']),
        'maximum_working_days': value['maximumWorkingDays'],
        'minimum_working_days': value['minimumWorkingDays'],
    };
}
