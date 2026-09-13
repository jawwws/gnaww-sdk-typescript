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
import type { VariationField } from './VariationField';
import {
    VariationFieldFromJSON,
    VariationFieldFromJSONTyped,
    VariationFieldToJSON,
    VariationFieldToJSONTyped,
} from './VariationField';
import type { OperationTarget } from './OperationTarget';
import {
    OperationTargetFromJSON,
    OperationTargetFromJSONTyped,
    OperationTargetToJSON,
    OperationTargetToJSONTyped,
} from './OperationTarget';

/**
 *
 * @export
 * @interface ManufacturingVariation
 */
export interface ManufacturingVariation {
    /**
     *
     * @type {string}
     * @memberof ManufacturingVariation
     */
    dataAssetRef?: string | null;
    /**
     *
     * @type {Array<VariationField>}
     * @memberof ManufacturingVariation
     */
    fields?: Array<VariationField>;
    /**
     *
     * @type {ManufacturingVariationScopeEnum}
     * @memberof ManufacturingVariation
     */
    scope: ManufacturingVariationScopeEnum;
    /**
     *
     * @type {ManufacturingVariationSourceBasisEnum}
     * @memberof ManufacturingVariation
     */
    sourceBasis?: ManufacturingVariationSourceBasisEnum;
    /**
     *
     * @type {Array<OperationTarget>}
     * @memberof ManufacturingVariation
     */
    targets: Array<OperationTarget>;
    /**
     *
     * @type {string}
     * @memberof ManufacturingVariation
     */
    variationId: string;
}


/**
 * @export
 */
export const ManufacturingVariationScopeEnum = {
    PerUnit: 'per_unit',
    Grouped: 'grouped',
    Batch: 'batch'
} as const;
export type ManufacturingVariationScopeEnum = typeof ManufacturingVariationScopeEnum[keyof typeof ManufacturingVariationScopeEnum];

/**
 * @export
 */
export const ManufacturingVariationSourceBasisEnum = {
    Explicit: 'explicit',
    LegacyVariableData: 'legacy_variable_data'
} as const;
export type ManufacturingVariationSourceBasisEnum = typeof ManufacturingVariationSourceBasisEnum[keyof typeof ManufacturingVariationSourceBasisEnum];


/**
 * Check if a given object implements the ManufacturingVariation interface.
 */
export function instanceOfManufacturingVariation(value: object): value is ManufacturingVariation {
    if (!('scope' in value) || value['scope'] === undefined) return false;
    if (!('targets' in value) || value['targets'] === undefined) return false;
    if (!('variationId' in value) || value['variationId'] === undefined) return false;
    return true;
}

export function ManufacturingVariationFromJSON(json: any): ManufacturingVariation {
    return ManufacturingVariationFromJSONTyped(json, false);
}

export function ManufacturingVariationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingVariation {
    if (json == null) {
        return json;
    }
    return {

        'dataAssetRef': json['data_asset_ref'] == null ? undefined : json['data_asset_ref'],
        'fields': json['fields'] == null ? undefined : ((json['fields'] as Array<any>).map(VariationFieldFromJSON)),
        'scope': json['scope'],
        'sourceBasis': json['source_basis'] == null ? undefined : json['source_basis'],
        'targets': ((json['targets'] as Array<any>).map(OperationTargetFromJSON)),
        'variationId': json['variation_id'],
    };
}

export function ManufacturingVariationToJSON(json: any): ManufacturingVariation {
    return ManufacturingVariationToJSONTyped(json, false);
}

export function ManufacturingVariationToJSONTyped(value?: ManufacturingVariation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'data_asset_ref': value['dataAssetRef'],
        'fields': value['fields'] == null ? undefined : ((value['fields'] as Array<any>).map(VariationFieldToJSON)),
        'scope': value['scope'],
        'source_basis': value['sourceBasis'],
        'targets': ((value['targets'] as Array<any>).map(OperationTargetToJSON)),
        'variation_id': value['variationId'],
    };
}
