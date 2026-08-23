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
export const ProducerBookDocumentOptionsBindingMethodsEnum = {
    SaddleStitched: 'saddle_stitched',
    PerfectBound: 'perfect_bound',
    WireBound: 'wire_bound',
    CaseBound: 'case_bound',
    Unknown: 'unknown'
};
/**
 * @export
 */
export const ProducerBookDocumentOptionsCoverComponentRolesEnum = {
    Main: 'main',
    Flat: 'flat',
    Finished: 'finished',
    Cover: 'cover',
    Text: 'text',
    Insert: 'insert',
    Garment: 'garment',
    Decoration: 'decoration',
    Unknown: 'unknown'
};
/**
 * @export
 */
export const ProducerBookDocumentOptionsTextComponentRolesEnum = {
    Main: 'main',
    Flat: 'flat',
    Finished: 'finished',
    Cover: 'cover',
    Text: 'text',
    Insert: 'insert',
    Garment: 'garment',
    Decoration: 'decoration',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the ProducerBookDocumentOptions interface.
 */
export function instanceOfProducerBookDocumentOptions(value) {
    return true;
}
export function ProducerBookDocumentOptionsFromJSON(json) {
    return ProducerBookDocumentOptionsFromJSONTyped(json, false);
}
export function ProducerBookDocumentOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bindingMethods': json['binding_methods'] == null ? undefined : json['binding_methods'],
        'coverComponentRoles': json['cover_component_roles'] == null ? undefined : json['cover_component_roles'],
        'maximumPageCount': json['maximum_page_count'] == null ? undefined : json['maximum_page_count'],
        'minimumPageCount': json['minimum_page_count'] == null ? undefined : json['minimum_page_count'],
        'paginationMultiples': json['pagination_multiples'] == null ? undefined : json['pagination_multiples'],
        'textComponentRoles': json['text_component_roles'] == null ? undefined : json['text_component_roles'],
    };
}
export function ProducerBookDocumentOptionsToJSON(json) {
    return ProducerBookDocumentOptionsToJSONTyped(json, false);
}
export function ProducerBookDocumentOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'binding_methods': value['bindingMethods'],
        'cover_component_roles': value['coverComponentRoles'],
        'maximum_page_count': value['maximumPageCount'],
        'minimum_page_count': value['minimumPageCount'],
        'pagination_multiples': value['paginationMultiples'],
        'text_component_roles': value['textComponentRoles'],
    };
}
