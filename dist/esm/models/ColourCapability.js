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
export const ColourCapabilityModesEnum = {
    Mono: 'mono',
    FullColour: 'full_colour',
    Spot: 'spot',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the ColourCapability interface.
 */
export function instanceOfColourCapability(value) {
    if (!('modes' in value) || value['modes'] === undefined)
        return false;
    return true;
}
export function ColourCapabilityFromJSON(json) {
    return ColourCapabilityFromJSONTyped(json, false);
}
export function ColourCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'maximumSpotColours': json['maximum_spot_colours'] == null ? undefined : json['maximum_spot_colours'],
        'modes': json['modes'],
        'supportsMetallicInk': json['supports_metallic_ink'] == null ? undefined : json['supports_metallic_ink'],
        'supportsWhiteInk': json['supports_white_ink'] == null ? undefined : json['supports_white_ink'],
    };
}
export function ColourCapabilityToJSON(json) {
    return ColourCapabilityToJSONTyped(json, false);
}
export function ColourCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'maximum_spot_colours': value['maximumSpotColours'],
        'modes': value['modes'],
        'supports_metallic_ink': value['supportsMetallicInk'],
        'supports_white_ink': value['supportsWhiteInk'],
    };
}
