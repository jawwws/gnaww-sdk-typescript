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
exports.Circle2DKindEnum = void 0;
exports.instanceOfCircle2D = instanceOfCircle2D;
exports.Circle2DFromJSON = Circle2DFromJSON;
exports.Circle2DFromJSONTyped = Circle2DFromJSONTyped;
exports.Circle2DToJSON = Circle2DToJSON;
exports.Circle2DToJSONTyped = Circle2DToJSONTyped;
const Point2D_1 = require("./Point2D");
/**
 * @export
 */
exports.Circle2DKindEnum = {
    Circle: 'circle'
};
/**
 * Check if a given object implements the Circle2D interface.
 */
function instanceOfCircle2D(value) {
    if (!('centre' in value) || value['centre'] === undefined)
        return false;
    if (!('diameterMm' in value) || value['diameterMm'] === undefined)
        return false;
    return true;
}
function Circle2DFromJSON(json) {
    return Circle2DFromJSONTyped(json, false);
}
function Circle2DFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'centre': (0, Point2D_1.Point2DFromJSON)(json['centre']),
        'diameterMm': json['diameter_mm'],
        'kind': json['kind'] == null ? undefined : json['kind'],
    };
}
function Circle2DToJSON(json) {
    return Circle2DToJSONTyped(json, false);
}
function Circle2DToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'centre': (0, Point2D_1.Point2DToJSON)(value['centre']),
        'diameter_mm': value['diameterMm'],
        'kind': value['kind'],
    };
}
