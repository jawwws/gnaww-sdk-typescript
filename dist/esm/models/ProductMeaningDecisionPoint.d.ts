/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * A production-changing distinction that still needs confirmation.
 * @export
 * @interface ProductMeaningDecisionPoint
 */
export interface ProductMeaningDecisionPoint {
    /**
     *
     * @type {boolean}
     * @memberof ProductMeaningDecisionPoint
     */
    affectsFamilyMapping?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof ProductMeaningDecisionPoint
     */
    options: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ProductMeaningDecisionPoint
     */
    question: string;
    /**
     *
     * @type {string}
     * @memberof ProductMeaningDecisionPoint
     */
    rationale: string;
}
/**
 * Check if a given object implements the ProductMeaningDecisionPoint interface.
 */
export declare function instanceOfProductMeaningDecisionPoint(value: object): value is ProductMeaningDecisionPoint;
export declare function ProductMeaningDecisionPointFromJSON(json: any): ProductMeaningDecisionPoint;
export declare function ProductMeaningDecisionPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductMeaningDecisionPoint;
export declare function ProductMeaningDecisionPointToJSON(json: any): ProductMeaningDecisionPoint;
export declare function ProductMeaningDecisionPointToJSONTyped(value?: ProductMeaningDecisionPoint | null, ignoreDiscriminator?: boolean): any;
