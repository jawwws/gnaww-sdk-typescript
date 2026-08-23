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
 * A controlled production process supported by the producer.
 * @export
 * @interface ProducerProcessCapability
 */
export interface ProducerProcessCapability {
    /**
     *
     * @type {ProducerProcessCapabilityProcessEnum}
     * @memberof ProducerProcessCapability
     */
    process: ProducerProcessCapabilityProcessEnum;
}


/**
 * @export
 */
export const ProducerProcessCapabilityProcessEnum = {
    DigitalPrint: 'digital_print',
    OffsetLitho: 'offset_litho',
    LargeFormat: 'large_format',
    Dtg: 'dtg',
    Dtf: 'dtf',
    Htv: 'htv',
    Embroidery: 'embroidery',
    ScreenPrint: 'screen_print',
    Sublimation: 'sublimation',
    DigitalTextilePrint: 'digital_textile_print',
    ReactiveDyePrint: 'reactive_dye_print',
    PigmentPrint: 'pigment_print',
    Sewing: 'sewing',
    Hemming: 'hemming',
    PadPrint: 'pad_print',
    UvPrint: 'uv_print',
    Engraving: 'engraving',
    LaserEngraving: 'laser_engraving',
    Cutting: 'cutting',
    Folding: 'folding',
    Binding: 'binding',
    Lamination: 'lamination',
    Foiling: 'foiling',
    SpotUv: 'spot_uv',
    Unknown: 'unknown'
} as const;
export type ProducerProcessCapabilityProcessEnum = typeof ProducerProcessCapabilityProcessEnum[keyof typeof ProducerProcessCapabilityProcessEnum];


/**
 * Check if a given object implements the ProducerProcessCapability interface.
 */
export function instanceOfProducerProcessCapability(value: object): value is ProducerProcessCapability {
    if (!('process' in value) || value['process'] === undefined) return false;
    return true;
}

export function ProducerProcessCapabilityFromJSON(json: any): ProducerProcessCapability {
    return ProducerProcessCapabilityFromJSONTyped(json, false);
}

export function ProducerProcessCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerProcessCapability {
    if (json == null) {
        return json;
    }
    return {

        'process': json['process'],
    };
}

export function ProducerProcessCapabilityToJSON(json: any): ProducerProcessCapability {
    return ProducerProcessCapabilityToJSONTyped(json, false);
}

export function ProducerProcessCapabilityToJSONTyped(value?: ProducerProcessCapability | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'process': value['process'],
    };
}
