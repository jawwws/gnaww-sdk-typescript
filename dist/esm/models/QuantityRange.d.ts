/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Known quantity constraints, including partial source evidence.
 * @export
 * @interface QuantityRange
 */
export interface QuantityRange {
    /**
     *
     * @type {Array<number>}
     * @memberof QuantityRange
     */
    increments?: Array<number>;
    /**
     *
     * @type {number}
     * @memberof QuantityRange
     */
    maximum?: number | null;
    /**
     *
     * @type {number}
     * @memberof QuantityRange
     */
    minimum?: number | null;
    /**
     *
     * @type {number}
     * @memberof QuantityRange
     */
    step?: number | null;
}
/**
 * Check if a given object implements the QuantityRange interface.
 */
export declare function instanceOfQuantityRange(value: object): value is QuantityRange;
export declare function QuantityRangeFromJSON(json: any): QuantityRange;
export declare function QuantityRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuantityRange;
export declare function QuantityRangeToJSON(json: any): QuantityRange;
export declare function QuantityRangeToJSONTyped(value?: QuantityRange | null, ignoreDiscriminator?: boolean): any;
