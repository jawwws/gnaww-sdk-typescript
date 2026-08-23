/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
/**
 * One controlled product-use question or grounded semantic proposal.
 * @export
 * @interface PublicUseConditionReview
 */
export interface PublicUseConditionReview {
    /**
     *
     * @type {Array<string>}
     * @memberof PublicUseConditionReview
     */
    allowedValues: Array<string>;
    /**
     *
     * @type {string}
     * @memberof PublicUseConditionReview
     */
    conditionKey: string;
    /**
     *
     * @type {string}
     * @memberof PublicUseConditionReview
     */
    proposedValue?: string | null;
    /**
     *
     * @type {string}
     * @memberof PublicUseConditionReview
     */
    question: string;
    /**
     *
     * @type {string}
     * @memberof PublicUseConditionReview
     */
    rationale: string;
    /**
     *
     * @type {PublicUseConditionReviewRequiresConfirmationEnum}
     * @memberof PublicUseConditionReview
     */
    requiresConfirmation?: PublicUseConditionReviewRequiresConfirmationEnum;
    /**
     *
     * @type {string}
     * @memberof PublicUseConditionReview
     */
    sourceExpression?: string | null;
    /**
     *
     * @type {PublicUseConditionReviewTruthStateEnum}
     * @memberof PublicUseConditionReview
     */
    truthState: PublicUseConditionReviewTruthStateEnum;
}
/**
 * @export
 */
export declare const PublicUseConditionReviewRequiresConfirmationEnum: {
    readonly True: true;
};
export type PublicUseConditionReviewRequiresConfirmationEnum = typeof PublicUseConditionReviewRequiresConfirmationEnum[keyof typeof PublicUseConditionReviewRequiresConfirmationEnum];
/**
 * @export
 */
export declare const PublicUseConditionReviewTruthStateEnum: {
    readonly SemanticallyProposed: "semantically_proposed";
    readonly Unresolved: "unresolved";
};
export type PublicUseConditionReviewTruthStateEnum = typeof PublicUseConditionReviewTruthStateEnum[keyof typeof PublicUseConditionReviewTruthStateEnum];
/**
 * Check if a given object implements the PublicUseConditionReview interface.
 */
export declare function instanceOfPublicUseConditionReview(value: object): value is PublicUseConditionReview;
export declare function PublicUseConditionReviewFromJSON(json: any): PublicUseConditionReview;
export declare function PublicUseConditionReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicUseConditionReview;
export declare function PublicUseConditionReviewToJSON(json: any): PublicUseConditionReview;
export declare function PublicUseConditionReviewToJSONTyped(value?: PublicUseConditionReview | null, ignoreDiscriminator?: boolean): any;
