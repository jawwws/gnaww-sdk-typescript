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
import type { Issue } from './Issue';
import {
    IssueFromJSON,
    IssueFromJSONTyped,
    IssueToJSON,
    IssueToJSONTyped,
} from './Issue';

/**
 * Grouped issues returned by Gnaww responses.
 * @export
 * @interface IssueSet
 */
export interface IssueSet {
    /**
     *
     * @type {Array<Issue>}
     * @memberof IssueSet
     */
    blockers?: Array<Issue>;
    /**
     *
     * @type {Array<Issue>}
     * @memberof IssueSet
     */
    info?: Array<Issue>;
    /**
     *
     * @type {Array<Issue>}
     * @memberof IssueSet
     */
    warnings?: Array<Issue>;
}

/**
 * Check if a given object implements the IssueSet interface.
 */
export function instanceOfIssueSet(value: object): value is IssueSet {
    return true;
}

export function IssueSetFromJSON(json: any): IssueSet {
    return IssueSetFromJSONTyped(json, false);
}

export function IssueSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): IssueSet {
    if (json == null) {
        return json;
    }
    return {

        'blockers': json['blockers'] == null ? undefined : ((json['blockers'] as Array<any>).map(IssueFromJSON)),
        'info': json['info'] == null ? undefined : ((json['info'] as Array<any>).map(IssueFromJSON)),
        'warnings': json['warnings'] == null ? undefined : ((json['warnings'] as Array<any>).map(IssueFromJSON)),
    };
}

export function IssueSetToJSON(json: any): IssueSet {
    return IssueSetToJSONTyped(json, false);
}

export function IssueSetToJSONTyped(value?: IssueSet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'blockers': value['blockers'] == null ? undefined : ((value['blockers'] as Array<any>).map(IssueToJSON)),
        'info': value['info'] == null ? undefined : ((value['info'] as Array<any>).map(IssueToJSON)),
        'warnings': value['warnings'] == null ? undefined : ((value['warnings'] as Array<any>).map(IssueToJSON)),
    };
}
