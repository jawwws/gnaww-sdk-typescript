/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { AppModelsManufacturingGeometryMaterialCompositionPart } from './AppModelsManufacturingGeometryMaterialCompositionPart';
import type { GrammageRequirement } from './GrammageRequirement';
/**
 * Controlled material/substrate meaning for one component.
 * @export
 * @interface ManufacturingMaterial
 */
export interface ManufacturingMaterial {
    /**
     *
     * @type {ManufacturingMaterialCategoryEnum}
     * @memberof ManufacturingMaterial
     */
    category?: ManufacturingMaterialCategoryEnum;
    /**
     *
     * @type {string}
     * @memberof ManufacturingMaterial
     */
    colour?: string | null;
    /**
     *
     * @type {Array<AppModelsManufacturingGeometryMaterialCompositionPart>}
     * @memberof ManufacturingMaterial
     */
    composition?: Array<AppModelsManufacturingGeometryMaterialCompositionPart>;
    /**
     *
     * @type {string}
     * @memberof ManufacturingMaterial
     */
    finish?: string | null;
    /**
     *
     * @type {GrammageRequirement}
     * @memberof ManufacturingMaterial
     */
    grammageRequirement?: GrammageRequirement | null;
    /**
     *
     * @type {string}
     * @memberof ManufacturingMaterial
     */
    name?: string | null;
    /**
     *
     * @type {string}
     * @memberof ManufacturingMaterial
     */
    texture?: string | null;
    /**
     *
     * @type {number}
     * @memberof ManufacturingMaterial
     */
    thicknessMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof ManufacturingMaterial
     */
    weightGsm?: number | null;
}
/**
 * @export
 */
export declare const ManufacturingMaterialCategoryEnum: {
    readonly Paper: "paper";
    readonly Board: "board";
    readonly Synthetic: "synthetic";
    readonly Textile: "textile";
    readonly Plastic: "plastic";
    readonly Metal: "metal";
    readonly Ceramic: "ceramic";
    readonly Glass: "glass";
    readonly Wood: "wood";
    readonly Other: "other";
    readonly Unknown: "unknown";
};
export type ManufacturingMaterialCategoryEnum = typeof ManufacturingMaterialCategoryEnum[keyof typeof ManufacturingMaterialCategoryEnum];
/**
 * Check if a given object implements the ManufacturingMaterial interface.
 */
export declare function instanceOfManufacturingMaterial(value: object): value is ManufacturingMaterial;
export declare function ManufacturingMaterialFromJSON(json: any): ManufacturingMaterial;
export declare function ManufacturingMaterialFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingMaterial;
export declare function ManufacturingMaterialToJSON(json: any): ManufacturingMaterial;
export declare function ManufacturingMaterialToJSONTyped(value?: ManufacturingMaterial | null, ignoreDiscriminator?: boolean): any;
