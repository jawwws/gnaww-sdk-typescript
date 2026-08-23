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
 * Apparel decoration production options.
 * @export
 * @interface ApparelDecorationOptions
 */
export interface ApparelDecorationOptions {
    /**
     *
     * @type {ApparelDecorationOptionsDecorationMethodEnum}
     * @memberof ApparelDecorationOptions
     */
    decorationMethod?: ApparelDecorationOptionsDecorationMethodEnum;
    /**
     *
     * @type {string}
     * @memberof ApparelDecorationOptions
     */
    garmentColour?: string | null;
    /**
     *
     * @type {string}
     * @memberof ApparelDecorationOptions
     */
    garmentType?: string | null;
    /**
     *
     * @type {ApparelDecorationOptionsPositionEnum}
     * @memberof ApparelDecorationOptions
     */
    position?: ApparelDecorationOptionsPositionEnum;
    /**
     *
     * @type {number}
     * @memberof ApparelDecorationOptions
     */
    printableHeightMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof ApparelDecorationOptions
     */
    printableWidthMm?: number | null;
    /**
     *
     * @type {Array<string>}
     * @memberof ApparelDecorationOptions
     */
    sizeRange?: Array<string>;
}
/**
 * @export
 */
export declare const ApparelDecorationOptionsDecorationMethodEnum: {
    readonly Dtg: "dtg";
    readonly Dtf: "dtf";
    readonly Htv: "htv";
    readonly Embroidery: "embroidery";
    readonly ScreenPrint: "screen_print";
    readonly Sublimation: "sublimation";
    readonly PadPrint: "pad_print";
    readonly UvPrint: "uv_print";
    readonly Engraving: "engraving";
    readonly LaserEngraving: "laser_engraving";
    readonly Unknown: "unknown";
};
export type ApparelDecorationOptionsDecorationMethodEnum = typeof ApparelDecorationOptionsDecorationMethodEnum[keyof typeof ApparelDecorationOptionsDecorationMethodEnum];
/**
 * @export
 */
export declare const ApparelDecorationOptionsPositionEnum: {
    readonly Front: "front";
    readonly Back: "back";
    readonly LeftChest: "left_chest";
    readonly RightChest: "right_chest";
    readonly Sleeve: "sleeve";
    readonly CapFront: "cap_front";
    readonly Left: "left";
    readonly Right: "right";
    readonly Wrap: "wrap";
    readonly Barrel: "barrel";
    readonly Lid: "lid";
    readonly Base: "base";
    readonly Unknown: "unknown";
};
export type ApparelDecorationOptionsPositionEnum = typeof ApparelDecorationOptionsPositionEnum[keyof typeof ApparelDecorationOptionsPositionEnum];
/**
 * Check if a given object implements the ApparelDecorationOptions interface.
 */
export declare function instanceOfApparelDecorationOptions(value: object): value is ApparelDecorationOptions;
export declare function ApparelDecorationOptionsFromJSON(json: any): ApparelDecorationOptions;
export declare function ApparelDecorationOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApparelDecorationOptions;
export declare function ApparelDecorationOptionsToJSON(json: any): ApparelDecorationOptions;
export declare function ApparelDecorationOptionsToJSONTyped(value?: ApparelDecorationOptions | null, ignoreDiscriminator?: boolean): any;
