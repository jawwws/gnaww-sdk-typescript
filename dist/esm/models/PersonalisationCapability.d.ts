/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Supported per-item or variable-data personalisation.
 * @export
 * @interface PersonalisationCapability
 */
export interface PersonalisationCapability {
    /**
     *
     * @type {number}
     * @memberof PersonalisationCapability
     */
    maximumVariants?: number | null;
    /**
     *
     * @type {boolean}
     * @memberof PersonalisationCapability
     */
    perItemArtwork?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PersonalisationCapability
     */
    sequentialNumbering?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PersonalisationCapability
     */
    supported?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PersonalisationCapability
     */
    variableImages?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PersonalisationCapability
     */
    variableText?: boolean;
}
/**
 * Check if a given object implements the PersonalisationCapability interface.
 */
export declare function instanceOfPersonalisationCapability(value: object): value is PersonalisationCapability;
export declare function PersonalisationCapabilityFromJSON(json: any): PersonalisationCapability;
export declare function PersonalisationCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonalisationCapability;
export declare function PersonalisationCapabilityToJSON(json: any): PersonalisationCapability;
export declare function PersonalisationCapabilityToJSONTyped(value?: PersonalisationCapability | null, ignoreDiscriminator?: boolean): any;
