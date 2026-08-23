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

import { mapValues } from '../runtime';
import type { WashabilityCapability } from './WashabilityCapability';
import {
    WashabilityCapabilityFromJSON,
    WashabilityCapabilityFromJSONTyped,
    WashabilityCapabilityToJSON,
    WashabilityCapabilityToJSONTyped,
} from './WashabilityCapability';
import type { RepeatPatternCapability } from './RepeatPatternCapability';
import {
    RepeatPatternCapabilityFromJSON,
    RepeatPatternCapabilityFromJSONTyped,
    RepeatPatternCapabilityToJSON,
    RepeatPatternCapabilityToJSONTyped,
} from './RepeatPatternCapability';
import type { CustomDimensionCapability } from './CustomDimensionCapability';
import {
    CustomDimensionCapabilityFromJSON,
    CustomDimensionCapabilityFromJSONTyped,
    CustomDimensionCapabilityToJSON,
    CustomDimensionCapabilityToJSONTyped,
} from './CustomDimensionCapability';
import type { DimensionCapability } from './DimensionCapability';
import {
    DimensionCapabilityFromJSON,
    DimensionCapabilityFromJSONTyped,
    DimensionCapabilityToJSON,
    DimensionCapabilityToJSONTyped,
} from './DimensionCapability';
import type { MaterialCapability } from './MaterialCapability';
import {
    MaterialCapabilityFromJSON,
    MaterialCapabilityFromJSONTyped,
    MaterialCapabilityToJSON,
    MaterialCapabilityToJSONTyped,
} from './MaterialCapability';

/**
 * Canonical fabric and homewares production capabilities.
 * @export
 * @interface FabricHomewaresCapabilityOptions
 */
export interface FabricHomewaresCapabilityOptions {
    /**
     *
     * @type {Array<FabricHomewaresCapabilityOptionsColourProfilesEnum>}
     * @memberof FabricHomewaresCapabilityOptions
     */
    colourProfiles?: Array<FabricHomewaresCapabilityOptionsColourProfilesEnum>;
    /**
     *
     * @type {CustomDimensionCapability}
     * @memberof FabricHomewaresCapabilityOptions
     */
    customDimensions?: CustomDimensionCapability | null;
    /**
     *
     * @type {Array<DimensionCapability>}
     * @memberof FabricHomewaresCapabilityOptions
     */
    dimensions?: Array<DimensionCapability>;
    /**
     *
     * @type {Array<FabricHomewaresCapabilityOptionsFasteningTypesEnum>}
     * @memberof FabricHomewaresCapabilityOptions
     */
    fasteningTypes?: Array<FabricHomewaresCapabilityOptionsFasteningTypesEnum>;
    /**
     *
     * @type {Array<FabricHomewaresCapabilityOptionsHemStylesEnum>}
     * @memberof FabricHomewaresCapabilityOptions
     */
    hemStyles?: Array<FabricHomewaresCapabilityOptionsHemStylesEnum>;
    /**
     *
     * @type {Array<FabricHomewaresCapabilityOptionsLiningTypesEnum>}
     * @memberof FabricHomewaresCapabilityOptions
     */
    liningTypes?: Array<FabricHomewaresCapabilityOptionsLiningTypesEnum>;
    /**
     *
     * @type {Array<MaterialCapability>}
     * @memberof FabricHomewaresCapabilityOptions
     */
    materials?: Array<MaterialCapability>;
    /**
     *
     * @type {Array<FabricHomewaresCapabilityOptionsPrintMethodsEnum>}
     * @memberof FabricHomewaresCapabilityOptions
     */
    printMethods?: Array<FabricHomewaresCapabilityOptionsPrintMethodsEnum>;
    /**
     *
     * @type {Array<FabricHomewaresCapabilityOptionsPrintedSidesEnum>}
     * @memberof FabricHomewaresCapabilityOptions
     */
    printedSides?: Array<FabricHomewaresCapabilityOptionsPrintedSidesEnum>;
    /**
     *
     * @type {RepeatPatternCapability}
     * @memberof FabricHomewaresCapabilityOptions
     */
    repeatPattern?: RepeatPatternCapability;
    /**
     *
     * @type {WashabilityCapability}
     * @memberof FabricHomewaresCapabilityOptions
     */
    washability?: WashabilityCapability;
}


/**
 * @export
 */
export const FabricHomewaresCapabilityOptionsColourProfilesEnum = {
    Srgb: 'srgb',
    AdobeRgb: 'adobe_rgb',
    Cmyk: 'cmyk',
    IccManaged: 'icc_managed',
    Unknown: 'unknown'
} as const;
export type FabricHomewaresCapabilityOptionsColourProfilesEnum = typeof FabricHomewaresCapabilityOptionsColourProfilesEnum[keyof typeof FabricHomewaresCapabilityOptionsColourProfilesEnum];

/**
 * @export
 */
