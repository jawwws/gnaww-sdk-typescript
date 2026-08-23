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
 * One named material inside a material composition.
 * @export
 * @interface MaterialCompositionPart
 */
export interface MaterialCompositionPart {
    /**
     *
     * @type {string}
     * @memberof MaterialCompositionPart
     */
    material: string;
    /**
     *
     * @type {number}
     * @memberof MaterialCompositionPart
     */
    percentage?: number | null;
}
/**
 * Check if a given object implements the MaterialCompositionPart interface.
 */
export declare function instanceOfMaterialCompositionPart(value: object): value is MaterialCompositionPart;
export declare function MaterialCompositionPartFromJSON(json: any): MaterialCompositionPart;
export declare function MaterialCompositionPartFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaterialCompositionPart;
export declare function MaterialCompositionPartToJSON(json: any): MaterialCompositionPart;
export declare function MaterialCompositionPartToJSONTyped(value?: MaterialCompositionPart | null, ignoreDiscriminator?: boolean): any;
