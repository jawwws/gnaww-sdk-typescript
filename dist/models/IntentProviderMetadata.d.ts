/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Audit-safe provider metadata without credentials or raw secrets.
 * @export
 * @interface IntentProviderMetadata
 */
export interface IntentProviderMetadata {
    /**
     *
     * @type {number}
     * @memberof IntentProviderMetadata
     */
    inputTokens?: number | null;
    /**
     *
     * @type {IntentProviderMetadataModeEnum}
     * @memberof IntentProviderMetadata
     */
    mode: IntentProviderMetadataModeEnum;
    /**
     *
     * @type {string}
     * @memberof IntentProviderMetadata
     */
    model?: string | null;
    /**
     *
     * @type {number}
     * @memberof IntentProviderMetadata
     */
    outputTokens?: number | null;
    /**
     *
     * @type {string}
     * @memberof IntentProviderMetadata
     */
    provider: string;
    /**
     *
     * @type {string}
     * @memberof IntentProviderMetadata
     */
    requestId?: string | null;
    /**
     *
     * @type {number}
     * @memberof IntentProviderMetadata
     */
    totalTokens?: number | null;
}
/**
 * @export
 */
export declare const IntentProviderMetadataModeEnum: {
    readonly None: "none";
    readonly Fixture: "fixture";
    readonly Live: "live";
};
export type IntentProviderMetadataModeEnum = typeof IntentProviderMetadataModeEnum[keyof typeof IntentProviderMetadataModeEnum];
/**
 * Check if a given object implements the IntentProviderMetadata interface.
 */
export declare function instanceOfIntentProviderMetadata(value: object): value is IntentProviderMetadata;
export declare function IntentProviderMetadataFromJSON(json: any): IntentProviderMetadata;
export declare function IntentProviderMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntentProviderMetadata;
export declare function IntentProviderMetadataToJSON(json: any): IntentProviderMetadata;
export declare function IntentProviderMetadataToJSONTyped(value?: IntentProviderMetadata | null, ignoreDiscriminator?: boolean): any;
