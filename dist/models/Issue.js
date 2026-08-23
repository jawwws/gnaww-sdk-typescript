"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueSeverityEnum = void 0;
exports.instanceOfIssue = instanceOfIssue;
exports.IssueFromJSON = IssueFromJSON;
exports.IssueFromJSONTyped = IssueFromJSONTyped;
exports.IssueToJSON = IssueToJSON;
exports.IssueToJSONTyped = IssueToJSONTyped;
/**
 * @export
 */
exports.IssueSeverityEnum = {
    Blocker: 'blocker',
    Warning: 'warning',
    Info: 'info'
};
/**
 * Check if a given object implements the Issue interface.
 */
function instanceOfIssue(value) {
    if (!('code' in value) || value['code'] === undefined)
        return false;
    if (!('message' in value) || value['message'] === undefined)
        return false;
    if (!('severity' in value) || value['severity'] === undefined)
        return false;
    return true;
}
function IssueFromJSON(json) {
    return IssueFromJSONTyped(json, false);
}
function IssueFromJSONTyped(json, ignoreDiscriminator) {
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
function IssueToJSON(json) {
    return IssueToJSONTyped(json, false);
}
function IssueToJSONTyped(value, ignoreDiscriminator = false) {
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
