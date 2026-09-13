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
exports.PublicControlledProductionDefaultTruthStateEnum = void 0;
exports.instanceOfPublicControlledProductionDefault = instanceOfPublicControlledProductionDefault;
exports.PublicControlledProductionDefaultFromJSON = PublicControlledProductionDefaultFromJSON;
exports.PublicControlledProductionDefaultFromJSONTyped = PublicControlledProductionDefaultFromJSONTyped;
exports.PublicControlledProductionDefaultToJSON = PublicControlledProductionDefaultToJSON;
exports.PublicControlledProductionDefaultToJSONTyped = PublicControlledProductionDefaultToJSONTyped;
const PublicControlledDefaultFoldGeometry_1 = require("./PublicControlledDefaultFoldGeometry");
const PublicControlledDefaultUserEvidence_1 = require("./PublicControlledDefaultUserEvidence");
/**
 * @export
 */
exports.PublicControlledProductionDefaultTruthStateEnum = {
    Defaulted: 'defaulted',
    Confirmed: 'confirmed',
    Changed: 'changed'
};
/**
 * Check if a given object implements the PublicControlledProductionDefault interface.
 */
function instanceOfPublicControlledProductionDefault(value) {
    if (!('evidenceIds' in value) || value['evidenceIds'] === undefined)
        return false;
    if (!('foldGeometry' in value) || value['foldGeometry'] === undefined)
        return false;
    if (!('label' in value) || value['label'] === undefined)
        return false;
    if (!('ruleId' in value) || value['ruleId'] === undefined)
        return false;
    if (!('ruleVersion' in value) || value['ruleVersion'] === undefined)
        return false;
    if (!('summary' in value) || value['summary'] === undefined)
        return false;
    if (!('targetPath' in value) || value['targetPath'] === undefined)
        return false;
    if (!('truthState' in value) || value['truthState'] === undefined)
        return false;
    if (!('verificationKey' in value) || value['verificationKey'] === undefined)
        return false;
    return true;
}
function PublicControlledProductionDefaultFromJSON(json) {
    return PublicControlledProductionDefaultFromJSONTyped(json, false);
}
function PublicControlledProductionDefaultFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'evidenceIds': json['evidence_ids'],
        'foldGeometry': (0, PublicControlledDefaultFoldGeometry_1.PublicControlledDefaultFoldGeometryFromJSON)(json['fold_geometry']),
        'label': json['label'],
        'ruleId': json['rule_id'],
        'ruleVersion': json['rule_version'],
        'summary': json['summary'],
        'targetPath': json['target_path'],
        'truthState': json['truth_state'],
        'userEvidence': json['user_evidence'] == null ? undefined : (0, PublicControlledDefaultUserEvidence_1.PublicControlledDefaultUserEvidenceFromJSON)(json['user_evidence']),
        'verificationKey': json['verification_key'],
    };
}
function PublicControlledProductionDefaultToJSON(json) {
    return PublicControlledProductionDefaultToJSONTyped(json, false);
}
function PublicControlledProductionDefaultToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'evidence_ids': value['evidenceIds'],
        'fold_geometry': (0, PublicControlledDefaultFoldGeometry_1.PublicControlledDefaultFoldGeometryToJSON)(value['foldGeometry']),
        'label': value['label'],
        'rule_id': value['ruleId'],
        'rule_version': value['ruleVersion'],
        'summary': value['summary'],
        'target_path': value['targetPath'],
        'truth_state': value['truthState'],
        'user_evidence': (0, PublicControlledDefaultUserEvidence_1.PublicControlledDefaultUserEvidenceToJSON)(value['userEvidence']),
        'verification_key': value['verificationKey'],
    };
}
