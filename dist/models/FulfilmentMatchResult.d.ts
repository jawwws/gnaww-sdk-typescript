/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { IssueSet } from './IssueSet';
/**
 * Capability-plane fulfilment result for one producer profile.
 * @export
 * @interface FulfilmentMatchResult
 */
export interface FulfilmentMatchResult {
    /**
     *
     * @type {string}
     * @memberof FulfilmentMatchResult
     */
    destinationCountryCode: string;
    /**
     *
     * @type {IssueSet}
     * @memberof FulfilmentMatchResult
     */
    issues?: IssueSet;
    /**
     *
     * @type {Array<string>}
     * @memberof FulfilmentMatchResult
     */
    matchReasons?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof FulfilmentMatchResult
     */
    offeredMaximumDeliveryWorkingDays?: number | null;
    /**
     *
     * @type {number}
     * @memberof FulfilmentMatchResult
     */
    offeredMinimumDeliveryWorkingDays?: number | null;
    /**
     *
     * @type {number}
     * @memberof FulfilmentMatchResult
     */
    requestedMaximumDeliveryWorkingDays?: number | null;
    /**
     *
     * @type {Array<string>}
     * @memberof FulfilmentMatchResult
     */
    serviceCountryCodes?: Array<string>;
    /**
     *
     * @type {FulfilmentMatchResultStatusEnum}
     * @memberof FulfilmentMatchResult
     */
    status: FulfilmentMatchResultStatusEnum;
}
/**
 * @export
 */
export declare const FulfilmentMatchResultStatusEnum: {
    readonly Matched: "matched";
    readonly NeedsReview: "needs_review";
    readonly Blocked: "blocked";
};
export type FulfilmentMatchResultStatusEnum = typeof FulfilmentMatchResultStatusEnum[keyof typeof FulfilmentMatchResultStatusEnum];
/**
 * Check if a given object implements the FulfilmentMatchResult interface.
 */
export declare function instanceOfFulfilmentMatchResult(value: object): value is FulfilmentMatchResult;
export declare function FulfilmentMatchResultFromJSON(json: any): FulfilmentMatchResult;
export declare function FulfilmentMatchResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfilmentMatchResult;
export declare function FulfilmentMatchResultToJSON(json: any): FulfilmentMatchResult;
export declare function FulfilmentMatchResultToJSONTyped(value?: FulfilmentMatchResult | null, ignoreDiscriminator?: boolean): any;
