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
exports.instanceOfMatchDifference = instanceOfMatchDifference;
exports.MatchDifferenceFromJSON = MatchDifferenceFromJSON;
exports.MatchDifferenceFromJSONTyped = MatchDifferenceFromJSONTyped;
exports.MatchDifferenceToJSON = MatchDifferenceToJSON;
exports.MatchDifferenceToJSONTyped = MatchDifferenceToJSONTyped;
/**
 * Check if a given object implements the MatchDifference interface.
 */
function instanceOfMatchDifference(value) {
    if (!('field' in value) || value['field'] === undefined)
        return false;
    if (!('reason' in value) || value['reason'] === undefined)
        return false;
    return true;
}
function MatchDifferenceFromJSON(json) {
    return MatchDifferenceFromJSONTyped(json, false);
}
function MatchDifferenceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'field': json['field'],
        'offered': json['offered'] == null ? undefined : json['offered'],
        'reason': json['reason'],
        'requested': json['requested'] == null ? undefined : json['requested'],
    };
}
function MatchDifferenceToJSON(json) {
    return MatchDifferenceToJSONTyped(json, false);
}
function MatchDifferenceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'field': value['field'],
        'offered': value['offered'],
        'reason': value['reason'],
        'requested': value['requested'],
    };
}
