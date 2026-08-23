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
exports.instanceOfResolveRecipeRequest = instanceOfResolveRecipeRequest;
exports.ResolveRecipeRequestFromJSON = ResolveRecipeRequestFromJSON;
exports.ResolveRecipeRequestFromJSONTyped = ResolveRecipeRequestFromJSONTyped;
exports.ResolveRecipeRequestToJSON = ResolveRecipeRequestToJSON;
exports.ResolveRecipeRequestToJSONTyped = ResolveRecipeRequestToJSONTyped;
const Gjs1_1 = require("./Gjs1");
/**
 * Check if a given object implements the ResolveRecipeRequest interface.
 */
function instanceOfResolveRecipeRequest(value) {
    if (!('gjs' in value) || value['gjs'] === undefined)
        return false;
    return true;
}
function ResolveRecipeRequestFromJSON(json) {
    return ResolveRecipeRequestFromJSONTyped(json, false);
}
function ResolveRecipeRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'gjs': (0, Gjs1_1.Gjs1FromJSON)(json['gjs']),
    };
}
function ResolveRecipeRequestToJSON(json) {
    return ResolveRecipeRequestToJSONTyped(json, false);
}
function ResolveRecipeRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'gjs': (0, Gjs1_1.Gjs1ToJSON)(value['gjs']),
    };
}
