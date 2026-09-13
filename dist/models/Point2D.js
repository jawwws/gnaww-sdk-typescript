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
exports.Point2DKindEnum = void 0;
exports.instanceOfPoint2D = instanceOfPoint2D;
exports.Point2DFromJSON = Point2DFromJSON;
exports.Point2DFromJSONTyped = Point2DFromJSONTyped;
exports.Point2DToJSON = Point2DToJSON;
exports.Point2DToJSONTyped = Point2DToJSONTyped;
/**
 * @export
 */
exports.Point2DKindEnum = {
    Point: 'point'
};
/**
 * Check if a given object implements the Point2D interface.
 */
function instanceOfPoint2D(value) {
    if (!('xMm' in value) || value['xMm'] === undefined)
        return false;
    if (!('yMm' in value) || value['yMm'] === undefined)
        return false;
    return true;
}
function Point2DFromJSON(json) {
    return Point2DFromJSONTyped(json, false);
}
function Point2DFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'kind': json['kind'] == null ? undefined : json['kind'],
        'xMm': json['x_mm'],
        'yMm': json['y_mm'],
    };
}
function Point2DToJSON(json) {
    return Point2DToJSONTyped(json, false);
}
function Point2DToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'kind': value['kind'],
        'x_mm': value['xMm'],
        'y_mm': value['yMm'],
    };
}
