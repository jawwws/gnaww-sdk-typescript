/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * One controlled constituent of a manufactured material.
 * @export
 * @interface AppModelsManufacturingGeometryMaterialCompositionPart
 */
export interface AppModelsManufacturingGeometryMaterialCompositionPart {
    /**
     *
     * @type {string}
     * @memberof AppModelsManufacturingGeometryMaterialCompositionPart
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof AppModelsManufacturingGeometryMaterialCompositionPart
     */
    percentage?: number | null;
}
/**
 * Check if a given object implements the AppModelsManufacturingGeometryMaterialCompositionPart interface.
 */
export declare function instanceOfAppModelsManufacturingGeometryMaterialCompositionPart(value: object): value is AppModelsManufacturingGeometryMaterialCompositionPart;
export declare function AppModelsManufacturingGeometryMaterialCompositionPartFromJSON(json: any): AppModelsManufacturingGeometryMaterialCompositionPart;
export declare function AppModelsManufacturingGeometryMaterialCompositionPartFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppModelsManufacturingGeometryMaterialCompositionPart;
export declare function AppModelsManufacturingGeometryMaterialCompositionPartToJSON(json: any): AppModelsManufacturingGeometryMaterialCompositionPart;
export declare function AppModelsManufacturingGeometryMaterialCompositionPartToJSONTyped(value?: AppModelsManufacturingGeometryMaterialCompositionPart | null, ignoreDiscriminator?: boolean): any;
