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
 * Reference to the matched producer-side product or capability.
 * @export
 * @interface ProducerProductReference
 */
export interface ProducerProductReference {
    /**
     *
     * @type {string}
     * @memberof ProducerProductReference
     */
    producerId: string;
    /**
     *
     * @type {string}
     * @memberof ProducerProductReference
     */
    producerProfileId: string;
    /**
     *
     * @type {string}
     * @memberof ProducerProductReference
     */
    productId: string;
    /**
     *
     * @type {string}
     * @memberof ProducerProductReference
     */
    productName: string;
}

/**
 * Check if a given object implements the ProducerProductReference interface.
 */
export function instanceOfProducerProductReference(value: object): value is ProducerProductReference {
    if (!('producerId' in value) || value['producerId'] === undefined) return false;
    if (!('producerProfileId' in value) || value['producerProfileId'] === undefined) return false;
    if (!('productId' in value) || value['productId'] === undefined) return false;
    if (!('productName' in value) || value['productName'] === undefined) return false;
    return true;
}

export function ProducerProductReferenceFromJSON(json: any): ProducerProductReference {
    return ProducerProductReferenceFromJSONTyped(json, false);
}

export function ProducerProductReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerProductReference {
    if (json == null) {
        return json;
    }
    return {

        'producerId': json['producer_id'],
        'producerProfileId': json['producer_profile_id'],
        'productId': json['product_id'],
        'productName': json['product_name'],
    };
}

export function ProducerProductReferenceToJSON(json: any): ProducerProductReference {
    return ProducerProductReferenceToJSONTyped(json, false);
}

export function ProducerProductReferenceToJSONTyped(value?: ProducerProductReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'producer_id': value['producerId'],
        'producer_profile_id': value['producerProfileId'],
        'product_id': value['productId'],
        'product_name': value['productName'],
    };
}
