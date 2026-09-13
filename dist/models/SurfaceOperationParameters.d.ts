/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 *
 * @export
 * @interface SurfaceOperationParameters
 */
export interface SurfaceOperationParameters {
    /**
     *
     * @type {string}
     * @memberof SurfaceOperationParameters
     */
    colour?: string | null;
    /**
     *
     * @type {string}
     * @memberof SurfaceOperationParameters
     */
    finish?: string | null;
    /**
     *
     * @type {SurfaceOperationParametersKindEnum}
     * @memberof SurfaceOperationParameters
     */
    kind?: SurfaceOperationParametersKindEnum;
    /**
     *
     * @type {string}
     * @memberof SurfaceOperationParameters
     */
    material?: string | null;
}
/**
 * @export
 */
export declare const SurfaceOperationParametersKindEnum: {
    readonly Surface: "surface";
};
export type SurfaceOperationParametersKindEnum = typeof SurfaceOperationParametersKindEnum[keyof typeof SurfaceOperationParametersKindEnum];
/**
 * Check if a given object implements the SurfaceOperationParameters interface.
 */
export declare function instanceOfSurfaceOperationParameters(value: object): value is SurfaceOperationParameters;
export declare function SurfaceOperationParametersFromJSON(json: any): SurfaceOperationParameters;
export declare function SurfaceOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): SurfaceOperationParameters;
export declare function SurfaceOperationParametersToJSON(json: any): SurfaceOperationParameters;
export declare function SurfaceOperationParametersToJSONTyped(value?: SurfaceOperationParameters | null, ignoreDiscriminator?: boolean): any;
