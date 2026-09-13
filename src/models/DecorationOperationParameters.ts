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
 * @interface DecorationOperationParameters
 */
export interface DecorationOperationParameters {
    /**
     *
     * @type {DecorationOperationParametersKindEnum}
     * @memberof DecorationOperationParameters
     */
    kind?: DecorationOperationParametersKindEnum;
    /**
     *
     * @type {string}
     * @memberof DecorationOperationParameters
     */
    method: string;
    /**
     *
     * @type {string}
     * @memberof DecorationOperationParameters
     */
    threadOrColourant?: string | null;
}


/**
 * @export
 */
export const DecorationOperationParametersKindEnum = {
    Decoration: 'decoration'
} as const;
export type DecorationOperationParametersKindEnum = typeof DecorationOperationParametersKindEnum[keyof typeof DecorationOperationParametersKindEnum];


/**
 * Check if a given object implements the DecorationOperationParameters interface.
 */
export function instanceOfDecorationOperationParameters(value: object): value is DecorationOperationParameters {
    if (!('method' in value) || value['method'] === undefined) return false;
    return true;
}

export function DecorationOperationParametersFromJSON(json: any): DecorationOperationParameters {
    return DecorationOperationParametersFromJSONTyped(json, false);
}

export function DecorationOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): DecorationOperationParameters {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'] == null ? undefined : json['kind'],
        'method': json['method'],
        'threadOrColourant': json['thread_or_colourant'] == null ? undefined : json['thread_or_colourant'],
    };
}

export function DecorationOperationParametersToJSON(json: any): DecorationOperationParameters {
    return DecorationOperationParametersToJSONTyped(json, false);
}

export function DecorationOperationParametersToJSONTyped(value?: DecorationOperationParameters | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'method': value['method'],
        'thread_or_colourant': value['threadOrColourant'],
    };
}
