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
import type { PublicInterpretationContinuationAnswer } from './PublicInterpretationContinuationAnswer';
import {
    PublicInterpretationContinuationAnswerFromJSON,
    PublicInterpretationContinuationAnswerFromJSONTyped,
    PublicInterpretationContinuationAnswerToJSON,
    PublicInterpretationContinuationAnswerToJSONTyped,
} from './PublicInterpretationContinuationAnswer';
import type { SourceInput } from './SourceInput';
import {
    SourceInputFromJSON,
    SourceInputFromJSONTyped,
    SourceInputToJSON,
    SourceInputToJSONTyped,
} from './SourceInput';

/**
 * Stateless continuation request keyed by public question identities.
 * @export
 * @interface ContinueInterpretationRequestV02
 */
export interface ContinueInterpretationRequestV02 {
    /**
     *
     * @type {Array<PublicInterpretationContinuationAnswer>}
     * @memberof ContinueInterpretationRequestV02
     */
    answers?: Array<PublicInterpretationContinuationAnswer>;
    /**
     *
     * @type {ContinueInterpretationRequestV02GjsVersionEnum}
     * @memberof ContinueInterpretationRequestV02
     */
    gjsVersion?: ContinueInterpretationRequestV02GjsVersionEnum;
    /**
     *
     * @type {ContinueInterpretationRequestV02MatchingModeEnum}
     * @memberof ContinueInterpretationRequestV02
     */
    matchingMode?: ContinueInterpretationRequestV02MatchingModeEnum;
    /**
     *
     * @type {ContinueInterpretationRequestV02SchemaNameEnum}
     * @memberof ContinueInterpretationRequestV02
     */
    schemaName?: ContinueInterpretationRequestV02SchemaNameEnum;
    /**
     *
     * @type {ContinueInterpretationRequestV02SchemaVersionEnum}
     * @memberof ContinueInterpretationRequestV02
     */
    schemaVersion?: ContinueInterpretationRequestV02SchemaVersionEnum;
    /**
     *
     * @type {SourceInput}
     * @memberof ContinueInterpretationRequestV02
     */
    source: SourceInput;
}


/**
 * @export
 */
export const ContinueInterpretationRequestV02GjsVersionEnum = {
    _04: '0.4'
} as const;
export type ContinueInterpretationRequestV02GjsVersionEnum = typeof ContinueInterpretationRequestV02GjsVersionEnum[keyof typeof ContinueInterpretationRequestV02GjsVersionEnum];

/**
 * @export
 */
export const ContinueInterpretationRequestV02MatchingModeEnum = {
    SingleTarget: 'single_target',
    ProducerUniverse: 'producer_universe'
} as const;
export type ContinueInterpretationRequestV02MatchingModeEnum = typeof ContinueInterpretationRequestV02MatchingModeEnum[keyof typeof ContinueInterpretationRequestV02MatchingModeEnum];

/**
 * @export
 */
export const ContinueInterpretationRequestV02SchemaNameEnum = {
    GnawwInterpretationContinuationRequest: 'gnaww.interpretation_continuation_request'
} as const;
export type ContinueInterpretationRequestV02SchemaNameEnum = typeof ContinueInterpretationRequestV02SchemaNameEnum[keyof typeof ContinueInterpretationRequestV02SchemaNameEnum];

/**
 * @export
 */
export const ContinueInterpretationRequestV02SchemaVersionEnum = {
    _02: '0.2'
} as const;
export type ContinueInterpretationRequestV02SchemaVersionEnum = typeof ContinueInterpretationRequestV02SchemaVersionEnum[keyof typeof ContinueInterpretationRequestV02SchemaVersionEnum];


/**
 * Check if a given object implements the ContinueInterpretationRequestV02 interface.
 */
export function instanceOfContinueInterpretationRequestV02(value: object): value is ContinueInterpretationRequestV02 {
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function ContinueInterpretationRequestV02FromJSON(json: any): ContinueInterpretationRequestV02 {
    return ContinueInterpretationRequestV02FromJSONTyped(json, false);
}

export function ContinueInterpretationRequestV02FromJSONTyped(json: any, ignoreDiscriminator: boolean): ContinueInterpretationRequestV02 {
    if (json == null) {
        return json;
    }
    return {

        'answers': json['answers'] == null ? undefined : ((json['answers'] as Array<any>).map(PublicInterpretationContinuationAnswerFromJSON)),
        'gjsVersion': json['gjs_version'] == null ? undefined : json['gjs_version'],
        'matchingMode': json['matching_mode'] == null ? undefined : json['matching_mode'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': SourceInputFromJSON(json['source']),
    };
}

export function ContinueInterpretationRequestV02ToJSON(json: any): ContinueInterpretationRequestV02 {
    return ContinueInterpretationRequestV02ToJSONTyped(json, false);
}

export function ContinueInterpretationRequestV02ToJSONTyped(value?: ContinueInterpretationRequestV02 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'answers': value['answers'] == null ? undefined : ((value['answers'] as Array<any>).map(PublicInterpretationContinuationAnswerToJSON)),
        'gjs_version': value['gjsVersion'],
        'matching_mode': value['matchingMode'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': SourceInputToJSON(value['source']),
    };
}
