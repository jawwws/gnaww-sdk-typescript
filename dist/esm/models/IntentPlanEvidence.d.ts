/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
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
export declare const IntentPlanEvidenceEvidenceTypeEnum: {
    readonly SourceQuote: "source_quote";
    readonly ProductSignal: "product_signal";
    readonly OutcomeSignal: "outcome_signal";
    readonly Rule: "rule";
};
export type IntentPlanEvidenceEvidenceTypeEnum = typeof IntentPlanEvidenceEvidenceTypeEnum[keyof typeof IntentPlanEvidenceEvidenceTypeEnum];
/**
 * Check if a given object implements the IntentPlanEvidence interface.
 */
export declare function instanceOfIntentPlanEvidence(value: object): value is IntentPlanEvidence;
export declare function IntentPlanEvidenceFromJSON(json: any): IntentPlanEvidence;
export declare function IntentPlanEvidenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntentPlanEvidence;
export declare function IntentPlanEvidenceToJSON(json: any): IntentPlanEvidence;
export declare function IntentPlanEvidenceToJSONTyped(value?: IntentPlanEvidence | null, ignoreDiscriminator?: boolean): any;
