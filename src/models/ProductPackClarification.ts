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
 * One focused question attached to a product pack.
 * @export
 * @interface ProductPackClarification
 */
export interface ProductPackClarification {
    /**
     *
     * @type {string}
     * @memberof ProductPackClarification
     */
    benchmarkId?: string | null;
    /**
     *
     * @type {string}
     * @memberof ProductPackClarification
     */
    benchmarkVersion?: string | null;
    /**
     *
     * @type {string}
     * @memberof ProductPackClarification
     */
    clarificationKey: string;
    /**
     *
     * @type {ProductPackClarificationEvidenceStatusEnum}
     * @memberof ProductPackClarification
     */
    evidenceStatus: ProductPackClarificationEvidenceStatusEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof ProductPackClarification
     */
    options?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ProductPackClarification
     */
    question: string;
    /**
     *
     * @type {string}
     * @memberof ProductPackClarification
     */
    rationale: string;
    /**
     *
     * @type {boolean}
     * @memberof ProductPackClarification
     */
    required?: boolean;
    /**
     *
     * @type {ProductPackClarificationSourceEnum}
     * @memberof ProductPackClarification
     */
    source: ProductPackClarificationSourceEnum;
}


/**
 * @export
 */
export const ProductPackClarificationEvidenceStatusEnum = {
    CuratedBaseline: 'curated_baseline',
    ObservedIntent: 'observed_intent',
    ConfirmedOutcome: 'confirmed_outcome',
    Empirical: 'empirical',
    GeneralModelKnowledge: 'general_model_knowledge'
} as const;
export type ProductPackClarificationEvidenceStatusEnum = typeof ProductPackClarificationEvidenceStatusEnum[keyof typeof ProductPackClarificationEvidenceStatusEnum];

/**
 * @export
 */
export const ProductPackClarificationSourceEnum = {
    Benchmark: 'benchmark',
    GeneralModelKnowledge: 'general_model_knowledge'
} as const;
export type ProductPackClarificationSourceEnum = typeof ProductPackClarificationSourceEnum[keyof typeof ProductPackClarificationSourceEnum];


/**
 * Check if a given object implements the ProductPackClarification interface.
 */
export function instanceOfProductPackClarification(value: object): value is ProductPackClarification {
    if (!('clarificationKey' in value) || value['clarificationKey'] === undefined) return false;
    if (!('evidenceStatus' in value) || value['evidenceStatus'] === undefined) return false;
    if (!('question' in value) || value['question'] === undefined) return false;
    if (!('rationale' in value) || value['rationale'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function ProductPackClarificationFromJSON(json: any): ProductPackClarification {
    return ProductPackClarificationFromJSONTyped(json, false);
}

export function ProductPackClarificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPackClarification {
    if (json == null) {
        return json;
    }
    return {

        'benchmarkId': json['benchmark_id'] == null ? undefined : json['benchmark_id'],
        'benchmarkVersion': json['benchmark_version'] == null ? undefined : json['benchmark_version'],
        'clarificationKey': json['clarification_key'],
        'evidenceStatus': json['evidence_status'],
        'options': json['options'] == null ? undefined : json['options'],
        'question': json['question'],
        'rationale': json['rationale'],
        'required': json['required'] == null ? undefined : json['required'],
        'source': json['source'],
    };
}

export function ProductPackClarificationToJSON(json: any): ProductPackClarification {
    return ProductPackClarificationToJSONTyped(json, false);
}

export function ProductPackClarificationToJSONTyped(value?: ProductPackClarification | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'benchmark_id': value['benchmarkId'],
        'benchmark_version': value['benchmarkVersion'],
        'clarification_key': value['clarificationKey'],
        'evidence_status': value['evidenceStatus'],
        'options': value['options'],
        'question': value['question'],
        'rationale': value['rationale'],
        'required': value['required'],
        'source': value['source'],
    };
}
