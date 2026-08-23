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
 * Response returned by the public health endpoints.
 * @export
 * @interface HealthResponse
 */
export interface HealthResponse {
    /**
     *
     * @type {string}
     * @memberof HealthResponse
     */
    environment: string;
    /**
     *
     * @type {string}
     * @memberof HealthResponse
     */
    service: string;
    /**
     *
     * @type {HealthResponseStatusEnum}
     * @memberof HealthResponse
     */
    status?: HealthResponseStatusEnum;
    /**
     *
     * @type {string}
     * @memberof HealthResponse
     */
    version: string;
}


/**
 * @export
 */
export const HealthResponseStatusEnum = {
    Ok: 'ok',
    NotReady: 'not_ready'
} as const;
export type HealthResponseStatusEnum = typeof HealthResponseStatusEnum[keyof typeof HealthResponseStatusEnum];


/**
 * Check if a given object implements the HealthResponse interface.
 */
export function instanceOfHealthResponse(value: object): value is HealthResponse {
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('service' in value) || value['service'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function HealthResponseFromJSON(json: any): HealthResponse {
    return HealthResponseFromJSONTyped(json, false);
}

export function HealthResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthResponse {
    if (json == null) {
        return json;
    }
    return {

        'environment': json['environment'],
        'service': json['service'],
        'status': json['status'] == null ? undefined : json['status'],
        'version': json['version'],
    };
}

export function HealthResponseToJSON(json: any): HealthResponse {
    return HealthResponseToJSONTyped(json, false);
}

export function HealthResponseToJSONTyped(value?: HealthResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'environment': value['environment'],
        'service': value['service'],
        'status': value['status'],
        'version': value['version'],
    };
}
