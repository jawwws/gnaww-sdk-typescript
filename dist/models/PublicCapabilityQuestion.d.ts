/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { PublicInterpretationScope } from './PublicInterpretationScope';
/**
 * A controlled capability-question branch, without implying an Order.
 * @export
 * @interface PublicCapabilityQuestion
 */
export interface PublicCapabilityQuestion {
    /**
     *
     * @type {string}
     * @memberof PublicCapabilityQuestion
     */
    question: string;
    /**
     *
     * @type {string}
     * @memberof PublicCapabilityQuestion
     */
    questionId: string;
    /**
     *
     * @type {PublicInterpretationScope}
     * @memberof PublicCapabilityQuestion
     */
    scope: PublicInterpretationScope;
    /**
     *
     * @type {PublicCapabilityQuestionStatusEnum}
     * @memberof PublicCapabilityQuestion
     */
    status: PublicCapabilityQuestionStatusEnum;
}
/**
 * @export
 */
export declare const PublicCapabilityQuestionStatusEnum: {
    readonly NeedsReview: "needs_review";
    readonly ReadyForEvaluation: "ready_for_evaluation";
};
export type PublicCapabilityQuestionStatusEnum = typeof PublicCapabilityQuestionStatusEnum[keyof typeof PublicCapabilityQuestionStatusEnum];
/**
 * Check if a given object implements the PublicCapabilityQuestion interface.
 */
export declare function instanceOfPublicCapabilityQuestion(value: object): value is PublicCapabilityQuestion;
export declare function PublicCapabilityQuestionFromJSON(json: any): PublicCapabilityQuestion;
export declare function PublicCapabilityQuestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicCapabilityQuestion;
export declare function PublicCapabilityQuestionToJSON(json: any): PublicCapabilityQuestion;
export declare function PublicCapabilityQuestionToJSONTyped(value?: PublicCapabilityQuestion | null, ignoreDiscriminator?: boolean): any;
