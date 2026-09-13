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
exports.PrintJobSpecificationV05StatusEnum = exports.PrintJobSpecificationV05SchemaVersionEnum = exports.PrintJobSpecificationV05SchemaNameEnum = exports.PrintJobSpecificationV05ProductFamilyEnum = exports.PrintJobSpecificationV05ProductCategoryEnum = void 0;
exports.instanceOfPrintJobSpecificationV05 = instanceOfPrintJobSpecificationV05;
exports.PrintJobSpecificationV05FromJSON = PrintJobSpecificationV05FromJSON;
exports.PrintJobSpecificationV05FromJSONTyped = PrintJobSpecificationV05FromJSONTyped;
exports.PrintJobSpecificationV05ToJSON = PrintJobSpecificationV05ToJSON;
exports.PrintJobSpecificationV05ToJSONTyped = PrintJobSpecificationV05ToJSONTyped;
const ManufacturingComponent_1 = require("./ManufacturingComponent");
const ManufacturingQuantity_1 = require("./ManufacturingQuantity");
const ManufacturingOperation_1 = require("./ManufacturingOperation");
const UseRequirement_1 = require("./UseRequirement");
const QualityRequirement_1 = require("./QualityRequirement");
const ServiceRequirements_1 = require("./ServiceRequirements");
const ManufacturingVariation_1 = require("./ManufacturingVariation");
const ManufacturingAssembly_1 = require("./ManufacturingAssembly");
/**
 * @export
 */
exports.PrintJobSpecificationV05ProductCategoryEnum = {
    CommercialPrint: 'commercial_print',
    Apparel: 'apparel',
    FabricHomewares: 'fabric_homewares',
    PromotionalGoods: 'promotional_goods',
    Unknown: 'unknown'
};
/**
 * @export
 */
exports.PrintJobSpecificationV05ProductFamilyEnum = {
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
exports.PrintJobSpecificationV05SchemaNameEnum = {
    JawwwsPrintJobSpecification: 'jawwws.print_job_specification'
};
/**
 * @export
 */
exports.PrintJobSpecificationV05SchemaVersionEnum = {
    _05: '0.5'
};
/**
 * @export
 */
exports.PrintJobSpecificationV05StatusEnum = {
    Mapped: 'mapped',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
};
/**
 * Check if a given object implements the PrintJobSpecificationV05 interface.
 */
function instanceOfPrintJobSpecificationV05(value) {
    if (!('components' in value) || value['components'] === undefined)
        return false;
    if (!('productFamily' in value) || value['productFamily'] === undefined)
        return false;
    return true;
}
function PrintJobSpecificationV05FromJSON(json) {
    return PrintJobSpecificationV05FromJSONTyped(json, false);
}
function PrintJobSpecificationV05FromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'assemblies': json['assemblies'] == null ? undefined : (json['assemblies'].map(ManufacturingAssembly_1.ManufacturingAssemblyFromJSON)),
        'components': (json['components'].map(ManufacturingComponent_1.ManufacturingComponentFromJSON)),
        'confidence': json['confidence'] == null ? undefined : json['confidence'],
        'operations': json['operations'] == null ? undefined : (json['operations'].map(ManufacturingOperation_1.ManufacturingOperationFromJSON)),
        'productCategory': json['product_category'] == null ? undefined : json['product_category'],
        'productFamily': json['product_family'],
        'productName': json['product_name'] == null ? undefined : json['product_name'],
        'qualityRequirements': json['quality_requirements'] == null ? undefined : (json['quality_requirements'].map(QualityRequirement_1.QualityRequirementFromJSON)),
        'quantity': json['quantity'] == null ? undefined : (0, ManufacturingQuantity_1.ManufacturingQuantityFromJSON)(json['quantity']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'serviceRequirements': json['service_requirements'] == null ? undefined : (0, ServiceRequirements_1.ServiceRequirementsFromJSON)(json['service_requirements']),
        'status': json['status'] == null ? undefined : json['status'],
        'unresolvedFields': json['unresolved_fields'] == null ? undefined : json['unresolved_fields'],
        'useRequirements': json['use_requirements'] == null ? undefined : (json['use_requirements'].map(UseRequirement_1.UseRequirementFromJSON)),
        'variations': json['variations'] == null ? undefined : (json['variations'].map(ManufacturingVariation_1.ManufacturingVariationFromJSON)),
    };
}
function PrintJobSpecificationV05ToJSON(json) {
    return PrintJobSpecificationV05ToJSONTyped(json, false);
}
function PrintJobSpecificationV05ToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'assemblies': value['assemblies'] == null ? undefined : (value['assemblies'].map(ManufacturingAssembly_1.ManufacturingAssemblyToJSON)),
        'components': (value['components'].map(ManufacturingComponent_1.ManufacturingComponentToJSON)),
        'confidence': value['confidence'],
        'operations': value['operations'] == null ? undefined : (value['operations'].map(ManufacturingOperation_1.ManufacturingOperationToJSON)),
        'product_category': value['productCategory'],
        'product_family': value['productFamily'],
        'product_name': value['productName'],
        'quality_requirements': value['qualityRequirements'] == null ? undefined : (value['qualityRequirements'].map(QualityRequirement_1.QualityRequirementToJSON)),
        'quantity': (0, ManufacturingQuantity_1.ManufacturingQuantityToJSON)(value['quantity']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'service_requirements': (0, ServiceRequirements_1.ServiceRequirementsToJSON)(value['serviceRequirements']),
        'status': value['status'],
        'unresolved_fields': value['unresolvedFields'],
        'use_requirements': value['useRequirements'] == null ? undefined : (value['useRequirements'].map(UseRequirement_1.UseRequirementToJSON)),
        'variations': value['variations'] == null ? undefined : (value['variations'].map(ManufacturingVariation_1.ManufacturingVariationToJSON)),
    };
}
