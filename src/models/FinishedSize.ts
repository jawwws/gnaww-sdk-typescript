/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Finished product size after trimming.
 * @export
 * @interface FinishedSize
 */
export interface FinishedSize {
    /**
     *
     * @type {number}
     * @memberof FinishedSize
     */
    heightMm?: number | null;
    /**
     *
     * @type {FinishedSizeOrientationEnum}
     * @memberof FinishedSize
     */
    orientation?: FinishedSizeOrientationEnum;
    /**
     *
     * @type {string}
     * @memberof FinishedSize
     */
    standardName?: string | null;
    /**
     *
     * @type {number}
     * @memberof FinishedSize
     */
    widthMm?: number | null;
}


/**
 * @export
 */
export const FinishedSizeOrientationEnum = {
    Portrait: 'portrait',
    Landscape: 'landscape',
    Square: 'square',
    Unknown: 'unknown'
} as const;
export type FinishedSizeOrientationEnum = typeof FinishedSizeOrientationEnum[keyof typeof FinishedSizeOrientationEnum];


/**
 * Check if a given object implements the FinishedSize interface.
 */
export function instanceOfFinishedSize(value: object): value is FinishedSize {
    return true;
}

export function FinishedSizeFromJSON(json: any): FinishedSize {
    return FinishedSizeFromJSONTyped(json, false);
}

export function FinishedSizeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinishedSize {
    if (json == null) {
        return json;
    }
    return {

        'heightMm': json['height_mm'] == null ? undefined : json['height_mm'],
        'orientation': json['orientation'] == null ? undefined : json['orientation'],
        'standardName': json['standard_name'] == null ? undefined : json['standard_name'],
        'widthMm': json['width_mm'] == null ? undefined : json['width_mm'],
    };
}

export function FinishedSizeToJSON(json: any): FinishedSize {
    return FinishedSizeToJSONTyped(json, false);
}

export function FinishedSizeToJSONTyped(value?: FinishedSize | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'height_mm': value['heightMm'],
        'orientation': value['orientation'],
        'standard_name': value['standardName'],
        'width_mm': value['widthMm'],
    };
}
