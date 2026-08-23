"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPackBenchmarkReferenceEvidenceStatusEnum = void 0;
exports.instanceOfProductPackBenchmarkReference = instanceOfProductPackBenchmarkReference;
exports.ProductPackBenchmarkReferenceFromJSON = ProductPackBenchmarkReferenceFromJSON;
exports.ProductPackBenchmarkReferenceFromJSONTyped = ProductPackBenchmarkReferenceFromJSONTyped;
exports.ProductPackBenchmarkReferenceToJSON = ProductPackBenchmarkReferenceToJSON;
exports.ProductPackBenchmarkReferenceToJSONTyped = ProductPackBenchmarkReferenceToJSONTyped;
/**
 * @export
 */
exports.ProductPackBenchmarkReferenceEvidenceStatusEnum = {
    CuratedBaseline: 'curated_baseline',
    ObservedIntent: 'observed_intent',
    ConfirmedOutcome: 'confirmed_outcome',
    Empirical: 'empirical'
};
/**
 * Check if a given object implements the ProductPackBenchmarkReference interface.
 */
function instanceOfProductPackBenchmarkReference(value) {
    if (!('benchmarkId' in value) || value['benchmarkId'] === undefined)
        return false;
    if (!('benchmarkVersion' in value) || value['benchmarkVersion'] === undefined)
        return false;
    if (!('evidenceNotes' in value) || value['evidenceNotes'] === undefined)
        return false;
    if (!('evidenceStatus' in value) || value['evidenceStatus'] === undefined)
        return false;
    if (!('score' in value) || value['score'] === undefined)
        return false;
    if (!('summary' in value) || value['summary'] === undefined)
        return false;
    if (!('title' in value) || value['title'] === undefined)
        return false;
    return true;
}
function ProductPackBenchmarkReferenceFromJSON(json) {
    return ProductPackBenchmarkReferenceFromJSONTyped(json, false);
}
function ProductPackBenchmarkReferenceFromJSONTyped(json, ignoreDiscriminator) {
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
function ProductPackBenchmarkReferenceToJSON(json) {
    return ProductPackBenchmarkReferenceToJSONTyped(json, false);
}
function ProductPackBenchmarkReferenceToJSONTyped(value, ignoreDiscriminator = false) {
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
