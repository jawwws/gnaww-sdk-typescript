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
import type { PublicMatchTargetRequest } from './PublicMatchTargetRequest';
import {
    PublicMatchTargetRequestFromJSON,
    PublicMatchTargetRequestFromJSONTyped,
    PublicMatchTargetRequestToJSON,
    PublicMatchTargetRequestToJSONTyped,
} from './PublicMatchTargetRequest';
import type { PrintJobSpecificationV04 } from './PrintJobSpecificationV04';
import {
    PrintJobSpecificationV04FromJSON,
    PrintJobSpecificationV04FromJSONTyped,
    PrintJobSpecificationV04ToJSON,
    PrintJobSpecificationV04ToJSONTyped,
} from './PrintJobSpecificationV04';

/**
 * Validated canonical demand submitted directly to SpecMatch.
 * @export
 * @interface MatchPrintDemandRequest
 */
export interface MatchPrintDemandRequest {
    /**
     *
     * @type {PrintJobSpecificationV04}
     * @memberof MatchPrintDemandRequest
     */
    gjs: PrintJobSpecificationV04;
    /**
     *
     * @type {MatchPrintDemandRequestSchemaNameEnum}
     * @memberof MatchPrintDemandRequest
     */
    schemaName?: MatchPrintDemandRequestSchemaNameEnum;
    /**
     *
     * @type {MatchPrintDemandRequestSchemaVersionEnum}
     * @memberof MatchPrintDemandRequest
     */
    schemaVersion?: MatchPrintDemandRequestSchemaVersionEnum;
    /**
     *
     * @type {PublicMatchTargetRequest}
     * @memberof MatchPrintDemandRequest
     */
    target: PublicMatchTargetRequest;
}


/**
 * @export
 */
export const MatchPrintDemandRequestSchemaNameEnum = {
    GnawwSpecmatchRequest: 'gnaww.specmatch_request'
} as const;
export type MatchPrintDemandRequestSchemaNameEnum = typeof MatchPrintDemandRequestSchemaNameEnum[keyof typeof MatchPrintDemandRequestSchemaNameEnum];

/**
 * @export
 */
export const MatchPrintDemandRequestSchemaVersionEnum = {
    _01: '0.1'
} as const;
export type MatchPrintDemandRequestSchemaVersionEnum = typeof MatchPrintDemandRequestSchemaVersionEnum[keyof typeof MatchPrintDemandRequestSchemaVersionEnum];


/**
 * Check if a given object implements the MatchPrintDemandRequest interface.
 */
export function instanceOfMatchPrintDemandRequest(value: object): value is MatchPrintDemandRequest {
    if (!('gjs' in value) || value['gjs'] === undefined) return false;
    if (!('target' in value) || value['target'] === undefined) return false;
    return true;
}

export function MatchPrintDemandRequestFromJSON(json: any): MatchPrintDemandRequest {
    return MatchPrintDemandRequestFromJSONTyped(json, false);
}

export function MatchPrintDemandRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchPrintDemandRequest {
    if (json == null) {
        return json;
    }
    return {

        'gjs': PrintJobSpecificationV04FromJSON(json['gjs']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'target': PublicMatchTargetRequestFromJSON(json['target']),
    };
}

export function MatchPrintDemandRequestToJSON(json: any): MatchPrintDemandRequest {
    return MatchPrintDemandRequestToJSONTyped(json, false);
}

export function MatchPrintDemandRequestToJSONTyped(value?: MatchPrintDemandRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'gjs': PrintJobSpecificationV04ToJSON(value['gjs']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'target': PublicMatchTargetRequestToJSON(value['target']),
    };
}
