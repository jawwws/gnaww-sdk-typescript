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
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintJobSpecificationV04StatusEnum = exports.PrintJobSpecificationV04SchemaVersionEnum = exports.PrintJobSpecificationV04SchemaNameEnum = exports.PrintJobSpecificationV04ProductFamilyEnum = exports.PrintJobSpecificationV04ProductCategoryEnum = void 0;
exports.instanceOfPrintJobSpecificationV04 = instanceOfPrintJobSpecificationV04;
exports.PrintJobSpecificationV04FromJSON = PrintJobSpecificationV04FromJSON;
exports.PrintJobSpecificationV04FromJSONTyped = PrintJobSpecificationV04FromJSONTyped;
exports.PrintJobSpecificationV04ToJSON = PrintJobSpecificationV04ToJSON;
exports.PrintJobSpecificationV04ToJSONTyped = PrintJobSpecificationV04ToJSONTyped;
const PrintComponent_1 = require("./PrintComponent");
const UseRequirement_1 = require("./UseRequirement");
const ServiceRequirements_1 = require("./ServiceRequirements");
const Quantity_1 = require("./Quantity");
const ProductOptions_1 = require("./ProductOptions");
/**
 * @export
 */
exports.PrintJobSpecificationV04ProductCategoryEnum = {
    CommercialPrint: 'commercial_print',
    Apparel: 'apparel',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.PrintJobSpecificationV04ProductFamilyEnum = {
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
 * @export
 */
exports.PrintJobSpecificationV04SchemaNameEnum = {
    JawwwsPrintJobSpecification: 'jawwws.print_job_specification'
};
/**
 * @export
 */
exports.PrintJobSpecificationV04SchemaVersionEnum = {
    _04: '0.4'
};
/**
 * @export
 */
exports.PrintJobSpecificationV04StatusEnum = {
    Mapped: 'mapped',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
};
/**
 * Check if a given object implements the PrintJobSpecificationV04 interface.
 */
function instanceOfPrintJobSpecificationV04(value) {
    if (!('productFamily' in value) || value['productFamily'] === undefined)
        return false;
    return true;
}
function PrintJobSpecificationV04FromJSON(json) {
    return PrintJobSpecificationV04FromJSONTyped(json, false);
}
function PrintJobSpecificationV04FromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'components': json['components'] == null ? undefined : (json['components'].map(PrintComponent_1.PrintComponentFromJSON)),
        'confidence': json['confidence'] == null ? undefined : json['confidence'],
        'options': json['options'] == null ? undefined : (0, ProductOptions_1.ProductOptionsFromJSON)(json['options']),
        'productCategory': json['product_category'] == null ? undefined : json['product_category'],
        'productFamily': json['product_family'],
        'productName': json['product_name'] == null ? undefined : json['product_name'],
        'quantity': json['quantity'] == null ? undefined : (0, Quantity_1.QuantityFromJSON)(json['quantity']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'serviceRequirements': json['service_requirements'] == null ? undefined : (0, ServiceRequirements_1.ServiceRequirementsFromJSON)(json['service_requirements']),
        'status': json['status'] == null ? undefined : json['status'],
        'unresolvedFields': json['unresolved_fields'] == null ? undefined : json['unresolved_fields'],
        'useRequirements': json['use_requirements'] == null ? undefined : (json['use_requirements'].map(UseRequirement_1.UseRequirementFromJSON)),
    };
}
function PrintJobSpecificationV04ToJSON(json) {
    return PrintJobSpecificationV04ToJSONTyped(json, false);
}
function PrintJobSpecificationV04ToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'components': value['components'] == null ? undefined : (value['components'].map(PrintComponent_1.PrintComponentToJSON)),
        'confidence': value['confidence'],
        'options': (0, ProductOptions_1.ProductOptionsToJSON)(value['options']),
        'product_category': value['productCategory'],
        'product_family': value['productFamily'],
        'product_name': value['productName'],
        'quantity': (0, Quantity_1.QuantityToJSON)(value['quantity']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'service_requirements': (0, ServiceRequirements_1.ServiceRequirementsToJSON)(value['serviceRequirements']),
        'status': value['status'],
        'unresolved_fields': value['unresolvedFields'],
        'use_requirements': value['useRequirements'] == null ? undefined : (value['useRequirements'].map(UseRequirement_1.UseRequirementToJSON)),
    };
}
