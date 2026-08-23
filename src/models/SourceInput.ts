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
 * Original requirement data submitted to Gnaww.
 * @export
 * @interface SourceInput
 */
export interface SourceInput {
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof SourceInput
     */
    data?: { [key: string]: any; } | null;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof SourceInput
     */
    metadata?: { [key: string]: any; };
    /**
     *
     * @type {string}
     * @memberof SourceInput
     */
    rawText?: string | null;
    /**
     *
     * @type {string}
     * @memberof SourceInput
     */
    reference?: string | null;
    /**
     *
     * @type {string}
     * @memberof SourceInput
     */
    sourceSystem?: string | null;
    /**
     *
     * @type {SourceInputTypeEnum}
     * @memberof SourceInput
     */
    type: SourceInputTypeEnum;
}


/**
 * @export
 */
export const SourceInputTypeEnum = {
    NaturalLanguage: 'natural_language',
    StructuredJson: 'structured_json',
    Email: 'email',
    CsvRow: 'csv_row',
    StorefrontProduct: 'storefront_product'
} as const;
export type SourceInputTypeEnum = typeof SourceInputTypeEnum[keyof typeof SourceInputTypeEnum];


/**
 * Check if a given object implements the SourceInput interface.
 */
export function instanceOfSourceInput(value: object): value is SourceInput {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function SourceInputFromJSON(json: any): SourceInput {
    return SourceInputFromJSONTyped(json, false);
}

export function SourceInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceInput {
    if (json == null) {
        return json;
    }
    return {

        'data': json['data'] == null ? undefined : json['data'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'rawText': json['raw_text'] == null ? undefined : json['raw_text'],
        'reference': json['reference'] == null ? undefined : json['reference'],
        'sourceSystem': json['source_system'] == null ? undefined : json['source_system'],
        'type': json['type'],
    };
}

export function SourceInputToJSON(json: any): SourceInput {
    return SourceInputToJSONTyped(json, false);
}

export function SourceInputToJSONTyped(value?: SourceInput | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'data': value['data'],
        'metadata': value['metadata'],
        'raw_text': value['rawText'],
        'reference': value['reference'],
        'source_system': value['sourceSystem'],
        'type': value['type'],
    };
}
