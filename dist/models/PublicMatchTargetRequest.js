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
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicMatchTargetRequestSourceEnum = void 0;
exports.instanceOfPublicMatchTargetRequest = instanceOfPublicMatchTargetRequest;
exports.PublicMatchTargetRequestFromJSON = PublicMatchTargetRequestFromJSON;
exports.PublicMatchTargetRequestFromJSONTyped = PublicMatchTargetRequestFromJSONTyped;
exports.PublicMatchTargetRequestToJSON = PublicMatchTargetRequestToJSON;
exports.PublicMatchTargetRequestToJSONTyped = PublicMatchTargetRequestToJSONTyped;
/**
 * @export
 */
exports.PublicMatchTargetRequestSourceEnum = {
    PublishedProfile: 'published_profile',
    DemoFixture: 'demo_fixture',
    ApiDerivedDemo: 'api_derived_demo'
};
/**
 * Check if a given object implements the PublicMatchTargetRequest interface.
 */
function instanceOfPublicMatchTargetRequest(value) {
    if (!('producerProfileId' in value) || value['producerProfileId'] === undefined)
        return false;
    if (!('source' in value) || value['source'] === undefined)
        return false;
    return true;
}
function PublicMatchTargetRequestFromJSON(json) {
    return PublicMatchTargetRequestFromJSONTyped(json, false);
}
function PublicMatchTargetRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'producerProfileId': json['producer_profile_id'],
        'source': json['source'],
    };
}
function PublicMatchTargetRequestToJSON(json) {
    return PublicMatchTargetRequestToJSONTyped(json, false);
}
function PublicMatchTargetRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'producer_profile_id': value['producerProfileId'],
        'source': value['source'],
    };
}
