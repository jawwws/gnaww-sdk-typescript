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
 * A reusable decoration position and size capability.
 * @export
 * @interface DecorationAreaCapability
 */
export interface DecorationAreaCapability {
    /**
     *
     * @type {number}
     * @memberof DecorationAreaCapability
     */
    maximumColours?: number | null;
    /**
     *
     * @type {number}
     * @memberof DecorationAreaCapability
     */
    maximumDiameterMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof DecorationAreaCapability
     */
    maximumHeightMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof DecorationAreaCapability
     */
    maximumWidthMm?: number | null;
    /**
     *
     * @type {Array<DecorationAreaCapabilityMethodsEnum>}
     * @memberof DecorationAreaCapability
     */
    methods: Array<DecorationAreaCapabilityMethodsEnum>;
    /**
     *
     * @type {DecorationAreaCapabilityPositionEnum}
     * @memberof DecorationAreaCapability
     */
    position: DecorationAreaCapabilityPositionEnum;
    /**
     *
     * @type {boolean}
     * @memberof DecorationAreaCapability
     */
    supportsFullColour?: boolean;
}


/**
 * @export
 */
export const DecorationAreaCapabilityMethodsEnum = {
    Dtg: 'dtg',
    Dtf: 'dtf',
    Htv: 'htv',
    Embroidery: 'embroidery',
    ScreenPrint: 'screen_print',
    Sublimation: 'sublimation',
    PadPrint: 'pad_print',
    UvPrint: 'uv_print',
    Engraving: 'engraving',
    LaserEngraving: 'laser_engraving',
    Unknown: 'unknown'
} as const;
export type DecorationAreaCapabilityMethodsEnum = typeof DecorationAreaCapabilityMethodsEnum[keyof typeof DecorationAreaCapabilityMethodsEnum];

/**
 * @export
 */
export const DecorationAreaCapabilityPositionEnum = {
    Front: 'front',
    Back: 'back',
    LeftChest: 'left_chest',
    RightChest: 'right_chest',
    Sleeve: 'sleeve',
    CapFront: 'cap_front',
    Left: 'left',
    Right: 'right',
    Wrap: 'wrap',
    Barrel: 'barrel',
    Lid: 'lid',
    Base: 'base',
    Unknown: 'unknown'
} as const;
export type DecorationAreaCapabilityPositionEnum = typeof DecorationAreaCapabilityPositionEnum[keyof typeof DecorationAreaCapabilityPositionEnum];


/**
 * Check if a given object implements the DecorationAreaCapability interface.
 */
export function instanceOfDecorationAreaCapability(value: object): value is DecorationAreaCapability {
    if (!('methods' in value) || value['methods'] === undefined) return false;
    if (!('position' in value) || value['position'] === undefined) return false;
    return true;
}

export function DecorationAreaCapabilityFromJSON(json: any): DecorationAreaCapability {
    return DecorationAreaCapabilityFromJSONTyped(json, false);
}

export function DecorationAreaCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): DecorationAreaCapability {
    if (json == null) {
        return json;
    }
    return {

        'maximumColours': json['maximum_colours'] == null ? undefined : json['maximum_colours'],
        'maximumDiameterMm': json['maximum_diameter_mm'] == null ? undefined : json['maximum_diameter_mm'],
        'maximumHeightMm': json['maximum_height_mm'] == null ? undefined : json['maximum_height_mm'],
        'maximumWidthMm': json['maximum_width_mm'] == null ? undefined : json['maximum_width_mm'],
        'methods': json['methods'],
        'position': json['position'],
        'supportsFullColour': json['supports_full_colour'] == null ? undefined : json['supports_full_colour'],
    };
}

export function DecorationAreaCapabilityToJSON(json: any): DecorationAreaCapability {
    return DecorationAreaCapabilityToJSONTyped(json, false);
}

export function DecorationAreaCapabilityToJSONTyped(value?: DecorationAreaCapability | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'maximum_colours': value['maximumColours'],
        'maximum_diameter_mm': value['maximumDiameterMm'],
        'maximum_height_mm': value['maximumHeightMm'],
        'maximum_width_mm': value['maximumWidthMm'],
        'methods': value['methods'],
        'position': value['position'],
        'supports_full_colour': value['supportsFullColour'],
    };
}
