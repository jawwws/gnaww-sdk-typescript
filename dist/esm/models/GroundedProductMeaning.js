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
import { ProductMeaningFamilyContextFromJSON, ProductMeaningFamilyContextToJSON, } from './ProductMeaningFamilyContext';
import { ProductMeaningDecisionPointFromJSON, ProductMeaningDecisionPointToJSON, } from './ProductMeaningDecisionPoint';
/**
 * @export
 */
export const GroundedProductMeaningCoverageStateEnum = {
    CanonicalCandidates: 'canonical_candidates',
    KnownConceptCoverageGap: 'known_concept_coverage_gap'
};
/**
 * @export
 */
export const GroundedProductMeaningFamilyMappingStateEnum = {
    DirectEquivalence: 'direct_equivalence',
    DependsOnDecision: 'depends_on_decision',
    NoSafeMapping: 'no_safe_mapping'
};
/**
 * @export
 */
export const GroundedProductMeaningRequiresReviewEnum = {
    True: true
};
/**
 * Check if a given object implements the GroundedProductMeaning interface.
 */
export function instanceOfGroundedProductMeaning(value) {
    if (!('confidence' in value) || value['confidence'] === undefined)
        return false;
    if (!('coverageState' in value) || value['coverageState'] === undefined)
        return false;
    if (!('familyMappingState' in value) || value['familyMappingState'] === undefined)
        return false;
    if (!('meaningId' in value) || value['meaningId'] === undefined)
        return false;
    if (!('rationale' in value) || value['rationale'] === undefined)
        return false;
    if (!('semanticConcept' in value) || value['semanticConcept'] === undefined)
        return false;
    if (!('sourceExpression' in value) || value['sourceExpression'] === undefined)
        return false;
    return true;
}
export function GroundedProductMeaningFromJSON(json) {
    return GroundedProductMeaningFromJSONTyped(json, false);
}
export function GroundedProductMeaningFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'confidence': json['confidence'],
        'coverageState': json['coverage_state'],
        'decisionPoints': json['decision_points'] == null ? undefined : (json['decision_points'].map(ProductMeaningDecisionPointFromJSON)),
        'familyCandidates': json['family_candidates'] == null ? undefined : (json['family_candidates'].map(ProductMeaningFamilyContextFromJSON)),
        'familyMappingState': json['family_mapping_state'],
        'meaningId': json['meaning_id'],
        'rationale': json['rationale'],
        'requiresReview': json['requires_review'] == null ? undefined : json['requires_review'],
        'semanticConcept': json['semantic_concept'],
        'sourceExpression': json['source_expression'],
    };
}
export function GroundedProductMeaningToJSON(json) {
    return GroundedProductMeaningToJSONTyped(json, false);
}
export function GroundedProductMeaningToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'confidence': value['confidence'],
        'coverage_state': value['coverageState'],
        'decision_points': value['decisionPoints'] == null ? undefined : (value['decisionPoints'].map(ProductMeaningDecisionPointToJSON)),
        'family_candidates': value['familyCandidates'] == null ? undefined : (value['familyCandidates'].map(ProductMeaningFamilyContextToJSON)),
        'family_mapping_state': value['familyMappingState'],
        'meaning_id': value['meaningId'],
        'rationale': value['rationale'],
        'requires_review': value['requiresReview'],
        'semantic_concept': value['semanticConcept'],
        'source_expression': value['sourceExpression'],
    };
}
