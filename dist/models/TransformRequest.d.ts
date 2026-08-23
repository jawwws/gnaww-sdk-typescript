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
 * Request payload for `POST /v1/transform`.
 * @export
 * @interface TransformRequest
 */
export interface TransformRequest {
    /**
     *
     * @type {string}
     * @memberof TransformRequest
     */
    requestedSchemaVersion?: string;
    /**
     *
     * @type {SourceInput}
     * @memberof TransformRequest
     */
    source: SourceInput;
}
/**
 * Check if a given object implements the TransformRequest interface.
 */
export declare function instanceOfTransformRequest(value: object): value is TransformRequest;
export declare function TransformRequestFromJSON(json: any): TransformRequest;
export declare function TransformRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransformRequest;
export declare function TransformRequestToJSON(json: any): TransformRequest;
export declare function TransformRequestToJSONTyped(value?: TransformRequest | null, ignoreDiscriminator?: boolean): any;
