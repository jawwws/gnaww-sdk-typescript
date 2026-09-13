/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { OperationTarget } from './OperationTarget';
import type { ManufacturingOperationParameters } from './ManufacturingOperationParameters';
/**
 *
 * @export
 * @interface ManufacturingOperation
 */
export interface ManufacturingOperation {
    /**
     *
     * @type {ManufacturingOperationCategoryEnum}
     * @memberof ManufacturingOperation
     */
    category: ManufacturingOperationCategoryEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof ManufacturingOperation
     */
    dependsOn?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ManufacturingOperation
     */
    method?: string | null;
    /**
     *
     * @type {string}
     * @memberof ManufacturingOperation
     */
    operationId: string;
    /**
     *
     * @type {ManufacturingOperationParameters}
     * @memberof ManufacturingOperation
     */
    parameters?: ManufacturingOperationParameters | null;
    /**
     *
     * @type {Array<OperationTarget>}
     * @memberof ManufacturingOperation
     */
    targets: Array<OperationTarget>;
}
/**
 * @export
 */
export declare const ManufacturingOperationCategoryEnum: {
    readonly Print: "print";
    readonly Decorate: "decorate";
    readonly Coat: "coat";
    readonly Laminate: "laminate";
    readonly Emboss: "emboss";
    readonly Deboss: "deboss";
    readonly Foil: "foil";
    readonly SpotFinish: "spot_finish";
    readonly Cut: "cut";
    readonly DieCut: "die_cut";
    readonly LaserCut: "laser_cut";
    readonly Drill: "drill";
    readonly Perforate: "perforate";
    readonly Crease: "crease";
    readonly Fold: "fold";
    readonly Stitch: "stitch";
    readonly Sew: "sew";
    readonly Bind: "bind";
    readonly Glue: "glue";
    readonly Attach: "attach";
    readonly Assemble: "assemble";
    readonly Cure: "cure";
    readonly Dry: "dry";
    readonly Inspect: "inspect";
    readonly Pack: "pack";
    readonly Other: "other";
};
export type ManufacturingOperationCategoryEnum = typeof ManufacturingOperationCategoryEnum[keyof typeof ManufacturingOperationCategoryEnum];
/**
 * Check if a given object implements the ManufacturingOperation interface.
 */
export declare function instanceOfManufacturingOperation(value: object): value is ManufacturingOperation;
export declare function ManufacturingOperationFromJSON(json: any): ManufacturingOperation;
export declare function ManufacturingOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingOperation;
export declare function ManufacturingOperationToJSON(json: any): ManufacturingOperation;
export declare function ManufacturingOperationToJSONTyped(value?: ManufacturingOperation | null, ignoreDiscriminator?: boolean): any;
