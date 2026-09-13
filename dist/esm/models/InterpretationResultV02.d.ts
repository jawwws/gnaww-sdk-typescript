/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { PublicInterpretationQuestion } from './PublicInterpretationQuestion';
import type { PublicInterpretationIntent } from './PublicInterpretationIntent';
import type { PublicCapabilityQuestion } from './PublicCapabilityQuestion';
import type { PublicInterpretationJob } from './PublicInterpretationJob';
import type { IssueSet } from './IssueSet';
import type { PublicInterpretationTruthState } from './PublicInterpretationTruthState';
import type { ProductPackResponse } from './ProductPackResponse';
import type { SourceInput } from './SourceInput';
import type { PublicSharedContextFact } from './PublicSharedContextFact';
import type { PublicControlledInterpretationState } from './PublicControlledInterpretationState';
/**
 * Job-centric public messy-intent interpretation result.
 * @export
 * @interface InterpretationResultV02
 */
export interface InterpretationResultV02 {
    /**
     *
     * @type {Array<PublicCapabilityQuestion>}
     * @memberof InterpretationResultV02
     */
    capabilityQuestions?: Array<PublicCapabilityQuestion>;
    /**
     *
     * @type {PublicControlledInterpretationState}
     * @memberof InterpretationResultV02
     */
    controlledInterpretation: PublicControlledInterpretationState;
    /**
     *
     * @type {PublicInterpretationIntent}
     * @memberof InterpretationResultV02
     */
    intent: PublicInterpretationIntent;
    /**
     *
     * @type {IssueSet}
     * @memberof InterpretationResultV02
     */
    issues?: IssueSet;
    /**
     *
     * @type {Array<PublicInterpretationJob>}
     * @memberof InterpretationResultV02
     */
    jobs?: Array<PublicInterpretationJob>;
    /**
     *
     * @type {Array<string>}
     * @memberof InterpretationResultV02
     */
    nextActions?: Array<string>;
    /**
     *
     * @type {Array<PublicInterpretationQuestion>}
     * @memberof InterpretationResultV02
     */
    questions?: Array<PublicInterpretationQuestion>;
    /**
     *
     * @type {Array<ProductPackResponse>}
     * @memberof InterpretationResultV02
     */
    recommendations?: Array<ProductPackResponse>;
    /**
     *
     * @type {InterpretationResultV02RequestedGjsVersionEnum}
     * @memberof InterpretationResultV02
     */
    requestedGjsVersion: InterpretationResultV02RequestedGjsVersionEnum;
    /**
     *
     * @type {InterpretationResultV02SchemaNameEnum}
     * @memberof InterpretationResultV02
     */
    schemaName?: InterpretationResultV02SchemaNameEnum;
    /**
     *
     * @type {InterpretationResultV02SchemaVersionEnum}
     * @memberof InterpretationResultV02
     */
    schemaVersion?: InterpretationResultV02SchemaVersionEnum;
    /**
     *
     * @type {Array<PublicSharedContextFact>}
     * @memberof InterpretationResultV02
     */
    sharedContext?: Array<PublicSharedContextFact>;
    /**
     *
     * @type {SourceInput}
     * @memberof InterpretationResultV02
     */
    source: SourceInput;
    /**
     *
     * @type {InterpretationResultV02StatusEnum}
     * @memberof InterpretationResultV02
     */
    status: InterpretationResultV02StatusEnum;
    /**
     *
     * @type {PublicInterpretationTruthState}
     * @memberof InterpretationResultV02
     */
    truth?: PublicInterpretationTruthState;
}
/**
 * @export
 */
export declare const InterpretationResultV02RequestedGjsVersionEnum: {
    readonly _03: "0.3";
    readonly _04: "0.4";
};
export type InterpretationResultV02RequestedGjsVersionEnum = typeof InterpretationResultV02RequestedGjsVersionEnum[keyof typeof InterpretationResultV02RequestedGjsVersionEnum];
/**
 * @export
 */
export declare const InterpretationResultV02SchemaNameEnum: {
    readonly GnawwInterpretationResult: "gnaww.interpretation_result";
};
export type InterpretationResultV02SchemaNameEnum = typeof InterpretationResultV02SchemaNameEnum[keyof typeof InterpretationResultV02SchemaNameEnum];
/**
 * @export
 */
export declare const InterpretationResultV02SchemaVersionEnum: {
    readonly _02: "0.2";
};
export type InterpretationResultV02SchemaVersionEnum = typeof InterpretationResultV02SchemaVersionEnum[keyof typeof InterpretationResultV02SchemaVersionEnum];
/**
 * @export
 */
export declare const InterpretationResultV02StatusEnum: {
    readonly CanonicalReady: "canonical_ready";
    readonly ReviewRequired: "review_required";
    readonly NeedsReview: "needs_review";
    readonly Failed: "failed";
};
export type InterpretationResultV02StatusEnum = typeof InterpretationResultV02StatusEnum[keyof typeof InterpretationResultV02StatusEnum];
/**
 * Check if a given object implements the InterpretationResultV02 interface.
 */
export declare function instanceOfInterpretationResultV02(value: object): value is InterpretationResultV02;
export declare function InterpretationResultV02FromJSON(json: any): InterpretationResultV02;
export declare function InterpretationResultV02FromJSONTyped(json: any, ignoreDiscriminator: boolean): InterpretationResultV02;
export declare function InterpretationResultV02ToJSON(json: any): InterpretationResultV02;
export declare function InterpretationResultV02ToJSONTyped(value?: InterpretationResultV02 | null, ignoreDiscriminator?: boolean): any;
