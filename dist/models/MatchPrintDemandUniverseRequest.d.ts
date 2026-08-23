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
import type { FulfilmentRequirement } from './FulfilmentRequirement';
import type { PrintJobSpecificationV04 } from './PrintJobSpecificationV04';
/**
 * Canonical demand plus buyer fulfilment requirements.
 * @export
 * @interface MatchPrintDemandUniverseRequest
 */
export interface MatchPrintDemandUniverseRequest {
    /**
     *
     * @type {FulfilmentRequirement}
     * @memberof MatchPrintDemandUniverseRequest
     */
    fulfilment: FulfilmentRequirement;
    /**
     *
     * @type {PrintJobSpecificationV04}
     * @memberof MatchPrintDemandUniverseRequest
     */
    gjs: PrintJobSpecificationV04;
    /**
     *
     * @type {MatchPrintDemandUniverseRequestSchemaNameEnum}
     * @memberof MatchPrintDemandUniverseRequest
     */
    schemaName?: MatchPrintDemandUniverseRequestSchemaNameEnum;
    /**
     *
     * @type {MatchPrintDemandUniverseRequestSchemaVersionEnum}
     * @memberof MatchPrintDemandUniverseRequest
     */
    schemaVersion?: MatchPrintDemandUniverseRequestSchemaVersionEnum;
}
/**
 * @export
 */
export declare const MatchPrintDemandUniverseRequestSchemaNameEnum: {
    readonly GnawwSpecmatchUniverseRequest: "gnaww.specmatch_universe_request";
};
export type MatchPrintDemandUniverseRequestSchemaNameEnum = typeof MatchPrintDemandUniverseRequestSchemaNameEnum[keyof typeof MatchPrintDemandUniverseRequestSchemaNameEnum];
/**
 * @export
 */
export declare const MatchPrintDemandUniverseRequestSchemaVersionEnum: {
    readonly _01: "0.1";
};
export type MatchPrintDemandUniverseRequestSchemaVersionEnum = typeof MatchPrintDemandUniverseRequestSchemaVersionEnum[keyof typeof MatchPrintDemandUniverseRequestSchemaVersionEnum];
/**
 * Check if a given object implements the MatchPrintDemandUniverseRequest interface.
 */
export declare function instanceOfMatchPrintDemandUniverseRequest(value: object): value is MatchPrintDemandUniverseRequest;
export declare function MatchPrintDemandUniverseRequestFromJSON(json: any): MatchPrintDemandUniverseRequest;
export declare function MatchPrintDemandUniverseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchPrintDemandUniverseRequest;
export declare function MatchPrintDemandUniverseRequestToJSON(json: any): MatchPrintDemandUniverseRequest;
export declare function MatchPrintDemandUniverseRequestToJSONTyped(value?: MatchPrintDemandUniverseRequest | null, ignoreDiscriminator?: boolean): any;
