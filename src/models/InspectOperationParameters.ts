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
 *
 * @export
 * @interface InspectOperationParameters
 */
export interface InspectOperationParameters {
    /**
     *
     * @type {InspectOperationParametersKindEnum}
     * @memberof InspectOperationParameters
     */
    kind?: InspectOperationParametersKindEnum;
    /**
     *
     * @type {string}
     * @memberof InspectOperationParameters
     */
    method: string;
    /**
     *
     * @type {string}
     * @memberof InspectOperationParameters
     */
    requirement?: string | null;
}


/**
 * @export
 */
export const InspectOperationParametersKindEnum = {
    Inspect: 'inspect'
} as const;
export type InspectOperationParametersKindEnum = typeof InspectOperationParametersKindEnum[keyof typeof InspectOperationParametersKindEnum];


/**
 * Check if a given object implements the InspectOperationParameters interface.
 */
export function instanceOfInspectOperationParameters(value: object): value is InspectOperationParameters {
    if (!('method' in value) || value['method'] === undefined) return false;
    return true;
}

export function InspectOperationParametersFromJSON(json: any): InspectOperationParameters {
    return InspectOperationParametersFromJSONTyped(json, false);
}

export function InspectOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): InspectOperationParameters {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'] == null ? undefined : json['kind'],
        'method': json['method'],
        'requirement': json['requirement'] == null ? undefined : json['requirement'],
    };
}

export function InspectOperationParametersToJSON(json: any): InspectOperationParameters {
    return InspectOperationParametersToJSONTyped(json, false);
}

export function InspectOperationParametersToJSONTyped(value?: InspectOperationParameters | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'method': value['method'],
        'requirement': value['requirement'],
    };
}
