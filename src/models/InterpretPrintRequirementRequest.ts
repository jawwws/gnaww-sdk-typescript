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
 * Developer-facing request for the preferred interpretation boundary.
 * @export
 * @interface InterpretPrintRequirementRequest
 */
export interface InterpretPrintRequirementRequest {
    /**
     *
     * @type {InterpretPrintRequirementRequestGjsVersionEnum}
     * @memberof InterpretPrintRequirementRequest
     */
    gjsVersion?: InterpretPrintRequirementRequestGjsVersionEnum;
    /**
     *
     * @type {InterpretPrintRequirementRequestSchemaNameEnum}
     * @memberof InterpretPrintRequirementRequest
     */
    schemaName?: InterpretPrintRequirementRequestSchemaNameEnum;
    /**
     *
     * @type {InterpretPrintRequirementRequestSchemaVersionEnum}
     * @memberof InterpretPrintRequirementRequest
     */
    schemaVersion?: InterpretPrintRequirementRequestSchemaVersionEnum;
    /**
     *
     * @type {SourceInput}
     * @memberof InterpretPrintRequirementRequest
     */
    source: SourceInput;
}


/**
 * @export
 */
export const InterpretPrintRequirementRequestGjsVersionEnum = {
    _03: '0.3',
    _04: '0.4'
} as const;
export type InterpretPrintRequirementRequestGjsVersionEnum = typeof InterpretPrintRequirementRequestGjsVersionEnum[keyof typeof InterpretPrintRequirementRequestGjsVersionEnum];

/**
 * @export
 */
export const InterpretPrintRequirementRequestSchemaNameEnum = {
    GnawwInterpretationRequest: 'gnaww.interpretation_request'
} as const;
export type InterpretPrintRequirementRequestSchemaNameEnum = typeof InterpretPrintRequirementRequestSchemaNameEnum[keyof typeof InterpretPrintRequirementRequestSchemaNameEnum];

/**
 * @export
 */
export const InterpretPrintRequirementRequestSchemaVersionEnum = {
    _01: '0.1'
} as const;
export type InterpretPrintRequirementRequestSchemaVersionEnum = typeof InterpretPrintRequirementRequestSchemaVersionEnum[keyof typeof InterpretPrintRequirementRequestSchemaVersionEnum];


/**
 * Check if a given object implements the InterpretPrintRequirementRequest interface.
 */
export function instanceOfInterpretPrintRequirementRequest(value: object): value is InterpretPrintRequirementRequest {
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function InterpretPrintRequirementRequestFromJSON(json: any): InterpretPrintRequirementRequest {
    return InterpretPrintRequirementRequestFromJSONTyped(json, false);
}

export function InterpretPrintRequirementRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterpretPrintRequirementRequest {
    if (json == null) {
        return json;
    }
    return {

        'gjsVersion': json['gjs_version'] == null ? undefined : json['gjs_version'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': SourceInputFromJSON(json['source']),
    };
}

export function InterpretPrintRequirementRequestToJSON(json: any): InterpretPrintRequirementRequest {
    return InterpretPrintRequirementRequestToJSONTyped(json, false);
}

export function InterpretPrintRequirementRequestToJSONTyped(value?: InterpretPrintRequirementRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'gjs_version': value['gjsVersion'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': SourceInputToJSON(value['source']),
    };
}
