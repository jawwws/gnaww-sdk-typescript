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

import { mapValues } from '../runtime';
import type { ManufacturingMaterial } from './ManufacturingMaterial';
import {
    ManufacturingMaterialFromJSON,
    ManufacturingMaterialFromJSONTyped,
    ManufacturingMaterialToJSON,
    ManufacturingMaterialToJSONTyped,
} from './ManufacturingMaterial';
import type { ManufacturingGeometry } from './ManufacturingGeometry';
import {
    ManufacturingGeometryFromJSON,
    ManufacturingGeometryFromJSONTyped,
    ManufacturingGeometryToJSON,
    ManufacturingGeometryToJSONTyped,
} from './ManufacturingGeometry';
import type { ManufacturingRegion } from './ManufacturingRegion';
import {
    ManufacturingRegionFromJSON,
    ManufacturingRegionFromJSONTyped,
    ManufacturingRegionToJSON,
    ManufacturingRegionToJSONTyped,
} from './ManufacturingRegion';

/**
 * One physical component or meaningful intermediate assembly.
 * @export
 * @interface ManufacturingComponent
 */
export interface ManufacturingComponent {
    /**
     *
     * @type {string}
     * @memberof ManufacturingComponent
     */
    componentId: string;
    /**
     *
     * @type {ManufacturingGeometry}
     * @memberof ManufacturingComponent
     */
    geometry?: ManufacturingGeometry;
    /**
     *
     * @type {ManufacturingMaterial}
     * @memberof ManufacturingComponent
     */
    material?: ManufacturingMaterial;
    /**
     *
     * @type {number}
     * @memberof ManufacturingComponent
     */
    multiplicity?: number;
    /**
     *
     * @type {string}
     * @memberof ManufacturingComponent
     */
    parentComponentId?: string | null;
    /**
     *
     * @type {Array<ManufacturingRegion>}
     * @memberof ManufacturingComponent
     */
    regions?: Array<ManufacturingRegion>;
    /**
     *
     * @type {string}
     * @memberof ManufacturingComponent
     */
    role: string;
}

/**
 * Check if a given object implements the ManufacturingComponent interface.
 */
export function instanceOfManufacturingComponent(value: object): value is ManufacturingComponent {
    if (!('componentId' in value) || value['componentId'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    return true;
}

export function ManufacturingComponentFromJSON(json: any): ManufacturingComponent {
    return ManufacturingComponentFromJSONTyped(json, false);
}

export function ManufacturingComponentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingComponent {
    if (json == null) {
        return json;
    }
    return {

        'componentId': json['component_id'],
        'geometry': json['geometry'] == null ? undefined : ManufacturingGeometryFromJSON(json['geometry']),
        'material': json['material'] == null ? undefined : ManufacturingMaterialFromJSON(json['material']),
        'multiplicity': json['multiplicity'] == null ? undefined : json['multiplicity'],
        'parentComponentId': json['parent_component_id'] == null ? undefined : json['parent_component_id'],
        'regions': json['regions'] == null ? undefined : ((json['regions'] as Array<any>).map(ManufacturingRegionFromJSON)),
        'role': json['role'],
    };
}

export function ManufacturingComponentToJSON(json: any): ManufacturingComponent {
    return ManufacturingComponentToJSONTyped(json, false);
}

export function ManufacturingComponentToJSONTyped(value?: ManufacturingComponent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'component_id': value['componentId'],
        'geometry': ManufacturingGeometryToJSON(value['geometry']),
        'material': ManufacturingMaterialToJSON(value['material']),
        'multiplicity': value['multiplicity'],
        'parent_component_id': value['parentComponentId'],
        'regions': value['regions'] == null ? undefined : ((value['regions'] as Array<any>).map(ManufacturingRegionToJSON)),
        'role': value['role'],
    };
}
