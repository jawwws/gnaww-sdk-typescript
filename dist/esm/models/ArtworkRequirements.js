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
/**
 * @export
 */
export const ArtworkRequirementsAcceptedFileTypesEnum = {
    Pdf: 'pdf',
    Jpg: 'jpg',
    Jpeg: 'jpeg',
    Png: 'png'
};
/**
 * Check if a given object implements the ArtworkRequirements interface.
 */
export function instanceOfArtworkRequirements(value) {
    if (!('acceptedFileTypes' in value) || value['acceptedFileTypes'] === undefined)
        return false;
    return true;
}
export function ArtworkRequirementsFromJSON(json) {
    return ArtworkRequirementsFromJSONTyped(json, false);
}
export function ArtworkRequirementsFromJSONTyped(json, ignoreDiscriminator) {
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
export function ArtworkRequirementsToJSON(json) {
    return ArtworkRequirementsToJSONTyped(json, false);
}
export function ArtworkRequirementsToJSONTyped(value, ignoreDiscriminator = false) {
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
