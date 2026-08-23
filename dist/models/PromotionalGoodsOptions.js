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
exports.PromotionalGoodsOptionsPackagingTypeEnum = exports.PromotionalGoodsOptionsDecorationPositionEnum = exports.PromotionalGoodsOptionsDecorationMethodEnum = void 0;
exports.instanceOfPromotionalGoodsOptions = instanceOfPromotionalGoodsOptions;
exports.PromotionalGoodsOptionsFromJSON = PromotionalGoodsOptionsFromJSON;
exports.PromotionalGoodsOptionsFromJSONTyped = PromotionalGoodsOptionsFromJSONTyped;
exports.PromotionalGoodsOptionsToJSON = PromotionalGoodsOptionsToJSON;
exports.PromotionalGoodsOptionsToJSONTyped = PromotionalGoodsOptionsToJSONTyped;
/**
 * @export
 */
exports.PromotionalGoodsOptionsDecorationMethodEnum = {
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
};
/**
 * @export
 */
exports.PromotionalGoodsOptionsDecorationPositionEnum = {
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
};
/**
 * @export
 */
exports.PromotionalGoodsOptionsPackagingTypeEnum = {
    Bulk: 'bulk',
    IndividualBag: 'individual_bag',
    GiftBox: 'gift_box',
    RetailBox: 'retail_box',
    Custom: 'custom',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the PromotionalGoodsOptions interface.
 */
function instanceOfPromotionalGoodsOptions(value) {
    return true;
}
function PromotionalGoodsOptionsFromJSON(json) {
    return PromotionalGoodsOptionsFromJSONTyped(json, false);
}
function PromotionalGoodsOptionsFromJSONTyped(json, ignoreDiscriminator) {
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
function PromotionalGoodsOptionsToJSON(json) {
    return PromotionalGoodsOptionsToJSONTyped(json, false);
}
function PromotionalGoodsOptionsToJSONTyped(value, ignoreDiscriminator = false) {
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
