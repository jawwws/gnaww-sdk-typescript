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
import type { ColourCapability } from './ColourCapability';
import {
    ColourCapabilityFromJSON,
    ColourCapabilityFromJSONTyped,
    ColourCapabilityToJSON,
    ColourCapabilityToJSONTyped,
} from './ColourCapability';
import type { PersonalisationCapability } from './PersonalisationCapability';
import {
    PersonalisationCapabilityFromJSON,
    PersonalisationCapabilityFromJSONTyped,
    PersonalisationCapabilityToJSON,
    PersonalisationCapabilityToJSONTyped,
} from './PersonalisationCapability';
import type { CustomDimensionCapability } from './CustomDimensionCapability';
import {
    CustomDimensionCapabilityFromJSON,
    CustomDimensionCapabilityFromJSONTyped,
    CustomDimensionCapabilityToJSON,
    CustomDimensionCapabilityToJSONTyped,
} from './CustomDimensionCapability';
import type { DimensionCapability } from './DimensionCapability';
import {
    DimensionCapabilityFromJSON,
    DimensionCapabilityFromJSONTyped,
    DimensionCapabilityToJSON,
    DimensionCapabilityToJSONTyped,
} from './DimensionCapability';
import type { MaterialCapability } from './MaterialCapability';
import {
    MaterialCapabilityFromJSON,
    MaterialCapabilityFromJSONTyped,
    MaterialCapabilityToJSON,
    MaterialCapabilityToJSONTyped,
} from './MaterialCapability';

/**
 * Shared commercial print capability fields.
 * @export
 * @interface CommercialPrintOptions
 */
export interface CommercialPrintOptions {
    /**
     *
     * @type {ColourCapability}
     * @memberof CommercialPrintOptions
     */
    colour: ColourCapability;
    /**
     *
     * @type {CustomDimensionCapability}
     * @memberof CommercialPrintOptions
     */
    customDimensions?: CustomDimensionCapability | null;
    /**
     *
     * @type {Array<DimensionCapability>}
     * @memberof CommercialPrintOptions
     */
    dimensions: Array<DimensionCapability>;
    /**
     *
     * @type {Array<MaterialCapability>}
     * @memberof CommercialPrintOptions
     */
    materials: Array<MaterialCapability>;
    /**
     *
     * @type {PersonalisationCapability}
     * @memberof CommercialPrintOptions
     */
    personalisation?: PersonalisationCapability;
    /**
     *
     * @type {Array<CommercialPrintOptionsPrintedSidesEnum>}
     * @memberof CommercialPrintOptions
     */
    printedSides: Array<CommercialPrintOptionsPrintedSidesEnum>;
}


/**
 * @export
 */
export const CommercialPrintOptionsPrintedSidesEnum = {
    SingleSided: 'single_sided',
    DoubleSided: 'double_sided',
    Unknown: 'unknown'
} as const;
export type CommercialPrintOptionsPrintedSidesEnum = typeof CommercialPrintOptionsPrintedSidesEnum[keyof typeof CommercialPrintOptionsPrintedSidesEnum];


/**
 * Check if a given object implements the CommercialPrintOptions interface.
 */
export function instanceOfCommercialPrintOptions(value: object): value is CommercialPrintOptions {
    if (!('colour' in value) || value['colour'] === undefined) return false;
    if (!('dimensions' in value) || value['dimensions'] === undefined) return false;
    if (!('materials' in value) || value['materials'] === undefined) return false;
    if (!('printedSides' in value) || value['printedSides'] === undefined) return false;
    return true;
}

export function CommercialPrintOptionsFromJSON(json: any): CommercialPrintOptions {
    return CommercialPrintOptionsFromJSONTyped(json, false);
}

export function CommercialPrintOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommercialPrintOptions {
    if (json == null) {
        return json;
    }
    return {

        'colour': ColourCapabilityFromJSON(json['colour']),
        'customDimensions': json['custom_dimensions'] == null ? undefined : CustomDimensionCapabilityFromJSON(json['custom_dimensions']),
        'dimensions': ((json['dimensions'] as Array<any>).map(DimensionCapabilityFromJSON)),
        'materials': ((json['materials'] as Array<any>).map(MaterialCapabilityFromJSON)),
        'personalisation': json['personalisation'] == null ? undefined : PersonalisationCapabilityFromJSON(json['personalisation']),
        'printedSides': json['printed_sides'],
    };
}

export function CommercialPrintOptionsToJSON(json: any): CommercialPrintOptions {
    return CommercialPrintOptionsToJSONTyped(json, false);
}

export function CommercialPrintOptionsToJSONTyped(value?: CommercialPrintOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'colour': ColourCapabilityToJSON(value['colour']),
        'custom_dimensions': CustomDimensionCapabilityToJSON(value['customDimensions']),
        'dimensions': ((value['dimensions'] as Array<any>).map(DimensionCapabilityToJSON)),
        'materials': ((value['materials'] as Array<any>).map(MaterialCapabilityToJSON)),
        'personalisation': PersonalisationCapabilityToJSON(value['personalisation']),
        'printed_sides': value['printedSides'],
    };
}
