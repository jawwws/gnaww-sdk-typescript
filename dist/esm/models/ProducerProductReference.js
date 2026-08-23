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
/**
 * Check if a given object implements the ProducerProductReference interface.
 */
export function instanceOfProducerProductReference(value) {
    if (!('producerId' in value) || value['producerId'] === undefined)
        return false;
    if (!('producerProfileId' in value) || value['producerProfileId'] === undefined)
        return false;
    if (!('productId' in value) || value['productId'] === undefined)
        return false;
    if (!('productName' in value) || value['productName'] === undefined)
        return false;
    return true;
}
export function ProducerProductReferenceFromJSON(json) {
    return ProducerProductReferenceFromJSONTyped(json, false);
}
export function ProducerProductReferenceFromJSONTyped(json, ignoreDiscriminator) {
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
export function ProducerProductReferenceToJSON(json) {
    return ProducerProductReferenceToJSONTyped(json, false);
}
export function ProducerProductReferenceToJSONTyped(value, ignoreDiscriminator = false) {
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
