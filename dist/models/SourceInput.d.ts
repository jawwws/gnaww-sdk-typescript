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
 * Original requirement data submitted to Gnaww.
 * @export
 * @interface SourceInput
 */
export interface SourceInput {
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof SourceInput
     */
    data?: {
        [key: string]: any;
    } | null;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof SourceInput
     */
    metadata?: {
        [key: string]: any;
    };
    /**
     *
     * @type {string}
     * @memberof SourceInput
     */
    rawText?: string | null;
    /**
     *
     * @type {string}
     * @memberof SourceInput
     */
    reference?: string | null;
    /**
     *
     * @type {string}
     * @memberof SourceInput
     */
    sourceSystem?: string | null;
    /**
     *
     * @type {SourceInputTypeEnum}
     * @memberof SourceInput
     */
    type: SourceInputTypeEnum;
}
/**
 * @export
 */
export declare const SourceInputTypeEnum: {
    readonly NaturalLanguage: "natural_language";
    readonly StructuredJson: "structured_json";
    readonly Email: "email";
    readonly CsvRow: "csv_row";
    readonly StorefrontProduct: "storefront_product";
};
export type SourceInputTypeEnum = typeof SourceInputTypeEnum[keyof typeof SourceInputTypeEnum];
/**
 * Check if a given object implements the SourceInput interface.
 */
export declare function instanceOfSourceInput(value: object): value is SourceInput;
export declare function SourceInputFromJSON(json: any): SourceInput;
export declare function SourceInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceInput;
export declare function SourceInputToJSON(json: any): SourceInput;
export declare function SourceInputToJSONTyped(value?: SourceInput | null, ignoreDiscriminator?: boolean): any;
