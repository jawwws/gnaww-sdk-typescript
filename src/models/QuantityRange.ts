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
 * Known quantity constraints, including partial source evidence.
 * @export
 * @interface QuantityRange
 */
export interface QuantityRange {
    /**
     *
     * @type {Array<number>}
     * @memberof QuantityRange
     */
    increments?: Array<number>;
    /**
     *
     * @type {number}
     * @memberof QuantityRange
     */
    maximum?: number | null;
    /**
     *
     * @type {number}
     * @memberof QuantityRange
     */
    minimum?: number | null;
    /**
     *
     * @type {number}
     * @memberof QuantityRange
     */
    step?: number | null;
}

/**
 * Check if a given object implements the QuantityRange interface.
 */
export function instanceOfQuantityRange(value: object): value is QuantityRange {
    return true;
}

export function QuantityRangeFromJSON(json: any): QuantityRange {
    return QuantityRangeFromJSONTyped(json, false);
}

export function QuantityRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuantityRange {
    if (json == null) {
        return json;
    }
    return {

        'increments': json['increments'] == null ? undefined : json['increments'],
        'maximum': json['maximum'] == null ? undefined : json['maximum'],
        'minimum': json['minimum'] == null ? undefined : json['minimum'],
        'step': json['step'] == null ? undefined : json['step'],
    };
}

export function QuantityRangeToJSON(json: any): QuantityRange {
    return QuantityRangeToJSONTyped(json, false);
}

export function QuantityRangeToJSONTyped(value?: QuantityRange | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'increments': value['increments'],
        'maximum': value['maximum'],
        'minimum': value['minimum'],
        'step': value['step'],
    };
}
