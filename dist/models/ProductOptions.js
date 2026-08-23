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
exports.instanceOfProductOptions = instanceOfProductOptions;
exports.ProductOptionsFromJSON = ProductOptionsFromJSON;
exports.ProductOptionsFromJSONTyped = ProductOptionsFromJSONTyped;
exports.ProductOptionsToJSON = ProductOptionsToJSON;
exports.ProductOptionsToJSONTyped = ProductOptionsToJSONTyped;
const FoldedLeafletOptions_1 = require("./FoldedLeafletOptions");
const PromotionalGoodsOptions_1 = require("./PromotionalGoodsOptions");
const ApparelDecorationOptions_1 = require("./ApparelDecorationOptions");
const FabricHomewaresOptions_1 = require("./FabricHomewaresOptions");
const BookDocumentOptions_1 = require("./BookDocumentOptions");
/**
 * Check if a given object implements the ProductOptions interface.
 */
function instanceOfProductOptions(value) {
    return true;
}
function ProductOptionsFromJSON(json) {
    return ProductOptionsFromJSONTyped(json, false);
}
function ProductOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apparel': json['apparel'] == null ? undefined : (0, ApparelDecorationOptions_1.ApparelDecorationOptionsFromJSON)(json['apparel']),
        'bookDocument': json['book_document'] == null ? undefined : (0, BookDocumentOptions_1.BookDocumentOptionsFromJSON)(json['book_document']),
        'fabricHomewares': json['fabric_homewares'] == null ? undefined : (0, FabricHomewaresOptions_1.FabricHomewaresOptionsFromJSON)(json['fabric_homewares']),
        'foldedLeaflet': json['folded_leaflet'] == null ? undefined : (0, FoldedLeafletOptions_1.FoldedLeafletOptionsFromJSON)(json['folded_leaflet']),
        'promotionalGoods': json['promotional_goods'] == null ? undefined : (0, PromotionalGoodsOptions_1.PromotionalGoodsOptionsFromJSON)(json['promotional_goods']),
    };
}
function ProductOptionsToJSON(json) {
    return ProductOptionsToJSONTyped(json, false);
}
function ProductOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'apparel': (0, ApparelDecorationOptions_1.ApparelDecorationOptionsToJSON)(value['apparel']),
        'book_document': (0, BookDocumentOptions_1.BookDocumentOptionsToJSON)(value['bookDocument']),
        'fabric_homewares': (0, FabricHomewaresOptions_1.FabricHomewaresOptionsToJSON)(value['fabricHomewares']),
        'folded_leaflet': (0, FoldedLeafletOptions_1.FoldedLeafletOptionsToJSON)(value['foldedLeaflet']),
        'promotional_goods': (0, PromotionalGoodsOptions_1.PromotionalGoodsOptionsToJSON)(value['promotionalGoods']),
    };
}
