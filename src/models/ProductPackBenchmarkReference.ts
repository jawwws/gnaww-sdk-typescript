/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
/**
 * Validated benchmark evidence attached by Gnaww.
 * @export
 * @interface ProductPackBenchmarkReference
 */
export interface ProductPackBenchmarkReference {
    /**
     *
     * @type {string}
     * @memberof ProductPackBenchmarkReference
     */
    benchmarkId: string;
    /**
     *
     * @type {string}
     * @memberof ProductPackBenchmarkReference
     */
    benchmarkVersion: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ProductPackBenchmarkReference
     */
    evidenceNotes: Array<string>;
    /**
     *
     * @type {ProductPackBenchmarkReferenceEvidenceStatusEnum}
     * @memberof ProductPackBenchmarkReference
     */
    evidenceStatus: ProductPackBenchmarkReferenceEvidenceStatusEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof ProductPackBenchmarkReference
     */
    matchedSignals?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof ProductPackBenchmarkReference
     */
    score: number;
    /**
     *
     * @type {string}
     * @memberof ProductPackBenchmarkReference
     */
    summary: string;
    /**
     *
     * @type {string}
     * @memberof ProductPackBenchmarkReference
     */
    title: string;
}


/**
 * @export
 */
export const ProductPackBenchmarkReferenceEvidenceStatusEnum = {
    CuratedBaseline: 'curated_baseline',
    ObservedIntent: 'observed_intent',
    ConfirmedOutcome: 'confirmed_outcome',
    Empirical: 'empirical'
} as const;
export type ProductPackBenchmarkReferenceEvidenceStatusEnum = typeof ProductPackBenchmarkReferenceEvidenceStatusEnum[keyof typeof ProductPackBenchmarkReferenceEvidenceStatusEnum];


/**
 * Check if a given object implements the ProductPackBenchmarkReference interface.
 */
export function instanceOfProductPackBenchmarkReference(value: object): value is ProductPackBenchmarkReference {
    if (!('benchmarkId' in value) || value['benchmarkId'] === undefined) return false;
    if (!('benchmarkVersion' in value) || value['benchmarkVersion'] === undefined) return false;
    if (!('evidenceNotes' in value) || value['evidenceNotes'] === undefined) return false;
    if (!('evidenceStatus' in value) || value['evidenceStatus'] === undefined) return false;
    if (!('score' in value) || value['score'] === undefined) return false;
    if (!('summary' in value) || value['summary'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    return true;
}

export function ProductPackBenchmarkReferenceFromJSON(json: any): ProductPackBenchmarkReference {
    return ProductPackBenchmarkReferenceFromJSONTyped(json, false);
}

export function ProductPackBenchmarkReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPackBenchmarkReference {
    if (json == null) {
        return json;
    }
    return {

        'benchmarkId': json['benchmark_id'],
        'benchmarkVersion': json['benchmark_version'],
        'evidenceNotes': json['evidence_notes'],
        'evidenceStatus': json['evidence_status'],
        'matchedSignals': json['matched_signals'] == null ? undefined : json['matched_signals'],
        'score': json['score'],
        'summary': json['summary'],
        'title': json['title'],
    };
}

export function ProductPackBenchmarkReferenceToJSON(json: any): ProductPackBenchmarkReference {
    return ProductPackBenchmarkReferenceToJSONTyped(json, false);
}

export function ProductPackBenchmarkReferenceToJSONTyped(value?: ProductPackBenchmarkReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'benchmark_id': value['benchmarkId'],
        'benchmark_version': value['benchmarkVersion'],
        'evidence_notes': value['evidenceNotes'],
        'evidence_status': value['evidenceStatus'],
        'matched_signals': value['matchedSignals'],
        'score': value['score'],
        'summary': value['summary'],
        'title': value['title'],
    };
}
