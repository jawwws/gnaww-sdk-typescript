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
exports.instanceOfManufacturingComponent = instanceOfManufacturingComponent;
exports.ManufacturingComponentFromJSON = ManufacturingComponentFromJSON;
exports.ManufacturingComponentFromJSONTyped = ManufacturingComponentFromJSONTyped;
exports.ManufacturingComponentToJSON = ManufacturingComponentToJSON;
exports.ManufacturingComponentToJSONTyped = ManufacturingComponentToJSONTyped;
const ManufacturingMaterial_1 = require("./ManufacturingMaterial");
const ManufacturingGeometry_1 = require("./ManufacturingGeometry");
const ManufacturingRegion_1 = require("./ManufacturingRegion");
/**
 * Check if a given object implements the ManufacturingComponent interface.
 */
function instanceOfManufacturingComponent(value) {
    if (!('componentId' in value) || value['componentId'] === undefined)
        return false;
    if (!('role' in value) || value['role'] === undefined)
        return false;
    return true;
}
function ManufacturingComponentFromJSON(json) {
    return ManufacturingComponentFromJSONTyped(json, false);
}
function ManufacturingComponentFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'componentId': json['component_id'],
        'geometry': json['geometry'] == null ? undefined : (0, ManufacturingGeometry_1.ManufacturingGeometryFromJSON)(json['geometry']),
        'material': json['material'] == null ? undefined : (0, ManufacturingMaterial_1.ManufacturingMaterialFromJSON)(json['material']),
        'multiplicity': json['multiplicity'] == null ? undefined : json['multiplicity'],
        'parentComponentId': json['parent_component_id'] == null ? undefined : json['parent_component_id'],
        'regions': json['regions'] == null ? undefined : (json['regions'].map(ManufacturingRegion_1.ManufacturingRegionFromJSON)),
        'role': json['role'],
    };
}
function ManufacturingComponentToJSON(json) {
    return ManufacturingComponentToJSONTyped(json, false);
}
function ManufacturingComponentToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'component_id': value['componentId'],
        'geometry': (0, ManufacturingGeometry_1.ManufacturingGeometryToJSON)(value['geometry']),
        'material': (0, ManufacturingMaterial_1.ManufacturingMaterialToJSON)(value['material']),
        'multiplicity': value['multiplicity'],
        'parent_component_id': value['parentComponentId'],
        'regions': value['regions'] == null ? undefined : (value['regions'].map(ManufacturingRegion_1.ManufacturingRegionToJSON)),
        'role': value['role'],
    };
}
