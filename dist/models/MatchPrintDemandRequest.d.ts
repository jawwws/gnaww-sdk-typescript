/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { PublicMatchTargetRequest } from './PublicMatchTargetRequest';
import type { PrintJobSpecificationV04 } from './PrintJobSpecificationV04';
/**
 * Validated canonical demand submitted directly to SpecMatch.
 * @export
 * @interface MatchPrintDemandRequest
 */
export interface MatchPrintDemandRequest {
    /**
     *
     * @type {PrintJobSpecificationV04}
     * @memberof MatchPrintDemandRequest
     */
    gjs: PrintJobSpecificationV04;
    /**
     *
     * @type {MatchPrintDemandRequestSchemaNameEnum}
     * @memberof MatchPrintDemandRequest
     */
    schemaName?: MatchPrintDemandRequestSchemaNameEnum;
    /**
     *
     * @type {MatchPrintDemandRequestSchemaVersionEnum}
     * @memberof MatchPrintDemandRequest
     */
    schemaVersion?: MatchPrintDemandRequestSchemaVersionEnum;
    /**
     *
     * @type {PublicMatchTargetRequest}
     * @memberof MatchPrintDemandRequest
     */
    target: PublicMatchTargetRequest;
}
/**
 * @export
 */
export declare const MatchPrintDemandRequestSchemaNameEnum: {
    readonly GnawwSpecmatchRequest: "gnaww.specmatch_request";
};
export type MatchPrintDemandRequestSchemaNameEnum = typeof MatchPrintDemandRequestSchemaNameEnum[keyof typeof MatchPrintDemandRequestSchemaNameEnum];
/**
 * @export
 */
export declare const MatchPrintDemandRequestSchemaVersionEnum: {
    readonly _01: "0.1";
};
export type MatchPrintDemandRequestSchemaVersionEnum = typeof MatchPrintDemandRequestSchemaVersionEnum[keyof typeof MatchPrintDemandRequestSchemaVersionEnum];
/**
 * Check if a given object implements the MatchPrintDemandRequest interface.
 */
export declare function instanceOfMatchPrintDemandRequest(value: object): value is MatchPrintDemandRequest;
export declare function MatchPrintDemandRequestFromJSON(json: any): MatchPrintDemandRequest;
export declare function MatchPrintDemandRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchPrintDemandRequest;
export declare function MatchPrintDemandRequestToJSON(json: any): MatchPrintDemandRequest;
export declare function MatchPrintDemandRequestToJSONTyped(value?: MatchPrintDemandRequest | null, ignoreDiscriminator?: boolean): any;
