/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 *
 * @export
 * @interface PrintOperationParameters
 */
export interface PrintOperationParameters {
    /**
     *
     * @type {PrintOperationParametersColourEnum}
     * @memberof PrintOperationParameters
     */
    colour?: PrintOperationParametersColourEnum;
    /**
     *
     * @type {string}
     * @memberof PrintOperationParameters
     */
    colourantSystem?: string | null;
    /**
     *
     * @type {PrintOperationParametersKindEnum}
     * @memberof PrintOperationParameters
     */
    kind?: PrintOperationParametersKindEnum;
    /**
     *
     * @type {Array<PrintOperationParametersProcessesEnum>}
     * @memberof PrintOperationParameters
     */
    processes?: Array<PrintOperationParametersProcessesEnum>;
    /**
     *
     * @type {PrintOperationParametersSidesEnum}
     * @memberof PrintOperationParameters
     */
    sides?: PrintOperationParametersSidesEnum;
}
/**
 * @export
 */
export declare const PrintOperationParametersColourEnum: {
    readonly Mono: "mono";
    readonly FullColour: "full_colour";
    readonly Spot: "spot";
    readonly Unknown: "unknown";
};
export type PrintOperationParametersColourEnum = typeof PrintOperationParametersColourEnum[keyof typeof PrintOperationParametersColourEnum];
/**
 * @export
 */
export declare const PrintOperationParametersKindEnum: {
    readonly Print: "print";
};
export type PrintOperationParametersKindEnum = typeof PrintOperationParametersKindEnum[keyof typeof PrintOperationParametersKindEnum];
/**
 * @export
 */
export declare const PrintOperationParametersProcessesEnum: {
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
export type PrintOperationParametersProcessesEnum = typeof PrintOperationParametersProcessesEnum[keyof typeof PrintOperationParametersProcessesEnum];
/**
 * @export
 */
export declare const PrintOperationParametersSidesEnum: {
    readonly SingleSided: "single_sided";
    readonly DoubleSided: "double_sided";
    readonly Unknown: "unknown";
};
export type PrintOperationParametersSidesEnum = typeof PrintOperationParametersSidesEnum[keyof typeof PrintOperationParametersSidesEnum];
/**
 * Check if a given object implements the PrintOperationParameters interface.
 */
export declare function instanceOfPrintOperationParameters(value: object): value is PrintOperationParameters;
export declare function PrintOperationParametersFromJSON(json: any): PrintOperationParameters;
export declare function PrintOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrintOperationParameters;
export declare function PrintOperationParametersToJSON(json: any): PrintOperationParameters;
export declare function PrintOperationParametersToJSONTyped(value?: PrintOperationParameters | null, ignoreDiscriminator?: boolean): any;
