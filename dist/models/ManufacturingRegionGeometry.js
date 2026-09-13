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
exports.ManufacturingRegionGeometryFromJSON = ManufacturingRegionGeometryFromJSON;
exports.ManufacturingRegionGeometryFromJSONTyped = ManufacturingRegionGeometryFromJSONTyped;
exports.ManufacturingRegionGeometryToJSON = ManufacturingRegionGeometryToJSON;
exports.ManufacturingRegionGeometryToJSONTyped = ManufacturingRegionGeometryToJSONTyped;
const Circle2D_1 = require("./Circle2D");
const Line2D_1 = require("./Line2D");
const PathReference_1 = require("./PathReference");
const Point2D_1 = require("./Point2D");
const Rectangle2D_1 = require("./Rectangle2D");
function ManufacturingRegionGeometryFromJSON(json) {
    return ManufacturingRegionGeometryFromJSONTyped(json, false);
}
function ManufacturingRegionGeometryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['kind']) {
        case 'circle':
            return Object.assign({}, (0, Circle2D_1.Circle2DFromJSONTyped)(json, true), { kind: 'circle' });
        case 'line':
            return Object.assign({}, (0, Line2D_1.Line2DFromJSONTyped)(json, true), { kind: 'line' });
        case 'path_reference':
            return Object.assign({}, (0, PathReference_1.PathReferenceFromJSONTyped)(json, true), { kind: 'path_reference' });
        case 'point':
            return Object.assign({}, (0, Point2D_1.Point2DFromJSONTyped)(json, true), { kind: 'point' });
        case 'rectangle':
            return Object.assign({}, (0, Rectangle2D_1.Rectangle2DFromJSONTyped)(json, true), { kind: 'rectangle' });
        default:
            return json;
    }
}
function ManufacturingRegionGeometryToJSON(json) {
    return ManufacturingRegionGeometryToJSONTyped(json, false);
}
function ManufacturingRegionGeometryToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    switch (value['kind']) {
        case 'circle':
            return Object.assign({}, (0, Circle2D_1.Circle2DToJSON)(value), { kind: 'circle' });
        case 'line':
            return Object.assign({}, (0, Line2D_1.Line2DToJSON)(value), { kind: 'line' });
        case 'path_reference':
            return Object.assign({}, (0, PathReference_1.PathReferenceToJSON)(value), { kind: 'path_reference' });
        case 'point':
            return Object.assign({}, (0, Point2D_1.Point2DToJSON)(value), { kind: 'point' });
        case 'rectangle':
            return Object.assign({}, (0, Rectangle2D_1.Rectangle2DToJSON)(value), { kind: 'rectangle' });
        default:
            return value;
    }
}
