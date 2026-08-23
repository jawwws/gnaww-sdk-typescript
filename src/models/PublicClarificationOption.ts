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
 * One controlled value offered for a guided clarification.
 * @export
 * @interface PublicClarificationOption
 */
export interface PublicClarificationOption {
    /**
     *
     * @type {string}
     * @memberof PublicClarificationOption
     */
    label: string;
    /**
     *
     * @type {string}
     * @memberof PublicClarificationOption
     */
    value: string;
}

/**
 * Check if a given object implements the PublicClarificationOption interface.
 */
export function instanceOfPublicClarificationOption(value: object): value is PublicClarificationOption {
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function PublicClarificationOptionFromJSON(json: any): PublicClarificationOption {
    return PublicClarificationOptionFromJSONTyped(json, false);
}

export function PublicClarificationOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicClarificationOption {
    if (json == null) {
        return json;
    }
    return {

        'label': json['label'],
        'value': json['value'],
    };
}

export function PublicClarificationOptionToJSON(json: any): PublicClarificationOption {
    return PublicClarificationOptionToJSONTyped(json, false);
}

export function PublicClarificationOptionToJSONTyped(value?: PublicClarificationOption | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'label': value['label'],
        'value': value['value'],
    };
}
