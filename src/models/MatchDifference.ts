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
 * A customer-safe difference between requested and matched capability.
 * @export
 * @interface MatchDifference
 */
export interface MatchDifference {
    /**
     *
     * @type {string}
     * @memberof MatchDifference
     */
    field: string;
    /**
     *
     * @type {}
     * @memberof MatchDifference
     */
    offered?:  | null;
    /**
     *
     * @type {string}
     * @memberof MatchDifference
     */
    reason: string;
    /**
     *
     * @type {}
     * @memberof MatchDifference
     */
    requested?:  | null;
}

/**
 * Check if a given object implements the MatchDifference interface.
 */
export function instanceOfMatchDifference(value: object): value is MatchDifference {
    if (!('field' in value) || value['field'] === undefined) return false;
    if (!('reason' in value) || value['reason'] === undefined) return false;
    return true;
}

export function MatchDifferenceFromJSON(json: any): MatchDifference {
    return MatchDifferenceFromJSONTyped(json, false);
}

export function MatchDifferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchDifference {
    if (json == null) {
        return json;
    }
    return {

        'field': json['field'],
        'offered': json['offered'] == null ? undefined : json['offered'],
        'reason': json['reason'],
        'requested': json['requested'] == null ? undefined : json['requested'],
    };
}

export function MatchDifferenceToJSON(json: any): MatchDifference {
    return MatchDifferenceToJSONTyped(json, false);
}

export function MatchDifferenceToJSONTyped(value?: MatchDifference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'field': value['field'],
        'offered': value['offered'],
        'reason': value['reason'],
        'requested': value['requested'],
    };
}
