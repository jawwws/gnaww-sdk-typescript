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
 * Whether validated demand can enter a future public SpecMatch operation.
 * @export
 * @interface PublicSpecMatchReadiness
 */
export interface PublicSpecMatchReadiness {
    /**
     *
     * @type {PublicSpecMatchReadinessBasisEnum}
     * @memberof PublicSpecMatchReadiness
     */
    basis: PublicSpecMatchReadinessBasisEnum;
    /**
     *
     * @type {boolean}
     * @memberof PublicSpecMatchReadiness
     */
    canEvaluate: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PublicSpecMatchReadiness
     */
    preRecipe?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof PublicSpecMatchReadiness
     */
    reasons?: Array<string>;
}


/**
 * @export
 */
export const PublicSpecMatchReadinessBasisEnum = {
    Recipe: 'recipe',
    Gjs: 'gjs',
    None: 'none'
} as const;
export type PublicSpecMatchReadinessBasisEnum = typeof PublicSpecMatchReadinessBasisEnum[keyof typeof PublicSpecMatchReadinessBasisEnum];


/**
 * Check if a given object implements the PublicSpecMatchReadiness interface.
 */
export function instanceOfPublicSpecMatchReadiness(value: object): value is PublicSpecMatchReadiness {
    if (!('basis' in value) || value['basis'] === undefined) return false;
    if (!('canEvaluate' in value) || value['canEvaluate'] === undefined) return false;
    return true;
}

export function PublicSpecMatchReadinessFromJSON(json: any): PublicSpecMatchReadiness {
    return PublicSpecMatchReadinessFromJSONTyped(json, false);
}

export function PublicSpecMatchReadinessFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicSpecMatchReadiness {
    if (json == null) {
        return json;
    }
    return {

        'basis': json['basis'],
        'canEvaluate': json['can_evaluate'],
        'preRecipe': json['pre_recipe'] == null ? undefined : json['pre_recipe'],
        'reasons': json['reasons'] == null ? undefined : json['reasons'],
    };
}

export function PublicSpecMatchReadinessToJSON(json: any): PublicSpecMatchReadiness {
    return PublicSpecMatchReadinessToJSONTyped(json, false);
}

export function PublicSpecMatchReadinessToJSONTyped(value?: PublicSpecMatchReadiness | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'basis': value['basis'],
        'can_evaluate': value['canEvaluate'],
        'pre_recipe': value['preRecipe'],
        'reasons': value['reasons'],
    };
}
