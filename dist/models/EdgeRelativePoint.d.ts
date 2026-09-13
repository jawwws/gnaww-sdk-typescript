/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Point positioned from one horizontal and one vertical component edge.
 * @export
 * @interface EdgeRelativePoint
 */
export interface EdgeRelativePoint {
    /**
     *
     * @type {EdgeRelativePointHorizontalEdgeEnum}
     * @memberof EdgeRelativePoint
     */
    horizontalEdge: EdgeRelativePointHorizontalEdgeEnum;
    /**
     *
     * @type {number}
     * @memberof EdgeRelativePoint
     */
    horizontalOffsetMm: number;
    /**
     *
     * @type {EdgeRelativePointVerticalEdgeEnum}
     * @memberof EdgeRelativePoint
     */
    verticalEdge: EdgeRelativePointVerticalEdgeEnum;
    /**
     *
     * @type {number}
     * @memberof EdgeRelativePoint
     */
    verticalOffsetMm: number;
}
/**
 * @export
 */
export declare const EdgeRelativePointHorizontalEdgeEnum: {
    readonly Left: "left";
    readonly Right: "right";
};
export type EdgeRelativePointHorizontalEdgeEnum = typeof EdgeRelativePointHorizontalEdgeEnum[keyof typeof EdgeRelativePointHorizontalEdgeEnum];
/**
 * @export
 */
export declare const EdgeRelativePointVerticalEdgeEnum: {
    readonly Top: "top";
    readonly Bottom: "bottom";
};
export type EdgeRelativePointVerticalEdgeEnum = typeof EdgeRelativePointVerticalEdgeEnum[keyof typeof EdgeRelativePointVerticalEdgeEnum];
/**
 * Check if a given object implements the EdgeRelativePoint interface.
 */
export declare function instanceOfEdgeRelativePoint(value: object): value is EdgeRelativePoint;
export declare function EdgeRelativePointFromJSON(json: any): EdgeRelativePoint;
export declare function EdgeRelativePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): EdgeRelativePoint;
export declare function EdgeRelativePointToJSON(json: any): EdgeRelativePoint;
export declare function EdgeRelativePointToJSONTyped(value?: EdgeRelativePoint | null, ignoreDiscriminator?: boolean): any;
