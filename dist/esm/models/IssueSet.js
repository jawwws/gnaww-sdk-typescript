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
import { IssueFromJSON, IssueToJSON, } from './Issue';
/**
 * Check if a given object implements the IssueSet interface.
 */
export function instanceOfIssueSet(value) {
    return true;
}
export function IssueSetFromJSON(json) {
    return IssueSetFromJSONTyped(json, false);
}
export function IssueSetFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'blockers': json['blockers'] == null ? undefined : (json['blockers'].map(IssueFromJSON)),
        'info': json['info'] == null ? undefined : (json['info'].map(IssueFromJSON)),
        'warnings': json['warnings'] == null ? undefined : (json['warnings'].map(IssueFromJSON)),
    };
}
export function IssueSetToJSON(json) {
    return IssueSetToJSONTyped(json, false);
}
export function IssueSetToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'blockers': value['blockers'] == null ? undefined : (value['blockers'].map(IssueToJSON)),
        'info': value['info'] == null ? undefined : (value['info'].map(IssueToJSON)),
        'warnings': value['warnings'] == null ? undefined : (value['warnings'].map(IssueToJSON)),
    };
}
