/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { DecorationAreaCapability } from './DecorationAreaCapability';
import {
    DecorationAreaCapabilityFromJSON,
    DecorationAreaCapabilityFromJSONTyped,
    DecorationAreaCapabilityToJSON,
    DecorationAreaCapabilityToJSONTyped,
} from './DecorationAreaCapability';
import type { PersonalisationCapability } from './PersonalisationCapability';
import {
    PersonalisationCapabilityFromJSON,
    PersonalisationCapabilityFromJSONTyped,
    PersonalisationCapabilityToJSON,
    PersonalisationCapabilityToJSONTyped,
} from './PersonalisationCapability';
import type { MaterialCapability } from './MaterialCapability';
import {
    MaterialCapabilityFromJSON,
    MaterialCapabilityFromJSONTyped,
    MaterialCapabilityToJSON,
    MaterialCapabilityToJSONTyped,
} from './MaterialCapability';

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
export const ApparelOptionsGarmentTypesEnum = {
    Flyer: 'flyer',
    Leaflet: 'leaflet',
    FoldedLeaflet: 'folded_leaflet',
    Apparel: 'apparel',
    BusinessCard: 'business_card',
    LoyaltyCard: 'loyalty_card',
    Postcard: 'postcard',
    Poster: 'poster',
    Sticker: 'sticker',
    Label: 'label',
    Booklet: 'booklet',
    Book: 'book',
    Document: 'document',
    Card: 'card',
    Certificate: 'certificate',
    RaceBib: 'race_bib',
    Stationery: 'stationery',
    Bookmark: 'bookmark',
    PresentationFolder: 'presentation_folder',
    TShirt: 't_shirt',
    Hoodie: 'hoodie',
    Sweatshirt: 'sweatshirt',
    PoloShirt: 'polo_shirt',
    Jacket: 'jacket',
    Cap: 'cap',
    Beanie: 'beanie',
    Workwear: 'workwear',
    TextileAccessory: 'textile_accessory',
    Cushion: 'cushion',
    CushionCover: 'cushion_cover',
    Bedding: 'bedding',
    Curtain: 'curtain',
    TeaTowel: 'tea_towel',
    Blanket: 'blanket',
    FabricByMetre: 'fabric_by_metre',
    Tablecloth: 'tablecloth',
    Homeware: 'homeware',
    Pen: 'pen',
    Mug: 'mug',
    WaterBottle: 'water_bottle',
    GolfBall: 'golf_ball',
    Umbrella: 'umbrella',
    Bag: 'bag',
    Notebook: 'notebook',
    Lanyard: 'lanyard',
    Keyring: 'keyring',
    PromotionalProduct: 'promotional_product',
    Unknown: 'unknown'
} as const;
export type ApparelOptionsGarmentTypesEnum = typeof ApparelOptionsGarmentTypesEnum[keyof typeof ApparelOptionsGarmentTypesEnum];


/**
 * Check if a given object implements the ApparelOptions interface.
 */
export function instanceOfApparelOptions(value: object): value is ApparelOptions {
    return true;
}

export function ApparelOptionsFromJSON(json: any): ApparelOptions {
    return ApparelOptionsFromJSONTyped(json, false);
}

export function ApparelOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApparelOptions {
    if (json == null) {
        return json;
    }
    return {

        'brands': json['brands'] == null ? undefined : json['brands'],
        'colours': json['colours'] == null ? undefined : json['colours'],
        'decorationAreas': json['decoration_areas'] == null ? undefined : ((json['decoration_areas'] as Array<any>).map(DecorationAreaCapabilityFromJSON)),
        'garmentTypes': json['garment_types'] == null ? undefined : json['garment_types'],
        'materials': json['materials'] == null ? undefined : ((json['materials'] as Array<any>).map(MaterialCapabilityFromJSON)),
        'personalisation': json['personalisation'] == null ? undefined : PersonalisationCapabilityFromJSON(json['personalisation']),
        'sizes': json['sizes'] == null ? undefined : json['sizes'],
    };
}

export function ApparelOptionsToJSON(json: any): ApparelOptions {
    return ApparelOptionsToJSONTyped(json, false);
}

export function ApparelOptionsToJSONTyped(value?: ApparelOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'brands': value['brands'],
        'colours': value['colours'],
        'decoration_areas': value['decorationAreas'] == null ? undefined : ((value['decorationAreas'] as Array<any>).map(DecorationAreaCapabilityToJSON)),
        'garment_types': value['garmentTypes'],
        'materials': value['materials'] == null ? undefined : ((value['materials'] as Array<any>).map(MaterialCapabilityToJSON)),
        'personalisation': PersonalisationCapabilityToJSON(value['personalisation']),
        'sizes': value['sizes'],
    };
}
