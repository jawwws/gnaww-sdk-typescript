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
exports.ManufacturingRegionKindEnum = exports.ManufacturingRegionFaceEnum = void 0;
exports.instanceOfManufacturingRegion = instanceOfManufacturingRegion;
exports.ManufacturingRegionFromJSON = ManufacturingRegionFromJSON;
exports.ManufacturingRegionFromJSONTyped = ManufacturingRegionFromJSONTyped;
exports.ManufacturingRegionToJSON = ManufacturingRegionToJSON;
exports.ManufacturingRegionToJSONTyped = ManufacturingRegionToJSONTyped;
const ManufacturingRegionGeometry_1 = require("./ManufacturingRegionGeometry");
/**
 * @export
 */
exports.ManufacturingRegionFaceEnum = {
    Front: 'front',
    Back: 'back',
    Top: 'top',
    Bottom: 'bottom',
    Left: 'left',
    Right: 'right',
    Inside: 'inside',
    Outside: 'outside'
};
/**
 * @export
 */
exports.ManufacturingRegionKindEnum = {
    Face: 'face',
    Edge: 'edge',
    Area: 'area',
    Path: 'path',
    Named: 'named'
};
/**
 * Check if a given object implements the ManufacturingRegion interface.
 */
function instanceOfManufacturingRegion(value) {
    if (!('kind' in value) || value['kind'] === undefined)
        return false;
    if (!('regionId' in value) || value['regionId'] === undefined)
        return false;
    return true;
}
function ManufacturingRegionFromJSON(json) {
    return ManufacturingRegionFromJSONTyped(json, false);
}
function ManufacturingRegionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'edge': json['edge'] == null ? undefined : json['edge'],
        'face': json['face'] == null ? undefined : json['face'],
        'geometry': json['geometry'] == null ? undefined : (0, ManufacturingRegionGeometry_1.ManufacturingRegionGeometryFromJSON)(json['geometry']),
        'kind': json['kind'],
        'name': json['name'] == null ? undefined : json['name'],
        'regionId': json['region_id'],
    };
}
function ManufacturingRegionToJSON(json) {
    return ManufacturingRegionToJSONTyped(json, false);
}
function ManufacturingRegionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'edge': value['edge'],
        'face': value['face'],
        'geometry': (0, ManufacturingRegionGeometry_1.ManufacturingRegionGeometryToJSON)(value['geometry']),
        'kind': value['kind'],
        'name': value['name'],
        'region_id': value['regionId'],
    };
}
