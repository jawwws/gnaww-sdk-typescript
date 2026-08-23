/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
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
export declare function instanceOfProducerProductReference(value: object): value is ProducerProductReference;
export declare function ProducerProductReferenceFromJSON(json: any): ProducerProductReference;
export declare function ProducerProductReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerProductReference;
export declare function ProducerProductReferenceToJSON(json: any): ProducerProductReference;
export declare function ProducerProductReferenceToJSONTyped(value?: ProducerProductReference | null, ignoreDiscriminator?: boolean): any;
