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
exports.FoldedLeafletOptionsFoldPatternEnum = void 0;
exports.instanceOfFoldedLeafletOptions = instanceOfFoldedLeafletOptions;
exports.FoldedLeafletOptionsFromJSON = FoldedLeafletOptionsFromJSON;
exports.FoldedLeafletOptionsFromJSONTyped = FoldedLeafletOptionsFromJSONTyped;
exports.FoldedLeafletOptionsToJSON = FoldedLeafletOptionsToJSON;
exports.FoldedLeafletOptionsToJSONTyped = FoldedLeafletOptionsToJSONTyped;
const FinishedSize_1 = require("./FinishedSize");
/**
 * @export
 */
exports.FoldedLeafletOptionsFoldPatternEnum = {
    HalfFold: 'half_fold',
    TriFold: 'tri_fold',
    ZFold: 'z_fold',
    GateFold: 'gate_fold',
    RollFold: 'roll_fold',
    CrossFold: 'cross_fold',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the FoldedLeafletOptions interface.
 */
function instanceOfFoldedLeafletOptions(value) {
    return true;
}
function FoldedLeafletOptionsFromJSON(json) {
    return FoldedLeafletOptionsFromJSONTyped(json, false);
}
function FoldedLeafletOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'finishedSize': json['finished_size'] == null ? undefined : (0, FinishedSize_1.FinishedSizeFromJSON)(json['finished_size']),
        'flatSize': json['flat_size'] == null ? undefined : (0, FinishedSize_1.FinishedSizeFromJSON)(json['flat_size']),
        'foldPattern': json['fold_pattern'] == null ? undefined : json['fold_pattern'],
        'panels': json['panels'] == null ? undefined : json['panels'],
    };
}
function FoldedLeafletOptionsToJSON(json) {
    return FoldedLeafletOptionsToJSONTyped(json, false);
}
function FoldedLeafletOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'finished_size': (0, FinishedSize_1.FinishedSizeToJSON)(value['finishedSize']),
        'flat_size': (0, FinishedSize_1.FinishedSizeToJSON)(value['flatSize']),
        'fold_pattern': value['foldPattern'],
        'panels': value['panels'],
    };
}
