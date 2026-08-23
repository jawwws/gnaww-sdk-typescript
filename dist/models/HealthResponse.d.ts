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
 * Response returned by the public health endpoints.
 * @export
 * @interface HealthResponse
 */
export interface HealthResponse {
    /**
     *
     * @type {string}
     * @memberof HealthResponse
     */
    environment: string;
    /**
     *
     * @type {string}
     * @memberof HealthResponse
     */
    service: string;
    /**
     *
     * @type {HealthResponseStatusEnum}
     * @memberof HealthResponse
     */
    status?: HealthResponseStatusEnum;
    /**
     *
     * @type {string}
     * @memberof HealthResponse
     */
    version: string;
}
/**
 * @export
 */
export declare const HealthResponseStatusEnum: {
    readonly Ok: "ok";
    readonly NotReady: "not_ready";
};
export type HealthResponseStatusEnum = typeof HealthResponseStatusEnum[keyof typeof HealthResponseStatusEnum];
/**
 * Check if a given object implements the HealthResponse interface.
 */
export declare function instanceOfHealthResponse(value: object): value is HealthResponse;
export declare function HealthResponseFromJSON(json: any): HealthResponse;
export declare function HealthResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthResponse;
export declare function HealthResponseToJSON(json: any): HealthResponse;
export declare function HealthResponseToJSONTyped(value?: HealthResponse | null, ignoreDiscriminator?: boolean): any;
