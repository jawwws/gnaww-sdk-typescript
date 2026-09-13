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
 * Requested finished-unit quantity without legacy variable-data flattening.
 * @export
 * @interface ManufacturingQuantity
 */
export interface ManufacturingQuantity {
    /**
     *
     * @type {number}
     * @memberof ManufacturingQuantity
     */
    units?: number | null;
}

/**
 * Check if a given object implements the ManufacturingQuantity interface.
 */
export function instanceOfManufacturingQuantity(value: object): value is ManufacturingQuantity {
    return true;
}

export function ManufacturingQuantityFromJSON(json: any): ManufacturingQuantity {
    return ManufacturingQuantityFromJSONTyped(json, false);
}

export function ManufacturingQuantityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingQuantity {
    if (json == null) {
        return json;
    }
    return {

        'units': json['units'] == null ? undefined : json['units'],
    };
}

export function ManufacturingQuantityToJSON(json: any): ManufacturingQuantity {
    return ManufacturingQuantityToJSONTyped(json, false);
}

export function ManufacturingQuantityToJSONTyped(value?: ManufacturingQuantity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'units': value['units'],
    };
}
