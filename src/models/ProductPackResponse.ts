/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */

import { mapValues } from '../runtime';
import type { ProductPackRecommendation } from './ProductPackRecommendation';
import {
    ProductPackRecommendationFromJSON,
    ProductPackRecommendationFromJSONTyped,
    ProductPackRecommendationToJSON,
    ProductPackRecommendationToJSONTyped,
} from './ProductPackRecommendation';
import type { IntentProviderMetadata } from './IntentProviderMetadata';
import {
    IntentProviderMetadataFromJSON,
    IntentProviderMetadataFromJSONTyped,
    IntentProviderMetadataToJSON,
    IntentProviderMetadataToJSONTyped,
} from './IntentProviderMetadata';
import type { ProductPackClarification } from './ProductPackClarification';
import {
    ProductPackClarificationFromJSON,
    ProductPackClarificationFromJSONTyped,
    ProductPackClarificationToJSON,
    ProductPackClarificationToJSONTyped,
} from './ProductPackClarification';
import type { IntentClassificationResponse } from './IntentClassificationResponse';
import {
    IntentClassificationResponseFromJSON,
    IntentClassificationResponseFromJSONTyped,
    IntentClassificationResponseToJSON,
    IntentClassificationResponseToJSONTyped,
} from './IntentClassificationResponse';
import type { SourceInput } from './SourceInput';
import {
    SourceInputFromJSON,
    SourceInputFromJSONTyped,
    SourceInputToJSON,
    SourceInputToJSONTyped,
} from './SourceInput';
import type { ProductPackBenchmarkReference } from './ProductPackBenchmarkReference';
import {
    ProductPackBenchmarkReferenceFromJSON,
    ProductPackBenchmarkReferenceFromJSONTyped,
    ProductPackBenchmarkReferenceToJSON,
    ProductPackBenchmarkReferenceToJSONTyped,
} from './ProductPackBenchmarkReference';

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
export const ProductPackResponseCanonicalSpecificationsCreatedEnum = {
    False: false
} as const;
export type ProductPackResponseCanonicalSpecificationsCreatedEnum = typeof ProductPackResponseCanonicalSpecificationsCreatedEnum[keyof typeof ProductPackResponseCanonicalSpecificationsCreatedEnum];

/**
 * @export
 */
export const ProductPackResponseConfirmedAvailabilityEnum = {
    False: false
} as const;
export type ProductPackResponseConfirmedAvailabilityEnum = typeof ProductPackResponseConfirmedAvailabilityEnum[keyof typeof ProductPackResponseConfirmedAvailabilityEnum];

/**
 * @export
 */
export const ProductPackResponseDeterministicGroundingEnum = {
    True: true
} as const;
export type ProductPackResponseDeterministicGroundingEnum = typeof ProductPackResponseDeterministicGroundingEnum[keyof typeof ProductPackResponseDeterministicGroundingEnum];

/**
 * @export
 */
export const ProductPackResponseGroundingStatusEnum = {
    Grounded: 'grounded',
    PartiallyGrounded: 'partially_grounded',
    Ungrounded: 'ungrounded'
} as const;
export type ProductPackResponseGroundingStatusEnum = typeof ProductPackResponseGroundingStatusEnum[keyof typeof ProductPackResponseGroundingStatusEnum];

/**
 * @export
 */
export const ProductPackResponseLivePricingAvailableEnum = {
    False: false
} as const;
export type ProductPackResponseLivePricingAvailableEnum = typeof ProductPackResponseLivePricingAvailableEnum[keyof typeof ProductPackResponseLivePricingAvailableEnum];

/**
 * @export
 */
export const ProductPackResponseProducerSelectionPerformedEnum = {
    False: false
} as const;
export type ProductPackResponseProducerSelectionPerformedEnum = typeof ProductPackResponseProducerSelectionPerformedEnum[keyof typeof ProductPackResponseProducerSelectionPerformedEnum];

/**
 * @export
 */
export const ProductPackResponseSchemaNameEnum = {
    JawwwsProductPackResponse: 'jawwws.product_pack_response'
} as const;
export type ProductPackResponseSchemaNameEnum = typeof ProductPackResponseSchemaNameEnum[keyof typeof ProductPackResponseSchemaNameEnum];

/**
 * @export
 */
export const ProductPackResponseSpecmatchPerformedEnum = {
    False: false
} as const;
export type ProductPackResponseSpecmatchPerformedEnum = typeof ProductPackResponseSpecmatchPerformedEnum[keyof typeof ProductPackResponseSpecmatchPerformedEnum];

/**
 * @export
 */
