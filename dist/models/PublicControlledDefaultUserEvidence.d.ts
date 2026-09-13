/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Property-scoped buyer evidence created by controlled-default verification.
 * @export
 * @interface PublicControlledDefaultUserEvidence
 */
export interface PublicControlledDefaultUserEvidence {
    /**
     *
     * @type {PublicControlledDefaultUserEvidenceEvidenceBasisEnum}
     * @memberof PublicControlledDefaultUserEvidence
     */
    evidenceBasis: PublicControlledDefaultUserEvidenceEvidenceBasisEnum;
    /**
     *
     * @type {string}
     * @memberof PublicControlledDefaultUserEvidence
     */
    propertyPath: string;
    /**
     *
     * @type {string}
     * @memberof PublicControlledDefaultUserEvidence
     */
    value: string;
}
/**
 * @export
 */
export declare const PublicControlledDefaultUserEvidenceEvidenceBasisEnum: {
    readonly UserConfirmation: "user_confirmation";
    readonly UserCorrection: "user_correction";
};
export type PublicControlledDefaultUserEvidenceEvidenceBasisEnum = typeof PublicControlledDefaultUserEvidenceEvidenceBasisEnum[keyof typeof PublicControlledDefaultUserEvidenceEvidenceBasisEnum];
/**
 * Check if a given object implements the PublicControlledDefaultUserEvidence interface.
 */
export declare function instanceOfPublicControlledDefaultUserEvidence(value: object): value is PublicControlledDefaultUserEvidence;
export declare function PublicControlledDefaultUserEvidenceFromJSON(json: any): PublicControlledDefaultUserEvidence;
export declare function PublicControlledDefaultUserEvidenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicControlledDefaultUserEvidence;
export declare function PublicControlledDefaultUserEvidenceToJSON(json: any): PublicControlledDefaultUserEvidence;
export declare function PublicControlledDefaultUserEvidenceToJSONTyped(value?: PublicControlledDefaultUserEvidence | null, ignoreDiscriminator?: boolean): any;
