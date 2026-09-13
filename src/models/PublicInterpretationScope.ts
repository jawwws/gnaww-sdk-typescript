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
/**
 * Explicit public scope for a shared or Job-owned fact or question.
 * @export
 * @interface PublicInterpretationScope
 */
export interface PublicInterpretationScope {
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationScope
     */
    jobId?: string | null;
    /**
     *
     * @type {PublicInterpretationScopeTypeEnum}
     * @memberof PublicInterpretationScope
     */
    type: PublicInterpretationScopeTypeEnum;
}


/**
 * @export
 */
export const PublicInterpretationScopeTypeEnum = {
    Shared: 'shared',
    Job: 'job'
} as const;
export type PublicInterpretationScopeTypeEnum = typeof PublicInterpretationScopeTypeEnum[keyof typeof PublicInterpretationScopeTypeEnum];


/**
 * Check if a given object implements the PublicInterpretationScope interface.
 */
export function instanceOfPublicInterpretationScope(value: object): value is PublicInterpretationScope {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function PublicInterpretationScopeFromJSON(json: any): PublicInterpretationScope {
    return PublicInterpretationScopeFromJSONTyped(json, false);
}

export function PublicInterpretationScopeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationScope {
    if (json == null) {
        return json;
    }
    return {

        'jobId': json['job_id'] == null ? undefined : json['job_id'],
        'type': json['type'],
    };
}

export function PublicInterpretationScopeToJSON(json: any): PublicInterpretationScope {
    return PublicInterpretationScopeToJSONTyped(json, false);
}

export function PublicInterpretationScopeToJSONTyped(value?: PublicInterpretationScope | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'job_id': value['jobId'],
        'type': value['type'],
    };
}
