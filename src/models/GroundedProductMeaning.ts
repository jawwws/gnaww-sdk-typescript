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
import type { ProductMeaningFamilyContext } from './ProductMeaningFamilyContext';
import {
    ProductMeaningFamilyContextFromJSON,
    ProductMeaningFamilyContextFromJSONTyped,
    ProductMeaningFamilyContextToJSON,
    ProductMeaningFamilyContextToJSONTyped,
} from './ProductMeaningFamilyContext';
import type { ProductMeaningDecisionPoint } from './ProductMeaningDecisionPoint';
import {
    ProductMeaningDecisionPointFromJSON,
    ProductMeaningDecisionPointFromJSONTyped,
    ProductMeaningDecisionPointToJSON,
    ProductMeaningDecisionPointToJSONTyped,
} from './ProductMeaningDecisionPoint';

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
export const GroundedProductMeaningCoverageStateEnum = {
    CanonicalCandidates: 'canonical_candidates',
    KnownConceptCoverageGap: 'known_concept_coverage_gap'
} as const;
export type GroundedProductMeaningCoverageStateEnum = typeof GroundedProductMeaningCoverageStateEnum[keyof typeof GroundedProductMeaningCoverageStateEnum];

/**
 * @export
 */
export const GroundedProductMeaningFamilyMappingStateEnum = {
    DirectEquivalence: 'direct_equivalence',
    DependsOnDecision: 'depends_on_decision',
    NoSafeMapping: 'no_safe_mapping'
} as const;
export type GroundedProductMeaningFamilyMappingStateEnum = typeof GroundedProductMeaningFamilyMappingStateEnum[keyof typeof GroundedProductMeaningFamilyMappingStateEnum];

/**
 * @export
 */
export const GroundedProductMeaningRequiresReviewEnum = {
    True: true
} as const;
export type GroundedProductMeaningRequiresReviewEnum = typeof GroundedProductMeaningRequiresReviewEnum[keyof typeof GroundedProductMeaningRequiresReviewEnum];


/**
 * Check if a given object implements the GroundedProductMeaning interface.
 */
export function instanceOfGroundedProductMeaning(value: object): value is GroundedProductMeaning {
    if (!('confidence' in value) || value['confidence'] === undefined) return false;
    if (!('coverageState' in value) || value['coverageState'] === undefined) return false;
    if (!('familyMappingState' in value) || value['familyMappingState'] === undefined) return false;
    if (!('meaningId' in value) || value['meaningId'] === undefined) return false;
    if (!('rationale' in value) || value['rationale'] === undefined) return false;
    if (!('semanticConcept' in value) || value['semanticConcept'] === undefined) return false;
    if (!('sourceExpression' in value) || value['sourceExpression'] === undefined) return false;
    return true;
}

export function GroundedProductMeaningFromJSON(json: any): GroundedProductMeaning {
    return GroundedProductMeaningFromJSONTyped(json, false);
}

export function GroundedProductMeaningFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroundedProductMeaning {
    if (json == null) {
        return json;
    }
    return {

        'confidence': json['confidence'],
        'coverageState': json['coverage_state'],
        'decisionPoints': json['decision_points'] == null ? undefined : ((json['decision_points'] as Array<any>).map(ProductMeaningDecisionPointFromJSON)),
        'familyCandidates': json['family_candidates'] == null ? undefined : ((json['family_candidates'] as Array<any>).map(ProductMeaningFamilyContextFromJSON)),
        'familyMappingState': json['family_mapping_state'],
        'meaningId': json['meaning_id'],
        'rationale': json['rationale'],
        'requiresReview': json['requires_review'] == null ? undefined : json['requires_review'],
        'semanticConcept': json['semantic_concept'],
        'sourceExpression': json['source_expression'],
    };
}

export function GroundedProductMeaningToJSON(json: any): GroundedProductMeaning {
    return GroundedProductMeaningToJSONTyped(json, false);
}

export function GroundedProductMeaningToJSONTyped(value?: GroundedProductMeaning | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'confidence': value['confidence'],
        'coverage_state': value['coverageState'],
        'decision_points': value['decisionPoints'] == null ? undefined : ((value['decisionPoints'] as Array<any>).map(ProductMeaningDecisionPointToJSON)),
        'family_candidates': value['familyCandidates'] == null ? undefined : ((value['familyCandidates'] as Array<any>).map(ProductMeaningFamilyContextToJSON)),
        'family_mapping_state': value['familyMappingState'],
        'meaning_id': value['meaningId'],
        'rationale': value['rationale'],
        'requires_review': value['requiresReview'],
        'semantic_concept': value['semanticConcept'],
        'source_expression': value['sourceExpression'],
    };
}
