/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { ManufacturingComponent } from './ManufacturingComponent';
import type { ManufacturingQuantity } from './ManufacturingQuantity';
import type { ManufacturingOperation } from './ManufacturingOperation';
import type { UseRequirement } from './UseRequirement';
import type { QualityRequirement } from './QualityRequirement';
import type { ServiceRequirements } from './ServiceRequirements';
import type { ManufacturingVariation } from './ManufacturingVariation';
import type { ManufacturingAssembly } from './ManufacturingAssembly';
/**
 * GJS v0.5 compositional manufacturing definition foundation.
 * @export
 * @interface PrintJobSpecificationV05
 */
export interface PrintJobSpecificationV05 {
    /**
     *
     * @type {Array<ManufacturingAssembly>}
     * @memberof PrintJobSpecificationV05
     */
    assemblies?: Array<ManufacturingAssembly>;
    /**
     *
     * @type {Array<ManufacturingComponent>}
     * @memberof PrintJobSpecificationV05
     */
    components: Array<ManufacturingComponent>;
    /**
     *
     * @type {number}
     * @memberof PrintJobSpecificationV05
     */
    confidence?: number;
    /**
     *
     * @type {Array<ManufacturingOperation>}
     * @memberof PrintJobSpecificationV05
     */
    operations?: Array<ManufacturingOperation>;
    /**
     *
     * @type {PrintJobSpecificationV05ProductCategoryEnum}
     * @memberof PrintJobSpecificationV05
     */
    productCategory?: PrintJobSpecificationV05ProductCategoryEnum;
    /**
     *
     * @type {PrintJobSpecificationV05ProductFamilyEnum}
     * @memberof PrintJobSpecificationV05
     */
    productFamily: PrintJobSpecificationV05ProductFamilyEnum;
    /**
     *
     * @type {string}
     * @memberof PrintJobSpecificationV05
     */
    productName?: string | null;
    /**
     *
     * @type {Array<QualityRequirement>}
     * @memberof PrintJobSpecificationV05
     */
    qualityRequirements?: Array<QualityRequirement>;
    /**
     *
     * @type {ManufacturingQuantity}
     * @memberof PrintJobSpecificationV05
     */
    quantity?: ManufacturingQuantity;
    /**
     *
     * @type {PrintJobSpecificationV05SchemaNameEnum}
     * @memberof PrintJobSpecificationV05
     */
    schemaName?: PrintJobSpecificationV05SchemaNameEnum;
    /**
     *
     * @type {PrintJobSpecificationV05SchemaVersionEnum}
     * @memberof PrintJobSpecificationV05
     */
    schemaVersion?: PrintJobSpecificationV05SchemaVersionEnum;
    /**
     *
     * @type {ServiceRequirements}
     * @memberof PrintJobSpecificationV05
     */
    serviceRequirements?: ServiceRequirements;
    /**
     *
     * @type {PrintJobSpecificationV05StatusEnum}
     * @memberof PrintJobSpecificationV05
     */
    status?: PrintJobSpecificationV05StatusEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof PrintJobSpecificationV05
     */
    unresolvedFields?: Array<string>;
    /**
     *
     * @type {Array<UseRequirement>}
     * @memberof PrintJobSpecificationV05
     */
    useRequirements?: Array<UseRequirement>;
    /**
     *
     * @type {Array<ManufacturingVariation>}
     * @memberof PrintJobSpecificationV05
     */
    variations?: Array<ManufacturingVariation>;
}
/**
 * @export
 */
export declare const PrintJobSpecificationV05ProductCategoryEnum: {
    readonly CommercialPrint: "commercial_print";
    readonly Apparel: "apparel";
    readonly FabricHomewares: "fabric_homewares";
    readonly PromotionalGoods: "promotional_goods";
    readonly Unknown: "unknown";
};
export type PrintJobSpecificationV05ProductCategoryEnum = typeof PrintJobSpecificationV05ProductCategoryEnum[keyof typeof PrintJobSpecificationV05ProductCategoryEnum];
/**
 * @export
 */
export declare const PrintJobSpecificationV05ProductFamilyEnum: {
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
export type PrintJobSpecificationV05ProductFamilyEnum = typeof PrintJobSpecificationV05ProductFamilyEnum[keyof typeof PrintJobSpecificationV05ProductFamilyEnum];
/**
 * @export
 */
export declare const PrintJobSpecificationV05SchemaNameEnum: {
    readonly JawwwsPrintJobSpecification: "jawwws.print_job_specification";
};
export type PrintJobSpecificationV05SchemaNameEnum = typeof PrintJobSpecificationV05SchemaNameEnum[keyof typeof PrintJobSpecificationV05SchemaNameEnum];
/**
 * @export
 */
export declare const PrintJobSpecificationV05SchemaVersionEnum: {
    readonly _05: "0.5";
};
export type PrintJobSpecificationV05SchemaVersionEnum = typeof PrintJobSpecificationV05SchemaVersionEnum[keyof typeof PrintJobSpecificationV05SchemaVersionEnum];
/**
 * @export
 */
export declare const PrintJobSpecificationV05StatusEnum: {
    readonly Mapped: "mapped";
    readonly NeedsReview: "needs_review";
    readonly Blocked: "blocked";
    readonly Failed: "failed";
};
export type PrintJobSpecificationV05StatusEnum = typeof PrintJobSpecificationV05StatusEnum[keyof typeof PrintJobSpecificationV05StatusEnum];
/**
 * Check if a given object implements the PrintJobSpecificationV05 interface.
 */
export declare function instanceOfPrintJobSpecificationV05(value: object): value is PrintJobSpecificationV05;
export declare function PrintJobSpecificationV05FromJSON(json: any): PrintJobSpecificationV05;
export declare function PrintJobSpecificationV05FromJSONTyped(json: any, ignoreDiscriminator: boolean): PrintJobSpecificationV05;
export declare function PrintJobSpecificationV05ToJSON(json: any): PrintJobSpecificationV05;
export declare function PrintJobSpecificationV05ToJSONTyped(value?: PrintJobSpecificationV05 | null, ignoreDiscriminator?: boolean): any;
