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
export function instanceOfProductMeaningDecisionPoint(value: object): value is ProductMeaningDecisionPoint {
    if (!('options' in value) || value['options'] === undefined) return false;
    if (!('question' in value) || value['question'] === undefined) return false;
    if (!('rationale' in value) || value['rationale'] === undefined) return false;
    return true;
}

export function ProductMeaningDecisionPointFromJSON(json: any): ProductMeaningDecisionPoint {
    return ProductMeaningDecisionPointFromJSONTyped(json, false);
}

export function ProductMeaningDecisionPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductMeaningDecisionPoint {
    if (json == null) {
        return json;
    }
    return {

        'affectsFamilyMapping': json['affects_family_mapping'] == null ? undefined : json['affects_family_mapping'],
        'options': json['options'],
        'question': json['question'],
        'rationale': json['rationale'],
    };
}

export function ProductMeaningDecisionPointToJSON(json: any): ProductMeaningDecisionPoint {
    return ProductMeaningDecisionPointToJSONTyped(json, false);
}

export function ProductMeaningDecisionPointToJSONTyped(value?: ProductMeaningDecisionPoint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'affects_family_mapping': value['affectsFamilyMapping'],
        'options': value['options'],
        'question': value['question'],
        'rationale': value['rationale'],
    };
}
