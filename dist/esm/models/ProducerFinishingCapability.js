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
export const ProducerFinishingCapabilityCategoryEnum = {
    Folding: 'folding',
    Lamination: 'lamination',
    Binding: 'binding',
    Cutting: 'cutting',
    Drilling: 'drilling',
    Perforation: 'perforation',
    Creasing: 'creasing',
    Stitching: 'stitching',
    Foiling: 'foiling',
    SpotUv: 'spot_uv',
    DieCutting: 'die_cutting',
    Embossing: 'embossing',
    Debossing: 'debossing',
    CornerRounding: 'corner_rounding',
    Packaging: 'packaging',
    Other: 'other',
    Unknown: 'unknown'
};
/**
 * @export
 */
export const ProducerFinishingCapabilityProcessEnum = {
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
 * Check if a given object implements the ProducerFinishingCapability interface.
 */
export function instanceOfProducerFinishingCapability(value) {
    if (!('category' in value) || value['category'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
export function ProducerFinishingCapabilityFromJSON(json) {
    return ProducerFinishingCapabilityFromJSONTyped(json, false);
}
export function ProducerFinishingCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'category': json['category'],
        'name': json['name'],
        'process': json['process'] == null ? undefined : json['process'],
    };
}
export function ProducerFinishingCapabilityToJSON(json) {
    return ProducerFinishingCapabilityToJSONTyped(json, false);
}
export function ProducerFinishingCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'category': value['category'],
        'name': value['name'],
        'process': value['process'],
    };
}
