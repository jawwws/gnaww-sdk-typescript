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
/**
 *
 * @export
 * @interface InterpretPrintRequirementDefaultResponseError
 */
export interface InterpretPrintRequirementDefaultResponseError {
    /**
     *
     * @type {string}
     * @memberof InterpretPrintRequirementDefaultResponseError
     */
    code: string;
    /**
     *
     * @type {string}
     * @memberof InterpretPrintRequirementDefaultResponseError
     */
    correlationId: string;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof InterpretPrintRequirementDefaultResponseError
     */
    details: {
        [key: string]: any;
    };
    /**
     *
     * @type {string}
     * @memberof InterpretPrintRequirementDefaultResponseError
     */
    message: string;
    /**
     *
     * @type {string}
     * @memberof InterpretPrintRequirementDefaultResponseError
     */
    requestId: string;
    /**
     *
     * @type {boolean}
     * @memberof InterpretPrintRequirementDefaultResponseError
     */
    retryable: boolean;
    /**
     *
     * @type {number}
     * @memberof InterpretPrintRequirementDefaultResponseError
     */
    status: number;
}
/**
 * Check if a given object implements the InterpretPrintRequirementDefaultResponseError interface.
 */
export declare function instanceOfInterpretPrintRequirementDefaultResponseError(value: object): value is InterpretPrintRequirementDefaultResponseError;
export declare function InterpretPrintRequirementDefaultResponseErrorFromJSON(json: any): InterpretPrintRequirementDefaultResponseError;
export declare function InterpretPrintRequirementDefaultResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterpretPrintRequirementDefaultResponseError;
export declare function InterpretPrintRequirementDefaultResponseErrorToJSON(json: any): InterpretPrintRequirementDefaultResponseError;
export declare function InterpretPrintRequirementDefaultResponseErrorToJSONTyped(value?: InterpretPrintRequirementDefaultResponseError | null, ignoreDiscriminator?: boolean): any;
