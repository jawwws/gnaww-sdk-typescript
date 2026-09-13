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
 * @interface Value
 */
export interface Value {
}
/**
 * Check if a given object implements the Value interface.
 */
export declare function instanceOfValue(value: object): value is Value;
export declare function ValueFromJSON(json: any): Value;
export declare function ValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): Value;
export declare function ValueToJSON(json: any): Value;
export declare function ValueToJSONTyped(value?: Value | null, ignoreDiscriminator?: boolean): any;
