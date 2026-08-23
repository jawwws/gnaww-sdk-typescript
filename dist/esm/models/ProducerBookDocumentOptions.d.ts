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
 * Supported book, booklet and document options for a producer product.
 * @export
 * @interface ProducerBookDocumentOptions
 */
export interface ProducerBookDocumentOptions {
    /**
     *
     * @type {Array<ProducerBookDocumentOptionsBindingMethodsEnum>}
     * @memberof ProducerBookDocumentOptions
     */
    bindingMethods?: Array<ProducerBookDocumentOptionsBindingMethodsEnum>;
    /**
     *
     * @type {Array<ProducerBookDocumentOptionsCoverComponentRolesEnum>}
     * @memberof ProducerBookDocumentOptions
     */
    coverComponentRoles?: Array<ProducerBookDocumentOptionsCoverComponentRolesEnum>;
    /**
     *
     * @type {number}
     * @memberof ProducerBookDocumentOptions
     */
    maximumPageCount?: number | null;
    /**
     *
     * @type {number}
     * @memberof ProducerBookDocumentOptions
     */
    minimumPageCount?: number | null;
    /**
     *
     * @type {Array<number>}
     * @memberof ProducerBookDocumentOptions
     */
    paginationMultiples?: Array<number>;
    /**
     *
     * @type {Array<ProducerBookDocumentOptionsTextComponentRolesEnum>}
     * @memberof ProducerBookDocumentOptions
     */
    textComponentRoles?: Array<ProducerBookDocumentOptionsTextComponentRolesEnum>;
}
/**
 * @export
 */
export declare const ProducerBookDocumentOptionsBindingMethodsEnum: {
    readonly SaddleStitched: "saddle_stitched";
    readonly PerfectBound: "perfect_bound";
    readonly WireBound: "wire_bound";
    readonly CaseBound: "case_bound";
    readonly Unknown: "unknown";
};
export type ProducerBookDocumentOptionsBindingMethodsEnum = typeof ProducerBookDocumentOptionsBindingMethodsEnum[keyof typeof ProducerBookDocumentOptionsBindingMethodsEnum];
/**
 * @export
 */
export declare const ProducerBookDocumentOptionsCoverComponentRolesEnum: {
    readonly Main: "main";
    readonly Flat: "flat";
    readonly Finished: "finished";
    readonly Cover: "cover";
    readonly Text: "text";
    readonly Insert: "insert";
    readonly Garment: "garment";
    readonly Decoration: "decoration";
    readonly Unknown: "unknown";
};
export type ProducerBookDocumentOptionsCoverComponentRolesEnum = typeof ProducerBookDocumentOptionsCoverComponentRolesEnum[keyof typeof ProducerBookDocumentOptionsCoverComponentRolesEnum];
/**
 * @export
 */
export declare const ProducerBookDocumentOptionsTextComponentRolesEnum: {
    readonly Main: "main";
    readonly Flat: "flat";
    readonly Finished: "finished";
    readonly Cover: "cover";
    readonly Text: "text";
    readonly Insert: "insert";
    readonly Garment: "garment";
    readonly Decoration: "decoration";
    readonly Unknown: "unknown";
};
export type ProducerBookDocumentOptionsTextComponentRolesEnum = typeof ProducerBookDocumentOptionsTextComponentRolesEnum[keyof typeof ProducerBookDocumentOptionsTextComponentRolesEnum];
/**
 * Check if a given object implements the ProducerBookDocumentOptions interface.
 */
export declare function instanceOfProducerBookDocumentOptions(value: object): value is ProducerBookDocumentOptions;
export declare function ProducerBookDocumentOptionsFromJSON(json: any): ProducerBookDocumentOptions;
export declare function ProducerBookDocumentOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerBookDocumentOptions;
export declare function ProducerBookDocumentOptionsToJSON(json: any): ProducerBookDocumentOptions;
export declare function ProducerBookDocumentOptionsToJSONTyped(value?: ProducerBookDocumentOptions | null, ignoreDiscriminator?: boolean): any;
