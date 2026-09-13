/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Lossless v0.4 envelope for details awaiting typed v0.5 migration.
 * @export
 * @interface LegacyOperationParameters
 */
export interface LegacyOperationParameters {
    /**
     *
     * @type {LegacyOperationParametersKindEnum}
     * @memberof LegacyOperationParameters
     */
    kind?: LegacyOperationParametersKindEnum;
    /**
     *
     * @type {string}
     * @memberof LegacyOperationParameters
     */
    sourceName: string;
    /**
     *
     * @type {string}
     * @memberof LegacyOperationParameters
     */
    sourceNotes?: string | null;
    /**
     *
     * @type {string}
     * @memberof LegacyOperationParameters
     */
    sourceProcess?: string | null;
}
/**
 * @export
 */
export declare const LegacyOperationParametersKindEnum: {
    readonly Legacy: "legacy";
};
export type LegacyOperationParametersKindEnum = typeof LegacyOperationParametersKindEnum[keyof typeof LegacyOperationParametersKindEnum];
/**
 * Check if a given object implements the LegacyOperationParameters interface.
 */
export declare function instanceOfLegacyOperationParameters(value: object): value is LegacyOperationParameters;
export declare function LegacyOperationParametersFromJSON(json: any): LegacyOperationParameters;
export declare function LegacyOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): LegacyOperationParameters;
export declare function LegacyOperationParametersToJSON(json: any): LegacyOperationParameters;
export declare function LegacyOperationParametersToJSONTyped(value?: LegacyOperationParameters | null, ignoreDiscriminator?: boolean): any;
