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
/**
 * Deterministic component geometry without embedding full CAD/design content.
 * @export
 * @interface ManufacturingGeometry
 */
export interface ManufacturingGeometry {
    /**
     *
     * @type {ManufacturingGeometryCoordinateOriginEnum}
     * @memberof ManufacturingGeometry
     */
    coordinateOrigin?: ManufacturingGeometryCoordinateOriginEnum;
    /**
     *
     * @type {number}
     * @memberof ManufacturingGeometry
     */
    depthMm?: number | null;
    /**
     *
     * @type {string}
     * @memberof ManufacturingGeometry
     */
    geometryAssetRef?: string | null;
    /**
     *
     * @type {number}
     * @memberof ManufacturingGeometry
     */
    heightMm?: number | null;
    /**
     *
     * @type {ManufacturingGeometryOrientationEnum}
     * @memberof ManufacturingGeometry
     */
    orientation?: ManufacturingGeometryOrientationEnum;
    /**
     *
     * @type {ManufacturingGeometryShapeEnum}
     * @memberof ManufacturingGeometry
     */
    shape?: ManufacturingGeometryShapeEnum;
    /**
     *
     * @type {string}
     * @memberof ManufacturingGeometry
     */
    standardName?: string | null;
    /**
     *
     * @type {number}
     * @memberof ManufacturingGeometry
     */
    thicknessMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof ManufacturingGeometry
     */
    widthMm?: number | null;
}


/**
 * @export
 */
export const ManufacturingGeometryCoordinateOriginEnum = {
    TopLeft: 'top_left',
    BottomLeft: 'bottom_left',
    Centre: 'centre'
} as const;
export type ManufacturingGeometryCoordinateOriginEnum = typeof ManufacturingGeometryCoordinateOriginEnum[keyof typeof ManufacturingGeometryCoordinateOriginEnum];

/**
 * @export
 */
export const ManufacturingGeometryOrientationEnum = {
    Portrait: 'portrait',
    Landscape: 'landscape',
    Square: 'square',
    Unknown: 'unknown'
} as const;
export type ManufacturingGeometryOrientationEnum = typeof ManufacturingGeometryOrientationEnum[keyof typeof ManufacturingGeometryOrientationEnum];

/**
 * @export
 */
export const ManufacturingGeometryShapeEnum = {
    Rectangle: 'rectangle',
    Circle: 'circle',
    Polygon: 'polygon',
    Path: 'path',
    Solid: 'solid',
    Custom: 'custom',
    Unknown: 'unknown'
} as const;
export type ManufacturingGeometryShapeEnum = typeof ManufacturingGeometryShapeEnum[keyof typeof ManufacturingGeometryShapeEnum];


/**
 * Check if a given object implements the ManufacturingGeometry interface.
 */
export function instanceOfManufacturingGeometry(value: object): value is ManufacturingGeometry {
    return true;
}

export function ManufacturingGeometryFromJSON(json: any): ManufacturingGeometry {
    return ManufacturingGeometryFromJSONTyped(json, false);
}

export function ManufacturingGeometryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingGeometry {
    if (json == null) {
        return json;
    }
    return {

        'coordinateOrigin': json['coordinate_origin'] == null ? undefined : json['coordinate_origin'],
        'depthMm': json['depth_mm'] == null ? undefined : json['depth_mm'],
        'geometryAssetRef': json['geometry_asset_ref'] == null ? undefined : json['geometry_asset_ref'],
        'heightMm': json['height_mm'] == null ? undefined : json['height_mm'],
        'orientation': json['orientation'] == null ? undefined : json['orientation'],
        'shape': json['shape'] == null ? undefined : json['shape'],
        'standardName': json['standard_name'] == null ? undefined : json['standard_name'],
        'thicknessMm': json['thickness_mm'] == null ? undefined : json['thickness_mm'],
        'widthMm': json['width_mm'] == null ? undefined : json['width_mm'],
    };
}

export function ManufacturingGeometryToJSON(json: any): ManufacturingGeometry {
    return ManufacturingGeometryToJSONTyped(json, false);
}

export function ManufacturingGeometryToJSONTyped(value?: ManufacturingGeometry | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'coordinate_origin': value['coordinateOrigin'],
        'depth_mm': value['depthMm'],
        'geometry_asset_ref': value['geometryAssetRef'],
        'height_mm': value['heightMm'],
        'orientation': value['orientation'],
        'shape': value['shape'],
        'standard_name': value['standardName'],
        'thickness_mm': value['thicknessMm'],
        'width_mm': value['widthMm'],
    };
}
