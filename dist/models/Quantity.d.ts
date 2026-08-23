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
 * Requested production quantity.
 * @export
 * @interface Quantity
 */
export interface Quantity {
    /**
     *
     * @type {number}
     * @memberof Quantity
     */
    units?: number | null;
    /**
     *
     * @type {boolean}
     * @memberof Quantity
     */
    variableData?: boolean;
}
/**
 * Check if a given object implements the Quantity interface.
 */
export declare function instanceOfQuantity(value: object): value is Quantity;
export declare function QuantityFromJSON(json: any): Quantity;
export declare function QuantityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Quantity;
export declare function QuantityToJSON(json: any): Quantity;
export declare function QuantityToJSONTyped(value?: Quantity | null, ignoreDiscriminator?: boolean): any;
