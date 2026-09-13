/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Deterministically understood size evidence that is not yet canonical GJS.
 * @export
 * @interface PublicUnderstoodSize
 */
export interface PublicUnderstoodSize {
    /**
     *
     * @type {number}
     * @memberof PublicUnderstoodSize
     */
    heightMm?: number | null;
    /**
     *
     * @type {PublicUnderstoodSizeOrientationEnum}
     * @memberof PublicUnderstoodSize
     */
    orientation?: PublicUnderstoodSizeOrientationEnum | null;
    /**
     *
     * @type {string}
     * @memberof PublicUnderstoodSize
     */
    standardName?: string | null;
    /**
     *
     * @type {number}
     * @memberof PublicUnderstoodSize
     */
    widthMm?: number | null;
}
/**
 * @export
 */
export declare const PublicUnderstoodSizeOrientationEnum: {
    readonly Portrait: "portrait";
    readonly Landscape: "landscape";
    readonly Square: "square";
};
export type PublicUnderstoodSizeOrientationEnum = typeof PublicUnderstoodSizeOrientationEnum[keyof typeof PublicUnderstoodSizeOrientationEnum];
/**
 * Check if a given object implements the PublicUnderstoodSize interface.
 */
export declare function instanceOfPublicUnderstoodSize(value: object): value is PublicUnderstoodSize;
export declare function PublicUnderstoodSizeFromJSON(json: any): PublicUnderstoodSize;
export declare function PublicUnderstoodSizeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicUnderstoodSize;
export declare function PublicUnderstoodSizeToJSON(json: any): PublicUnderstoodSize;
export declare function PublicUnderstoodSizeToJSONTyped(value?: PublicUnderstoodSize | null, ignoreDiscriminator?: boolean): any;
