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
 * @interface ManufacturingAssembly
 */
export interface ManufacturingAssembly {
    /**
     *
     * @type {string}
     * @memberof ManufacturingAssembly
     */
    assemblyId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ManufacturingAssembly
     */
    inputComponentIds: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof ManufacturingAssembly
     */
    operationIds: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ManufacturingAssembly
     */
    outputComponentId?: string | null;
}
/**
 * Check if a given object implements the ManufacturingAssembly interface.
 */
export declare function instanceOfManufacturingAssembly(value: object): value is ManufacturingAssembly;
export declare function ManufacturingAssemblyFromJSON(json: any): ManufacturingAssembly;
export declare function ManufacturingAssemblyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingAssembly;
export declare function ManufacturingAssemblyToJSON(json: any): ManufacturingAssembly;
export declare function ManufacturingAssemblyToJSONTyped(value?: ManufacturingAssembly | null, ignoreDiscriminator?: boolean): any;
