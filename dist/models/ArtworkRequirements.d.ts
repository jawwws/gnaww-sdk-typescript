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
/**
 * Artwork rules that a producer expects for a product.
 * @export
 * @interface ArtworkRequirements
 */
export interface ArtworkRequirements {
    /**
     *
     * @type {Array<ArtworkRequirementsAcceptedFileTypesEnum>}
     * @memberof ArtworkRequirements
     */
    acceptedFileTypes: Array<ArtworkRequirementsAcceptedFileTypesEnum>;
    /**
     *
     * @type {number}
     * @memberof ArtworkRequirements
     */
    bleedMm?: number | null;
    /**
     *
     * @type {string}
     * @memberof ArtworkRequirements
     */
    colourSpace?: string | null;
    /**
     *
     * @type {number}
     * @memberof ArtworkRequirements
     */
    recommendedDpi?: number | null;
    /**
     *
     * @type {number}
     * @memberof ArtworkRequirements
     */
    safeZoneMm?: number | null;
}
/**
 * @export
 */
export declare const ArtworkRequirementsAcceptedFileTypesEnum: {
    readonly Pdf: "pdf";
    readonly Jpg: "jpg";
    readonly Jpeg: "jpeg";
    readonly Png: "png";
};
export type ArtworkRequirementsAcceptedFileTypesEnum = typeof ArtworkRequirementsAcceptedFileTypesEnum[keyof typeof ArtworkRequirementsAcceptedFileTypesEnum];
/**
 * Check if a given object implements the ArtworkRequirements interface.
 */
export declare function instanceOfArtworkRequirements(value: object): value is ArtworkRequirements;
export declare function ArtworkRequirementsFromJSON(json: any): ArtworkRequirements;
export declare function ArtworkRequirementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArtworkRequirements;
export declare function ArtworkRequirementsToJSON(json: any): ArtworkRequirements;
export declare function ArtworkRequirementsToJSONTyped(value?: ArtworkRequirements | null, ignoreDiscriminator?: boolean): any;
