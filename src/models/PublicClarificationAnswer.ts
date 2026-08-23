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
 * One explicit buyer answer to a Gnaww-owned clarification.
 * @export
 * @interface PublicClarificationAnswer
 */
export interface PublicClarificationAnswer {
    /**
     *
     * @type {string}
     * @memberof PublicClarificationAnswer
     */
    key: string;
    /**
     *
     * @type {string}
     * @memberof PublicClarificationAnswer
     */
    value: string;
}

/**
 * Check if a given object implements the PublicClarificationAnswer interface.
 */
export function instanceOfPublicClarificationAnswer(value: object): value is PublicClarificationAnswer {
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function PublicClarificationAnswerFromJSON(json: any): PublicClarificationAnswer {
    return PublicClarificationAnswerFromJSONTyped(json, false);
}

export function PublicClarificationAnswerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicClarificationAnswer {
    if (json == null) {
        return json;
    }
    return {

        'key': json['key'],
        'value': json['value'],
    };
}

export function PublicClarificationAnswerToJSON(json: any): PublicClarificationAnswer {
    return PublicClarificationAnswerToJSONTyped(json, false);
}

export function PublicClarificationAnswerToJSONTyped(value?: PublicClarificationAnswer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'key': value['key'],
        'value': value['value'],
    };
}
