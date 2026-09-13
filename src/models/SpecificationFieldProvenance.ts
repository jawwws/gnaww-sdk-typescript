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
 * Safe provenance for one canonical demand field.
 * @export
 * @interface SpecificationFieldProvenance
 */
export interface SpecificationFieldProvenance {
    /**
     *
     * @type {string}
     * @memberof SpecificationFieldProvenance
     */
    path: string;
    /**
     *
     * @type {SpecificationFieldProvenanceProvenanceEnum}
     * @memberof SpecificationFieldProvenance
     */
    provenance: SpecificationFieldProvenanceProvenanceEnum;
    /**
     *
     * @type {string}
     * @memberof SpecificationFieldProvenance
     */
    sourceReference?: string | null;
}


/**
 * @export
 */
export const SpecificationFieldProvenanceProvenanceEnum = {
    Supplied: 'supplied',
    ConfirmedReview: 'confirmed_review',
    UserInput: 'user_input',
    UserOverride: 'user_override',
    CatalogueGuidance: 'catalogue_guidance',
    DeterministicTaxonomy: 'deterministic_taxonomy'
} as const;
export type SpecificationFieldProvenanceProvenanceEnum = typeof SpecificationFieldProvenanceProvenanceEnum[keyof typeof SpecificationFieldProvenanceProvenanceEnum];


/**
 * Check if a given object implements the SpecificationFieldProvenance interface.
 */
export function instanceOfSpecificationFieldProvenance(value: object): value is SpecificationFieldProvenance {
    if (!('path' in value) || value['path'] === undefined) return false;
    if (!('provenance' in value) || value['provenance'] === undefined) return false;
    return true;
}

export function SpecificationFieldProvenanceFromJSON(json: any): SpecificationFieldProvenance {
    return SpecificationFieldProvenanceFromJSONTyped(json, false);
}

export function SpecificationFieldProvenanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpecificationFieldProvenance {
    if (json == null) {
        return json;
    }
    return {

        'path': json['path'],
        'provenance': json['provenance'],
        'sourceReference': json['source_reference'] == null ? undefined : json['source_reference'],
    };
}

export function SpecificationFieldProvenanceToJSON(json: any): SpecificationFieldProvenance {
    return SpecificationFieldProvenanceToJSONTyped(json, false);
}

export function SpecificationFieldProvenanceToJSONTyped(value?: SpecificationFieldProvenance | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'path': value['path'],
        'provenance': value['provenance'],
        'source_reference': value['sourceReference'],
    };
}
