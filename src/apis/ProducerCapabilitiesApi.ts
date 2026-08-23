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

import * as runtime from '../runtime';
import {
    type MatchPrintDemandDefaultResponse,
    MatchPrintDemandDefaultResponseFromJSON,
    MatchPrintDemandDefaultResponseToJSON,
} from '../models/MatchPrintDemandDefaultResponse';
import {
    type ProducerCapabilityResource,
    ProducerCapabilityResourceFromJSON,
    ProducerCapabilityResourceToJSON,
} from '../models/ProducerCapabilityResource';

export interface GetProducerCapabilityProfileRequest {
    profileId: string;
    source?: GetProducerCapabilityProfileSourceEnum;
    xGnawwWorkspaceId?: string | null;
}

/**
 *
 */
export class ProducerCapabilitiesApi extends runtime.BaseAPI {

    /**
     * Creates request options for getProducerCapabilityProfile without sending the request
     */
    async getProducerCapabilityProfileRequestOpts(requestParameters: GetProducerCapabilityProfileRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['profileId'] == null) {
            throw new runtime.RequiredError(
                'profileId',
                'Required parameter "profileId" was null or undefined when calling getProducerCapabilityProfile().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['source'] != null) {
            queryParameters['source'] = requestParameters['source'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xGnawwWorkspaceId'] != null) {
            headerParameters['X-Gnaww-Workspace-Id'] = String(requestParameters['xGnawwWorkspaceId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Gnaww-API-Key"] = await this.configuration.apiKey("X-Gnaww-API-Key"); // GnawwApiKey authentication
        }


        let urlPath = `/v1/producer-capabilities/{profile_id}`;
        urlPath = urlPath.replace('{profile_id}', encodeURIComponent(String(requestParameters['profileId'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Return the safe capability-only projection used to explain SpecMatch.
     * Get Producer Capability Profile
     */
    async getProducerCapabilityProfileRaw(requestParameters: GetProducerCapabilityProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProducerCapabilityResource>> {
        const requestOptions = await this.getProducerCapabilityProfileRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProducerCapabilityResourceFromJSON(jsonValue));
    }

    /**
     * Return the safe capability-only projection used to explain SpecMatch.
     * Get Producer Capability Profile
     */
    async getProducerCapabilityProfile(requestParameters: GetProducerCapabilityProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProducerCapabilityResource> {
        const response = await this.getProducerCapabilityProfileRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetProducerCapabilityProfileSourceEnum = {
    PublishedProfile: 'published_profile',
    DemoFixture: 'demo_fixture',
    ApiDerivedDemo: 'api_derived_demo'
} as const;
export type GetProducerCapabilityProfileSourceEnum = typeof GetProducerCapabilityProfileSourceEnum[keyof typeof GetProducerCapabilityProfileSourceEnum];
