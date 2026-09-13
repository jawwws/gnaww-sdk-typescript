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
import { GjsFromJSON, GjsToJSON, } from './Gjs';
/**
 * Check if a given object implements the ResolveRecipeRequest interface.
 */
export function instanceOfResolveRecipeRequest(value) {
    if (!('gjs' in value) || value['gjs'] === undefined)
        return false;
    return true;
}
export function ResolveRecipeRequestFromJSON(json) {
    return ResolveRecipeRequestFromJSONTyped(json, false);
}
export function ResolveRecipeRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'gjs': GjsFromJSON(json['gjs']),
    };
}
export function ResolveRecipeRequestToJSON(json) {
    return ResolveRecipeRequestToJSONTyped(json, false);
}
export function ResolveRecipeRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'gjs': GjsToJSON(value['gjs']),
    };
}
