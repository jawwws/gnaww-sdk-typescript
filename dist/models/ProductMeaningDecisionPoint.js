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
exports.instanceOfProductMeaningDecisionPoint = instanceOfProductMeaningDecisionPoint;
exports.ProductMeaningDecisionPointFromJSON = ProductMeaningDecisionPointFromJSON;
exports.ProductMeaningDecisionPointFromJSONTyped = ProductMeaningDecisionPointFromJSONTyped;
exports.ProductMeaningDecisionPointToJSON = ProductMeaningDecisionPointToJSON;
exports.ProductMeaningDecisionPointToJSONTyped = ProductMeaningDecisionPointToJSONTyped;
/**
 * Check if a given object implements the ProductMeaningDecisionPoint interface.
 */
function instanceOfProductMeaningDecisionPoint(value) {
    if (!('options' in value) || value['options'] === undefined)
        return false;
    if (!('question' in value) || value['question'] === undefined)
        return false;
    if (!('rationale' in value) || value['rationale'] === undefined)
        return false;
    return true;
}
function ProductMeaningDecisionPointFromJSON(json) {
    return ProductMeaningDecisionPointFromJSONTyped(json, false);
}
function ProductMeaningDecisionPointFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'affectsFamilyMapping': json['affects_family_mapping'] == null ? undefined : json['affects_family_mapping'],
        'options': json['options'],
        'question': json['question'],
        'rationale': json['rationale'],
    };
}
function ProductMeaningDecisionPointToJSON(json) {
    return ProductMeaningDecisionPointToJSONTyped(json, false);
}
function ProductMeaningDecisionPointToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'affects_family_mapping': value['affectsFamilyMapping'],
        'options': value['options'],
        'question': value['question'],
        'rationale': value['rationale'],
    };
}
