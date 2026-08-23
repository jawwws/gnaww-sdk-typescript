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
exports.SourceInputTypeEnum = void 0;
exports.instanceOfSourceInput = instanceOfSourceInput;
exports.SourceInputFromJSON = SourceInputFromJSON;
exports.SourceInputFromJSONTyped = SourceInputFromJSONTyped;
exports.SourceInputToJSON = SourceInputToJSON;
exports.SourceInputToJSONTyped = SourceInputToJSONTyped;
/**
 * @export
 */
exports.SourceInputTypeEnum = {
    NaturalLanguage: 'natural_language',
    StructuredJson: 'structured_json',
    Email: 'email',
    CsvRow: 'csv_row',
    StorefrontProduct: 'storefront_product'
};
/**
 * Check if a given object implements the SourceInput interface.
 */
function instanceOfSourceInput(value) {
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function SourceInputFromJSON(json) {
    return SourceInputFromJSONTyped(json, false);
}
function SourceInputFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': json['data'] == null ? undefined : json['data'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'rawText': json['raw_text'] == null ? undefined : json['raw_text'],
        'reference': json['reference'] == null ? undefined : json['reference'],
        'sourceSystem': json['source_system'] == null ? undefined : json['source_system'],
        'type': json['type'],
    };
}
function SourceInputToJSON(json) {
    return SourceInputToJSONTyped(json, false);
}
function SourceInputToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': value['data'],
        'metadata': value['metadata'],
        'raw_text': value['rawText'],
        'reference': value['reference'],
        'source_system': value['sourceSystem'],
        'type': value['type'],
    };
}
