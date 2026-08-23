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
exports.PublicMatchTargetStateTruthStateEnum = exports.PublicMatchTargetStateSourceEnum = void 0;
exports.instanceOfPublicMatchTargetState = instanceOfPublicMatchTargetState;
exports.PublicMatchTargetStateFromJSON = PublicMatchTargetStateFromJSON;
exports.PublicMatchTargetStateFromJSONTyped = PublicMatchTargetStateFromJSONTyped;
exports.PublicMatchTargetStateToJSON = PublicMatchTargetStateToJSON;
exports.PublicMatchTargetStateToJSONTyped = PublicMatchTargetStateToJSONTyped;
/**
 * @export
 */
exports.PublicMatchTargetStateSourceEnum = {
    PublishedProfile: 'published_profile',
    DemoFixture: 'demo_fixture',
    ApiDerivedDemo: 'api_derived_demo'
};
/**
 * @export
 */
exports.PublicMatchTargetStateTruthStateEnum = {
    PublishedCapability: 'published_capability',
    FixtureBacked: 'fixture_backed',
    LiveApiDerived: 'live_api_derived'
};
/**
 * Check if a given object implements the PublicMatchTargetState interface.
 */
function instanceOfPublicMatchTargetState(value) {
    if (!('producerId' in value) || value['producerId'] === undefined)
        return false;
    if (!('producerName' in value) || value['producerName'] === undefined)
        return false;
    if (!('producerProfileId' in value) || value['producerProfileId'] === undefined)
        return false;
    if (!('producerProfileSchemaVersion' in value) || value['producerProfileSchemaVersion'] === undefined)
        return false;
    if (!('source' in value) || value['source'] === undefined)
        return false;
    if (!('truthState' in value) || value['truthState'] === undefined)
        return false;
    return true;
}
function PublicMatchTargetStateFromJSON(json) {
    return PublicMatchTargetStateFromJSONTyped(json, false);
}
function PublicMatchTargetStateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'producerId': json['producer_id'],
        'producerName': json['producer_name'],
        'producerProfileId': json['producer_profile_id'],
        'producerProfileSchemaVersion': json['producer_profile_schema_version'],
        'source': json['source'],
        'truthState': json['truth_state'],
    };
}
function PublicMatchTargetStateToJSON(json) {
    return PublicMatchTargetStateToJSONTyped(json, false);
}
function PublicMatchTargetStateToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'producer_id': value['producerId'],
        'producer_name': value['producerName'],
        'producer_profile_id': value['producerProfileId'],
        'producer_profile_schema_version': value['producerProfileSchemaVersion'],
        'source': value['source'],
        'truth_state': value['truthState'],
    };
}
