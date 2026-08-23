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
exports.SpecMatchApi = void 0;
const runtime = require("../runtime");
const MatchPrintDemandRequest_1 = require("../models/MatchPrintDemandRequest");
const MatchPrintDemandResponse_1 = require("../models/MatchPrintDemandResponse");
const MatchPrintDemandUniverseRequest_1 = require("../models/MatchPrintDemandUniverseRequest");
const MatchPrintDemandUniverseResponse_1 = require("../models/MatchPrintDemandUniverseResponse");
/**
 *
 */
class SpecMatchApi extends runtime.BaseAPI {
    /**
     * Creates request options for matchPrintDemand without sending the request
     */
    matchPrintDemandRequestOpts(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['matchPrintDemandRequest'] == null) {
                throw new runtime.RequiredError('matchPrintDemandRequest', 'Required parameter "matchPrintDemandRequest" was null or undefined when calling matchPrintDemand().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (requestParameters['xGnawwWorkspaceId'] != null) {
                headerParameters['X-Gnaww-Workspace-Id'] = String(requestParameters['xGnawwWorkspaceId']);
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-Gnaww-API-Key"] = yield this.configuration.apiKey("X-Gnaww-API-Key"); // GnawwApiKey authentication
            }
            let urlPath = `/v1/matches`;
            return {
                path: urlPath,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, MatchPrintDemandRequest_1.MatchPrintDemandRequestToJSON)(requestParameters['matchPrintDemandRequest']),
            };
        });
    }
    /**
     * Run deterministic SpecMatch for one explicit capability target.
     * Match Print Demand
     */
    matchPrintDemandRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield this.matchPrintDemandRequestOpts(requestParameters);
            const response = yield this.request(requestOptions, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, MatchPrintDemandResponse_1.MatchPrintDemandResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Run deterministic SpecMatch for one explicit capability target.
     * Match Print Demand
     */
    matchPrintDemand(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.matchPrintDemandRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Creates request options for matchPrintDemandUniverse without sending the request
     */
    matchPrintDemandUniverseRequestOpts(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['matchPrintDemandUniverseRequest'] == null) {
                throw new runtime.RequiredError('matchPrintDemandUniverseRequest', 'Required parameter "matchPrintDemandUniverseRequest" was null or undefined when calling matchPrintDemandUniverse().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (requestParameters['xGnawwWorkspaceId'] != null) {
                headerParameters['X-Gnaww-Workspace-Id'] = String(requestParameters['xGnawwWorkspaceId']);
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-Gnaww-API-Key"] = yield this.configuration.apiKey("X-Gnaww-API-Key"); // GnawwApiKey authentication
            }
            let urlPath = `/v1/matches/universe`;
            return {
                path: urlPath,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, MatchPrintDemandUniverseRequest_1.MatchPrintDemandUniverseRequestToJSON)(requestParameters['matchPrintDemandUniverseRequest']),
            };
        });
    }
    /**
     * Evaluate demand against the authorised published producer universe.
     * Match Print Demand Universe
     */
    matchPrintDemandUniverseRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield this.matchPrintDemandUniverseRequestOpts(requestParameters);
            const response = yield this.request(requestOptions, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, MatchPrintDemandUniverseResponse_1.MatchPrintDemandUniverseResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Evaluate demand against the authorised published producer universe.
     * Match Print Demand Universe
     */
    matchPrintDemandUniverse(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.matchPrintDemandUniverseRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.SpecMatchApi = SpecMatchApi;
