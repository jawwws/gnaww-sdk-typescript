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

import { mapValues } from '../runtime';
/**
 * Safe Recipe eligibility view without persistence internals.
 * @export
 * @interface PublicRecipeState
 */
export interface PublicRecipeState {
    /**
     *
     * @type {PublicRecipeStatePersistedEnum}
     * @memberof PublicRecipeState
     */
    persisted?: PublicRecipeStatePersistedEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof PublicRecipeState
     */
    reasons?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof PublicRecipeState
     */
    recipeId?: string | null;
    /**
     *
     * @type {PublicRecipeStateStatusEnum}
     * @memberof PublicRecipeState
     */
    status: PublicRecipeStateStatusEnum;
}


/**
 * @export
 */
export const PublicRecipeStatePersistedEnum = {
    False: false
} as const;
export type PublicRecipeStatePersistedEnum = typeof PublicRecipeStatePersistedEnum[keyof typeof PublicRecipeStatePersistedEnum];

/**
 * @export
 */
export const PublicRecipeStateStatusEnum = {
    Eligible: 'eligible',
    Ineligible: 'ineligible',
    NotAvailable: 'not_available'
} as const;
export type PublicRecipeStateStatusEnum = typeof PublicRecipeStateStatusEnum[keyof typeof PublicRecipeStateStatusEnum];


/**
 * Check if a given object implements the PublicRecipeState interface.
 */
export function instanceOfPublicRecipeState(value: object): value is PublicRecipeState {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function PublicRecipeStateFromJSON(json: any): PublicRecipeState {
    return PublicRecipeStateFromJSONTyped(json, false);
}

export function PublicRecipeStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicRecipeState {
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

export function PublicRecipeStateToJSON(json: any): PublicRecipeState {
    return PublicRecipeStateToJSONTyped(json, false);
}

export function PublicRecipeStateToJSONTyped(value?: PublicRecipeState | null, ignoreDiscriminator: boolean = false): any {
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
