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

import { mapValues } from '../runtime';
import type { Gjs } from './Gjs';
import {
    GjsFromJSON,
    GjsFromJSONTyped,
    GjsToJSON,
    GjsToJSONTyped,
} from './Gjs';

/**
 * Resolve one exact canonical Gnaww Job Specification to a Recipe.
 * @export
 * @interface ResolveRecipeRequest
 */
export interface ResolveRecipeRequest {
    /**
     *
     * @type {Gjs}
     * @memberof ResolveRecipeRequest
     */
    gjs: Gjs;
}

/**
 * Check if a given object implements the ResolveRecipeRequest interface.
 */
export function instanceOfResolveRecipeRequest(value: object): value is ResolveRecipeRequest {
    if (!('gjs' in value) || value['gjs'] === undefined) return false;
    return true;
}

export function ResolveRecipeRequestFromJSON(json: any): ResolveRecipeRequest {
    return ResolveRecipeRequestFromJSONTyped(json, false);
}

export function ResolveRecipeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResolveRecipeRequest {
    if (json == null) {
        return json;
    }
    return {

        'gjs': GjsFromJSON(json['gjs']),
    };
}

export function ResolveRecipeRequestToJSON(json: any): ResolveRecipeRequest {
    return ResolveRecipeRequestToJSONTyped(json, false);
}

export function ResolveRecipeRequestToJSONTyped(value?: ResolveRecipeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'gjs': GjsToJSON(value['gjs']),
    };
}
