/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Point in a component-local millimetre coordinate system.
 * @export
 * @interface Point2D
 */
export interface Point2D {
    /**
     *
     * @type {Point2DKindEnum}
     * @memberof Point2D
     */
    kind?: Point2DKindEnum;
    /**
     *
     * @type {number}
     * @memberof Point2D
     */
    xMm: number;
    /**
     *
     * @type {number}
     * @memberof Point2D
     */
    yMm: number;
}
/**
 * @export
 */
export declare const Point2DKindEnum: {
    readonly Point: "point";
};
export type Point2DKindEnum = typeof Point2DKindEnum[keyof typeof Point2DKindEnum];
/**
 * Check if a given object implements the Point2D interface.
 */
export declare function instanceOfPoint2D(value: object): value is Point2D;
export declare function Point2DFromJSON(json: any): Point2D;
export declare function Point2DFromJSONTyped(json: any, ignoreDiscriminator: boolean): Point2D;
export declare function Point2DToJSON(json: any): Point2D;
export declare function Point2DToJSONTyped(value?: Point2D | null, ignoreDiscriminator?: boolean): any;
