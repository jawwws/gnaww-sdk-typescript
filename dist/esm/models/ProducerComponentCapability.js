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
import { DimensionCapabilityFromJSON, DimensionCapabilityToJSON, } from './DimensionCapability';
import { MaterialCapabilityFromJSON, MaterialCapabilityToJSON, } from './MaterialCapability';
/**
 * @export
 */
export const ProducerComponentCapabilityRoleEnum = {
    Main: 'main',
    Flat: 'flat',
    Finished: 'finished',
    Cover: 'cover',
    Text: 'text',
    Insert: 'insert',
    Garment: 'garment',
    Decoration: 'decoration',
    Unknown: 'unknown'
};
/**
 * @export
 */
export const ProducerComponentCapabilitySidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the ProducerComponentCapability interface.
 */
export function instanceOfProducerComponentCapability(value) {
    if (!('role' in value) || value['role'] === undefined)
        return false;
    return true;
}
export function ProducerComponentCapabilityFromJSON(json) {
    return ProducerComponentCapabilityFromJSONTyped(json, false);
}
export function ProducerComponentCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'role': json['role'],
        'sides': json['sides'] == null ? undefined : json['sides'],
        'sizes': json['sizes'] == null ? undefined : (json['sizes'].map(DimensionCapabilityFromJSON)),
        'substrates': json['substrates'] == null ? undefined : (json['substrates'].map(MaterialCapabilityFromJSON)),
    };
}
export function ProducerComponentCapabilityToJSON(json) {
    return ProducerComponentCapabilityToJSONTyped(json, false);
}
export function ProducerComponentCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'role': value['role'],
        'sides': value['sides'],
        'sizes': value['sizes'] == null ? undefined : (value['sizes'].map(DimensionCapabilityToJSON)),
        'substrates': value['substrates'] == null ? undefined : (value['substrates'].map(MaterialCapabilityToJSON)),
    };
}
