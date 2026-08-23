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
import { ProducerProductCapabilityFromJSON, ProducerProductCapabilityToJSON, } from './ProducerProductCapability';
/**
 * @export
 */
export const ProducerCapabilityResourceSchemaNameEnum = {
    GnawwProducerCapabilityResource: 'gnaww.producer_capability_resource'
};
/**
 * @export
 */
export const ProducerCapabilityResourceSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * @export
 */
export const ProducerCapabilityResourceSourceEnum = {
    PublishedProfile: 'published_profile',
    DemoFixture: 'demo_fixture',
    ApiDerivedDemo: 'api_derived_demo'
};
/**
 * @export
 */
export const ProducerCapabilityResourceTruthStateEnum = {
    PublishedCapability: 'published_capability',
    FixtureBacked: 'fixture_backed',
    LiveApiDerived: 'live_api_derived'
};
/**
 * Check if a given object implements the ProducerCapabilityResource interface.
 */
export function instanceOfProducerCapabilityResource(value) {
    if (!('isLiveSupplier' in value) || value['isLiveSupplier'] === undefined)
        return false;
    if (!('producerId' in value) || value['producerId'] === undefined)
        return false;
    if (!('producerName' in value) || value['producerName'] === undefined)
        return false;
    if (!('producerProfileId' in value) || value['producerProfileId'] === undefined)
        return false;
    if (!('producerProfileSchemaVersion' in value) || value['producerProfileSchemaVersion'] === undefined)
        return false;
    if (!('products' in value) || value['products'] === undefined)
        return false;
    if (!('schemaName' in value) || value['schemaName'] === undefined)
        return false;
    if (!('schemaVersion' in value) || value['schemaVersion'] === undefined)
        return false;
    if (!('source' in value) || value['source'] === undefined)
        return false;
    if (!('truthState' in value) || value['truthState'] === undefined)
        return false;
    return true;
}
export function ProducerCapabilityResourceFromJSON(json) {
    return ProducerCapabilityResourceFromJSONTyped(json, false);
}
export function ProducerCapabilityResourceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'isLiveSupplier': json['is_live_supplier'],
        'producerId': json['producer_id'],
        'producerName': json['producer_name'],
        'producerProfileId': json['producer_profile_id'],
        'producerProfileSchemaVersion': json['producer_profile_schema_version'],
        'products': (json['products'].map(ProducerProductCapabilityFromJSON)),
        'schemaName': json['schema_name'],
        'schemaVersion': json['schema_version'],
        'source': json['source'],
        'truthState': json['truth_state'],
    };
}
export function ProducerCapabilityResourceToJSON(json) {
    return ProducerCapabilityResourceToJSONTyped(json, false);
}
export function ProducerCapabilityResourceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'is_live_supplier': value['isLiveSupplier'],
        'producer_id': value['producerId'],
        'producer_name': value['producerName'],
        'producer_profile_id': value['producerProfileId'],
        'producer_profile_schema_version': value['producerProfileSchemaVersion'],
        'products': (value['products'].map(ProducerProductCapabilityToJSON)),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': value['source'],
        'truth_state': value['truthState'],
    };
}
