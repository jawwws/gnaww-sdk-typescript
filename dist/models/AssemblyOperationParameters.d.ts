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
 * @interface AssemblyOperationParameters
 */
export interface AssemblyOperationParameters {
    /**
     *
     * @type {string}
     * @memberof AssemblyOperationParameters
     */
    joiningMaterial?: string | null;
    /**
     *
     * @type {AssemblyOperationParametersKindEnum}
     * @memberof AssemblyOperationParameters
     */
    kind?: AssemblyOperationParametersKindEnum;
    /**
     *
     * @type {string}
     * @memberof AssemblyOperationParameters
     */
    method: string;
    /**
     *
     * @type {string}
     * @memberof AssemblyOperationParameters
     */
    resultingComponentId?: string | null;
}
/**
 * @export
 */
export declare const AssemblyOperationParametersKindEnum: {
    readonly Assembly: "assembly";
};
export type AssemblyOperationParametersKindEnum = typeof AssemblyOperationParametersKindEnum[keyof typeof AssemblyOperationParametersKindEnum];
/**
 * Check if a given object implements the AssemblyOperationParameters interface.
 */
export declare function instanceOfAssemblyOperationParameters(value: object): value is AssemblyOperationParameters;
export declare function AssemblyOperationParametersFromJSON(json: any): AssemblyOperationParameters;
export declare function AssemblyOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssemblyOperationParameters;
export declare function AssemblyOperationParametersToJSON(json: any): AssemblyOperationParameters;
export declare function AssemblyOperationParametersToJSONTyped(value?: AssemblyOperationParameters | null, ignoreDiscriminator?: boolean): any;
