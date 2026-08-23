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
 * @export
 */
export const RepeatPatternCapabilityTypesEnum = {
    None: 'none',
    Straight: 'straight',
    HalfDrop: 'half_drop',
    Mirror: 'mirror',
    Seamless: 'seamless',
    Engineered: 'engineered',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the RepeatPatternCapability interface.
 */
export function instanceOfRepeatPatternCapability(value) {
    return true;
}
export function RepeatPatternCapabilityFromJSON(json) {
    return RepeatPatternCapabilityFromJSONTyped(json, false);
}
export function RepeatPatternCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'maximumHeightMm': json['maximum_height_mm'] == null ? undefined : json['maximum_height_mm'],
        'maximumWidthMm': json['maximum_width_mm'] == null ? undefined : json['maximum_width_mm'],
        'types': json['types'] == null ? undefined : json['types'],
    };
}
export function RepeatPatternCapabilityToJSON(json) {
    return RepeatPatternCapabilityToJSONTyped(json, false);
}
export function RepeatPatternCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'maximum_height_mm': value['maximumHeightMm'],
        'maximum_width_mm': value['maximumWidthMm'],
        'types': value['types'],
    };
}
