/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
import type { DimensionCapability } from './DimensionCapability';
import type { MaterialCapability } from './MaterialCapability';
/**
 * Optional component-level capability for multi-component products.
 * @export
 * @interface ProducerComponentCapability
 */
export interface ProducerComponentCapability {
    /**
     *
     * @type {ProducerComponentCapabilityRoleEnum}
     * @memberof ProducerComponentCapability
     */
    role: ProducerComponentCapabilityRoleEnum;
    /**
     *
     * @type {Array<ProducerComponentCapabilitySidesEnum>}
     * @memberof ProducerComponentCapability
     */
    sides?: Array<ProducerComponentCapabilitySidesEnum>;
    /**
     *
     * @type {Array<DimensionCapability>}
     * @memberof ProducerComponentCapability
     */
    sizes?: Array<DimensionCapability>;
    /**
     *
     * @type {Array<MaterialCapability>}
     * @memberof ProducerComponentCapability
     */
    substrates?: Array<MaterialCapability>;
}
/**
 * @export
 */
export declare const ProducerComponentCapabilityRoleEnum: {
    readonly Main: "main";
    readonly Flat: "flat";
    readonly Finished: "finished";
    readonly Cover: "cover";
    readonly Text: "text";
    readonly Insert: "insert";
    readonly Garment: "garment";
    readonly Decoration: "decoration";
    readonly Unknown: "unknown";
};
export type ProducerComponentCapabilityRoleEnum = typeof ProducerComponentCapabilityRoleEnum[keyof typeof ProducerComponentCapabilityRoleEnum];
/**
 * @export
 */
export declare const ProducerComponentCapabilitySidesEnum: {
    readonly SingleSided: "single_sided";
    readonly DoubleSided: "double_sided";
    readonly Unknown: "unknown";
};
export type ProducerComponentCapabilitySidesEnum = typeof ProducerComponentCapabilitySidesEnum[keyof typeof ProducerComponentCapabilitySidesEnum];
/**
 * Check if a given object implements the ProducerComponentCapability interface.
 */
export declare function instanceOfProducerComponentCapability(value: object): value is ProducerComponentCapability;
export declare function ProducerComponentCapabilityFromJSON(json: any): ProducerComponentCapability;
export declare function ProducerComponentCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerComponentCapability;
export declare function ProducerComponentCapabilityToJSON(json: any): ProducerComponentCapability;
export declare function ProducerComponentCapabilityToJSONTyped(value?: ProducerComponentCapability | null, ignoreDiscriminator?: boolean): any;
