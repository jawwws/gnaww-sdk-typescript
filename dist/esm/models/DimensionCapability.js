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
/**
 * Check if a given object implements the DimensionCapability interface.
 */
export function instanceOfDimensionCapability(value) {
    return true;
}
export function DimensionCapabilityFromJSON(json) {
    return DimensionCapabilityFromJSONTyped(json, false);
}
export function DimensionCapabilityFromJSONTyped(json, ignoreDiscriminator) {
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
export function DimensionCapabilityToJSON(json) {
    return DimensionCapabilityToJSONTyped(json, false);
}
export function DimensionCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
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
