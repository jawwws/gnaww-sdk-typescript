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
/**
 * Safe caller-owned reference used to reconcile a specification externally.
 * @export
 * @interface SpecificationExternalReference
 */
export interface SpecificationExternalReference {
    /**
     *
     * @type {string}
     * @memberof SpecificationExternalReference
     */
    reference: string;
    /**
     *
     * @type {string}
     * @memberof SpecificationExternalReference
     */
    system: string;
}

/**
 * Check if a given object implements the SpecificationExternalReference interface.
 */
export function instanceOfSpecificationExternalReference(value: object): value is SpecificationExternalReference {
    if (!('reference' in value) || value['reference'] === undefined) return false;
    if (!('system' in value) || value['system'] === undefined) return false;
    return true;
}

export function SpecificationExternalReferenceFromJSON(json: any): SpecificationExternalReference {
    return SpecificationExternalReferenceFromJSONTyped(json, false);
}

export function SpecificationExternalReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpecificationExternalReference {
    if (json == null) {
        return json;
    }
    return {

        'reference': json['reference'],
        'system': json['system'],
    };
}

export function SpecificationExternalReferenceToJSON(json: any): SpecificationExternalReference {
    return SpecificationExternalReferenceToJSONTyped(json, false);
}

export function SpecificationExternalReferenceToJSONTyped(value?: SpecificationExternalReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'reference': value['reference'],
        'system': value['system'],
    };
}
