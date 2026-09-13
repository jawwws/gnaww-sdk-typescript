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
import { Circle2DFromJSONTyped, Circle2DToJSON, } from './Circle2D';
import { Line2DFromJSONTyped, Line2DToJSON, } from './Line2D';
import { PathReferenceFromJSONTyped, PathReferenceToJSON, } from './PathReference';
import { Point2DFromJSONTyped, Point2DToJSON, } from './Point2D';
import { Rectangle2DFromJSONTyped, Rectangle2DToJSON, } from './Rectangle2D';
export function ManufacturingRegionGeometryFromJSON(json) {
    return ManufacturingRegionGeometryFromJSONTyped(json, false);
}
export function ManufacturingRegionGeometryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['kind']) {
        case 'circle':
            return Object.assign({}, Circle2DFromJSONTyped(json, true), { kind: 'circle' });
        case 'line':
            return Object.assign({}, Line2DFromJSONTyped(json, true), { kind: 'line' });
        case 'path_reference':
            return Object.assign({}, PathReferenceFromJSONTyped(json, true), { kind: 'path_reference' });
        case 'point':
            return Object.assign({}, Point2DFromJSONTyped(json, true), { kind: 'point' });
        case 'rectangle':
            return Object.assign({}, Rectangle2DFromJSONTyped(json, true), { kind: 'rectangle' });
        default:
            return json;
    }
}
export function ManufacturingRegionGeometryToJSON(json) {
    return ManufacturingRegionGeometryToJSONTyped(json, false);
}
export function ManufacturingRegionGeometryToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    switch (value['kind']) {
        case 'circle':
            return Object.assign({}, Circle2DToJSON(value), { kind: 'circle' });
        case 'line':
            return Object.assign({}, Line2DToJSON(value), { kind: 'line' });
        case 'path_reference':
            return Object.assign({}, PathReferenceToJSON(value), { kind: 'path_reference' });
        case 'point':
            return Object.assign({}, Point2DToJSON(value), { kind: 'point' });
        case 'rectangle':
            return Object.assign({}, Rectangle2DToJSON(value), { kind: 'rectangle' });
        default:
            return value;
    }
}
