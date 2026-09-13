/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { Line2D } from './Line2D';
/**
 * One fold line in the input component coordinate system.
 * @export
 * @interface FoldLine
 */
export interface FoldLine {
    /**
     *
     * @type {FoldLineAxisEnum}
     * @memberof FoldLine
     */
    axis?: FoldLineAxisEnum | null;
    /**
     *
     * @type {FoldLineDirectionEnum}
     * @memberof FoldLine
     */
    direction?: FoldLineDirectionEnum;
    /**
     *
     * @type {Line2D}
     * @memberof FoldLine
     */
    line: Line2D;
    /**
     *
     * @type {number}
     * @memberof FoldLine
     */
    sequence: number;
}
/**
 * @export
 */
export declare const FoldLineAxisEnum: {
    readonly Vertical: "vertical";
    readonly Horizontal: "horizontal";
    readonly Custom: "custom";
};
export type FoldLineAxisEnum = typeof FoldLineAxisEnum[keyof typeof FoldLineAxisEnum];
/**
 * @export
 */
export declare const FoldLineDirectionEnum: {
    readonly Valley: "valley";
    readonly Mountain: "mountain";
    readonly Unknown: "unknown";
};
export type FoldLineDirectionEnum = typeof FoldLineDirectionEnum[keyof typeof FoldLineDirectionEnum];
/**
 * Check if a given object implements the FoldLine interface.
 */
export declare function instanceOfFoldLine(value: object): value is FoldLine;
export declare function FoldLineFromJSON(json: any): FoldLine;
export declare function FoldLineFromJSONTyped(json: any, ignoreDiscriminator: boolean): FoldLine;
export declare function FoldLineToJSON(json: any): FoldLine;
export declare function FoldLineToJSONTyped(value?: FoldLine | null, ignoreDiscriminator?: boolean): any;
