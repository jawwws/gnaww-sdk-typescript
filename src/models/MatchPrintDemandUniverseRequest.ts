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
import type { FulfilmentRequirement } from './FulfilmentRequirement';
import {
    FulfilmentRequirementFromJSON,
    FulfilmentRequirementFromJSONTyped,
    FulfilmentRequirementToJSON,
    FulfilmentRequirementToJSONTyped,
} from './FulfilmentRequirement';
import type { PrintJobSpecificationV04 } from './PrintJobSpecificationV04';
import {
    PrintJobSpecificationV04FromJSON,
    PrintJobSpecificationV04FromJSONTyped,
    PrintJobSpecificationV04ToJSON,
    PrintJobSpecificationV04ToJSONTyped,
} from './PrintJobSpecificationV04';

/**
 * Canonical demand plus buyer fulfilment requirements.
 * @export
 * @interface MatchPrintDemandUniverseRequest
 */
export interface MatchPrintDemandUniverseRequest {
    /**
     *
     * @type {FulfilmentRequirement}
     * @memberof MatchPrintDemandUniverseRequest
     */
    fulfilment: FulfilmentRequirement;
    /**
     *
     * @type {PrintJobSpecificationV04}
     * @memberof MatchPrintDemandUniverseRequest
     */
    gjs: PrintJobSpecificationV04;
    /**
     *
     * @type {MatchPrintDemandUniverseRequestSchemaNameEnum}
     * @memberof MatchPrintDemandUniverseRequest
     */
    schemaName?: MatchPrintDemandUniverseRequestSchemaNameEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseRequestSchemaVersionEnum}
     * @memberof MatchPrintDemandUniverseRequest
     */
    schemaVersion?: MatchPrintDemandUniverseRequestSchemaVersionEnum;
}


/**
 * @export
 */
export const MatchPrintDemandUniverseRequestSchemaNameEnum = {
    GnawwSpecmatchUniverseRequest: 'gnaww.specmatch_universe_request'
} as const;
export type MatchPrintDemandUniverseRequestSchemaNameEnum = typeof MatchPrintDemandUniverseRequestSchemaNameEnum[keyof typeof MatchPrintDemandUniverseRequestSchemaNameEnum];

/**
 * @export
 */
export const MatchPrintDemandUniverseRequestSchemaVersionEnum = {
    _01: '0.1'
} as const;
export type MatchPrintDemandUniverseRequestSchemaVersionEnum = typeof MatchPrintDemandUniverseRequestSchemaVersionEnum[keyof typeof MatchPrintDemandUniverseRequestSchemaVersionEnum];


/**
 * Check if a given object implements the MatchPrintDemandUniverseRequest interface.
 */
export function instanceOfMatchPrintDemandUniverseRequest(value: object): value is MatchPrintDemandUniverseRequest {
    if (!('fulfilment' in value) || value['fulfilment'] === undefined) return false;
    if (!('gjs' in value) || value['gjs'] === undefined) return false;
    return true;
}

export function MatchPrintDemandUniverseRequestFromJSON(json: any): MatchPrintDemandUniverseRequest {
    return MatchPrintDemandUniverseRequestFromJSONTyped(json, false);
}

export function MatchPrintDemandUniverseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchPrintDemandUniverseRequest {
    if (json == null) {
        return json;
    }
    return {

        'fulfilment': FulfilmentRequirementFromJSON(json['fulfilment']),
        'gjs': PrintJobSpecificationV04FromJSON(json['gjs']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
    };
}

export function MatchPrintDemandUniverseRequestToJSON(json: any): MatchPrintDemandUniverseRequest {
    return MatchPrintDemandUniverseRequestToJSONTyped(json, false);
}

export function MatchPrintDemandUniverseRequestToJSONTyped(value?: MatchPrintDemandUniverseRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'fulfilment': FulfilmentRequirementToJSON(value['fulfilment']),
        'gjs': PrintJobSpecificationV04ToJSON(value['gjs']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
    };
}
