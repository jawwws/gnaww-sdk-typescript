/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { Point2D } from './Point2D';
/**
 * Rectangular repeated drill pattern with one controlled hole geometry.
 * @export
 * @interface RepeatedDrillPattern
 */
export interface RepeatedDrillPattern {
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    columnSpacingMm?: number;
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    columns?: number;
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    depthMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    diameterMm?: number | null;
    /**
     *
     * @type {string}
     * @memberof RepeatedDrillPattern
     */
    geometryAssetRef?: string | null;
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    heightMm?: number | null;
    /**
     *
     * @type {Point2D}
     * @memberof RepeatedDrillPattern
     */
    origin: Point2D;
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    rowSpacingMm?: number;
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    rows?: number;
    /**
     *
     * @type {RepeatedDrillPatternShapeEnum}
     * @memberof RepeatedDrillPattern
     */
    shape?: RepeatedDrillPatternShapeEnum;
    /**
     *
     * @type {RepeatedDrillPatternStyleEnum}
     * @memberof RepeatedDrillPattern
     */
    style?: RepeatedDrillPatternStyleEnum;
    /**
     *
     * @type {number}
     * @memberof RepeatedDrillPattern
     */
    widthMm?: number | null;
}
/**
 * @export
 */
export declare const RepeatedDrillPatternShapeEnum: {
    readonly Circle: "circle";
    readonly Slot: "slot";
    readonly Custom: "custom";
};
export type RepeatedDrillPatternShapeEnum = typeof RepeatedDrillPatternShapeEnum[keyof typeof RepeatedDrillPatternShapeEnum];
/**
 * @export
 */
export declare const RepeatedDrillPatternStyleEnum: {
    readonly Through: "through";
    readonly Blind: "blind";
    readonly Countersunk: "countersunk";
    readonly Unknown: "unknown";
};
export type RepeatedDrillPatternStyleEnum = typeof RepeatedDrillPatternStyleEnum[keyof typeof RepeatedDrillPatternStyleEnum];
/**
 * Check if a given object implements the RepeatedDrillPattern interface.
 */
export declare function instanceOfRepeatedDrillPattern(value: object): value is RepeatedDrillPattern;
export declare function RepeatedDrillPatternFromJSON(json: any): RepeatedDrillPattern;
export declare function RepeatedDrillPatternFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepeatedDrillPattern;
export declare function RepeatedDrillPatternToJSON(json: any): RepeatedDrillPattern;
export declare function RepeatedDrillPatternToJSONTyped(value?: RepeatedDrillPattern | null, ignoreDiscriminator?: boolean): any;
