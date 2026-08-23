/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { ApparelOptions } from './ApparelOptions';
import type { CommercialPrintOptions } from './CommercialPrintOptions';
import type { ProducerBookDocumentOptions } from './ProducerBookDocumentOptions';
import type { FabricHomewaresCapabilityOptions } from './FabricHomewaresCapabilityOptions';
import type { PromotionalGoodsCapabilityOptions } from './PromotionalGoodsCapabilityOptions';
import type { ProducerFoldedLeafletOptions } from './ProducerFoldedLeafletOptions';
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
export declare function instanceOfProducerProductOptionCapability(value: object): value is ProducerProductOptionCapability;
export declare function ProducerProductOptionCapabilityFromJSON(json: any): ProducerProductOptionCapability;
export declare function ProducerProductOptionCapabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerProductOptionCapability;
export declare function ProducerProductOptionCapabilityToJSON(json: any): ProducerProductOptionCapability;
export declare function ProducerProductOptionCapabilityToJSONTyped(value?: ProducerProductOptionCapability | null, ignoreDiscriminator?: boolean): any;
