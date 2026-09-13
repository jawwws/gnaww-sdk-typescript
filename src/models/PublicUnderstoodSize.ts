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
 * Deterministically understood size evidence that is not yet canonical GJS.
 * @export
 * @interface PublicUnderstoodSize
 */
export interface PublicUnderstoodSize {
    /**
     *
     * @type {number}
     * @memberof PublicUnderstoodSize
     */
    heightMm?: number | null;
    /**
     *
     * @type {PublicUnderstoodSizeOrientationEnum}
     * @memberof PublicUnderstoodSize
     */
    orientation?: PublicUnderstoodSizeOrientationEnum | null;
    /**
     *
     * @type {string}
     * @memberof PublicUnderstoodSize
     */
    standardName?: string | null;
    /**
     *
     * @type {number}
     * @memberof PublicUnderstoodSize
     */
    widthMm?: number | null;
}


/**
 * @export
 */
export const PublicUnderstoodSizeOrientationEnum = {
    Portrait: 'portrait',
    Landscape: 'landscape',
    Square: 'square'
} as const;
export type PublicUnderstoodSizeOrientationEnum = typeof PublicUnderstoodSizeOrientationEnum[keyof typeof PublicUnderstoodSizeOrientationEnum];


/**
 * Check if a given object implements the PublicUnderstoodSize interface.
 */
export function instanceOfPublicUnderstoodSize(value: object): value is PublicUnderstoodSize {
    return true;
}

export function PublicUnderstoodSizeFromJSON(json: any): PublicUnderstoodSize {
    return PublicUnderstoodSizeFromJSONTyped(json, false);
}

export function PublicUnderstoodSizeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicUnderstoodSize {
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

export function PublicUnderstoodSizeToJSON(json: any): PublicUnderstoodSize {
    return PublicUnderstoodSizeToJSONTyped(json, false);
}

export function PublicUnderstoodSizeToJSONTyped(value?: PublicUnderstoodSize | null, ignoreDiscriminator: boolean = false): any {
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
