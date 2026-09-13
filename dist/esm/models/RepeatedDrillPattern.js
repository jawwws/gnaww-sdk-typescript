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
import { Point2DFromJSON, Point2DToJSON, } from './Point2D';
/**
 * @export
 */
export const RepeatedDrillPatternShapeEnum = {
    Circle: 'circle',
    Slot: 'slot',
    Custom: 'custom'
};
/**
 * @export
 */
export const RepeatedDrillPatternStyleEnum = {
    Through: 'through',
    Blind: 'blind',
    Countersunk: 'countersunk',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the RepeatedDrillPattern interface.
 */
export function instanceOfRepeatedDrillPattern(value) {
    if (!('origin' in value) || value['origin'] === undefined)
        return false;
    return true;
}
export function RepeatedDrillPatternFromJSON(json) {
    return RepeatedDrillPatternFromJSONTyped(json, false);
}
export function RepeatedDrillPatternFromJSONTyped(json, ignoreDiscriminator) {
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
        'origin': Point2DFromJSON(json['origin']),
        'rowSpacingMm': json['row_spacing_mm'] == null ? undefined : json['row_spacing_mm'],
        'rows': json['rows'] == null ? undefined : json['rows'],
        'shape': json['shape'] == null ? undefined : json['shape'],
        'style': json['style'] == null ? undefined : json['style'],
        'widthMm': json['width_mm'] == null ? undefined : json['width_mm'],
    };
}
export function RepeatedDrillPatternToJSON(json) {
    return RepeatedDrillPatternToJSONTyped(json, false);
}
export function RepeatedDrillPatternToJSONTyped(value, ignoreDiscriminator = false) {
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
        'origin': Point2DToJSON(value['origin']),
        'row_spacing_mm': value['rowSpacingMm'],
        'rows': value['rows'],
        'shape': value['shape'],
        'style': value['style'],
        'width_mm': value['widthMm'],
    };
}
