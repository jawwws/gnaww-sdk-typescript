/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */

import { mapValues } from '../runtime';
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
export const PublicUseConditionReviewRequiresConfirmationEnum = {
    True: true
} as const;
export type PublicUseConditionReviewRequiresConfirmationEnum = typeof PublicUseConditionReviewRequiresConfirmationEnum[keyof typeof PublicUseConditionReviewRequiresConfirmationEnum];

/**
 * @export
 */
export const PublicUseConditionReviewTruthStateEnum = {
    SemanticallyProposed: 'semantically_proposed',
    Unresolved: 'unresolved'
} as const;
export type PublicUseConditionReviewTruthStateEnum = typeof PublicUseConditionReviewTruthStateEnum[keyof typeof PublicUseConditionReviewTruthStateEnum];


/**
 * Check if a given object implements the PublicUseConditionReview interface.
 */
export function instanceOfPublicUseConditionReview(value: object): value is PublicUseConditionReview {
    if (!('allowedValues' in value) || value['allowedValues'] === undefined) return false;
    if (!('conditionKey' in value) || value['conditionKey'] === undefined) return false;
    if (!('question' in value) || value['question'] === undefined) return false;
    if (!('rationale' in value) || value['rationale'] === undefined) return false;
    if (!('truthState' in value) || value['truthState'] === undefined) return false;
    return true;
}

export function PublicUseConditionReviewFromJSON(json: any): PublicUseConditionReview {
    return PublicUseConditionReviewFromJSONTyped(json, false);
}

export function PublicUseConditionReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicUseConditionReview {
    if (json == null) {
        return json;
    }
    return {

        'allowedValues': json['allowed_values'],
        'conditionKey': json['condition_key'],
        'proposedValue': json['proposed_value'] == null ? undefined : json['proposed_value'],
        'question': json['question'],
        'rationale': json['rationale'],
        'requiresConfirmation': json['requires_confirmation'] == null ? undefined : json['requires_confirmation'],
        'sourceExpression': json['source_expression'] == null ? undefined : json['source_expression'],
        'truthState': json['truth_state'],
    };
}

export function PublicUseConditionReviewToJSON(json: any): PublicUseConditionReview {
    return PublicUseConditionReviewToJSONTyped(json, false);
}

export function PublicUseConditionReviewToJSONTyped(value?: PublicUseConditionReview | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'allowed_values': value['allowedValues'],
        'condition_key': value['conditionKey'],
        'proposed_value': value['proposedValue'],
        'question': value['question'],
        'rationale': value['rationale'],
        'requires_confirmation': value['requiresConfirmation'],
        'source_expression': value['sourceExpression'],
        'truth_state': value['truthState'],
    };
}
