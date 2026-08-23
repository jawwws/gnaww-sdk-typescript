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
 * Confirmed production-relevant use intent carried by GJS v0.4.
 * @export
 * @interface UseRequirement
 */
export interface UseRequirement {
    /**
     *
     * @type {UseRequirementProvenanceEnum}
     * @memberof UseRequirement
     */
    provenance: UseRequirementProvenanceEnum;
    /**
     *
     * @type {string}
     * @memberof UseRequirement
     */
    requirementKey: string;
    /**
     *
     * @type {string}
     * @memberof UseRequirement
     */
    sourceExpression?: string | null;
    /**
     *
     * @type {string}
     * @memberof UseRequirement
     */
    value: string;
}


/**
 * @export
 */
export const UseRequirementProvenanceEnum = {
    Supplied: 'supplied',
    ConfirmedReview: 'confirmed_review'
} as const;
export type UseRequirementProvenanceEnum = typeof UseRequirementProvenanceEnum[keyof typeof UseRequirementProvenanceEnum];


/**
 * Check if a given object implements the UseRequirement interface.
 */
export function instanceOfUseRequirement(value: object): value is UseRequirement {
    if (!('provenance' in value) || value['provenance'] === undefined) return false;
    if (!('requirementKey' in value) || value['requirementKey'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function UseRequirementFromJSON(json: any): UseRequirement {
    return UseRequirementFromJSONTyped(json, false);
}

export function UseRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): UseRequirement {
    if (json == null) {
        return json;
    }
    return {

        'provenance': json['provenance'],
        'requirementKey': json['requirement_key'],
        'sourceExpression': json['source_expression'] == null ? undefined : json['source_expression'],
        'value': json['value'],
    };
}

export function UseRequirementToJSON(json: any): UseRequirement {
    return UseRequirementToJSONTyped(json, false);
}

export function UseRequirementToJSONTyped(value?: UseRequirement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'provenance': value['provenance'],
        'requirement_key': value['requirementKey'],
        'source_expression': value['sourceExpression'],
        'value': value['value'],
    };
}
