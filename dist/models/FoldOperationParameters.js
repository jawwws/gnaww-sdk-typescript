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
exports.FoldOperationParametersNamedPatternEnum = exports.FoldOperationParametersKindEnum = exports.FoldOperationParametersBasisEnum = void 0;
exports.instanceOfFoldOperationParameters = instanceOfFoldOperationParameters;
exports.FoldOperationParametersFromJSON = FoldOperationParametersFromJSON;
exports.FoldOperationParametersFromJSONTyped = FoldOperationParametersFromJSONTyped;
exports.FoldOperationParametersToJSON = FoldOperationParametersToJSON;
exports.FoldOperationParametersToJSONTyped = FoldOperationParametersToJSONTyped;
const FoldPanel_1 = require("./FoldPanel");
const FoldLine_1 = require("./FoldLine");
const ManufacturingGeometry_1 = require("./ManufacturingGeometry");
/**
 * @export
 */
exports.FoldOperationParametersBasisEnum = {
    Unresolved: 'unresolved',
    ExplicitLines: 'explicit_lines',
    NamedPattern: 'named_pattern',
    LegacyInputOutput: 'legacy_input_output'
};
/**
 * @export
 */
exports.FoldOperationParametersKindEnum = {
    Fold: 'fold'
};
/**
 * @export
 */
exports.FoldOperationParametersNamedPatternEnum = {
    HalfFold: 'half_fold',
    TriFold: 'tri_fold',
    ZFold: 'z_fold',
    GateFold: 'gate_fold',
    RollFold: 'roll_fold',
    CrossFold: 'cross_fold',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the FoldOperationParameters interface.
 */
function instanceOfFoldOperationParameters(value) {
    if (!('basis' in value) || value['basis'] === undefined)
        return false;
    return true;
}
function FoldOperationParametersFromJSON(json) {
    return FoldOperationParametersFromJSONTyped(json, false);
}
function FoldOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'basis': json['basis'],
        'foldLines': json['fold_lines'] == null ? undefined : (json['fold_lines'].map(FoldLine_1.FoldLineFromJSON)),
        'inputGeometry': json['input_geometry'] == null ? undefined : (0, ManufacturingGeometry_1.ManufacturingGeometryFromJSON)(json['input_geometry']),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'namedPattern': json['named_pattern'] == null ? undefined : json['named_pattern'],
        'physicalPanels': json['physical_panels'] == null ? undefined : (json['physical_panels'].map(FoldPanel_1.FoldPanelFromJSON)),
        'resultingGeometry': json['resulting_geometry'] == null ? undefined : (0, ManufacturingGeometry_1.ManufacturingGeometryFromJSON)(json['resulting_geometry']),
    };
}
function FoldOperationParametersToJSON(json) {
    return FoldOperationParametersToJSONTyped(json, false);
}
function FoldOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'basis': value['basis'],
        'fold_lines': value['foldLines'] == null ? undefined : (value['foldLines'].map(FoldLine_1.FoldLineToJSON)),
        'input_geometry': (0, ManufacturingGeometry_1.ManufacturingGeometryToJSON)(value['inputGeometry']),
        'kind': value['kind'],
        'named_pattern': value['namedPattern'],
        'physical_panels': value['physicalPanels'] == null ? undefined : (value['physicalPanels'].map(FoldPanel_1.FoldPanelToJSON)),
        'resulting_geometry': (0, ManufacturingGeometry_1.ManufacturingGeometryToJSON)(value['resultingGeometry']),
    };
}
