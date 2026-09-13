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
import type { EdgeRelativePoint } from './EdgeRelativePoint';
import {
    EdgeRelativePointFromJSON,
    EdgeRelativePointFromJSONTyped,
    EdgeRelativePointToJSON,
    EdgeRelativePointToJSONTyped,
} from './EdgeRelativePoint';

/**
 *
 * @export
 * @interface DrillHole
 */
export interface DrillHole {
    /**
     *
     * @type {Point2D}
     * @memberof DrillHole
     */
    centre?: Point2D | null;
    /**
     *
     * @type {number}
     * @memberof DrillHole
     */
    depthMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof DrillHole
     */
    diameterMm?: number | null;
    /**
     *
     * @type {EdgeRelativePoint}
     * @memberof DrillHole
     */
    edgePosition?: EdgeRelativePoint | null;
    /**
     *
     * @type {string}
     * @memberof DrillHole
     */
    geometryAssetRef?: string | null;
    /**
     *
     * @type {number}
     * @memberof DrillHole
     */
    heightMm?: number | null;
    /**
     *
     * @type {DrillHoleShapeEnum}
     * @memberof DrillHole
     */
    shape?: DrillHoleShapeEnum;
    /**
     *
     * @type {DrillHoleStyleEnum}
     * @memberof DrillHole
     */
    style?: DrillHoleStyleEnum;
    /**
     *
     * @type {number}
     * @memberof DrillHole
     */
    widthMm?: number | null;
}


/**
 * @export
 */
export const DrillHoleShapeEnum = {
    Circle: 'circle',
    Slot: 'slot',
    Custom: 'custom'
} as const;
export type DrillHoleShapeEnum = typeof DrillHoleShapeEnum[keyof typeof DrillHoleShapeEnum];

/**
 * @export
 */
export const DrillHoleStyleEnum = {
    Through: 'through',
    Blind: 'blind',
    Countersunk: 'countersunk',
    Unknown: 'unknown'
} as const;
export type DrillHoleStyleEnum = typeof DrillHoleStyleEnum[keyof typeof DrillHoleStyleEnum];


/**
 * Check if a given object implements the DrillHole interface.
 */
export function instanceOfDrillHole(value: object): value is DrillHole {
    return true;
}

export function DrillHoleFromJSON(json: any): DrillHole {
    return DrillHoleFromJSONTyped(json, false);
}

export function DrillHoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): DrillHole {
    if (json == null) {
        return json;
    }
    return {

        'centre': json['centre'] == null ? undefined : Point2DFromJSON(json['centre']),
        'depthMm': json['depth_mm'] == null ? undefined : json['depth_mm'],
        'diameterMm': json['diameter_mm'] == null ? undefined : json['diameter_mm'],
        'edgePosition': json['edge_position'] == null ? undefined : EdgeRelativePointFromJSON(json['edge_position']),
        'geometryAssetRef': json['geometry_asset_ref'] == null ? undefined : json['geometry_asset_ref'],
        'heightMm': json['height_mm'] == null ? undefined : json['height_mm'],
        'shape': json['shape'] == null ? undefined : json['shape'],
        'style': json['style'] == null ? undefined : json['style'],
        'widthMm': json['width_mm'] == null ? undefined : json['width_mm'],
    };
}

export function DrillHoleToJSON(json: any): DrillHole {
    return DrillHoleToJSONTyped(json, false);
}

export function DrillHoleToJSONTyped(value?: DrillHole | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'centre': Point2DToJSON(value['centre']),
        'depth_mm': value['depthMm'],
        'diameter_mm': value['diameterMm'],
        'edge_position': EdgeRelativePointToJSON(value['edgePosition']),
        'geometry_asset_ref': value['geometryAssetRef'],
        'height_mm': value['heightMm'],
        'shape': value['shape'],
        'style': value['style'],
        'width_mm': value['widthMm'],
    };
}
