/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 *
 * @export
 * @interface ContinuePrintRequirementInterpretationDefaultResponseError
 */
export interface ContinuePrintRequirementInterpretationDefaultResponseError {
    /**
     *
     * @type {string}
     * @memberof ContinuePrintRequirementInterpretationDefaultResponseError
     */
    code: string;
    /**
     *
     * @type {string}
     * @memberof ContinuePrintRequirementInterpretationDefaultResponseError
     */
    correlationId: string;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof ContinuePrintRequirementInterpretationDefaultResponseError
     */
    details: {
        [key: string]: any;
    };
    /**
     *
     * @type {string}
     * @memberof ContinuePrintRequirementInterpretationDefaultResponseError
     */
    message: string;
    /**
     *
     * @type {string}
     * @memberof ContinuePrintRequirementInterpretationDefaultResponseError
     */
    requestId: string;
    /**
     *
     * @type {boolean}
     * @memberof ContinuePrintRequirementInterpretationDefaultResponseError
     */
    retryable: boolean;
    /**
     *
     * @type {number}
     * @memberof ContinuePrintRequirementInterpretationDefaultResponseError
     */
    status: number;
}
/**
 * Check if a given object implements the ContinuePrintRequirementInterpretationDefaultResponseError interface.
 */
export declare function instanceOfContinuePrintRequirementInterpretationDefaultResponseError(value: object): value is ContinuePrintRequirementInterpretationDefaultResponseError;
export declare function ContinuePrintRequirementInterpretationDefaultResponseErrorFromJSON(json: any): ContinuePrintRequirementInterpretationDefaultResponseError;
export declare function ContinuePrintRequirementInterpretationDefaultResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContinuePrintRequirementInterpretationDefaultResponseError;
export declare function ContinuePrintRequirementInterpretationDefaultResponseErrorToJSON(json: any): ContinuePrintRequirementInterpretationDefaultResponseError;
export declare function ContinuePrintRequirementInterpretationDefaultResponseErrorToJSONTyped(value?: ContinuePrintRequirementInterpretationDefaultResponseError | null, ignoreDiscriminator?: boolean): any;
