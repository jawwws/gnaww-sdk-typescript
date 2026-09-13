/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * A semantic Variant, Component or Operation kept within one Job.
 * @export
 * @interface PublicJobStructure
 */
export interface PublicJobStructure {
    /**
     *
     * @type {PublicJobStructureKindEnum}
     * @memberof PublicJobStructure
     */
    kind: PublicJobStructureKindEnum;
    /**
     *
     * @type {string}
     * @memberof PublicJobStructure
     */
    label: string;
    /**
     *
     * @type {PublicJobStructureProvenanceEnum}
     * @memberof PublicJobStructure
     */
    provenance?: PublicJobStructureProvenanceEnum;
    /**
     *
     * @type {string}
     * @memberof PublicJobStructure
     */
    sourceExpression?: string | null;
    /**
     *
     * @type {string}
     * @memberof PublicJobStructure
     */
    structureId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof PublicJobStructure
     */
    values?: Array<string>;
}
/**
 * @export
 */
export declare const PublicJobStructureKindEnum: {
    readonly Variant: "variant";
    readonly Component: "component";
    readonly Operation: "operation";
};
export type PublicJobStructureKindEnum = typeof PublicJobStructureKindEnum[keyof typeof PublicJobStructureKindEnum];
/**
 * @export
 */
export declare const PublicJobStructureProvenanceEnum: {
    readonly Supplied: "supplied";
    readonly Derived: "derived";
    readonly Confirmed: "confirmed";
    readonly Controlled: "controlled";
};
export type PublicJobStructureProvenanceEnum = typeof PublicJobStructureProvenanceEnum[keyof typeof PublicJobStructureProvenanceEnum];
/**
 * Check if a given object implements the PublicJobStructure interface.
 */
export declare function instanceOfPublicJobStructure(value: object): value is PublicJobStructure;
export declare function PublicJobStructureFromJSON(json: any): PublicJobStructure;
export declare function PublicJobStructureFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicJobStructure;
export declare function PublicJobStructureToJSON(json: any): PublicJobStructure;
export declare function PublicJobStructureToJSONTyped(value?: PublicJobStructure | null, ignoreDiscriminator?: boolean): any;
