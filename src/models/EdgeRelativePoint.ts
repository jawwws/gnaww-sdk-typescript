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
 * Point positioned from one horizontal and one vertical component edge.
 * @export
 * @interface EdgeRelativePoint
 */
export interface EdgeRelativePoint {
    /**
     *
     * @type {EdgeRelativePointHorizontalEdgeEnum}
     * @memberof EdgeRelativePoint
     */
    horizontalEdge: EdgeRelativePointHorizontalEdgeEnum;
    /**
     *
     * @type {number}
     * @memberof EdgeRelativePoint
     */
    horizontalOffsetMm: number;
    /**
     *
     * @type {EdgeRelativePointVerticalEdgeEnum}
     * @memberof EdgeRelativePoint
     */
    verticalEdge: EdgeRelativePointVerticalEdgeEnum;
    /**
     *
     * @type {number}
     * @memberof EdgeRelativePoint
     */
    verticalOffsetMm: number;
}


/**
 * @export
 */
export const EdgeRelativePointHorizontalEdgeEnum = {
    Left: 'left',
    Right: 'right'
} as const;
export type EdgeRelativePointHorizontalEdgeEnum = typeof EdgeRelativePointHorizontalEdgeEnum[keyof typeof EdgeRelativePointHorizontalEdgeEnum];

/**
 * @export
 */
export const EdgeRelativePointVerticalEdgeEnum = {
    Top: 'top',
    Bottom: 'bottom'
} as const;
export type EdgeRelativePointVerticalEdgeEnum = typeof EdgeRelativePointVerticalEdgeEnum[keyof typeof EdgeRelativePointVerticalEdgeEnum];


/**
 * Check if a given object implements the EdgeRelativePoint interface.
 */
export function instanceOfEdgeRelativePoint(value: object): value is EdgeRelativePoint {
    if (!('horizontalEdge' in value) || value['horizontalEdge'] === undefined) return false;
    if (!('horizontalOffsetMm' in value) || value['horizontalOffsetMm'] === undefined) return false;
    if (!('verticalEdge' in value) || value['verticalEdge'] === undefined) return false;
    if (!('verticalOffsetMm' in value) || value['verticalOffsetMm'] === undefined) return false;
    return true;
}

export function EdgeRelativePointFromJSON(json: any): EdgeRelativePoint {
    return EdgeRelativePointFromJSONTyped(json, false);
}

export function EdgeRelativePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): EdgeRelativePoint {
    if (json == null) {
        return json;
    }
    return {

        'horizontalEdge': json['horizontal_edge'],
        'horizontalOffsetMm': json['horizontal_offset_mm'],
        'verticalEdge': json['vertical_edge'],
        'verticalOffsetMm': json['vertical_offset_mm'],
    };
}

export function EdgeRelativePointToJSON(json: any): EdgeRelativePoint {
    return EdgeRelativePointToJSONTyped(json, false);
}

export function EdgeRelativePointToJSONTyped(value?: EdgeRelativePoint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'horizontal_edge': value['horizontalEdge'],
        'horizontal_offset_mm': value['horizontalOffsetMm'],
        'vertical_edge': value['verticalEdge'],
        'vertical_offset_mm': value['verticalOffsetMm'],
    };
}
