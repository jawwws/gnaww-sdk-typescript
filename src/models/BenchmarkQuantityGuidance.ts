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
 * Non-binding quantity guidance requiring customer confirmation.
 * @export
 * @interface BenchmarkQuantityGuidance
 */
export interface BenchmarkQuantityGuidance {
    /**
     *
     * @type {string}
     * @memberof BenchmarkQuantityGuidance
     */
    basis: string;
    /**
     *
     * @type {number}
     * @memberof BenchmarkQuantityGuidance
     */
    lower?: number | null;
    /**
     *
     * @type {BenchmarkQuantityGuidanceRequiresConfirmationEnum}
     * @memberof BenchmarkQuantityGuidance
     */
    requiresConfirmation?: BenchmarkQuantityGuidanceRequiresConfirmationEnum;
    /**
     *
     * @type {number}
     * @memberof BenchmarkQuantityGuidance
     */
    typical?: number | null;
    /**
     *
     * @type {number}
     * @memberof BenchmarkQuantityGuidance
     */
    upper?: number | null;
}


/**
 * @export
 */
export const BenchmarkQuantityGuidanceRequiresConfirmationEnum = {
    True: true
} as const;
export type BenchmarkQuantityGuidanceRequiresConfirmationEnum = typeof BenchmarkQuantityGuidanceRequiresConfirmationEnum[keyof typeof BenchmarkQuantityGuidanceRequiresConfirmationEnum];


/**
 * Check if a given object implements the BenchmarkQuantityGuidance interface.
 */
export function instanceOfBenchmarkQuantityGuidance(value: object): value is BenchmarkQuantityGuidance {
    if (!('basis' in value) || value['basis'] === undefined) return false;
    return true;
}

export function BenchmarkQuantityGuidanceFromJSON(json: any): BenchmarkQuantityGuidance {
    return BenchmarkQuantityGuidanceFromJSONTyped(json, false);
}

export function BenchmarkQuantityGuidanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): BenchmarkQuantityGuidance {
    if (json == null) {
        return json;
    }
    return {

        'basis': json['basis'],
        'lower': json['lower'] == null ? undefined : json['lower'],
        'requiresConfirmation': json['requires_confirmation'] == null ? undefined : json['requires_confirmation'],
        'typical': json['typical'] == null ? undefined : json['typical'],
        'upper': json['upper'] == null ? undefined : json['upper'],
    };
}

export function BenchmarkQuantityGuidanceToJSON(json: any): BenchmarkQuantityGuidance {
    return BenchmarkQuantityGuidanceToJSONTyped(json, false);
}

export function BenchmarkQuantityGuidanceToJSONTyped(value?: BenchmarkQuantityGuidance | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'basis': value['basis'],
        'lower': value['lower'],
        'requires_confirmation': value['requiresConfirmation'],
        'typical': value['typical'],
        'upper': value['upper'],
    };
}
