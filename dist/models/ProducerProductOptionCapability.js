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
exports.instanceOfProducerProductOptionCapability = instanceOfProducerProductOptionCapability;
exports.ProducerProductOptionCapabilityFromJSON = ProducerProductOptionCapabilityFromJSON;
exports.ProducerProductOptionCapabilityFromJSONTyped = ProducerProductOptionCapabilityFromJSONTyped;
exports.ProducerProductOptionCapabilityToJSON = ProducerProductOptionCapabilityToJSON;
exports.ProducerProductOptionCapabilityToJSONTyped = ProducerProductOptionCapabilityToJSONTyped;
const ApparelOptions_1 = require("./ApparelOptions");
const CommercialPrintOptions_1 = require("./CommercialPrintOptions");
const ProducerBookDocumentOptions_1 = require("./ProducerBookDocumentOptions");
const FabricHomewaresCapabilityOptions_1 = require("./FabricHomewaresCapabilityOptions");
const PromotionalGoodsCapabilityOptions_1 = require("./PromotionalGoodsCapabilityOptions");
const ProducerFoldedLeafletOptions_1 = require("./ProducerFoldedLeafletOptions");
/**
 * Check if a given object implements the ProducerProductOptionCapability interface.
 */
function instanceOfProducerProductOptionCapability(value) {
    return true;
}
function ProducerProductOptionCapabilityFromJSON(json) {
    return ProducerProductOptionCapabilityFromJSONTyped(json, false);
}
function ProducerProductOptionCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apparel': json['apparel'] == null ? undefined : (0, ApparelOptions_1.ApparelOptionsFromJSON)(json['apparel']),
        'bookDocument': json['book_document'] == null ? undefined : (0, ProducerBookDocumentOptions_1.ProducerBookDocumentOptionsFromJSON)(json['book_document']),
        'commercialPrint': json['commercial_print'] == null ? undefined : (0, CommercialPrintOptions_1.CommercialPrintOptionsFromJSON)(json['commercial_print']),
        'fabricHomewares': json['fabric_homewares'] == null ? undefined : (0, FabricHomewaresCapabilityOptions_1.FabricHomewaresCapabilityOptionsFromJSON)(json['fabric_homewares']),
        'foldedLeaflet': json['folded_leaflet'] == null ? undefined : (0, ProducerFoldedLeafletOptions_1.ProducerFoldedLeafletOptionsFromJSON)(json['folded_leaflet']),
        'promotionalGoods': json['promotional_goods'] == null ? undefined : (0, PromotionalGoodsCapabilityOptions_1.PromotionalGoodsCapabilityOptionsFromJSON)(json['promotional_goods']),
    };
}
function ProducerProductOptionCapabilityToJSON(json) {
    return ProducerProductOptionCapabilityToJSONTyped(json, false);
}
function ProducerProductOptionCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'apparel': (0, ApparelOptions_1.ApparelOptionsToJSON)(value['apparel']),
        'book_document': (0, ProducerBookDocumentOptions_1.ProducerBookDocumentOptionsToJSON)(value['bookDocument']),
        'commercial_print': (0, CommercialPrintOptions_1.CommercialPrintOptionsToJSON)(value['commercialPrint']),
        'fabric_homewares': (0, FabricHomewaresCapabilityOptions_1.FabricHomewaresCapabilityOptionsToJSON)(value['fabricHomewares']),
        'folded_leaflet': (0, ProducerFoldedLeafletOptions_1.ProducerFoldedLeafletOptionsToJSON)(value['foldedLeaflet']),
        'promotional_goods': (0, PromotionalGoodsCapabilityOptions_1.PromotionalGoodsCapabilityOptionsToJSON)(value['promotionalGoods']),
    };
}
