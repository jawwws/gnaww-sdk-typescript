/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { PublicClarificationOption } from './PublicClarificationOption';
/**
 * One Gnaww-owned question needed to progress buyer demand.
 * @export
 * @interface PublicClarificationQuestion
 */
export interface PublicClarificationQuestion {
    /**
     *
     * @type {string}
     * @memberof PublicClarificationQuestion
     */
    currentValue?: string | null;
    /**
     *
     * @type {string}
     * @memberof PublicClarificationQuestion
     */
    fieldPath: string;
    /**
     *
     * @type {PublicClarificationQuestionInputTypeEnum}
     * @memberof PublicClarificationQuestion
     */
    inputType?: PublicClarificationQuestionInputTypeEnum;
    /**
     *
     * @type {string}
     * @memberof PublicClarificationQuestion
     */
    key: string;
    /**
     *
     * @type {Array<PublicClarificationOption>}
     * @memberof PublicClarificationQuestion
     */
    options?: Array<PublicClarificationOption>;
    /**
     *
     * @type {string}
     * @memberof PublicClarificationQuestion
     */
    question: string;
    /**
     *
     * @type {string}
     * @memberof PublicClarificationQuestion
     */
    rationale: string;
    /**
     *
     * @type {PublicClarificationQuestionRequiredEnum}
     * @memberof PublicClarificationQuestion
     */
    required?: PublicClarificationQuestionRequiredEnum;
    /**
     *
     * @type {PublicClarificationQuestionSourceEnum}
     * @memberof PublicClarificationQuestion
     */
    source: PublicClarificationQuestionSourceEnum;
}
/**
 * @export
 */
export declare const PublicClarificationQuestionInputTypeEnum: {
    readonly SingleSelect: "single_select";
    readonly Text: "text";
    readonly Integer: "integer";
};
export type PublicClarificationQuestionInputTypeEnum = typeof PublicClarificationQuestionInputTypeEnum[keyof typeof PublicClarificationQuestionInputTypeEnum];
/**
 * @export
 */
export declare const PublicClarificationQuestionRequiredEnum: {
    readonly True: true;
};
export type PublicClarificationQuestionRequiredEnum = typeof PublicClarificationQuestionRequiredEnum[keyof typeof PublicClarificationQuestionRequiredEnum];
/**
 * @export
 */
export declare const PublicClarificationQuestionSourceEnum: {
    readonly UseRequirement: "use_requirement";
    readonly CanonicalField: "canonical_field";
    readonly FulfilmentRequirement: "fulfilment_requirement";
};
export type PublicClarificationQuestionSourceEnum = typeof PublicClarificationQuestionSourceEnum[keyof typeof PublicClarificationQuestionSourceEnum];
/**
 * Check if a given object implements the PublicClarificationQuestion interface.
 */
export declare function instanceOfPublicClarificationQuestion(value: object): value is PublicClarificationQuestion;
export declare function PublicClarificationQuestionFromJSON(json: any): PublicClarificationQuestion;
export declare function PublicClarificationQuestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicClarificationQuestion;
export declare function PublicClarificationQuestionToJSON(json: any): PublicClarificationQuestion;
export declare function PublicClarificationQuestionToJSONTyped(value?: PublicClarificationQuestion | null, ignoreDiscriminator?: boolean): any;
