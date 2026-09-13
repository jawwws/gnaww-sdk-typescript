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
import { FoldPanelFromJSON, FoldPanelToJSON, } from './FoldPanel';
import { FoldLineFromJSON, FoldLineToJSON, } from './FoldLine';
import { ManufacturingGeometryFromJSON, ManufacturingGeometryToJSON, } from './ManufacturingGeometry';
/**
 * @export
 */
export const FoldOperationParametersBasisEnum = {
    Unresolved: 'unresolved',
    ExplicitLines: 'explicit_lines',
    NamedPattern: 'named_pattern',
    LegacyInputOutput: 'legacy_input_output'
};
/**
 * @export
 */
export const FoldOperationParametersKindEnum = {
    Fold: 'fold'
};
/**
 * @export
 */
export const FoldOperationParametersNamedPatternEnum = {
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
export function instanceOfFoldOperationParameters(value) {
    if (!('basis' in value) || value['basis'] === undefined)
        return false;
    return true;
}
export function FoldOperationParametersFromJSON(json) {
    return FoldOperationParametersFromJSONTyped(json, false);
}
export function FoldOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'basis': json['basis'],
        'foldLines': json['fold_lines'] == null ? undefined : (json['fold_lines'].map(FoldLineFromJSON)),
        'inputGeometry': json['input_geometry'] == null ? undefined : ManufacturingGeometryFromJSON(json['input_geometry']),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'namedPattern': json['named_pattern'] == null ? undefined : json['named_pattern'],
        'physicalPanels': json['physical_panels'] == null ? undefined : (json['physical_panels'].map(FoldPanelFromJSON)),
        'resultingGeometry': json['resulting_geometry'] == null ? undefined : ManufacturingGeometryFromJSON(json['resulting_geometry']),
    };
}
export function FoldOperationParametersToJSON(json) {
    return FoldOperationParametersToJSONTyped(json, false);
}
export function FoldOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'basis': value['basis'],
        'fold_lines': value['foldLines'] == null ? undefined : (value['foldLines'].map(FoldLineToJSON)),
        'input_geometry': ManufacturingGeometryToJSON(value['inputGeometry']),
        'kind': value['kind'],
        'named_pattern': value['namedPattern'],
        'physical_panels': value['physicalPanels'] == null ? undefined : (value['physicalPanels'].map(FoldPanelToJSON)),
        'resulting_geometry': ManufacturingGeometryToJSON(value['resultingGeometry']),
    };
}