export const FabricHomewaresCapabilityOptionsFasteningTypesEnum = {
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
} as const;
export type FabricHomewaresCapabilityOptionsFasteningTypesEnum = typeof FabricHomewaresCapabilityOptionsFasteningTypesEnum[keyof typeof FabricHomewaresCapabilityOptionsFasteningTypesEnum];

/**
 * @export
 */
export const FabricHomewaresCapabilityOptionsHemStylesEnum = {
    None: 'none',
    Overlocked: 'overlocked',
    SingleTurn: 'single_turn',
    DoubleTurn: 'double_turn',
    Rolled: 'rolled',
    Blind: 'blind',
    Unknown: 'unknown'
} as const;
export type FabricHomewaresCapabilityOptionsHemStylesEnum = typeof FabricHomewaresCapabilityOptionsHemStylesEnum[keyof typeof FabricHomewaresCapabilityOptionsHemStylesEnum];

/**
 * @export
 */
export const FabricHomewaresCapabilityOptionsLiningTypesEnum = {
    None: 'none',
    Standard: 'standard',
    Blackout: 'blackout',
    Thermal: 'thermal',
    Interlining: 'interlining',
    Unknown: 'unknown'
} as const;
export type FabricHomewaresCapabilityOptionsLiningTypesEnum = typeof FabricHomewaresCapabilityOptionsLiningTypesEnum[keyof typeof FabricHomewaresCapabilityOptionsLiningTypesEnum];

/**
 * @export
 */
export const FabricHomewaresCapabilityOptionsPrintMethodsEnum = {
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
} as const;
export type FabricHomewaresCapabilityOptionsPrintMethodsEnum = typeof FabricHomewaresCapabilityOptionsPrintMethodsEnum[keyof typeof FabricHomewaresCapabilityOptionsPrintMethodsEnum];

/**
 * @export
 */
export const FabricHomewaresCapabilityOptionsPrintedSidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
} as const;
export type FabricHomewaresCapabilityOptionsPrintedSidesEnum = typeof FabricHomewaresCapabilityOptionsPrintedSidesEnum[keyof typeof FabricHomewaresCapabilityOptionsPrintedSidesEnum];


/**
 * Check if a given object implements the FabricHomewaresCapabilityOptions interface.
 */
export function instanceOfFabricHomewaresCapabilityOptions(value: object): value is FabricHomewaresCapabilityOptions {
    return true;
}

export function FabricHomewaresCapabilityOptionsFromJSON(json: any): FabricHomewaresCapabilityOptions {
    return FabricHomewaresCapabilityOptionsFromJSONTyped(json, false);
}

export function FabricHomewaresCapabilityOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FabricHomewaresCapabilityOptions {
    if (json == null) {
        return json;
    }
    return {

        'colourProfiles': json['colour_profiles'] == null ? undefined : json['colour_profiles'],
        'customDimensions': json['custom_dimensions'] == null ? undefined : CustomDimensionCapabilityFromJSON(json['custom_dimensions']),
        'dimensions': json['dimensions'] == null ? undefined : ((json['dimensions'] as Array<any>).map(DimensionCapabilityFromJSON)),
        'fasteningTypes': json['fastening_types'] == null ? undefined : json['fastening_types'],
        'hemStyles': json['hem_styles'] == null ? undefined : json['hem_styles'],
        'liningTypes': json['lining_types'] == null ? undefined : json['lining_types'],
        'materials': json['materials'] == null ? undefined : ((json['materials'] as Array<any>).map(MaterialCapabilityFromJSON)),
        'printMethods': json['print_methods'] == null ? undefined : json['print_methods'],
        'printedSides': json['printed_sides'] == null ? undefined : json['printed_sides'],
        'repeatPattern': json['repeat_pattern'] == null ? undefined : RepeatPatternCapabilityFromJSON(json['repeat_pattern']),
        'washability': json['washability'] == null ? undefined : WashabilityCapabilityFromJSON(json['washability']),
    };
}

export function FabricHomewaresCapabilityOptionsToJSON(json: any): FabricHomewaresCapabilityOptions {
    return FabricHomewaresCapabilityOptionsToJSONTyped(json, false);
}

export function FabricHomewaresCapabilityOptionsToJSONTyped(value?: FabricHomewaresCapabilityOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'colour_profiles': value['colourProfiles'],
        'custom_dimensions': CustomDimensionCapabilityToJSON(value['customDimensions']),
        'dimensions': value['dimensions'] == null ? undefined : ((value['dimensions'] as Array<any>).map(DimensionCapabilityToJSON)),
        'fastening_types': value['fasteningTypes'],
        'hem_styles': value['hemStyles'],
        'lining_types': value['liningTypes'],
        'materials': value['materials'] == null ? undefined : ((value['materials'] as Array<any>).map(MaterialCapabilityToJSON)),
        'print_methods': value['printMethods'],
        'printed_sides': value['printedSides'],
        'repeat_pattern': RepeatPatternCapabilityToJSON(value['repeatPattern']),
        'washability': WashabilityCapabilityToJSON(value['washability']),
    };
}
