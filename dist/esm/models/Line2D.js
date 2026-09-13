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
export const Line2DKindEnum = {
    Line: 'line'
};
/**
 * Check if a given object implements the Line2D interface.
 */
export function instanceOfLine2D(value) {
    if (!('end' in value) || value['end'] === undefined)
        return false;
    if (!('start' in value) || value['start'] === undefined)
        return false;
    return true;
}
export function Line2DFromJSON(json) {
    return Line2DFromJSONTyped(json, false);
}
export function Line2DFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'end': Point2DFromJSON(json['end']),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'start': Point2DFromJSON(json['start']),
    };
}
export function Line2DToJSON(json) {
    return Line2DToJSONTyped(json, false);
}
export function Line2DToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'end': Point2DToJSON(value['end']),
        'kind': value['kind'],
        'start': Point2DToJSON(value['start']),
    };
}
