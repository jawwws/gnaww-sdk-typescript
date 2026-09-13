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

import type { Circle2D } from './Circle2D';
import {
    instanceOfCircle2D,
    Circle2DFromJSON,
    Circle2DFromJSONTyped,
    Circle2DToJSON,
} from './Circle2D';
import type { Line2D } from './Line2D';
import {
    instanceOfLine2D,
    Line2DFromJSON,
    Line2DFromJSONTyped,
    Line2DToJSON,
} from './Line2D';
import type { PathReference } from './PathReference';
import {
    instanceOfPathReference,
    PathReferenceFromJSON,
    PathReferenceFromJSONTyped,
    PathReferenceToJSON,
} from './PathReference';
import type { Point2D } from './Point2D';
import {
    instanceOfPoint2D,
    Point2DFromJSON,
    Point2DFromJSONTyped,
    Point2DToJSON,
} from './Point2D';
import type { Rectangle2D } from './Rectangle2D';
import {
    instanceOfRectangle2D,
    Rectangle2DFromJSON,
    Rectangle2DFromJSONTyped,
    Rectangle2DToJSON,
} from './Rectangle2D';

/**
 * @type ManufacturingRegionGeometry
 *
 * @export
 */
export type ManufacturingRegionGeometry = { kind: 'circle' } & Circle2D | { kind: 'line' } & Line2D | { kind: 'path_reference' } & PathReference | { kind: 'point' } & Point2D | { kind: 'rectangle' } & Rectangle2D;

export function ManufacturingRegionGeometryFromJSON(json: any): ManufacturingRegionGeometry {
    return ManufacturingRegionGeometryFromJSONTyped(json, false);
}

export function ManufacturingRegionGeometryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingRegionGeometry {
    if (json == null) {
        return json;
    }
    switch (json['kind']) {
        case 'circle':
            return Object.assign({}, Circle2DFromJSONTyped(json, true), { kind: 'circle' } as const);
        case 'line':
            return Object.assign({}, Line2DFromJSONTyped(json, true), { kind: 'line' } as const);
        case 'path_reference':
            return Object.assign({}, PathReferenceFromJSONTyped(json, true), { kind: 'path_reference' } as const);
        case 'point':
            return Object.assign({}, Point2DFromJSONTyped(json, true), { kind: 'point' } as const);
        case 'rectangle':
            return Object.assign({}, Rectangle2DFromJSONTyped(json, true), { kind: 'rectangle' } as const);
        default:
            return json;
    }
}

export function ManufacturingRegionGeometryToJSON(json: any): any {
    return ManufacturingRegionGeometryToJSONTyped(json, false);
}

export function ManufacturingRegionGeometryToJSONTyped(value?: ManufacturingRegionGeometry | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['kind']) {
        case 'circle':
            return Object.assign({}, Circle2DToJSON(value), { kind: 'circle' } as const);
        case 'line':
            return Object.assign({}, Line2DToJSON(value), { kind: 'line' } as const);
        case 'path_reference':
            return Object.assign({}, PathReferenceToJSON(value), { kind: 'path_reference' } as const);
        case 'point':
            return Object.assign({}, Point2DToJSON(value), { kind: 'point' } as const);
        case 'rectangle':
            return Object.assign({}, Rectangle2DToJSON(value), { kind: 'rectangle' } as const);
        default:
            return value;
    }
}
