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
import type { ProductPackRecommendation } from './ProductPackRecommendation';
import type { IntentProviderMetadata } from './IntentProviderMetadata';
import type { ProductPackClarification } from './ProductPackClarification';
import type { IntentClassificationResponse } from './IntentClassificationResponse';
import type { SourceInput } from './SourceInput';
import type { ProductPackBenchmarkReference } from './ProductPackBenchmarkReference';
/**
 * Review-only product pack before canonical specification.
 * @export
 * @interface ProductPackResponse
 */
export interface ProductPackResponse {
    /**
     *
     * @type {Array<ProductPackBenchmarkReference>}
     * @memberof ProductPackResponse
     */
    benchmarkReferences?: Array<ProductPackBenchmarkReference>;
    /**
     *
     * @type {ProductPackResponseCanonicalSpecificationsCreatedEnum}
     * @memberof ProductPackResponse
     */
    canonicalSpecificationsCreated?: ProductPackResponseCanonicalSpecificationsCreatedEnum;
    /**
     *
     * @type {Array<ProductPackClarification>}
     * @memberof ProductPackResponse
     */
    clarifications?: Array<ProductPackClarification>;
    /**
     *
     * @type {IntentClassificationResponse}
     * @memberof ProductPackResponse
     */
    classification: IntentClassificationResponse;
    /**
     *
     * @type {ProductPackResponseConfirmedAvailabilityEnum}
     * @memberof ProductPackResponse
     */
    confirmedAvailability?: ProductPackResponseConfirmedAvailabilityEnum;
    /**
     *
     * @type {Array<ProductPackRecommendation>}
     * @memberof ProductPackResponse
     */
    coreRecommendations?: Array<ProductPackRecommendation>;
    /**
     *
     * @type {ProductPackResponseDeterministicGroundingEnum}
     * @memberof ProductPackResponse
     */
    deterministicGrounding?: ProductPackResponseDeterministicGroundingEnum;
    /**
     *
     * @type {Array<ProductPackRecommendation>}
     * @memberof ProductPackResponse
     */
    excludedRecommendations?: Array<ProductPackRecommendation>;
    /**
     *
     * @type {ProductPackResponseGroundingStatusEnum}
     * @memberof ProductPackResponse
     */
    groundingStatus: ProductPackResponseGroundingStatusEnum;
    /**
     *
     * @type {ProductPackResponseLivePricingAvailableEnum}
     * @memberof ProductPackResponse
     */
    livePricingAvailable?: ProductPackResponseLivePricingAvailableEnum;
    /**
     *
     * @type {string}
     * @memberof ProductPackResponse
     */
    noBenchmarkReason?: string | null;
    /**
     *
     * @type {Array<ProductPackRecommendation>}
     * @memberof ProductPackResponse
     */
    optionalRecommendations?: Array<ProductPackRecommendation>;
    /**
     *
     * @type {ProductPackResponseProducerSelectionPerformedEnum}
     * @memberof ProductPackResponse
     */
    producerSelectionPerformed?: ProductPackResponseProducerSelectionPerformedEnum;
    /**
     *
     * @type {IntentProviderMetadata}
     * @memberof ProductPackResponse
     */
    providerMetadata: IntentProviderMetadata;
    /**
     *
     * @type {ProductPackResponseSchemaNameEnum}
     * @memberof ProductPackResponse
     */
    schemaName?: ProductPackResponseSchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof ProductPackResponse
     */
    schemaVersion?: string;
    /**
     *
     * @type {SourceInput}
     * @memberof ProductPackResponse
     */
    source: SourceInput;
    /**
     *
     * @type {ProductPackResponseSpecmatchPerformedEnum}
     * @memberof ProductPackResponse
     */
    specmatchPerformed?: ProductPackResponseSpecmatchPerformedEnum;
    /**
     *
     * @type {ProductPackResponseStatusEnum}
     * @memberof ProductPackResponse
     */
    status?: ProductPackResponseStatusEnum;
    /**
     *
     * @type {string}
     * @memberof ProductPackResponse
     */
    summary: string;
}
/**
 * @export
 */
export declare const ProductPackResponseCanonicalSpecificationsCreatedEnum: {
    readonly False: false;
};
export type ProductPackResponseCanonicalSpecificationsCreatedEnum = typeof ProductPackResponseCanonicalSpecificationsCreatedEnum[keyof typeof ProductPackResponseCanonicalSpecificationsCreatedEnum];
/**
 * @export
 */
export declare const ProductPackResponseConfirmedAvailabilityEnum: {
    readonly False: false;
};
export type ProductPackResponseConfirmedAvailabilityEnum = typeof ProductPackResponseConfirmedAvailabilityEnum[keyof typeof ProductPackResponseConfirmedAvailabilityEnum];
/**
 * @export
 */
export declare const ProductPackResponseDeterministicGroundingEnum: {
    readonly True: true;
};
export type ProductPackResponseDeterministicGroundingEnum = typeof ProductPackResponseDeterministicGroundingEnum[keyof typeof ProductPackResponseDeterministicGroundingEnum];
/**
 * @export
 */
export declare const ProductPackResponseGroundingStatusEnum: {
    readonly Grounded: "grounded";
    readonly PartiallyGrounded: "partially_grounded";
    readonly Ungrounded: "ungrounded";
};
export type ProductPackResponseGroundingStatusEnum = typeof ProductPackResponseGroundingStatusEnum[keyof typeof ProductPackResponseGroundingStatusEnum];
/**
 * @export
 */
export declare const ProductPackResponseLivePricingAvailableEnum: {
    readonly False: false;
};
export type ProductPackResponseLivePricingAvailableEnum = typeof ProductPackResponseLivePricingAvailableEnum[keyof typeof ProductPackResponseLivePricingAvailableEnum];
/**
 * @export
 */
export declare const ProductPackResponseProducerSelectionPerformedEnum: {
    readonly False: false;
};
export type ProductPackResponseProducerSelectionPerformedEnum = typeof ProductPackResponseProducerSelectionPerformedEnum[keyof typeof ProductPackResponseProducerSelectionPerformedEnum];
/**
 * @export
 */
export declare const ProductPackResponseSchemaNameEnum: {
    readonly JawwwsProductPackResponse: "jawwws.product_pack_response";
};
export type ProductPackResponseSchemaNameEnum = typeof ProductPackResponseSchemaNameEnum[keyof typeof ProductPackResponseSchemaNameEnum];
/**
 * @export
 */
export declare const ProductPackResponseSpecmatchPerformedEnum: {
    readonly False: false;
};
export type ProductPackResponseSpecmatchPerformedEnum = typeof ProductPackResponseSpecmatchPerformedEnum[keyof typeof ProductPackResponseSpecmatchPerformedEnum];
/**
 * @export
 */
export declare const ProductPackResponseStatusEnum: {
    readonly NeedsReview: "needs_review";
};
export type ProductPackResponseStatusEnum = typeof ProductPackResponseStatusEnum[keyof typeof ProductPackResponseStatusEnum];
/**
 * Check if a given object implements the ProductPackResponse interface.
 */
export declare function instanceOfProductPackResponse(value: object): value is ProductPackResponse;
export declare function ProductPackResponseFromJSON(json: any): ProductPackResponse;
export declare function ProductPackResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPackResponse;
export declare function ProductPackResponseToJSON(json: any): ProductPackResponse;
export declare function ProductPackResponseToJSONTyped(value?: ProductPackResponse | null, ignoreDiscriminator?: boolean): any;
