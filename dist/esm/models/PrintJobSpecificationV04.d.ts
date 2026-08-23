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
import type { UseRequirement } from './UseRequirement';
import type { ServiceRequirements } from './ServiceRequirements';
import type { Quantity } from './Quantity';
import type { ProductOptions } from './ProductOptions';
/**
 * Version 0.4 GJS with confirmed production-relevant use requirements.
 * @export
 * @interface PrintJobSpecificationV04
 */
export interface PrintJobSpecificationV04 {
    /**
     *
     * @type {Array<PrintComponent>}
     * @memberof PrintJobSpecificationV04
     */
    components?: Array<PrintComponent>;
    /**
     *
     * @type {number}
     * @memberof PrintJobSpecificationV04
     */
    confidence?: number;
    /**
     *
     * @type {ProductOptions}
     * @memberof PrintJobSpecificationV04
     */
    options?: ProductOptions;
    /**
     *
     * @type {PrintJobSpecificationV04ProductCategoryEnum}
     * @memberof PrintJobSpecificationV04
     */
    productCategory?: PrintJobSpecificationV04ProductCategoryEnum;
    /**
     *
     * @type {PrintJobSpecificationV04ProductFamilyEnum}
     * @memberof PrintJobSpecificationV04
     */
    productFamily: PrintJobSpecificationV04ProductFamilyEnum;
    /**
     *
     * @type {string}
     * @memberof PrintJobSpecificationV04
     */
    productName?: string | null;
    /**
     *
     * @type {Quantity}
     * @memberof PrintJobSpecificationV04
     */
    quantity?: Quantity;
    /**
     *
     * @type {PrintJobSpecificationV04SchemaNameEnum}
     * @memberof PrintJobSpecificationV04
     */
    schemaName?: PrintJobSpecificationV04SchemaNameEnum;
    /**
     *
     * @type {PrintJobSpecificationV04SchemaVersionEnum}
     * @memberof PrintJobSpecificationV04
     */
    schemaVersion?: PrintJobSpecificationV04SchemaVersionEnum;
    /**
     *
     * @type {ServiceRequirements}
     * @memberof PrintJobSpecificationV04
     */
    serviceRequirements?: ServiceRequirements;
    /**
     *
     * @type {PrintJobSpecificationV04StatusEnum}
     * @memberof PrintJobSpecificationV04
     */
    status?: PrintJobSpecificationV04StatusEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof PrintJobSpecificationV04
     */
    unresolvedFields?: Array<string>;
    /**
     *
     * @type {Array<UseRequirement>}
     * @memberof PrintJobSpecificationV04
     */
    useRequirements?: Array<UseRequirement>;
}
/**
 * @export
 */
export declare const PrintJobSpecificationV04ProductCategoryEnum: {
    readonly CommercialPrint: "commercial_print";
    readonly Apparel: "apparel";
    readonly FabricHomewares: "fabric_homewares";
    readonly PromotionalGoods: "promotional_goods";
    readonly Unknown: "unknown";
};
export type PrintJobSpecificationV04ProductCategoryEnum = typeof PrintJobSpecificationV04ProductCategoryEnum[keyof typeof PrintJobSpecificationV04ProductCategoryEnum];
/**
 * @export
 */
export declare const PrintJobSpecificationV04ProductFamilyEnum: {
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
export type PrintJobSpecificationV04ProductFamilyEnum = typeof PrintJobSpecificationV04ProductFamilyEnum[keyof typeof PrintJobSpecificationV04ProductFamilyEnum];
/**
 * @export
 */
export declare const PrintJobSpecificationV04SchemaNameEnum: {
    readonly JawwwsPrintJobSpecification: "jawwws.print_job_specification";
};
export type PrintJobSpecificationV04SchemaNameEnum = typeof PrintJobSpecificationV04SchemaNameEnum[keyof typeof PrintJobSpecificationV04SchemaNameEnum];
/**
 * @export
 */
export declare const PrintJobSpecificationV04SchemaVersionEnum: {
    readonly _04: "0.4";
};
export type PrintJobSpecificationV04SchemaVersionEnum = typeof PrintJobSpecificationV04SchemaVersionEnum[keyof typeof PrintJobSpecificationV04SchemaVersionEnum];
/**
 * @export
 */
export declare const PrintJobSpecificationV04StatusEnum: {
    readonly Mapped: "mapped";
    readonly NeedsReview: "needs_review";
    readonly Blocked: "blocked";
    readonly Failed: "failed";
};
export type PrintJobSpecificationV04StatusEnum = typeof PrintJobSpecificationV04StatusEnum[keyof typeof PrintJobSpecificationV04StatusEnum];
/**
 * Check if a given object implements the PrintJobSpecificationV04 interface.
 */
export declare function instanceOfPrintJobSpecificationV04(value: object): value is PrintJobSpecificationV04;
export declare function PrintJobSpecificationV04FromJSON(json: any): PrintJobSpecificationV04;
export declare function PrintJobSpecificationV04FromJSONTyped(json: any, ignoreDiscriminator: boolean): PrintJobSpecificationV04;
export declare function PrintJobSpecificationV04ToJSON(json: any): PrintJobSpecificationV04;
export declare function PrintJobSpecificationV04ToJSONTyped(value?: PrintJobSpecificationV04 | null, ignoreDiscriminator?: boolean): any;
