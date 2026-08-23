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
 * An exact standard or named physical dimension capability.
 * @export
 * @interface DimensionCapability
 */
export interface DimensionCapability {
    /**
     *
     * @type {number}
     * @memberof DimensionCapability
     */
    depthMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof DimensionCapability
     */
    diameterMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof DimensionCapability
     */
    heightMm?: number | null;
    /**
     *
     * @type {string}
     * @memberof DimensionCapability
     */
    standardName?: string | null;
    /**
     *
     * @type {number}
     * @memberof DimensionCapability
     */
    widthMm?: number | null;
}

/**
 * Check if a given object implements the DimensionCapability interface.
 */
export function instanceOfDimensionCapability(value: object): value is DimensionCapability {
    return true;
}

export function DimensionCapabilityFromJSON(json: any): DimensionCapability {
    return DimensionCapabilityFromJSONTyped(json, false);
}

export function DimensionCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): DimensionCapability {
    if (json == null) {
        return json;
    }
    return {

        'depthMm': json['depth_mm'] == null ? undefined : json['depth_mm'],
        'diameterMm': json['diameter_mm'] == null ? undefined : json['diameter_mm'],
        'heightMm': json['height_mm'] == null ? undefined : json['height_mm'],
        'standardName': json['standard_name'] == null ? undefined : json['standard_name'],
        'widthMm': json['width_mm'] == null ? undefined : json['width_mm'],
    };
}

export function DimensionCapabilityToJSON(json: any): DimensionCapability {
    return DimensionCapabilityToJSONTyped(json, false);
}

export function DimensionCapabilityToJSONTyped(value?: DimensionCapability | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'depth_mm': value['depthMm'],
        'diameter_mm': value['diameterMm'],
        'height_mm': value['heightMm'],
        'standard_name': value['standardName'],
        'width_mm': value['widthMm'],
    };
}
