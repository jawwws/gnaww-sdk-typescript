/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Provenance and freshness for operational capability data.
 * @export
 * @interface CapabilityEvidence
 */
export interface CapabilityEvidence {
    /**
     *
     * @type {Date}
     * @memberof CapabilityEvidence
     */
    expiresAt?: Date | null;
    /**
     *
     * @type {Date}
     * @memberof CapabilityEvidence
     */
    observedAt?: Date | null;
    /**
     *
     * @type {CapabilityEvidenceSourceEnum}
     * @memberof CapabilityEvidence
     */
    source?: CapabilityEvidenceSourceEnum;
    /**
     *
     * @type {CapabilityEvidenceStatusEnum}
     * @memberof CapabilityEvidence
     */
    status?: CapabilityEvidenceStatusEnum;
}
/**
 * @export
 */
export declare const CapabilityEvidenceSourceEnum: {
    readonly Fixture: "fixture";
    readonly Imported: "imported";
    readonly ProducerDeclared: "producer_declared";
    readonly Live: "live";
    readonly Unknown: "unknown";
};
export type CapabilityEvidenceSourceEnum = typeof CapabilityEvidenceSourceEnum[keyof typeof CapabilityEvidenceSourceEnum];
/**
 * @export
 */
export declare const CapabilityEvidenceStatusEnum: {
    readonly Synthetic: "synthetic";
    readonly Unverified: "unverified";
    readonly Verified: "verified";
    readonly Live: "live";
    readonly Unknown: "unknown";
};
export type CapabilityEvidenceStatusEnum = typeof CapabilityEvidenceStatusEnum[keyof typeof CapabilityEvidenceStatusEnum];
/**
 * Check if a given object implements the CapabilityEvidence interface.
 */
export declare function instanceOfCapabilityEvidence(value: object): value is CapabilityEvidence;
export declare function CapabilityEvidenceFromJSON(json: any): CapabilityEvidence;
export declare function CapabilityEvidenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CapabilityEvidence;
export declare function CapabilityEvidenceToJSON(json: any): CapabilityEvidence;
export declare function CapabilityEvidenceToJSONTyped(value?: CapabilityEvidence | null, ignoreDiscriminator?: boolean): any;
