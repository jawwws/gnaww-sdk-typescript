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
import { OperationTargetFromJSON, OperationTargetToJSON, } from './OperationTarget';
import { NumericToleranceFromJSON, NumericToleranceToJSON, } from './NumericTolerance';
/**
 * @export
 */
export const QualityRequirementCategoryEnum = {
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
export function instanceOfQualityRequirement(value) {
    if (!('category' in value) || value['category'] === undefined)
        return false;
    if (!('description' in value) || value['description'] === undefined)
        return false;
    if (!('requirementId' in value) || value['requirementId'] === undefined)
        return false;
    return true;
}
export function QualityRequirementFromJSON(json) {
    return QualityRequirementFromJSONTyped(json, false);
}
export function QualityRequirementFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'category': json['category'],
        'description': json['description'],
        'requirementId': json['requirement_id'],
        'target': json['target'] == null ? undefined : OperationTargetFromJSON(json['target']),
        'tolerance': json['tolerance'] == null ? undefined : NumericToleranceFromJSON(json['tolerance']),
    };
}
export function QualityRequirementToJSON(json) {
    return QualityRequirementToJSONTyped(json, false);
}
export function QualityRequirementToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'category': value['category'],
        'description': value['description'],
        'requirement_id': value['requirementId'],
        'target': OperationTargetToJSON(value['target']),
        'tolerance': NumericToleranceToJSON(value['tolerance']),
    };
}
