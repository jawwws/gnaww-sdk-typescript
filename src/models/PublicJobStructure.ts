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
 * A semantic Variant, Component or Operation kept within one Job.
 * @export
 * @interface PublicJobStructure
 */
export interface PublicJobStructure {
    /**
     *
     * @type {PublicJobStructureKindEnum}
     * @memberof PublicJobStructure
     */
    kind: PublicJobStructureKindEnum;
    /**
     *
     * @type {string}
     * @memberof PublicJobStructure
     */
    label: string;
    /**
     *
     * @type {PublicJobStructureProvenanceEnum}
     * @memberof PublicJobStructure
     */
    provenance?: PublicJobStructureProvenanceEnum;
    /**
     *
     * @type {string}
     * @memberof PublicJobStructure
     */
    sourceExpression?: string | null;
    /**
     *
     * @type {string}
     * @memberof PublicJobStructure
     */
    structureId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof PublicJobStructure
     */
    values?: Array<string>;
}


/**
 * @export
 */
export const PublicJobStructureKindEnum = {
    Variant: 'variant',
    Component: 'component',
    Operation: 'operation'
} as const;
export type PublicJobStructureKindEnum = typeof PublicJobStructureKindEnum[keyof typeof PublicJobStructureKindEnum];

/**
 * @export
 */
export const PublicJobStructureProvenanceEnum = {
    Supplied: 'supplied',
    Derived: 'derived',
    Confirmed: 'confirmed',
    Controlled: 'controlled'
} as const;
export type PublicJobStructureProvenanceEnum = typeof PublicJobStructureProvenanceEnum[keyof typeof PublicJobStructureProvenanceEnum];


/**
 * Check if a given object implements the PublicJobStructure interface.
 */
export function instanceOfPublicJobStructure(value: object): value is PublicJobStructure {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('structureId' in value) || value['structureId'] === undefined) return false;
    return true;
}

export function PublicJobStructureFromJSON(json: any): PublicJobStructure {
    return PublicJobStructureFromJSONTyped(json, false);
}

export function PublicJobStructureFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicJobStructure {
    if (json == null) {
        return json;
    }
    return {

        'kind': json['kind'],
        'label': json['label'],
        'provenance': json['provenance'] == null ? undefined : json['provenance'],
        'sourceExpression': json['source_expression'] == null ? undefined : json['source_expression'],
        'structureId': json['structure_id'],
        'values': json['values'] == null ? undefined : json['values'],
    };
}

export function PublicJobStructureToJSON(json: any): PublicJobStructure {
    return PublicJobStructureToJSONTyped(json, false);
}

export function PublicJobStructureToJSONTyped(value?: PublicJobStructure | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'kind': value['kind'],
        'label': value['label'],
        'provenance': value['provenance'],
        'source_expression': value['sourceExpression'],
        'structure_id': value['structureId'],
        'values': value['values'],
    };
}
