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
exports.Line2DKindEnum = void 0;
exports.instanceOfLine2D = instanceOfLine2D;
exports.Line2DFromJSON = Line2DFromJSON;
exports.Line2DFromJSONTyped = Line2DFromJSONTyped;
exports.Line2DToJSON = Line2DToJSON;
exports.Line2DToJSONTyped = Line2DToJSONTyped;
const Point2D_1 = require("./Point2D");
/**
 * @export
 */
exports.Line2DKindEnum = {
    Line: 'line'
};
/**
 * Check if a given object implements the Line2D interface.
 */
function instanceOfLine2D(value) {
    if (!('end' in value) || value['end'] === undefined)
        return false;
    if (!('start' in value) || value['start'] === undefined)
        return false;
    return true;
}
function Line2DFromJSON(json) {
    return Line2DFromJSONTyped(json, false);
}
function Line2DFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'end': (0, Point2D_1.Point2DFromJSON)(json['end']),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'start': (0, Point2D_1.Point2DFromJSON)(json['start']),
    };
}
function Line2DToJSON(json) {
    return Line2DToJSONTyped(json, false);
}
function Line2DToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'end': (0, Point2D_1.Point2DToJSON)(value['end']),
        'kind': value['kind'],
        'start': (0, Point2D_1.Point2DToJSON)(value['start']),
    };
}
