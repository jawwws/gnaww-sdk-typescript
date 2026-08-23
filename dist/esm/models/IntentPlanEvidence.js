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
/**
 * @export
 */
export const IntentPlanEvidenceEvidenceTypeEnum = {
    SourceQuote: 'source_quote',
    ProductSignal: 'product_signal',
    OutcomeSignal: 'outcome_signal',
    Rule: 'rule'
};
/**
 * Check if a given object implements the IntentPlanEvidence interface.
 */
export function instanceOfIntentPlanEvidence(value) {
    if (!('evidenceType' in value) || value['evidenceType'] === undefined)
        return false;
    if (!('text' in value) || value['text'] === undefined)
        return false;
    return true;
}
export function IntentPlanEvidenceFromJSON(json) {
    return IntentPlanEvidenceFromJSONTyped(json, false);
}
export function IntentPlanEvidenceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'evidenceType': json['evidence_type'],
        'field': json['field'] == null ? undefined : json['field'],
        'sourceReference': json['source_reference'] == null ? undefined : json['source_reference'],
        'text': json['text'],
    };
}
export function IntentPlanEvidenceToJSON(json) {
    return IntentPlanEvidenceToJSONTyped(json, false);
}
export function IntentPlanEvidenceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'evidence_type': value['evidenceType'],
        'field': value['field'],
        'source_reference': value['sourceReference'],
        'text': value['text'],
    };
}
