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
import type { ProductMeaningFamilyContext } from './ProductMeaningFamilyContext';
import type { ProductMeaningDecisionPoint } from './ProductMeaningDecisionPoint';
/**
 * Review-safe product meaning grounded against Gnaww-controlled truth.
 * @export
 * @interface GroundedProductMeaning
 */
export interface GroundedProductMeaning {
    /**
     *
     * @type {number}
     * @memberof GroundedProductMeaning
     */
    confidence: number;
    /**
     *
     * @type {GroundedProductMeaningCoverageStateEnum}
     * @memberof GroundedProductMeaning
     */
    coverageState: GroundedProductMeaningCoverageStateEnum;
    /**
     *
     * @type {Array<ProductMeaningDecisionPoint>}
     * @memberof GroundedProductMeaning
     */
    decisionPoints?: Array<ProductMeaningDecisionPoint>;
    /**
     *
     * @type {Array<ProductMeaningFamilyContext>}
     * @memberof GroundedProductMeaning
     */
    familyCandidates?: Array<ProductMeaningFamilyContext>;
    /**
     *
     * @type {GroundedProductMeaningFamilyMappingStateEnum}
     * @memberof GroundedProductMeaning
     */
    familyMappingState: GroundedProductMeaningFamilyMappingStateEnum;
    /**
     *
     * @type {string}
     * @memberof GroundedProductMeaning
     */
    meaningId: string;
    /**
     *
     * @type {string}
     * @memberof GroundedProductMeaning
     */
    rationale: string;
    /**
     *
     * @type {GroundedProductMeaningRequiresReviewEnum}
     * @memberof GroundedProductMeaning
     */
    requiresReview?: GroundedProductMeaningRequiresReviewEnum;
    /**
     *
     * @type {string}
     * @memberof GroundedProductMeaning
     */
    semanticConcept: string;
    /**
     *
     * @type {string}
     * @memberof GroundedProductMeaning
     */
    sourceExpression: string;
}
/**
 * @export
 */
export declare const GroundedProductMeaningCoverageStateEnum: {
    readonly CanonicalCandidates: "canonical_candidates";
    readonly KnownConceptCoverageGap: "known_concept_coverage_gap";
};
export type GroundedProductMeaningCoverageStateEnum = typeof GroundedProductMeaningCoverageStateEnum[keyof typeof GroundedProductMeaningCoverageStateEnum];
/**
 * @export
 */
export declare const GroundedProductMeaningFamilyMappingStateEnum: {
    readonly DirectEquivalence: "direct_equivalence";
    readonly DependsOnDecision: "depends_on_decision";
    readonly NoSafeMapping: "no_safe_mapping";
};
export type GroundedProductMeaningFamilyMappingStateEnum = typeof GroundedProductMeaningFamilyMappingStateEnum[keyof typeof GroundedProductMeaningFamilyMappingStateEnum];
/**
 * @export
 */
export declare const GroundedProductMeaningRequiresReviewEnum: {
    readonly True: true;
};
export type GroundedProductMeaningRequiresReviewEnum = typeof GroundedProductMeaningRequiresReviewEnum[keyof typeof GroundedProductMeaningRequiresReviewEnum];
/**
 * Check if a given object implements the GroundedProductMeaning interface.
 */
export declare function instanceOfGroundedProductMeaning(value: object): value is GroundedProductMeaning;
export declare function GroundedProductMeaningFromJSON(json: any): GroundedProductMeaning;
export declare function GroundedProductMeaningFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroundedProductMeaning;
export declare function GroundedProductMeaningToJSON(json: any): GroundedProductMeaning;
export declare function GroundedProductMeaningToJSONTyped(value?: GroundedProductMeaning | null, ignoreDiscriminator?: boolean): any;
