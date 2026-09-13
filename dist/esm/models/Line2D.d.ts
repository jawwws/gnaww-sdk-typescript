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
 * Line segment in a component-local millimetre coordinate system.
 * @export
 * @interface Line2D
 */
export interface Line2D {
    /**
     *
     * @type {Point2D}
     * @memberof Line2D
     */
    end: Point2D;
    /**
     *
     * @type {Line2DKindEnum}
     * @memberof Line2D
     */
    kind?: Line2DKindEnum;
    /**
     *
     * @type {Point2D}
     * @memberof Line2D
     */
    start: Point2D;
}
/**
 * @export
 */
export declare const Line2DKindEnum: {
    readonly Line: "line";
};
export type Line2DKindEnum = typeof Line2DKindEnum[keyof typeof Line2DKindEnum];
/**
 * Check if a given object implements the Line2D interface.
 */
export declare function instanceOfLine2D(value: object): value is Line2D;
export declare function Line2DFromJSON(json: any): Line2D;
export declare function Line2DFromJSONTyped(json: any, ignoreDiscriminator: boolean): Line2D;
export declare function Line2DToJSON(json: any): Line2D;
export declare function Line2DToJSONTyped(value?: Line2D | null, ignoreDiscriminator?: boolean): any;
