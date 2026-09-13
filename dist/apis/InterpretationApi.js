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
exports.InterpretationApi = void 0;
const runtime = require("../runtime");
const ContinueInterpretationRequestV02_1 = require("../models/ContinueInterpretationRequestV02");
const InterpretPrintRequirementRequest_1 = require("../models/InterpretPrintRequirementRequest");
const InterpretationResultV02_1 = require("../models/InterpretationResultV02");
/**
 *
 */
class InterpretationApi extends runtime.BaseAPI {
    /**
     * Creates request options for continuePrintRequirementInterpretation without sending the request
     */
    continuePrintRequirementInterpretationRequestOpts(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['continueInterpretationRequestV02'] == null) {
                throw new runtime.RequiredError('continueInterpretationRequestV02', 'Required parameter "continueInterpretationRequestV02" was null or undefined when calling continuePrintRequirementInterpretation().');
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
                body: (0, ContinueInterpretationRequestV02_1.ContinueInterpretationRequestV02ToJSON)(requestParameters['continueInterpretationRequestV02']),
            };
        });
    }
    /**
     * Continue a review state and return the same interpretation envelope.
     * Continue Print Requirement Interpretation
     */
    continuePrintRequirementInterpretationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield this.continuePrintRequirementInterpretationRequestOpts(requestParameters);
            const response = yield this.request(requestOptions, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, InterpretationResultV02_1.InterpretationResultV02FromJSON)(jsonValue));
        });
    }
    /**
     * Continue a review state and return the same interpretation envelope.
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
     * Interpret ordinary input and enrich review-safe functional solution intent.
     * Interpret Print Requirement
     */
    interpretPrintRequirementRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = yield this.interpretPrintRequirementRequestOpts(requestParameters);
            const response = yield this.request(requestOptions, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, InterpretationResultV02_1.InterpretationResultV02FromJSON)(jsonValue));
        });
    }
    /**
     * Interpret ordinary input and enrich review-safe functional solution intent.
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
