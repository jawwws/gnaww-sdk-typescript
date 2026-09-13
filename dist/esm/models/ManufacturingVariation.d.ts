/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { VariationField } from './VariationField';
import type { OperationTarget } from './OperationTarget';
/**
 *
 * @export
 * @interface ManufacturingVariation
 */
export interface ManufacturingVariation {
    /**
     *
     * @type {string}
     * @memberof ManufacturingVariation
     */
    dataAssetRef?: string | null;
    /**
     *
     * @type {Array<VariationField>}
     * @memberof ManufacturingVariation
     */
    fields?: Array<VariationField>;
    /**
     *
     * @type {ManufacturingVariationScopeEnum}
     * @memberof ManufacturingVariation
     */
    scope: ManufacturingVariationScopeEnum;
    /**
     *
     * @type {ManufacturingVariationSourceBasisEnum}
     * @memberof ManufacturingVariation
     */
    sourceBasis?: ManufacturingVariationSourceBasisEnum;
    /**
     *
     * @type {Array<OperationTarget>}
     * @memberof ManufacturingVariation
     */
    targets: Array<OperationTarget>;
    /**
     *
     * @type {string}
     * @memberof ManufacturingVariation
     */
    variationId: string;
}
/**
 * @export
 */
export declare const ManufacturingVariationScopeEnum: {
    readonly PerUnit: "per_unit";
    readonly Grouped: "grouped";
    readonly Batch: "batch";
};
export type ManufacturingVariationScopeEnum = typeof ManufacturingVariationScopeEnum[keyof typeof ManufacturingVariationScopeEnum];
/**
 * @export
 */
export declare const ManufacturingVariationSourceBasisEnum: {
    readonly Explicit: "explicit";
    readonly LegacyVariableData: "legacy_variable_data";
};
export type ManufacturingVariationSourceBasisEnum = typeof ManufacturingVariationSourceBasisEnum[keyof typeof ManufacturingVariationSourceBasisEnum];
/**
 * Check if a given object implements the ManufacturingVariation interface.
 */
export declare function instanceOfManufacturingVariation(value: object): value is ManufacturingVariation;
export declare function ManufacturingVariationFromJSON(json: any): ManufacturingVariation;
export declare function ManufacturingVariationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingVariation;
export declare function ManufacturingVariationToJSON(json: any): ManufacturingVariation;
export declare function ManufacturingVariationToJSONTyped(value?: ManufacturingVariation | null, ignoreDiscriminator?: boolean): any;