export const ProductPackResponseStatusEnum = {
    NeedsReview: 'needs_review'
} as const;
export type ProductPackResponseStatusEnum = typeof ProductPackResponseStatusEnum[keyof typeof ProductPackResponseStatusEnum];


/**
 * Check if a given object implements the ProductPackResponse interface.
 */
export function instanceOfProductPackResponse(value: object): value is ProductPackResponse {
    if (!('classification' in value) || value['classification'] === undefined) return false;
    if (!('groundingStatus' in value) || value['groundingStatus'] === undefined) return false;
    if (!('providerMetadata' in value) || value['providerMetadata'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    if (!('summary' in value) || value['summary'] === undefined) return false;
    return true;
}

export function ProductPackResponseFromJSON(json: any): ProductPackResponse {
    return ProductPackResponseFromJSONTyped(json, false);
}

export function ProductPackResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPackResponse {
    if (json == null) {
        return json;
    }
    return {

        'benchmarkReferences': json['benchmark_references'] == null ? undefined : ((json['benchmark_references'] as Array<any>).map(ProductPackBenchmarkReferenceFromJSON)),
        'canonicalSpecificationsCreated': json['canonical_specifications_created'] == null ? undefined : json['canonical_specifications_created'],
        'clarifications': json['clarifications'] == null ? undefined : ((json['clarifications'] as Array<any>).map(ProductPackClarificationFromJSON)),
        'classification': IntentClassificationResponseFromJSON(json['classification']),
        'confirmedAvailability': json['confirmed_availability'] == null ? undefined : json['confirmed_availability'],
        'coreRecommendations': json['core_recommendations'] == null ? undefined : ((json['core_recommendations'] as Array<any>).map(ProductPackRecommendationFromJSON)),
        'deterministicGrounding': json['deterministic_grounding'] == null ? undefined : json['deterministic_grounding'],
        'excludedRecommendations': json['excluded_recommendations'] == null ? undefined : ((json['excluded_recommendations'] as Array<any>).map(ProductPackRecommendationFromJSON)),
        'groundingStatus': json['grounding_status'],
        'livePricingAvailable': json['live_pricing_available'] == null ? undefined : json['live_pricing_available'],
        'noBenchmarkReason': json['no_benchmark_reason'] == null ? undefined : json['no_benchmark_reason'],
        'optionalRecommendations': json['optional_recommendations'] == null ? undefined : ((json['optional_recommendations'] as Array<any>).map(ProductPackRecommendationFromJSON)),
        'producerSelectionPerformed': json['producer_selection_performed'] == null ? undefined : json['producer_selection_performed'],
        'providerMetadata': IntentProviderMetadataFromJSON(json['provider_metadata']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': SourceInputFromJSON(json['source']),
        'specmatchPerformed': json['specmatch_performed'] == null ? undefined : json['specmatch_performed'],
        'status': json['status'] == null ? undefined : json['status'],
        'summary': json['summary'],
    };
}

export function ProductPackResponseToJSON(json: any): ProductPackResponse {
    return ProductPackResponseToJSONTyped(json, false);
}

export function ProductPackResponseToJSONTyped(value?: ProductPackResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'benchmark_references': value['benchmarkReferences'] == null ? undefined : ((value['benchmarkReferences'] as Array<any>).map(ProductPackBenchmarkReferenceToJSON)),
        'canonical_specifications_created': value['canonicalSpecificationsCreated'],
        'clarifications': value['clarifications'] == null ? undefined : ((value['clarifications'] as Array<any>).map(ProductPackClarificationToJSON)),
        'classification': IntentClassificationResponseToJSON(value['classification']),
        'confirmed_availability': value['confirmedAvailability'],
        'core_recommendations': value['coreRecommendations'] == null ? undefined : ((value['coreRecommendations'] as Array<any>).map(ProductPackRecommendationToJSON)),
        'deterministic_grounding': value['deterministicGrounding'],
        'excluded_recommendations': value['excludedRecommendations'] == null ? undefined : ((value['excludedRecommendations'] as Array<any>).map(ProductPackRecommendationToJSON)),
        'grounding_status': value['groundingStatus'],
        'live_pricing_available': value['livePricingAvailable'],
        'no_benchmark_reason': value['noBenchmarkReason'],
        'optional_recommendations': value['optionalRecommendations'] == null ? undefined : ((value['optionalRecommendations'] as Array<any>).map(ProductPackRecommendationToJSON)),
        'producer_selection_performed': value['producerSelectionPerformed'],
        'provider_metadata': IntentProviderMetadataToJSON(value['providerMetadata']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': SourceInputToJSON(value['source']),
        'specmatch_performed': value['specmatchPerformed'],
        'status': value['status'],
        'summary': value['summary'],
    };
}
