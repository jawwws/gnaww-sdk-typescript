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
exports.ContourKindEnum = void 0;
exports.instanceOfContour = instanceOfContour;
exports.ContourFromJSON = ContourFromJSON;
exports.ContourFromJSONTyped = ContourFromJSONTyped;
exports.ContourToJSON = ContourToJSON;
exports.ContourToJSONTyped = ContourToJSONTyped;
const Point2D_1 = require("./Point2D");
/**
 * @export
 */
exports.ContourKindEnum = {
    PathReference: 'path_reference'
};
/**
 * Check if a given object implements the Contour interface.
 */
function instanceOfContour(value) {
    if (!('end' in value) || value['end'] === undefined)
        return false;
    if (!('start' in value) || value['start'] === undefined)
        return false;
    if (!('heightMm' in value) || value['heightMm'] === undefined)
        return false;
    if (!('widthMm' in value) || value['widthMm'] === undefined)
        return false;
    if (!('xMm' in value) || value['xMm'] === undefined)
        return false;
    if (!('yMm' in value) || value['yMm'] === undefined)
        return false;
    if (!('centre' in value) || value['centre'] === undefined)
        return false;
    if (!('diameterMm' in value) || value['diameterMm'] === undefined)
        return false;
    if (!('assetRef' in value) || value['assetRef'] === undefined)
        return false;
    return true;
}
function ContourFromJSON(json) {
    return ContourFromJSONTyped(json, false);
}
function ContourFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'end': (0, Point2D_1.Point2DFromJSON)(json['end']),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'start': (0, Point2D_1.Point2DFromJSON)(json['start']),
        'heightMm': json['height_mm'],
        'widthMm': json['width_mm'],
        'xMm': json['x_mm'],
        'yMm': json['y_mm'],
        'centre': (0, Point2D_1.Point2DFromJSON)(json['centre']),
        'diameterMm': json['diameter_mm'],
        'assetRef': json['asset_ref'],
        'pathId': json['path_id'] == null ? undefined : json['path_id'],
    };
}
function ContourToJSON(json) {
    return ContourToJSONTyped(json, false);
}
function ContourToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'end': (0, Point2D_1.Point2DToJSON)(value['end']),
        'kind': value['kind'],
        'start': (0, Point2D_1.Point2DToJSON)(value['start']),
        'height_mm': value['heightMm'],
        'width_mm': value['widthMm'],
        'x_mm': value['xMm'],
        'y_mm': value['yMm'],
        'centre': (0, Point2D_1.Point2DToJSON)(value['centre']),
        'diameter_mm': value['diameterMm'],
        'asset_ref': value['assetRef'],
        'path_id': value['pathId'],
    };
}
