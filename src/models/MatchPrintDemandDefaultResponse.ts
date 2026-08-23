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
 * @interface MatchPrintDemandDefaultResponse
 */
export interface MatchPrintDemandDefaultResponse {
    /**
     *
     * @type {ContinuePrintRequirementInterpretationDefaultResponseError}
     * @memberof MatchPrintDemandDefaultResponse
     */
    error: ContinuePrintRequirementInterpretationDefaultResponseError;
}

/**
 * Check if a given object implements the MatchPrintDemandDefaultResponse interface.
 */
export function instanceOfMatchPrintDemandDefaultResponse(value: object): value is MatchPrintDemandDefaultResponse {
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function MatchPrintDemandDefaultResponseFromJSON(json: any): MatchPrintDemandDefaultResponse {
    return MatchPrintDemandDefaultResponseFromJSONTyped(json, false);
}

export function MatchPrintDemandDefaultResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchPrintDemandDefaultResponse {
    if (json == null) {
        return json;
    }
    return {

        'error': ContinuePrintRequirementInterpretationDefaultResponseErrorFromJSON(json['error']),
    };
}

export function MatchPrintDemandDefaultResponseToJSON(json: any): MatchPrintDemandDefaultResponse {
    return MatchPrintDemandDefaultResponseToJSONTyped(json, false);
}

export function MatchPrintDemandDefaultResponseToJSONTyped(value?: MatchPrintDemandDefaultResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'error': ContinuePrintRequirementInterpretationDefaultResponseErrorToJSON(value['error']),
    };
}
