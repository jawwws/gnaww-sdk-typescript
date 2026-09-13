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
import type { PathReference } from './PathReference';
import {
    PathReferenceFromJSON,
    PathReferenceFromJSONTyped,
    PathReferenceToJSON,
    PathReferenceToJSONTyped,
} from './PathReference';
import type { Point2D } from './Point2D';
import {
    Point2DFromJSON,
    Point2DFromJSONTyped,
    Point2DToJSON,
    Point2DToJSONTyped,
} from './Point2D';
import type { Rectangle2D } from './Rectangle2D';
import {
    Rectangle2DFromJSON,
    Rectangle2DFromJSONTyped,
    Rectangle2DToJSON,
    Rectangle2DToJSONTyped,
} from './Rectangle2D';
import type { Circle2D } from './Circle2D';
import {
    Circle2DFromJSON,
    Circle2DFromJSONTyped,
    Circle2DToJSON,
    Circle2DToJSONTyped,
} from './Circle2D';
import type { Line2D } from './Line2D';
import {
    Line2DFromJSON,
    Line2DFromJSONTyped,
    Line2DToJSON,
    Line2DToJSONTyped,
} from './Line2D';

/**
 *
 * @export
 * @interface Contour
 */
export interface Contour {
    /**
     *
     * @type {Point2D}
     * @memberof Contour
     */
    end: Point2D;
    /**
     *
     * @type {ContourKindEnum}
     * @memberof Contour
     */
    kind?: ContourKindEnum;
    /**
     *
     * @type {Point2D}
     * @memberof Contour
     */
    start: Point2D;
    /**
     *
     * @type {number}
     * @memberof Contour
     */
    heightMm: number;
    /**
     *
     * @type {number}
     * @memberof Contour
     */
    widthMm: number;
    /**
     *
     * @type {number}
     * @memberof Contour
     */
    xMm: number;
    /**
     *
     * @type {number}
     * @memberof Contour
     */
    yMm: number;
    /**
     *
     * @type {Point2D}
     * @memberof Contour
     */
    centre: Point2D;
    /**
     *
     * @type {number}
     * @memberof Contour
     */
    diameterMm: number;
    /**
     *
     * @type {string}
     * @memberof Contour
     */
    assetRef: string;
    /**
     *
     * @type {string}
     * @memberof Contour
     */
    pathId?: string;
}


/**
 * @export
 */
export const ContourKindEnum = {
    PathReference: 'path_reference'
} as const;
export type ContourKindEnum = typeof ContourKindEnum[keyof typeof ContourKindEnum];


/**
 * Check if a given object implements the Contour interface.
 */
export function instanceOfContour(value: object): value is Contour {
    if (!('end' in value) || value['end'] === undefined) return false;
    if (!('start' in value) || value['start'] === undefined) return false;
    if (!('heightMm' in value) || value['heightMm'] === undefined) return false;
    if (!('widthMm' in value) || value['widthMm'] === undefined) return false;
    if (!('xMm' in value) || value['xMm'] === undefined) return false;
    if (!('yMm' in value) || value['yMm'] === undefined) return false;
    if (!('centre' in value) || value['centre'] === undefined) return false;
    if (!('diameterMm' in value) || value['diameterMm'] === undefined) return false;
    if (!('assetRef' in value) || value['assetRef'] === undefined) return false;
    return true;
}

export function ContourFromJSON(json: any): Contour {
    return ContourFromJSONTyped(json, false);
}

export function ContourFromJSONTyped(json: any, ignoreDiscriminator: boolean): Contour {
    if (json == null) {
        return json;
    }
    return {

        'end': Point2DFromJSON(json['end']),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'start': Point2DFromJSON(json['start']),
        'heightMm': json['height_mm'],
        'widthMm': json['width_mm'],
        'xMm': json['x_mm'],
        'yMm': json['y_mm'],
        'centre': Point2DFromJSON(json['centre']),
        'diameterMm': json['diameter_mm'],
        'assetRef': json['asset_ref'],
        'pathId': json['path_id'] == null ? undefined : json['path_id'],
    };
}

export function ContourToJSON(json: any): Contour {
    return ContourToJSONTyped(json, false);
}

export function ContourToJSONTyped(value?: Contour | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'end': Point2DToJSON(value['end']),
        'kind': value['kind'],
        'start': Point2DToJSON(value['start']),
        'height_mm': value['heightMm'],
        'width_mm': value['widthMm'],
        'x_mm': value['xMm'],
        'y_mm': value['yMm'],
        'centre': Point2DToJSON(value['centre']),
        'diameter_mm': value['diameterMm'],
        'asset_ref': value['assetRef'],
        'path_id': value['pathId'],
    };
}
