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
 *
 * @export
 * @interface SurfaceOperationParameters
 */
export interface SurfaceOperationParameters {
    /**
     *
     * @type {string}
     * @memberof SurfaceOperationParameters
     */
    colour?: string | null;
    /**
     *
     * @type {string}
     * @memberof SurfaceOperationParameters
     */
    finish?: string | null;
    /**
     *
     * @type {SurfaceOperationParametersKindEnum}
     * @memberof SurfaceOperationParameters
     */
    kind?: SurfaceOperationParametersKindEnum;
    /**
     *
     * @type {string}
     * @memberof SurfaceOperationParameters
     */
    material?: string | null;
}


/**
 * @export
 */
export const SurfaceOperationParametersKindEnum = {
    Surface: 'surface'
} as const;
export type SurfaceOperationParametersKindEnum = typeof SurfaceOperationParametersKindEnum[keyof typeof SurfaceOperationParametersKindEnum];


/**
 * Check if a given object implements the SurfaceOperationParameters interface.
 */
export function instanceOfSurfaceOperationParameters(value: object): value is SurfaceOperationParameters {
    return true;
}

export function SurfaceOperationParametersFromJSON(json: any): SurfaceOperationParameters {
    return SurfaceOperationParametersFromJSONTyped(json, false);
}

export function SurfaceOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): SurfaceOperationParameters {
    if (json == null) {
        return json;
    }
    return {

        'colour': json['colour'] == null ? undefined : json['colour'],
        'finish': json['finish'] == null ? undefined : json['finish'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'material': json['material'] == null ? undefined : json['material'],
    };
}

export function SurfaceOperationParametersToJSON(json: any): SurfaceOperationParameters {
    return SurfaceOperationParametersToJSONTyped(json, false);
}

export function SurfaceOperationParametersToJSONTyped(value?: SurfaceOperationParameters | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'colour': value['colour'],
        'finish': value['finish'],
        'kind': value['kind'],
        'material': value['material'],
    };
}
