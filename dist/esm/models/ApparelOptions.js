/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import { DecorationAreaCapabilityFromJSON, DecorationAreaCapabilityToJSON, } from './DecorationAreaCapability';
import { PersonalisationCapabilityFromJSON, PersonalisationCapabilityToJSON, } from './PersonalisationCapability';
import { MaterialCapabilityFromJSON, MaterialCapabilityToJSON, } from './MaterialCapability';
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
};
/**
 * Check if a given object implements the ApparelOptions interface.
 */
export function instanceOfApparelOptions(value) {
    return true;
}
export function ApparelOptionsFromJSON(json) {
    return ApparelOptionsFromJSONTyped(json, false);
}
export function ApparelOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'brands': json['brands'] == null ? undefined : json['brands'],
        'colours': json['colours'] == null ? undefined : json['colours'],
        'decorationAreas': json['decoration_areas'] == null ? undefined : (json['decoration_areas'].map(DecorationAreaCapabilityFromJSON)),
        'garmentTypes': json['garment_types'] == null ? undefined : json['garment_types'],
        'materials': json['materials'] == null ? undefined : (json['materials'].map(MaterialCapabilityFromJSON)),
        'personalisation': json['personalisation'] == null ? undefined : PersonalisationCapabilityFromJSON(json['personalisation']),
        'sizes': json['sizes'] == null ? undefined : json['sizes'],
    };
}
export function ApparelOptionsToJSON(json) {
    return ApparelOptionsToJSONTyped(json, false);
}
export function ApparelOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'brands': value['brands'],
        'colours': value['colours'],
        'decoration_areas': value['decorationAreas'] == null ? undefined : (value['decorationAreas'].map(DecorationAreaCapabilityToJSON)),
        'garment_types': value['garmentTypes'],
        'materials': value['materials'] == null ? undefined : (value['materials'].map(MaterialCapabilityToJSON)),
        'personalisation': PersonalisationCapabilityToJSON(value['personalisation']),
        'sizes': value['sizes'],
    };
}
