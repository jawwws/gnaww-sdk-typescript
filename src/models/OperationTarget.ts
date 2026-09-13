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
 * @interface OperationTarget
 */
export interface OperationTarget {
    /**
     *
     * @type {string}
     * @memberof OperationTarget
     */
    componentId: string;
    /**
     *
     * @type {string}
     * @memberof OperationTarget
     */
    regionId?: string | null;
}

/**
 * Check if a given object implements the OperationTarget interface.
 */
export function instanceOfOperationTarget(value: object): value is OperationTarget {
    if (!('componentId' in value) || value['componentId'] === undefined) return false;
    return true;
}

export function OperationTargetFromJSON(json: any): OperationTarget {
    return OperationTargetFromJSONTyped(json, false);
}

export function OperationTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): OperationTarget {
    if (json == null) {
        return json;
    }
    return {

        'componentId': json['component_id'],
        'regionId': json['region_id'] == null ? undefined : json['region_id'],
    };
}

export function OperationTargetToJSON(json: any): OperationTarget {
    return OperationTargetToJSONTyped(json, false);
}

export function OperationTargetToJSONTyped(value?: OperationTarget | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'component_id': value['componentId'],
        'region_id': value['regionId'],
    };
}
