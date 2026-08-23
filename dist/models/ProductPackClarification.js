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
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPackClarificationSourceEnum = exports.ProductPackClarificationEvidenceStatusEnum = void 0;
exports.instanceOfProductPackClarification = instanceOfProductPackClarification;
exports.ProductPackClarificationFromJSON = ProductPackClarificationFromJSON;
exports.ProductPackClarificationFromJSONTyped = ProductPackClarificationFromJSONTyped;
exports.ProductPackClarificationToJSON = ProductPackClarificationToJSON;
exports.ProductPackClarificationToJSONTyped = ProductPackClarificationToJSONTyped;
/**
 * @export
 */
exports.ProductPackClarificationEvidenceStatusEnum = {
    CuratedBaseline: 'curated_baseline',
    ObservedIntent: 'observed_intent',
    ConfirmedOutcome: 'confirmed_outcome',
    Empirical: 'empirical',
    GeneralModelKnowledge: 'general_model_knowledge'
};
/**
 * @export
 */
exports.ProductPackClarificationSourceEnum = {
    Benchmark: 'benchmark',
    GeneralModelKnowledge: 'general_model_knowledge'
};
/**
 * Check if a given object implements the ProductPackClarification interface.
 */
function instanceOfProductPackClarification(value) {
    if (!('clarificationKey' in value) || value['clarificationKey'] === undefined)
        return false;
    if (!('evidenceStatus' in value) || value['evidenceStatus'] === undefined)
        return false;
    if (!('question' in value) || value['question'] === undefined)
        return false;
    if (!('rationale' in value) || value['rationale'] === undefined)
        return false;
    if (!('source' in value) || value['source'] === undefined)
        return false;
    return true;
}
function ProductPackClarificationFromJSON(json) {
    return ProductPackClarificationFromJSONTyped(json, false);
}
function ProductPackClarificationFromJSONTyped(json, ignoreDiscriminator) {
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
function ProductPackClarificationToJSON(json) {
    return ProductPackClarificationToJSONTyped(json, false);
}
function ProductPackClarificationToJSONTyped(value, ignoreDiscriminator = false) {
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
