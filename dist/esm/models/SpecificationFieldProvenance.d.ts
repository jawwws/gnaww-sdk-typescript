/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Safe provenance for one canonical demand field.
 * @export
 * @interface SpecificationFieldProvenance
 */
export interface SpecificationFieldProvenance {
    /**
     *
     * @type {string}
     * @memberof SpecificationFieldProvenance
     */
    path: string;
    /**
     *
     * @type {SpecificationFieldProvenanceProvenanceEnum}
     * @memberof SpecificationFieldProvenance
     */
    provenance: SpecificationFieldProvenanceProvenanceEnum;
    /**
     *
     * @type {string}
     * @memberof SpecificationFieldProvenance
     */
    sourceReference?: string | null;
}
/**
 * @export
 */
export declare const SpecificationFieldProvenanceProvenanceEnum: {
    readonly Supplied: "supplied";
    readonly ConfirmedReview: "confirmed_review";
    readonly UserInput: "user_input";
    readonly UserOverride: "user_override";
    readonly CatalogueGuidance: "catalogue_guidance";
    readonly DeterministicTaxonomy: "deterministic_taxonomy";
};
export type SpecificationFieldProvenanceProvenanceEnum = typeof SpecificationFieldProvenanceProvenanceEnum[keyof typeof SpecificationFieldProvenanceProvenanceEnum];
/**
 * Check if a given object implements the SpecificationFieldProvenance interface.
 */
export declare function instanceOfSpecificationFieldProvenance(value: object): value is SpecificationFieldProvenance;
export declare function SpecificationFieldProvenanceFromJSON(json: any): SpecificationFieldProvenance;
export declare function SpecificationFieldProvenanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpecificationFieldProvenance;
export declare function SpecificationFieldProvenanceToJSON(json: any): SpecificationFieldProvenance;
export declare function SpecificationFieldProvenanceToJSONTyped(value?: SpecificationFieldProvenance | null, ignoreDiscriminator?: boolean): any;
