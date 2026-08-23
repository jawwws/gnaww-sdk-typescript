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
 * Supported print colour capability.
 * @export
 * @interface ColourCapability
 */
export interface ColourCapability {
    /**
     *
     * @type {number}
     * @memberof ColourCapability
     */
    maximumSpotColours?: number | null;
    /**
     *
     * @type {Array<ColourCapabilityModesEnum>}
     * @memberof ColourCapability
     */
    modes: Array<ColourCapabilityModesEnum>;
    /**
     *
     * @type {boolean}
     * @memberof ColourCapability
     */
    supportsMetallicInk?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ColourCapability
     */
    supportsWhiteInk?: boolean;
}
/**
 * @export
 */
export declare const ColourCapabilityModesEnum: {
    readonly Mono: "mono";
    readonly FullColour: "full_colour";
    readonly Spot: "spot";
    readonly Unknown: "unknown";
};
export type ColourCapabilityModesEnum = typeof ColourCapabilityModesEnum[keyof typeof ColourCapabilityModesEnum];
/**
 * Check if a given object implements the ColourCapability interface.
 */
export declare function instanceOfColourCapability(value: object): value is ColourCapability;
export declare function ColourCapabilityFromJSON(json: any): ColourCapability;
export declare function ColourCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColourCapability;
export declare function ColourCapabilityToJSON(json: any): ColourCapability;
export declare function ColourCapabilityToJSONTyped(value?: ColourCapability | null, ignoreDiscriminator?: boolean): any;
