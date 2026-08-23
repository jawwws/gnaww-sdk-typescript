"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProducerCapabilityProfileSourceEnum = exports.ProducerCapabilitiesApi = void 0;
const runtime = require("../runtime");
const ProducerCapabilityResource_1 = require("../models/ProducerCapabilityResource");
/**
 *
 */
class ProducerCapabilitiesApi extends runtime.BaseAPI {
    /**
     * Creates request options for getProducerCapabilityProfile without sending the request
     */
    getProducerCapabilityProfileRequestOpts(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['profileId'] == null) {
                throw new runtime.RequiredError('profileId', 'Required parameter "profileId" was null or undefined when calling getProducerCapabilityProfile().');
            }
            const queryParameters = {};
            if (requestParameters['source'] != null) {
                queryParameters['source'] = requestParameters['source'];
            }
            const headerParameters = {};
            if (requestParameters['xGnawwWorkspaceId'] != null) {
                headerParameters['X-Gnaww-Workspace-Id'] = String(requestParameters['xGnawwWorkspaceId']);
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-Gnaww-API-Key"] = yield this.configuration.apiKey("X-Gnaww-API-Key"); // GnawwApiKey authentication
            }
            let urlPath = `/v1/producer-capabilities/{profile_id}`;
            urlPath = urlPath.replace('{profile_id}', encodeURIComponent(String(requestParameters['profileId'])));
            return {
                path: urlPath,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            };
        });
    }
    /**
     * Return the safe capability-only projection used to explain SpecMatch.
     * Get Producer Capability Profile
     */
    getProducerCapabilityProfileRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield this.getProducerCapabilityProfileRequestOpts(requestParameters);
            const response = yield this.request(requestOptions, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, ProducerCapabilityResource_1.ProducerCapabilityResourceFromJSON)(jsonValue));
        });
    }
    /**
     * Return the safe capability-only projection used to explain SpecMatch.
     * Get Producer Capability Profile
     */
    getProducerCapabilityProfile(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getProducerCapabilityProfileRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.ProducerCapabilitiesApi = ProducerCapabilitiesApi;
/**
 * @export
 */
exports.GetProducerCapabilityProfileSourceEnum = {
    PublishedProfile: 'published_profile',
    DemoFixture: 'demo_fixture',
    ApiDerivedDemo: 'api_derived_demo'
};
