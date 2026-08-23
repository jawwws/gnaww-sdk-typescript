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
exports.InterpretationApi = void 0;
const runtime = require("../runtime");
const ContinuePrintRequirementRequest_1 = require("../models/ContinuePrintRequirementRequest");
const ContinuePrintRequirementResponse_1 = require("../models/ContinuePrintRequirementResponse");
const InterpretPrintRequirementRequest_1 = require("../models/InterpretPrintRequirementRequest");
const InterpretPrintRequirementResponse_1 = require("../models/InterpretPrintRequirementResponse");
/**
 *
 */
class InterpretationApi extends runtime.BaseAPI {
    /**
     * Creates request options for continuePrintRequirementInterpretation without sending the request
     */
    continuePrintRequirementInterpretationRequestOpts(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['continuePrintRequirementRequest'] == null) {
                throw new runtime.RequiredError('continuePrintRequirementRequest', 'Required parameter "continuePrintRequirementRequest" was null or undefined when calling continuePrintRequirementInterpretation().');
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
            let urlPath = `/v1/interpret/continue`;
            return {
                path: urlPath,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, ContinuePrintRequirementRequest_1.ContinuePrintRequirementRequestToJSON)(requestParameters['continuePrintRequirementRequest']),
            };
        });
    }
    /**
     * Continue a review state through Gnaww-owned production questions.
     * Continue Print Requirement Interpretation
     */
    continuePrintRequirementInterpretationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield this.continuePrintRequirementInterpretationRequestOpts(requestParameters);
            const response = yield this.request(requestOptions, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, ContinuePrintRequirementResponse_1.ContinuePrintRequirementResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Continue a review state through Gnaww-owned production questions.
     * Continue Print Requirement Interpretation
     */
    continuePrintRequirementInterpretation(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.continuePrintRequirementInterpretationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Creates request options for interpretPrintRequirement without sending the request
     */
    interpretPrintRequirementRequestOpts(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['interpretPrintRequirementRequest'] == null) {
                throw new runtime.RequiredError('interpretPrintRequirementRequest', 'Required parameter "interpretPrintRequirementRequest" was null or undefined when calling interpretPrintRequirement().');
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
            let urlPath = `/v1/interpret`;
            return {
                path: urlPath,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, InterpretPrintRequirementRequest_1.InterpretPrintRequirementRequestToJSON)(requestParameters['interpretPrintRequirementRequest']),
            };
        });
    }
    /**
     * Interpret ordinary input without forcing review states into SpecMatch.
     * Interpret Print Requirement
     */
    interpretPrintRequirementRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield this.interpretPrintRequirementRequestOpts(requestParameters);
            const response = yield this.request(requestOptions, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, InterpretPrintRequirementResponse_1.InterpretPrintRequirementResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Interpret ordinary input without forcing review states into SpecMatch.
     * Interpret Print Requirement
     */
    interpretPrintRequirement(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.interpretPrintRequirementRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.InterpretationApi = InterpretationApi;
