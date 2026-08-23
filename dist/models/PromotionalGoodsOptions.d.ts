/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Promotional-goods production and decoration options.
 * @export
 * @interface PromotionalGoodsOptions
 */
export interface PromotionalGoodsOptions {
    /**
     *
     * @type {number}
     * @memberof PromotionalGoodsOptions
     */
    capacityMl?: number | null;
    /**
     *
     * @type {number}
     * @memberof PromotionalGoodsOptions
     */
    decorationDiameterMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof PromotionalGoodsOptions
     */
    decorationHeightMm?: number | null;
    /**
     *
     * @type {PromotionalGoodsOptionsDecorationMethodEnum}
     * @memberof PromotionalGoodsOptions
     */
    decorationMethod?: PromotionalGoodsOptionsDecorationMethodEnum;
    /**
     *
     * @type {PromotionalGoodsOptionsDecorationPositionEnum}
     * @memberof PromotionalGoodsOptions
     */
    decorationPosition?: PromotionalGoodsOptionsDecorationPositionEnum;
    /**
     *
     * @type {number}
     * @memberof PromotionalGoodsOptions
     */
    decorationWidthMm?: number | null;
    /**
     *
     * @type {PromotionalGoodsOptionsPackagingTypeEnum}
     * @memberof PromotionalGoodsOptions
     */
    packagingType?: PromotionalGoodsOptionsPackagingTypeEnum;
    /**
     *
     * @type {boolean}
     * @memberof PromotionalGoodsOptions
     */
    personalisationRequired?: boolean;
    /**
     *
     * @type {string}
     * @memberof PromotionalGoodsOptions
     */
    productColour?: string | null;
    /**
     *
     * @type {Array<string>}
     * @memberof PromotionalGoodsOptions
     */
    requiredComplianceClaims?: Array<string>;
}
/**
 * @export
 */
export declare const PromotionalGoodsOptionsDecorationMethodEnum: {
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
export type PromotionalGoodsOptionsDecorationMethodEnum = typeof PromotionalGoodsOptionsDecorationMethodEnum[keyof typeof PromotionalGoodsOptionsDecorationMethodEnum];
/**
 * @export
 */
export declare const PromotionalGoodsOptionsDecorationPositionEnum: {
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
export type PromotionalGoodsOptionsDecorationPositionEnum = typeof PromotionalGoodsOptionsDecorationPositionEnum[keyof typeof PromotionalGoodsOptionsDecorationPositionEnum];
/**
 * @export
 */
export declare const PromotionalGoodsOptionsPackagingTypeEnum: {
    readonly Bulk: "bulk";
    readonly IndividualBag: "individual_bag";
    readonly GiftBox: "gift_box";
    readonly RetailBox: "retail_box";
    readonly Custom: "custom";
    readonly Unknown: "unknown";
};
export type PromotionalGoodsOptionsPackagingTypeEnum = typeof PromotionalGoodsOptionsPackagingTypeEnum[keyof typeof PromotionalGoodsOptionsPackagingTypeEnum];
/**
 * Check if a given object implements the PromotionalGoodsOptions interface.
 */
export declare function instanceOfPromotionalGoodsOptions(value: object): value is PromotionalGoodsOptions;
export declare function PromotionalGoodsOptionsFromJSON(json: any): PromotionalGoodsOptions;
export declare function PromotionalGoodsOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotionalGoodsOptions;
export declare function PromotionalGoodsOptionsToJSON(json: any): PromotionalGoodsOptions;
export declare function PromotionalGoodsOptionsToJSONTyped(value?: PromotionalGoodsOptions | null, ignoreDiscriminator?: boolean): any;
