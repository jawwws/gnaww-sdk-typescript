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
 * Supported limits for custom-sized production.
 * @export
 * @interface CustomDimensionCapability
 */
export interface CustomDimensionCapability {
    /**
     *
     * @type {Array<number>}
     * @memberof CustomDimensionCapability
     */
    incrementsMm?: Array<number>;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    maximumDepthMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    maximumDiameterMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    maximumHeightMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    maximumWidthMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    minimumDepthMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    minimumDiameterMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    minimumHeightMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof CustomDimensionCapability
     */
    minimumWidthMm?: number | null;
}
/**
 * Check if a given object implements the CustomDimensionCapability interface.
 */
export declare function instanceOfCustomDimensionCapability(value: object): value is CustomDimensionCapability;
export declare function CustomDimensionCapabilityFromJSON(json: any): CustomDimensionCapability;
export declare function CustomDimensionCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomDimensionCapability;
export declare function CustomDimensionCapabilityToJSON(json: any): CustomDimensionCapability;
export declare function CustomDimensionCapabilityToJSONTyped(value?: CustomDimensionCapability | null, ignoreDiscriminator?: boolean): any;
