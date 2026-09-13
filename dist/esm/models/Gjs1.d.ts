/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { PrintComponent } from './PrintComponent';
import type { ManufacturingOperation } from './ManufacturingOperation';
import type { UseRequirement } from './UseRequirement';
import type { QualityRequirement } from './QualityRequirement';
import type { ServiceRequirements } from './ServiceRequirements';
import type { ManufacturingVariation } from './ManufacturingVariation';
import type { Quantity } from './Quantity';
import type { ManufacturingAssembly } from './ManufacturingAssembly';
import type { ProductOptions } from './ProductOptions';
/**
 *
 * @export
 * @interface Gjs1
 */
export interface Gjs1 {
    /**
     *
     * @type {Array<ManufacturingAssembly>}
     * @memberof Gjs1
     */
    assemblies?: Array<ManufacturingAssembly>;
    /**
     *
     * @type {Array<PrintComponent>}
     * @memberof Gjs1
     */
    components: Array<PrintComponent>;
    /**
     *
     * @type {number}
     * @memberof Gjs1
     */
    confidence?: number;
    /**
     *
     * @type {Array<ManufacturingOperation>}
     * @memberof Gjs1
     */
    operations?: Array<ManufacturingOperation>;
    /**
     *
     * @type {Gjs1ProductCategoryEnum}
     * @memberof Gjs1
     */
    productCategory?: Gjs1ProductCategoryEnum;
    /**
     *
     * @type {Gjs1ProductFamilyEnum}
     * @memberof Gjs1
     */
    productFamily: Gjs1ProductFamilyEnum;
    /**
     *
     * @type {string}
     * @memberof Gjs1
     */
    productName?: string;
    /**
     *
     * @type {Array<QualityRequirement>}
     * @memberof Gjs1
     */
    qualityRequirements?: Array<QualityRequirement>;
    /**
     *
     * @type {Quantity}
     * @memberof Gjs1
     */
    quantity?: Quantity;
    /**
     *
     * @type {Gjs1SchemaNameEnum}
     * @memberof Gjs1
     */
    schemaName?: Gjs1SchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof Gjs1
     */
    schemaVersion?: string;
    /**
     *
     * @type {ServiceRequirements}
     * @memberof Gjs1
     */
    serviceRequirements?: ServiceRequirements;
    /**
     *
     * @type {Gjs1StatusEnum}
     * @memberof Gjs1
     */
    status?: Gjs1StatusEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof Gjs1
     */
    unresolvedFields?: Array<string>;
    /**
     *
     * @type {Array<UseRequirement>}
     * @memberof Gjs1
     */
    useRequirements?: Array<UseRequirement>;
    /**
     *
     * @type {Array<ManufacturingVariation>}
     * @memberof Gjs1
     */
    variations?: Array<ManufacturingVariation>;
    /**
     *
     * @type {ProductOptions}
     * @memberof Gjs1
     */
    options?: ProductOptions;
}
/**
 * @export
 */
export declare const Gjs1ProductCategoryEnum: {
    readonly CommercialPrint: "commercial_print";
    readonly Apparel: "apparel";
    readonly FabricHomewares: "fabric_homewares";
    readonly PromotionalGoods: "promotional_goods";
    readonly Unknown: "unknown";
};
export type Gjs1ProductCategoryEnum = typeof Gjs1ProductCategoryEnum[keyof typeof Gjs1ProductCategoryEnum];
/**
 * @export
 */
export declare const Gjs1ProductFamilyEnum: {
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
export type Gjs1ProductFamilyEnum = typeof Gjs1ProductFamilyEnum[keyof typeof Gjs1ProductFamilyEnum];
/**
 * @export
 */
export declare const Gjs1SchemaNameEnum: {
    readonly JawwwsPrintJobSpecification: "jawwws.print_job_specification";
};
export type Gjs1SchemaNameEnum = typeof Gjs1SchemaNameEnum[keyof typeof Gjs1SchemaNameEnum];
/**
 * @export
 */
export declare const Gjs1StatusEnum: {
    readonly Mapped: "mapped";
    readonly NeedsReview: "needs_review";
    readonly Blocked: "blocked";
    readonly Failed: "failed";
};
export type Gjs1StatusEnum = typeof Gjs1StatusEnum[keyof typeof Gjs1StatusEnum];
/**
 * Check if a given object implements the Gjs1 interface.
 */
export declare function instanceOfGjs1(value: object): value is Gjs1;
export declare function Gjs1FromJSON(json: any): Gjs1;
export declare function Gjs1FromJSONTyped(json: any, ignoreDiscriminator: boolean): Gjs1;
export declare function Gjs1ToJSON(json: any): Gjs1;
export declare function Gjs1ToJSONTyped(value?: Gjs1 | null, ignoreDiscriminator?: boolean): any;
