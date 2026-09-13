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
exports.Rectangle2DKindEnum = void 0;
exports.instanceOfRectangle2D = instanceOfRectangle2D;
exports.Rectangle2DFromJSON = Rectangle2DFromJSON;
exports.Rectangle2DFromJSONTyped = Rectangle2DFromJSONTyped;
exports.Rectangle2DToJSON = Rectangle2DToJSON;
exports.Rectangle2DToJSONTyped = Rectangle2DToJSONTyped;
/**
 * @export
 */
exports.Rectangle2DKindEnum = {
    Rectangle: 'rectangle'
};
/**
 * Check if a given object implements the Rectangle2D interface.
 */
function instanceOfRectangle2D(value) {
    if (!('heightMm' in value) || value['heightMm'] === undefined)
        return false;
    if (!('widthMm' in value) || value['widthMm'] === undefined)
        return false;
    if (!('xMm' in value) || value['xMm'] === undefined)
        return false;
    if (!('yMm' in value) || value['yMm'] === undefined)
        return false;
    return true;
}
function Rectangle2DFromJSON(json) {
    return Rectangle2DFromJSONTyped(json, false);
}
function Rectangle2DFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'heightMm': json['height_mm'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'widthMm': json['width_mm'],
        'xMm': json['x_mm'],
        'yMm': json['y_mm'],
    };
}
function Rectangle2DToJSON(json) {
    return Rectangle2DToJSONTyped(json, false);
}
function Rectangle2DToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'height_mm': value['heightMm'],
        'kind': value['kind'],
        'width_mm': value['widthMm'],
        'x_mm': value['xMm'],
        'y_mm': value['yMm'],
    };
}
