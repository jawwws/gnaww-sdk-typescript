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
 * Reference to complex geometry retained outside GJS.
 * @export
 * @interface PathReference
 */
export interface PathReference {
    /**
     *
     * @type {string}
     * @memberof PathReference
     */
    assetRef: string;
    /**
     *
     * @type {PathReferenceKindEnum}
     * @memberof PathReference
     */
    kind?: PathReferenceKindEnum;
    /**
     *
     * @type {string}
     * @memberof PathReference
     */
    pathId?: string | null;
}


/**
 * @export
 */
export const PathReferenceKindEnum = {
    PathReference: 'path_reference'
} as const;
export type PathReferenceKindEnum = typeof PathReferenceKindEnum[keyof typeof PathReferenceKindEnum];


/**
 * Check if a given object implements the PathReference interface.
 */
export function instanceOfPathReference(value: object): value is PathReference {
    if (!('assetRef' in value) || value['assetRef'] === undefined) return false;
    return true;
}

export function PathReferenceFromJSON(json: any): PathReference {
    return PathReferenceFromJSONTyped(json, false);
}

export function PathReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PathReference {
    if (json == null) {
        return json;
    }
    return {

        'assetRef': json['asset_ref'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'pathId': json['path_id'] == null ? undefined : json['path_id'],
    };
}

export function PathReferenceToJSON(json: any): PathReference {
    return PathReferenceToJSONTyped(json, false);
}

export function PathReferenceToJSONTyped(value?: PathReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'asset_ref': value['assetRef'],
        'kind': value['kind'],
        'path_id': value['pathId'],
    };
}
