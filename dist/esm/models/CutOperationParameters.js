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
import { ContourFromJSON, ContourToJSON, } from './Contour';
/**
 * @export
 */
export const CutOperationParametersCornersEnum = {
    TopLeft: 'top_left',
    TopRight: 'top_right',
    BottomLeft: 'bottom_left',
    BottomRight: 'bottom_right'
};
/**
 * @export
 */
export const CutOperationParametersKindEnum = {
    Cut: 'cut'
};
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
};
/**
 * Check if a given object implements the CutOperationParameters interface.
 */
export function instanceOfCutOperationParameters(value) {
    if (!('method' in value) || value['method'] === undefined)
        return false;
    return true;
}
export function CutOperationParametersFromJSON(json) {
    return CutOperationParametersFromJSONTyped(json, false);
}
export function CutOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
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
export function CutOperationParametersToJSON(json) {
    return CutOperationParametersToJSONTyped(json, false);
}
export function CutOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
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
