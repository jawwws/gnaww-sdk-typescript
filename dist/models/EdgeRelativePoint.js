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
exports.EdgeRelativePointVerticalEdgeEnum = exports.EdgeRelativePointHorizontalEdgeEnum = void 0;
exports.instanceOfEdgeRelativePoint = instanceOfEdgeRelativePoint;
exports.EdgeRelativePointFromJSON = EdgeRelativePointFromJSON;
exports.EdgeRelativePointFromJSONTyped = EdgeRelativePointFromJSONTyped;
exports.EdgeRelativePointToJSON = EdgeRelativePointToJSON;
exports.EdgeRelativePointToJSONTyped = EdgeRelativePointToJSONTyped;
/**
 * @export
 */
exports.EdgeRelativePointHorizontalEdgeEnum = {
    Left: 'left',
    Right: 'right'
};
/**
 * @export
 */
exports.EdgeRelativePointVerticalEdgeEnum = {
    Top: 'top',
    Bottom: 'bottom'
};
/**
 * Check if a given object implements the EdgeRelativePoint interface.
 */
function instanceOfEdgeRelativePoint(value) {
    if (!('horizontalEdge' in value) || value['horizontalEdge'] === undefined)
        return false;
    if (!('horizontalOffsetMm' in value) || value['horizontalOffsetMm'] === undefined)
        return false;
    if (!('verticalEdge' in value) || value['verticalEdge'] === undefined)
        return false;
    if (!('verticalOffsetMm' in value) || value['verticalOffsetMm'] === undefined)
        return false;
    return true;
}
function EdgeRelativePointFromJSON(json) {
    return EdgeRelativePointFromJSONTyped(json, false);
}
function EdgeRelativePointFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'horizontalEdge': json['horizontal_edge'],
        'horizontalOffsetMm': json['horizontal_offset_mm'],
        'verticalEdge': json['vertical_edge'],
        'verticalOffsetMm': json['vertical_offset_mm'],
    };
}
function EdgeRelativePointToJSON(json) {
    return EdgeRelativePointToJSONTyped(json, false);
}
function EdgeRelativePointToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'horizontal_edge': value['horizontalEdge'],
        'horizontal_offset_mm': value['horizontalOffsetMm'],
        'vertical_edge': value['verticalEdge'],
        'vertical_offset_mm': value['verticalOffsetMm'],
    };
}
