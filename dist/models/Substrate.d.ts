/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { GrammageRequirement } from './GrammageRequirement';
/**
 * Requested substrate or material.
 * @export
 * @interface Substrate
 */
export interface Substrate {
    /**
     *
     * @type {SubstrateCategoryEnum}
     * @memberof Substrate
     */
    category?: SubstrateCategoryEnum;
    /**
     *
     * @type {SubstrateFinishEnum}
     * @memberof Substrate
     */
    finish?: SubstrateFinishEnum;
    /**
     *
     * @type {GrammageRequirement}
     * @memberof Substrate
     */
    grammageRequirement?: GrammageRequirement | null;
    /**
     *
     * @type {string}
     * @memberof Substrate
     */
    material?: string | null;
    /**
     *
     * @type {string}
     * @memberof Substrate
     */
    texture?: string | null;
    /**
     *
     * @type {number}
     * @memberof Substrate
     */
    weightGsm?: number | null;
}
/**
 * @export
 */
export declare const SubstrateCategoryEnum: {
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
export type SubstrateCategoryEnum = typeof SubstrateCategoryEnum[keyof typeof SubstrateCategoryEnum];
/**
 * @export
 */
export declare const SubstrateFinishEnum: {
    readonly Silk: "silk";
    readonly Gloss: "gloss";
    readonly Uncoated: "uncoated";
    readonly Linen: "linen";
    readonly Synthetic: "synthetic";
    readonly Textile: "textile";
    readonly Other: "other";
    readonly Unknown: "unknown";
};
export type SubstrateFinishEnum = typeof SubstrateFinishEnum[keyof typeof SubstrateFinishEnum];
/**
 * Check if a given object implements the Substrate interface.
 */
export declare function instanceOfSubstrate(value: object): value is Substrate;
export declare function SubstrateFromJSON(json: any): Substrate;
export declare function SubstrateFromJSONTyped(json: any, ignoreDiscriminator: boolean): Substrate;
export declare function SubstrateToJSON(json: any): Substrate;
export declare function SubstrateToJSONTyped(value?: Substrate | null, ignoreDiscriminator?: boolean): any;
