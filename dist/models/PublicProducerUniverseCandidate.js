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
exports.PublicProducerUniverseCandidateTruthStateEnum = exports.PublicProducerUniverseCandidateStatusEnum = exports.PublicProducerUniverseCandidateSourceEnum = void 0;
exports.instanceOfPublicProducerUniverseCandidate = instanceOfPublicProducerUniverseCandidate;
exports.PublicProducerUniverseCandidateFromJSON = PublicProducerUniverseCandidateFromJSON;
exports.PublicProducerUniverseCandidateFromJSONTyped = PublicProducerUniverseCandidateFromJSONTyped;
exports.PublicProducerUniverseCandidateToJSON = PublicProducerUniverseCandidateToJSON;
exports.PublicProducerUniverseCandidateToJSONTyped = PublicProducerUniverseCandidateToJSONTyped;
const FulfilmentMatchResult_1 = require("./FulfilmentMatchResult");
const SpecMatchResult_1 = require("./SpecMatchResult");
/**
 * @export
 */
exports.PublicProducerUniverseCandidateSourceEnum = {
    PublishedProfile: 'published_profile',
    DemoFixture: 'demo_fixture'
};
/**
 * @export
 */
exports.PublicProducerUniverseCandidateStatusEnum = {
    Capable: 'capable',
    NeedsReview: 'needs_review',
    Blocked: 'blocked'
};
/**
 * @export
 */
exports.PublicProducerUniverseCandidateTruthStateEnum = {
    PublishedCapability: 'published_capability',
    FixtureBacked: 'fixture_backed'
};
/**
 * Check if a given object implements the PublicProducerUniverseCandidate interface.
 */
function instanceOfPublicProducerUniverseCandidate(value) {
    if (!('fulfilment' in value) || value['fulfilment'] === undefined)
        return false;
    if (!('isLiveSupplier' in value) || value['isLiveSupplier'] === undefined)
        return false;
    if (!('match' in value) || value['match'] === undefined)
        return false;
    if (!('producerId' in value) || value['producerId'] === undefined)
        return false;
    if (!('producerName' in value) || value['producerName'] === undefined)
        return false;
    if (!('producerProfileId' in value) || value['producerProfileId'] === undefined)
        return false;
    if (!('producerProfileSchemaVersion' in value) || value['producerProfileSchemaVersion'] === undefined)
        return false;
    if (!('rank' in value) || value['rank'] === undefined)
        return false;
    if (!('source' in value) || value['source'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    if (!('truthState' in value) || value['truthState'] === undefined)
        return false;
    return true;
}
function PublicProducerUniverseCandidateFromJSON(json) {
    return PublicProducerUniverseCandidateFromJSONTyped(json, false);
}
function PublicProducerUniverseCandidateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'fulfilment': (0, FulfilmentMatchResult_1.FulfilmentMatchResultFromJSON)(json['fulfilment']),
        'isLiveSupplier': json['is_live_supplier'],
        'match': (0, SpecMatchResult_1.SpecMatchResultFromJSON)(json['match']),
        'producerId': json['producer_id'],
        'producerName': json['producer_name'],
        'producerProfileId': json['producer_profile_id'],
        'producerProfileSchemaVersion': json['producer_profile_schema_version'],
        'rank': json['rank'],
        'source': json['source'],
        'status': json['status'],
        'truthState': json['truth_state'],
    };
}
function PublicProducerUniverseCandidateToJSON(json) {
    return PublicProducerUniverseCandidateToJSONTyped(json, false);
}
function PublicProducerUniverseCandidateToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'fulfilment': (0, FulfilmentMatchResult_1.FulfilmentMatchResultToJSON)(value['fulfilment']),
        'is_live_supplier': value['isLiveSupplier'],
        'match': (0, SpecMatchResult_1.SpecMatchResultToJSON)(value['match']),
        'producer_id': value['producerId'],
        'producer_name': value['producerName'],
        'producer_profile_id': value['producerProfileId'],
        'producer_profile_schema_version': value['producerProfileSchemaVersion'],
        'rank': value['rank'],
        'source': value['source'],
        'status': value['status'],
        'truth_state': value['truthState'],
    };
}
