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
 * An exact standard or named physical dimension capability.
 * @export
 * @interface DimensionCapability
 */
export interface DimensionCapability {
    /**
     *
     * @type {number}
     * @memberof DimensionCapability
     */
    depthMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof DimensionCapability
     */
    diameterMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof DimensionCapability
     */
    heightMm?: number | null;
    /**
     *
     * @type {string}
     * @memberof DimensionCapability
     */
    standardName?: string | null;
    /**
     *
     * @type {number}
     * @memberof DimensionCapability
     */
    widthMm?: number | null;
}
/**
 * Check if a given object implements the DimensionCapability interface.
 */
export declare function instanceOfDimensionCapability(value: object): value is DimensionCapability;
export declare function DimensionCapabilityFromJSON(json: any): DimensionCapability;
export declare function DimensionCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): DimensionCapability;
export declare function DimensionCapabilityToJSON(json: any): DimensionCapability;
export declare function DimensionCapabilityToJSONTyped(value?: DimensionCapability | null, ignoreDiscriminator?: boolean): any;
