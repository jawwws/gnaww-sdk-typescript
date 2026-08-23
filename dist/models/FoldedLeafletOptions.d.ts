/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { FinishedSize } from './FinishedSize';
/**
 * Folded leaflet production options.
 * @export
 * @interface FoldedLeafletOptions
 */
export interface FoldedLeafletOptions {
    /**
     *
     * @type {FinishedSize}
     * @memberof FoldedLeafletOptions
     */
    finishedSize?: FinishedSize;
    /**
     *
     * @type {FinishedSize}
     * @memberof FoldedLeafletOptions
     */
    flatSize?: FinishedSize;
    /**
     *
     * @type {FoldedLeafletOptionsFoldPatternEnum}
     * @memberof FoldedLeafletOptions
     */
    foldPattern?: FoldedLeafletOptionsFoldPatternEnum;
    /**
     *
     * @type {number}
     * @memberof FoldedLeafletOptions
     */
    panels?: number | null;
}
/**
 * @export
 */
export declare const FoldedLeafletOptionsFoldPatternEnum: {
    readonly HalfFold: "half_fold";
    readonly TriFold: "tri_fold";
    readonly ZFold: "z_fold";
    readonly GateFold: "gate_fold";
    readonly RollFold: "roll_fold";
    readonly CrossFold: "cross_fold";
    readonly Unknown: "unknown";
};
export type FoldedLeafletOptionsFoldPatternEnum = typeof FoldedLeafletOptionsFoldPatternEnum[keyof typeof FoldedLeafletOptionsFoldPatternEnum];
/**
 * Check if a given object implements the FoldedLeafletOptions interface.
 */
export declare function instanceOfFoldedLeafletOptions(value: object): value is FoldedLeafletOptions;
export declare function FoldedLeafletOptionsFromJSON(json: any): FoldedLeafletOptions;
export declare function FoldedLeafletOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FoldedLeafletOptions;
export declare function FoldedLeafletOptionsToJSON(json: any): FoldedLeafletOptions;
export declare function FoldedLeafletOptionsToJSONTyped(value?: FoldedLeafletOptions | null, ignoreDiscriminator?: boolean): any;
