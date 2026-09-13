/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { RepeatedDrillPattern } from './RepeatedDrillPattern';
import type { DrillHole } from './DrillHole';
/**
 *
 * @export
 * @interface DrillOperationParameters
 */
export interface DrillOperationParameters {
    /**
     *
     * @type {Array<DrillHole>}
     * @memberof DrillOperationParameters
     */
    holes?: Array<DrillHole>;
    /**
     *
     * @type {DrillOperationParametersKindEnum}
     * @memberof DrillOperationParameters
     */
    kind?: DrillOperationParametersKindEnum;
    /**
     *
     * @type {Array<RepeatedDrillPattern>}
     * @memberof DrillOperationParameters
     */
    patterns?: Array<RepeatedDrillPattern>;
}
/**
 * @export
 */
export declare const DrillOperationParametersKindEnum: {
    readonly Drill: "drill";
};
export type DrillOperationParametersKindEnum = typeof DrillOperationParametersKindEnum[keyof typeof DrillOperationParametersKindEnum];
/**
 * Check if a given object implements the DrillOperationParameters interface.
 */
export declare function instanceOfDrillOperationParameters(value: object): value is DrillOperationParameters;
export declare function DrillOperationParametersFromJSON(json: any): DrillOperationParameters;
export declare function DrillOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): DrillOperationParameters;
export declare function DrillOperationParametersToJSON(json: any): DrillOperationParameters;
export declare function DrillOperationParametersToJSONTyped(value?: DrillOperationParameters | null, ignoreDiscriminator?: boolean): any;
