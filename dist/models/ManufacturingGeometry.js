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
exports.ManufacturingGeometryShapeEnum = exports.ManufacturingGeometryOrientationEnum = exports.ManufacturingGeometryCoordinateOriginEnum = void 0;
exports.instanceOfManufacturingGeometry = instanceOfManufacturingGeometry;
exports.ManufacturingGeometryFromJSON = ManufacturingGeometryFromJSON;
exports.ManufacturingGeometryFromJSONTyped = ManufacturingGeometryFromJSONTyped;
exports.ManufacturingGeometryToJSON = ManufacturingGeometryToJSON;
exports.ManufacturingGeometryToJSONTyped = ManufacturingGeometryToJSONTyped;
/**
 * @export
 */
exports.ManufacturingGeometryCoordinateOriginEnum = {
    TopLeft: 'top_left',
    BottomLeft: 'bottom_left',
    Centre: 'centre'
};
/**
 * @export
 */
exports.ManufacturingGeometryOrientationEnum = {
    Portrait: 'portrait',
    Landscape: 'landscape',
    Square: 'square',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.ManufacturingGeometryShapeEnum = {
    Rectangle: 'rectangle',
    Circle: 'circle',
    Polygon: 'polygon',
    Path: 'path',
    Solid: 'solid',
    Custom: 'custom',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the ManufacturingGeometry interface.
 */
function instanceOfManufacturingGeometry(value) {
    return true;
}
function ManufacturingGeometryFromJSON(json) {
    return ManufacturingGeometryFromJSONTyped(json, false);
}
function ManufacturingGeometryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'coordinateOrigin': json['coordinate_origin'] == null ? undefined : json['coordinate_origin'],
        'depthMm': json['depth_mm'] == null ? undefined : json['depth_mm'],
        'geometryAssetRef': json['geometry_asset_ref'] == null ? undefined : json['geometry_asset_ref'],
        'heightMm': json['height_mm'] == null ? undefined : json['height_mm'],
        'orientation': json['orientation'] == null ? undefined : json['orientation'],
        'shape': json['shape'] == null ? undefined : json['shape'],
        'standardName': json['standard_name'] == null ? undefined : json['standard_name'],
        'thicknessMm': json['thickness_mm'] == null ? undefined : json['thickness_mm'],
        'widthMm': json['width_mm'] == null ? undefined : json['width_mm'],
    };
}
function ManufacturingGeometryToJSON(json) {
    return ManufacturingGeometryToJSONTyped(json, false);
}
function ManufacturingGeometryToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'coordinate_origin': value['coordinateOrigin'],
        'depth_mm': value['depthMm'],
        'geometry_asset_ref': value['geometryAssetRef'],
        'height_mm': value['heightMm'],
        'orientation': value['orientation'],
        'shape': value['shape'],
        'standard_name': value['standardName'],
        'thickness_mm': value['thicknessMm'],
        'width_mm': value['widthMm'],
    };
}
