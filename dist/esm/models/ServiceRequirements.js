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
/**
 * @export
 */
export const ServiceRequirementsTurnaroundBasisEnum = {
    ProductionOnly: 'production_only',
    ProductionAndDispatch: 'production_and_dispatch',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the ServiceRequirements interface.
 */
export function instanceOfServiceRequirements(value) {
    return true;
}
export function ServiceRequirementsFromJSON(json) {
    return ServiceRequirementsFromJSONTyped(json, false);
}
export function ServiceRequirementsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'maximumTurnaroundWorkingDays': json['maximum_turnaround_working_days'] == null ? undefined : json['maximum_turnaround_working_days'],
        'requiresConfirmedAvailability': json['requires_confirmed_availability'] == null ? undefined : json['requires_confirmed_availability'],
        'turnaroundBasis': json['turnaround_basis'] == null ? undefined : json['turnaround_basis'],
    };
}
export function ServiceRequirementsToJSON(json) {
    return ServiceRequirementsToJSONTyped(json, false);
}
export function ServiceRequirementsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'maximum_turnaround_working_days': value['maximumTurnaroundWorkingDays'],
        'requires_confirmed_availability': value['requiresConfirmedAvailability'],
        'turnaround_basis': value['turnaroundBasis'],
    };
}
