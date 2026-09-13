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
 * @interface VariationField
 */
export interface VariationField {
    /**
     *
     * @type {string}
     * @memberof VariationField
     */
    artworkOrAssetRef?: string | null;
    /**
     *
     * @type {VariationFieldDataTypeEnum}
     * @memberof VariationField
     */
    dataType?: VariationFieldDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof VariationField
     */
    fieldKey: string;
}
/**
 * @export
 */
export declare const VariationFieldDataTypeEnum: {
    readonly Text: "text";
    readonly Number: "number";
    readonly Image: "image";
    readonly Code: "code";
    readonly Artwork: "artwork";
    readonly Unknown: "unknown";
};
export type VariationFieldDataTypeEnum = typeof VariationFieldDataTypeEnum[keyof typeof VariationFieldDataTypeEnum];
/**
 * Check if a given object implements the VariationField interface.
 */
export declare function instanceOfVariationField(value: object): value is VariationField;
export declare function VariationFieldFromJSON(json: any): VariationField;
export declare function VariationFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): VariationField;
export declare function VariationFieldToJSON(json: any): VariationField;
export declare function VariationFieldToJSONTyped(value?: VariationField | null, ignoreDiscriminator?: boolean): any;
