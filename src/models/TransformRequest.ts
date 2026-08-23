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
import type { SourceInput } from './SourceInput';
import {
    SourceInputFromJSON,
    SourceInputFromJSONTyped,
    SourceInputToJSON,
    SourceInputToJSONTyped,
} from './SourceInput';

/**
 * Request payload for `POST /v1/transform`.
 * @export
 * @interface TransformRequest
 */
export interface TransformRequest {
    /**
     *
     * @type {string}
     * @memberof TransformRequest
     */
    requestedSchemaVersion?: string;
    /**
     *
     * @type {SourceInput}
     * @memberof TransformRequest
     */
    source: SourceInput;
}

/**
 * Check if a given object implements the TransformRequest interface.
 */
export function instanceOfTransformRequest(value: object): value is TransformRequest {
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function TransformRequestFromJSON(json: any): TransformRequest {
    return TransformRequestFromJSONTyped(json, false);
}

export function TransformRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransformRequest {
    if (json == null) {
        return json;
    }
    return {

        'requestedSchemaVersion': json['requested_schema_version'] == null ? undefined : json['requested_schema_version'],
        'source': SourceInputFromJSON(json['source']),
    };
}

export function TransformRequestToJSON(json: any): TransformRequest {
    return TransformRequestToJSONTyped(json, false);
}

export function TransformRequestToJSONTyped(value?: TransformRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'requested_schema_version': value['requestedSchemaVersion'],
        'source': SourceInputToJSON(value['source']),
    };
}
