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

import { mapValues } from '../runtime';
import type { FoldedLeafletOptions } from './FoldedLeafletOptions';
import {
    FoldedLeafletOptionsFromJSON,
    FoldedLeafletOptionsFromJSONTyped,
    FoldedLeafletOptionsToJSON,
    FoldedLeafletOptionsToJSONTyped,
} from './FoldedLeafletOptions';
import type { PromotionalGoodsOptions } from './PromotionalGoodsOptions';
import {
    PromotionalGoodsOptionsFromJSON,
    PromotionalGoodsOptionsFromJSONTyped,
    PromotionalGoodsOptionsToJSON,
    PromotionalGoodsOptionsToJSONTyped,
} from './PromotionalGoodsOptions';
import type { ApparelDecorationOptions } from './ApparelDecorationOptions';
import {
    ApparelDecorationOptionsFromJSON,
    ApparelDecorationOptionsFromJSONTyped,
    ApparelDecorationOptionsToJSON,
    ApparelDecorationOptionsToJSONTyped,
} from './ApparelDecorationOptions';
import type { FabricHomewaresOptions } from './FabricHomewaresOptions';
import {
    FabricHomewaresOptionsFromJSON,
    FabricHomewaresOptionsFromJSONTyped,
    FabricHomewaresOptionsToJSON,
    FabricHomewaresOptionsToJSONTyped,
} from './FabricHomewaresOptions';
import type { BookDocumentOptions } from './BookDocumentOptions';
import {
    BookDocumentOptionsFromJSON,
    BookDocumentOptionsFromJSONTyped,
    BookDocumentOptionsToJSON,
    BookDocumentOptionsToJSONTyped,
} from './BookDocumentOptions';

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
export function instanceOfProductOptions(value: object): value is ProductOptions {
    return true;
}

export function ProductOptionsFromJSON(json: any): ProductOptions {
    return ProductOptionsFromJSONTyped(json, false);
}

export function ProductOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductOptions {
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

export function ProductOptionsToJSON(json: any): ProductOptions {
    return ProductOptionsToJSONTyped(json, false);
}

export function ProductOptionsToJSONTyped(value?: ProductOptions | null, ignoreDiscriminator: boolean = false): any {
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
