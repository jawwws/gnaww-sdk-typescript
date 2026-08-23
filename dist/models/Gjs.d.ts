/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { PrintComponent } from './PrintComponent';
import type { UseRequirement } from './UseRequirement';
import type { ServiceRequirements } from './ServiceRequirements';
import type { Quantity } from './Quantity';
import type { ProductOptions } from './ProductOptions';
/**
 *
 * @export
 * @interface Gjs
 */
export interface Gjs {
    /**
     *
     * @type {Array<PrintComponent>}
     * @memberof Gjs
     */
    components?: Array<PrintComponent>;
    /**
     *
     * @type {number}
     * @memberof Gjs
     */
    confidence?: number;
    /**
     *
     * @type {ProductOptions}
     * @memberof Gjs
     */
    options?: ProductOptions;
    /**
     *
     * @type {GjsProductCategoryEnum}
     * @memberof Gjs
     */
    productCategory?: GjsProductCategoryEnum;
    /**
     *
     * @type {GjsProductFamilyEnum}
     * @memberof Gjs
     */
    productFamily: GjsProductFamilyEnum;
    /**
     *
     * @type {string}
     * @memberof Gjs
     */
    productName?: string;
    /**
     *
     * @type {Quantity}
     * @memberof Gjs
     */
    quantity?: Quantity;
    /**
     *
     * @type {GjsSchemaNameEnum}
     * @memberof Gjs
     */
    schemaName?: GjsSchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof Gjs
     */
    schemaVersion?: string;
    /**
     *
     * @type {ServiceRequirements}
     * @memberof Gjs
     */
    serviceRequirements?: ServiceRequirements;
    /**
     *
     * @type {GjsStatusEnum}
     * @memberof Gjs
     */
    status?: GjsStatusEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof Gjs
     */
    unresolvedFields?: Array<string>;
    /**
     *
     * @type {Array<UseRequirement>}
     * @memberof Gjs
     */
    useRequirements?: Array<UseRequirement>;
}
/**
 * @export
 */
export declare const GjsProductCategoryEnum: {
    readonly CommercialPrint: "commercial_print";
    readonly Apparel: "apparel";
    readonly FabricHomewares: "fabric_homewares";
    readonly PromotionalGoods: "promotional_goods";
    readonly Unknown: "unknown";
};
export type GjsProductCategoryEnum = typeof GjsProductCategoryEnum[keyof typeof GjsProductCategoryEnum];
/**
 * @export
 */
export declare const GjsProductFamilyEnum: {
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
export type GjsProductFamilyEnum = typeof GjsProductFamilyEnum[keyof typeof GjsProductFamilyEnum];
/**
 * @export
 */
export declare const GjsSchemaNameEnum: {
    readonly JawwwsPrintJobSpecification: "jawwws.print_job_specification";
};
export type GjsSchemaNameEnum = typeof GjsSchemaNameEnum[keyof typeof GjsSchemaNameEnum];
/**
 * @export
 */
export declare const GjsStatusEnum: {
    readonly Mapped: "mapped";
    readonly NeedsReview: "needs_review";
    readonly Blocked: "blocked";
    readonly Failed: "failed";
};
export type GjsStatusEnum = typeof GjsStatusEnum[keyof typeof GjsStatusEnum];
/**
 * Check if a given object implements the Gjs interface.
 */
export declare function instanceOfGjs(value: object): value is Gjs;
export declare function GjsFromJSON(json: any): Gjs;
export declare function GjsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Gjs;
export declare function GjsToJSON(json: any): Gjs;
export declare function GjsToJSONTyped(value?: Gjs | null, ignoreDiscriminator?: boolean): any;
