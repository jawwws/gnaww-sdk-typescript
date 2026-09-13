/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { AppModelsProducerMaterialCompositionPart } from './AppModelsProducerMaterialCompositionPart';
/**
 * A canonical material or substrate capability.
 * @export
 * @interface MaterialCapability
 */
export interface MaterialCapability {
    /**
     *
     * @type {MaterialCapabilityCategoryEnum}
     * @memberof MaterialCapability
     */
    category?: MaterialCapabilityCategoryEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof MaterialCapability
     */
    certifications?: Array<string>;
    /**
     *
     * @type {Array<AppModelsProducerMaterialCompositionPart>}
     * @memberof MaterialCapability
     */
    composition?: Array<AppModelsProducerMaterialCompositionPart>;
    /**
     *
     * @type {string}
     * @memberof MaterialCapability
     */
    finish?: string | null;
    /**
     *
     * @type {number}
     * @memberof MaterialCapability
     */
    maximumWeightGsm?: number | null;
    /**
     *
     * @type {number}
     * @memberof MaterialCapability
     */
    minimumWeightGsm?: number | null;
    /**
     *
     * @type {string}
     * @memberof MaterialCapability
     */
    name: string;
    /**
     *
     * @type {Array<number>}
     * @memberof MaterialCapability
     */
    standardWeightsGsm?: Array<number>;
    /**
     *
     * @type {number}
     * @memberof MaterialCapability
     */
    weightGsm?: number | null;
}
/**
 * @export
 */
export declare const MaterialCapabilityCategoryEnum: {
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
export type MaterialCapabilityCategoryEnum = typeof MaterialCapabilityCategoryEnum[keyof typeof MaterialCapabilityCategoryEnum];
/**
 * Check if a given object implements the MaterialCapability interface.
 */
export declare function instanceOfMaterialCapability(value: object): value is MaterialCapability;
export declare function MaterialCapabilityFromJSON(json: any): MaterialCapability;
export declare function MaterialCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaterialCapability;
export declare function MaterialCapabilityToJSON(json: any): MaterialCapability;
export declare function MaterialCapabilityToJSONTyped(value?: MaterialCapability | null, ignoreDiscriminator?: boolean): any;
