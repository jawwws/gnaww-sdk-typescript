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
 * Artwork rules that a producer expects for a product.
 * @export
 * @interface ArtworkRequirements
 */
export interface ArtworkRequirements {
    /**
     *
     * @type {Array<ArtworkRequirementsAcceptedFileTypesEnum>}
     * @memberof ArtworkRequirements
     */
    acceptedFileTypes: Array<ArtworkRequirementsAcceptedFileTypesEnum>;
    /**
     *
     * @type {number}
     * @memberof ArtworkRequirements
     */
    bleedMm?: number | null;
    /**
     *
     * @type {string}
     * @memberof ArtworkRequirements
     */
    colourSpace?: string | null;
    /**
     *
     * @type {number}
     * @memberof ArtworkRequirements
     */
    recommendedDpi?: number | null;
    /**
     *
     * @type {number}
     * @memberof ArtworkRequirements
     */
    safeZoneMm?: number | null;
}


/**
 * @export
 */
export const ArtworkRequirementsAcceptedFileTypesEnum = {
    Pdf: 'pdf',
    Jpg: 'jpg',
    Jpeg: 'jpeg',
    Png: 'png'
} as const;
export type ArtworkRequirementsAcceptedFileTypesEnum = typeof ArtworkRequirementsAcceptedFileTypesEnum[keyof typeof ArtworkRequirementsAcceptedFileTypesEnum];


/**
 * Check if a given object implements the ArtworkRequirements interface.
 */
export function instanceOfArtworkRequirements(value: object): value is ArtworkRequirements {
    if (!('acceptedFileTypes' in value) || value['acceptedFileTypes'] === undefined) return false;
    return true;
}

export function ArtworkRequirementsFromJSON(json: any): ArtworkRequirements {
    return ArtworkRequirementsFromJSONTyped(json, false);
}

export function ArtworkRequirementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArtworkRequirements {
    if (json == null) {
        return json;
    }
    return {

        'acceptedFileTypes': json['accepted_file_types'],
        'bleedMm': json['bleed_mm'] == null ? undefined : json['bleed_mm'],
        'colourSpace': json['colour_space'] == null ? undefined : json['colour_space'],
        'recommendedDpi': json['recommended_dpi'] == null ? undefined : json['recommended_dpi'],
        'safeZoneMm': json['safe_zone_mm'] == null ? undefined : json['safe_zone_mm'],
    };
}

export function ArtworkRequirementsToJSON(json: any): ArtworkRequirements {
    return ArtworkRequirementsToJSONTyped(json, false);
}

export function ArtworkRequirementsToJSONTyped(value?: ArtworkRequirements | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'accepted_file_types': value['acceptedFileTypes'],
        'bleed_mm': value['bleedMm'],
        'colour_space': value['colourSpace'],
        'recommended_dpi': value['recommendedDpi'],
        'safe_zone_mm': value['safeZoneMm'],
    };
}
