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
import type { SpecificationRecipeReference } from './SpecificationRecipeReference';
import {
    SpecificationRecipeReferenceFromJSON,
    SpecificationRecipeReferenceFromJSONTyped,
    SpecificationRecipeReferenceToJSON,
    SpecificationRecipeReferenceToJSONTyped,
} from './SpecificationRecipeReference';

/**
 * Safe immutable public representation of retained canonical demand.
 * @export
 * @interface SpecificationResource
 */
export interface SpecificationResource {
    /**
     *
     * @type {string}
     * @memberof SpecificationResource
     */
    contentFingerprintSha256: string;
    /**
     *
     * @type {Date}
     * @memberof SpecificationResource
     */
    createdAt: Date;
    /**
     *
     * @type {Array<SpecificationExternalReference>}
     * @memberof SpecificationResource
     */
    externalReferences?: Array<SpecificationExternalReference>;
    /**
     *
     * @type {Array<SpecificationFieldProvenance>}
     * @memberof SpecificationResource
     */
    fieldProvenance?: Array<SpecificationFieldProvenance>;
    /**
     *
     * @type {Gjs}
     * @memberof SpecificationResource
     */
    gjs: Gjs;
    /**
     *
     * @type {SpecificationResourceGjsSchemaNameEnum}
     * @memberof SpecificationResource
     */
    gjsSchemaName?: SpecificationResourceGjsSchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof SpecificationResource
     */
    gjsSchemaVersion: string;
    /**
     *
     * @type {SpecificationResourceImmutableEnum}
     * @memberof SpecificationResource
     */
    immutable?: SpecificationResourceImmutableEnum;
    /**
     *
     * @type {SpecificationRecipeReference}
     * @memberof SpecificationResource
     */
    recipe: SpecificationRecipeReference;
    /**
     *
     * @type {number}
     * @memberof SpecificationResource
     */
    resourceVersion?: number;
    /**
     *
     * @type {SpecificationResourceSchemaNameEnum}
     * @memberof SpecificationResource
     */
    schemaName?: SpecificationResourceSchemaNameEnum;
    /**
     *
     * @type {SpecificationResourceSchemaVersionEnum}
     * @memberof SpecificationResource
     */
    schemaVersion?: SpecificationResourceSchemaVersionEnum;
    /**
     *
     * @type {string}
     * @memberof SpecificationResource
     */
    specificationId: string;
}


/**
 * @export
 */
export const SpecificationResourceGjsSchemaNameEnum = {
    JawwwsPrintJobSpecification: 'jawwws.print_job_specification'
} as const;
export type SpecificationResourceGjsSchemaNameEnum = typeof SpecificationResourceGjsSchemaNameEnum[keyof typeof SpecificationResourceGjsSchemaNameEnum];

/**
 * @export
 */
export const SpecificationResourceImmutableEnum = {
    True: true
} as const;
export type SpecificationResourceImmutableEnum = typeof SpecificationResourceImmutableEnum[keyof typeof SpecificationResourceImmutableEnum];

/**
 * @export
 */
export const SpecificationResourceSchemaNameEnum = {
    GnawwSpecificationResource: 'gnaww.specification_resource'
} as const;
export type SpecificationResourceSchemaNameEnum = typeof SpecificationResourceSchemaNameEnum[keyof typeof SpecificationResourceSchemaNameEnum];

/**
 * @export
 */
export const SpecificationResourceSchemaVersionEnum = {
    _01: '0.1'
} as const;
export type SpecificationResourceSchemaVersionEnum = typeof SpecificationResourceSchemaVersionEnum[keyof typeof SpecificationResourceSchemaVersionEnum];


/**
 * Check if a given object implements the SpecificationResource interface.
 */
export function instanceOfSpecificationResource(value: object): value is SpecificationResource {
    if (!('contentFingerprintSha256' in value) || value['contentFingerprintSha256'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('gjs' in value) || value['gjs'] === undefined) return false;
    if (!('gjsSchemaVersion' in value) || value['gjsSchemaVersion'] === undefined) return false;
    if (!('recipe' in value) || value['recipe'] === undefined) return false;
    if (!('specificationId' in value) || value['specificationId'] === undefined) return false;
    return true;
}

export function SpecificationResourceFromJSON(json: any): SpecificationResource {
    return SpecificationResourceFromJSONTyped(json, false);
}

export function SpecificationResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpecificationResource {
    if (json == null) {
        return json;
    }
    return {

        'contentFingerprintSha256': json['content_fingerprint_sha256'],
        'createdAt': (new Date(json['created_at'])),
        'externalReferences': json['external_references'] == null ? undefined : ((json['external_references'] as Array<any>).map(SpecificationExternalReferenceFromJSON)),
        'fieldProvenance': json['field_provenance'] == null ? undefined : ((json['field_provenance'] as Array<any>).map(SpecificationFieldProvenanceFromJSON)),
        'gjs': GjsFromJSON(json['gjs']),
        'gjsSchemaName': json['gjs_schema_name'] == null ? undefined : json['gjs_schema_name'],
        'gjsSchemaVersion': json['gjs_schema_version'],
        'immutable': json['immutable'] == null ? undefined : json['immutable'],
        'recipe': SpecificationRecipeReferenceFromJSON(json['recipe']),
        'resourceVersion': json['resource_version'] == null ? undefined : json['resource_version'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'specificationId': json['specification_id'],
    };
}

export function SpecificationResourceToJSON(json: any): SpecificationResource {
    return SpecificationResourceToJSONTyped(json, false);
}

export function SpecificationResourceToJSONTyped(value?: SpecificationResource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'content_fingerprint_sha256': value['contentFingerprintSha256'],
        'created_at': value['createdAt'].toISOString(),
        'external_references': value['externalReferences'] == null ? undefined : ((value['externalReferences'] as Array<any>).map(SpecificationExternalReferenceToJSON)),
        'field_provenance': value['fieldProvenance'] == null ? undefined : ((value['fieldProvenance'] as Array<any>).map(SpecificationFieldProvenanceToJSON)),
        'gjs': GjsToJSON(value['gjs']),
        'gjs_schema_name': value['gjsSchemaName'],
        'gjs_schema_version': value['gjsSchemaVersion'],
        'immutable': value['immutable'],
        'recipe': SpecificationRecipeReferenceToJSON(value['recipe']),
        'resource_version': value['resourceVersion'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'specification_id': value['specificationId'],
    };
}
