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
import type { DimensionCapability } from './DimensionCapability';
/**
 * Supported folded leaflet options for a producer product.
 * @export
 * @interface ProducerFoldedLeafletOptions
 */
export interface ProducerFoldedLeafletOptions {
    /**
     *
     * @type {Array<DimensionCapability>}
     * @memberof ProducerFoldedLeafletOptions
     */
    finishedSizes?: Array<DimensionCapability>;
    /**
     *
     * @type {Array<DimensionCapability>}
     * @memberof ProducerFoldedLeafletOptions
     */
    flatSizes?: Array<DimensionCapability>;
    /**
     *
     * @type {Array<ProducerFoldedLeafletOptionsFoldPatternsEnum>}
     * @memberof ProducerFoldedLeafletOptions
     */
    foldPatterns?: Array<ProducerFoldedLeafletOptionsFoldPatternsEnum>;
    /**
     *
     * @type {Array<number>}
     * @memberof ProducerFoldedLeafletOptions
     */
    panelCounts?: Array<number>;
}
/**
 * @export
 */
export declare const ProducerFoldedLeafletOptionsFoldPatternsEnum: {
    readonly HalfFold: "half_fold";
    readonly TriFold: "tri_fold";
    readonly ZFold: "z_fold";
    readonly GateFold: "gate_fold";
    readonly RollFold: "roll_fold";
    readonly CrossFold: "cross_fold";
    readonly Unknown: "unknown";
};
export type ProducerFoldedLeafletOptionsFoldPatternsEnum = typeof ProducerFoldedLeafletOptionsFoldPatternsEnum[keyof typeof ProducerFoldedLeafletOptionsFoldPatternsEnum];
/**
 * Check if a given object implements the ProducerFoldedLeafletOptions interface.
 */
export declare function instanceOfProducerFoldedLeafletOptions(value: object): value is ProducerFoldedLeafletOptions;
export declare function ProducerFoldedLeafletOptionsFromJSON(json: any): ProducerFoldedLeafletOptions;
export declare function ProducerFoldedLeafletOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerFoldedLeafletOptions;
export declare function ProducerFoldedLeafletOptionsToJSON(json: any): ProducerFoldedLeafletOptions;
export declare function ProducerFoldedLeafletOptionsToJSONTyped(value?: ProducerFoldedLeafletOptions | null, ignoreDiscriminator?: boolean): any;
