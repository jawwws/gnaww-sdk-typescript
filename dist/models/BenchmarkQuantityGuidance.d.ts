/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Non-binding quantity guidance requiring customer confirmation.
 * @export
 * @interface BenchmarkQuantityGuidance
 */
export interface BenchmarkQuantityGuidance {
    /**
     *
     * @type {string}
     * @memberof BenchmarkQuantityGuidance
     */
    basis: string;
    /**
     *
     * @type {number}
     * @memberof BenchmarkQuantityGuidance
     */
    lower?: number | null;
    /**
     *
     * @type {BenchmarkQuantityGuidanceRequiresConfirmationEnum}
     * @memberof BenchmarkQuantityGuidance
     */
    requiresConfirmation?: BenchmarkQuantityGuidanceRequiresConfirmationEnum;
    /**
     *
     * @type {number}
     * @memberof BenchmarkQuantityGuidance
     */
    typical?: number | null;
    /**
     *
     * @type {number}
     * @memberof BenchmarkQuantityGuidance
     */
    upper?: number | null;
}
/**
 * @export
 */
export declare const BenchmarkQuantityGuidanceRequiresConfirmationEnum: {
    readonly True: true;
};
export type BenchmarkQuantityGuidanceRequiresConfirmationEnum = typeof BenchmarkQuantityGuidanceRequiresConfirmationEnum[keyof typeof BenchmarkQuantityGuidanceRequiresConfirmationEnum];
/**
 * Check if a given object implements the BenchmarkQuantityGuidance interface.
 */
export declare function instanceOfBenchmarkQuantityGuidance(value: object): value is BenchmarkQuantityGuidance;
export declare function BenchmarkQuantityGuidanceFromJSON(json: any): BenchmarkQuantityGuidance;
export declare function BenchmarkQuantityGuidanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): BenchmarkQuantityGuidance;
export declare function BenchmarkQuantityGuidanceToJSON(json: any): BenchmarkQuantityGuidance;
export declare function BenchmarkQuantityGuidanceToJSONTyped(value?: BenchmarkQuantityGuidance | null, ignoreDiscriminator?: boolean): any;
