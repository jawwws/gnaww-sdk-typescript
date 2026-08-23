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
exports.PhysicalRequirementDecisionSchemaNameEnum = exports.PhysicalRequirementDecisionClassificationEnum = void 0;
exports.instanceOfPhysicalRequirementDecision = instanceOfPhysicalRequirementDecision;
exports.PhysicalRequirementDecisionFromJSON = PhysicalRequirementDecisionFromJSON;
exports.PhysicalRequirementDecisionFromJSONTyped = PhysicalRequirementDecisionFromJSONTyped;
exports.PhysicalRequirementDecisionToJSON = PhysicalRequirementDecisionToJSON;
exports.PhysicalRequirementDecisionToJSONTyped = PhysicalRequirementDecisionToJSONTyped;
/**
 * @export
 */
exports.PhysicalRequirementDecisionClassificationEnum = {
    Exact: 'exact',
    AcceptableSubstitute: 'acceptable_substitute',
    ReviewRequired: 'review_required',
    Unacceptable: 'unacceptable',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.PhysicalRequirementDecisionSchemaNameEnum = {
    GnawwPhysicalRequirementDecision: 'gnaww.physical_requirement_decision'
};
/**
 * Check if a given object implements the PhysicalRequirementDecision interface.
 */
function instanceOfPhysicalRequirementDecision(value) {
    if (!('buyerMessage' in value) || value['buyerMessage'] === undefined)
        return false;
    if (!('classification' in value) || value['classification'] === undefined)
        return false;
    if (!('fieldPath' in value) || value['fieldPath'] === undefined)
        return false;
    if (!('posture' in value) || value['posture'] === undefined)
        return false;
    if (!('propertyType' in value) || value['propertyType'] === undefined)
        return false;
    return true;
}
function PhysicalRequirementDecisionFromJSON(json) {
    return PhysicalRequirementDecisionFromJSONTyped(json, false);
}
function PhysicalRequirementDecisionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'approvalRequired': json['approval_required'] == null ? undefined : json['approval_required'],
        'buyerMessage': json['buyer_message'],
        'buyerQuestion': json['buyer_question'] == null ? undefined : json['buyer_question'],
        'candidates': json['candidates'] == null ? undefined : json['candidates'],
        'classification': json['classification'],
        'fieldPath': json['field_path'],
        'posture': json['posture'],
        'propertyType': json['property_type'],
        'requested': json['requested'] == null ? undefined : json['requested'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
    };
}
function PhysicalRequirementDecisionToJSON(json) {
    return PhysicalRequirementDecisionToJSONTyped(json, false);
}
function PhysicalRequirementDecisionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'approval_required': value['approvalRequired'],
        'buyer_message': value['buyerMessage'],
        'buyer_question': value['buyerQuestion'],
        'candidates': value['candidates'],
        'classification': value['classification'],
        'field_path': value['fieldPath'],
        'posture': value['posture'],
        'property_type': value['propertyType'],
        'requested': value['requested'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
    };
}
