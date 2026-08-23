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
import type { SourceInput } from './SourceInput';
/**
 * Developer-facing request for the preferred interpretation boundary.
 * @export
 * @interface InterpretPrintRequirementRequest
 */
export interface InterpretPrintRequirementRequest {
    /**
     *
     * @type {InterpretPrintRequirementRequestGjsVersionEnum}
     * @memberof InterpretPrintRequirementRequest
     */
    gjsVersion?: InterpretPrintRequirementRequestGjsVersionEnum;
    /**
     *
     * @type {InterpretPrintRequirementRequestSchemaNameEnum}
     * @memberof InterpretPrintRequirementRequest
     */
    schemaName?: InterpretPrintRequirementRequestSchemaNameEnum;
    /**
     *
     * @type {InterpretPrintRequirementRequestSchemaVersionEnum}
     * @memberof InterpretPrintRequirementRequest
     */
    schemaVersion?: InterpretPrintRequirementRequestSchemaVersionEnum;
    /**
     *
     * @type {SourceInput}
     * @memberof InterpretPrintRequirementRequest
     */
    source: SourceInput;
}
/**
 * @export
 */
export declare const InterpretPrintRequirementRequestGjsVersionEnum: {
    readonly _03: "0.3";
    readonly _04: "0.4";
};
export type InterpretPrintRequirementRequestGjsVersionEnum = typeof InterpretPrintRequirementRequestGjsVersionEnum[keyof typeof InterpretPrintRequirementRequestGjsVersionEnum];
/**
 * @export
 */
export declare const InterpretPrintRequirementRequestSchemaNameEnum: {
    readonly GnawwInterpretationRequest: "gnaww.interpretation_request";
};
export type InterpretPrintRequirementRequestSchemaNameEnum = typeof InterpretPrintRequirementRequestSchemaNameEnum[keyof typeof InterpretPrintRequirementRequestSchemaNameEnum];
/**
 * @export
 */
export declare const InterpretPrintRequirementRequestSchemaVersionEnum: {
    readonly _01: "0.1";
};
export type InterpretPrintRequirementRequestSchemaVersionEnum = typeof InterpretPrintRequirementRequestSchemaVersionEnum[keyof typeof InterpretPrintRequirementRequestSchemaVersionEnum];
/**
 * Check if a given object implements the InterpretPrintRequirementRequest interface.
 */
export declare function instanceOfInterpretPrintRequirementRequest(value: object): value is InterpretPrintRequirementRequest;
export declare function InterpretPrintRequirementRequestFromJSON(json: any): InterpretPrintRequirementRequest;
export declare function InterpretPrintRequirementRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterpretPrintRequirementRequest;
export declare function InterpretPrintRequirementRequestToJSON(json: any): InterpretPrintRequirementRequest;
export declare function InterpretPrintRequirementRequestToJSONTyped(value?: InterpretPrintRequirementRequest | null, ignoreDiscriminator?: boolean): any;
