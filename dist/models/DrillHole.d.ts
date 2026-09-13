/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { Point2D } from './Point2D';
import type { EdgeRelativePoint } from './EdgeRelativePoint';
/**
 *
 * @export
 * @interface DrillHole
 */
export interface DrillHole {
    /**
     *
     * @type {Point2D}
     * @memberof DrillHole
     */
    centre?: Point2D | null;
    /**
     *
     * @type {number}
     * @memberof DrillHole
     */
    depthMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof DrillHole
     */
    diameterMm?: number | null;
    /**
     *
     * @type {EdgeRelativePoint}
     * @memberof DrillHole
     */
    edgePosition?: EdgeRelativePoint | null;
    /**
     *
     * @type {string}
     * @memberof DrillHole
     */
    geometryAssetRef?: string | null;
    /**
     *
     * @type {number}
     * @memberof DrillHole
     */
    heightMm?: number | null;
    /**
     *
     * @type {DrillHoleShapeEnum}
     * @memberof DrillHole
     */
    shape?: DrillHoleShapeEnum;
    /**
     *
     * @type {DrillHoleStyleEnum}
     * @memberof DrillHole
     */
    style?: DrillHoleStyleEnum;
    /**
     *
     * @type {number}
     * @memberof DrillHole
     */
    widthMm?: number | null;
}
/**
 * @export
 */
export declare const DrillHoleShapeEnum: {
    readonly Circle: "circle";
    readonly Slot: "slot";
    readonly Custom: "custom";
};
export type DrillHoleShapeEnum = typeof DrillHoleShapeEnum[keyof typeof DrillHoleShapeEnum];
/**
 * @export
 */
export declare const DrillHoleStyleEnum: {
    readonly Through: "through";
    readonly Blind: "blind";
    readonly Countersunk: "countersunk";
    readonly Unknown: "unknown";
};
export type DrillHoleStyleEnum = typeof DrillHoleStyleEnum[keyof typeof DrillHoleStyleEnum];
/**
 * Check if a given object implements the DrillHole interface.
 */
export declare function instanceOfDrillHole(value: object): value is DrillHole;
export declare function DrillHoleFromJSON(json: any): DrillHole;
export declare function DrillHoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): DrillHole;
export declare function DrillHoleToJSON(json: any): DrillHole;
export declare function DrillHoleToJSONTyped(value?: DrillHole | null, ignoreDiscriminator?: boolean): any;
