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
exports.PrintJobSpecificationStatusEnum = exports.PrintJobSpecificationSchemaNameEnum = exports.PrintJobSpecificationProductFamilyEnum = exports.PrintJobSpecificationProductCategoryEnum = void 0;
exports.instanceOfPrintJobSpecification = instanceOfPrintJobSpecification;
exports.PrintJobSpecificationFromJSON = PrintJobSpecificationFromJSON;
exports.PrintJobSpecificationFromJSONTyped = PrintJobSpecificationFromJSONTyped;
exports.PrintJobSpecificationToJSON = PrintJobSpecificationToJSON;
exports.PrintJobSpecificationToJSONTyped = PrintJobSpecificationToJSONTyped;
const PrintComponent_1 = require("./PrintComponent");
const ServiceRequirements_1 = require("./ServiceRequirements");
const Quantity_1 = require("./Quantity");
const ProductOptions_1 = require("./ProductOptions");
/**
 * @export
 */
exports.PrintJobSpecificationProductCategoryEnum = {
    CommercialPrint: 'commercial_print',
    Apparel: 'apparel',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.PrintJobSpecificationProductFamilyEnum = {
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
exports.PrintJobSpecificationSchemaNameEnum = {
    JawwwsPrintJobSpecification: 'jawwws.print_job_specification'
};
/**
 * @export
 */
exports.PrintJobSpecificationStatusEnum = {
    Mapped: 'mapped',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
};
/**
 * Check if a given object implements the PrintJobSpecification interface.
 */
function instanceOfPrintJobSpecification(value) {
    if (!('productFamily' in value) || value['productFamily'] === undefined)
        return false;
    return true;
}
function PrintJobSpecificationFromJSON(json) {
    return PrintJobSpecificationFromJSONTyped(json, false);
}
function PrintJobSpecificationFromJSONTyped(json, ignoreDiscriminator) {
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
    };
}
function PrintJobSpecificationToJSON(json) {
    return PrintJobSpecificationToJSONTyped(json, false);
}
function PrintJobSpecificationToJSONTyped(value, ignoreDiscriminator = false) {
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
    };
}
