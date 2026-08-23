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
 * Supported limits for custom-sized production.
 * @export
 * @interface CustomDimensionCapability
 */
export interface CustomDimensionCapability {
    /**
     *
     * @type {Array<number>}
     * @memberof CustomDimensionCapability
     */
    incrementsMm?: Array<number>;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    maximumDepthMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    maximumDiameterMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    maximumHeightMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    maximumWidthMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    minimumDepthMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    minimumDiameterMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    minimumHeightMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    minimumWidthMm?: number | null;
}

/**
 * Check if a given object implements the CustomDimensionCapability interface.
 */
export function instanceOfCustomDimensionCapability(value: object): value is CustomDimensionCapability {
    return true;
}

export function CustomDimensionCapabilityFromJSON(json: any): CustomDimensionCapability {
    return CustomDimensionCapabilityFromJSONTyped(json, false);
}

export function CustomDimensionCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomDimensionCapability {
    if (json == null) {
        return json;
    }
    return {

        'incrementsMm': json['increments_mm'] == null ? undefined : json['increments_mm'],
        'maximumDepthMm': json['maximum_depth_mm'] == null ? undefined : json['maximum_depth_mm'],
        'maximumDiameterMm': json['maximum_diameter_mm'] == null ? undefined : json['maximum_diameter_mm'],
        'maximumHeightMm': json['maximum_height_mm'] == null ? undefined : json['maximum_height_mm'],
        'maximumWidthMm': json['maximum_width_mm'] == null ? undefined : json['maximum_width_mm'],
        'minimumDepthMm': json['minimum_depth_mm'] == null ? undefined : json['minimum_depth_mm'],
        'minimumDiameterMm': json['minimum_diameter_mm'] == null ? undefined : json['minimum_diameter_mm'],
        'minimumHeightMm': json['minimum_height_mm'] == null ? undefined : json['minimum_height_mm'],
        'minimumWidthMm': json['minimum_width_mm'] == null ? undefined : json['minimum_width_mm'],
    };
}

export function CustomDimensionCapabilityToJSON(json: any): CustomDimensionCapability {
    return CustomDimensionCapabilityToJSONTyped(json, false);
}

export function CustomDimensionCapabilityToJSONTyped(value?: CustomDimensionCapability | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'increments_mm': value['incrementsMm'],
        'maximum_depth_mm': value['maximumDepthMm'],
        'maximum_diameter_mm': value['maximumDiameterMm'],
        'maximum_height_mm': value['maximumHeightMm'],
        'maximum_width_mm': value['maximumWidthMm'],
        'minimum_depth_mm': value['minimumDepthMm'],
        'minimum_diameter_mm': value['minimumDiameterMm'],
        'minimum_height_mm': value['minimumHeightMm'],
        'minimum_width_mm': value['minimumWidthMm'],
    };
}
