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
 * Fabric and homewares production options.
 * @export
 * @interface FabricHomewaresOptions
 */
export interface FabricHomewaresOptions {
    /**
     *
     * @type {FabricHomewaresOptionsColourProfileEnum}
     * @memberof FabricHomewaresOptions
     */
    colourProfile?: FabricHomewaresOptionsColourProfileEnum;
    /**
     *
     * @type {FabricHomewaresOptionsFasteningTypeEnum}
     * @memberof FabricHomewaresOptions
     */
    fasteningType?: FabricHomewaresOptionsFasteningTypeEnum;
    /**
     *
     * @type {FabricHomewaresOptionsHemStyleEnum}
     * @memberof FabricHomewaresOptions
     */
    hemStyle?: FabricHomewaresOptionsHemStyleEnum;
    /**
     *
     * @type {FabricHomewaresOptionsLiningTypeEnum}
     * @memberof FabricHomewaresOptions
     */
    liningType?: FabricHomewaresOptionsLiningTypeEnum;
    /**
     *
     * @type {number}
     * @memberof FabricHomewaresOptions
     */
    maximumWashTemperatureC?: number | null;
    /**
     *
     * @type {FabricHomewaresOptionsPrintMethodEnum}
     * @memberof FabricHomewaresOptions
     */
    printMethod?: FabricHomewaresOptionsPrintMethodEnum;
    /**
     *
     * @type {number}
     * @memberof FabricHomewaresOptions
     */
    repeatHeightMm?: number | null;
    /**
     *
     * @type {FabricHomewaresOptionsRepeatTypeEnum}
     * @memberof FabricHomewaresOptions
     */
    repeatType?: FabricHomewaresOptionsRepeatTypeEnum;
    /**
     *
     * @type {number}
     * @memberof FabricHomewaresOptions
     */
    repeatWidthMm?: number | null;
    /**
     *
     * @type {FabricHomewaresOptionsWashCareEnum}
     * @memberof FabricHomewaresOptions
     */
    washCare?: FabricHomewaresOptionsWashCareEnum;
}
/**
 * @export
 */
export declare const FabricHomewaresOptionsColourProfileEnum: {
    readonly Srgb: "srgb";
    readonly AdobeRgb: "adobe_rgb";
    readonly Cmyk: "cmyk";
    readonly IccManaged: "icc_managed";
    readonly Unknown: "unknown";
};
export type FabricHomewaresOptionsColourProfileEnum = typeof FabricHomewaresOptionsColourProfileEnum[keyof typeof FabricHomewaresOptionsColourProfileEnum];
/**
 * @export
 */
export declare const FabricHomewaresOptionsFasteningTypeEnum: {
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
export type FabricHomewaresOptionsFasteningTypeEnum = typeof FabricHomewaresOptionsFasteningTypeEnum[keyof typeof FabricHomewaresOptionsFasteningTypeEnum];
/**
 * @export
 */
export declare const FabricHomewaresOptionsHemStyleEnum: {
    readonly None: "none";
    readonly Overlocked: "overlocked";
    readonly SingleTurn: "single_turn";
    readonly DoubleTurn: "double_turn";
    readonly Rolled: "rolled";
    readonly Blind: "blind";
    readonly Unknown: "unknown";
};
export type FabricHomewaresOptionsHemStyleEnum = typeof FabricHomewaresOptionsHemStyleEnum[keyof typeof FabricHomewaresOptionsHemStyleEnum];
/**
 * @export
 */
export declare const FabricHomewaresOptionsLiningTypeEnum: {
    readonly None: "none";
    readonly Standard: "standard";
    readonly Blackout: "blackout";
    readonly Thermal: "thermal";
    readonly Interlining: "interlining";
    readonly Unknown: "unknown";
};
export type FabricHomewaresOptionsLiningTypeEnum = typeof FabricHomewaresOptionsLiningTypeEnum[keyof typeof FabricHomewaresOptionsLiningTypeEnum];
/**
 * @export
 */
export declare const FabricHomewaresOptionsPrintMethodEnum: {
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
export type FabricHomewaresOptionsPrintMethodEnum = typeof FabricHomewaresOptionsPrintMethodEnum[keyof typeof FabricHomewaresOptionsPrintMethodEnum];
/**
 * @export
 */
export declare const FabricHomewaresOptionsRepeatTypeEnum: {
    readonly None: "none";
    readonly Straight: "straight";
    readonly HalfDrop: "half_drop";
    readonly Mirror: "mirror";
    readonly Seamless: "seamless";
    readonly Engineered: "engineered";
    readonly Unknown: "unknown";
};
export type FabricHomewaresOptionsRepeatTypeEnum = typeof FabricHomewaresOptionsRepeatTypeEnum[keyof typeof FabricHomewaresOptionsRepeatTypeEnum];
/**
 * @export
 */
export declare const FabricHomewaresOptionsWashCareEnum: {
    readonly MachineWash: "machine_wash";
    readonly HandWash: "hand_wash";
    readonly DryClean: "dry_clean";
    readonly NotWashable: "not_washable";
    readonly Unknown: "unknown";
};
export type FabricHomewaresOptionsWashCareEnum = typeof FabricHomewaresOptionsWashCareEnum[keyof typeof FabricHomewaresOptionsWashCareEnum];
/**
 * Check if a given object implements the FabricHomewaresOptions interface.
 */
export declare function instanceOfFabricHomewaresOptions(value: object): value is FabricHomewaresOptions;
export declare function FabricHomewaresOptionsFromJSON(json: any): FabricHomewaresOptions;
export declare function FabricHomewaresOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FabricHomewaresOptions;
export declare function FabricHomewaresOptionsToJSON(json: any): FabricHomewaresOptions;
export declare function FabricHomewaresOptionsToJSONTyped(value?: FabricHomewaresOptions | null, ignoreDiscriminator?: boolean): any;
