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
/**
 * Promotional-goods production and decoration options.
 * @export
 * @interface PromotionalGoodsOptions
 */
export interface PromotionalGoodsOptions {
    /**
     *
     * @type {number}
     * @memberof PromotionalGoodsOptions
     */
    capacityMl?: number | null;
    /**
     *
     * @type {number}
     * @memberof PromotionalGoodsOptions
     */
    decorationDiameterMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof PromotionalGoodsOptions
     */
    decorationHeightMm?: number | null;
    /**
     *
     * @type {PromotionalGoodsOptionsDecorationMethodEnum}
     * @memberof PromotionalGoodsOptions
     */
    decorationMethod?: PromotionalGoodsOptionsDecorationMethodEnum;
    /**
     *
     * @type {PromotionalGoodsOptionsDecorationPositionEnum}
     * @memberof PromotionalGoodsOptions
     */
    decorationPosition?: PromotionalGoodsOptionsDecorationPositionEnum;
    /**
     *
     * @type {number}
     * @memberof PromotionalGoodsOptions
     */
    decorationWidthMm?: number | null;
    /**
     *
     * @type {PromotionalGoodsOptionsPackagingTypeEnum}
     * @memberof PromotionalGoodsOptions
     */
    packagingType?: PromotionalGoodsOptionsPackagingTypeEnum;
    /**
     *
     * @type {boolean}
     * @memberof PromotionalGoodsOptions
     */
    personalisationRequired?: boolean;
    /**
     *
     * @type {string}
     * @memberof PromotionalGoodsOptions
     */
    productColour?: string | null;
    /**
     *
     * @type {Array<string>}
     * @memberof PromotionalGoodsOptions
     */
    requiredComplianceClaims?: Array<string>;
}


/**
 * @export
 */
export const PromotionalGoodsOptionsDecorationMethodEnum = {
    Dtg: 'dtg',
    Dtf: 'dtf',
    Htv: 'htv',
    Embroidery: 'embroidery',
    ScreenPrint: 'screen_print',
    Sublimation: 'sublimation',
    PadPrint: 'pad_print',
    UvPrint: 'uv_print',
    Engraving: 'engraving',
    LaserEngraving: 'laser_engraving',
    Unknown: 'unknown'
} as const;
export type PromotionalGoodsOptionsDecorationMethodEnum = typeof PromotionalGoodsOptionsDecorationMethodEnum[keyof typeof PromotionalGoodsOptionsDecorationMethodEnum];

/**
 * @export
 */
export const PromotionalGoodsOptionsDecorationPositionEnum = {
    Front: 'front',
    Back: 'back',
    LeftChest: 'left_chest',
    RightChest: 'right_chest',
    Sleeve: 'sleeve',
    CapFront: 'cap_front',
    Left: 'left',
    Right: 'right',
    Wrap: 'wrap',
    Barrel: 'barrel',
    Lid: 'lid',
    Base: 'base',
    Unknown: 'unknown'
} as const;
export type PromotionalGoodsOptionsDecorationPositionEnum = typeof PromotionalGoodsOptionsDecorationPositionEnum[keyof typeof PromotionalGoodsOptionsDecorationPositionEnum];

/**
 * @export
 */
export const PromotionalGoodsOptionsPackagingTypeEnum = {
    Bulk: 'bulk',
    IndividualBag: 'individual_bag',
    GiftBox: 'gift_box',
    RetailBox: 'retail_box',
    Custom: 'custom',
    Unknown: 'unknown'
} as const;
export type PromotionalGoodsOptionsPackagingTypeEnum = typeof PromotionalGoodsOptionsPackagingTypeEnum[keyof typeof PromotionalGoodsOptionsPackagingTypeEnum];


/**
 * Check if a given object implements the PromotionalGoodsOptions interface.
 */
export function instanceOfPromotionalGoodsOptions(value: object): value is PromotionalGoodsOptions {
    return true;
}

export function PromotionalGoodsOptionsFromJSON(json: any): PromotionalGoodsOptions {
    return PromotionalGoodsOptionsFromJSONTyped(json, false);
}

export function PromotionalGoodsOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotionalGoodsOptions {
    if (json == null) {
        return json;
    }
    return {

        'capacityMl': json['capacity_ml'] == null ? undefined : json['capacity_ml'],
        'decorationDiameterMm': json['decoration_diameter_mm'] == null ? undefined : json['decoration_diameter_mm'],
        'decorationHeightMm': json['decoration_height_mm'] == null ? undefined : json['decoration_height_mm'],
        'decorationMethod': json['decoration_method'] == null ? undefined : json['decoration_method'],
        'decorationPosition': json['decoration_position'] == null ? undefined : json['decoration_position'],
        'decorationWidthMm': json['decoration_width_mm'] == null ? undefined : json['decoration_width_mm'],
        'packagingType': json['packaging_type'] == null ? undefined : json['packaging_type'],
        'personalisationRequired': json['personalisation_required'] == null ? undefined : json['personalisation_required'],
        'productColour': json['product_colour'] == null ? undefined : json['product_colour'],
        'requiredComplianceClaims': json['required_compliance_claims'] == null ? undefined : json['required_compliance_claims'],
    };
}

export function PromotionalGoodsOptionsToJSON(json: any): PromotionalGoodsOptions {
    return PromotionalGoodsOptionsToJSONTyped(json, false);
}

export function PromotionalGoodsOptionsToJSONTyped(value?: PromotionalGoodsOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'capacity_ml': value['capacityMl'],
        'decoration_diameter_mm': value['decorationDiameterMm'],
        'decoration_height_mm': value['decorationHeightMm'],
        'decoration_method': value['decorationMethod'],
        'decoration_position': value['decorationPosition'],
        'decoration_width_mm': value['decorationWidthMm'],
        'packaging_type': value['packagingType'],
        'personalisation_required': value['personalisationRequired'],
        'product_colour': value['productColour'],
        'required_compliance_claims': value['requiredComplianceClaims'],
    };
}
