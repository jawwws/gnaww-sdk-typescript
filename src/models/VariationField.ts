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
 * @interface VariationField
 */
export interface VariationField {
    /**
     *
     * @type {string}
     * @memberof VariationField
     */
    artworkOrAssetRef?: string | null;
    /**
     *
     * @type {VariationFieldDataTypeEnum}
     * @memberof VariationField
     */
    dataType?: VariationFieldDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof VariationField
     */
    fieldKey: string;
}


/**
 * @export
 */
export const VariationFieldDataTypeEnum = {
    Text: 'text',
    Number: 'number',
    Image: 'image',
    Code: 'code',
    Artwork: 'artwork',
    Unknown: 'unknown'
} as const;
export type VariationFieldDataTypeEnum = typeof VariationFieldDataTypeEnum[keyof typeof VariationFieldDataTypeEnum];


/**
 * Check if a given object implements the VariationField interface.
 */
export function instanceOfVariationField(value: object): value is VariationField {
    if (!('fieldKey' in value) || value['fieldKey'] === undefined) return false;
    return true;
}

export function VariationFieldFromJSON(json: any): VariationField {
    return VariationFieldFromJSONTyped(json, false);
}

export function VariationFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): VariationField {
    if (json == null) {
        return json;
    }
    return {

        'artworkOrAssetRef': json['artwork_or_asset_ref'] == null ? undefined : json['artwork_or_asset_ref'],
        'dataType': json['data_type'] == null ? undefined : json['data_type'],
        'fieldKey': json['field_key'],
    };
}

export function VariationFieldToJSON(json: any): VariationField {
    return VariationFieldToJSONTyped(json, false);
}

export function VariationFieldToJSONTyped(value?: VariationField | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'artwork_or_asset_ref': value['artworkOrAssetRef'],
        'data_type': value['dataType'],
        'field_key': value['fieldKey'],
    };
}
