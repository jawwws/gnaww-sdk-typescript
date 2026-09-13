/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Axis-aligned rectangular region.
 * @export
 * @interface Rectangle2D
 */
export interface Rectangle2D {
    /**
     *
     * @type {number}
     * @memberof Rectangle2D
     */
    heightMm: number;
    /**
     *
     * @type {Rectangle2DKindEnum}
     * @memberof Rectangle2D
     */
    kind?: Rectangle2DKindEnum;
    /**
     *
     * @type {number}
     * @memberof Rectangle2D
     */
    widthMm: number;
    /**
     *
     * @type {number}
     * @memberof Rectangle2D
     */
    xMm: number;
    /**
     *
     * @type {number}
     * @memberof Rectangle2D
     */
    yMm: number;
}
/**
 * @export
 */
export declare const Rectangle2DKindEnum: {
    readonly Rectangle: "rectangle";
};
export type Rectangle2DKindEnum = typeof Rectangle2DKindEnum[keyof typeof Rectangle2DKindEnum];
/**
 * Check if a given object implements the Rectangle2D interface.
 */
export declare function instanceOfRectangle2D(value: object): value is Rectangle2D;
export declare function Rectangle2DFromJSON(json: any): Rectangle2D;
export declare function Rectangle2DFromJSONTyped(json: any, ignoreDiscriminator: boolean): Rectangle2D;
export declare function Rectangle2DToJSON(json: any): Rectangle2D;
export declare function Rectangle2DToJSONTyped(value?: Rectangle2D | null, ignoreDiscriminator?: boolean): any;
