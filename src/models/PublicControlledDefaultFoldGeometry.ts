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
 * Customer-safe geometry for one controlled folding assumption.
 * @export
 * @interface PublicControlledDefaultFoldGeometry
 */
export interface PublicControlledDefaultFoldGeometry {
    /**
     *
     * @type {PublicControlledDefaultFoldGeometryFoldAxisEnum}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    foldAxis: PublicControlledDefaultFoldGeometryFoldAxisEnum;
    /**
     *
     * @type {number}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    foldPositionMm: number;
    /**
     *
     * @type {number}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    inputHeightMm: number;
    /**
     *
     * @type {PublicControlledDefaultFoldGeometryInputOrientationEnum}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    inputOrientation: PublicControlledDefaultFoldGeometryInputOrientationEnum;
    /**
     *
     * @type {string}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    inputStandardName: string;
    /**
     *
     * @type {number}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    inputWidthMm: number;
    /**
     *
     * @type {number}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    resultingHeightMm: number;
    /**
     *
     * @type {PublicControlledDefaultFoldGeometryResultingOrientationEnum}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    resultingOrientation: PublicControlledDefaultFoldGeometryResultingOrientationEnum;
    /**
     *
     * @type {string}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    resultingStandardName: string;
    /**
     *
     * @type {number}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    resultingWidthMm: number;
}


/**
 * @export
 */
export const PublicControlledDefaultFoldGeometryFoldAxisEnum = {
    Vertical: 'vertical',
    Horizontal: 'horizontal',
    Custom: 'custom'
} as const;
export type PublicControlledDefaultFoldGeometryFoldAxisEnum = typeof PublicControlledDefaultFoldGeometryFoldAxisEnum[keyof typeof PublicControlledDefaultFoldGeometryFoldAxisEnum];

/**
 * @export
 */
export const PublicControlledDefaultFoldGeometryInputOrientationEnum = {
    Portrait: 'portrait',
    Landscape: 'landscape'
} as const;
export type PublicControlledDefaultFoldGeometryInputOrientationEnum = typeof PublicControlledDefaultFoldGeometryInputOrientationEnum[keyof typeof PublicControlledDefaultFoldGeometryInputOrientationEnum];

/**
 * @export
 */
export const PublicControlledDefaultFoldGeometryResultingOrientationEnum = {
    Portrait: 'portrait',
    Landscape: 'landscape'
} as const;
export type PublicControlledDefaultFoldGeometryResultingOrientationEnum = typeof PublicControlledDefaultFoldGeometryResultingOrientationEnum[keyof typeof PublicControlledDefaultFoldGeometryResultingOrientationEnum];


/**
 * Check if a given object implements the PublicControlledDefaultFoldGeometry interface.
 */
export function instanceOfPublicControlledDefaultFoldGeometry(value: object): value is PublicControlledDefaultFoldGeometry {
    if (!('foldAxis' in value) || value['foldAxis'] === undefined) return false;
    if (!('foldPositionMm' in value) || value['foldPositionMm'] === undefined) return false;
    if (!('inputHeightMm' in value) || value['inputHeightMm'] === undefined) return false;
    if (!('inputOrientation' in value) || value['inputOrientation'] === undefined) return false;
    if (!('inputStandardName' in value) || value['inputStandardName'] === undefined) return false;
    if (!('inputWidthMm' in value) || value['inputWidthMm'] === undefined) return false;
    if (!('resultingHeightMm' in value) || value['resultingHeightMm'] === undefined) return false;
    if (!('resultingOrientation' in value) || value['resultingOrientation'] === undefined) return false;
    if (!('resultingStandardName' in value) || value['resultingStandardName'] === undefined) return false;
    if (!('resultingWidthMm' in value) || value['resultingWidthMm'] === undefined) return false;
    return true;
}

export function PublicControlledDefaultFoldGeometryFromJSON(json: any): PublicControlledDefaultFoldGeometry {
    return PublicControlledDefaultFoldGeometryFromJSONTyped(json, false);
}

export function PublicControlledDefaultFoldGeometryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicControlledDefaultFoldGeometry {
    if (json == null) {
        return json;
    }
    return {

        'foldAxis': json['fold_axis'],
        'foldPositionMm': json['fold_position_mm'],
        'inputHeightMm': json['input_height_mm'],
        'inputOrientation': json['input_orientation'],
        'inputStandardName': json['input_standard_name'],
        'inputWidthMm': json['input_width_mm'],
        'resultingHeightMm': json['resulting_height_mm'],
        'resultingOrientation': json['resulting_orientation'],
        'resultingStandardName': json['resulting_standard_name'],
        'resultingWidthMm': json['resulting_width_mm'],
    };
}

export function PublicControlledDefaultFoldGeometryToJSON(json: any): PublicControlledDefaultFoldGeometry {
    return PublicControlledDefaultFoldGeometryToJSONTyped(json, false);
}

export function PublicControlledDefaultFoldGeometryToJSONTyped(value?: PublicControlledDefaultFoldGeometry | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'fold_axis': value['foldAxis'],
        'fold_position_mm': value['foldPositionMm'],
        'input_height_mm': value['inputHeightMm'],
        'input_orientation': value['inputOrientation'],
        'input_standard_name': value['inputStandardName'],
        'input_width_mm': value['inputWidthMm'],
        'resulting_height_mm': value['resultingHeightMm'],
        'resulting_orientation': value['resultingOrientation'],
        'resulting_standard_name': value['resultingStandardName'],
        'resulting_width_mm': value['resultingWidthMm'],
    };
}
