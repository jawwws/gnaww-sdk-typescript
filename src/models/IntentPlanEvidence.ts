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
 * Source evidence or deterministic rule supporting an intent decision.
 * @export
 * @interface IntentPlanEvidence
 */
export interface IntentPlanEvidence {
    /**
     *
     * @type {IntentPlanEvidenceEvidenceTypeEnum}
     * @memberof IntentPlanEvidence
     */
    evidenceType: IntentPlanEvidenceEvidenceTypeEnum;
    /**
     *
     * @type {string}
     * @memberof IntentPlanEvidence
     */
    field?: string | null;
    /**
     *
     * @type {string}
     * @memberof IntentPlanEvidence
     */
    sourceReference?: string | null;
    /**
     *
     * @type {string}
     * @memberof IntentPlanEvidence
     */
    text: string;
}


/**
 * @export
 */
export const IntentPlanEvidenceEvidenceTypeEnum = {
    SourceQuote: 'source_quote',
    ProductSignal: 'product_signal',
    OutcomeSignal: 'outcome_signal',
    Rule: 'rule'
} as const;
export type IntentPlanEvidenceEvidenceTypeEnum = typeof IntentPlanEvidenceEvidenceTypeEnum[keyof typeof IntentPlanEvidenceEvidenceTypeEnum];


/**
 * Check if a given object implements the IntentPlanEvidence interface.
 */
export function instanceOfIntentPlanEvidence(value: object): value is IntentPlanEvidence {
    if (!('evidenceType' in value) || value['evidenceType'] === undefined) return false;
    if (!('text' in value) || value['text'] === undefined) return false;
    return true;
}

export function IntentPlanEvidenceFromJSON(json: any): IntentPlanEvidence {
    return IntentPlanEvidenceFromJSONTyped(json, false);
}

export function IntentPlanEvidenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntentPlanEvidence {
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

export function IntentPlanEvidenceToJSON(json: any): IntentPlanEvidence {
    return IntentPlanEvidenceToJSONTyped(json, false);
}

export function IntentPlanEvidenceToJSONTyped(value?: IntentPlanEvidence | null, ignoreDiscriminator: boolean = false): any {
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
