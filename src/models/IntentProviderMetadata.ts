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
 * Audit-safe provider metadata without credentials or raw secrets.
 * @export
 * @interface IntentProviderMetadata
 */
export interface IntentProviderMetadata {
    /**
     *
     * @type {number}
     * @memberof IntentProviderMetadata
     */
    inputTokens?: number | null;
    /**
     *
     * @type {IntentProviderMetadataModeEnum}
     * @memberof IntentProviderMetadata
     */
    mode: IntentProviderMetadataModeEnum;
    /**
     *
     * @type {string}
     * @memberof IntentProviderMetadata
     */
    model?: string | null;
    /**
     *
     * @type {number}
     * @memberof IntentProviderMetadata
     */
    outputTokens?: number | null;
    /**
     *
     * @type {string}
     * @memberof IntentProviderMetadata
     */
    provider: string;
    /**
     *
     * @type {string}
     * @memberof IntentProviderMetadata
     */
    requestId?: string | null;
    /**
     *
     * @type {number}
     * @memberof IntentProviderMetadata
     */
    totalTokens?: number | null;
}


/**
 * @export
 */
export const IntentProviderMetadataModeEnum = {
    None: 'none',
    Fixture: 'fixture',
    Live: 'live'
} as const;
export type IntentProviderMetadataModeEnum = typeof IntentProviderMetadataModeEnum[keyof typeof IntentProviderMetadataModeEnum];


/**
 * Check if a given object implements the IntentProviderMetadata interface.
 */
export function instanceOfIntentProviderMetadata(value: object): value is IntentProviderMetadata {
    if (!('mode' in value) || value['mode'] === undefined) return false;
    if (!('provider' in value) || value['provider'] === undefined) return false;
    return true;
}

export function IntentProviderMetadataFromJSON(json: any): IntentProviderMetadata {
    return IntentProviderMetadataFromJSONTyped(json, false);
}

export function IntentProviderMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntentProviderMetadata {
    if (json == null) {
        return json;
    }
    return {

        'inputTokens': json['input_tokens'] == null ? undefined : json['input_tokens'],
        'mode': json['mode'],
        'model': json['model'] == null ? undefined : json['model'],
        'outputTokens': json['output_tokens'] == null ? undefined : json['output_tokens'],
        'provider': json['provider'],
        'requestId': json['request_id'] == null ? undefined : json['request_id'],
        'totalTokens': json['total_tokens'] == null ? undefined : json['total_tokens'],
    };
}

export function IntentProviderMetadataToJSON(json: any): IntentProviderMetadata {
    return IntentProviderMetadataToJSONTyped(json, false);
}

export function IntentProviderMetadataToJSONTyped(value?: IntentProviderMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'input_tokens': value['inputTokens'],
        'mode': value['mode'],
        'model': value['model'],
        'output_tokens': value['outputTokens'],
        'provider': value['provider'],
        'request_id': value['requestId'],
        'total_tokens': value['totalTokens'],
    };
}
