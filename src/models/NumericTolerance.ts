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
 * @interface NumericTolerance
 */
export interface NumericTolerance {
    /**
     *
     * @type {number}
     * @memberof NumericTolerance
     */
    maximum?: number | null;
    /**
     *
     * @type {number}
     * @memberof NumericTolerance
     */
    minimum?: number | null;
    /**
     *
     * @type {number}
     * @memberof NumericTolerance
     */
    target?: number | null;
    /**
     *
     * @type {string}
     * @memberof NumericTolerance
     */
    unit: string;
}

/**
 * Check if a given object implements the NumericTolerance interface.
 */
export function instanceOfNumericTolerance(value: object): value is NumericTolerance {
    if (!('unit' in value) || value['unit'] === undefined) return false;
    return true;
}

export function NumericToleranceFromJSON(json: any): NumericTolerance {
    return NumericToleranceFromJSONTyped(json, false);
}

export function NumericToleranceFromJSONTyped(json: any, ignoreDiscriminator: boolean): NumericTolerance {
    if (json == null) {
        return json;
    }
    return {

        'maximum': json['maximum'] == null ? undefined : json['maximum'],
        'minimum': json['minimum'] == null ? undefined : json['minimum'],
        'target': json['target'] == null ? undefined : json['target'],
        'unit': json['unit'],
    };
}

export function NumericToleranceToJSON(json: any): NumericTolerance {
    return NumericToleranceToJSONTyped(json, false);
}

export function NumericToleranceToJSONTyped(value?: NumericTolerance | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'maximum': value['maximum'],
        'minimum': value['minimum'],
        'target': value['target'],
        'unit': value['unit'],
    };
}
