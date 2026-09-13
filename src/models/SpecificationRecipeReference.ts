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
 * Recipe eligibility for the retained demand without changing Recipe semantics.
 * @export
 * @interface SpecificationRecipeReference
 */
export interface SpecificationRecipeReference {
    /**
     *
     * @type {boolean}
     * @memberof SpecificationRecipeReference
     */
    persisted?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof SpecificationRecipeReference
     */
    reasons?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof SpecificationRecipeReference
     */
    recipeId?: string | null;
    /**
     *
     * @type {SpecificationRecipeReferenceStatusEnum}
     * @memberof SpecificationRecipeReference
     */
    status: SpecificationRecipeReferenceStatusEnum;
}


/**
 * @export
 */
export const SpecificationRecipeReferenceStatusEnum = {
    Eligible: 'eligible',
    Ineligible: 'ineligible'
} as const;
export type SpecificationRecipeReferenceStatusEnum = typeof SpecificationRecipeReferenceStatusEnum[keyof typeof SpecificationRecipeReferenceStatusEnum];


/**
 * Check if a given object implements the SpecificationRecipeReference interface.
 */
export function instanceOfSpecificationRecipeReference(value: object): value is SpecificationRecipeReference {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function SpecificationRecipeReferenceFromJSON(json: any): SpecificationRecipeReference {
    return SpecificationRecipeReferenceFromJSONTyped(json, false);
}

export function SpecificationRecipeReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpecificationRecipeReference {
    if (json == null) {
        return json;
    }
    return {

        'persisted': json['persisted'] == null ? undefined : json['persisted'],
        'reasons': json['reasons'] == null ? undefined : json['reasons'],
        'recipeId': json['recipe_id'] == null ? undefined : json['recipe_id'],
        'status': json['status'],
    };
}

export function SpecificationRecipeReferenceToJSON(json: any): SpecificationRecipeReference {
    return SpecificationRecipeReferenceToJSONTyped(json, false);
}

export function SpecificationRecipeReferenceToJSONTyped(value?: SpecificationRecipeReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'persisted': value['persisted'],
        'reasons': value['reasons'],
        'recipe_id': value['recipeId'],
        'status': value['status'],
    };
}
