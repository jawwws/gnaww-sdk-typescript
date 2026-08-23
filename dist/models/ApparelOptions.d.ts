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
import type { DecorationAreaCapability } from './DecorationAreaCapability';
import type { PersonalisationCapability } from './PersonalisationCapability';
import type { MaterialCapability } from './MaterialCapability';
/**
 * Canonical apparel and garment decoration capabilities.
 * @export
 * @interface ApparelOptions
 */
export interface ApparelOptions {
    /**
     *
     * @type {Array<string>}
     * @memberof ApparelOptions
     */
    brands?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof ApparelOptions
     */
    colours?: Array<string>;
    /**
     *
     * @type {Array<DecorationAreaCapability>}
     * @memberof ApparelOptions
     */
    decorationAreas?: Array<DecorationAreaCapability>;
    /**
     *
     * @type {Array<ApparelOptionsGarmentTypesEnum>}
     * @memberof ApparelOptions
     */
    garmentTypes?: Array<ApparelOptionsGarmentTypesEnum>;
    /**
     *
     * @type {Array<MaterialCapability>}
     * @memberof ApparelOptions
     */
    materials?: Array<MaterialCapability>;
    /**
     *
     * @type {PersonalisationCapability}
     * @memberof ApparelOptions
     */
    personalisation?: PersonalisationCapability;
    /**
     *
     * @type {Array<string>}
     * @memberof ApparelOptions
     */
    sizes?: Array<string>;
}
/**
 * @export
 */
export declare const ApparelOptionsGarmentTypesEnum: {
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
export type ApparelOptionsGarmentTypesEnum = typeof ApparelOptionsGarmentTypesEnum[keyof typeof ApparelOptionsGarmentTypesEnum];
/**
 * Check if a given object implements the ApparelOptions interface.
 */
export declare function instanceOfApparelOptions(value: object): value is ApparelOptions;
export declare function ApparelOptionsFromJSON(json: any): ApparelOptions;
export declare function ApparelOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApparelOptions;
export declare function ApparelOptionsToJSON(json: any): ApparelOptions;
export declare function ApparelOptionsToJSONTyped(value?: ApparelOptions | null, ignoreDiscriminator?: boolean): any;
