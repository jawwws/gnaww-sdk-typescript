/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { DecorationAreaCapability } from './DecorationAreaCapability';
import type { PersonalisationCapability } from './PersonalisationCapability';
import type { DimensionCapability } from './DimensionCapability';
import type { MaterialCapability } from './MaterialCapability';
/**
 * Canonical promotional-goods product and decoration capabilities.
 * @export
 * @interface PromotionalGoodsCapabilityOptions
 */
export interface PromotionalGoodsCapabilityOptions {
    /**
     *
     * @type {Array<number>}
     * @memberof PromotionalGoodsCapabilityOptions
     */
    capacitiesMl?: Array<number>;
    /**
     *
     * @type {Array<string>}
     * @memberof PromotionalGoodsCapabilityOptions
     */
    complianceClaims?: Array<string>;
    /**
     *
     * @type {Array<DecorationAreaCapability>}
     * @memberof PromotionalGoodsCapabilityOptions
     */
    decorationAreas?: Array<DecorationAreaCapability>;
    /**
     *
     * @type {Array<DimensionCapability>}
     * @memberof PromotionalGoodsCapabilityOptions
     */
    dimensions?: Array<DimensionCapability>;
    /**
     *
     * @type {Array<MaterialCapability>}
     * @memberof PromotionalGoodsCapabilityOptions
     */
    materials?: Array<MaterialCapability>;
    /**
     *
     * @type {Array<PromotionalGoodsCapabilityOptionsPackagingTypesEnum>}
     * @memberof PromotionalGoodsCapabilityOptions
     */
    packagingTypes?: Array<PromotionalGoodsCapabilityOptionsPackagingTypesEnum>;
    /**
     *
     * @type {PersonalisationCapability}
     * @memberof PromotionalGoodsCapabilityOptions
     */
    personalisation?: PersonalisationCapability;
    /**
     *
     * @type {Array<string>}
     * @memberof PromotionalGoodsCapabilityOptions
     */
    productColours?: Array<string>;
    /**
     *
     * @type {Array<PromotionalGoodsCapabilityOptionsProductTypesEnum>}
     * @memberof PromotionalGoodsCapabilityOptions
     */
    productTypes?: Array<PromotionalGoodsCapabilityOptionsProductTypesEnum>;
}
/**
 * @export
 */
export declare const PromotionalGoodsCapabilityOptionsPackagingTypesEnum: {
    readonly Bulk: "bulk";
    readonly IndividualBag: "individual_bag";
    readonly GiftBox: "gift_box";
    readonly RetailBox: "retail_box";
    readonly Custom: "custom";
    readonly Unknown: "unknown";
};
export type PromotionalGoodsCapabilityOptionsPackagingTypesEnum = typeof PromotionalGoodsCapabilityOptionsPackagingTypesEnum[keyof typeof PromotionalGoodsCapabilityOptionsPackagingTypesEnum];
/**
 * @export
 */
export declare const PromotionalGoodsCapabilityOptionsProductTypesEnum: {
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
export type PromotionalGoodsCapabilityOptionsProductTypesEnum = typeof PromotionalGoodsCapabilityOptionsProductTypesEnum[keyof typeof PromotionalGoodsCapabilityOptionsProductTypesEnum];
/**
 * Check if a given object implements the PromotionalGoodsCapabilityOptions interface.
 */
export declare function instanceOfPromotionalGoodsCapabilityOptions(value: object): value is PromotionalGoodsCapabilityOptions;
export declare function PromotionalGoodsCapabilityOptionsFromJSON(json: any): PromotionalGoodsCapabilityOptions;
export declare function PromotionalGoodsCapabilityOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotionalGoodsCapabilityOptions;
export declare function PromotionalGoodsCapabilityOptionsToJSON(json: any): PromotionalGoodsCapabilityOptions;
export declare function PromotionalGoodsCapabilityOptionsToJSONTyped(value?: PromotionalGoodsCapabilityOptions | null, ignoreDiscriminator?: boolean): any;
