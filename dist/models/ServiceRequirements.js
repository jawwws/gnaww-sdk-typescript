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
exports.ServiceRequirementsTurnaroundBasisEnum = void 0;
exports.instanceOfServiceRequirements = instanceOfServiceRequirements;
exports.ServiceRequirementsFromJSON = ServiceRequirementsFromJSON;
exports.ServiceRequirementsFromJSONTyped = ServiceRequirementsFromJSONTyped;
exports.ServiceRequirementsToJSON = ServiceRequirementsToJSON;
exports.ServiceRequirementsToJSONTyped = ServiceRequirementsToJSONTyped;
/**
 * @export
 */
exports.ServiceRequirementsTurnaroundBasisEnum = {
    ProductionOnly: 'production_only',
    ProductionAndDispatch: 'production_and_dispatch',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the ServiceRequirements interface.
 */
function instanceOfServiceRequirements(value) {
    return true;
}
function ServiceRequirementsFromJSON(json) {
    return ServiceRequirementsFromJSONTyped(json, false);
}
function ServiceRequirementsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'maximumTurnaroundWorkingDays': json['maximum_turnaround_working_days'] == null ? undefined : json['maximum_turnaround_working_days'],
        'requiresConfirmedAvailability': json['requires_confirmed_availability'] == null ? undefined : json['requires_confirmed_availability'],
        'turnaroundBasis': json['turnaround_basis'] == null ? undefined : json['turnaround_basis'],
    };
}
function ServiceRequirementsToJSON(json) {
    return ServiceRequirementsToJSONTyped(json, false);
}
function ServiceRequirementsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'maximum_turnaround_working_days': value['maximumTurnaroundWorkingDays'],
        'requires_confirmed_availability': value['requiresConfirmedAvailability'],
        'turnaround_basis': value['turnaroundBasis'],
    };
}
