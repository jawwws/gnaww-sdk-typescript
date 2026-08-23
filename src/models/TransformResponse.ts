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
import type { IssueSet } from './IssueSet';
import {
    IssueSetFromJSON,
    IssueSetFromJSONTyped,
    IssueSetToJSON,
    IssueSetToJSONTyped,
} from './IssueSet';
import type { PrintJobSpecification } from './PrintJobSpecification';
import {
    PrintJobSpecificationFromJSON,
    PrintJobSpecificationFromJSONTyped,
    PrintJobSpecificationToJSON,
    PrintJobSpecificationToJSONTyped,
} from './PrintJobSpecification';

/**
 * Response payload for `POST /v1/transform`.
 * @export
 * @interface TransformResponse
 */
export interface TransformResponse {
    /**
     *
     * @type {number}
     * @memberof TransformResponse
     */
    confidence?: number;
    /**
     *
     * @type {IssueSet}
     * @memberof TransformResponse
     */
    issues?: IssueSet;
    /**
     *
     * @type {PrintJobSpecification}
     * @memberof TransformResponse
     */
    job?: PrintJobSpecification | null;
    /**
     *
     * @type {Array<string>}
     * @memberof TransformResponse
     */
    nextActions?: Array<string>;
    /**
     *
     * @type {TransformResponseSchemaNameEnum}
     * @memberof TransformResponse
     */
    schemaName?: TransformResponseSchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof TransformResponse
     */
    schemaVersion?: string;
    /**
     *
     * @type {TransformResponseStatusEnum}
     * @memberof TransformResponse
     */
    status: TransformResponseStatusEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof TransformResponse
     */
    unresolvedFields?: Array<string>;
}


/**
 * @export
 */
export const TransformResponseSchemaNameEnum = {
    JawwwsTransformResponse: 'jawwws.transform_response'
} as const;
export type TransformResponseSchemaNameEnum = typeof TransformResponseSchemaNameEnum[keyof typeof TransformResponseSchemaNameEnum];

/**
 * @export
 */
export const TransformResponseStatusEnum = {
    Mapped: 'mapped',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
} as const;
export type TransformResponseStatusEnum = typeof TransformResponseStatusEnum[keyof typeof TransformResponseStatusEnum];


/**
 * Check if a given object implements the TransformResponse interface.
 */
export function instanceOfTransformResponse(value: object): value is TransformResponse {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function TransformResponseFromJSON(json: any): TransformResponse {
    return TransformResponseFromJSONTyped(json, false);
}

export function TransformResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransformResponse {
    if (json == null) {
        return json;
    }
    return {

        'confidence': json['confidence'] == null ? undefined : json['confidence'],
        'issues': json['issues'] == null ? undefined : IssueSetFromJSON(json['issues']),
        'job': json['job'] == null ? undefined : PrintJobSpecificationFromJSON(json['job']),
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'status': json['status'],
        'unresolvedFields': json['unresolved_fields'] == null ? undefined : json['unresolved_fields'],
    };
}

export function TransformResponseToJSON(json: any): TransformResponse {
    return TransformResponseToJSONTyped(json, false);
}

export function TransformResponseToJSONTyped(value?: TransformResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'confidence': value['confidence'],
        'issues': IssueSetToJSON(value['issues']),
        'job': PrintJobSpecificationToJSON(value['job']),
        'next_actions': value['nextActions'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'status': value['status'],
        'unresolved_fields': value['unresolvedFields'],
    };
}
