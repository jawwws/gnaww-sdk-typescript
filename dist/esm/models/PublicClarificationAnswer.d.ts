/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * One explicit buyer answer to a Gnaww-owned clarification.
 * @export
 * @interface PublicClarificationAnswer
 */
export interface PublicClarificationAnswer {
    /**
     *
     * @type {string}
     * @memberof PublicClarificationAnswer
     */
    key: string;
    /**
     *
     * @type {string}
     * @memberof PublicClarificationAnswer
     */
    value: string;
}
/**
 * Check if a given object implements the PublicClarificationAnswer interface.
 */
export declare function instanceOfPublicClarificationAnswer(value: object): value is PublicClarificationAnswer;
export declare function PublicClarificationAnswerFromJSON(json: any): PublicClarificationAnswer;
export declare function PublicClarificationAnswerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicClarificationAnswer;
export declare function PublicClarificationAnswerToJSON(json: any): PublicClarificationAnswer;
export declare function PublicClarificationAnswerToJSONTyped(value?: PublicClarificationAnswer | null, ignoreDiscriminator?: boolean): any;
