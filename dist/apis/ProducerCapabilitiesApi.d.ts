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
import * as runtime from '../runtime';
import { type ProducerCapabilityResource } from '../models/ProducerCapabilityResource';
export interface GetProducerCapabilityProfileRequest {
    profileId: string;
    source?: GetProducerCapabilityProfileSourceEnum;
    xGnawwWorkspaceId?: string | null;
}
/**
 *
 */
export declare class ProducerCapabilitiesApi extends runtime.BaseAPI {
    /**
     * Creates request options for getProducerCapabilityProfile without sending the request
     */
    getProducerCapabilityProfileRequestOpts(requestParameters: GetProducerCapabilityProfileRequest): Promise<runtime.RequestOpts>;
    /**
     * Return the safe capability-only projection used to explain SpecMatch.
     * Get Producer Capability Profile
     */
    getProducerCapabilityProfileRaw(requestParameters: GetProducerCapabilityProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProducerCapabilityResource>>;
    /**
     * Return the safe capability-only projection used to explain SpecMatch.
     * Get Producer Capability Profile
     */
    getProducerCapabilityProfile(requestParameters: GetProducerCapabilityProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProducerCapabilityResource>;
}
/**
 * @export
 */
export declare const GetProducerCapabilityProfileSourceEnum: {
    readonly PublishedProfile: "published_profile";
    readonly DemoFixture: "demo_fixture";
    readonly ApiDerivedDemo: "api_derived_demo";
};
export type GetProducerCapabilityProfileSourceEnum = typeof GetProducerCapabilityProfileSourceEnum[keyof typeof GetProducerCapabilityProfileSourceEnum];
