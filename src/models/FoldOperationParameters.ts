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
import type { FoldPanel } from './FoldPanel';
import {
    FoldPanelFromJSON,
    FoldPanelFromJSONTyped,
    FoldPanelToJSON,
    FoldPanelToJSONTyped,
} from './FoldPanel';
import type { FoldLine } from './FoldLine';
import {
    FoldLineFromJSON,
    FoldLineFromJSONTyped,
    FoldLineToJSON,
    FoldLineToJSONTyped,
} from './FoldLine';
import type { ManufacturingGeometry } from './ManufacturingGeometry';
import {
    ManufacturingGeometryFromJSON,
    ManufacturingGeometryFromJSONTyped,
    ManufacturingGeometryToJSON,
    ManufacturingGeometryToJSONTyped,
} from './ManufacturingGeometry';

/**
 *
 * @export
 * @interface FoldOperationParameters
 */
export interface FoldOperationParameters {
    /**
     *
     * @type {FoldOperationParametersBasisEnum}
     * @memberof FoldOperationParameters
     */
    basis: FoldOperationParametersBasisEnum;
    /**
     *
     * @type {Array<FoldLine>}
     * @memberof FoldOperationParameters
     */
    foldLines?: Array<FoldLine>;
    /**
     *
     * @type {ManufacturingGeometry}
     * @memberof FoldOperationParameters
     */
    inputGeometry?: ManufacturingGeometry | null;
    /**
     *
     * @type {FoldOperationParametersKindEnum}
     * @memberof FoldOperationParameters
     */
    kind?: FoldOperationParametersKindEnum;
    /**
     *
     * @type {FoldOperationParametersNamedPatternEnum}
     * @memberof FoldOperationParameters
     */
    namedPattern?: FoldOperationParametersNamedPatternEnum | null;
    /**
     *
     * @type {Array<FoldPanel>}
     * @memberof FoldOperationParameters
     */
    physicalPanels?: Array<FoldPanel>;
    /**
     *
     * @type {ManufacturingGeometry}
     * @memberof FoldOperationParameters
     */
    resultingGeometry?: ManufacturingGeometry | null;
}


/**
 * @export
 */
export const FoldOperationParametersBasisEnum = {
    Unresolved: 'unresolved',
    ExplicitLines: 'explicit_lines',
    NamedPattern: 'named_pattern',
    LegacyInputOutput: 'legacy_input_output'
} as const;
export type FoldOperationParametersBasisEnum = typeof FoldOperationParametersBasisEnum[keyof typeof FoldOperationParametersBasisEnum];

/**
 * @export
 */
export const FoldOperationParametersKindEnum = {
    Fold: 'fold'
} as const;
export type FoldOperationParametersKindEnum = typeof FoldOperationParametersKindEnum[keyof typeof FoldOperationParametersKindEnum];

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
} as const;
export type FoldOperationParametersNamedPatternEnum = typeof FoldOperationParametersNamedPatternEnum[keyof typeof FoldOperationParametersNamedPatternEnum];


/**
 * Check if a given object implements the FoldOperationParameters interface.
 */
export function instanceOfFoldOperationParameters(value: object): value is FoldOperationParameters {
    if (!('basis' in value) || value['basis'] === undefined) return false;
    return true;
}

export function FoldOperationParametersFromJSON(json: any): FoldOperationParameters {
    return FoldOperationParametersFromJSONTyped(json, false);
}

export function FoldOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): FoldOperationParameters {
    if (json == null) {
        return json;
    }
    return {

        'basis': json['basis'],
        'foldLines': json['fold_lines'] == null ? undefined : ((json['fold_lines'] as Array<any>).map(FoldLineFromJSON)),
        'inputGeometry': json['input_geometry'] == null ? undefined : ManufacturingGeometryFromJSON(json['input_geometry']),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'namedPattern': json['named_pattern'] == null ? undefined : json['named_pattern'],
        'physicalPanels': json['physical_panels'] == null ? undefined : ((json['physical_panels'] as Array<any>).map(FoldPanelFromJSON)),
        'resultingGeometry': json['resulting_geometry'] == null ? undefined : ManufacturingGeometryFromJSON(json['resulting_geometry']),
    };
}

export function FoldOperationParametersToJSON(json: any): FoldOperationParameters {
    return FoldOperationParametersToJSONTyped(json, false);
}

export function FoldOperationParametersToJSONTyped(value?: FoldOperationParameters | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'basis': value['basis'],
        'fold_lines': value['foldLines'] == null ? undefined : ((value['foldLines'] as Array<any>).map(FoldLineToJSON)),
        'input_geometry': ManufacturingGeometryToJSON(value['inputGeometry']),
        'kind': value['kind'],
        'named_pattern': value['namedPattern'],
        'physical_panels': value['physicalPanels'] == null ? undefined : ((value['physicalPanels'] as Array<any>).map(FoldPanelToJSON)),
        'resulting_geometry': ManufacturingGeometryToJSON(value['resultingGeometry']),
    };
}
