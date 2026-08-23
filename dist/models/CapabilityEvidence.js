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
exports.CapabilityEvidenceStatusEnum = exports.CapabilityEvidenceSourceEnum = void 0;
exports.instanceOfCapabilityEvidence = instanceOfCapabilityEvidence;
exports.CapabilityEvidenceFromJSON = CapabilityEvidenceFromJSON;
exports.CapabilityEvidenceFromJSONTyped = CapabilityEvidenceFromJSONTyped;
exports.CapabilityEvidenceToJSON = CapabilityEvidenceToJSON;
exports.CapabilityEvidenceToJSONTyped = CapabilityEvidenceToJSONTyped;
/**
 * @export
 */
exports.CapabilityEvidenceSourceEnum = {
    Fixture: 'fixture',
    Imported: 'imported',
    ProducerDeclared: 'producer_declared',
    Live: 'live',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.CapabilityEvidenceStatusEnum = {
    Synthetic: 'synthetic',
    Unverified: 'unverified',
    Verified: 'verified',
    Live: 'live',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the CapabilityEvidence interface.
 */
function instanceOfCapabilityEvidence(value) {
    return true;
}
function CapabilityEvidenceFromJSON(json) {
    return CapabilityEvidenceFromJSONTyped(json, false);
}
function CapabilityEvidenceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'expiresAt': json['expires_at'] == null ? undefined : (new Date(json['expires_at'])),
        'observedAt': json['observed_at'] == null ? undefined : (new Date(json['observed_at'])),
        'source': json['source'] == null ? undefined : json['source'],
        'status': json['status'] == null ? undefined : json['status'],
    };
}
function CapabilityEvidenceToJSON(json) {
    return CapabilityEvidenceToJSONTyped(json, false);
}
function CapabilityEvidenceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'expires_at': value['expiresAt'] == null ? value['expiresAt'] : value['expiresAt'].toISOString(),
        'observed_at': value['observedAt'] == null ? value['observedAt'] : value['observedAt'].toISOString(),
        'source': value['source'],
        'status': value['status'],
    };
}
