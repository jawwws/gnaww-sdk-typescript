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
 * @interface OperationTarget
 */
export interface OperationTarget {
    /**
     *
     * @type {string}
     * @memberof OperationTarget
     */
    componentId: string;
    /**
     *
     * @type {string}
     * @memberof OperationTarget
     */
    regionId?: string | null;
}
/**
 * Check if a given object implements the OperationTarget interface.
 */
export declare function instanceOfOperationTarget(value: object): value is OperationTarget;
export declare function OperationTargetFromJSON(json: any): OperationTarget;
export declare function OperationTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): OperationTarget;
export declare function OperationTargetToJSON(json: any): OperationTarget;
export declare function OperationTargetToJSONTyped(value?: OperationTarget | null, ignoreDiscriminator?: boolean): any;
