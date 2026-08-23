"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPackResponseStatusEnum = exports.ProductPackResponseSpecmatchPerformedEnum = exports.ProductPackResponseSchemaNameEnum = exports.ProductPackResponseProducerSelectionPerformedEnum = exports.ProductPackResponseLivePricingAvailableEnum = exports.ProductPackResponseGroundingStatusEnum = exports.ProductPackResponseDeterministicGroundingEnum = exports.ProductPackResponseConfirmedAvailabilityEnum = exports.ProductPackResponseCanonicalSpecificationsCreatedEnum = void 0;
exports.instanceOfProductPackResponse = instanceOfProductPackResponse;
exports.ProductPackResponseFromJSON = ProductPackResponseFromJSON;
exports.ProductPackResponseFromJSONTyped = ProductPackResponseFromJSONTyped;
exports.ProductPackResponseToJSON = ProductPackResponseToJSON;
exports.ProductPackResponseToJSONTyped = ProductPackResponseToJSONTyped;
const ProductPackRecommendation_1 = require("./ProductPackRecommendation");
const IntentProviderMetadata_1 = require("./IntentProviderMetadata");
const ProductPackClarification_1 = require("./ProductPackClarification");
const IntentClassificationResponse_1 = require("./IntentClassificationResponse");
const SourceInput_1 = require("./SourceInput");
const ProductPackBenchmarkReference_1 = require("./ProductPackBenchmarkReference");
/**
 * @export
 */
exports.ProductPackResponseCanonicalSpecificationsCreatedEnum = {
    False: false
};
/**
 * @export
 */
exports.ProductPackResponseConfirmedAvailabilityEnum = {
    False: false
};
/**
 * @export
 */
exports.ProductPackResponseDeterministicGroundingEnum = {
    True: true
};
/**
 * @export
 */
exports.ProductPackResponseGroundingStatusEnum = {
    Grounded: 'grounded',
    PartiallyGrounded: 'partially_grounded',
    Ungrounded: 'ungrounded'
};
/**
 * @export
 */
exports.ProductPackResponseLivePricingAvailableEnum = {
    False: false
};
/**
 * @export
 */
exports.ProductPackResponseProducerSelectionPerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.ProductPackResponseSchemaNameEnum = {
    JawwwsProductPackResponse: 'jawwws.product_pack_response'
};
/**
 * @export
 */
exports.ProductPackResponseSpecmatchPerformedEnum = {
    False: false
};
/**
 * @export
 */
exports.ProductPackResponseStatusEnum = {
    NeedsReview: 'needs_review'
};
/**
 * Check if a given object implements the ProductPackResponse interface.
 */
function instanceOfProductPackResponse(value) {
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
function ProductPackResponseFromJSON(json) {
    return ProductPackResponseFromJSONTyped(json, false);
}
function ProductPackResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'benchmarkReferences': json['benchmark_references'] == null ? undefined : (json['benchmark_references'].map(ProductPackBenchmarkReference_1.ProductPackBenchmarkReferenceFromJSON)),
        'canonicalSpecificationsCreated': json['canonical_specifications_created'] == null ? undefined : json['canonical_specifications_created'],
        'clarifications': json['clarifications'] == null ? undefined : (json['clarifications'].map(ProductPackClarification_1.ProductPackClarificationFromJSON)),
        'classification': (0, IntentClassificationResponse_1.IntentClassificationResponseFromJSON)(json['classification']),
        'confirmedAvailability': json['confirmed_availability'] == null ? undefined : json['confirmed_availability'],
        'coreRecommendations': json['core_recommendations'] == null ? undefined : (json['core_recommendations'].map(ProductPackRecommendation_1.ProductPackRecommendationFromJSON)),
        'deterministicGrounding': json['deterministic_grounding'] == null ? undefined : json['deterministic_grounding'],
        'excludedRecommendations': json['excluded_recommendations'] == null ? undefined : (json['excluded_recommendations'].map(ProductPackRecommendation_1.ProductPackRecommendationFromJSON)),
        'groundingStatus': json['grounding_status'],
        'livePricingAvailable': json['live_pricing_available'] == null ? undefined : json['live_pricing_available'],
        'noBenchmarkReason': json['no_benchmark_reason'] == null ? undefined : json['no_benchmark_reason'],
        'optionalRecommendations': json['optional_recommendations'] == null ? undefined : (json['optional_recommendations'].map(ProductPackRecommendation_1.ProductPackRecommendationFromJSON)),
        'producerSelectionPerformed': json['producer_selection_performed'] == null ? undefined : json['producer_selection_performed'],
        'providerMetadata': (0, IntentProviderMetadata_1.IntentProviderMetadataFromJSON)(json['provider_metadata']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': (0, SourceInput_1.SourceInputFromJSON)(json['source']),
        'specmatchPerformed': json['specmatch_performed'] == null ? undefined : json['specmatch_performed'],
        'status': json['status'] == null ? undefined : json['status'],
        'summary': json['summary'],
    };
}
function ProductPackResponseToJSON(json) {
    return ProductPackResponseToJSONTyped(json, false);
}
function ProductPackResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'benchmark_references': value['benchmarkReferences'] == null ? undefined : (value['benchmarkReferences'].map(ProductPackBenchmarkReference_1.ProductPackBenchmarkReferenceToJSON)),
        'canonical_specifications_created': value['canonicalSpecificationsCreated'],
        'clarifications': value['clarifications'] == null ? undefined : (value['clarifications'].map(ProductPackClarification_1.ProductPackClarificationToJSON)),
        'classification': (0, IntentClassificationResponse_1.IntentClassificationResponseToJSON)(value['classification']),
        'confirmed_availability': value['confirmedAvailability'],
        'core_recommendations': value['coreRecommendations'] == null ? undefined : (value['coreRecommendations'].map(ProductPackRecommendation_1.ProductPackRecommendationToJSON)),
        'deterministic_grounding': value['deterministicGrounding'],
        'excluded_recommendations': value['excludedRecommendations'] == null ? undefined : (value['excludedRecommendations'].map(ProductPackRecommendation_1.ProductPackRecommendationToJSON)),
        'grounding_status': value['groundingStatus'],
        'live_pricing_available': value['livePricingAvailable'],
        'no_benchmark_reason': value['noBenchmarkReason'],
        'optional_recommendations': value['optionalRecommendations'] == null ? undefined : (value['optionalRecommendations'].map(ProductPackRecommendation_1.ProductPackRecommendationToJSON)),
        'producer_selection_performed': value['producerSelectionPerformed'],
        'provider_metadata': (0, IntentProviderMetadata_1.IntentProviderMetadataToJSON)(value['providerMetadata']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': (0, SourceInput_1.SourceInputToJSON)(value['source']),
        'specmatch_performed': value['specmatchPerformed'],
        'status': value['status'],
        'summary': value['summary'],
    };
}
