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
export const Circle2DKindEnum = {
    Circle: 'circle'
};
/**
 * Check if a given object implements the Circle2D interface.
 */
export function instanceOfCircle2D(value) {
    if (!('centre' in value) || value['centre'] === undefined)
        return false;
    if (!('diameterMm' in value) || value['diameterMm'] === undefined)
        return false;
    return true;
}
export function Circle2DFromJSON(json) {
    return Circle2DFromJSONTyped(json, false);
}
export function Circle2DFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'centre': Point2DFromJSON(json['centre']),
        'diameterMm': json['diameter_mm'],
        'kind': json['kind'] == null ? undefined : json['kind'],
    };
}
export function Circle2DToJSON(json) {
    return Circle2DToJSONTyped(json, false);
}
export function Circle2DToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'centre': Point2DToJSON(value['centre']),
        'diameter_mm': value['diameterMm'],
        'kind': value['kind'],
    };
}
