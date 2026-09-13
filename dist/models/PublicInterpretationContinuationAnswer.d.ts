/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * One answer referencing a stable public question identity.
 * @export
 * @interface PublicInterpretationContinuationAnswer
 */
export interface PublicInterpretationContinuationAnswer {
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationContinuationAnswer
     */
    questionId: string;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationContinuationAnswer
     */
    value: string;
}
/**
 * Check if a given object implements the PublicInterpretationContinuationAnswer interface.
 */
export declare function instanceOfPublicInterpretationContinuationAnswer(value: object): value is PublicInterpretationContinuationAnswer;
export declare function PublicInterpretationContinuationAnswerFromJSON(json: any): PublicInterpretationContinuationAnswer;
export declare function PublicInterpretationContinuationAnswerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationContinuationAnswer;
export declare function PublicInterpretationContinuationAnswerToJSON(json: any): PublicInterpretationContinuationAnswer;
export declare function PublicInterpretationContinuationAnswerToJSONTyped(value?: PublicInterpretationContinuationAnswer | null, ignoreDiscriminator?: boolean): any;
