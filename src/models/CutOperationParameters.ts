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
import type { Contour } from './Contour';
import {
    ContourFromJSON,
    ContourFromJSONTyped,
    ContourToJSON,
    ContourToJSONTyped,
} from './Contour';

/**
 *
 * @export
 * @interface CutOperationParameters
 */
export interface CutOperationParameters {
    /**
     *
     * @type {Contour}
     * @memberof CutOperationParameters
     */
    contour?: Contour | null;
    /**
     *
     * @type {number}
     * @memberof CutOperationParameters
     */
    cornerRadiusMm?: number | null;
    /**
     *
     * @type {Array<CutOperationParametersCornersEnum>}
     * @memberof CutOperationParameters
     */
    corners?: Array<CutOperationParametersCornersEnum>;
    /**
     *
     * @type {CutOperationParametersKindEnum}
     * @memberof CutOperationParameters
     */
    kind?: CutOperationParametersKindEnum;
    /**
     *
     * @type {CutOperationParametersMethodEnum}
     * @memberof CutOperationParameters
     */
    method: CutOperationParametersMethodEnum;
}


/**
 * @export
 */
export const CutOperationParametersCornersEnum = {
    TopLeft: 'top_left',
    TopRight: 'top_right',
    BottomLeft: 'bottom_left',
    BottomRight: 'bottom_right'
} as const;
export type CutOperationParametersCornersEnum = typeof CutOperationParametersCornersEnum[keyof typeof CutOperationParametersCornersEnum];

/**
 * @export
 */
export const CutOperationParametersKindEnum = {
    Cut: 'cut'
} as const;
export type CutOperationParametersKindEnum = typeof CutOperationParametersKindEnum[keyof typeof CutOperationParametersKindEnum];

/**
 * @export
 */
export const CutOperationParametersMethodEnum = {
    Trim: 'trim',
    Guillotine: 'guillotine',
    CornerRound: 'corner_round',
    DieCut: 'die_cut',
    KissCut: 'kiss_cut',
    LaserCut: 'laser_cut',
    Aperture: 'aperture',
    Contour: 'contour',
    Custom: 'custom'
} as const;
export type CutOperationParametersMethodEnum = typeof CutOperationParametersMethodEnum[keyof typeof CutOperationParametersMethodEnum];


/**
 * Check if a given object implements the CutOperationParameters interface.
 */
export function instanceOfCutOperationParameters(value: object): value is CutOperationParameters {
    if (!('method' in value) || value['method'] === undefined) return false;
    return true;
}

export function CutOperationParametersFromJSON(json: any): CutOperationParameters {
    return CutOperationParametersFromJSONTyped(json, false);
}

export function CutOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): CutOperationParameters {
    if (json == null) {
        return json;
    }
    return {

        'contour': json['contour'] == null ? undefined : ContourFromJSON(json['contour']),
        'cornerRadiusMm': json['corner_radius_mm'] == null ? undefined : json['corner_radius_mm'],
        'corners': json['corners'] == null ? undefined : json['corners'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'method': json['method'],
    };
}

export function CutOperationParametersToJSON(json: any): CutOperationParameters {
    return CutOperationParametersToJSONTyped(json, false);
}

export function CutOperationParametersToJSONTyped(value?: CutOperationParameters | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'contour': ContourToJSON(value['contour']),
        'corner_radius_mm': value['cornerRadiusMm'],
        'corners': value['corners'],
        'kind': value['kind'],
        'method': value['method'],
    };
}
