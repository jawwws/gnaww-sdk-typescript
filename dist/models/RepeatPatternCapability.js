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
exports.RepeatPatternCapabilityTypesEnum = void 0;
exports.instanceOfRepeatPatternCapability = instanceOfRepeatPatternCapability;
exports.RepeatPatternCapabilityFromJSON = RepeatPatternCapabilityFromJSON;
exports.RepeatPatternCapabilityFromJSONTyped = RepeatPatternCapabilityFromJSONTyped;
exports.RepeatPatternCapabilityToJSON = RepeatPatternCapabilityToJSON;
exports.RepeatPatternCapabilityToJSONTyped = RepeatPatternCapabilityToJSONTyped;
/**
 * @export
 */
exports.RepeatPatternCapabilityTypesEnum = {
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
function instanceOfRepeatPatternCapability(value) {
    return true;
}
function RepeatPatternCapabilityFromJSON(json) {
    return RepeatPatternCapabilityFromJSONTyped(json, false);
}
function RepeatPatternCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'maximumHeightMm': json['maximum_height_mm'] == null ? undefined : json['maximum_height_mm'],
        'maximumWidthMm': json['maximum_width_mm'] == null ? undefined : json['maximum_width_mm'],
        'types': json['types'] == null ? undefined : json['types'],
    };
}
function RepeatPatternCapabilityToJSON(json) {
    return RepeatPatternCapabilityToJSONTyped(json, false);
}
function RepeatPatternCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'maximum_height_mm': value['maximumHeightMm'],
        'maximum_width_mm': value['maximumWidthMm'],
        'types': value['types'],
    };
}
