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
import type { FoldedLeafletOptions } from './FoldedLeafletOptions';
import type { PromotionalGoodsOptions } from './PromotionalGoodsOptions';
import type { ApparelDecorationOptions } from './ApparelDecorationOptions';
import type { FabricHomewaresOptions } from './FabricHomewaresOptions';
import type { BookDocumentOptions } from './BookDocumentOptions';
/**
 * Family-specific canonical options carried without supplier payload leakage.
 * @export
 * @interface ProductOptions
 */
export interface ProductOptions {
    /**
     *
     * @type {ApparelDecorationOptions}
     * @memberof ProductOptions
     */
    apparel?: ApparelDecorationOptions | null;
    /**
     *
     * @type {BookDocumentOptions}
     * @memberof ProductOptions
     */
    bookDocument?: BookDocumentOptions | null;
    /**
     *
     * @type {FabricHomewaresOptions}
     * @memberof ProductOptions
     */
    fabricHomewares?: FabricHomewaresOptions | null;
    /**
     *
     * @type {FoldedLeafletOptions}
     * @memberof ProductOptions
     */
    foldedLeaflet?: FoldedLeafletOptions | null;
    /**
     *
     * @type {PromotionalGoodsOptions}
     * @memberof ProductOptions
     */
    promotionalGoods?: PromotionalGoodsOptions | null;
}
/**
 * Check if a given object implements the ProductOptions interface.
 */
export declare function instanceOfProductOptions(value: object): value is ProductOptions;
export declare function ProductOptionsFromJSON(json: any): ProductOptions;
export declare function ProductOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductOptions;
export declare function ProductOptionsToJSON(json: any): ProductOptions;
export declare function ProductOptionsToJSONTyped(value?: ProductOptions | null, ignoreDiscriminator?: boolean): any;
