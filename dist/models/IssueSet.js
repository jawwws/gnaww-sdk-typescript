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
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfIssueSet = instanceOfIssueSet;
exports.IssueSetFromJSON = IssueSetFromJSON;
exports.IssueSetFromJSONTyped = IssueSetFromJSONTyped;
exports.IssueSetToJSON = IssueSetToJSON;
exports.IssueSetToJSONTyped = IssueSetToJSONTyped;
const Issue_1 = require("./Issue");
/**
 * Check if a given object implements the IssueSet interface.
 */
function instanceOfIssueSet(value) {
    return true;
}
function IssueSetFromJSON(json) {
    return IssueSetFromJSONTyped(json, false);
}
function IssueSetFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'blockers': json['blockers'] == null ? undefined : (json['blockers'].map(Issue_1.IssueFromJSON)),
        'info': json['info'] == null ? undefined : (json['info'].map(Issue_1.IssueFromJSON)),
        'warnings': json['warnings'] == null ? undefined : (json['warnings'].map(Issue_1.IssueFromJSON)),
    };
}
function IssueSetToJSON(json) {
    return IssueSetToJSONTyped(json, false);
}
function IssueSetToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'blockers': value['blockers'] == null ? undefined : (value['blockers'].map(Issue_1.IssueToJSON)),
        'info': value['info'] == null ? undefined : (value['info'].map(Issue_1.IssueToJSON)),
        'warnings': value['warnings'] == null ? undefined : (value['warnings'].map(Issue_1.IssueToJSON)),
    };
}
