/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { PublicInterpretationContinuationAnswer } from './PublicInterpretationContinuationAnswer';
import type { SourceInput } from './SourceInput';
/**
 * Stateless continuation request keyed by public question identities.
 * @export
 * @interface ContinueInterpretationRequestV02
 */
export interface ContinueInterpretationRequestV02 {
    /**
     *
     * @type {Array<PublicInterpretationContinuationAnswer>}
     * @memberof ContinueInterpretationRequestV02
     */
    answers?: Array<PublicInterpretationContinuationAnswer>;
    /**
     *
     * @type {ContinueInterpretationRequestV02GjsVersionEnum}
     * @memberof ContinueInterpretationRequestV02
     */
    gjsVersion?: ContinueInterpretationRequestV02GjsVersionEnum;
    /**
     *
     * @type {ContinueInterpretationRequestV02MatchingModeEnum}
     * @memberof ContinueInterpretationRequestV02
     */
    matchingMode?: ContinueInterpretationRequestV02MatchingModeEnum;
    /**
     *
     * @type {ContinueInterpretationRequestV02SchemaNameEnum}
     * @memberof ContinueInterpretationRequestV02
     */
    schemaName?: ContinueInterpretationRequestV02SchemaNameEnum;
    /**
     *
     * @type {ContinueInterpretationRequestV02SchemaVersionEnum}
     * @memberof ContinueInterpretationRequestV02
     */
    schemaVersion?: ContinueInterpretationRequestV02SchemaVersionEnum;
    /**
     *
     * @type {SourceInput}
     * @memberof ContinueInterpretationRequestV02
     */
    source: SourceInput;
}
/**
 * @export
 */
export declare const ContinueInterpretationRequestV02GjsVersionEnum: {
    readonly _04: "0.4";
};
export type ContinueInterpretationRequestV02GjsVersionEnum = typeof ContinueInterpretationRequestV02GjsVersionEnum[keyof typeof ContinueInterpretationRequestV02GjsVersionEnum];
/**
 * @export
 */
export declare const ContinueInterpretationRequestV02MatchingModeEnum: {
    readonly SingleTarget: "single_target";
    readonly ProducerUniverse: "producer_universe";
};
export type ContinueInterpretationRequestV02MatchingModeEnum = typeof ContinueInterpretationRequestV02MatchingModeEnum[keyof typeof ContinueInterpretationRequestV02MatchingModeEnum];
/**
 * @export
 */
export declare const ContinueInterpretationRequestV02SchemaNameEnum: {
    readonly GnawwInterpretationContinuationRequest: "gnaww.interpretation_continuation_request";
};
export type ContinueInterpretationRequestV02SchemaNameEnum = typeof ContinueInterpretationRequestV02SchemaNameEnum[keyof typeof ContinueInterpretationRequestV02SchemaNameEnum];
/**
 * @export
 */
export declare const ContinueInterpretationRequestV02SchemaVersionEnum: {
    readonly _02: "0.2";
};
export type ContinueInterpretationRequestV02SchemaVersionEnum = typeof ContinueInterpretationRequestV02SchemaVersionEnum[keyof typeof ContinueInterpretationRequestV02SchemaVersionEnum];
/**
 * Check if a given object implements the ContinueInterpretationRequestV02 interface.
 */
export declare function instanceOfContinueInterpretationRequestV02(value: object): value is ContinueInterpretationRequestV02;
export declare function ContinueInterpretationRequestV02FromJSON(json: any): ContinueInterpretationRequestV02;
export declare function ContinueInterpretationRequestV02FromJSONTyped(json: any, ignoreDiscriminator: boolean): ContinueInterpretationRequestV02;
export declare function ContinueInterpretationRequestV02ToJSON(json: any): ContinueInterpretationRequestV02;
export declare function ContinueInterpretationRequestV02ToJSONTyped(value?: ContinueInterpretationRequestV02 | null, ignoreDiscriminator?: boolean): any;
