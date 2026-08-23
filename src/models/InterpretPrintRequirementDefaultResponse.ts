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
import type { InterpretPrintRequirementDefaultResponseError } from './InterpretPrintRequirementDefaultResponseError';
import {
    InterpretPrintRequirementDefaultResponseErrorFromJSON,
    InterpretPrintRequirementDefaultResponseErrorFromJSONTyped,
    InterpretPrintRequirementDefaultResponseErrorToJSON,
    InterpretPrintRequirementDefaultResponseErrorToJSONTyped,
} from './InterpretPrintRequirementDefaultResponseError';

/**
 *
 * @export
 * @interface InterpretPrintRequirementDefaultResponse
 */
export interface InterpretPrintRequirementDefaultResponse {
    /**
     *
     * @type {InterpretPrintRequirementDefaultResponseError}
     * @memberof InterpretPrintRequirementDefaultResponse
     */
    error: InterpretPrintRequirementDefaultResponseError;
}

/**
 * Check if a given object implements the InterpretPrintRequirementDefaultResponse interface.
 */
export function instanceOfInterpretPrintRequirementDefaultResponse(value: object): value is InterpretPrintRequirementDefaultResponse {
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function InterpretPrintRequirementDefaultResponseFromJSON(json: any): InterpretPrintRequirementDefaultResponse {
    return InterpretPrintRequirementDefaultResponseFromJSONTyped(json, false);
}

export function InterpretPrintRequirementDefaultResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterpretPrintRequirementDefaultResponse {
    if (json == null) {
        return json;
    }
    return {

        'error': InterpretPrintRequirementDefaultResponseErrorFromJSON(json['error']),
    };
}

export function InterpretPrintRequirementDefaultResponseToJSON(json: any): InterpretPrintRequirementDefaultResponse {
    return InterpretPrintRequirementDefaultResponseToJSONTyped(json, false);
}

export function InterpretPrintRequirementDefaultResponseToJSONTyped(value?: InterpretPrintRequirementDefaultResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'error': InterpretPrintRequirementDefaultResponseErrorToJSON(value['error']),
    };
}
