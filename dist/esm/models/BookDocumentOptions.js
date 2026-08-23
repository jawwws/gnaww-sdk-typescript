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
/**
 * @export
 */
export const BookDocumentOptionsBindingMethodEnum = {
    SaddleStitched: 'saddle_stitched',
    PerfectBound: 'perfect_bound',
    WireBound: 'wire_bound',
    CaseBound: 'case_bound',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the BookDocumentOptions interface.
 */
export function instanceOfBookDocumentOptions(value) {
    return true;
}
export function BookDocumentOptionsFromJSON(json) {
    return BookDocumentOptionsFromJSONTyped(json, false);
}
export function BookDocumentOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bindingMethod': json['binding_method'] == null ? undefined : json['binding_method'],
        'coverComponentId': json['cover_component_id'] == null ? undefined : json['cover_component_id'],
        'pageCount': json['page_count'] == null ? undefined : json['page_count'],
        'paginationMultiple': json['pagination_multiple'] == null ? undefined : json['pagination_multiple'],
        'spineWidthMm': json['spine_width_mm'] == null ? undefined : json['spine_width_mm'],
        'textComponentId': json['text_component_id'] == null ? undefined : json['text_component_id'],
    };
}
export function BookDocumentOptionsToJSON(json) {
    return BookDocumentOptionsToJSONTyped(json, false);
}
export function BookDocumentOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'binding_method': value['bindingMethod'],
        'cover_component_id': value['coverComponentId'],
        'page_count': value['pageCount'],
        'pagination_multiple': value['paginationMultiple'],
        'spine_width_mm': value['spineWidthMm'],
        'text_component_id': value['textComponentId'],
    };
}
