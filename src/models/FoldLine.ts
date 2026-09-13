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
import type { Line2D } from './Line2D';
import {
    Line2DFromJSON,
    Line2DFromJSONTyped,
    Line2DToJSON,
    Line2DToJSONTyped,
} from './Line2D';

/**
 * One fold line in the input component coordinate system.
 * @export
 * @interface FoldLine
 */
export interface FoldLine {
    /**
     *
     * @type {FoldLineAxisEnum}
     * @memberof FoldLine
     */
    axis?: FoldLineAxisEnum | null;
    /**
     *
     * @type {FoldLineDirectionEnum}
     * @memberof FoldLine
     */
    direction?: FoldLineDirectionEnum;
    /**
     *
     * @type {Line2D}
     * @memberof FoldLine
     */
    line: Line2D;
    /**
     *
     * @type {number}
     * @memberof FoldLine
     */
    sequence: number;
}


/**
 * @export
 */
export const FoldLineAxisEnum = {
    Vertical: 'vertical',
    Horizontal: 'horizontal',
    Custom: 'custom'
} as const;
export type FoldLineAxisEnum = typeof FoldLineAxisEnum[keyof typeof FoldLineAxisEnum];

/**
 * @export
 */
export const FoldLineDirectionEnum = {
    Valley: 'valley',
    Mountain: 'mountain',
    Unknown: 'unknown'
} as const;
export type FoldLineDirectionEnum = typeof FoldLineDirectionEnum[keyof typeof FoldLineDirectionEnum];


/**
 * Check if a given object implements the FoldLine interface.
 */
export function instanceOfFoldLine(value: object): value is FoldLine {
    if (!('line' in value) || value['line'] === undefined) return false;
    if (!('sequence' in value) || value['sequence'] === undefined) return false;
    return true;
}

export function FoldLineFromJSON(json: any): FoldLine {
    return FoldLineFromJSONTyped(json, false);
}

export function FoldLineFromJSONTyped(json: any, ignoreDiscriminator: boolean): FoldLine {
    if (json == null) {
        return json;
    }
    return {

        'axis': json['axis'] == null ? undefined : json['axis'],
        'direction': json['direction'] == null ? undefined : json['direction'],
        'line': Line2DFromJSON(json['line']),
        'sequence': json['sequence'],
    };
}

export function FoldLineToJSON(json: any): FoldLine {
    return FoldLineToJSONTyped(json, false);
}

export function FoldLineToJSONTyped(value?: FoldLine | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'axis': value['axis'],
        'direction': value['direction'],
        'line': Line2DToJSON(value['line']),
        'sequence': value['sequence'],
    };
}
