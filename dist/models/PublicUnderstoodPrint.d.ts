/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Deterministically understood print-process evidence before canonical completion.
 * @export
 * @interface PublicUnderstoodPrint
 */
export interface PublicUnderstoodPrint {
    /**
     *
     * @type {PublicUnderstoodPrintColourEnum}
     * @memberof PublicUnderstoodPrint
     */
    colour?: PublicUnderstoodPrintColourEnum | null;
    /**
     *
     * @type {Array<PublicUnderstoodPrintProcessesEnum>}
     * @memberof PublicUnderstoodPrint
     */
    processes?: Array<PublicUnderstoodPrintProcessesEnum>;
    /**
     *
     * @type {PublicUnderstoodPrintSidesEnum}
     * @memberof PublicUnderstoodPrint
     */
    sides?: PublicUnderstoodPrintSidesEnum | null;
}
/**
 * @export
 */
export declare const PublicUnderstoodPrintColourEnum: {
    readonly Mono: "mono";
    readonly FullColour: "full_colour";
    readonly Spot: "spot";
    readonly Unknown: "unknown";
};
export type PublicUnderstoodPrintColourEnum = typeof PublicUnderstoodPrintColourEnum[keyof typeof PublicUnderstoodPrintColourEnum];
/**
 * @export
 */
export declare const PublicUnderstoodPrintProcessesEnum: {
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
export type PublicUnderstoodPrintProcessesEnum = typeof PublicUnderstoodPrintProcessesEnum[keyof typeof PublicUnderstoodPrintProcessesEnum];
/**
 * @export
 */
export declare const PublicUnderstoodPrintSidesEnum: {
    readonly SingleSided: "single_sided";
    readonly DoubleSided: "double_sided";
    readonly Unknown: "unknown";
};
export type PublicUnderstoodPrintSidesEnum = typeof PublicUnderstoodPrintSidesEnum[keyof typeof PublicUnderstoodPrintSidesEnum];
/**
 * Check if a given object implements the PublicUnderstoodPrint interface.
 */
export declare function instanceOfPublicUnderstoodPrint(value: object): value is PublicUnderstoodPrint;
export declare function PublicUnderstoodPrintFromJSON(json: any): PublicUnderstoodPrint;
export declare function PublicUnderstoodPrintFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicUnderstoodPrint;
export declare function PublicUnderstoodPrintToJSON(json: any): PublicUnderstoodPrint;
export declare function PublicUnderstoodPrintToJSONTyped(value?: PublicUnderstoodPrint | null, ignoreDiscriminator?: boolean): any;
