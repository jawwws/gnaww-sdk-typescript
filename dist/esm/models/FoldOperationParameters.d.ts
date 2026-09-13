/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { FoldPanel } from './FoldPanel';
import type { FoldLine } from './FoldLine';
import type { ManufacturingGeometry } from './ManufacturingGeometry';
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
export declare const FoldOperationParametersBasisEnum: {
    readonly Unresolved: "unresolved";
    readonly ExplicitLines: "explicit_lines";
    readonly NamedPattern: "named_pattern";
    readonly LegacyInputOutput: "legacy_input_output";
};
export type FoldOperationParametersBasisEnum = typeof FoldOperationParametersBasisEnum[keyof typeof FoldOperationParametersBasisEnum];
/**
 * @export
 */
export declare const FoldOperationParametersKindEnum: {
    readonly Fold: "fold";
};
export type FoldOperationParametersKindEnum = typeof FoldOperationParametersKindEnum[keyof typeof FoldOperationParametersKindEnum];
/**
 * @export
 */
export declare const FoldOperationParametersNamedPatternEnum: {
    readonly HalfFold: "half_fold";
    readonly TriFold: "tri_fold";
    readonly ZFold: "z_fold";
    readonly GateFold: "gate_fold";
    readonly RollFold: "roll_fold";
    readonly CrossFold: "cross_fold";
    readonly Unknown: "unknown";
};
export type FoldOperationParametersNamedPatternEnum = typeof FoldOperationParametersNamedPatternEnum[keyof typeof FoldOperationParametersNamedPatternEnum];
/**
 * Check if a given object implements the FoldOperationParameters interface.
 */
export declare function instanceOfFoldOperationParameters(value: object): value is FoldOperationParameters;
export declare function FoldOperationParametersFromJSON(json: any): FoldOperationParameters;
export declare function FoldOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): FoldOperationParameters;
export declare function FoldOperationParametersToJSON(json: any): FoldOperationParameters;
export declare function FoldOperationParametersToJSONTyped(value?: FoldOperationParameters | null, ignoreDiscriminator?: boolean): any;
