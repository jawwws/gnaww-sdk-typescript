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
import type { Value } from './Value';
import {
    ValueFromJSON,
    ValueFromJSONTyped,
    ValueToJSON,
    ValueToJSONTyped,
} from './Value';
import type { PublicInterpretationScope } from './PublicInterpretationScope';
import {
    PublicInterpretationScopeFromJSON,
    PublicInterpretationScopeFromJSONTyped,
    PublicInterpretationScopeToJSON,
    PublicInterpretationScopeToJSONTyped,
} from './PublicInterpretationScope';

/**
 * One provenance-aware fact that applies across the parent intent.
 * @export
 * @interface PublicSharedContextFact
 */
export interface PublicSharedContextFact {
    /**
     *
     * @type {string}
     * @memberof PublicSharedContextFact
     */
    contextId: string;
    /**
     *
     * @type {string}
     * @memberof PublicSharedContextFact
     */
    key: string;
    /**
     *
     * @type {PublicSharedContextFactPostureEnum}
     * @memberof PublicSharedContextFact
     */
    posture?: PublicSharedContextFactPostureEnum;
    /**
     *
     * @type {PublicSharedContextFactProvenanceEnum}
     * @memberof PublicSharedContextFact
     */
    provenance: PublicSharedContextFactProvenanceEnum;
    /**
     *
     * @type {boolean}
     * @memberof PublicSharedContextFact
     */
    requiresConfirmation?: boolean;
    /**
     *
     * @type {PublicInterpretationScope}
     * @memberof PublicSharedContextFact
     */
    scope?: PublicInterpretationScope;
    /**
     *
     * @type {string}
     * @memberof PublicSharedContextFact
     */
    sourceExpression?: string | null;
    /**
     *
     * @type {Value}
     * @memberof PublicSharedContextFact
     */
    value?: Value | null;
}


/**
 * @export
 */
export const PublicSharedContextFactPostureEnum = {
    Exact: 'exact',
    Preference: 'preference',
    Tolerance: 'tolerance',
    Ambiguous: 'ambiguous'
} as const;
export type PublicSharedContextFactPostureEnum = typeof PublicSharedContextFactPostureEnum[keyof typeof PublicSharedContextFactPostureEnum];

/**
 * @export
 */
export const PublicSharedContextFactProvenanceEnum = {
    Supplied: 'supplied',
    Derived: 'derived',
    Confirmed: 'confirmed',
    Controlled: 'controlled'
} as const;
export type PublicSharedContextFactProvenanceEnum = typeof PublicSharedContextFactProvenanceEnum[keyof typeof PublicSharedContextFactProvenanceEnum];


/**
 * Check if a given object implements the PublicSharedContextFact interface.
 */
export function instanceOfPublicSharedContextFact(value: object): value is PublicSharedContextFact {
    if (!('contextId' in value) || value['contextId'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('provenance' in value) || value['provenance'] === undefined) return false;
    return true;
}

export function PublicSharedContextFactFromJSON(json: any): PublicSharedContextFact {
    return PublicSharedContextFactFromJSONTyped(json, false);
}

export function PublicSharedContextFactFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicSharedContextFact {
    if (json == null) {
        return json;
    }
    return {

        'contextId': json['context_id'],
        'key': json['key'],
        'posture': json['posture'] == null ? undefined : json['posture'],
        'provenance': json['provenance'],
        'requiresConfirmation': json['requires_confirmation'] == null ? undefined : json['requires_confirmation'],
        'scope': json['scope'] == null ? undefined : PublicInterpretationScopeFromJSON(json['scope']),
        'sourceExpression': json['source_expression'] == null ? undefined : json['source_expression'],
        'value': json['value'] == null ? undefined : ValueFromJSON(json['value']),
    };
}

export function PublicSharedContextFactToJSON(json: any): PublicSharedContextFact {
    return PublicSharedContextFactToJSONTyped(json, false);
}

export function PublicSharedContextFactToJSONTyped(value?: PublicSharedContextFact | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'context_id': value['contextId'],
        'key': value['key'],
        'posture': value['posture'],
        'provenance': value['provenance'],
        'requires_confirmation': value['requiresConfirmation'],
        'scope': PublicInterpretationScopeToJSON(value['scope']),
        'source_expression': value['sourceExpression'],
        'value': ValueToJSON(value['value']),
    };
}
