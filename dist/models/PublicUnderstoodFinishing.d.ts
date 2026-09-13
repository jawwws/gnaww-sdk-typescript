/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * One controlled finishing fact established without claiming complete geometry.
 * @export
 * @interface PublicUnderstoodFinishing
 */
export interface PublicUnderstoodFinishing {
    /**
     *
     * @type {PublicUnderstoodFinishingCategoryEnum}
     * @memberof PublicUnderstoodFinishing
     */
    category: PublicUnderstoodFinishingCategoryEnum;
    /**
     *
     * @type {boolean}
     * @memberof PublicUnderstoodFinishing
     */
    geometryComplete?: boolean;
    /**
     *
     * @type {string}
     * @memberof PublicUnderstoodFinishing
     */
    name: string;
    /**
     *
     * @type {PublicUnderstoodFinishingProcessEnum}
     * @memberof PublicUnderstoodFinishing
     */
    process?: PublicUnderstoodFinishingProcessEnum | null;
    /**
     *
     * @type {string}
     * @memberof PublicUnderstoodFinishing
     */
    sourceExpression?: string | null;
}
/**
 * @export
 */
export declare const PublicUnderstoodFinishingCategoryEnum: {
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
export type PublicUnderstoodFinishingCategoryEnum = typeof PublicUnderstoodFinishingCategoryEnum[keyof typeof PublicUnderstoodFinishingCategoryEnum];
/**
 * @export
 */
export declare const PublicUnderstoodFinishingProcessEnum: {
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
export type PublicUnderstoodFinishingProcessEnum = typeof PublicUnderstoodFinishingProcessEnum[keyof typeof PublicUnderstoodFinishingProcessEnum];
/**
 * Check if a given object implements the PublicUnderstoodFinishing interface.
 */
export declare function instanceOfPublicUnderstoodFinishing(value: object): value is PublicUnderstoodFinishing;
export declare function PublicUnderstoodFinishingFromJSON(json: any): PublicUnderstoodFinishing;
export declare function PublicUnderstoodFinishingFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicUnderstoodFinishing;
export declare function PublicUnderstoodFinishingToJSON(json: any): PublicUnderstoodFinishing;
export declare function PublicUnderstoodFinishingToJSONTyped(value?: PublicUnderstoodFinishing | null, ignoreDiscriminator?: boolean): any;
