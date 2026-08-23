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

import { mapValues } from '../runtime';
import type { ApparelOptions } from './ApparelOptions';
import {
    ApparelOptionsFromJSON,
    ApparelOptionsFromJSONTyped,
    ApparelOptionsToJSON,
    ApparelOptionsToJSONTyped,
} from './ApparelOptions';
import type { CommercialPrintOptions } from './CommercialPrintOptions';
import {
    CommercialPrintOptionsFromJSON,
    CommercialPrintOptionsFromJSONTyped,
    CommercialPrintOptionsToJSON,
    CommercialPrintOptionsToJSONTyped,
} from './CommercialPrintOptions';
import type { ProducerBookDocumentOptions } from './ProducerBookDocumentOptions';
import {
    ProducerBookDocumentOptionsFromJSON,
    ProducerBookDocumentOptionsFromJSONTyped,
    ProducerBookDocumentOptionsToJSON,
    ProducerBookDocumentOptionsToJSONTyped,
} from './ProducerBookDocumentOptions';
import type { FabricHomewaresCapabilityOptions } from './FabricHomewaresCapabilityOptions';
import {
    FabricHomewaresCapabilityOptionsFromJSON,
    FabricHomewaresCapabilityOptionsFromJSONTyped,
    FabricHomewaresCapabilityOptionsToJSON,
    FabricHomewaresCapabilityOptionsToJSONTyped,
} from './FabricHomewaresCapabilityOptions';
import type { PromotionalGoodsCapabilityOptions } from './PromotionalGoodsCapabilityOptions';
import {
    PromotionalGoodsCapabilityOptionsFromJSON,
    PromotionalGoodsCapabilityOptionsFromJSONTyped,
    PromotionalGoodsCapabilityOptionsToJSON,
    PromotionalGoodsCapabilityOptionsToJSONTyped,
} from './PromotionalGoodsCapabilityOptions';
import type { ProducerFoldedLeafletOptions } from './ProducerFoldedLeafletOptions';
import {
    ProducerFoldedLeafletOptionsFromJSON,
    ProducerFoldedLeafletOptionsFromJSONTyped,
    ProducerFoldedLeafletOptionsToJSON,
    ProducerFoldedLeafletOptionsToJSONTyped,
} from './ProducerFoldedLeafletOptions';

/**
 * Family-specific producer options without supplier-specific payloads.
 * @export
 * @interface ProducerProductOptionCapability
 */
export interface ProducerProductOptionCapability {
    /**
     *
     * @type {ApparelOptions}
     * @memberof ProducerProductOptionCapability
     */
    apparel?: ApparelOptions | null;
    /**
     *
     * @type {ProducerBookDocumentOptions}
     * @memberof ProducerProductOptionCapability
     */
    bookDocument?: ProducerBookDocumentOptions | null;
    /**
     *
     * @type {CommercialPrintOptions}
     * @memberof ProducerProductOptionCapability
     */
    commercialPrint?: CommercialPrintOptions | null;
    /**
     *
     * @type {FabricHomewaresCapabilityOptions}
     * @memberof ProducerProductOptionCapability
     */
    fabricHomewares?: FabricHomewaresCapabilityOptions | null;
    /**
     *
     * @type {ProducerFoldedLeafletOptions}
     * @memberof ProducerProductOptionCapability
     */
    foldedLeaflet?: ProducerFoldedLeafletOptions | null;
    /**
     *
     * @type {PromotionalGoodsCapabilityOptions}
     * @memberof ProducerProductOptionCapability
     */
    promotionalGoods?: PromotionalGoodsCapabilityOptions | null;
}

/**
 * Check if a given object implements the ProducerProductOptionCapability interface.
 */
export function instanceOfProducerProductOptionCapability(value: object): value is ProducerProductOptionCapability {
    return true;
}

export function ProducerProductOptionCapabilityFromJSON(json: any): ProducerProductOptionCapability {
    return ProducerProductOptionCapabilityFromJSONTyped(json, false);
}

export function ProducerProductOptionCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerProductOptionCapability {
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

export function ProducerProductOptionCapabilityToJSON(json: any): ProducerProductOptionCapability {
    return ProducerProductOptionCapabilityToJSONTyped(json, false);
}

export function ProducerProductOptionCapabilityToJSONTyped(value?: ProducerProductOptionCapability | null, ignoreDiscriminator: boolean = false): any {
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
