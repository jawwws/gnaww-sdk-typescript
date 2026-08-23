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
/**
 * Supported book, booklet and document options for a producer product.
 * @export
 * @interface ProducerBookDocumentOptions
 */
export interface ProducerBookDocumentOptions {
    /**
     *
     * @type {Array<ProducerBookDocumentOptionsBindingMethodsEnum>}
     * @memberof ProducerBookDocumentOptions
     */
    bindingMethods?: Array<ProducerBookDocumentOptionsBindingMethodsEnum>;
    /**
     *
     * @type {Array<ProducerBookDocumentOptionsCoverComponentRolesEnum>}
     * @memberof ProducerBookDocumentOptions
     */
    coverComponentRoles?: Array<ProducerBookDocumentOptionsCoverComponentRolesEnum>;
    /**
     *
     * @type {number}
     * @memberof ProducerBookDocumentOptions
     */
    maximumPageCount?: number | null;
    /**
     *
     * @type {number}
     * @memberof ProducerBookDocumentOptions
     */
    minimumPageCount?: number | null;
    /**
     *
     * @type {Array<number>}
     * @memberof ProducerBookDocumentOptions
     */
    paginationMultiples?: Array<number>;
    /**
     *
     * @type {Array<ProducerBookDocumentOptionsTextComponentRolesEnum>}
     * @memberof ProducerBookDocumentOptions
     */
    textComponentRoles?: Array<ProducerBookDocumentOptionsTextComponentRolesEnum>;
}


/**
 * @export
 */
export const ProducerBookDocumentOptionsBindingMethodsEnum = {
    SaddleStitched: 'saddle_stitched',
    PerfectBound: 'perfect_bound',
    WireBound: 'wire_bound',
    CaseBound: 'case_bound',
    Unknown: 'unknown'
} as const;
export type ProducerBookDocumentOptionsBindingMethodsEnum = typeof ProducerBookDocumentOptionsBindingMethodsEnum[keyof typeof ProducerBookDocumentOptionsBindingMethodsEnum];

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
} as const;
export type ProducerBookDocumentOptionsCoverComponentRolesEnum = typeof ProducerBookDocumentOptionsCoverComponentRolesEnum[keyof typeof ProducerBookDocumentOptionsCoverComponentRolesEnum];

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
} as const;
export type ProducerBookDocumentOptionsTextComponentRolesEnum = typeof ProducerBookDocumentOptionsTextComponentRolesEnum[keyof typeof ProducerBookDocumentOptionsTextComponentRolesEnum];


/**
 * Check if a given object implements the ProducerBookDocumentOptions interface.
 */
export function instanceOfProducerBookDocumentOptions(value: object): value is ProducerBookDocumentOptions {
    return true;
}

export function ProducerBookDocumentOptionsFromJSON(json: any): ProducerBookDocumentOptions {
    return ProducerBookDocumentOptionsFromJSONTyped(json, false);
}

export function ProducerBookDocumentOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerBookDocumentOptions {
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

export function ProducerBookDocumentOptionsToJSON(json: any): ProducerBookDocumentOptions {
    return ProducerBookDocumentOptionsToJSONTyped(json, false);
}

export function ProducerBookDocumentOptionsToJSONTyped(value?: ProducerBookDocumentOptions | null, ignoreDiscriminator: boolean = false): any {
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
