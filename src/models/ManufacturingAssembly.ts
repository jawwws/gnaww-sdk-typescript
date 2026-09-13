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
 * @interface ManufacturingAssembly
 */
export interface ManufacturingAssembly {
    /**
     *
     * @type {string}
     * @memberof ManufacturingAssembly
     */
    assemblyId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ManufacturingAssembly
     */
    inputComponentIds: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof ManufacturingAssembly
     */
    operationIds: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ManufacturingAssembly
     */
    outputComponentId?: string | null;
}

/**
 * Check if a given object implements the ManufacturingAssembly interface.
 */
export function instanceOfManufacturingAssembly(value: object): value is ManufacturingAssembly {
    if (!('assemblyId' in value) || value['assemblyId'] === undefined) return false;
    if (!('inputComponentIds' in value) || value['inputComponentIds'] === undefined) return false;
    if (!('operationIds' in value) || value['operationIds'] === undefined) return false;
    return true;
}

export function ManufacturingAssemblyFromJSON(json: any): ManufacturingAssembly {
    return ManufacturingAssemblyFromJSONTyped(json, false);
}

export function ManufacturingAssemblyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingAssembly {
    if (json == null) {
        return json;
    }
    return {

        'assemblyId': json['assembly_id'],
        'inputComponentIds': json['input_component_ids'],
        'operationIds': json['operation_ids'],
        'outputComponentId': json['output_component_id'] == null ? undefined : json['output_component_id'],
    };
}

export function ManufacturingAssemblyToJSON(json: any): ManufacturingAssembly {
    return ManufacturingAssemblyToJSONTyped(json, false);
}

export function ManufacturingAssemblyToJSONTyped(value?: ManufacturingAssembly | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'assembly_id': value['assemblyId'],
        'input_component_ids': value['inputComponentIds'],
        'operation_ids': value['operationIds'],
        'output_component_id': value['outputComponentId'],
    };
}
