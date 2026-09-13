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
 * @interface NumericTolerance
 */
export interface NumericTolerance {
    /**
     *
     * @type {number}
     * @memberof NumericTolerance
     */
    maximum?: number | null;
    /**
     *
     * @type {number}
     * @memberof NumericTolerance
     */
    minimum?: number | null;
    /**
     *
     * @type {number}
     * @memberof NumericTolerance
     */
    target?: number | null;
    /**
     *
     * @type {string}
     * @memberof NumericTolerance
     */
    unit: string;
}
/**
 * Check if a given object implements the NumericTolerance interface.
 */
export declare function instanceOfNumericTolerance(value: object): value is NumericTolerance;
export declare function NumericToleranceFromJSON(json: any): NumericTolerance;
export declare function NumericToleranceFromJSONTyped(json: any, ignoreDiscriminator: boolean): NumericTolerance;
export declare function NumericToleranceToJSON(json: any): NumericTolerance;
export declare function NumericToleranceToJSONTyped(value?: NumericTolerance | null, ignoreDiscriminator?: boolean): any;
