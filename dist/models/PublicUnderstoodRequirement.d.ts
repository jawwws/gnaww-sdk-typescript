/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { PublicUnderstoodPrint } from './PublicUnderstoodPrint';
import type { PublicUnderstoodFinishing } from './PublicUnderstoodFinishing';
import type { PublicControlledProductionDefault } from './PublicControlledProductionDefault';
import type { PublicUnderstoodSubstrate } from './PublicUnderstoodSubstrate';
import type { PublicUnderstoodSize } from './PublicUnderstoodSize';
/**
 * Safe non-canonical evidence projection for review-state interpretation.
 * @export
 * @interface PublicUnderstoodRequirement
 */
export interface PublicUnderstoodRequirement {
    /**
     *
     * @type {PublicUnderstoodRequirementCompletionSupportStateEnum}
     * @memberof PublicUnderstoodRequirement
     */
    completionSupportState?: PublicUnderstoodRequirementCompletionSupportStateEnum | null;
    /**
     *
     * @type {Array<PublicControlledProductionDefault>}
     * @memberof PublicUnderstoodRequirement
     */
    controlledDefaults?: Array<PublicControlledProductionDefault>;
    /**
     *
     * @type {PublicUnderstoodRequirementEvidenceBasisEnum}
     * @memberof PublicUnderstoodRequirement
     */
    evidenceBasis?: PublicUnderstoodRequirementEvidenceBasisEnum;
    /**
     *
     * @type {Array<PublicUnderstoodFinishing>}
     * @memberof PublicUnderstoodRequirement
     */
    finishings?: Array<PublicUnderstoodFinishing>;
    /**
     *
     * @type {PublicUnderstoodPrint}
     * @memberof PublicUnderstoodRequirement
     */
    printSpec?: PublicUnderstoodPrint | null;
    /**
     *
     * @type {PublicUnderstoodRequirementProductFamilyEnum}
     * @memberof PublicUnderstoodRequirement
     */
    productFamily?: PublicUnderstoodRequirementProductFamilyEnum | null;
    /**
     *
     * @type {string}
     * @memberof PublicUnderstoodRequirement
     */
    productName?: string | null;
    /**
     *
     * @type {number}
     * @memberof PublicUnderstoodRequirement
     */
    quantityUnits?: number | null;
    /**
     *
     * @type {PublicUnderstoodRequirementSchemaNameEnum}
     * @memberof PublicUnderstoodRequirement
     */
    schemaName?: PublicUnderstoodRequirementSchemaNameEnum;
    /**
     *
     * @type {PublicUnderstoodRequirementSchemaVersionEnum}
     * @memberof PublicUnderstoodRequirement
     */
    schemaVersion?: PublicUnderstoodRequirementSchemaVersionEnum;
    /**
     *
     * @type {PublicUnderstoodSize}
     * @memberof PublicUnderstoodRequirement
     */
    size?: PublicUnderstoodSize | null;
    /**
     *
     * @type {PublicUnderstoodSubstrate}
     * @memberof PublicUnderstoodRequirement
     */
    substrate?: PublicUnderstoodSubstrate | null;
    /**
     *
     * @type {PublicUnderstoodRequirementTruthStateEnum}
     * @memberof PublicUnderstoodRequirement
     */
    truthState?: PublicUnderstoodRequirementTruthStateEnum;
}
/**
 * @export
 */
export declare const PublicUnderstoodRequirementCompletionSupportStateEnum: {
    readonly FullySupported: "fully_supported";
    readonly SupportedWithClarification: "supported_with_clarification";
    readonly RecognisedNotCanonicalisable: "recognised_not_canonicalisable";
    readonly Unsupported: "unsupported";
};
export type PublicUnderstoodRequirementCompletionSupportStateEnum = typeof PublicUnderstoodRequirementCompletionSupportStateEnum[keyof typeof PublicUnderstoodRequirementCompletionSupportStateEnum];
/**
 * @export
 */
export declare const PublicUnderstoodRequirementEvidenceBasisEnum: {
    readonly GnawwDeterministicInterpretation: "gnaww_deterministic_interpretation";
};
export type PublicUnderstoodRequirementEvidenceBasisEnum = typeof PublicUnderstoodRequirementEvidenceBasisEnum[keyof typeof PublicUnderstoodRequirementEvidenceBasisEnum];
/**
 * @export
 */
