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
import type { Point2D } from './Point2D';
import {
    Point2DFromJSON,
    Point2DFromJSONTyped,
    Point2DToJSON,
    Point2DToJSONTyped,
} from './Point2D';

/**
 * Rectangular repeated drill pattern with one controlled hole geometry.
 * @export
 * @interface RepeatedDrillPattern
 */
export interface RepeatedDrillPattern {
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    columnSpacingMm?: number;
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    columns?: number;
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    depthMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    diameterMm?: number | null;
    /**
     *
     * @type {string}
     * @memberof RepeatedDrillPattern
     */
    geometryAssetRef?: string | null;
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    heightMm?: number | null;
    /**
     *
     * @type {Point2D}
     * @memberof RepeatedDrillPattern
     */
    origin: Point2D;
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    rowSpacingMm?: number;
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    rows?: number;
    /**
     *
     * @type {RepeatedDrillPatternShapeEnum}
     * @memberof RepeatedDrillPattern
     */
    shape?: RepeatedDrillPatternShapeEnum;
    /**
     *
     * @type {RepeatedDrillPatternStyleEnum}
     * @memberof RepeatedDrillPattern
     */
    style?: RepeatedDrillPatternStyleEnum;
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    widthMm?: number | null;
}


/**
 * @export
 */
export const RepeatedDrillPatternShapeEnum = {
    Circle: 'circle',
    Slot: 'slot',
    Custom: 'custom'
} as const;
export type RepeatedDrillPatternShapeEnum = typeof RepeatedDrillPatternShapeEnum[keyof typeof RepeatedDrillPatternShapeEnum];

/**
 * @export
 */
export const RepeatedDrillPatternStyleEnum = {
    Through: 'through',
    Blind: 'blind',
    Countersunk: 'countersunk',
    Unknown: 'unknown'
} as const;
export type RepeatedDrillPatternStyleEnum = typeof RepeatedDrillPatternStyleEnum[keyof typeof RepeatedDrillPatternStyleEnum];


/**
 * Check if a given object implements the RepeatedDrillPattern interface.
 */
export function instanceOfRepeatedDrillPattern(value: object): value is RepeatedDrillPattern {
    if (!('origin' in value) || value['origin'] === undefined) return false;
    return true;
}

export function RepeatedDrillPatternFromJSON(json: any): RepeatedDrillPattern {
    return RepeatedDrillPatternFromJSONTyped(json, false);
}

export function RepeatedDrillPatternFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepeatedDrillPattern {
    if (json == null) {
        return json;
    }
    return {

        'columnSpacingMm': json['column_spacing_mm'] == null ? undefined : json['column_spacing_mm'],
        'columns': json['columns'] == null ? undefined : json['columns'],
        'depthMm': json['depth_mm'] == null ? undefined : json['depth_mm'],
        'diameterMm': json['diameter_mm'] == null ? undefined : json['diameter_mm'],
        'geometryAssetRef': json['geometry_asset_ref'] == null ? undefined : json['geometry_asset_ref'],
        'heightMm': json['height_mm'] == null ? undefined : json['height_mm'],
        'origin': Point2DFromJSON(json['origin']),
        'rowSpacingMm': json['row_spacing_mm'] == null ? undefined : json['row_spacing_mm'],
        'rows': json['rows'] == null ? undefined : json['rows'],
        'shape': json['shape'] == null ? undefined : json['shape'],
        'style': json['style'] == null ? undefined : json['style'],
        'widthMm': json['width_mm'] == null ? undefined : json['width_mm'],
    };
}

export function RepeatedDrillPatternToJSON(json: any): RepeatedDrillPattern {
    return RepeatedDrillPatternToJSONTyped(json, false);
}

export function RepeatedDrillPatternToJSONTyped(value?: RepeatedDrillPattern | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'column_spacing_mm': value['columnSpacingMm'],
        'columns': value['columns'],
        'depth_mm': value['depthMm'],
        'diameter_mm': value['diameterMm'],
        'geometry_asset_ref': value['geometryAssetRef'],
        'height_mm': value['heightMm'],
        'origin': Point2DToJSON(value['origin']),
        'row_spacing_mm': value['rowSpacingMm'],
        'rows': value['rows'],
        'shape': value['shape'],
        'style': value['style'],
        'width_mm': value['widthMm'],
    };
}
