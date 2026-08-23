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
import { PublicMatchTargetRequestFromJSON, PublicMatchTargetRequestToJSON, } from './PublicMatchTargetRequest';
import { UseRequirementFromJSON, UseRequirementToJSON, } from './UseRequirement';
import { ServiceRequirementsFromJSON, ServiceRequirementsToJSON, } from './ServiceRequirements';
/**
 * @export
 */
export const MatchRecipeRequestSchemaNameEnum = {
    GnawwRecipeSpecmatchRequest: 'gnaww.recipe_specmatch_request'
};
/**
 * @export
 */
export const MatchRecipeRequestSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * Check if a given object implements the MatchRecipeRequest interface.
 */
export function instanceOfMatchRecipeRequest(value) {
    if (!('quantity' in value) || value['quantity'] === undefined)
        return false;
    if (!('target' in value) || value['target'] === undefined)
        return false;
    return true;
}
export function MatchRecipeRequestFromJSON(json) {
    return MatchRecipeRequestFromJSONTyped(json, false);
}
export function MatchRecipeRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'quantity': json['quantity'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'serviceRequirements': json['service_requirements'] == null ? undefined : ServiceRequirementsFromJSON(json['service_requirements']),
        'target': PublicMatchTargetRequestFromJSON(json['target']),
        'useRequirements': json['use_requirements'] == null ? undefined : (json['use_requirements'].map(UseRequirementFromJSON)),
    };
}
export function MatchRecipeRequestToJSON(json) {
    return MatchRecipeRequestToJSONTyped(json, false);
}
export function MatchRecipeRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'quantity': value['quantity'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'service_requirements': ServiceRequirementsToJSON(value['serviceRequirements']),
        'target': PublicMatchTargetRequestToJSON(value['target']),
        'use_requirements': value['useRequirements'] == null ? undefined : (value['useRequirements'].map(UseRequirementToJSON)),
    };
}
