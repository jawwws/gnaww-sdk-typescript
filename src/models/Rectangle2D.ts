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
 * Axis-aligned rectangular region.
 * @export
 * @interface Rectangle2D
 */
export interface Rectangle2D {
    /**
     *
     * @type {number}
     * @memberof Rectangle2D
     */
    heightMm: number;
    /**
     *
     * @type {Rectangle2DKindEnum}
     * @memberof Rectangle2D
     */
    kind?: Rectangle2DKindEnum;
    /**
     *
     * @type {number}
     * @memberof Rectangle2D
     */
    widthMm: number;
    /**
     *
     * @type {number}
     * @memberof Rectangle2D
     */
    xMm: number;
    /**
     *
     * @type {number}
     * @memberof Rectangle2D
     */
    yMm: number;
}


/**
 * @export
 */
export const Rectangle2DKindEnum = {
    Rectangle: 'rectangle'
} as const;
export type Rectangle2DKindEnum = typeof Rectangle2DKindEnum[keyof typeof Rectangle2DKindEnum];


/**
 * Check if a given object implements the Rectangle2D interface.
 */
export function instanceOfRectangle2D(value: object): value is Rectangle2D {
    if (!('heightMm' in value) || value['heightMm'] === undefined) return false;
    if (!('widthMm' in value) || value['widthMm'] === undefined) return false;
    if (!('xMm' in value) || value['xMm'] === undefined) return false;
    if (!('yMm' in value) || value['yMm'] === undefined) return false;
    return true;
}

export function Rectangle2DFromJSON(json: any): Rectangle2D {
    return Rectangle2DFromJSONTyped(json, false);
}

export function Rectangle2DFromJSONTyped(json: any, ignoreDiscriminator: boolean): Rectangle2D {
    if (json == null) {
        return json;
    }
    return {

        'heightMm': json['height_mm'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'widthMm': json['width_mm'],
        'xMm': json['x_mm'],
        'yMm': json['y_mm'],
    };
}

export function Rectangle2DToJSON(json: any): Rectangle2D {
    return Rectangle2DToJSONTyped(json, false);
}

export function Rectangle2DToJSONTyped(value?: Rectangle2D | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'height_mm': value['heightMm'],
        'kind': value['kind'],
        'width_mm': value['widthMm'],
        'x_mm': value['xMm'],
        'y_mm': value['yMm'],
    };
}
