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
 * One controlled value offered for a guided clarification.
 * @export
 * @interface PublicClarificationOption
 */
export interface PublicClarificationOption {
    /**
     *
     * @type {string}
     * @memberof PublicClarificationOption
     */
    label: string;
    /**
     *
     * @type {string}
     * @memberof PublicClarificationOption
     */
    value: string;
}
/**
 * Check if a given object implements the PublicClarificationOption interface.
 */
export declare function instanceOfPublicClarificationOption(value: object): value is PublicClarificationOption;
export declare function PublicClarificationOptionFromJSON(json: any): PublicClarificationOption;
export declare function PublicClarificationOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicClarificationOption;
export declare function PublicClarificationOptionToJSON(json: any): PublicClarificationOption;
export declare function PublicClarificationOptionToJSONTyped(value?: PublicClarificationOption | null, ignoreDiscriminator?: boolean): any;
