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
export const FabricHomewaresOptionsColourProfileEnum = {
    Srgb: 'srgb',
    AdobeRgb: 'adobe_rgb',
    Cmyk: 'cmyk',
    IccManaged: 'icc_managed',
    Unknown: 'unknown'
};
/**
 * @export
 */
export const FabricHomewaresOptionsFasteningTypeEnum = {
    None: 'none',
    Zip: 'zip',
    ConcealedZip: 'concealed_zip',
    Buttons: 'buttons',
    Ties: 'ties',
    Eyelets: 'eyelets',
    HookAndLoop: 'hook_and_loop',
    Envelope: 'envelope',
    Drawstring: 'drawstring',
    Unknown: 'unknown'
};
/**
 * @export
 */
export const FabricHomewaresOptionsHemStyleEnum = {
    None: 'none',
    Overlocked: 'overlocked',
    SingleTurn: 'single_turn',
    DoubleTurn: 'double_turn',
    Rolled: 'rolled',
    Blind: 'blind',
    Unknown: 'unknown'
};
/**
 * @export
 */
export const FabricHomewaresOptionsLiningTypeEnum = {
    None: 'none',
    Standard: 'standard',
    Blackout: 'blackout',
    Thermal: 'thermal',
    Interlining: 'interlining',
    Unknown: 'unknown'
};
/**
 * @export
 */
export const FabricHomewaresOptionsPrintMethodEnum = {
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
 * @export
 */
export const FabricHomewaresOptionsRepeatTypeEnum = {
    None: 'none',
    Straight: 'straight',
    HalfDrop: 'half_drop',
    Mirror: 'mirror',
    Seamless: 'seamless',
    Engineered: 'engineered',
    Unknown: 'unknown'
};
/**
 * @export
 */
export const FabricHomewaresOptionsWashCareEnum = {
    MachineWash: 'machine_wash',
    HandWash: 'hand_wash',
    DryClean: 'dry_clean',
    NotWashable: 'not_washable',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the FabricHomewaresOptions interface.
 */
export function instanceOfFabricHomewaresOptions(value) {
    return true;
}
export function FabricHomewaresOptionsFromJSON(json) {
    return FabricHomewaresOptionsFromJSONTyped(json, false);
}
export function FabricHomewaresOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'colourProfile': json['colour_profile'] == null ? undefined : json['colour_profile'],
        'fasteningType': json['fastening_type'] == null ? undefined : json['fastening_type'],
        'hemStyle': json['hem_style'] == null ? undefined : json['hem_style'],
        'liningType': json['lining_type'] == null ? undefined : json['lining_type'],
        'maximumWashTemperatureC': json['maximum_wash_temperature_c'] == null ? undefined : json['maximum_wash_temperature_c'],
        'printMethod': json['print_method'] == null ? undefined : json['print_method'],
        'repeatHeightMm': json['repeat_height_mm'] == null ? undefined : json['repeat_height_mm'],
        'repeatType': json['repeat_type'] == null ? undefined : json['repeat_type'],
        'repeatWidthMm': json['repeat_width_mm'] == null ? undefined : json['repeat_width_mm'],
        'washCare': json['wash_care'] == null ? undefined : json['wash_care'],
    };
}
export function FabricHomewaresOptionsToJSON(json) {
    return FabricHomewaresOptionsToJSONTyped(json, false);
}
export function FabricHomewaresOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'colour_profile': value['colourProfile'],
        'fastening_type': value['fasteningType'],
        'hem_style': value['hemStyle'],
        'lining_type': value['liningType'],
        'maximum_wash_temperature_c': value['maximumWashTemperatureC'],
        'print_method': value['printMethod'],
        'repeat_height_mm': value['repeatHeightMm'],
        'repeat_type': value['repeatType'],
        'repeat_width_mm': value['repeatWidthMm'],
        'wash_care': value['washCare'],
    };
}
