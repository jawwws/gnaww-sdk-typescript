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
 * Lossless v0.4 envelope for details awaiting typed v0.5 migration.
 * @export
 * @interface LegacyOperationParameters
 */
export interface LegacyOperationParameters {
    /**
     *
     * @type {LegacyOperationParametersKindEnum}
     * @memberof LegacyOperationParameters
     */
    kind?: LegacyOperationParametersKindEnum;
    /**
     *
     * @type {string}
     * @memberof LegacyOperationParameters
     */
    sourceName: string;
    /**
     *
     * @type {string}
     * @memberof LegacyOperationParameters
     */
    sourceNotes?: string | null;
    /**
     *
     * @type {string}
     * @memberof LegacyOperationParameters
     */
    sourceProcess?: string | null;
}


/**
 * @export
 */
export const LegacyOperationParametersKindEnum = {
    Legacy: 'legacy'
} as const;
export type LegacyOperationParametersKindEnum = typeof LegacyOperationParametersKindEnum[keyof typeof LegacyOperationParametersKindEnum];


/**
 * Check if a given object implements the LegacyOperationParameters interface.
 */
export function instanceOfLegacyOperationParameters(value: object): value is LegacyOperationParameters {
    if (!('sourceName' in value) || value['sourceName'] === undefined) return false;
    return true;
}

export function LegacyOperationParametersFromJSON(json: any): LegacyOperationParameters {
    return LegacyOperationParametersFromJSONTyped(json, false);
}

export function LegacyOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): LegacyOperationParameters {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'] == null ? undefined : json['kind'],
        'sourceName': json['source_name'],
        'sourceNotes': json['source_notes'] == null ? undefined : json['source_notes'],
        'sourceProcess': json['source_process'] == null ? undefined : json['source_process'],
    };
}

export function LegacyOperationParametersToJSON(json: any): LegacyOperationParameters {
    return LegacyOperationParametersToJSONTyped(json, false);
}

export function LegacyOperationParametersToJSONTyped(value?: LegacyOperationParameters | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'source_name': value['sourceName'],
        'source_notes': value['sourceNotes'],
        'source_process': value['sourceProcess'],
    };
}
