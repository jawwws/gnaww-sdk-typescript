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
 * @interface Value
 */
export interface Value {
}

/**
 * Check if a given object implements the Value interface.
 */
export function instanceOfValue(value: object): value is Value {
    return true;
}

export function ValueFromJSON(json: any): Value {
    return ValueFromJSONTyped(json, false);
}

export function ValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): Value {
    return json;
}

export function ValueToJSON(json: any): Value {
    return ValueToJSONTyped(json, false);
}

export function ValueToJSONTyped(value?: Value | null, ignoreDiscriminator: boolean = false): any {
    return value;
}
