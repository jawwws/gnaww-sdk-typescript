"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkRequirementsAcceptedFileTypesEnum = void 0;
exports.instanceOfArtworkRequirements = instanceOfArtworkRequirements;
exports.ArtworkRequirementsFromJSON = ArtworkRequirementsFromJSON;
exports.ArtworkRequirementsFromJSONTyped = ArtworkRequirementsFromJSONTyped;
exports.ArtworkRequirementsToJSON = ArtworkRequirementsToJSON;
exports.ArtworkRequirementsToJSONTyped = ArtworkRequirementsToJSONTyped;
/**
 * @export
 */
exports.ArtworkRequirementsAcceptedFileTypesEnum = {
    Pdf: 'pdf',
    Jpg: 'jpg',
    Jpeg: 'jpeg',
    Png: 'png'
};
/**
 * Check if a given object implements the ArtworkRequirements interface.
 */
function instanceOfArtworkRequirements(value) {
    if (!('acceptedFileTypes' in value) || value['acceptedFileTypes'] === undefined)
        return false;
    return true;
}
function ArtworkRequirementsFromJSON(json) {
    return ArtworkRequirementsFromJSONTyped(json, false);
}
function ArtworkRequirementsFromJSONTyped(json, ignoreDiscriminator) {
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
function ArtworkRequirementsToJSON(json) {
    return ArtworkRequirementsToJSONTyped(json, false);
}
function ArtworkRequirementsToJSONTyped(value, ignoreDiscriminator = false) {
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
