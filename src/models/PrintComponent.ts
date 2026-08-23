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
import type { Substrate } from './Substrate';
import {
    SubstrateFromJSON,
    SubstrateFromJSONTyped,
    SubstrateToJSON,
    SubstrateToJSONTyped,
} from './Substrate';
import type { FinishedSize } from './FinishedSize';
import {
    FinishedSizeFromJSON,
    FinishedSizeFromJSONTyped,
    FinishedSizeToJSON,
    FinishedSizeToJSONTyped,
} from './FinishedSize';
import type { Finishing } from './Finishing';
import {
    FinishingFromJSON,
    FinishingFromJSONTyped,
    FinishingToJSON,
    FinishingToJSONTyped,
} from './Finishing';
import type { PrintSpec } from './PrintSpec';
import {
    PrintSpecFromJSON,
    PrintSpecFromJSONTyped,
    PrintSpecToJSON,
    PrintSpecToJSONTyped,
} from './PrintSpec';

/**
 * Single printable component of a canonical job.
 * @export
 * @interface PrintComponent
 */
export interface PrintComponent {
    /**
     *
     * @type {string}
     * @memberof PrintComponent
     */
    componentId?: string;
    /**
     *
     * @type {Array<Finishing>}
     * @memberof PrintComponent
     */
    finishings?: Array<Finishing>;
    /**
     *
     * @type {PrintSpec}
     * @memberof PrintComponent
     */
    printSpec?: PrintSpec;
    /**
     *
     * @type {PrintComponentRoleEnum}
     * @memberof PrintComponent
     */
    role?: PrintComponentRoleEnum;
    /**
     *
     * @type {FinishedSize}
     * @memberof PrintComponent
     */
    size?: FinishedSize;
    /**
     *
     * @type {Substrate}
     * @memberof PrintComponent
     */
    substrate?: Substrate;
}


/**
 * @export
 */
export const PrintComponentRoleEnum = {
    Main: 'main',
    Flat: 'flat',
    Finished: 'finished',
    Cover: 'cover',
    Text: 'text',
    Insert: 'insert',
    Garment: 'garment',
    Decoration: 'decoration',
    Unknown: 'unknown'
} as const;
export type PrintComponentRoleEnum = typeof PrintComponentRoleEnum[keyof typeof PrintComponentRoleEnum];


/**
 * Check if a given object implements the PrintComponent interface.
 */
export function instanceOfPrintComponent(value: object): value is PrintComponent {
    return true;
}

export function PrintComponentFromJSON(json: any): PrintComponent {
    return PrintComponentFromJSONTyped(json, false);
}

export function PrintComponentFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrintComponent {
    if (json == null) {
        return json;
    }
    return {

        'componentId': json['component_id'] == null ? undefined : json['component_id'],
        'finishings': json['finishings'] == null ? undefined : ((json['finishings'] as Array<any>).map(FinishingFromJSON)),
        'printSpec': json['print_spec'] == null ? undefined : PrintSpecFromJSON(json['print_spec']),
        'role': json['role'] == null ? undefined : json['role'],
        'size': json['size'] == null ? undefined : FinishedSizeFromJSON(json['size']),
        'substrate': json['substrate'] == null ? undefined : SubstrateFromJSON(json['substrate']),
    };
}

export function PrintComponentToJSON(json: any): PrintComponent {
    return PrintComponentToJSONTyped(json, false);
}

export function PrintComponentToJSONTyped(value?: PrintComponent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'component_id': value['componentId'],
        'finishings': value['finishings'] == null ? undefined : ((value['finishings'] as Array<any>).map(FinishingToJSON)),
        'print_spec': PrintSpecToJSON(value['printSpec']),
        'role': value['role'],
        'size': FinishedSizeToJSON(value['size']),
        'substrate': SubstrateToJSON(value['substrate']),
    };
}
