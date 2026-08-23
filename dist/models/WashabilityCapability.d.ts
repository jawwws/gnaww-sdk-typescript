/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Supported fabric wash-care methods and limits.
 * @export
 * @interface WashabilityCapability
 */
export interface WashabilityCapability {
    /**
     *
     * @type {number}
     * @memberof WashabilityCapability
     */
    maximumTemperatureC?: number | null;
    /**
     *
     * @type {Array<WashabilityCapabilityMethodsEnum>}
     * @memberof WashabilityCapability
     */
    methods?: Array<WashabilityCapabilityMethodsEnum>;
    /**
     *
     * @type {boolean}
     * @memberof WashabilityCapability
     */
    tumbleDrySupported?: boolean | null;
}
/**
 * @export
 */
export declare const WashabilityCapabilityMethodsEnum: {
    readonly MachineWash: "machine_wash";
    readonly HandWash: "hand_wash";
    readonly DryClean: "dry_clean";
    readonly NotWashable: "not_washable";
    readonly Unknown: "unknown";
};
export type WashabilityCapabilityMethodsEnum = typeof WashabilityCapabilityMethodsEnum[keyof typeof WashabilityCapabilityMethodsEnum];
/**
 * Check if a given object implements the WashabilityCapability interface.
 */
export declare function instanceOfWashabilityCapability(value: object): value is WashabilityCapability;
export declare function WashabilityCapabilityFromJSON(json: any): WashabilityCapability;
export declare function WashabilityCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): WashabilityCapability;
export declare function WashabilityCapabilityToJSON(json: any): WashabilityCapability;
export declare function WashabilityCapabilityToJSONTyped(value?: WashabilityCapability | null, ignoreDiscriminator?: boolean): any;
