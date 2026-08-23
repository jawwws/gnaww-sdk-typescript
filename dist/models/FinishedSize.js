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
exports.FinishedSizeOrientationEnum = void 0;
exports.instanceOfFinishedSize = instanceOfFinishedSize;
exports.FinishedSizeFromJSON = FinishedSizeFromJSON;
exports.FinishedSizeFromJSONTyped = FinishedSizeFromJSONTyped;
exports.FinishedSizeToJSON = FinishedSizeToJSON;
exports.FinishedSizeToJSONTyped = FinishedSizeToJSONTyped;
/**
 * @export
 */
exports.FinishedSizeOrientationEnum = {
    Portrait: 'portrait',
    Landscape: 'landscape',
    Square: 'square',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the FinishedSize interface.
 */
function instanceOfFinishedSize(value) {
    return true;
}
function FinishedSizeFromJSON(json) {
    return FinishedSizeFromJSONTyped(json, false);
}
function FinishedSizeFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'heightMm': json['height_mm'] == null ? undefined : json['height_mm'],
        'orientation': json['orientation'] == null ? undefined : json['orientation'],
        'standardName': json['standard_name'] == null ? undefined : json['standard_name'],
        'widthMm': json['width_mm'] == null ? undefined : json['width_mm'],
    };
}
function FinishedSizeToJSON(json) {
    return FinishedSizeToJSONTyped(json, false);
}
function FinishedSizeToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'height_mm': value['heightMm'],
        'orientation': value['orientation'],
        'standard_name': value['standardName'],
        'width_mm': value['widthMm'],
    };
}
