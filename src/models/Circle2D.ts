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
 * Circular region or feature.
 * @export
 * @interface Circle2D
 */
export interface Circle2D {
    /**
     *
     * @type {Point2D}
     * @memberof Circle2D
     */
    centre: Point2D;
    /**
     *
     * @type {number}
     * @memberof Circle2D
     */
    diameterMm: number;
    /**
     *
     * @type {Circle2DKindEnum}
     * @memberof Circle2D
     */
    kind?: Circle2DKindEnum;
}


/**
 * @export
 */
export const Circle2DKindEnum = {
    Circle: 'circle'
} as const;
export type Circle2DKindEnum = typeof Circle2DKindEnum[keyof typeof Circle2DKindEnum];


/**
 * Check if a given object implements the Circle2D interface.
 */
export function instanceOfCircle2D(value: object): value is Circle2D {
    if (!('centre' in value) || value['centre'] === undefined) return false;
    if (!('diameterMm' in value) || value['diameterMm'] === undefined) return false;
    return true;
}

export function Circle2DFromJSON(json: any): Circle2D {
    return Circle2DFromJSONTyped(json, false);
}

export function Circle2DFromJSONTyped(json: any, ignoreDiscriminator: boolean): Circle2D {
    if (json == null) {
        return json;
    }
    return {

        'centre': Point2DFromJSON(json['centre']),
        'diameterMm': json['diameter_mm'],
        'kind': json['kind'] == null ? undefined : json['kind'],
    };
}

export function Circle2DToJSON(json: any): Circle2D {
    return Circle2DToJSONTyped(json, false);
}

export function Circle2DToJSONTyped(value?: Circle2D | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'centre': Point2DToJSON(value['centre']),
        'diameter_mm': value['diameterMm'],
        'kind': value['kind'],
    };
}
