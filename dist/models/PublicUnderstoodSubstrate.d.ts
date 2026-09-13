/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Deterministically understood material evidence that is not yet canonical GJS.
 * @export
 * @interface PublicUnderstoodSubstrate
 */
export interface PublicUnderstoodSubstrate {
    /**
     *
     * @type {PublicUnderstoodSubstrateCategoryEnum}
     * @memberof PublicUnderstoodSubstrate
     */
    category?: PublicUnderstoodSubstrateCategoryEnum | null;
    /**
     *
     * @type {PublicUnderstoodSubstrateFinishEnum}
     * @memberof PublicUnderstoodSubstrate
     */
    finish?: PublicUnderstoodSubstrateFinishEnum | null;
    /**
     *
     * @type {string}
     * @memberof PublicUnderstoodSubstrate
     */
    material?: string | null;
    /**
     *
     * @type {string}
     * @memberof PublicUnderstoodSubstrate
     */
    texture?: string | null;
    /**
     *
     * @type {number}
     * @memberof PublicUnderstoodSubstrate
     */
    weightGsm?: number | null;
}
/**
 * @export
 */
export declare const PublicUnderstoodSubstrateCategoryEnum: {
    readonly Paper: "paper";
    readonly Board: "board";
    readonly Synthetic: "synthetic";
    readonly Textile: "textile";
    readonly Plastic: "plastic";
    readonly Metal: "metal";
    readonly Ceramic: "ceramic";
    readonly Glass: "glass";
    readonly Wood: "wood";
    readonly Other: "other";
    readonly Unknown: "unknown";
};
export type PublicUnderstoodSubstrateCategoryEnum = typeof PublicUnderstoodSubstrateCategoryEnum[keyof typeof PublicUnderstoodSubstrateCategoryEnum];
/**
 * @export
 */
export declare const PublicUnderstoodSubstrateFinishEnum: {
    readonly Silk: "silk";
    readonly Gloss: "gloss";
    readonly Uncoated: "uncoated";
    readonly Linen: "linen";
    readonly Synthetic: "synthetic";
    readonly Textile: "textile";
    readonly Other: "other";
    readonly Unknown: "unknown";
};
export type PublicUnderstoodSubstrateFinishEnum = typeof PublicUnderstoodSubstrateFinishEnum[keyof typeof PublicUnderstoodSubstrateFinishEnum];
/**
 * Check if a given object implements the PublicUnderstoodSubstrate interface.
 */
export declare function instanceOfPublicUnderstoodSubstrate(value: object): value is PublicUnderstoodSubstrate;
export declare function PublicUnderstoodSubstrateFromJSON(json: any): PublicUnderstoodSubstrate;
export declare function PublicUnderstoodSubstrateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicUnderstoodSubstrate;
export declare function PublicUnderstoodSubstrateToJSON(json: any): PublicUnderstoodSubstrate;
export declare function PublicUnderstoodSubstrateToJSONTyped(value?: PublicUnderstoodSubstrate | null, ignoreDiscriminator?: boolean): any;
