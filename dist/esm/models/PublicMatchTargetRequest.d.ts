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
 * Explicit capability target for one public SpecMatch operation.
 * @export
 * @interface PublicMatchTargetRequest
 */
export interface PublicMatchTargetRequest {
    /**
     *
     * @type {string}
     * @memberof PublicMatchTargetRequest
     */
    producerProfileId: string;
    /**
     *
     * @type {PublicMatchTargetRequestSourceEnum}
     * @memberof PublicMatchTargetRequest
     */
    source: PublicMatchTargetRequestSourceEnum;
}
/**
 * @export
 */
export declare const PublicMatchTargetRequestSourceEnum: {
    readonly PublishedProfile: "published_profile";
    readonly DemoFixture: "demo_fixture";
    readonly ApiDerivedDemo: "api_derived_demo";
};
export type PublicMatchTargetRequestSourceEnum = typeof PublicMatchTargetRequestSourceEnum[keyof typeof PublicMatchTargetRequestSourceEnum];
/**
 * Check if a given object implements the PublicMatchTargetRequest interface.
 */
export declare function instanceOfPublicMatchTargetRequest(value: object): value is PublicMatchTargetRequest;
export declare function PublicMatchTargetRequestFromJSON(json: any): PublicMatchTargetRequest;
export declare function PublicMatchTargetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicMatchTargetRequest;
export declare function PublicMatchTargetRequestToJSON(json: any): PublicMatchTargetRequest;
export declare function PublicMatchTargetRequestToJSONTyped(value?: PublicMatchTargetRequest | null, ignoreDiscriminator?: boolean): any;
