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
import type { PublicClarificationAnswer } from './PublicClarificationAnswer';
import {
    PublicClarificationAnswerFromJSON,
    PublicClarificationAnswerFromJSONTyped,
    PublicClarificationAnswerToJSON,
    PublicClarificationAnswerToJSONTyped,
} from './PublicClarificationAnswer';
import type { SourceInput } from './SourceInput';
import {
    SourceInputFromJSON,
    SourceInputFromJSONTyped,
    SourceInputToJSON,
    SourceInputToJSONTyped,
} from './SourceInput';

/**
 * Stateless continuation of a prior ordinary-language requirement.
 * @export
 * @interface ContinuePrintRequirementRequest
 */
export interface ContinuePrintRequirementRequest {
    /**
     *
     * @type {Array<PublicClarificationAnswer>}
     * @memberof ContinuePrintRequirementRequest
     */
    answers?: Array<PublicClarificationAnswer>;
    /**
     *
     * @type {ContinuePrintRequirementRequestGjsVersionEnum}
     * @memberof ContinuePrintRequirementRequest
     */
    gjsVersion?: ContinuePrintRequirementRequestGjsVersionEnum;
    /**
     *
     * @type {ContinuePrintRequirementRequestMatchingModeEnum}
     * @memberof ContinuePrintRequirementRequest
     */
    matchingMode?: ContinuePrintRequirementRequestMatchingModeEnum;
    /**
     *
     * @type {ContinuePrintRequirementRequestSchemaNameEnum}
     * @memberof ContinuePrintRequirementRequest
     */
    schemaName?: ContinuePrintRequirementRequestSchemaNameEnum;
    /**
     *
     * @type {ContinuePrintRequirementRequestSchemaVersionEnum}
     * @memberof ContinuePrintRequirementRequest
     */
    schemaVersion?: ContinuePrintRequirementRequestSchemaVersionEnum;
    /**
     *
     * @type {SourceInput}
     * @memberof ContinuePrintRequirementRequest
     */
    source: SourceInput;
}


/**
 * @export
 */
export const ContinuePrintRequirementRequestGjsVersionEnum = {
    _04: '0.4'
} as const;
export type ContinuePrintRequirementRequestGjsVersionEnum = typeof ContinuePrintRequirementRequestGjsVersionEnum[keyof typeof ContinuePrintRequirementRequestGjsVersionEnum];

/**
 * @export
 */
export const ContinuePrintRequirementRequestMatchingModeEnum = {
    SingleTarget: 'single_target',
    ProducerUniverse: 'producer_universe'
} as const;
export type ContinuePrintRequirementRequestMatchingModeEnum = typeof ContinuePrintRequirementRequestMatchingModeEnum[keyof typeof ContinuePrintRequirementRequestMatchingModeEnum];

/**
 * @export
 */
export const ContinuePrintRequirementRequestSchemaNameEnum = {
    GnawwInterpretationContinuationRequest: 'gnaww.interpretation_continuation_request'
} as const;
export type ContinuePrintRequirementRequestSchemaNameEnum = typeof ContinuePrintRequirementRequestSchemaNameEnum[keyof typeof ContinuePrintRequirementRequestSchemaNameEnum];

/**
 * @export
 */
export const ContinuePrintRequirementRequestSchemaVersionEnum = {
    _01: '0.1'
} as const;
export type ContinuePrintRequirementRequestSchemaVersionEnum = typeof ContinuePrintRequirementRequestSchemaVersionEnum[keyof typeof ContinuePrintRequirementRequestSchemaVersionEnum];


/**
 * Check if a given object implements the ContinuePrintRequirementRequest interface.
 */
export function instanceOfContinuePrintRequirementRequest(value: object): value is ContinuePrintRequirementRequest {
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function ContinuePrintRequirementRequestFromJSON(json: any): ContinuePrintRequirementRequest {
    return ContinuePrintRequirementRequestFromJSONTyped(json, false);
}

export function ContinuePrintRequirementRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContinuePrintRequirementRequest {
    if (json == null) {
        return json;
    }
    return {

        'answers': json['answers'] == null ? undefined : ((json['answers'] as Array<any>).map(PublicClarificationAnswerFromJSON)),
        'gjsVersion': json['gjs_version'] == null ? undefined : json['gjs_version'],
        'matchingMode': json['matching_mode'] == null ? undefined : json['matching_mode'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': SourceInputFromJSON(json['source']),
    };
}

export function ContinuePrintRequirementRequestToJSON(json: any): ContinuePrintRequirementRequest {
    return ContinuePrintRequirementRequestToJSONTyped(json, false);
}

export function ContinuePrintRequirementRequestToJSONTyped(value?: ContinuePrintRequirementRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'answers': value['answers'] == null ? undefined : ((value['answers'] as Array<any>).map(PublicClarificationAnswerToJSON)),
        'gjs_version': value['gjsVersion'],
        'matching_mode': value['matchingMode'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': SourceInputToJSON(value['source']),
    };
}
