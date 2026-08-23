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
 * Destination information relevant to capability-level routing.
 * @export
 * @interface DeliveryDestination
 */
export interface DeliveryDestination {
    /**
     *
     * @type {string}
     * @memberof DeliveryDestination
     */
    addressText?: string | null;
    /**
     *
     * @type {string}
     * @memberof DeliveryDestination
     */
    countryCode: string;
    /**
     *
     * @type {string}
     * @memberof DeliveryDestination
     */
    locality?: string | null;
    /**
     *
     * @type {string}
     * @memberof DeliveryDestination
     */
    postalCode?: string | null;
    /**
     *
     * @type {string}
     * @memberof DeliveryDestination
     */
    region?: string | null;
}
/**
 * Check if a given object implements the DeliveryDestination interface.
 */
export declare function instanceOfDeliveryDestination(value: object): value is DeliveryDestination;
export declare function DeliveryDestinationFromJSON(json: any): DeliveryDestination;
export declare function DeliveryDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeliveryDestination;
export declare function DeliveryDestinationToJSON(json: any): DeliveryDestination;
export declare function DeliveryDestinationToJSONTyped(value?: DeliveryDestination | null, ignoreDiscriminator?: boolean): any;
