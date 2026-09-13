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
 * @interface AssemblyOperationParameters
 */
export interface AssemblyOperationParameters {
    /**
     *
     * @type {string}
     * @memberof AssemblyOperationParameters
     */
    joiningMaterial?: string | null;
    /**
     *
     * @type {AssemblyOperationParametersKindEnum}
     * @memberof AssemblyOperationParameters
     */
    kind?: AssemblyOperationParametersKindEnum;
    /**
     *
     * @type {string}
     * @memberof AssemblyOperationParameters
     */
    method: string;
    /**
     *
     * @type {string}
     * @memberof AssemblyOperationParameters
     */
    resultingComponentId?: string | null;
}


/**
 * @export
 */
export const AssemblyOperationParametersKindEnum = {
    Assembly: 'assembly'
} as const;
export type AssemblyOperationParametersKindEnum = typeof AssemblyOperationParametersKindEnum[keyof typeof AssemblyOperationParametersKindEnum];


/**
 * Check if a given object implements the AssemblyOperationParameters interface.
 */
export function instanceOfAssemblyOperationParameters(value: object): value is AssemblyOperationParameters {
    if (!('method' in value) || value['method'] === undefined) return false;
    return true;
}

export function AssemblyOperationParametersFromJSON(json: any): AssemblyOperationParameters {
    return AssemblyOperationParametersFromJSONTyped(json, false);
}

export function AssemblyOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssemblyOperationParameters {
    if (json == null) {
        return json;
    }
    return {

        'joiningMaterial': json['joining_material'] == null ? undefined : json['joining_material'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'method': json['method'],
        'resultingComponentId': json['resulting_component_id'] == null ? undefined : json['resulting_component_id'],
    };
}

export function AssemblyOperationParametersToJSON(json: any): AssemblyOperationParameters {
    return AssemblyOperationParametersToJSONTyped(json, false);
}

export function AssemblyOperationParametersToJSONTyped(value?: AssemblyOperationParameters | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'joining_material': value['joiningMaterial'],
        'kind': value['kind'],
        'method': value['method'],
        'resulting_component_id': value['resultingComponentId'],
    };
}
