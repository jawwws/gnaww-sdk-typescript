/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { PublicInterpretationQuestionOption } from './PublicInterpretationQuestionOption';
import type { PublicInterpretationScope } from './PublicInterpretationScope';
/**
 * Stable scoped question without exposing private canonical field paths.
 * @export
 * @interface PublicInterpretationQuestion
 */
export interface PublicInterpretationQuestion {
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationQuestion
     */
    currentValue?: string | null;
    /**
     *
     * @type {PublicInterpretationQuestionInputTypeEnum}
     * @memberof PublicInterpretationQuestion
     */
    inputType?: PublicInterpretationQuestionInputTypeEnum;
    /**
     *
     * @type {Array<PublicInterpretationQuestionOption>}
     * @memberof PublicInterpretationQuestion
     */
    options?: Array<PublicInterpretationQuestionOption>;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationQuestion
     */
    question: string;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationQuestion
     */
    questionId: string;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationQuestion
     */
    rationale: string;
    /**
     *
     * @type {boolean}
     * @memberof PublicInterpretationQuestion
     */
    required?: boolean;
    /**
     *
     * @type {PublicInterpretationScope}
     * @memberof PublicInterpretationQuestion
     */
    scope: PublicInterpretationScope;
    /**
     *
     * @type {PublicInterpretationQuestionSourceEnum}
     * @memberof PublicInterpretationQuestion
     */
    source: PublicInterpretationQuestionSourceEnum;
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationQuestion
     */
    suggestedValue?: string | null;
}
/**
 * @export
 */
export declare const PublicInterpretationQuestionInputTypeEnum: {
    readonly SingleSelect: "single_select";
    readonly Text: "text";
    readonly Integer: "integer";
};
export type PublicInterpretationQuestionInputTypeEnum = typeof PublicInterpretationQuestionInputTypeEnum[keyof typeof PublicInterpretationQuestionInputTypeEnum];
/**
 * @export
 */
export declare const PublicInterpretationQuestionSourceEnum: {
    readonly UseRequirement: "use_requirement";
    readonly CanonicalField: "canonical_field";
    readonly FulfilmentRequirement: "fulfilment_requirement";
    readonly Intent: "intent";
};
export type PublicInterpretationQuestionSourceEnum = typeof PublicInterpretationQuestionSourceEnum[keyof typeof PublicInterpretationQuestionSourceEnum];
/**
 * Check if a given object implements the PublicInterpretationQuestion interface.
 */
export declare function instanceOfPublicInterpretationQuestion(value: object): value is PublicInterpretationQuestion;
export declare function PublicInterpretationQuestionFromJSON(json: any): PublicInterpretationQuestion;
export declare function PublicInterpretationQuestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationQuestion;
export declare function PublicInterpretationQuestionToJSON(json: any): PublicInterpretationQuestion;
export declare function PublicInterpretationQuestionToJSONTyped(value?: PublicInterpretationQuestion | null, ignoreDiscriminator?: boolean): any;
