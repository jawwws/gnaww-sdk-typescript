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
import type { ManufacturingRegionGeometry } from './ManufacturingRegionGeometry';
import {
    ManufacturingRegionGeometryFromJSON,
    ManufacturingRegionGeometryFromJSONTyped,
    ManufacturingRegionGeometryToJSON,
    ManufacturingRegionGeometryToJSONTyped,
} from './ManufacturingRegionGeometry';

/**
 * Addressable production target within one component.
 * @export
 * @interface ManufacturingRegion
 */
export interface ManufacturingRegion {
    /**
     *
     * @type {string}
     * @memberof ManufacturingRegion
     */
    edge?: string | null;
    /**
     *
     * @type {ManufacturingRegionFaceEnum}
     * @memberof ManufacturingRegion
     */
    face?: ManufacturingRegionFaceEnum | null;
    /**
     *
     * @type {ManufacturingRegionGeometry}
     * @memberof ManufacturingRegion
     */
    geometry?: ManufacturingRegionGeometry | null;
    /**
     *
     * @type {ManufacturingRegionKindEnum}
     * @memberof ManufacturingRegion
     */
    kind: ManufacturingRegionKindEnum;
    /**
     *
     * @type {string}
     * @memberof ManufacturingRegion
     */
    name?: string | null;
    /**
     *
     * @type {string}
     * @memberof ManufacturingRegion
     */
    regionId: string;
}


/**
 * @export
 */
export const ManufacturingRegionFaceEnum = {
    Front: 'front',
    Back: 'back',
    Top: 'top',
    Bottom: 'bottom',
    Left: 'left',
    Right: 'right',
    Inside: 'inside',
    Outside: 'outside'
} as const;
export type ManufacturingRegionFaceEnum = typeof ManufacturingRegionFaceEnum[keyof typeof ManufacturingRegionFaceEnum];

/**
 * @export
 */
export const ManufacturingRegionKindEnum = {
    Face: 'face',
    Edge: 'edge',
    Area: 'area',
    Path: 'path',
    Named: 'named'
} as const;
export type ManufacturingRegionKindEnum = typeof ManufacturingRegionKindEnum[keyof typeof ManufacturingRegionKindEnum];


/**
 * Check if a given object implements the ManufacturingRegion interface.
 */
export function instanceOfManufacturingRegion(value: object): value is ManufacturingRegion {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('regionId' in value) || value['regionId'] === undefined) return false;
    return true;
}

export function ManufacturingRegionFromJSON(json: any): ManufacturingRegion {
    return ManufacturingRegionFromJSONTyped(json, false);
}

export function ManufacturingRegionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingRegion {
    if (json == null) {
        return json;
    }
    return {

        'edge': json['edge'] == null ? undefined : json['edge'],
        'face': json['face'] == null ? undefined : json['face'],
        'geometry': json['geometry'] == null ? undefined : ManufacturingRegionGeometryFromJSON(json['geometry']),
        'kind': json['kind'],
        'name': json['name'] == null ? undefined : json['name'],
        'regionId': json['region_id'],
    };
}

export function ManufacturingRegionToJSON(json: any): ManufacturingRegion {
    return ManufacturingRegionToJSONTyped(json, false);
}

export function ManufacturingRegionToJSONTyped(value?: ManufacturingRegion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'edge': value['edge'],
        'face': value['face'],
        'geometry': ManufacturingRegionGeometryToJSON(value['geometry']),
        'kind': value['kind'],
        'name': value['name'],
        'region_id': value['regionId'],
    };
}
