/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Printed production attributes.
 * @export
 * @interface PrintSpec
 */
export interface PrintSpec {
    /**
     *
     * @type {PrintSpecColourEnum}
     * @memberof PrintSpec
     */
    colour?: PrintSpecColourEnum;
    /**
     *
     * @type {Array<PrintSpecProcessesEnum>}
     * @memberof PrintSpec
     */
    processes?: Array<PrintSpecProcessesEnum>;
    /**
     *
     * @type {PrintSpecSidesEnum}
     * @memberof PrintSpec
     */
    sides?: PrintSpecSidesEnum;
}
/**
 * @export
 */
export declare const PrintSpecColourEnum: {
    readonly Mono: "mono";
    readonly FullColour: "full_colour";
    readonly Spot: "spot";
    readonly Unknown: "unknown";
};
export type PrintSpecColourEnum = typeof PrintSpecColourEnum[keyof typeof PrintSpecColourEnum];
/**
 * @export
 */
export declare const PrintSpecProcessesEnum: {
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
export type PrintSpecProcessesEnum = typeof PrintSpecProcessesEnum[keyof typeof PrintSpecProcessesEnum];
/**
 * @export
 */
export declare const PrintSpecSidesEnum: {
    readonly SingleSided: "single_sided";
    readonly DoubleSided: "double_sided";
    readonly Unknown: "unknown";
};
export type PrintSpecSidesEnum = typeof PrintSpecSidesEnum[keyof typeof PrintSpecSidesEnum];
/**
 * Check if a given object implements the PrintSpec interface.
 */
export declare function instanceOfPrintSpec(value: object): value is PrintSpec;
export declare function PrintSpecFromJSON(json: any): PrintSpec;
export declare function PrintSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrintSpec;
export declare function PrintSpecToJSON(json: any): PrintSpec;
export declare function PrintSpecToJSONTyped(value?: PrintSpec | null, ignoreDiscriminator?: boolean): any;
