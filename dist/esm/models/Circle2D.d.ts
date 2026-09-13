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
 * Circular region or feature.
 * @export
 * @interface Circle2D
 */
export interface Circle2D {
    /**
     *
     * @type {Point2D}
     * @memberof Circle2D
     */
    centre: Point2D;
    /**
     *
     * @type {number}
     * @memberof Circle2D
     */
    diameterMm: number;
    /**
     *
     * @type {Circle2DKindEnum}
     * @memberof Circle2D
     */
    kind?: Circle2DKindEnum;
}
/**
 * @export
 */
export declare const Circle2DKindEnum: {
    readonly Circle: "circle";
};
export type Circle2DKindEnum = typeof Circle2DKindEnum[keyof typeof Circle2DKindEnum];
/**
 * Check if a given object implements the Circle2D interface.
 */
export declare function instanceOfCircle2D(value: object): value is Circle2D;
export declare function Circle2DFromJSON(json: any): Circle2D;
export declare function Circle2DFromJSONTyped(json: any, ignoreDiscriminator: boolean): Circle2D;
export declare function Circle2DToJSON(json: any): Circle2D;
export declare function Circle2DToJSONTyped(value?: Circle2D | null, ignoreDiscriminator?: boolean): any;
