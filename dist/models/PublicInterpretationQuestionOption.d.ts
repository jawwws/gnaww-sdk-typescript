/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * One controlled option for a public clarification question.
 * @export
 * @interface PublicInterpretationQuestionOption
 */
export interface PublicInterpretationQuestionOption {
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationQuestionOption
     */
    label: string;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationQuestionOption
     */
    value: string;
}
/**
 * Check if a given object implements the PublicInterpretationQuestionOption interface.
 */
export declare function instanceOfPublicInterpretationQuestionOption(value: object): value is PublicInterpretationQuestionOption;
export declare function PublicInterpretationQuestionOptionFromJSON(json: any): PublicInterpretationQuestionOption;
export declare function PublicInterpretationQuestionOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationQuestionOption;
export declare function PublicInterpretationQuestionOptionToJSON(json: any): PublicInterpretationQuestionOption;
export declare function PublicInterpretationQuestionOptionToJSONTyped(value?: PublicInterpretationQuestionOption | null, ignoreDiscriminator?: boolean): any;
