/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Requested production quantity.
 * @export
 * @interface Quantity
 */
export interface Quantity {
    /**
     *
     * @type {number}
     * @memberof Quantity
     */
    units?: number | null;
    /**
     *
     * @type {boolean}
     * @memberof Quantity
     */
    variableData?: boolean;
}

/**
 * Check if a given object implements the Quantity interface.
 */
export function instanceOfQuantity(value: object): value is Quantity {
    return true;
}

export function QuantityFromJSON(json: any): Quantity {
    return QuantityFromJSONTyped(json, false);
}

export function QuantityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Quantity {
    if (json == null) {
        return json;
    }
    return {

        'units': json['units'] == null ? undefined : json['units'],
        'variableData': json['variable_data'] == null ? undefined : json['variable_data'],
    };
}

export function QuantityToJSON(json: any): Quantity {
    return QuantityToJSONTyped(json, false);
}

export function QuantityToJSONTyped(value?: Quantity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'units': value['units'],
        'variable_data': value['variableData'],
    };
}
