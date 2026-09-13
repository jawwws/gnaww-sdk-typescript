/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Safe caller-owned reference used to reconcile a specification externally.
 * @export
 * @interface SpecificationExternalReference
 */
export interface SpecificationExternalReference {
    /**
     *
     * @type {string}
     * @memberof SpecificationExternalReference
     */
    reference: string;
    /**
     *
     * @type {string}
     * @memberof SpecificationExternalReference
     */
    system: string;
}
/**
 * Check if a given object implements the SpecificationExternalReference interface.
 */
export declare function instanceOfSpecificationExternalReference(value: object): value is SpecificationExternalReference;
export declare function SpecificationExternalReferenceFromJSON(json: any): SpecificationExternalReference;
export declare function SpecificationExternalReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpecificationExternalReference;
export declare function SpecificationExternalReferenceToJSON(json: any): SpecificationExternalReference;
export declare function SpecificationExternalReferenceToJSONTyped(value?: SpecificationExternalReference | null, ignoreDiscriminator?: boolean): any;
