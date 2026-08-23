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
export declare const ProductPackClarificationEvidenceStatusEnum: {
    readonly CuratedBaseline: "curated_baseline";
    readonly ObservedIntent: "observed_intent";
    readonly ConfirmedOutcome: "confirmed_outcome";
    readonly Empirical: "empirical";
    readonly GeneralModelKnowledge: "general_model_knowledge";
};
export type ProductPackClarificationEvidenceStatusEnum = typeof ProductPackClarificationEvidenceStatusEnum[keyof typeof ProductPackClarificationEvidenceStatusEnum];
/**
 * @export
 */
export declare const ProductPackClarificationSourceEnum: {
    readonly Benchmark: "benchmark";
    readonly GeneralModelKnowledge: "general_model_knowledge";
};
export type ProductPackClarificationSourceEnum = typeof ProductPackClarificationSourceEnum[keyof typeof ProductPackClarificationSourceEnum];
/**
 * Check if a given object implements the ProductPackClarification interface.
 */
export declare function instanceOfProductPackClarification(value: object): value is ProductPackClarification;
export declare function ProductPackClarificationFromJSON(json: any): ProductPackClarification;
export declare function ProductPackClarificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPackClarification;
export declare function ProductPackClarificationToJSON(json: any): ProductPackClarification;
export declare function ProductPackClarificationToJSONTyped(value?: ProductPackClarification | null, ignoreDiscriminator?: boolean): any;
