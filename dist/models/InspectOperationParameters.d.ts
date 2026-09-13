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
 * @interface InspectOperationParameters
 */
export interface InspectOperationParameters {
    /**
     *
     * @type {InspectOperationParametersKindEnum}
     * @memberof InspectOperationParameters
     */
    kind?: InspectOperationParametersKindEnum;
    /**
     *
     * @type {string}
     * @memberof InspectOperationParameters
     */
    method: string;
    /**
     *
     * @type {string}
     * @memberof InspectOperationParameters
     */
    requirement?: string | null;
}
/**
 * @export
 */
export declare const InspectOperationParametersKindEnum: {
    readonly Inspect: "inspect";
};
export type InspectOperationParametersKindEnum = typeof InspectOperationParametersKindEnum[keyof typeof InspectOperationParametersKindEnum];
/**
 * Check if a given object implements the InspectOperationParameters interface.
 */
export declare function instanceOfInspectOperationParameters(value: object): value is InspectOperationParameters;
export declare function InspectOperationParametersFromJSON(json: any): InspectOperationParameters;
export declare function InspectOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): InspectOperationParameters;
export declare function InspectOperationParametersToJSON(json: any): InspectOperationParameters;
export declare function InspectOperationParametersToJSONTyped(value?: InspectOperationParameters | null, ignoreDiscriminator?: boolean): any;
