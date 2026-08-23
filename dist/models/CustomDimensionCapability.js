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
exports.instanceOfCustomDimensionCapability = instanceOfCustomDimensionCapability;
exports.CustomDimensionCapabilityFromJSON = CustomDimensionCapabilityFromJSON;
exports.CustomDimensionCapabilityFromJSONTyped = CustomDimensionCapabilityFromJSONTyped;
exports.CustomDimensionCapabilityToJSON = CustomDimensionCapabilityToJSON;
exports.CustomDimensionCapabilityToJSONTyped = CustomDimensionCapabilityToJSONTyped;
/**
 * Check if a given object implements the CustomDimensionCapability interface.
 */
function instanceOfCustomDimensionCapability(value) {
    return true;
}
function CustomDimensionCapabilityFromJSON(json) {
    return CustomDimensionCapabilityFromJSONTyped(json, false);
}
function CustomDimensionCapabilityFromJSONTyped(json, ignoreDiscriminator) {
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
function CustomDimensionCapabilityToJSON(json) {
    return CustomDimensionCapabilityToJSONTyped(json, false);
}
function CustomDimensionCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
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
