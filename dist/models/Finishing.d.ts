/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * A requested finishing operation.
 * @export
 * @interface Finishing
 */
export interface Finishing {
    /**
     *
     * @type {FinishingCategoryEnum}
     * @memberof Finishing
     */
    category?: FinishingCategoryEnum;
    /**
     *
     * @type {string}
     * @memberof Finishing
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof Finishing
     */
    notes?: string | null;
    /**
     *
     * @type {FinishingProcessEnum}
     * @memberof Finishing
     */
    process?: FinishingProcessEnum | null;
}
/**
 * @export
 */
export declare const FinishingCategoryEnum: {
    readonly Folding: "folding";
    readonly Lamination: "lamination";
    readonly Binding: "binding";
    readonly Cutting: "cutting";
    readonly Drilling: "drilling";
    readonly Perforation: "perforation";
    readonly Creasing: "creasing";
    readonly Stitching: "stitching";
    readonly Foiling: "foiling";
    readonly SpotUv: "spot_uv";
    readonly DieCutting: "die_cutting";
    readonly Embossing: "embossing";
    readonly Debossing: "debossing";
    readonly CornerRounding: "corner_rounding";
    readonly Packaging: "packaging";
    readonly Other: "other";
    readonly Unknown: "unknown";
};
export type FinishingCategoryEnum = typeof FinishingCategoryEnum[keyof typeof FinishingCategoryEnum];
/**
 * @export
 */
export declare const FinishingProcessEnum: {
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
export type FinishingProcessEnum = typeof FinishingProcessEnum[keyof typeof FinishingProcessEnum];
/**
 * Check if a given object implements the Finishing interface.
 */
export declare function instanceOfFinishing(value: object): value is Finishing;
export declare function FinishingFromJSON(json: any): Finishing;
export declare function FinishingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Finishing;
export declare function FinishingToJSON(json: any): Finishing;
export declare function FinishingToJSONTyped(value?: Finishing | null, ignoreDiscriminator?: boolean): any;
