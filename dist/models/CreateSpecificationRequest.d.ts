/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { Gjs } from './Gjs';
import type { SpecificationExternalReference } from './SpecificationExternalReference';
import type { SpecificationFieldProvenance } from './SpecificationFieldProvenance';
/**
 * Explicitly retain one completed canonical Gnaww Job Specification.
 * @export
 * @interface CreateSpecificationRequest
 */
export interface CreateSpecificationRequest {
    /**
     *
     * @type {Array<SpecificationExternalReference>}
     * @memberof CreateSpecificationRequest
     */
    externalReferences?: Array<SpecificationExternalReference>;
    /**
     *
     * @type {Array<SpecificationFieldProvenance>}
     * @memberof CreateSpecificationRequest
     */
    fieldProvenance?: Array<SpecificationFieldProvenance>;
    /**
     *
     * @type {Gjs}
     * @memberof CreateSpecificationRequest
     */
    gjs: Gjs;
    /**
     *
     * @type {string}
     * @memberof CreateSpecificationRequest
     */
    idempotencyKey?: string | null;
    /**
     *
     * @type {CreateSpecificationRequestSchemaNameEnum}
     * @memberof CreateSpecificationRequest
     */
    schemaName?: CreateSpecificationRequestSchemaNameEnum;
    /**
     *
     * @type {CreateSpecificationRequestSchemaVersionEnum}
     * @memberof CreateSpecificationRequest
     */
    schemaVersion?: CreateSpecificationRequestSchemaVersionEnum;
}
/**
 * @export
 */
export declare const CreateSpecificationRequestSchemaNameEnum: {
    readonly GnawwSpecificationCreateRequest: "gnaww.specification_create_request";
};
export type CreateSpecificationRequestSchemaNameEnum = typeof CreateSpecificationRequestSchemaNameEnum[keyof typeof CreateSpecificationRequestSchemaNameEnum];
/**
 * @export
 */
export declare const CreateSpecificationRequestSchemaVersionEnum: {
    readonly _01: "0.1";
};
export type CreateSpecificationRequestSchemaVersionEnum = typeof CreateSpecificationRequestSchemaVersionEnum[keyof typeof CreateSpecificationRequestSchemaVersionEnum];
/**
 * Check if a given object implements the CreateSpecificationRequest interface.
 */
export declare function instanceOfCreateSpecificationRequest(value: object): value is CreateSpecificationRequest;
export declare function CreateSpecificationRequestFromJSON(json: any): CreateSpecificationRequest;
export declare function CreateSpecificationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSpecificationRequest;
export declare function CreateSpecificationRequestToJSON(json: any): CreateSpecificationRequest;
export declare function CreateSpecificationRequestToJSONTyped(value?: CreateSpecificationRequest | null, ignoreDiscriminator?: boolean): any;
