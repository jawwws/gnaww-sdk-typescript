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
import { IssueSetFromJSON, IssueSetToJSON, } from './IssueSet';
/**
 * @export
 */
export const FulfilmentMatchResultStatusEnum = {
    Matched: 'matched',
    NeedsReview: 'needs_review',
    Blocked: 'blocked'
};
/**
 * Check if a given object implements the FulfilmentMatchResult interface.
 */
export function instanceOfFulfilmentMatchResult(value) {
    if (!('destinationCountryCode' in value) || value['destinationCountryCode'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function FulfilmentMatchResultFromJSON(json) {
    return FulfilmentMatchResultFromJSONTyped(json, false);
}
export function FulfilmentMatchResultFromJSONTyped(json, ignoreDiscriminator) {
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
export function FulfilmentMatchResultToJSON(json) {
    return FulfilmentMatchResultToJSONTyped(json, false);
}
export function FulfilmentMatchResultToJSONTyped(value, ignoreDiscriminator = false) {
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
