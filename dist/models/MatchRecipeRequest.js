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
exports.MatchRecipeRequestSchemaVersionEnum = exports.MatchRecipeRequestSchemaNameEnum = void 0;
exports.instanceOfMatchRecipeRequest = instanceOfMatchRecipeRequest;
exports.MatchRecipeRequestFromJSON = MatchRecipeRequestFromJSON;
exports.MatchRecipeRequestFromJSONTyped = MatchRecipeRequestFromJSONTyped;
exports.MatchRecipeRequestToJSON = MatchRecipeRequestToJSON;
exports.MatchRecipeRequestToJSONTyped = MatchRecipeRequestToJSONTyped;
const PublicMatchTargetRequest_1 = require("./PublicMatchTargetRequest");
const UseRequirement_1 = require("./UseRequirement");
const ServiceRequirements_1 = require("./ServiceRequirements");
/**
 * @export
 */
exports.MatchRecipeRequestSchemaNameEnum = {
    GnawwRecipeSpecmatchRequest: 'gnaww.recipe_specmatch_request'
};
/**
 * @export
 */
exports.MatchRecipeRequestSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * Check if a given object implements the MatchRecipeRequest interface.
 */
function instanceOfMatchRecipeRequest(value) {
    if (!('quantity' in value) || value['quantity'] === undefined)
        return false;
    if (!('target' in value) || value['target'] === undefined)
        return false;
    return true;
}
function MatchRecipeRequestFromJSON(json) {
    return MatchRecipeRequestFromJSONTyped(json, false);
}
function MatchRecipeRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'quantity': json['quantity'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'serviceRequirements': json['service_requirements'] == null ? undefined : (0, ServiceRequirements_1.ServiceRequirementsFromJSON)(json['service_requirements']),
        'target': (0, PublicMatchTargetRequest_1.PublicMatchTargetRequestFromJSON)(json['target']),
        'useRequirements': json['use_requirements'] == null ? undefined : (json['use_requirements'].map(UseRequirement_1.UseRequirementFromJSON)),
    };
}
function MatchRecipeRequestToJSON(json) {
    return MatchRecipeRequestToJSONTyped(json, false);
}
function MatchRecipeRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'quantity': value['quantity'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'service_requirements': (0, ServiceRequirements_1.ServiceRequirementsToJSON)(value['serviceRequirements']),
        'target': (0, PublicMatchTargetRequest_1.PublicMatchTargetRequestToJSON)(value['target']),
        'use_requirements': value['useRequirements'] == null ? undefined : (value['useRequirements'].map(UseRequirement_1.UseRequirementToJSON)),
    };
}
