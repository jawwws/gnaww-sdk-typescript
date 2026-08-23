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
 * Supported repeat behaviour for printed fabric.
 * @export
 * @interface RepeatPatternCapability
 */
export interface RepeatPatternCapability {
    /**
     *
     * @type {number}
     * @memberof RepeatPatternCapability
     */
    maximumHeightMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof RepeatPatternCapability
     */
    maximumWidthMm?: number | null;
    /**
     *
     * @type {Array<RepeatPatternCapabilityTypesEnum>}
     * @memberof RepeatPatternCapability
     */
    types?: Array<RepeatPatternCapabilityTypesEnum>;
}
/**
 * @export
 */
export declare const RepeatPatternCapabilityTypesEnum: {
    readonly None: "none";
    readonly Straight: "straight";
    readonly HalfDrop: "half_drop";
    readonly Mirror: "mirror";
    readonly Seamless: "seamless";
    readonly Engineered: "engineered";
    readonly Unknown: "unknown";
};
export type RepeatPatternCapabilityTypesEnum = typeof RepeatPatternCapabilityTypesEnum[keyof typeof RepeatPatternCapabilityTypesEnum];
/**
 * Check if a given object implements the RepeatPatternCapability interface.
 */
export declare function instanceOfRepeatPatternCapability(value: object): value is RepeatPatternCapability;
export declare function RepeatPatternCapabilityFromJSON(json: any): RepeatPatternCapability;
export declare function RepeatPatternCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepeatPatternCapability;
export declare function RepeatPatternCapabilityToJSON(json: any): RepeatPatternCapability;
export declare function RepeatPatternCapabilityToJSONTyped(value?: RepeatPatternCapability | null, ignoreDiscriminator?: boolean): any;
