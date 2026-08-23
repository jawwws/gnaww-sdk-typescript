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
exports.HealthApi = void 0;
const runtime = require("../runtime");
const HealthResponse_1 = require("../models/HealthResponse");
/**
 *
 */
class HealthApi extends runtime.BaseAPI {
    /**
     * Creates request options for getApiLiveness without sending the request
     */
    getApiLivenessRequestOpts() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            let urlPath = `/health/live`;
            return {
                path: urlPath,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            };
        });
    }
    /**
     * Return process liveness without probing downstream dependencies.
     * Liveness
     */
    getApiLivenessRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield this.getApiLivenessRequestOpts();
            const response = yield this.request(requestOptions, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, HealthResponse_1.HealthResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Return process liveness without probing downstream dependencies.
     * Liveness
     */
    getApiLiveness(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getApiLivenessRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Creates request options for getApiReadiness without sending the request
     */
    getApiReadinessRequestOpts() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            let urlPath = `/health/ready`;
            return {
                path: urlPath,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            };
        });
    }
    /**
     * Return whether this instance can receive routed traffic.
     * Readiness
     */
    getApiReadinessRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield this.getApiReadinessRequestOpts();
            const response = yield this.request(requestOptions, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, HealthResponse_1.HealthResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Return whether this instance can receive routed traffic.
     * Readiness
     */
    getApiReadiness(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getApiReadinessRaw(initOverrides);
            return yield response.value();
        });
    }
}
exports.HealthApi = HealthApi;
