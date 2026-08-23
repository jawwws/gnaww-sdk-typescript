/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
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
export declare const ProductPackBenchmarkReferenceEvidenceStatusEnum: {
    readonly CuratedBaseline: "curated_baseline";
    readonly ObservedIntent: "observed_intent";
    readonly ConfirmedOutcome: "confirmed_outcome";
    readonly Empirical: "empirical";
};
export type ProductPackBenchmarkReferenceEvidenceStatusEnum = typeof ProductPackBenchmarkReferenceEvidenceStatusEnum[keyof typeof ProductPackBenchmarkReferenceEvidenceStatusEnum];
/**
 * Check if a given object implements the ProductPackBenchmarkReference interface.
 */
export declare function instanceOfProductPackBenchmarkReference(value: object): value is ProductPackBenchmarkReference;
export declare function ProductPackBenchmarkReferenceFromJSON(json: any): ProductPackBenchmarkReference;
export declare function ProductPackBenchmarkReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPackBenchmarkReference;
export declare function ProductPackBenchmarkReferenceToJSON(json: any): ProductPackBenchmarkReference;
export declare function ProductPackBenchmarkReferenceToJSONTyped(value?: ProductPackBenchmarkReference | null, ignoreDiscriminator?: boolean): any;
