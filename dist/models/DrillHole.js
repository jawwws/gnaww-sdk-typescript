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
exports.DrillHoleStyleEnum = exports.DrillHoleShapeEnum = void 0;
exports.instanceOfDrillHole = instanceOfDrillHole;
exports.DrillHoleFromJSON = DrillHoleFromJSON;
exports.DrillHoleFromJSONTyped = DrillHoleFromJSONTyped;
exports.DrillHoleToJSON = DrillHoleToJSON;
exports.DrillHoleToJSONTyped = DrillHoleToJSONTyped;
const Point2D_1 = require("./Point2D");
const EdgeRelativePoint_1 = require("./EdgeRelativePoint");
/**
 * @export
 */
exports.DrillHoleShapeEnum = {
    Circle: 'circle',
    Slot: 'slot',
    Custom: 'custom'
};
/**
 * @export
 */
exports.DrillHoleStyleEnum = {
    Through: 'through',
    Blind: 'blind',
    Countersunk: 'countersunk',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the DrillHole interface.
 */
function instanceOfDrillHole(value) {
    return true;
}
function DrillHoleFromJSON(json) {
    return DrillHoleFromJSONTyped(json, false);
}
function DrillHoleFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'centre': json['centre'] == null ? undefined : (0, Point2D_1.Point2DFromJSON)(json['centre']),
        'depthMm': json['depth_mm'] == null ? undefined : json['depth_mm'],
        'diameterMm': json['diameter_mm'] == null ? undefined : json['diameter_mm'],
        'edgePosition': json['edge_position'] == null ? undefined : (0, EdgeRelativePoint_1.EdgeRelativePointFromJSON)(json['edge_position']),
        'geometryAssetRef': json['geometry_asset_ref'] == null ? undefined : json['geometry_asset_ref'],
        'heightMm': json['height_mm'] == null ? undefined : json['height_mm'],
        'shape': json['shape'] == null ? undefined : json['shape'],
        'style': json['style'] == null ? undefined : json['style'],
        'widthMm': json['width_mm'] == null ? undefined : json['width_mm'],
    };
}
function DrillHoleToJSON(json) {
    return DrillHoleToJSONTyped(json, false);
}
function DrillHoleToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'centre': (0, Point2D_1.Point2DToJSON)(value['centre']),
        'depth_mm': value['depthMm'],
        'diameter_mm': value['diameterMm'],
        'edge_position': (0, EdgeRelativePoint_1.EdgeRelativePointToJSON)(value['edgePosition']),
        'geometry_asset_ref': value['geometryAssetRef'],
        'height_mm': value['heightMm'],
        'shape': value['shape'],
        'style': value['style'],
        'width_mm': value['widthMm'],
    };
}
