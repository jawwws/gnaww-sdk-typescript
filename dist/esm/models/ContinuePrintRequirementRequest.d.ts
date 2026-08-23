/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { PublicClarificationAnswer } from './PublicClarificationAnswer';
import type { SourceInput } from './SourceInput';
/**
 * Stateless continuation of a prior ordinary-language requirement.
 * @export
 * @interface ContinuePrintRequirementRequest
 */
export interface ContinuePrintRequirementRequest {
    /**
     *
     * @type {Array<PublicClarificationAnswer>}
     * @memberof ContinuePrintRequirementRequest
     */
    answers?: Array<PublicClarificationAnswer>;
    /**
     *
     * @type {ContinuePrintRequirementRequestGjsVersionEnum}
     * @memberof ContinuePrintRequirementRequest
     */
    gjsVersion?: ContinuePrintRequirementRequestGjsVersionEnum;
    /**
     *
     * @type {ContinuePrintRequirementRequestMatchingModeEnum}
     * @memberof ContinuePrintRequirementRequest
     */
    matchingMode?: ContinuePrintRequirementRequestMatchingModeEnum;
    /**
     *
     * @type {ContinuePrintRequirementRequestSchemaNameEnum}
     * @memberof ContinuePrintRequirementRequest
     */
    schemaName?: ContinuePrintRequirementRequestSchemaNameEnum;
    /**
     *
     * @type {ContinuePrintRequirementRequestSchemaVersionEnum}
     * @memberof ContinuePrintRequirementRequest
     */
    schemaVersion?: ContinuePrintRequirementRequestSchemaVersionEnum;
    /**
     *
     * @type {SourceInput}
     * @memberof ContinuePrintRequirementRequest
     */
    source: SourceInput;
}
/**
 * @export
 */
export declare const ContinuePrintRequirementRequestGjsVersionEnum: {
    readonly _04: "0.4";
};
export type ContinuePrintRequirementRequestGjsVersionEnum = typeof ContinuePrintRequirementRequestGjsVersionEnum[keyof typeof ContinuePrintRequirementRequestGjsVersionEnum];
/**
 * @export
 */
export declare const ContinuePrintRequirementRequestMatchingModeEnum: {
    readonly SingleTarget: "single_target";
    readonly ProducerUniverse: "producer_universe";
};
export type ContinuePrintRequirementRequestMatchingModeEnum = typeof ContinuePrintRequirementRequestMatchingModeEnum[keyof typeof ContinuePrintRequirementRequestMatchingModeEnum];
/**
 * @export
 */
export declare const ContinuePrintRequirementRequestSchemaNameEnum: {
    readonly GnawwInterpretationContinuationRequest: "gnaww.interpretation_continuation_request";
};
export type ContinuePrintRequirementRequestSchemaNameEnum = typeof ContinuePrintRequirementRequestSchemaNameEnum[keyof typeof ContinuePrintRequirementRequestSchemaNameEnum];
/**
 * @export
 */
export declare const ContinuePrintRequirementRequestSchemaVersionEnum: {
    readonly _01: "0.1";
};
export type ContinuePrintRequirementRequestSchemaVersionEnum = typeof ContinuePrintRequirementRequestSchemaVersionEnum[keyof typeof ContinuePrintRequirementRequestSchemaVersionEnum];
/**
 * Check if a given object implements the ContinuePrintRequirementRequest interface.
 */
export declare function instanceOfContinuePrintRequirementRequest(value: object): value is ContinuePrintRequirementRequest;
export declare function ContinuePrintRequirementRequestFromJSON(json: any): ContinuePrintRequirementRequest;
export declare function ContinuePrintRequirementRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContinuePrintRequirementRequest;
export declare function ContinuePrintRequirementRequestToJSON(json: any): ContinuePrintRequirementRequest;
export declare function ContinuePrintRequirementRequestToJSONTyped(value?: ContinuePrintRequirementRequest | null, ignoreDiscriminator?: boolean): any;
