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
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProducerProcessCapabilityProcessEnum = void 0;
exports.instanceOfProducerProcessCapability = instanceOfProducerProcessCapability;
exports.ProducerProcessCapabilityFromJSON = ProducerProcessCapabilityFromJSON;
exports.ProducerProcessCapabilityFromJSONTyped = ProducerProcessCapabilityFromJSONTyped;
exports.ProducerProcessCapabilityToJSON = ProducerProcessCapabilityToJSON;
exports.ProducerProcessCapabilityToJSONTyped = ProducerProcessCapabilityToJSONTyped;
/**
 * @export
 */
exports.ProducerProcessCapabilityProcessEnum = {
    DigitalPrint: 'digital_print',
    OffsetLitho: 'offset_litho',
    LargeFormat: 'large_format',
    Dtg: 'dtg',
    Dtf: 'dtf',
    Htv: 'htv',
    Embroidery: 'embroidery',
    ScreenPrint: 'screen_print',
    Sublimation: 'sublimation',
    DigitalTextilePrint: 'digital_textile_print',
    ReactiveDyePrint: 'reactive_dye_print',
    PigmentPrint: 'pigment_print',
    Sewing: 'sewing',
    Hemming: 'hemming',
    PadPrint: 'pad_print',
    UvPrint: 'uv_print',
    Engraving: 'engraving',
    LaserEngraving: 'laser_engraving',
    Cutting: 'cutting',
    Folding: 'folding',
    Binding: 'binding',
    Lamination: 'lamination',
    Foiling: 'foiling',
    SpotUv: 'spot_uv',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the ProducerProcessCapability interface.
 */
function instanceOfProducerProcessCapability(value) {
    if (!('process' in value) || value['process'] === undefined)
        return false;
    return true;
}
function ProducerProcessCapabilityFromJSON(json) {
    return ProducerProcessCapabilityFromJSONTyped(json, false);
}
function ProducerProcessCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'process': json['process'],
    };
}
function ProducerProcessCapabilityToJSON(json) {
    return ProducerProcessCapabilityToJSONTyped(json, false);
}
function ProducerProcessCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'process': value['process'],
    };
}
