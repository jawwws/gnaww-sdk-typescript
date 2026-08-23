/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Finished product size after trimming.
 * @export
 * @interface FinishedSize
 */
export interface FinishedSize {
    /**
     *
     * @type {number}
     * @memberof FinishedSize
     */
    heightMm?: number | null;
    /**
     *
     * @type {FinishedSizeOrientationEnum}
     * @memberof FinishedSize
     */
    orientation?: FinishedSizeOrientationEnum;
    /**
     *
     * @type {string}
     * @memberof FinishedSize
     */
    standardName?: string | null;
    /**
     *
     * @type {number}
     * @memberof FinishedSize
     */
    widthMm?: number | null;
}
/**
 * @export
 */
export declare const FinishedSizeOrientationEnum: {
    readonly Portrait: "portrait";
    readonly Landscape: "landscape";
    readonly Square: "square";
    readonly Unknown: "unknown";
};
export type FinishedSizeOrientationEnum = typeof FinishedSizeOrientationEnum[keyof typeof FinishedSizeOrientationEnum];
/**
 * Check if a given object implements the FinishedSize interface.
 */
export declare function instanceOfFinishedSize(value: object): value is FinishedSize;
export declare function FinishedSizeFromJSON(json: any): FinishedSize;
export declare function FinishedSizeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinishedSize;
export declare function FinishedSizeToJSON(json: any): FinishedSize;
export declare function FinishedSizeToJSONTyped(value?: FinishedSize | null, ignoreDiscriminator?: boolean): any;
