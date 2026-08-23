/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * A controlled production process supported by the producer.
 * @export
 * @interface ProducerProcessCapability
 */
export interface ProducerProcessCapability {
    /**
     *
     * @type {ProducerProcessCapabilityProcessEnum}
     * @memberof ProducerProcessCapability
     */
    process: ProducerProcessCapabilityProcessEnum;
}
/**
 * @export
 */
export declare const ProducerProcessCapabilityProcessEnum: {
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
export type ProducerProcessCapabilityProcessEnum = typeof ProducerProcessCapabilityProcessEnum[keyof typeof ProducerProcessCapabilityProcessEnum];
/**
 * Check if a given object implements the ProducerProcessCapability interface.
 */
export declare function instanceOfProducerProcessCapability(value: object): value is ProducerProcessCapability;
export declare function ProducerProcessCapabilityFromJSON(json: any): ProducerProcessCapability;
export declare function ProducerProcessCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerProcessCapability;
export declare function ProducerProcessCapabilityToJSON(json: any): ProducerProcessCapability;
export declare function ProducerProcessCapabilityToJSONTyped(value?: ProducerProcessCapability | null, ignoreDiscriminator?: boolean): any;
