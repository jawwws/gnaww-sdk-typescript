"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApparelOptionsGarmentTypesEnum = void 0;
exports.instanceOfApparelOptions = instanceOfApparelOptions;
exports.ApparelOptionsFromJSON = ApparelOptionsFromJSON;
exports.ApparelOptionsFromJSONTyped = ApparelOptionsFromJSONTyped;
exports.ApparelOptionsToJSON = ApparelOptionsToJSON;
exports.ApparelOptionsToJSONTyped = ApparelOptionsToJSONTyped;
const DecorationAreaCapability_1 = require("./DecorationAreaCapability");
const PersonalisationCapability_1 = require("./PersonalisationCapability");
const MaterialCapability_1 = require("./MaterialCapability");
/**
 * @export
 */
exports.ApparelOptionsGarmentTypesEnum = {
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
function instanceOfApparelOptions(value) {
    return true;
}
function ApparelOptionsFromJSON(json) {
    return ApparelOptionsFromJSONTyped(json, false);
}
function ApparelOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'brands': json['brands'] == null ? undefined : json['brands'],
        'colours': json['colours'] == null ? undefined : json['colours'],
        'decorationAreas': json['decoration_areas'] == null ? undefined : (json['decoration_areas'].map(DecorationAreaCapability_1.DecorationAreaCapabilityFromJSON)),
        'garmentTypes': json['garment_types'] == null ? undefined : json['garment_types'],
        'materials': json['materials'] == null ? undefined : (json['materials'].map(MaterialCapability_1.MaterialCapabilityFromJSON)),
        'personalisation': json['personalisation'] == null ? undefined : (0, PersonalisationCapability_1.PersonalisationCapabilityFromJSON)(json['personalisation']),
        'sizes': json['sizes'] == null ? undefined : json['sizes'],
    };
}
function ApparelOptionsToJSON(json) {
    return ApparelOptionsToJSONTyped(json, false);
}
function ApparelOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'brands': value['brands'],
        'colours': value['colours'],
        'decoration_areas': value['decorationAreas'] == null ? undefined : (value['decorationAreas'].map(DecorationAreaCapability_1.DecorationAreaCapabilityToJSON)),
        'garment_types': value['garmentTypes'],
        'materials': value['materials'] == null ? undefined : (value['materials'].map(MaterialCapability_1.MaterialCapabilityToJSON)),
        'personalisation': (0, PersonalisationCapability_1.PersonalisationCapabilityToJSON)(value['personalisation']),
        'sizes': value['sizes'],
    };
}
