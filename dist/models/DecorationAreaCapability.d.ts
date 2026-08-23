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
 * A reusable decoration position and size capability.
 * @export
 * @interface DecorationAreaCapability
 */
export interface DecorationAreaCapability {
    /**
     *
     * @type {number}
     * @memberof DecorationAreaCapability
     */
    maximumColours?: number | null;
    /**
     *
     * @type {number}
     * @memberof DecorationAreaCapability
     */
    maximumDiameterMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof DecorationAreaCapability
     */
    maximumHeightMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof DecorationAreaCapability
     */
    maximumWidthMm?: number | null;
    /**
     *
     * @type {Array<DecorationAreaCapabilityMethodsEnum>}
     * @memberof DecorationAreaCapability
     */
    methods: Array<DecorationAreaCapabilityMethodsEnum>;
    /**
     *
     * @type {DecorationAreaCapabilityPositionEnum}
     * @memberof DecorationAreaCapability
     */
    position: DecorationAreaCapabilityPositionEnum;
    /**
     *
     * @type {boolean}
     * @memberof DecorationAreaCapability
     */
    supportsFullColour?: boolean;
}
/**
 * @export
 */
export declare const DecorationAreaCapabilityMethodsEnum: {
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
export type DecorationAreaCapabilityMethodsEnum = typeof DecorationAreaCapabilityMethodsEnum[keyof typeof DecorationAreaCapabilityMethodsEnum];
/**
 * @export
 */
export declare const DecorationAreaCapabilityPositionEnum: {
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
export type DecorationAreaCapabilityPositionEnum = typeof DecorationAreaCapabilityPositionEnum[keyof typeof DecorationAreaCapabilityPositionEnum];
/**
 * Check if a given object implements the DecorationAreaCapability interface.
 */
export declare function instanceOfDecorationAreaCapability(value: object): value is DecorationAreaCapability;
export declare function DecorationAreaCapabilityFromJSON(json: any): DecorationAreaCapability;
export declare function DecorationAreaCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): DecorationAreaCapability;
export declare function DecorationAreaCapabilityToJSON(json: any): DecorationAreaCapability;
export declare function DecorationAreaCapabilityToJSONTyped(value?: DecorationAreaCapability | null, ignoreDiscriminator?: boolean): any;
