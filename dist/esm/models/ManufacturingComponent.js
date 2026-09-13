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
import { ManufacturingMaterialFromJSON, ManufacturingMaterialToJSON, } from './ManufacturingMaterial';
import { ManufacturingGeometryFromJSON, ManufacturingGeometryToJSON, } from './ManufacturingGeometry';
import { ManufacturingRegionFromJSON, ManufacturingRegionToJSON, } from './ManufacturingRegion';
/**
 * Check if a given object implements the ManufacturingComponent interface.
 */
export function instanceOfManufacturingComponent(value) {
    if (!('componentId' in value) || value['componentId'] === undefined)
        return false;
    if (!('role' in value) || value['role'] === undefined)
        return false;
    return true;
}
export function ManufacturingComponentFromJSON(json) {
    return ManufacturingComponentFromJSONTyped(json, false);
}
export function ManufacturingComponentFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'componentId': json['component_id'],
        'geometry': json['geometry'] == null ? undefined : ManufacturingGeometryFromJSON(json['geometry']),
        'material': json['material'] == null ? undefined : ManufacturingMaterialFromJSON(json['material']),
        'multiplicity': json['multiplicity'] == null ? undefined : json['multiplicity'],
        'parentComponentId': json['parent_component_id'] == null ? undefined : json['parent_component_id'],
        'regions': json['regions'] == null ? undefined : (json['regions'].map(ManufacturingRegionFromJSON)),
        'role': json['role'],
    };
}
export function ManufacturingComponentToJSON(json) {
    return ManufacturingComponentToJSONTyped(json, false);
}
export function ManufacturingComponentToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'component_id': value['componentId'],
        'geometry': ManufacturingGeometryToJSON(value['geometry']),
        'material': ManufacturingMaterialToJSON(value['material']),
        'multiplicity': value['multiplicity'],
        'parent_component_id': value['parentComponentId'],
        'regions': value['regions'] == null ? undefined : (value['regions'].map(ManufacturingRegionToJSON)),
        'role': value['role'],
    };
}
