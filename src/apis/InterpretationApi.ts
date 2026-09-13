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
    type ContinueInterpretationRequestV02,
    ContinueInterpretationRequestV02FromJSON,
    ContinueInterpretationRequestV02ToJSON,
} from '../models/ContinueInterpretationRequestV02';
import {
    type ContinuePrintRequirementInterpretationDefaultResponse,
    ContinuePrintRequirementInterpretationDefaultResponseFromJSON,
    ContinuePrintRequirementInterpretationDefaultResponseToJSON,
} from '../models/ContinuePrintRequirementInterpretationDefaultResponse';
import {
    type InterpretPrintRequirementDefaultResponse,
    InterpretPrintRequirementDefaultResponseFromJSON,
    InterpretPrintRequirementDefaultResponseToJSON,
} from '../models/InterpretPrintRequirementDefaultResponse';
import {
    type InterpretPrintRequirementRequest,
    InterpretPrintRequirementRequestFromJSON,
    InterpretPrintRequirementRequestToJSON,
} from '../models/InterpretPrintRequirementRequest';
import {
    type InterpretationResultV02,
    InterpretationResultV02FromJSON,
    InterpretationResultV02ToJSON,
} from '../models/InterpretationResultV02';

export interface ContinuePrintRequirementInterpretationRequest {
    continueInterpretationRequestV02: ContinueInterpretationRequestV02;
    xGnawwWorkspaceId?: string | null;
}

export interface InterpretPrintRequirementOperationRequest {
    interpretPrintRequirementRequest: InterpretPrintRequirementRequest;
    xGnawwWorkspaceId?: string | null;
}

/**
 *
 */
export class InterpretationApi extends runtime.BaseAPI {

    /**
     * Creates request options for continuePrintRequirementInterpretation without sending the request
     */
    async continuePrintRequirementInterpretationRequestOpts(requestParameters: ContinuePrintRequirementInterpretationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['continueInterpretationRequestV02'] == null) {
            throw new runtime.RequiredError(
                'continueInterpretationRequestV02',
                'Required parameter "continueInterpretationRequestV02" was null or undefined when calling continuePrintRequirementInterpretation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xGnawwWorkspaceId'] != null) {
            headerParameters['X-Gnaww-Workspace-Id'] = String(requestParameters['xGnawwWorkspaceId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Gnaww-API-Key"] = await this.configuration.apiKey("X-Gnaww-API-Key"); // GnawwApiKey authentication
        }


        let urlPath = `/v1/interpret/continue`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ContinueInterpretationRequestV02ToJSON(requestParameters['continueInterpretationRequestV02']),
        };
    }

    /**
     * Continue a review state and return the same interpretation envelope.
     * Continue Print Requirement Interpretation
     */
    async continuePrintRequirementInterpretationRaw(requestParameters: ContinuePrintRequirementInterpretationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InterpretationResultV02>> {
        const requestOptions = await this.continuePrintRequirementInterpretationRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InterpretationResultV02FromJSON(jsonValue));
    }

    /**
     * Continue a review state and return the same interpretation envelope.
     * Continue Print Requirement Interpretation
     */
    async continuePrintRequirementInterpretation(requestParameters: ContinuePrintRequirementInterpretationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InterpretationResultV02> {
        const response = await this.continuePrintRequirementInterpretationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for interpretPrintRequirement without sending the request
     */
    async interpretPrintRequirementRequestOpts(requestParameters: InterpretPrintRequirementOperationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['interpretPrintRequirementRequest'] == null) {
            throw new runtime.RequiredError(
                'interpretPrintRequirementRequest',
                'Required parameter "interpretPrintRequirementRequest" was null or undefined when calling interpretPrintRequirement().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xGnawwWorkspaceId'] != null) {
            headerParameters['X-Gnaww-Workspace-Id'] = String(requestParameters['xGnawwWorkspaceId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Gnaww-API-Key"] = await this.configuration.apiKey("X-Gnaww-API-Key"); // GnawwApiKey authentication
        }


        let urlPath = `/v1/interpret`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InterpretPrintRequirementRequestToJSON(requestParameters['interpretPrintRequirementRequest']),
        };
    }

    /**
     * Interpret ordinary input and enrich review-safe functional solution intent.
     * Interpret Print Requirement
     */
    async interpretPrintRequirementRaw(requestParameters: InterpretPrintRequirementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InterpretationResultV02>> {
        const requestOptions = await this.interpretPrintRequirementRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InterpretationResultV02FromJSON(jsonValue));
    }

    /**
     * Interpret ordinary input and enrich review-safe functional solution intent.
     * Interpret Print Requirement
     */
    async interpretPrintRequirement(requestParameters: InterpretPrintRequirementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InterpretationResultV02> {
        const response = await this.interpretPrintRequirementRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
