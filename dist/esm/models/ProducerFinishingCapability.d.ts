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
 * A finishing operation a producer can manufacture.
 * @export
 * @interface ProducerFinishingCapability
 */
export interface ProducerFinishingCapability {
    /**
     *
     * @type {ProducerFinishingCapabilityCategoryEnum}
     * @memberof ProducerFinishingCapability
     */
    category: ProducerFinishingCapabilityCategoryEnum;
    /**
     *
     * @type {string}
     * @memberof ProducerFinishingCapability
     */
    name: string;
    /**
     *
     * @type {ProducerFinishingCapabilityProcessEnum}
     * @memberof ProducerFinishingCapability
     */
    process?: ProducerFinishingCapabilityProcessEnum | null;
}
/**
 * @export
 */
export declare const ProducerFinishingCapabilityCategoryEnum: {
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
export type ProducerFinishingCapabilityCategoryEnum = typeof ProducerFinishingCapabilityCategoryEnum[keyof typeof ProducerFinishingCapabilityCategoryEnum];
/**
 * @export
 */
export declare const ProducerFinishingCapabilityProcessEnum: {
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
export type ProducerFinishingCapabilityProcessEnum = typeof ProducerFinishingCapabilityProcessEnum[keyof typeof ProducerFinishingCapabilityProcessEnum];
/**
 * Check if a given object implements the ProducerFinishingCapability interface.
 */
export declare function instanceOfProducerFinishingCapability(value: object): value is ProducerFinishingCapability;
export declare function ProducerFinishingCapabilityFromJSON(json: any): ProducerFinishingCapability;
export declare function ProducerFinishingCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerFinishingCapability;
export declare function ProducerFinishingCapabilityToJSON(json: any): ProducerFinishingCapability;
export declare function ProducerFinishingCapabilityToJSONTyped(value?: ProducerFinishingCapability | null, ignoreDiscriminator?: boolean): any;
