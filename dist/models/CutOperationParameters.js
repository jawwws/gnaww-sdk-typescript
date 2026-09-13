"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CutOperationParametersMethodEnum = exports.CutOperationParametersKindEnum = exports.CutOperationParametersCornersEnum = void 0;
exports.instanceOfCutOperationParameters = instanceOfCutOperationParameters;
exports.CutOperationParametersFromJSON = CutOperationParametersFromJSON;
exports.CutOperationParametersFromJSONTyped = CutOperationParametersFromJSONTyped;
exports.CutOperationParametersToJSON = CutOperationParametersToJSON;
exports.CutOperationParametersToJSONTyped = CutOperationParametersToJSONTyped;
const Contour_1 = require("./Contour");
/**
 * @export
 */
exports.CutOperationParametersCornersEnum = {
    TopLeft: 'top_left',
    TopRight: 'top_right',
    BottomLeft: 'bottom_left',
    BottomRight: 'bottom_right'
};
/**
 * @export
 */
exports.CutOperationParametersKindEnum = {
    Cut: 'cut'
};
/**
 * @export
 */
exports.CutOperationParametersMethodEnum = {
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
function instanceOfCutOperationParameters(value) {
    if (!('method' in value) || value['method'] === undefined)
        return false;
    return true;
}
function CutOperationParametersFromJSON(json) {
    return CutOperationParametersFromJSONTyped(json, false);
}
function CutOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'contour': json['contour'] == null ? undefined : (0, Contour_1.ContourFromJSON)(json['contour']),
        'cornerRadiusMm': json['corner_radius_mm'] == null ? undefined : json['corner_radius_mm'],
        'corners': json['corners'] == null ? undefined : json['corners'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'method': json['method'],
    };
}
function CutOperationParametersToJSON(json) {
    return CutOperationParametersToJSONTyped(json, false);
}
function CutOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'contour': (0, Contour_1.ContourToJSON)(value['contour']),
        'corner_radius_mm': value['cornerRadiusMm'],
        'corners': value['corners'],
        'kind': value['kind'],
        'method': value['method'],
    };
}
