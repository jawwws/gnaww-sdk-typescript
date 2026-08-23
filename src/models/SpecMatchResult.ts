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
import type { PhysicalRequirementDecision } from './PhysicalRequirementDecision';
import {
    PhysicalRequirementDecisionFromJSON,
    PhysicalRequirementDecisionFromJSONTyped,
    PhysicalRequirementDecisionToJSON,
    PhysicalRequirementDecisionToJSONTyped,
} from './PhysicalRequirementDecision';
import type { IssueSet } from './IssueSet';
import {
    IssueSetFromJSON,
    IssueSetFromJSONTyped,
    IssueSetToJSON,
    IssueSetToJSONTyped,
} from './IssueSet';
import type { ProducerProductReference } from './ProducerProductReference';
import {
    ProducerProductReferenceFromJSON,
    ProducerProductReferenceFromJSONTyped,
    ProducerProductReferenceToJSON,
    ProducerProductReferenceToJSONTyped,
} from './ProducerProductReference';
import type { MatchDifference } from './MatchDifference';
import {
    MatchDifferenceFromJSON,
    MatchDifferenceFromJSONTyped,
    MatchDifferenceToJSON,
    MatchDifferenceToJSONTyped,
} from './MatchDifference';

/**
 * Result of matching a canonical job against producer capabilities.
 * @export
 * @interface SpecMatchResult
 */
export interface SpecMatchResult {
    /**
     *
     * @type {number}
     * @memberof SpecMatchResult
     */
    confidence?: number;
    /**
     *
     * @type {Array<MatchDifference>}
     * @memberof SpecMatchResult
     */
    differences?: Array<MatchDifference>;
    /**
     *
     * @type {IssueSet}
     * @memberof SpecMatchResult
     */
    issues?: IssueSet;
    /**
     *
     * @type {Array<string>}
     * @memberof SpecMatchResult
     */
    matchReasons?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof SpecMatchResult
     */
    matchScore?: number;
    /**
     *
     * @type {Array<PhysicalRequirementDecision>}
     * @memberof SpecMatchResult
     */
    physicalRequirements?: Array<PhysicalRequirementDecision>;
    /**
     *
     * @type {ProducerProductReference}
     * @memberof SpecMatchResult
     */
    product?: ProducerProductReference | null;
    /**
     *
     * @type {SpecMatchResultStatusEnum}
     * @memberof SpecMatchResult
     */
    status: SpecMatchResultStatusEnum;
}


/**
 * @export
 */
export const SpecMatchResultStatusEnum = {
    Matched: 'matched',
    MatchedWithWarnings: 'matched_with_warnings',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
} as const;
export type SpecMatchResultStatusEnum = typeof SpecMatchResultStatusEnum[keyof typeof SpecMatchResultStatusEnum];


/**
 * Check if a given object implements the SpecMatchResult interface.
 */
export function instanceOfSpecMatchResult(value: object): value is SpecMatchResult {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function SpecMatchResultFromJSON(json: any): SpecMatchResult {
    return SpecMatchResultFromJSONTyped(json, false);
}

export function SpecMatchResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpecMatchResult {
    if (json == null) {
        return json;
    }
    return {

        'confidence': json['confidence'] == null ? undefined : json['confidence'],
        'differences': json['differences'] == null ? undefined : ((json['differences'] as Array<any>).map(MatchDifferenceFromJSON)),
        'issues': json['issues'] == null ? undefined : IssueSetFromJSON(json['issues']),
        'matchReasons': json['match_reasons'] == null ? undefined : json['match_reasons'],
        'matchScore': json['match_score'] == null ? undefined : json['match_score'],
        'physicalRequirements': json['physical_requirements'] == null ? undefined : ((json['physical_requirements'] as Array<any>).map(PhysicalRequirementDecisionFromJSON)),
        'product': json['product'] == null ? undefined : ProducerProductReferenceFromJSON(json['product']),
        'status': json['status'],
    };
}

export function SpecMatchResultToJSON(json: any): SpecMatchResult {
    return SpecMatchResultToJSONTyped(json, false);
}

export function SpecMatchResultToJSONTyped(value?: SpecMatchResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'confidence': value['confidence'],
        'differences': value['differences'] == null ? undefined : ((value['differences'] as Array<any>).map(MatchDifferenceToJSON)),
        'issues': IssueSetToJSON(value['issues']),
        'match_reasons': value['matchReasons'],
        'match_score': value['matchScore'],
        'physical_requirements': value['physicalRequirements'] == null ? undefined : ((value['physicalRequirements'] as Array<any>).map(PhysicalRequirementDecisionToJSON)),
        'product': ProducerProductReferenceToJSON(value['product']),
        'status': value['status'],
    };
}
