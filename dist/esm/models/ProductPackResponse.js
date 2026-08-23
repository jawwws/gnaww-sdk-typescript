/* tslint:disable */
/* eslint-disable */
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
import { ProductPackRecommendationFromJSON, ProductPackRecommendationToJSON, } from './ProductPackRecommendation';
import { IntentProviderMetadataFromJSON, IntentProviderMetadataToJSON, } from './IntentProviderMetadata';
import { ProductPackClarificationFromJSON, ProductPackClarificationToJSON, } from './ProductPackClarification';
import { IntentClassificationResponseFromJSON, IntentClassificationResponseToJSON, } from './IntentClassificationResponse';
import { SourceInputFromJSON, SourceInputToJSON, } from './SourceInput';
import { ProductPackBenchmarkReferenceFromJSON, ProductPackBenchmarkReferenceToJSON, } from './ProductPackBenchmarkReference';
/**
 * @export
 */
export const ProductPackResponseCanonicalSpecificationsCreatedEnum = {
    False: false
};
/**
 * @export
 */
export const ProductPackResponseConfirmedAvailabilityEnum = {
    False: false
};
/**
 * @export
 */
export const ProductPackResponseDeterministicGroundingEnum = {
    True: true
};
/**
 * @export
 */
export const ProductPackResponseGroundingStatusEnum = {
    Grounded: 'grounded',
    PartiallyGrounded: 'partially_grounded',
    Ungrounded: 'ungrounded'
};
/**
 * @export
 */
export const ProductPackResponseLivePricingAvailableEnum = {
    False: false
};
/**
 * @export
 */
export const ProductPackResponseProducerSelectionPerformedEnum = {
    False: false
};
/**
 * @export
 */
export const ProductPackResponseSchemaNameEnum = {
    JawwwsProductPackResponse: 'jawwws.product_pack_response'
};
/**
 * @export
 */
export const ProductPackResponseSpecmatchPerformedEnum = {
    False: false
};
/**
 * @export
 */
export const ProductPackResponseStatusEnum = {
    NeedsReview: 'needs_review'
};
/**
 * Check if a given object implements the ProductPackResponse interface.
 */
export function instanceOfProductPackResponse(value) {
    if (!('classification' in value) || value['classification'] === undefined)
        return false;
    if (!('groundingStatus' in value) || value['groundingStatus'] === undefined)
        return false;
    if (!('providerMetadata' in value) || value['providerMetadata'] === undefined)
        return false;
    if (!('source' in value) || value['source'] === undefined)
        return false;
    if (!('summary' in value) || value['summary'] === undefined)
        return false;
    return true;
}
export function ProductPackResponseFromJSON(json) {
    return ProductPackResponseFromJSONTyped(json, false);
}
export function ProductPackResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'benchmarkReferences': json['benchmark_references'] == null ? undefined : (json['benchmark_references'].map(ProductPackBenchmarkReferenceFromJSON)),
        'canonicalSpecificationsCreated': json['canonical_specifications_created'] == null ? undefined : json['canonical_specifications_created'],
        'clarifications': json['clarifications'] == null ? undefined : (json['clarifications'].map(ProductPackClarificationFromJSON)),
        'classification': IntentClassificationResponseFromJSON(json['classification']),
        'confirmedAvailability': json['confirmed_availability'] == null ? undefined : json['confirmed_availability'],
        'coreRecommendations': json['core_recommendations'] == null ? undefined : (json['core_recommendations'].map(ProductPackRecommendationFromJSON)),
        'deterministicGrounding': json['deterministic_grounding'] == null ? undefined : json['deterministic_grounding'],
        'excludedRecommendations': json['excluded_recommendations'] == null ? undefined : (json['excluded_recommendations'].map(ProductPackRecommendationFromJSON)),
        'groundingStatus': json['grounding_status'],
        'livePricingAvailable': json['live_pricing_available'] == null ? undefined : json['live_pricing_available'],
        'noBenchmarkReason': json['no_benchmark_reason'] == null ? undefined : json['no_benchmark_reason'],
        'optionalRecommendations': json['optional_recommendations'] == null ? undefined : (json['optional_recommendations'].map(ProductPackRecommendationFromJSON)),
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
export function ProductPackResponseToJSON(json) {
    return ProductPackResponseToJSONTyped(json, false);
}
export function ProductPackResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'benchmark_references': value['benchmarkReferences'] == null ? undefined : (value['benchmarkReferences'].map(ProductPackBenchmarkReferenceToJSON)),
        'canonical_specifications_created': value['canonicalSpecificationsCreated'],
        'clarifications': value['clarifications'] == null ? undefined : (value['clarifications'].map(ProductPackClarificationToJSON)),
        'classification': IntentClassificationResponseToJSON(value['classification']),
        'confirmed_availability': value['confirmedAvailability'],
        'core_recommendations': value['coreRecommendations'] == null ? undefined : (value['coreRecommendations'].map(ProductPackRecommendationToJSON)),
        'deterministic_grounding': value['deterministicGrounding'],
        'excluded_recommendations': value['excludedRecommendations'] == null ? undefined : (value['excludedRecommendations'].map(ProductPackRecommendationToJSON)),
        'grounding_status': value['groundingStatus'],
        'live_pricing_available': value['livePricingAvailable'],
        'no_benchmark_reason': value['noBenchmarkReason'],
        'optional_recommendations': value['optionalRecommendations'] == null ? undefined : (value['optionalRecommendations'].map(ProductPackRecommendationToJSON)),
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
