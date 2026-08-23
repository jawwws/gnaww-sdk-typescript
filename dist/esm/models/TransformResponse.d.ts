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
import type { IssueSet } from './IssueSet';
import type { PrintJobSpecification } from './PrintJobSpecification';
/**
 * Response payload for `POST /v1/transform`.
 * @export
 * @interface TransformResponse
 */
export interface TransformResponse {
    /**
     *
     * @type {number}
     * @memberof TransformResponse
     */
    confidence?: number;
    /**
     *
     * @type {IssueSet}
     * @memberof TransformResponse
     */
    issues?: IssueSet;
    /**
     *
     * @type {PrintJobSpecification}
     * @memberof TransformResponse
     */
    job?: PrintJobSpecification | null;
    /**
     *
     * @type {Array<string>}
     * @memberof TransformResponse
     */
    nextActions?: Array<string>;
    /**
     *
     * @type {TransformResponseSchemaNameEnum}
     * @memberof TransformResponse
     */
    schemaName?: TransformResponseSchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof TransformResponse
     */
    schemaVersion?: string;
    /**
     *
     * @type {TransformResponseStatusEnum}
     * @memberof TransformResponse
     */
    status: TransformResponseStatusEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof TransformResponse
     */
    unresolvedFields?: Array<string>;
}
/**
 * @export
 */
export declare const TransformResponseSchemaNameEnum: {
    readonly JawwwsTransformResponse: "jawwws.transform_response";
};
export type TransformResponseSchemaNameEnum = typeof TransformResponseSchemaNameEnum[keyof typeof TransformResponseSchemaNameEnum];
/**
 * @export
 */
export declare const TransformResponseStatusEnum: {
    readonly Mapped: "mapped";
    readonly NeedsReview: "needs_review";
    readonly Blocked: "blocked";
    readonly Failed: "failed";
};
export type TransformResponseStatusEnum = typeof TransformResponseStatusEnum[keyof typeof TransformResponseStatusEnum];
/**
 * Check if a given object implements the TransformResponse interface.
 */
export declare function instanceOfTransformResponse(value: object): value is TransformResponse;
export declare function TransformResponseFromJSON(json: any): TransformResponse;
export declare function TransformResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransformResponse;
export declare function TransformResponseToJSON(json: any): TransformResponse;
export declare function TransformResponseToJSONTyped(value?: TransformResponse | null, ignoreDiscriminator?: boolean): any;