export declare const PublicUnderstoodRequirementProductFamilyEnum: {
    readonly Flyer: "flyer";
    readonly Leaflet: "leaflet";
    readonly FoldedLeaflet: "folded_leaflet";
    readonly Apparel: "apparel";
    readonly BusinessCard: "business_card";
    readonly LoyaltyCard: "loyalty_card";
    readonly Postcard: "postcard";
    readonly Poster: "poster";
    readonly Sticker: "sticker";
    readonly Label: "label";
    readonly Booklet: "booklet";
    readonly Book: "book";
    readonly Document: "document";
    readonly Card: "card";
    readonly Certificate: "certificate";
    readonly RaceBib: "race_bib";
    readonly Stationery: "stationery";
    readonly Bookmark: "bookmark";
    readonly PresentationFolder: "presentation_folder";
    readonly TShirt: "t_shirt";
    readonly Hoodie: "hoodie";
    readonly Sweatshirt: "sweatshirt";
    readonly PoloShirt: "polo_shirt";
    readonly Jacket: "jacket";
    readonly Cap: "cap";
    readonly Beanie: "beanie";
    readonly Workwear: "workwear";
    readonly TextileAccessory: "textile_accessory";
    readonly Cushion: "cushion";
    readonly CushionCover: "cushion_cover";
    readonly Bedding: "bedding";
    readonly Curtain: "curtain";
    readonly TeaTowel: "tea_towel";
    readonly Blanket: "blanket";
    readonly FabricByMetre: "fabric_by_metre";
    readonly Tablecloth: "tablecloth";
    readonly Homeware: "homeware";
    readonly Pen: "pen";
    readonly Mug: "mug";
    readonly WaterBottle: "water_bottle";
    readonly GolfBall: "golf_ball";
    readonly Umbrella: "umbrella";
    readonly Bag: "bag";
    readonly Notebook: "notebook";
    readonly Lanyard: "lanyard";
    readonly Keyring: "keyring";
    readonly PromotionalProduct: "promotional_product";
    readonly Unknown: "unknown";
};
export type PublicUnderstoodRequirementProductFamilyEnum = typeof PublicUnderstoodRequirementProductFamilyEnum[keyof typeof PublicUnderstoodRequirementProductFamilyEnum];
/**
 * @export
 */
export declare const PublicUnderstoodRequirementSchemaNameEnum: {
    readonly GnawwUnderstoodRequirement: "gnaww.understood_requirement";
};
export type PublicUnderstoodRequirementSchemaNameEnum = typeof PublicUnderstoodRequirementSchemaNameEnum[keyof typeof PublicUnderstoodRequirementSchemaNameEnum];
/**
 * @export
 */
export declare const PublicUnderstoodRequirementSchemaVersionEnum: {
    readonly _01: "0.1";
};
export type PublicUnderstoodRequirementSchemaVersionEnum = typeof PublicUnderstoodRequirementSchemaVersionEnum[keyof typeof PublicUnderstoodRequirementSchemaVersionEnum];
/**
 * @export
 */
export declare const PublicUnderstoodRequirementTruthStateEnum: {
    readonly UnderstoodNotCanonical: "understood_not_canonical";
};
export type PublicUnderstoodRequirementTruthStateEnum = typeof PublicUnderstoodRequirementTruthStateEnum[keyof typeof PublicUnderstoodRequirementTruthStateEnum];
/**
 * Check if a given object implements the PublicUnderstoodRequirement interface.
 */
export declare function instanceOfPublicUnderstoodRequirement(value: object): value is PublicUnderstoodRequirement;
export declare function PublicUnderstoodRequirementFromJSON(json: any): PublicUnderstoodRequirement;
export declare function PublicUnderstoodRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicUnderstoodRequirement;
export declare function PublicUnderstoodRequirementToJSON(json: any): PublicUnderstoodRequirement;
export declare function PublicUnderstoodRequirementToJSONTyped(value?: PublicUnderstoodRequirement | null, ignoreDiscriminator?: boolean): any;
