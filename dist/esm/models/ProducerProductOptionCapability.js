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
import { ApparelOptionsFromJSON, ApparelOptionsToJSON, } from './ApparelOptions';
import { CommercialPrintOptionsFromJSON, CommercialPrintOptionsToJSON, } from './CommercialPrintOptions';
import { ProducerBookDocumentOptionsFromJSON, ProducerBookDocumentOptionsToJSON, } from './ProducerBookDocumentOptions';
import { FabricHomewaresCapabilityOptionsFromJSON, FabricHomewaresCapabilityOptionsToJSON, } from './FabricHomewaresCapabilityOptions';
import { PromotionalGoodsCapabilityOptionsFromJSON, PromotionalGoodsCapabilityOptionsToJSON, } from './PromotionalGoodsCapabilityOptions';
import { ProducerFoldedLeafletOptionsFromJSON, ProducerFoldedLeafletOptionsToJSON, } from './ProducerFoldedLeafletOptions';
/**
 * Check if a given object implements the ProducerProductOptionCapability interface.
 */
export function instanceOfProducerProductOptionCapability(value) {
    return true;
}
export function ProducerProductOptionCapabilityFromJSON(json) {
    return ProducerProductOptionCapabilityFromJSONTyped(json, false);
}
export function ProducerProductOptionCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apparel': json['apparel'] == null ? undefined : ApparelOptionsFromJSON(json['apparel']),
        'bookDocument': json['book_document'] == null ? undefined : ProducerBookDocumentOptionsFromJSON(json['book_document']),
        'commercialPrint': json['commercial_print'] == null ? undefined : CommercialPrintOptionsFromJSON(json['commercial_print']),
        'fabricHomewares': json['fabric_homewares'] == null ? undefined : FabricHomewaresCapabilityOptionsFromJSON(json['fabric_homewares']),
        'foldedLeaflet': json['folded_leaflet'] == null ? undefined : ProducerFoldedLeafletOptionsFromJSON(json['folded_leaflet']),
        'promotionalGoods': json['promotional_goods'] == null ? undefined : PromotionalGoodsCapabilityOptionsFromJSON(json['promotional_goods']),
    };
}
export function ProducerProductOptionCapabilityToJSON(json) {
    return ProducerProductOptionCapabilityToJSONTyped(json, false);
}
export function ProducerProductOptionCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'apparel': ApparelOptionsToJSON(value['apparel']),
        'book_document': ProducerBookDocumentOptionsToJSON(value['bookDocument']),
        'commercial_print': CommercialPrintOptionsToJSON(value['commercialPrint']),
        'fabric_homewares': FabricHomewaresCapabilityOptionsToJSON(value['fabricHomewares']),
        'folded_leaflet': ProducerFoldedLeafletOptionsToJSON(value['foldedLeaflet']),
        'promotional_goods': PromotionalGoodsCapabilityOptionsToJSON(value['promotionalGoods']),
    };
}
