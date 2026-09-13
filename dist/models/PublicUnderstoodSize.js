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
exports.PublicUnderstoodSizeOrientationEnum = void 0;
exports.instanceOfPublicUnderstoodSize = instanceOfPublicUnderstoodSize;
exports.PublicUnderstoodSizeFromJSON = PublicUnderstoodSizeFromJSON;
exports.PublicUnderstoodSizeFromJSONTyped = PublicUnderstoodSizeFromJSONTyped;
exports.PublicUnderstoodSizeToJSON = PublicUnderstoodSizeToJSON;
exports.PublicUnderstoodSizeToJSONTyped = PublicUnderstoodSizeToJSONTyped;
/**
 * @export
 */
exports.PublicUnderstoodSizeOrientationEnum = {
    Portrait: 'portrait',
    Landscape: 'landscape',
    Square: 'square'
};
/**
 * Check if a given object implements the PublicUnderstoodSize interface.
 */
function instanceOfPublicUnderstoodSize(value) {
    return true;
}
function PublicUnderstoodSizeFromJSON(json) {
    return PublicUnderstoodSizeFromJSONTyped(json, false);
}
function PublicUnderstoodSizeFromJSONTyped(json, ignoreDiscriminator) {
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
function PublicUnderstoodSizeToJSON(json) {
    return PublicUnderstoodSizeToJSONTyped(json, false);
}
function PublicUnderstoodSizeToJSONTyped(value, ignoreDiscriminator = false) {
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
