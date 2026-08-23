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
 *
 * @export
 * @interface InterpretPrintRequirementDefaultResponseError
 */
export interface InterpretPrintRequirementDefaultResponseError {
    /**
     *
     * @type {string}
     * @memberof InterpretPrintRequirementDefaultResponseError
     */
    code: string;
    /**
     *
     * @type {string}
     * @memberof InterpretPrintRequirementDefaultResponseError
     */
    correlationId: string;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof InterpretPrintRequirementDefaultResponseError
     */
    details: { [key: string]: any; };
    /**
     *
     * @type {string}
     * @memberof InterpretPrintRequirementDefaultResponseError
     */
    message: string;
    /**
     *
     * @type {string}
     * @memberof InterpretPrintRequirementDefaultResponseError
     */
    requestId: string;
    /**
     *
     * @type {boolean}
     * @memberof InterpretPrintRequirementDefaultResponseError
     */
    retryable: boolean;
    /**
     *
     * @type {number}
     * @memberof InterpretPrintRequirementDefaultResponseError
     */
    status: number;
}

/**
 * Check if a given object implements the InterpretPrintRequirementDefaultResponseError interface.
 */
export function instanceOfInterpretPrintRequirementDefaultResponseError(value: object): value is InterpretPrintRequirementDefaultResponseError {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('correlationId' in value) || value['correlationId'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('requestId' in value) || value['requestId'] === undefined) return false;
    if (!('retryable' in value) || value['retryable'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function InterpretPrintRequirementDefaultResponseErrorFromJSON(json: any): InterpretPrintRequirementDefaultResponseError {
    return InterpretPrintRequirementDefaultResponseErrorFromJSONTyped(json, false);
}

export function InterpretPrintRequirementDefaultResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterpretPrintRequirementDefaultResponseError {
    if (json == null) {
        return json;
    }
    return {

        'code': json['code'],
        'correlationId': json['correlation_id'],
        'details': json['details'],
        'message': json['message'],
        'requestId': json['request_id'],
        'retryable': json['retryable'],
        'status': json['status'],
    };
}

export function InterpretPrintRequirementDefaultResponseErrorToJSON(json: any): InterpretPrintRequirementDefaultResponseError {
    return InterpretPrintRequirementDefaultResponseErrorToJSONTyped(json, false);
}

export function InterpretPrintRequirementDefaultResponseErrorToJSONTyped(value?: InterpretPrintRequirementDefaultResponseError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'code': value['code'],
        'correlation_id': value['correlationId'],
        'details': value['details'],
        'message': value['message'],
        'request_id': value['requestId'],
        'retryable': value['retryable'],
        'status': value['status'],
    };
}
