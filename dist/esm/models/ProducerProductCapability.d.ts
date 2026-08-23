/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { ProducerFinishingCapability } from './ProducerFinishingCapability';
import type { ProducerComponentCapability } from './ProducerComponentCapability';
import type { DimensionCapability } from './DimensionCapability';
import type { TurnaroundCapability } from './TurnaroundCapability';
import type { AvailabilityCapability } from './AvailabilityCapability';
import type { QuantityRange } from './QuantityRange';
import type { ProducerProcessCapability } from './ProducerProcessCapability';
import type { ArtworkRequirements } from './ArtworkRequirements';
import type { MaterialCapability } from './MaterialCapability';
import type { ProducerProductOptionCapability } from './ProducerProductOptionCapability';
/**
 * A single producer product and its supported options.
 * @export
 * @interface ProducerProductCapability
 */
export interface ProducerProductCapability {
    /**
     *
     * @type {ArtworkRequirements}
     * @memberof ProducerProductCapability
     */
    artwork: ArtworkRequirements;
    /**
     *
     * @type {AvailabilityCapability}
     * @memberof ProducerProductCapability
     */
    availability?: AvailabilityCapability;
    /**
     *
     * @type {Array<ProducerComponentCapability>}
     * @memberof ProducerProductCapability
     */
    components?: Array<ProducerComponentCapability>;
    /**
     *
     * @type {Array<ProducerFinishingCapability>}
     * @memberof ProducerProductCapability
     */
    finishings?: Array<ProducerFinishingCapability>;
    /**
     *
     * @type {Array<ProducerProcessCapability>}
     * @memberof ProducerProductCapability
     */
    processes?: Array<ProducerProcessCapability>;
    /**
     *
     * @type {ProducerProductCapabilityProductCategoryEnum}
     * @memberof ProducerProductCapability
     */
    productCategory?: ProducerProductCapabilityProductCategoryEnum;
    /**
     *
     * @type {ProducerProductCapabilityProductFamilyEnum}
     * @memberof ProducerProductCapability
     */
    productFamily: ProducerProductCapabilityProductFamilyEnum;
    /**
     *
     * @type {string}
     * @memberof ProducerProductCapability
     */
    productId: string;
    /**
     *
     * @type {string}
     * @memberof ProducerProductCapability
     */
    productName: string;
    /**
     *
     * @type {ProducerProductOptionCapability}
     * @memberof ProducerProductCapability
     */
    productOptions?: ProducerProductOptionCapability;
    /**
     *
     * @type {QuantityRange}
     * @memberof ProducerProductCapability
     */
    quantity: QuantityRange;
    /**
     *
     * @type {Array<ProducerProductCapabilitySidesEnum>}
     * @memberof ProducerProductCapability
     */
    sides?: Array<ProducerProductCapabilitySidesEnum>;
    /**
     *
     * @type {Array<DimensionCapability>}
     * @memberof ProducerProductCapability
     */
    sizes?: Array<DimensionCapability>;
    /**
     *
     * @type {Array<MaterialCapability>}
     * @memberof ProducerProductCapability
     */
    substrates?: Array<MaterialCapability>;
    /**
     *
     * @type {TurnaroundCapability}
     * @memberof ProducerProductCapability
     */
    turnaround?: TurnaroundCapability;
}
/**
 * @export
 */
export declare const ProducerProductCapabilityProductCategoryEnum: {
    readonly CommercialPrint: "commercial_print";
    readonly Apparel: "apparel";
    readonly FabricHomewares: "fabric_homewares";
    readonly PromotionalGoods: "promotional_goods";
    readonly Unknown: "unknown";
};
export type ProducerProductCapabilityProductCategoryEnum = typeof ProducerProductCapabilityProductCategoryEnum[keyof typeof ProducerProductCapabilityProductCategoryEnum];
/**
 * @export
 */
export declare const ProducerProductCapabilityProductFamilyEnum: {
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
export type ProducerProductCapabilityProductFamilyEnum = typeof ProducerProductCapabilityProductFamilyEnum[keyof typeof ProducerProductCapabilityProductFamilyEnum];
/**
 * @export
 */
export declare const ProducerProductCapabilitySidesEnum: {
    readonly SingleSided: "single_sided";
    readonly DoubleSided: "double_sided";
    readonly Unknown: "unknown";
};
export type ProducerProductCapabilitySidesEnum = typeof ProducerProductCapabilitySidesEnum[keyof typeof ProducerProductCapabilitySidesEnum];
/**
 * Check if a given object implements the ProducerProductCapability interface.
 */
export declare function instanceOfProducerProductCapability(value: object): value is ProducerProductCapability;
export declare function ProducerProductCapabilityFromJSON(json: any): ProducerProductCapability;
export declare function ProducerProductCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerProductCapability;
export declare function ProducerProductCapabilityToJSON(json: any): ProducerProductCapability;
export declare function ProducerProductCapabilityToJSONTyped(value?: ProducerProductCapability | null, ignoreDiscriminator?: boolean): any;
