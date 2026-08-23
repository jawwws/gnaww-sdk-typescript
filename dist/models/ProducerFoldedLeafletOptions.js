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
exports.ProducerFoldedLeafletOptionsFoldPatternsEnum = void 0;
exports.instanceOfProducerFoldedLeafletOptions = instanceOfProducerFoldedLeafletOptions;
exports.ProducerFoldedLeafletOptionsFromJSON = ProducerFoldedLeafletOptionsFromJSON;
exports.ProducerFoldedLeafletOptionsFromJSONTyped = ProducerFoldedLeafletOptionsFromJSONTyped;
exports.ProducerFoldedLeafletOptionsToJSON = ProducerFoldedLeafletOptionsToJSON;
exports.ProducerFoldedLeafletOptionsToJSONTyped = ProducerFoldedLeafletOptionsToJSONTyped;
const DimensionCapability_1 = require("./DimensionCapability");
/**
 * @export
 */
exports.ProducerFoldedLeafletOptionsFoldPatternsEnum = {
    HalfFold: 'half_fold',
    TriFold: 'tri_fold',
    ZFold: 'z_fold',
    GateFold: 'gate_fold',
    RollFold: 'roll_fold',
    CrossFold: 'cross_fold',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the ProducerFoldedLeafletOptions interface.
 */
function instanceOfProducerFoldedLeafletOptions(value) {
    return true;
}
function ProducerFoldedLeafletOptionsFromJSON(json) {
    return ProducerFoldedLeafletOptionsFromJSONTyped(json, false);
}
function ProducerFoldedLeafletOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'finishedSizes': json['finished_sizes'] == null ? undefined : (json['finished_sizes'].map(DimensionCapability_1.DimensionCapabilityFromJSON)),
        'flatSizes': json['flat_sizes'] == null ? undefined : (json['flat_sizes'].map(DimensionCapability_1.DimensionCapabilityFromJSON)),
        'foldPatterns': json['fold_patterns'] == null ? undefined : json['fold_patterns'],
        'panelCounts': json['panel_counts'] == null ? undefined : json['panel_counts'],
    };
}
function ProducerFoldedLeafletOptionsToJSON(json) {
    return ProducerFoldedLeafletOptionsToJSONTyped(json, false);
}
function ProducerFoldedLeafletOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'finished_sizes': value['finishedSizes'] == null ? undefined : (value['finishedSizes'].map(DimensionCapability_1.DimensionCapabilityToJSON)),
        'flat_sizes': value['flatSizes'] == null ? undefined : (value['flatSizes'].map(DimensionCapability_1.DimensionCapabilityToJSON)),
        'fold_patterns': value['foldPatterns'],
        'panel_counts': value['panelCounts'],
    };
}
