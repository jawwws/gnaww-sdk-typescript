/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import * as runtime from '../runtime';
import { type CreateSpecificationRequest } from '../models/CreateSpecificationRequest';
import { type CreateSpecificationResponse } from '../models/CreateSpecificationResponse';
import { type SpecificationResource } from '../models/SpecificationResource';
export interface CreateSpecificationOperationRequest {
    createSpecificationRequest: CreateSpecificationRequest;
    xGnawwWorkspaceId?: string | null;
}
export interface GetSpecificationRequest {
    specificationId: string;
    xGnawwWorkspaceId?: string | null;
}
/**
 *
 */
export declare class SpecificationsApi extends runtime.BaseAPI {
    /**
     * Creates request options for createSpecification without sending the request
     */
    createSpecificationRequestOpts(requestParameters: CreateSpecificationOperationRequest): Promise<runtime.RequestOpts>;
    /**
     * Explicitly retain one completed canonical Gnaww Job Specification.
     * Create Specification
     */
    createSpecificationRaw(requestParameters: CreateSpecificationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateSpecificationResponse>>;
    /**
     * Explicitly retain one completed canonical Gnaww Job Specification.
     * Create Specification
     */
    createSpecification(requestParameters: CreateSpecificationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateSpecificationResponse>;
    /**
     * Creates request options for getSpecification without sending the request
     */
    getSpecificationRequestOpts(requestParameters: GetSpecificationRequest): Promise<runtime.RequestOpts>;
    /**
     * Read one safe specification resource visible to the request context.
     * Get Specification
     */
    getSpecificationRaw(requestParameters: GetSpecificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SpecificationResource>>;
    /**
     * Read one safe specification resource visible to the request context.
     * Get Specification
     */
    getSpecification(requestParameters: GetSpecificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SpecificationResource>;
}
