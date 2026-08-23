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
import type { PrintComponent } from './PrintComponent';
import type { ServiceRequirements } from './ServiceRequirements';
import type { Quantity } from './Quantity';
import type { ProductOptions } from './ProductOptions';
/**
 * Canonical Jawwws print job specification returned by Gnaww.
 * @export
 * @interface PrintJobSpecification
 */
export interface PrintJobSpecification {
    /**
     *
     * @type {Array<PrintComponent>}
     * @memberof PrintJobSpecification
     */
    components?: Array<PrintComponent>;
    /**
     *
     * @type {number}
     * @memberof PrintJobSpecification
     */
    confidence?: number;
    /**
     *
     * @type {ProductOptions}
     * @memberof PrintJobSpecification
     */
    options?: ProductOptions;
    /**
     *
     * @type {PrintJobSpecificationProductCategoryEnum}
     * @memberof PrintJobSpecification
     */
    productCategory?: PrintJobSpecificationProductCategoryEnum;
    /**
     *
     * @type {PrintJobSpecificationProductFamilyEnum}
     * @memberof PrintJobSpecification
     */
    productFamily: PrintJobSpecificationProductFamilyEnum;
    /**
     *
     * @type {string}
     * @memberof PrintJobSpecification
     */
    productName?: string | null;
    /**
     *
     * @type {Quantity}
     * @memberof PrintJobSpecification
     */
    quantity?: Quantity;
    /**
     *
     * @type {PrintJobSpecificationSchemaNameEnum}
     * @memberof PrintJobSpecification
     */
    schemaName?: PrintJobSpecificationSchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof PrintJobSpecification
     */
    schemaVersion?: string;
    /**
     *
     * @type {ServiceRequirements}
     * @memberof PrintJobSpecification
     */
    serviceRequirements?: ServiceRequirements;
    /**
     *
     * @type {PrintJobSpecificationStatusEnum}
     * @memberof PrintJobSpecification
     */
    status?: PrintJobSpecificationStatusEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof PrintJobSpecification
     */
    unresolvedFields?: Array<string>;
}
/**
 * @export
 */
export declare const PrintJobSpecificationProductCategoryEnum: {
    readonly CommercialPrint: "commercial_print";
    readonly Apparel: "apparel";
    readonly FabricHomewares: "fabric_homewares";
    readonly PromotionalGoods: "promotional_goods";
    readonly Unknown: "unknown";
};
export type PrintJobSpecificationProductCategoryEnum = typeof PrintJobSpecificationProductCategoryEnum[keyof typeof PrintJobSpecificationProductCategoryEnum];
/**
 * @export
 */
export declare const PrintJobSpecificationProductFamilyEnum: {
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
export type PrintJobSpecificationProductFamilyEnum = typeof PrintJobSpecificationProductFamilyEnum[keyof typeof PrintJobSpecificationProductFamilyEnum];
/**
 * @export
 */
export declare const PrintJobSpecificationSchemaNameEnum: {
    readonly JawwwsPrintJobSpecification: "jawwws.print_job_specification";
};
export type PrintJobSpecificationSchemaNameEnum = typeof PrintJobSpecificationSchemaNameEnum[keyof typeof PrintJobSpecificationSchemaNameEnum];
/**
 * @export
 */
export declare const PrintJobSpecificationStatusEnum: {
    readonly Mapped: "mapped";
    readonly NeedsReview: "needs_review";
    readonly Blocked: "blocked";
    readonly Failed: "failed";
};
export type PrintJobSpecificationStatusEnum = typeof PrintJobSpecificationStatusEnum[keyof typeof PrintJobSpecificationStatusEnum];
/**
 * Check if a given object implements the PrintJobSpecification interface.
 */
export declare function instanceOfPrintJobSpecification(value: object): value is PrintJobSpecification;
export declare function PrintJobSpecificationFromJSON(json: any): PrintJobSpecification;
export declare function PrintJobSpecificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrintJobSpecification;
export declare function PrintJobSpecificationToJSON(json: any): PrintJobSpecification;
export declare function PrintJobSpecificationToJSONTyped(value?: PrintJobSpecification | null, ignoreDiscriminator?: boolean): any;
