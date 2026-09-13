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
import type { SpecificationExternalReference } from './SpecificationExternalReference';
import {
    SpecificationExternalReferenceFromJSON,
    SpecificationExternalReferenceFromJSONTyped,
    SpecificationExternalReferenceToJSON,
    SpecificationExternalReferenceToJSONTyped,
} from './SpecificationExternalReference';
import type { SpecificationFieldProvenance } from './SpecificationFieldProvenance';
import {
    SpecificationFieldProvenanceFromJSON,
    SpecificationFieldProvenanceFromJSONTyped,
    SpecificationFieldProvenanceToJSON,
    SpecificationFieldProvenanceToJSONTyped,
} from './SpecificationFieldProvenance';

/**
 * Explicitly retain one completed canonical Gnaww Job Specification.
 * @export
 * @interface CreateSpecificationRequest
 */
export interface CreateSpecificationRequest {
    /**
     *
     * @type {Array<SpecificationExternalReference>}
     * @memberof CreateSpecificationRequest
     */
    externalReferences?: Array<SpecificationExternalReference>;
    /**
     *
     * @type {Array<SpecificationFieldProvenance>}
     * @memberof CreateSpecificationRequest
     */
    fieldProvenance?: Array<SpecificationFieldProvenance>;
    /**
     *
     * @type {Gjs}
     * @memberof CreateSpecificationRequest
     */
    gjs: Gjs;
    /**
     *
     * @type {string}
     * @memberof CreateSpecificationRequest
     */
    idempotencyKey?: string | null;
    /**
     *
     * @type {CreateSpecificationRequestSchemaNameEnum}
     * @memberof CreateSpecificationRequest
     */
    schemaName?: CreateSpecificationRequestSchemaNameEnum;
    /**
     *
     * @type {CreateSpecificationRequestSchemaVersionEnum}
     * @memberof CreateSpecificationRequest
     */
    schemaVersion?: CreateSpecificationRequestSchemaVersionEnum;
}


/**
 * @export
 */
export const CreateSpecificationRequestSchemaNameEnum = {
    GnawwSpecificationCreateRequest: 'gnaww.specification_create_request'
} as const;
export type CreateSpecificationRequestSchemaNameEnum = typeof CreateSpecificationRequestSchemaNameEnum[keyof typeof CreateSpecificationRequestSchemaNameEnum];

/**
 * @export
 */
export const CreateSpecificationRequestSchemaVersionEnum = {
    _01: '0.1'
} as const;
export type CreateSpecificationRequestSchemaVersionEnum = typeof CreateSpecificationRequestSchemaVersionEnum[keyof typeof CreateSpecificationRequestSchemaVersionEnum];


/**
 * Check if a given object implements the CreateSpecificationRequest interface.
 */
export function instanceOfCreateSpecificationRequest(value: object): value is CreateSpecificationRequest {
    if (!('gjs' in value) || value['gjs'] === undefined) return false;
    return true;
}

export function CreateSpecificationRequestFromJSON(json: any): CreateSpecificationRequest {
    return CreateSpecificationRequestFromJSONTyped(json, false);
}

export function CreateSpecificationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSpecificationRequest {
    if (json == null) {
        return json;
    }
    return {

        'externalReferences': json['external_references'] == null ? undefined : ((json['external_references'] as Array<any>).map(SpecificationExternalReferenceFromJSON)),
        'fieldProvenance': json['field_provenance'] == null ? undefined : ((json['field_provenance'] as Array<any>).map(SpecificationFieldProvenanceFromJSON)),
        'gjs': GjsFromJSON(json['gjs']),
        'idempotencyKey': json['idempotency_key'] == null ? undefined : json['idempotency_key'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
    };
}

export function CreateSpecificationRequestToJSON(json: any): CreateSpecificationRequest {
    return CreateSpecificationRequestToJSONTyped(json, false);
}

export function CreateSpecificationRequestToJSONTyped(value?: CreateSpecificationRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'external_references': value['externalReferences'] == null ? undefined : ((value['externalReferences'] as Array<any>).map(SpecificationExternalReferenceToJSON)),
        'field_provenance': value['fieldProvenance'] == null ? undefined : ((value['fieldProvenance'] as Array<any>).map(SpecificationFieldProvenanceToJSON)),
        'gjs': GjsToJSON(value['gjs']),
        'idempotency_key': value['idempotencyKey'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
    };
}
