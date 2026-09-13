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
import type { SpecificationResource } from './SpecificationResource';
import {
    SpecificationResourceFromJSON,
    SpecificationResourceFromJSONTyped,
    SpecificationResourceToJSON,
    SpecificationResourceToJSONTyped,
} from './SpecificationResource';

/**
 * Result of explicit canonical-demand retention.
 * @export
 * @interface CreateSpecificationResponse
 */
export interface CreateSpecificationResponse {
    /**
     *
     * @type {CreateSpecificationResponseSchemaNameEnum}
     * @memberof CreateSpecificationResponse
     */
    schemaName?: CreateSpecificationResponseSchemaNameEnum;
    /**
     *
     * @type {CreateSpecificationResponseSchemaVersionEnum}
     * @memberof CreateSpecificationResponse
     */
    schemaVersion?: CreateSpecificationResponseSchemaVersionEnum;
    /**
     *
     * @type {SpecificationResource}
     * @memberof CreateSpecificationResponse
     */
    specification: SpecificationResource;
    /**
     *
     * @type {CreateSpecificationResponseStatusEnum}
     * @memberof CreateSpecificationResponse
     */
    status: CreateSpecificationResponseStatusEnum;
}


/**
 * @export
 */
export const CreateSpecificationResponseSchemaNameEnum = {
    GnawwSpecificationCreateResult: 'gnaww.specification_create_result'
} as const;
export type CreateSpecificationResponseSchemaNameEnum = typeof CreateSpecificationResponseSchemaNameEnum[keyof typeof CreateSpecificationResponseSchemaNameEnum];

/**
 * @export
 */
export const CreateSpecificationResponseSchemaVersionEnum = {
    _01: '0.1'
} as const;
export type CreateSpecificationResponseSchemaVersionEnum = typeof CreateSpecificationResponseSchemaVersionEnum[keyof typeof CreateSpecificationResponseSchemaVersionEnum];

/**
 * @export
 */
export const CreateSpecificationResponseStatusEnum = {
    Created: 'created',
    Existing: 'existing'
} as const;
export type CreateSpecificationResponseStatusEnum = typeof CreateSpecificationResponseStatusEnum[keyof typeof CreateSpecificationResponseStatusEnum];


/**
 * Check if a given object implements the CreateSpecificationResponse interface.
 */
export function instanceOfCreateSpecificationResponse(value: object): value is CreateSpecificationResponse {
    if (!('specification' in value) || value['specification'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function CreateSpecificationResponseFromJSON(json: any): CreateSpecificationResponse {
    return CreateSpecificationResponseFromJSONTyped(json, false);
}

export function CreateSpecificationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSpecificationResponse {
    if (json == null) {
        return json;
    }
    return {

        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'specification': SpecificationResourceFromJSON(json['specification']),
        'status': json['status'],
    };
}

export function CreateSpecificationResponseToJSON(json: any): CreateSpecificationResponse {
    return CreateSpecificationResponseToJSONTyped(json, false);
}

export function CreateSpecificationResponseToJSONTyped(value?: CreateSpecificationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'specification': SpecificationResourceToJSON(value['specification']),
        'status': value['status'],
    };
}
