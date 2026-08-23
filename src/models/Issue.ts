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
 * A customer-safe issue raised during transformation or matching.
 * @export
 * @interface Issue
 */
export interface Issue {
    /**
     *
     * @type {string}
     * @memberof Issue
     */
    code: string;
    /**
     *
     * @type {string}
     * @memberof Issue
     */
    field?: string | null;
    /**
     *
     * @type {string}
     * @memberof Issue
     */
    message: string;
    /**
     *
     * @type {IssueSeverityEnum}
     * @memberof Issue
     */
    severity: IssueSeverityEnum;
    /**
     *
     * @type {string}
     * @memberof Issue
     */
    source?: string | null;
}


/**
 * @export
 */
export const IssueSeverityEnum = {
    Blocker: 'blocker',
    Warning: 'warning',
    Info: 'info'
} as const;
export type IssueSeverityEnum = typeof IssueSeverityEnum[keyof typeof IssueSeverityEnum];


/**
 * Check if a given object implements the Issue interface.
 */
export function instanceOfIssue(value: object): value is Issue {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('severity' in value) || value['severity'] === undefined) return false;
    return true;
}

export function IssueFromJSON(json: any): Issue {
    return IssueFromJSONTyped(json, false);
}

export function IssueFromJSONTyped(json: any, ignoreDiscriminator: boolean): Issue {
    if (json == null) {
        return json;
    }
    return {

        'code': json['code'],
        'field': json['field'] == null ? undefined : json['field'],
        'message': json['message'],
        'severity': json['severity'],
        'source': json['source'] == null ? undefined : json['source'],
    };
}

export function IssueToJSON(json: any): Issue {
    return IssueToJSONTyped(json, false);
}

export function IssueToJSONTyped(value?: Issue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'code': value['code'],
        'field': value['field'],
        'message': value['message'],
        'severity': value['severity'],
        'source': value['source'],
    };
}
