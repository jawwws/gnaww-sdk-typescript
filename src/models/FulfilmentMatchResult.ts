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

/**
 * Capability-plane fulfilment result for one producer profile.
 * @export
 * @interface FulfilmentMatchResult
 */
export interface FulfilmentMatchResult {
    /**
     *
     * @type {string}
     * @memberof FulfilmentMatchResult
     */
    destinationCountryCode: string;
    /**
     *
     * @type {IssueSet}
     * @memberof FulfilmentMatchResult
     */
    issues?: IssueSet;
    /**
     *
     * @type {Array<string>}
     * @memberof FulfilmentMatchResult
     */
    matchReasons?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof FulfilmentMatchResult
     */
    offeredMaximumDeliveryWorkingDays?: number | null;
    /**
     *
     * @type {number}
     * @memberof FulfilmentMatchResult
     */
    offeredMinimumDeliveryWorkingDays?: number | null;
    /**
     *
     * @type {number}
     * @memberof FulfilmentMatchResult
     */
    requestedMaximumDeliveryWorkingDays?: number | null;
    /**
     *
     * @type {Array<string>}
     * @memberof FulfilmentMatchResult
     */
    serviceCountryCodes?: Array<string>;
    /**
     *
     * @type {FulfilmentMatchResultStatusEnum}
     * @memberof FulfilmentMatchResult
     */
    status: FulfilmentMatchResultStatusEnum;
}


/**
 * @export
 */
export const FulfilmentMatchResultStatusEnum = {
    Matched: 'matched',
    NeedsReview: 'needs_review',
    Blocked: 'blocked'
} as const;
export type FulfilmentMatchResultStatusEnum = typeof FulfilmentMatchResultStatusEnum[keyof typeof FulfilmentMatchResultStatusEnum];


/**
 * Check if a given object implements the FulfilmentMatchResult interface.
 */
export function instanceOfFulfilmentMatchResult(value: object): value is FulfilmentMatchResult {
    if (!('destinationCountryCode' in value) || value['destinationCountryCode'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function FulfilmentMatchResultFromJSON(json: any): FulfilmentMatchResult {
    return FulfilmentMatchResultFromJSONTyped(json, false);
}

export function FulfilmentMatchResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfilmentMatchResult {
    if (json == null) {
        return json;
    }
    return {

        'destinationCountryCode': json['destination_country_code'],
        'issues': json['issues'] == null ? undefined : IssueSetFromJSON(json['issues']),
        'matchReasons': json['match_reasons'] == null ? undefined : json['match_reasons'],
        'offeredMaximumDeliveryWorkingDays': json['offered_maximum_delivery_working_days'] == null ? undefined : json['offered_maximum_delivery_working_days'],
        'offeredMinimumDeliveryWorkingDays': json['offered_minimum_delivery_working_days'] == null ? undefined : json['offered_minimum_delivery_working_days'],
        'requestedMaximumDeliveryWorkingDays': json['requested_maximum_delivery_working_days'] == null ? undefined : json['requested_maximum_delivery_working_days'],
        'serviceCountryCodes': json['service_country_codes'] == null ? undefined : json['service_country_codes'],
        'status': json['status'],
    };
}

export function FulfilmentMatchResultToJSON(json: any): FulfilmentMatchResult {
    return FulfilmentMatchResultToJSONTyped(json, false);
}

export function FulfilmentMatchResultToJSONTyped(value?: FulfilmentMatchResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'destination_country_code': value['destinationCountryCode'],
        'issues': IssueSetToJSON(value['issues']),
        'match_reasons': value['matchReasons'],
        'offered_maximum_delivery_working_days': value['offeredMaximumDeliveryWorkingDays'],
        'offered_minimum_delivery_working_days': value['offeredMinimumDeliveryWorkingDays'],
        'requested_maximum_delivery_working_days': value['requestedMaximumDeliveryWorkingDays'],
        'service_country_codes': value['serviceCountryCodes'],
        'status': value['status'],
    };
}
