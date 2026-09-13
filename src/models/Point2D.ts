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
 * Point in a component-local millimetre coordinate system.
 * @export
 * @interface Point2D
 */
export interface Point2D {
    /**
     *
     * @type {Point2DKindEnum}
     * @memberof Point2D
     */
    kind?: Point2DKindEnum;
    /**
     *
     * @type {number}
     * @memberof Point2D
     */
    xMm: number;
    /**
     *
     * @type {number}
     * @memberof Point2D
     */
    yMm: number;
}


/**
 * @export
 */
export const Point2DKindEnum = {
    Point: 'point'
} as const;
export type Point2DKindEnum = typeof Point2DKindEnum[keyof typeof Point2DKindEnum];


/**
 * Check if a given object implements the Point2D interface.
 */
export function instanceOfPoint2D(value: object): value is Point2D {
    if (!('xMm' in value) || value['xMm'] === undefined) return false;
    if (!('yMm' in value) || value['yMm'] === undefined) return false;
    return true;
}

export function Point2DFromJSON(json: any): Point2D {
    return Point2DFromJSONTyped(json, false);
}

export function Point2DFromJSONTyped(json: any, ignoreDiscriminator: boolean): Point2D {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'] == null ? undefined : json['kind'],
        'xMm': json['x_mm'],
        'yMm': json['y_mm'],
    };
}

export function Point2DToJSON(json: any): Point2D {
    return Point2DToJSONTyped(json, false);
}

export function Point2DToJSONTyped(value?: Point2D | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'x_mm': value['xMm'],
        'y_mm': value['yMm'],
    };
}
