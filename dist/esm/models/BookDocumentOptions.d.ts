/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
/**
 * Book, booklet and document production options.
 * @export
 * @interface BookDocumentOptions
 */
export interface BookDocumentOptions {
    /**
     *
     * @type {BookDocumentOptionsBindingMethodEnum}
     * @memberof BookDocumentOptions
     */
    bindingMethod?: BookDocumentOptionsBindingMethodEnum;
    /**
     *
     * @type {string}
     * @memberof BookDocumentOptions
     */
    coverComponentId?: string | null;
    /**
     *
     * @type {number}
     * @memberof BookDocumentOptions
     */
    pageCount?: number | null;
    /**
     *
     * @type {number}
     * @memberof BookDocumentOptions
     */
    paginationMultiple?: number | null;
    /**
     *
     * @type {number}
     * @memberof BookDocumentOptions
     */
    spineWidthMm?: number | null;
    /**
     *
     * @type {string}
     * @memberof BookDocumentOptions
     */
    textComponentId?: string | null;
}
/**
 * @export
 */
export declare const BookDocumentOptionsBindingMethodEnum: {
    readonly SaddleStitched: "saddle_stitched";
    readonly PerfectBound: "perfect_bound";
    readonly WireBound: "wire_bound";
    readonly CaseBound: "case_bound";
    readonly Unknown: "unknown";
};
export type BookDocumentOptionsBindingMethodEnum = typeof BookDocumentOptionsBindingMethodEnum[keyof typeof BookDocumentOptionsBindingMethodEnum];
/**
 * Check if a given object implements the BookDocumentOptions interface.
 */
export declare function instanceOfBookDocumentOptions(value: object): value is BookDocumentOptions;
export declare function BookDocumentOptionsFromJSON(json: any): BookDocumentOptions;
export declare function BookDocumentOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookDocumentOptions;
export declare function BookDocumentOptionsToJSON(json: any): BookDocumentOptions;
export declare function BookDocumentOptionsToJSONTyped(value?: BookDocumentOptions | null, ignoreDiscriminator?: boolean): any;
