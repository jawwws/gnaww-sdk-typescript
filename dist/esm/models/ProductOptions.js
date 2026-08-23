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
import { FoldedLeafletOptionsFromJSON, FoldedLeafletOptionsToJSON, } from './FoldedLeafletOptions';
import { PromotionalGoodsOptionsFromJSON, PromotionalGoodsOptionsToJSON, } from './PromotionalGoodsOptions';
import { ApparelDecorationOptionsFromJSON, ApparelDecorationOptionsToJSON, } from './ApparelDecorationOptions';
import { FabricHomewaresOptionsFromJSON, FabricHomewaresOptionsToJSON, } from './FabricHomewaresOptions';
import { BookDocumentOptionsFromJSON, BookDocumentOptionsToJSON, } from './BookDocumentOptions';
/**
 * Check if a given object implements the ProductOptions interface.
 */
export function instanceOfProductOptions(value) {
    return true;
}
export function ProductOptionsFromJSON(json) {
    return ProductOptionsFromJSONTyped(json, false);
}
export function ProductOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apparel': json['apparel'] == null ? undefined : ApparelDecorationOptionsFromJSON(json['apparel']),
        'bookDocument': json['book_document'] == null ? undefined : BookDocumentOptionsFromJSON(json['book_document']),
        'fabricHomewares': json['fabric_homewares'] == null ? undefined : FabricHomewaresOptionsFromJSON(json['fabric_homewares']),
        'foldedLeaflet': json['folded_leaflet'] == null ? undefined : FoldedLeafletOptionsFromJSON(json['folded_leaflet']),
        'promotionalGoods': json['promotional_goods'] == null ? undefined : PromotionalGoodsOptionsFromJSON(json['promotional_goods']),
    };
}
export function ProductOptionsToJSON(json) {
    return ProductOptionsToJSONTyped(json, false);
}
export function ProductOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'apparel': ApparelDecorationOptionsToJSON(value['apparel']),
        'book_document': BookDocumentOptionsToJSON(value['bookDocument']),
        'fabric_homewares': FabricHomewaresOptionsToJSON(value['fabricHomewares']),
        'folded_leaflet': FoldedLeafletOptionsToJSON(value['foldedLeaflet']),
        'promotional_goods': PromotionalGoodsOptionsToJSON(value['promotionalGoods']),
    };
}
