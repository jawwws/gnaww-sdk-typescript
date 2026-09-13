/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Requested finished-unit quantity without legacy variable-data flattening.
 * @export
 * @interface ManufacturingQuantity
 */
export interface ManufacturingQuantity {
    /**
     *
     * @type {number}
     * @memberof ManufacturingQuantity
     */
    units?: number | null;
}
/**
 * Check if a given object implements the ManufacturingQuantity interface.
 */
export declare function instanceOfManufacturingQuantity(value: object): value is ManufacturingQuantity;
export declare function ManufacturingQuantityFromJSON(json: any): ManufacturingQuantity;
export declare function ManufacturingQuantityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingQuantity;
export declare function ManufacturingQuantityToJSON(json: any): ManufacturingQuantity;
export declare function ManufacturingQuantityToJSONTyped(value?: ManufacturingQuantity | null, ignoreDiscriminator?: boolean): any;
