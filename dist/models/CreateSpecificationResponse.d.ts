/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { SpecificationResource } from './SpecificationResource';
/**
 * Result of explicit canonical-demand retention.
 * @export
 * @interface CreateSpecificationResponse
 */
export interface CreateSpecificationResponse {
    /**
     *
     * @type {CreateSpecificationResponseSchemaNameEnum}
     * @memberof CreateSpecificationResponse
     */
    schemaName?: CreateSpecificationResponseSchemaNameEnum;
    /**
     *
     * @type {CreateSpecificationResponseSchemaVersionEnum}
     * @memberof CreateSpecificationResponse
     */
    schemaVersion?: CreateSpecificationResponseSchemaVersionEnum;
    /**
     *
     * @type {SpecificationResource}
     * @memberof CreateSpecificationResponse
     */
    specification: SpecificationResource;
    /**
     *
     * @type {CreateSpecificationResponseStatusEnum}
     * @memberof CreateSpecificationResponse
     */
    status: CreateSpecificationResponseStatusEnum;
}
/**
 * @export
 */
export declare const CreateSpecificationResponseSchemaNameEnum: {
    readonly GnawwSpecificationCreateResult: "gnaww.specification_create_result";
};
export type CreateSpecificationResponseSchemaNameEnum = typeof CreateSpecificationResponseSchemaNameEnum[keyof typeof CreateSpecificationResponseSchemaNameEnum];
/**
 * @export
 */
export declare const CreateSpecificationResponseSchemaVersionEnum: {
    readonly _01: "0.1";
};
export type CreateSpecificationResponseSchemaVersionEnum = typeof CreateSpecificationResponseSchemaVersionEnum[keyof typeof CreateSpecificationResponseSchemaVersionEnum];
/**
 * @export
 */
export declare const CreateSpecificationResponseStatusEnum: {
    readonly Created: "created";
    readonly Existing: "existing";
};
export type CreateSpecificationResponseStatusEnum = typeof CreateSpecificationResponseStatusEnum[keyof typeof CreateSpecificationResponseStatusEnum];
/**
 * Check if a given object implements the CreateSpecificationResponse interface.
 */
export declare function instanceOfCreateSpecificationResponse(value: object): value is CreateSpecificationResponse;
export declare function CreateSpecificationResponseFromJSON(json: any): CreateSpecificationResponse;
export declare function CreateSpecificationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSpecificationResponse;
export declare function CreateSpecificationResponseToJSON(json: any): CreateSpecificationResponse;
export declare function CreateSpecificationResponseToJSONTyped(value?: CreateSpecificationResponse | null, ignoreDiscriminator?: boolean): any;
