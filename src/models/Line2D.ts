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
 * Line segment in a component-local millimetre coordinate system.
 * @export
 * @interface Line2D
 */
export interface Line2D {
    /**
     *
     * @type {Point2D}
     * @memberof Line2D
     */
    end: Point2D;
    /**
     *
     * @type {Line2DKindEnum}
     * @memberof Line2D
     */
    kind?: Line2DKindEnum;
    /**
     *
     * @type {Point2D}
     * @memberof Line2D
     */
    start: Point2D;
}


/**
 * @export
 */
export const Line2DKindEnum = {
    Line: 'line'
} as const;
export type Line2DKindEnum = typeof Line2DKindEnum[keyof typeof Line2DKindEnum];


/**
 * Check if a given object implements the Line2D interface.
 */
export function instanceOfLine2D(value: object): value is Line2D {
    if (!('end' in value) || value['end'] === undefined) return false;
    if (!('start' in value) || value['start'] === undefined) return false;
    return true;
}

export function Line2DFromJSON(json: any): Line2D {
    return Line2DFromJSONTyped(json, false);
}

export function Line2DFromJSONTyped(json: any, ignoreDiscriminator: boolean): Line2D {
    if (json == null) {
        return json;
    }
    return {

        'end': Point2DFromJSON(json['end']),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'start': Point2DFromJSON(json['start']),
    };
}

export function Line2DToJSON(json: any): Line2D {
    return Line2DToJSONTyped(json, false);
}

export function Line2DToJSONTyped(value?: Line2D | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'end': Point2DToJSON(value['end']),
        'kind': value['kind'],
        'start': Point2DToJSON(value['start']),
    };
}
