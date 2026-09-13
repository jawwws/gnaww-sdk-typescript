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
import type { RepeatedDrillPattern } from './RepeatedDrillPattern';
import {
    RepeatedDrillPatternFromJSON,
    RepeatedDrillPatternFromJSONTyped,
    RepeatedDrillPatternToJSON,
    RepeatedDrillPatternToJSONTyped,
} from './RepeatedDrillPattern';
import type { DrillHole } from './DrillHole';
import {
    DrillHoleFromJSON,
    DrillHoleFromJSONTyped,
    DrillHoleToJSON,
    DrillHoleToJSONTyped,
} from './DrillHole';

/**
 *
 * @export
 * @interface DrillOperationParameters
 */
export interface DrillOperationParameters {
    /**
     *
     * @type {Array<DrillHole>}
     * @memberof DrillOperationParameters
     */
    holes?: Array<DrillHole>;
    /**
     *
     * @type {DrillOperationParametersKindEnum}
     * @memberof DrillOperationParameters
     */
    kind?: DrillOperationParametersKindEnum;
    /**
     *
     * @type {Array<RepeatedDrillPattern>}
     * @memberof DrillOperationParameters
     */
    patterns?: Array<RepeatedDrillPattern>;
}


/**
 * @export
 */
export const DrillOperationParametersKindEnum = {
    Drill: 'drill'
} as const;
export type DrillOperationParametersKindEnum = typeof DrillOperationParametersKindEnum[keyof typeof DrillOperationParametersKindEnum];


/**
 * Check if a given object implements the DrillOperationParameters interface.
 */
export function instanceOfDrillOperationParameters(value: object): value is DrillOperationParameters {
    return true;
}

export function DrillOperationParametersFromJSON(json: any): DrillOperationParameters {
    return DrillOperationParametersFromJSONTyped(json, false);
}

export function DrillOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): DrillOperationParameters {
    if (json == null) {
        return json;
    }
    return {

        'holes': json['holes'] == null ? undefined : ((json['holes'] as Array<any>).map(DrillHoleFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'patterns': json['patterns'] == null ? undefined : ((json['patterns'] as Array<any>).map(RepeatedDrillPatternFromJSON)),
    };
}

export function DrillOperationParametersToJSON(json: any): DrillOperationParameters {
    return DrillOperationParametersToJSONTyped(json, false);
}

export function DrillOperationParametersToJSONTyped(value?: DrillOperationParameters | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'holes': value['holes'] == null ? undefined : ((value['holes'] as Array<any>).map(DrillHoleToJSON)),
        'kind': value['kind'],
        'patterns': value['patterns'] == null ? undefined : ((value['patterns'] as Array<any>).map(RepeatedDrillPatternToJSON)),
    };
}
