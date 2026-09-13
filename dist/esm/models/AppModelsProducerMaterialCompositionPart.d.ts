/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * One named material inside a material composition.
 * @export
 * @interface AppModelsProducerMaterialCompositionPart
 */
export interface AppModelsProducerMaterialCompositionPart {
    /**
     *
     * @type {string}
     * @memberof AppModelsProducerMaterialCompositionPart
     */
    material: string;
    /**
     *
     * @type {number}
     * @memberof AppModelsProducerMaterialCompositionPart
     */
    percentage?: number | null;
}
/**
 * Check if a given object implements the AppModelsProducerMaterialCompositionPart interface.
 */
export declare function instanceOfAppModelsProducerMaterialCompositionPart(value: object): value is AppModelsProducerMaterialCompositionPart;
export declare function AppModelsProducerMaterialCompositionPartFromJSON(json: any): AppModelsProducerMaterialCompositionPart;
export declare function AppModelsProducerMaterialCompositionPartFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppModelsProducerMaterialCompositionPart;
export declare function AppModelsProducerMaterialCompositionPartToJSON(json: any): AppModelsProducerMaterialCompositionPart;
export declare function AppModelsProducerMaterialCompositionPartToJSONTyped(value?: AppModelsProducerMaterialCompositionPart | null, ignoreDiscriminator?: boolean): any;
