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
import type { PublicMatchTargetRequest } from './PublicMatchTargetRequest';
import {
    PublicMatchTargetRequestFromJSON,
    PublicMatchTargetRequestFromJSONTyped,
    PublicMatchTargetRequestToJSON,
    PublicMatchTargetRequestToJSONTyped,
} from './PublicMatchTargetRequest';
import type { UseRequirement } from './UseRequirement';
import {
    UseRequirementFromJSON,
    UseRequirementFromJSONTyped,
    UseRequirementToJSON,
    UseRequirementToJSONTyped,
} from './UseRequirement';
import type { ServiceRequirements } from './ServiceRequirements';
import {
    ServiceRequirementsFromJSON,
    ServiceRequirementsFromJSONTyped,
    ServiceRequirementsToJSON,
    ServiceRequirementsToJSONTyped,
} from './ServiceRequirements';

/**
 * Run context supplied when matching one persisted Recipe.
 * @export
 * @interface MatchRecipeRequest
 */
export interface MatchRecipeRequest {
    /**
     *
     * @type {number}
     * @memberof MatchRecipeRequest
     */
    quantity: number;
    /**
     *
     * @type {MatchRecipeRequestSchemaNameEnum}
     * @memberof MatchRecipeRequest
     */
    schemaName?: MatchRecipeRequestSchemaNameEnum;
    /**
     *
     * @type {MatchRecipeRequestSchemaVersionEnum}
     * @memberof MatchRecipeRequest
     */
    schemaVersion?: MatchRecipeRequestSchemaVersionEnum;
    /**
     *
     * @type {ServiceRequirements}
     * @memberof MatchRecipeRequest
     */
    serviceRequirements?: ServiceRequirements;
    /**
     *
     * @type {PublicMatchTargetRequest}
     * @memberof MatchRecipeRequest
     */
    target: PublicMatchTargetRequest;
    /**
     *
     * @type {Array<UseRequirement>}
     * @memberof MatchRecipeRequest
     */
    useRequirements?: Array<UseRequirement>;
}


/**
 * @export
 */
export const MatchRecipeRequestSchemaNameEnum = {
    GnawwRecipeSpecmatchRequest: 'gnaww.recipe_specmatch_request'
} as const;
export type MatchRecipeRequestSchemaNameEnum = typeof MatchRecipeRequestSchemaNameEnum[keyof typeof MatchRecipeRequestSchemaNameEnum];

/**
 * @export
 */
export const MatchRecipeRequestSchemaVersionEnum = {
    _01: '0.1'
} as const;
export type MatchRecipeRequestSchemaVersionEnum = typeof MatchRecipeRequestSchemaVersionEnum[keyof typeof MatchRecipeRequestSchemaVersionEnum];


/**
 * Check if a given object implements the MatchRecipeRequest interface.
 */
export function instanceOfMatchRecipeRequest(value: object): value is MatchRecipeRequest {
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    if (!('target' in value) || value['target'] === undefined) return false;
    return true;
}

export function MatchRecipeRequestFromJSON(json: any): MatchRecipeRequest {
    return MatchRecipeRequestFromJSONTyped(json, false);
}

export function MatchRecipeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchRecipeRequest {
    if (json == null) {
        return json;
    }
    return {

        'quantity': json['quantity'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'serviceRequirements': json['service_requirements'] == null ? undefined : ServiceRequirementsFromJSON(json['service_requirements']),
        'target': PublicMatchTargetRequestFromJSON(json['target']),
        'useRequirements': json['use_requirements'] == null ? undefined : ((json['use_requirements'] as Array<any>).map(UseRequirementFromJSON)),
    };
}

export function MatchRecipeRequestToJSON(json: any): MatchRecipeRequest {
    return MatchRecipeRequestToJSONTyped(json, false);
}

export function MatchRecipeRequestToJSONTyped(value?: MatchRecipeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'quantity': value['quantity'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'service_requirements': ServiceRequirementsToJSON(value['serviceRequirements']),
        'target': PublicMatchTargetRequestToJSON(value['target']),
        'use_requirements': value['useRequirements'] == null ? undefined : ((value['useRequirements'] as Array<any>).map(UseRequirementToJSON)),
    };
}
