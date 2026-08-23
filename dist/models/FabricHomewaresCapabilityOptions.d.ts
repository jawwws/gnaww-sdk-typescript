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
import type { WashabilityCapability } from './WashabilityCapability';
import type { RepeatPatternCapability } from './RepeatPatternCapability';
import type { CustomDimensionCapability } from './CustomDimensionCapability';
import type { DimensionCapability } from './DimensionCapability';
import type { MaterialCapability } from './MaterialCapability';
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
export declare const FabricHomewaresCapabilityOptionsColourProfilesEnum: {
    readonly Srgb: "srgb";
    readonly AdobeRgb: "adobe_rgb";
    readonly Cmyk: "cmyk";
    readonly IccManaged: "icc_managed";
    readonly Unknown: "unknown";
};
export type FabricHomewaresCapabilityOptionsColourProfilesEnum = typeof FabricHomewaresCapabilityOptionsColourProfilesEnum[keyof typeof FabricHomewaresCapabilityOptionsColourProfilesEnum];
/**
 * @export
 */
export declare const FabricHomewaresCapabilityOptionsFasteningTypesEnum: {
    readonly None: "none";
    readonly Zip: "zip";
    readonly ConcealedZip: "concealed_zip";
    readonly Buttons: "buttons";
    readonly Ties: "ties";
    readonly Eyelets: "eyelets";
    readonly HookAndLoop: "hook_and_loop";
    readonly Envelope: "envelope";
    readonly Drawstring: "drawstring";
    readonly Unknown: "unknown";
};
export type FabricHomewaresCapabilityOptionsFasteningTypesEnum = typeof FabricHomewaresCapabilityOptionsFasteningTypesEnum[keyof typeof FabricHomewaresCapabilityOptionsFasteningTypesEnum];
/**
 * @export
 */
export declare const FabricHomewaresCapabilityOptionsHemStylesEnum: {
    readonly None: "none";
    readonly Overlocked: "overlocked";
    readonly SingleTurn: "single_turn";
    readonly DoubleTurn: "double_turn";
    readonly Rolled: "rolled";
    readonly Blind: "blind";
    readonly Unknown: "unknown";
};
export type FabricHomewaresCapabilityOptionsHemStylesEnum = typeof FabricHomewaresCapabilityOptionsHemStylesEnum[keyof typeof FabricHomewaresCapabilityOptionsHemStylesEnum];
/**
 * @export
 */
export declare const FabricHomewaresCapabilityOptionsLiningTypesEnum: {
    readonly None: "none";
    readonly Standard: "standard";
    readonly Blackout: "blackout";
    readonly Thermal: "thermal";
    readonly Interlining: "interlining";
    readonly Unknown: "unknown";
};
export type FabricHomewaresCapabilityOptionsLiningTypesEnum = typeof FabricHomewaresCapabilityOptionsLiningTypesEnum[keyof typeof FabricHomewaresCapabilityOptionsLiningTypesEnum];
/**
 * @export
 */
export declare const FabricHomewaresCapabilityOptionsPrintMethodsEnum: {
    readonly DigitalPrint: "digital_print";
    readonly OffsetLitho: "offset_litho";
    readonly LargeFormat: "large_format";
    readonly Dtg: "dtg";
    readonly Dtf: "dtf";
    readonly Htv: "htv";
    readonly Embroidery: "embroidery";
    readonly ScreenPrint: "screen_print";
    readonly Sublimation: "sublimation";
    readonly DigitalTextilePrint: "digital_textile_print";
    readonly ReactiveDyePrint: "reactive_dye_print";
    readonly PigmentPrint: "pigment_print";
    readonly Sewing: "sewing";
    readonly Hemming: "hemming";
    readonly PadPrint: "pad_print";
    readonly UvPrint: "uv_print";
    readonly Engraving: "engraving";
    readonly LaserEngraving: "laser_engraving";
    readonly Cutting: "cutting";
    readonly Folding: "folding";
    readonly Binding: "binding";
    readonly Lamination: "lamination";
    readonly Foiling: "foiling";
    readonly SpotUv: "spot_uv";
    readonly Unknown: "unknown";
};
export type FabricHomewaresCapabilityOptionsPrintMethodsEnum = typeof FabricHomewaresCapabilityOptionsPrintMethodsEnum[keyof typeof FabricHomewaresCapabilityOptionsPrintMethodsEnum];
/**
 * @export
 */
export declare const FabricHomewaresCapabilityOptionsPrintedSidesEnum: {
    readonly SingleSided: "single_sided";
    readonly DoubleSided: "double_sided";
    readonly Unknown: "unknown";
};
export type FabricHomewaresCapabilityOptionsPrintedSidesEnum = typeof FabricHomewaresCapabilityOptionsPrintedSidesEnum[keyof typeof FabricHomewaresCapabilityOptionsPrintedSidesEnum];
/**
 * Check if a given object implements the FabricHomewaresCapabilityOptions interface.
 */
export declare function instanceOfFabricHomewaresCapabilityOptions(value: object): value is FabricHomewaresCapabilityOptions;
export declare function FabricHomewaresCapabilityOptionsFromJSON(json: any): FabricHomewaresCapabilityOptions;
export declare function FabricHomewaresCapabilityOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FabricHomewaresCapabilityOptions;
export declare function FabricHomewaresCapabilityOptionsToJSON(json: any): FabricHomewaresCapabilityOptions;
export declare function FabricHomewaresCapabilityOptionsToJSONTyped(value?: FabricHomewaresCapabilityOptions | null, ignoreDiscriminator?: boolean): any;
