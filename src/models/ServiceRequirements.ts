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

import { mapValues } from '../runtime';
/**
 * Requested operational service constraints for a canonical job.
 * @export
 * @interface ServiceRequirements
 */
export interface ServiceRequirements {
    /**
     *
     * @type {number}
     * @memberof ServiceRequirements
     */
    maximumTurnaroundWorkingDays?: number | null;
    /**
     *
     * @type {boolean}
     * @memberof ServiceRequirements
     */
    requiresConfirmedAvailability?: boolean;
    /**
     *
     * @type {ServiceRequirementsTurnaroundBasisEnum}
     * @memberof ServiceRequirements
     */
    turnaroundBasis?: ServiceRequirementsTurnaroundBasisEnum;
}


/**
 * @export
 */
export const ServiceRequirementsTurnaroundBasisEnum = {
    ProductionOnly: 'production_only',
    ProductionAndDispatch: 'production_and_dispatch',
    Unknown: 'unknown'
} as const;
export type ServiceRequirementsTurnaroundBasisEnum = typeof ServiceRequirementsTurnaroundBasisEnum[keyof typeof ServiceRequirementsTurnaroundBasisEnum];


/**
 * Check if a given object implements the ServiceRequirements interface.
 */
export function instanceOfServiceRequirements(value: object): value is ServiceRequirements {
    return true;
}

export function ServiceRequirementsFromJSON(json: any): ServiceRequirements {
    return ServiceRequirementsFromJSONTyped(json, false);
}

export function ServiceRequirementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceRequirements {
    if (json == null) {
        return json;
    }
    return {

        'maximumTurnaroundWorkingDays': json['maximum_turnaround_working_days'] == null ? undefined : json['maximum_turnaround_working_days'],
        'requiresConfirmedAvailability': json['requires_confirmed_availability'] == null ? undefined : json['requires_confirmed_availability'],
        'turnaroundBasis': json['turnaround_basis'] == null ? undefined : json['turnaround_basis'],
    };
}

export function ServiceRequirementsToJSON(json: any): ServiceRequirements {
    return ServiceRequirementsToJSONTyped(json, false);
}

export function ServiceRequirementsToJSONTyped(value?: ServiceRequirements | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'maximum_turnaround_working_days': value['maximumTurnaroundWorkingDays'],
        'requires_confirmed_availability': value['requiresConfirmedAvailability'],
        'turnaround_basis': value['turnaroundBasis'],
    };
}
