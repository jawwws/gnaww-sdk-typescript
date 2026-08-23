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
 * Supported print colour capability.
 * @export
 * @interface ColourCapability
 */
export interface ColourCapability {
    /**
     *
     * @type {number}
     * @memberof ColourCapability
     */
    maximumSpotColours?: number | null;
    /**
     *
     * @type {Array<ColourCapabilityModesEnum>}
     * @memberof ColourCapability
     */
    modes: Array<ColourCapabilityModesEnum>;
    /**
     *
     * @type {boolean}
     * @memberof ColourCapability
     */
    supportsMetallicInk?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ColourCapability
     */
    supportsWhiteInk?: boolean;
}


/**
 * @export
 */
export const ColourCapabilityModesEnum = {
    Mono: 'mono',
    FullColour: 'full_colour',
    Spot: 'spot',
    Unknown: 'unknown'
} as const;
export type ColourCapabilityModesEnum = typeof ColourCapabilityModesEnum[keyof typeof ColourCapabilityModesEnum];


/**
 * Check if a given object implements the ColourCapability interface.
 */
export function instanceOfColourCapability(value: object): value is ColourCapability {
    if (!('modes' in value) || value['modes'] === undefined) return false;
    return true;
}

export function ColourCapabilityFromJSON(json: any): ColourCapability {
    return ColourCapabilityFromJSONTyped(json, false);
}

export function ColourCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColourCapability {
    if (json == null) {
        return json;
    }
    return {

        'maximumSpotColours': json['maximum_spot_colours'] == null ? undefined : json['maximum_spot_colours'],
        'modes': json['modes'],
        'supportsMetallicInk': json['supports_metallic_ink'] == null ? undefined : json['supports_metallic_ink'],
        'supportsWhiteInk': json['supports_white_ink'] == null ? undefined : json['supports_white_ink'],
    };
}

export function ColourCapabilityToJSON(json: any): ColourCapability {
    return ColourCapabilityToJSONTyped(json, false);
}

export function ColourCapabilityToJSONTyped(value?: ColourCapability | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'maximum_spot_colours': value['maximumSpotColours'],
        'modes': value['modes'],
        'supports_metallic_ink': value['supportsMetallicInk'],
        'supports_white_ink': value['supportsWhiteInk'],
    };
}
