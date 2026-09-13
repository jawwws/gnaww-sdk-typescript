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
exports.RepeatedDrillPatternStyleEnum = exports.RepeatedDrillPatternShapeEnum = void 0;
exports.instanceOfRepeatedDrillPattern = instanceOfRepeatedDrillPattern;
exports.RepeatedDrillPatternFromJSON = RepeatedDrillPatternFromJSON;
exports.RepeatedDrillPatternFromJSONTyped = RepeatedDrillPatternFromJSONTyped;
exports.RepeatedDrillPatternToJSON = RepeatedDrillPatternToJSON;
exports.RepeatedDrillPatternToJSONTyped = RepeatedDrillPatternToJSONTyped;
const Point2D_1 = require("./Point2D");
/**
 * @export
 */
exports.RepeatedDrillPatternShapeEnum = {
    Circle: 'circle',
    Slot: 'slot',
    Custom: 'custom'
};
/**
 * @export
 */
exports.RepeatedDrillPatternStyleEnum = {
    Through: 'through',
    Blind: 'blind',
    Countersunk: 'countersunk',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the RepeatedDrillPattern interface.
 */
function instanceOfRepeatedDrillPattern(value) {
    if (!('origin' in value) || value['origin'] === undefined)
        return false;
    return true;
}
function RepeatedDrillPatternFromJSON(json) {
    return RepeatedDrillPatternFromJSONTyped(json, false);
}
function RepeatedDrillPatternFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'columnSpacingMm': json['column_spacing_mm'] == null ? undefined : json['column_spacing_mm'],
        'columns': json['columns'] == null ? undefined : json['columns'],
        'depthMm': json['depth_mm'] == null ? undefined : json['depth_mm'],
        'diameterMm': json['diameter_mm'] == null ? undefined : json['diameter_mm'],
        'geometryAssetRef': json['geometry_asset_ref'] == null ? undefined : json['geometry_asset_ref'],
        'heightMm': json['height_mm'] == null ? undefined : json['height_mm'],
        'origin': (0, Point2D_1.Point2DFromJSON)(json['origin']),
        'rowSpacingMm': json['row_spacing_mm'] == null ? undefined : json['row_spacing_mm'],
        'rows': json['rows'] == null ? undefined : json['rows'],
        'shape': json['shape'] == null ? undefined : json['shape'],
        'style': json['style'] == null ? undefined : json['style'],
        'widthMm': json['width_mm'] == null ? undefined : json['width_mm'],
    };
}
function RepeatedDrillPatternToJSON(json) {
    return RepeatedDrillPatternToJSONTyped(json, false);
}
function RepeatedDrillPatternToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'column_spacing_mm': value['columnSpacingMm'],
        'columns': value['columns'],
        'depth_mm': value['depthMm'],
        'diameter_mm': value['diameterMm'],
        'geometry_asset_ref': value['geometryAssetRef'],
        'height_mm': value['heightMm'],
        'origin': (0, Point2D_1.Point2DToJSON)(value['origin']),
        'row_spacing_mm': value['rowSpacingMm'],
        'rows': value['rows'],
        'shape': value['shape'],
        'style': value['style'],
        'width_mm': value['widthMm'],
    };
}
