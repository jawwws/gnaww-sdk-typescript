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
exports.QualityRequirementCategoryEnum = void 0;
exports.instanceOfQualityRequirement = instanceOfQualityRequirement;
exports.QualityRequirementFromJSON = QualityRequirementFromJSON;
exports.QualityRequirementFromJSONTyped = QualityRequirementFromJSONTyped;
exports.QualityRequirementToJSON = QualityRequirementToJSON;
exports.QualityRequirementToJSONTyped = QualityRequirementToJSONTyped;
const OperationTarget_1 = require("./OperationTarget");
const NumericTolerance_1 = require("./NumericTolerance");
/**
 * @export
 */
exports.QualityRequirementCategoryEnum = {
    Colour: 'colour',
    Dimension: 'dimension',
    Weight: 'weight',
    Registration: 'registration',
    CodeReadability: 'code_readability',
    Surface: 'surface',
    BatchConsistency: 'batch_consistency',
    Other: 'other'
};
/**
 * Check if a given object implements the QualityRequirement interface.
 */
function instanceOfQualityRequirement(value) {
    if (!('category' in value) || value['category'] === undefined)
        return false;
    if (!('description' in value) || value['description'] === undefined)
        return false;
    if (!('requirementId' in value) || value['requirementId'] === undefined)
        return false;
    return true;
}
function QualityRequirementFromJSON(json) {
    return QualityRequirementFromJSONTyped(json, false);
}
function QualityRequirementFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'category': json['category'],
        'description': json['description'],
        'requirementId': json['requirement_id'],
        'target': json['target'] == null ? undefined : (0, OperationTarget_1.OperationTargetFromJSON)(json['target']),
        'tolerance': json['tolerance'] == null ? undefined : (0, NumericTolerance_1.NumericToleranceFromJSON)(json['tolerance']),
    };
}
function QualityRequirementToJSON(json) {
    return QualityRequirementToJSONTyped(json, false);
}
function QualityRequirementToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'category': value['category'],
        'description': value['description'],
        'requirement_id': value['requirementId'],
        'target': (0, OperationTarget_1.OperationTargetToJSON)(value['target']),
        'tolerance': (0, NumericTolerance_1.NumericToleranceToJSON)(value['tolerance']),
    };
}
