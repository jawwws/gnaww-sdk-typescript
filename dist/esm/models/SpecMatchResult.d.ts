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
import type { PhysicalRequirementDecision } from './PhysicalRequirementDecision';
import type { IssueSet } from './IssueSet';
import type { ProducerProductReference } from './ProducerProductReference';
import type { MatchDifference } from './MatchDifference';
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
export declare const SpecMatchResultStatusEnum: {
    readonly Matched: "matched";
    readonly MatchedWithWarnings: "matched_with_warnings";
    readonly NeedsReview: "needs_review";
    readonly Blocked: "blocked";
    readonly Failed: "failed";
};
export type SpecMatchResultStatusEnum = typeof SpecMatchResultStatusEnum[keyof typeof SpecMatchResultStatusEnum];
/**
 * Check if a given object implements the SpecMatchResult interface.
 */
export declare function instanceOfSpecMatchResult(value: object): value is SpecMatchResult;
export declare function SpecMatchResultFromJSON(json: any): SpecMatchResult;
export declare function SpecMatchResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpecMatchResult;
export declare function SpecMatchResultToJSON(json: any): SpecMatchResult;
export declare function SpecMatchResultToJSONTyped(value?: SpecMatchResult | null, ignoreDiscriminator?: boolean): any;
