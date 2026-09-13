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
 * @interface DecorationOperationParameters
 */
export interface DecorationOperationParameters {
    /**
     *
     * @type {DecorationOperationParametersKindEnum}
     * @memberof DecorationOperationParameters
     */
    kind?: DecorationOperationParametersKindEnum;
    /**
     *
     * @type {string}
     * @memberof DecorationOperationParameters
     */
    method: string;
    /**
     *
     * @type {string}
     * @memberof DecorationOperationParameters
     */
    threadOrColourant?: string | null;
}
/**
 * @export
 */
export declare const DecorationOperationParametersKindEnum: {
    readonly Decoration: "decoration";
};
export type DecorationOperationParametersKindEnum = typeof DecorationOperationParametersKindEnum[keyof typeof DecorationOperationParametersKindEnum];
/**
 * Check if a given object implements the DecorationOperationParameters interface.
 */
export declare function instanceOfDecorationOperationParameters(value: object): value is DecorationOperationParameters;
export declare function DecorationOperationParametersFromJSON(json: any): DecorationOperationParameters;
export declare function DecorationOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): DecorationOperationParameters;
export declare function DecorationOperationParametersToJSON(json: any): DecorationOperationParameters;
export declare function DecorationOperationParametersToJSONTyped(value?: DecorationOperationParameters | null, ignoreDiscriminator?: boolean): any;
