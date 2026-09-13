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
exports.PublicControlledDefaultUserEvidenceEvidenceBasisEnum = void 0;
exports.instanceOfPublicControlledDefaultUserEvidence = instanceOfPublicControlledDefaultUserEvidence;
exports.PublicControlledDefaultUserEvidenceFromJSON = PublicControlledDefaultUserEvidenceFromJSON;
exports.PublicControlledDefaultUserEvidenceFromJSONTyped = PublicControlledDefaultUserEvidenceFromJSONTyped;
exports.PublicControlledDefaultUserEvidenceToJSON = PublicControlledDefaultUserEvidenceToJSON;
exports.PublicControlledDefaultUserEvidenceToJSONTyped = PublicControlledDefaultUserEvidenceToJSONTyped;
/**
 * @export
 */
exports.PublicControlledDefaultUserEvidenceEvidenceBasisEnum = {
    UserConfirmation: 'user_confirmation',
    UserCorrection: 'user_correction'
};
/**
 * Check if a given object implements the PublicControlledDefaultUserEvidence interface.
 */
function instanceOfPublicControlledDefaultUserEvidence(value) {
    if (!('evidenceBasis' in value) || value['evidenceBasis'] === undefined)
        return false;
    if (!('propertyPath' in value) || value['propertyPath'] === undefined)
        return false;
    if (!('value' in value) || value['value'] === undefined)
        return false;
    return true;
}
function PublicControlledDefaultUserEvidenceFromJSON(json) {
    return PublicControlledDefaultUserEvidenceFromJSONTyped(json, false);
}
function PublicControlledDefaultUserEvidenceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'evidenceBasis': json['evidence_basis'],
        'propertyPath': json['property_path'],
        'value': json['value'],
    };
}
function PublicControlledDefaultUserEvidenceToJSON(json) {
    return PublicControlledDefaultUserEvidenceToJSONTyped(json, false);
}
function PublicControlledDefaultUserEvidenceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'evidence_basis': value['evidenceBasis'],
        'property_path': value['propertyPath'],
        'value': value['value'],
    };
}
