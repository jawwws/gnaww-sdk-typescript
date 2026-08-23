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
import type { ContinuePrintRequirementInterpretationDefaultResponseError } from './ContinuePrintRequirementInterpretationDefaultResponseError';
import {
    ContinuePrintRequirementInterpretationDefaultResponseErrorFromJSON,
    ContinuePrintRequirementInterpretationDefaultResponseErrorFromJSONTyped,
    ContinuePrintRequirementInterpretationDefaultResponseErrorToJSON,
    ContinuePrintRequirementInterpretationDefaultResponseErrorToJSONTyped,
} from './ContinuePrintRequirementInterpretationDefaultResponseError';

/**
 *
 * @export
 * @interface ContinuePrintRequirementInterpretationDefaultResponse
 */
export interface ContinuePrintRequirementInterpretationDefaultResponse {
    /**
     *
     * @type {ContinuePrintRequirementInterpretationDefaultResponseError}
     * @memberof ContinuePrintRequirementInterpretationDefaultResponse
     */
    error: ContinuePrintRequirementInterpretationDefaultResponseError;
}

/**
 * Check if a given object implements the ContinuePrintRequirementInterpretationDefaultResponse interface.
 */
export function instanceOfContinuePrintRequirementInterpretationDefaultResponse(value: object): value is ContinuePrintRequirementInterpretationDefaultResponse {
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function ContinuePrintRequirementInterpretationDefaultResponseFromJSON(json: any): ContinuePrintRequirementInterpretationDefaultResponse {
    return ContinuePrintRequirementInterpretationDefaultResponseFromJSONTyped(json, false);
}

export function ContinuePrintRequirementInterpretationDefaultResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContinuePrintRequirementInterpretationDefaultResponse {
    if (json == null) {
        return json;
    }
    return {

        'error': ContinuePrintRequirementInterpretationDefaultResponseErrorFromJSON(json['error']),
    };
}

export function ContinuePrintRequirementInterpretationDefaultResponseToJSON(json: any): ContinuePrintRequirementInterpretationDefaultResponse {
    return ContinuePrintRequirementInterpretationDefaultResponseToJSONTyped(json, false);
}

export function ContinuePrintRequirementInterpretationDefaultResponseToJSONTyped(value?: ContinuePrintRequirementInterpretationDefaultResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'error': ContinuePrintRequirementInterpretationDefaultResponseErrorToJSON(value['error']),
    };
}
